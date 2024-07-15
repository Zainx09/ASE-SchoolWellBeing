import React, { useEffect, useLayoutEffect } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const StudentReport = ({ studentData }) => {
  const { id: studentId } = useParams();
  const reportData = studentData?.find(student => student.id === studentId);

  useLayoutEffect(()=>{
    alert(JSON.stringify(studentData))
  },[studentData])

  if (!reportData) {
    return <p>Student report not found.</p>;
  }

  return (
    <div>
      <Card title={`Report for Student ID: ${studentId}`}>
        <Table data={reportData ? [reportData] : []} columns={[
          { title: 'Date', dataIndex: 'date', key: 'date' },
          { title: 'Mood', dataIndex: 'mood', key: 'mood' },
          { title: 'Stress Level', dataIndex: 'stress', key: 'stress' }
          // Add more columns as needed
        ]} />
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentData: state.studentData,
});

export default connect(mapStateToProps)(StudentReport);
