import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStudentData } from "../../redux/actions/DataActions";

const WidgetBox = (props) => {
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100%', border:'1px solid #E8E8E8', backgroundColor:'white', borderRadius:10, padding:20, ...props.style}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', borderBottom:'1px solid lightgrey', paddingBottom:15}}>
            <text style={{fontWeight:'bold', color:'black', fontSize:22, ...props.titleStyle}}>{props.title || "Wigdet Box"}</text>
        </div>

        <div style={{display:'flex', width:'100%', flexDirection:'row-reverse'}}>
            
        </div>

        {props.children}
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
