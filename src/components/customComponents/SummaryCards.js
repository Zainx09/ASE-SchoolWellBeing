import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStudentData } from "../../redux/actions/DataActions";
import metaData from "../../extras/metaData.json";
let reportParameters = metaData?.["chartMetaData"];
// const summ = [
//   {
//     title: "mood",
//     desc: "Avg mood",
//     value: 3.45,
//     theme: "green",
//   },
//   {
//     title: "strees",
//     desc: "Avg strees",
//     value: 2.45,
//     theme: "red",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "blue",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "purple",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "orange",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "blue",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "maroon",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "pink",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "cyan",
//   },
//   {
//     title: "strees",
//     desc: "Avg mood",
//     value: 2.45,
//     theme: "gold",
//   },
// ];

const SummaryCards = (props) => {
  let summ = reportParameters?.map((param) => {
    let value = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
    return {
      title: param.parameter,
      desc: `Avg ${param.parameter}`,
      value,
      theme: param.chartColor,
      good: value + 2.5 >= param.good,
    };
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      {summ?.map((obj) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 10px",
            backgroundColor: obj.theme || "white",
            margin: "0px 3px",
            borderRadius: 6,
            color: "white",
            fontSize: 16,
          }}
        >
          <text
            style={{
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {obj.title?.toUpperCase()}
          </text>
          <text style={{ fontSize: 15 }}>{obj.desc}</text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <text>{`${obj.value} / 10 (${((obj.value / 10) * 100)?.toFixed(
              0
            )}%)`}</text>

            <text style={{fontSize:18}}>{obj.good ? "🙂" : "🙁"}</text>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentData: state?.data?.studentData,
});

const mapDispatchToProps = {
  fetchStudentData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryCards);
