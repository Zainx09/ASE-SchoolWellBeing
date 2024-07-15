import React, { useEffect, useState } from "react";
import { Card, List, Col, Row, Button, Checkbox } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Radio } from "antd";
import ReactECharts from "echarts-for-react";
import WidgetBox from "./WidgetBox";
import metaData from "../../extras/metaData.json";

let chartMetaData = metaData?.["chartMetaData"];

const ParamsTrend = (props) => {
  const { optionsList } = props;
  const [selectedReport, setSelectedReport] = useState(['mood', 'stress']);
  const [isMultipleReport, setIsMultipleReport] = useState(true);
  //   return <ReactECharts option={trendChartOptions}/>;

  useEffect(() => {
    if (!isMultipleReport) {
      setSelectedReport([chartMetaData?.[0]?.key]);
    }
  }, [isMultipleReport]);
  return (
    <WidgetBox
      style={{ margin: "0px 0px 4px 0px" }}
      title={"Trend Chart"}
      children={
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              border: "0px solid",
              justifyContent: "flex-end",
              paddingTop: 25,
              marginRight: 20,
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={isMultipleReport}
              onChange={(e)=>setIsMultipleReport(e.target.checked)}
              style={{ marginRight: 10 }}
            >
              Multiple Select
            </Checkbox>

            {chartMetaData?.map(({ parameter, key }) => (
              <Button
                type={!!selectedReport?.includes(key) && "primary"}
                style={{
                  borderRadius: 4,
                  border: !!selectedReport?.includes(key) && "1px solid white",
                }}
                onClick={() =>
                  setSelectedReport((prev) => {
                    if (isMultipleReport) {
                      if (prev?.includes(key)) {
                        if (prev?.length > 1) {
                          return prev?.filter((val) => val != key);
                        }
                      } else {
                        return [...prev, key];
                      }
                    } else {
                      setSelectedReport([key]);
                    }
                  })
                }
              >
                {parameter}
              </Button>
            ))}
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "row", flexWrap:'wrap'}}>
            {optionsList?.map(
              (option) =>
                selectedReport?.includes(option?.param) && (
                  <div style={{width:`${selectedReport ? selectedReport?.length > 2 ? 50 : 100/selectedReport?.length : 100}%`}}>
                    <ReactECharts option={option} />
                  </div>
                )
            )}
          </div>
        </div>
      }
    />
  );
};

export default ParamsTrend;
