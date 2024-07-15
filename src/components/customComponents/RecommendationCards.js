import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStudentData } from "../../redux/actions/DataActions";
import metaData from "../../extras/metaData.json";
let reportParameters = metaData?.["actionRanges"];

const RecommendationCards = (props) => {
  const { data, param, avg } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // marginTop: 10,
      }}
    >
      <text style={{ fontSize: 20, color: "black" }}>{param}</text>

      <text>{avg}</text>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentData: state?.data?.studentData,
});

const mapDispatchToProps = {
  fetchStudentData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendationCards);
