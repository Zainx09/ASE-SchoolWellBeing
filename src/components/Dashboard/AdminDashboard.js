import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { fetchStudentData } from "../../redux/actions/DataActions";
import { Table, Card, Row, Col, Tooltip, Progress } from "antd";
import ReactECharts from "echarts-for-react";
import { Link } from "react-router-dom";
import {
  getIndividualChartOptions,
  getCombinedChartOptions,
  getReportParamCategoryCount,
  getReportParamAgeCategoryCount,
  getReportParamGenderCategoryCount,
  getSeperateTrendChartOptions,
} from "../../services/generateEChartOption";
import WidgetBox from "../customComponents/WidgetBox";
import SummaryCards from "../customComponents/SummaryCards";
import CustomHeader from "../customComponents/CustomHeader";
import ParamsTrend from "../customComponents/ParamsTrend";

import metaData from "../../extras/metaData.json";
import { UserContext } from "../../contexts/UserContext";

let chartMetaData = metaData?.["chartMetaData"];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id) => <Link to={`/student-dashboard/${id}`}>{id}</Link>,
    // render: (id) => (
    //   <a href={`/student-report/${id}`} target="_blank" rel="noopener noreferrer">
    //     {id}
    //   </a>
    // )
  },
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    // defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  { title: "Gender", dataIndex: "gender", key: "gender" },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
    // defaultSortOrder: "descend",
    sorter: (a, b) => a.class - b.class,
  },
  { title: "Section", dataIndex: "section", key: "section" },
  ...chartMetaData?.map((report) => ({
    title: report?.parameter,
    dataIndex: report?.key,
    key: report?.key,
    // defaultSortOrder: "descend",
    sorter: (a, b) => a?.[report?.key] - b?.[report?.key],
    render: (value) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Progress
          percent={value * 10}
          // showInfo={false}
          strokeColor={report?.chartColor}
          format={(percent) => (
            <text style={{ fontSize: 11 }}>
              {percent > 30
                ? `${percent / 10} / 10`
                : percent > 20
                ? percent / 10
                : ""}
            </text>
          )}
          // type={'dashboared'}
          percentPosition={{ align: "end", type: "inner" }}
          size={{ width: "100%", height: 16 }}
        />
      </div>
    ),
  })),
];

const AdminDashboard = ({ rawStudentData, fetchStudentData }) => {
  const { user } = useContext(UserContext);
  const [studentData, setStudentData] = useState([]);
  const [trendChartOptions, setTrendChartOptions] = useState({});
  const [seperateTrendChartOptions, setSeperateTrendChartOptions] = useState(
    []
  );
  const [categoryChartOptions, setCategoryChartOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [chartExpanded, setChartExpanded] = useState(false);

  const getOptions = async () => {
    let combinedData = getCombinedChartOptions(
      studentData?.map((studentObj) => studentObj?.reports),
      "Average Ratings"
    );

    if (combinedData) {
      setTrendChartOptions(combinedData);
    }

    let seperateChartOptions = chartMetaData?.map((param) =>
      getSeperateTrendChartOptions(
        studentData?.map((studentObj) => studentObj?.reports),
        "Average Rating",
        param.key
      )
    );

    if (seperateChartOptions?.length) {
      setSeperateTrendChartOptions(seperateChartOptions);
    }

    let categoryOptionsList = [];
    chartMetaData?.forEach((obj) => {
      let option = getReportParamCategoryCount(
        studentData,
        obj.key,
        obj.parameter
      );
      let agePieOptions = getReportParamAgeCategoryCount(
        studentData,
        obj.key,
        obj.parameter
      );
      let genderPieOptions = getReportParamGenderCategoryCount(
        studentData,
        obj.key,
        obj.parameter
      );
      // alert(JSON.stringify(agePieOptions))
      categoryOptionsList.push({
        paramCategory: option,
        ageCategory: agePieOptions,
        genderCategory: genderPieOptions,
      });
    });

    setCategoryChartOptions(categoryOptionsList);

    // if (moodCategoryCounts) {
    //   setMoodChartOptions(moodCategoryCounts);
    // }
  };

  const calculateAverages = () => {
    return studentData?.map((student) => {
      const reportKeys = Object.keys(student.reports[0]).filter(
        (key) => key !== "date"
      );
      const averages = {};

      reportKeys.forEach((key) => {
        const sum = student.reports.reduce(
          (acc, report) => acc + report[key],
          0
        );
        averages[key] = sum / student.reports.length;
      });

      return {
        ...student,
        ...averages,
      };
    });
  };

  const getTableData = () => {
    const studentsWithAverages = calculateAverages();
    setTableData(studentsWithAverages || []);
  };

  const onChangeClassFilter = (value) => {
    if (value && rawStudentData) {
      setStudentData(
        rawStudentData?.filter((student) => student?.class == value)
      );
    } else {
      setStudentData(rawStudentData);
    }
  };

  useLayoutEffect(() => {
    if (user) {
      fetchStudentData();
    }
  }, [user]);

  useEffect(() => {
    if (!studentData?.length) {
      if (user.class) {
        onChangeClassFilter(user.class?.[0]);
      }else{
        onChangeClassFilter(null);
      }
      // setStudentData(rawStudentData);
    }
  }, [rawStudentData]);

  useEffect(() => {
    if (studentData) {
      getOptions();
      getTableData();
    }
  }, [studentData]);

  return (
    <div>
      <CustomHeader
        headerTitle={"Admin Dashboard"}
        totalCount={studentData?.length}
        onChangeClass={onChangeClassFilter}
        classes={user.class}
        showClassFilter
      />

      <SummaryCards />
      <WidgetBox
        style={{ margin: "10px 0px 4px 0px" }}
        title={"All Average Reports"}
        children={<ReactECharts option={trendChartOptions} />}
      />

      <Row style={{ marginTop: 5, paddingTop: 2, border: "0px solid red" }}>
        <Col
          span={24}
          style={{
            border: "0px solid",
            height: "100%",
          }}
        >
          <ParamsTrend optionsList={seperateTrendChartOptions} />
        </Col>
      </Row>

      <Row>
        {categoryChartOptions?.map((option) => (
          <Tooltip
            title={
              chartExpanded == option.paramCategory?.param
                ? "Click to Collapse"
                : "Click to Expand"
            }
          >
            <Col
              span={chartExpanded == option.paramCategory?.param ? 24 : 8}
              style={{
                border: "0px solid",
                height: "100%",
                padding: 4,
                cursor: "pointer",
              }}
              onClick={() => {
                setChartExpanded((prev) =>
                  prev == option.paramCategory?.param
                    ? false
                    : option.paramCategory?.param
                );
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <WidgetBox
                  style={{ width: "100%" }}
                  title={`${option.paramCategory?.param} Count`}
                  children={<ReactECharts option={option?.paramCategory} />}
                />
                {chartExpanded == option.paramCategory?.param && (
                  <WidgetBox
                    style={{ width: "100%" }}
                    title={`Age Category Count`}
                    children={<ReactECharts option={option?.ageCategory} />}
                  />
                )}
                {chartExpanded == option.paramCategory?.param && (
                  <WidgetBox
                    style={{ width: "100%" }}
                    title={`Gender Category Count`}
                    children={<ReactECharts option={option?.genderCategory} />}
                  />
                )}
              </div>
            </Col>
          </Tooltip>
        ))}
      </Row>

      <WidgetBox
        style={{ margin: "10px 0px" }}
        title={"Students Listing"}
        children={<Table dataSource={tableData || []} columns={columns} />}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  rawStudentData: state?.data?.studentData,
});

const mapDispatchToProps = {
  fetchStudentData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
