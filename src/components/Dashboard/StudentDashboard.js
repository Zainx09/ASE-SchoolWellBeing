import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { Card, Table, Row, Col } from "antd";
import Icon from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  fetchStudentData,
  fetchActionRequiredData,
} from "../../redux/actions/DataActions";
import ReactECharts from "echarts-for-react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import {
  getIndividualChartOptions,
  getCombinedChartOptions,
  getReportParamCategoryCount,
  getReportParamAgeCategoryCount,
  getReportParamGenderCategoryCount,
  getSeperateTrendChartOptions,
} from "../../services/generateEChartOption";
import CustomHeader from "../customComponents/CustomHeader";
import WidgetBox from "../customComponents/WidgetBox";
import SummaryCards from "../customComponents/SummaryCards";
import UpcomingEvents from "../customComponents/UpcomingEvents";
import StudentProfile from "../customComponents/StudentProfile";
import ParamsTrend from "../customComponents/ParamsTrend";
import RecommendationCards from "../customComponents/RecommendationCards";

import metaData from "../../extras/metaData.json";

let chartMetaData = metaData?.["chartMetaData"];

const StudentDashboard = ({
  fetchStudentData,
  fetchActionRequiredData,
  rawStudentData,
  rawActionsData,
}) => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState([]);
  const [trendChartOptions, setTrendChartOptions] = useState({});
  const [seperateTrendChartOptions, setSeperateTrendChartOptions] = useState(
    []
  );
  const [actionsData, setActionsData] = useState();
  const [allAvgs, setAllAvgs] = useState();

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
    // let categoryOptionsList = [];
    // chartMetaData?.forEach((obj) => {
    //   let option = getReportParamCategoryCount(
    //     studentData,
    //     obj.key,
    //     obj.parameter
    //   );
    //   let agePieOptions = getReportParamAgeCategoryCount(
    //     studentData,
    //     obj.key,
    //     obj.parameter
    //   );
    //   let genderPieOptions = getReportParamGenderCategoryCount(
    //     studentData,
    //     obj.key,
    //     obj.parameter
    //   );
    //   // alert(JSON.stringify(agePieOptions))
    //   categoryOptionsList.push({
    //     paramCategory: option,
    //     ageCategory: agePieOptions,
    //     genderCategory: genderPieOptions,
    //   });
    // });

    // setCategoryChartOptions(categoryOptionsList);

    // // if (moodCategoryCounts) {
    // //   setMoodChartOptions(moodCategoryCounts);
    // // }
  };

  const calculateAverages = (reports) => {
    // Initialize an object to store sum and count for each parameter
    const parameterStats = {};

    // Iterate through each report
    reports?.forEach((report) => {
      // Iterate through each key in the report (excluding 'date')
      Object.keys(report).forEach((key) => {
        if (key !== "date") {
          // Initialize sum and count for the parameter if not already initialized
          if (!parameterStats[key]) {
            parameterStats[key] = { sum: 0, count: 0 };
          }
          // Add parameter value to sum and increment count
          parameterStats[key].sum += report[key];
          parameterStats[key].count++;
        }
      });
    });

    // Calculate averages for each parameter
    const averages = {};
    Object.keys(parameterStats).forEach((key) => {
      averages[key] = parameterStats[key].sum / parameterStats[key].count;
    });

    // Calculate combined average for all reports
    const combinedAverage =
      reports.reduce((acc, report) => {
        let total = 0;
        let count = 0;
        Object.keys(report).forEach((key) => {
          if (key !== "date") {
            total += report[key];
            count++;
          }
        });
        return acc + total / count;
      }, 0) / reports.length;

    setAllAvgs({ averages, combinedAverage });
  };

  const findRangeForKey = (value, ranges) => {
    if (ranges) {
      for (const key in ranges) {
        const [min, max] = key?.split("-").map(Number);
        if (value >= min && value <= max) {
          return key;
        }
      }
    }
    return null; // Return null if no matching range is found
  };

  useLayoutEffect(() => {
    fetchStudentData();
    fetchActionRequiredData();
  }, [fetchStudentData]);

  useEffect(() => {
    if (rawStudentData && !studentData?.length && id) {
      let studentRecord = rawStudentData?.filter((data) => data.id == id);
      if (studentRecord) {
        // alert(JSON.stringify(studentRecord?.[0]?.reports))
        calculateAverages(studentRecord?.[0]?.reports);
        setStudentData(studentRecord);
      }
    }
  }, [rawStudentData, id]);

  useEffect(() => {
    if (rawActionsData) {
      setActionsData(rawActionsData);
    }
  }, [rawActionsData]);

  useEffect(() => {
    if (studentData) {
      getOptions();
    }
  }, [studentData]);

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <CustomHeader
        headerTitle={"Student Dashboard"}
        countTitle={"Overall Rating"}
        totalCount={allAvgs?.combinedAverage ?? 0}
        // onChangeClass={onChangeClassFilter}
      />

      {/* <SummaryCards /> */}
      {/* {JSON.stringify(actionsData)} */}
      <Row
        style={{ marginTop: 10, padding: "0px 10px", border: "0px solid red" }}
      >
        <Col
          span={7}
          style={{
            border: "0px solid",
            height: "100%",
            paddingRight: 10,
            height: 345,
          }}
        >
          <WidgetBox
            style={{
              margin: "0px 0px 4px 0px",
              backgroundColor: "#777777",
              border: "1px solid darkgrey",
              height: 345,
            }}
            titleStyle={{ color: "white" }}
            title={"Profile"}
            children={<StudentProfile studentData={studentData} />}
          />
        </Col>
        <Col
          span={17}
          style={{
            border: "0px solid",
            height: "100%",
          }}
        >
          <WidgetBox
            style={{ margin: "0px 0px 4px 0px" }}
            title={"All Reports"}
            children={<ReactECharts option={trendChartOptions} />}
          />
        </Col>
      </Row>

      <Row
        style={{ marginTop: 5, padding: "0px 10px", border: "0px solid red" }}
      >
        <Col
          span={0}
          style={{
            border: "0px solid",
            height: "100%",
            paddingRight: 10,
            height: 345,
          }}
        >
          <UpcomingEvents />
        </Col>
        <Col
          span={24}
          style={{
            border: "0px solid",
            height: "100%",
            // marginBottom: 50,
          }}
        >
          {/* <WidgetBox
            style={{ margin: "0px 0px 4px 0px" }}
            title={"Trend Chart"}
            children={<ReactECharts option={trendChartOptions} />}
          /> */}
          <ParamsTrend optionsList={seperateTrendChartOptions} />
        </Col>
      </Row>

      {/* {JSON.stringify(findRangeForKey(allAvgs?.averages?.mood, actionsData?.mood))} */}

      {!!actionsData && (
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            // flexWrap: "nowrap",
            padding: "0px 0px 0px 20px",
            marginBottom: 200,
          }}
        >
          {Object.keys(actionsData)?.map((param) => (
            <WidgetBox
              style={{
                margin: "0px 5px 0px 0px",
                width: "22%",
                border: "0px solid",
                marginTop: 5,
              }}
              title={param}
              headerRightContent={
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <text style={{ fontSize: 20, color: "black" }}>{param}</text>

                  <text>{allAvgs?.averages?.[param]}</text>
                </div>
              }
              children={
                // <div style={{ width: "100%", backgroundColor:'white', margin:'0px 10px', borderRadius:8}}>
                <RecommendationCards
                  data={
                    actionsData?.[param]?.[
                      findRangeForKey(
                        allAvgs?.averages?.[param],
                        actionsData?.[param]
                      )
                    ]
                  }
                  avg={allAvgs?.averages?.[param]}
                  param={param}
                />
              }
            />
          ))}
        </Row>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  rawStudentData: state.data.studentData,
  rawActionsData: state.data.actionsData,
});

const mapDispatchToProps = {
  fetchStudentData,
  fetchActionRequiredData,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
