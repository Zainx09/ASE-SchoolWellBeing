import React from "react";
import { Card, List, Col, Row } from "antd";
import {
    UserOutlined
} from "@ant-design/icons";


const StudentProfile = ({ studentData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        paddingTop: 40,
      }}
    >
      <div
        style={{
          border: "0px solid lightgray",
          borderRadius: 12,
          padding: "40px 20px 0px 20px",
          backgroundColor: "#979797",
          // height: "50%",
          height: 180,
        }}
      >
        <UserOutlined
          style={{ fontSize: 130, color: "white", opacity: 0.95 }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "0px solid",
          width: "100%",
          marginLeft: 25,
          paddingTop: 0,
        }}
      >
        <text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
            marginBottom: 10,
          }}
        >{`${studentData?.[0]?.name}`}</text>
        <text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
            marginBottom: 3,
          }}
        >{`Age : ${studentData?.[0]?.age}`}</text>
        <text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
            marginBottom: 3,
          }}
        >{`Gender : ${studentData?.[0]?.gender}`}</text>
        <text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
            marginBottom: 3,
          }}
        >{`Class : ${studentData?.[0]?.class}`}</text>
        <text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
            marginBottom: 3,
          }}
        >{`Section : ${studentData?.[0]?.section}`}</text>
        <text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            opacity: 0.9,
            marginBottom: 3,
          }}
        >{`Student Id : ${studentData?.[0]?.id}`}</text>
      </div>
    </div>
  );
};

export default StudentProfile;
