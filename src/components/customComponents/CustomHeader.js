import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStudentData } from "../../redux/actions/DataActions";
import { Select } from "antd";
const { Option } = Select;

const WidgetBox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        // border: "1px solid #E8E8E8",
        // backgroundColor: "white",
        borderRadius: 10,
        padding: "10px 10px",
        marginTop: 10,
        alignItems: "center",
        ...props.style,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <text style={{ fontWeight: "bold", color: "black", fontSize: 30 }}>
          {props.headerTitle || "Dashboard"}
        </text>
      </div>

      <div
        style={{
          display: "flex",
          //   width: "100%",
          flexDirection: "row-reverse",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: 6,
        }}
      >
        {!!props.showClassFilter && <Select
          allowClear
          placeholder={"Filter by Class"}
          style={{ width: 200 }}
          defaultValue={props.classes?.[0]}
          onChange={props.onChangeClass}
        >

          {props.classes ? props.classes?.map((cl)=><Option value={cl}>{`Class ${cl}`}</Option>) : [1,2,3,4,5].map((cl)=><Option value={cl}>{`Class ${cl}`}</Option>)}
          {/* <Option value={1}>Class 1</Option>
          <Option value={2}>Class 2</Option>
          <Option value={3}>Class 3</Option>
          <Option value={4}>Class 4</Option>
          <Option value={5}>Class 5</Option> */}
        </Select>}

        <text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginRight: 20,
          }}
        >
          <text
          style={{
            color: "#125e83",
            fontSize: 24,
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginRight:7
          }}
        >
          {`${props.totalCount ?? 0}`}
        </text>
          {`${props.countTitle ?? "Student(s)"}`}
        </text>
      </div>

      {/* {props.children} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentData: state?.data?.studentData,
});

const mapDispatchToProps = {
  fetchStudentData,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetBox);
