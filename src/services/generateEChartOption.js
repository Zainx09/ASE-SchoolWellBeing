import metaData from "../extras/metaData.json";

let reportParameters = metaData?.["chartMetaData"];
// Function to generate options for individual reports
export const getIndividualChartOptions = (data, key) => {
  const parameter = reportParameters.find((param) => param.key === key);

  if (!parameter) {
    throw new Error(`Parameter with key ${key} not found`);
  }

  return {
    title: {
      text: `${parameter.parameter} Trends`,
    },
    xAxis: {
      type: "category",
      data: data?.map((item) => item.date),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data?.map((item) => item[key]),
        type: parameter.chartType,
        color: parameter.chartColor,
      },
    ],
  };
};

export const getReportParamCategoryCount = (data, key, param) => {
  const parameter = reportParameters?.find((param) => param.key === key);

  const category = {
    "1-3": 0,
    "3-4": 0,
    "4-5": 0,
    "5-6": 0,
    "6-7": 0,
    "7-8": 0,
    "8-10": 0,
  };

  data?.forEach((student) => {
    const param = student?.reports?.[0]?.[key];
    if (param >= 1 && param < 3) {
      category["1-3"]++;
    } else if (param >= 3 && param < 4) {
      category["3-4"]++;
    } else if (param >= 4 && param < 5) {
      category["4-5"]++;
    } else if (param >= 5 && param < 6) {
      category["5-6"]++;
    } else if (param >= 6 && param < 7) {
      category["6-7"]++;
    } else if (param >= 7 && param < 8) {
      category["7-8"]++;
    } else if (param >= 8 && param <= 10) {
      category["8-10"]++;
    }
    // student?.reports?.forEach((report) => {
    //   const param = report?.[key];
    //   if (param >= 1 && param < 3) {
    //     category["1-3"]++;
    //   } else if (param >= 3 && param < 4) {
    //     category["3-4"]++;
    //   } else if (param >= 4 && param < 5) {
    //     category["4-5"]++;
    //   } else if (param >= 5 && param < 6) {
    //     category["5-6"]++;
    //   } else if (param >= 6 && param < 7) {
    //     category["6-7"]++;
    //   } else if (param >= 7 && param < 8) {
    //     category["7-8"]++;
    //   } else if (param >= 8 && param <= 10) {
    //     category["8-10"]++;
    //   }
    // });
  });

  return {
    param,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: ["1-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-10"],
      name: `${param} Ratings`, // Set the Y-axis label here
      nameLocation: "middle", // Optional: Position the label in the middle of the axis
      nameTextStyle: {
        // Optional: Customize the style of the label
        fontSize: 16,
        color: "black",
      },
      nameGap: 35,
    },
    yAxis: {
      type: "value",
      name: "Students Count", // Set the Y-axis label here
      nameLocation: "middle", // Optional: Position the label in the middle of the axis
      nameTextStyle: {
        // Optional: Customize the style of the label
        fontSize: 16,
        color: "black",
      },
      nameGap: 35,
    },
    series: [
      {
        name: "Student(s) Count",
        type: "bar",
        color: parameter.chartColor,
        data: [
          category["1-3"],
          category["3-4"],
          category["4-5"],
          category["5-6"],
          category["6-7"],
          category["7-8"],
          category["8-10"],
        ],
        label: {
          show: true,
          position: "inside",
          formatter: function (params) {
            return params.value > 0 ? params.value : "";
          },
        },
      },
    ],
  };
};

export const getReportParamAgeCategoryCount = (data, key, param) => {
  const ageCategories = {
    "6-7": [],
    "7-8": [],
    "8-9": [],
    "9-10": [],
    "10-11": [],
  };

  data.forEach((student) => {
    const age = student.age;
    let value = student?.reports?.[0]?.[key];
    if (age >= 6 && age < 7) {
      ageCategories["6-7"].push(value);
    } else if (age >= 7 && age < 8) {
      ageCategories["7-8"].push(value);
    } else if (age >= 8 && age < 9) {
      ageCategories["8-9"].push(value);
    } else if (age >= 9 && age < 10) {
      ageCategories["9-10"].push(value);
    } else if (age >= 10 && age < 11) {
      ageCategories["10-11"].push(value);
    }
    // student.reports.forEach((report) => {
    //   const age = student.age;
    //   if (age >= 6 && age < 7) {
    //     ageCategories["6-7"].push(report?.[key]);
    //   } else if (age >= 7 && age < 8) {
    //     ageCategories["7-8"].push(report?.[key]);
    //   } else if (age >= 8 && age < 9) {
    //     ageCategories["8-9"].push(report?.[key]);
    //   } else if (age >= 9 && age < 10) {
    //     ageCategories["9-10"].push(report?.[key]);
    //   } else if (age >= 10 && age < 11) {
    //     ageCategories["10-11"].push(report?.[key]);
    //   }
    // });
  });

  const avgCount = Object.keys(ageCategories).map((category) => {
    const counts = ageCategories[category];
    const avgCount =
      counts.length > 0
        ? (
            counts.reduce((acc, count) => acc + count, 0) / counts.length
          ).toFixed(2)
        : 0;
    return {
      name: category,
      value: parseFloat(avgCount),
      count: counts.length,
    };
  });

  return {
    // title: {
    //     text: `Average ${param} by Age Category`,
    //     left: 'center'
    // },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: `Average ${param} Ratings`,
        type: "pie",
        radius: "50%",
        data: avgCount,
        label: {
          show: true,
          formatter: function (params) {
            return `${params.name}  (${params.data.count})`;
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
};

export const getReportParamGenderCategoryCount = (data, key, param) => {
  const genderCategories = { male: [], female: [] };

  data.forEach((student) => {
    let value = student?.reports?.[0]?.[key];
    if (student.gender === "male") {
      genderCategories.male.push(value);
    } else if (student.gender === "female") {
      genderCategories.female.push(value);
    }
    // student.reports.forEach((report) => {
    // if (student.gender === "male") {
    //   genderCategories.male.push(report?.[key]);
    // } else if (student.gender === "female") {
    //   genderCategories.female.push(report?.[key]);
    // }
    // });
  });

  const avgCountsByGender = Object.keys(genderCategories).map((gender) => {
    const counts = genderCategories[gender];
    const avgCount =
      counts.length > 0
        ? (
            counts.reduce((acc, count) => acc + count, 0) / counts.length
          ).toFixed(2)
        : 0;
    return { name: gender, value: parseFloat(avgCount), count: counts.length };
  });

  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: `Average ${param} Ratings`,
        type: "pie",
        radius: "50%",
        data: avgCountsByGender,
        label: {
          show: true,
          formatter: function (params) {
            return `${params.name} (${params.data.count})`;
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
};

// Function to calculate average for each parameter
function calculateAverages(dataLists) {
  const dates = [...new Set(dataLists?.flat().map((item) => item.date))]; // Get all unique dates
  const parameters = Object.keys(dataLists?.[0]?.[0])?.filter(
    (key) => key !== "date"
  ); // Get all parameters except date
  const averages = {};

  dates?.forEach((date) => {
    averages[date] = {};
    parameters?.forEach((parameter) => {
      const values = dataLists?.flatMap((list) =>
        list
          .filter((item) => item?.date === date)
          .map((item) => item?.[parameter])
      );
      const sum = values?.reduce((acc, value) => acc + value, 0);
      const avg = sum / values.length;
      averages[date][parameter] = avg?.toFixed(1);
    });
  });

  return { dates, averages };
}

// Function to generate options for combined reports
export const getCombinedChartOptions = (data, yAxisTitle, chartType) => {
  // const parameter = reportParameters.find((param) => param.key === key);
  if (!data?.length) {
    return;
  }
  const { dates, averages } = calculateAverages(data);
  // alert(JSON.stringify(averages))
  // return
  const series = reportParameters?.map((parameter) => ({
    name: parameter?.parameter,
    type: "bar" ?? parameter?.chartType,
    color: parameter?.chartColor,
    // data: data?.map((item) => item[parameter.key]),
    data: averages
      ? Object.values(averages)?.map((obj) => obj?.[parameter?.key])
      : [],
    lineStyle: {
      width: 1, // Set the width of the line here
      // You can also customize other line styles here if needed
    },
  }));

  return {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: reportParameters?.map((param) => param?.parameter),
      bottom: 5, // or specify the distance from the bottom as needed
    },
    xAxis: {
      type: "category",
      // data: data?.map((item) => item.date),
      data: averages ? Object.keys(averages) : [],
    },
    yAxis: {
      type: "value",
      name: yAxisTitle || "", // Set the Y-axis label here
      nameLocation: "middle", // Optional: Position the label in the middle of the axis
      nameTextStyle: {
        // Optional: Customize the style of the label
        fontSize: 16,
        color: "black",
      },
      nameGap: 50, // Optional: Adjust the gap between the label and the axis
      min: 0, // Set the minimum value of the y-axis
      max: 10, // Set the maximum value of the y-axis
    },
    series,
  };
};

export const getSeperateTrendChartOptions = (
  data,
  yAxisTitle,
  key,
  chartType
) => {
  // const parameter = reportParameters.find((param) => param.key === key);
  if (!data?.length) {
    return;
  }
  const { dates, averages } = calculateAverages(data);
  // alert(JSON.stringify(averages))
  // return

  let foundParamData = reportParameters?.find((report) => report.key == key);

  if (!foundParamData) {
    return;
  }

  // Calculate average line value
  const sum = data.reduce((acc, curr) => acc + curr?.[key], 0);
  const avgLineValue = sum / data.length;

  const series = [
    {
      name: foundParamData?.parameter,
      type: foundParamData?.chartType,
      color: foundParamData?.chartColor,
      // data: data?.map((item) => item[parameter.key]),
      data: averages
        ? Object.values(averages)?.map((obj) => obj?.[foundParamData?.key])
        : [],
      lineStyle: {
        width: 5, // Set the width of the line here
        // You can also customize other line styles here if needed
      },
    },
    {
      name: "Average",
      type: "line",
      data: data.map(() => avgLineValue), // Array of average values matching the length of your data
      markLine: {
        label: {
          show: true,
          formatter: "Average: " + avgLineValue.toFixed(2),
        },
        data: [{ yAxis: avgLineValue }],
      },
    },
  ];

  return {
    param: key,
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [foundParamData?.parameter],
      bottom: 5, // or specify the distance from the bottom as needed
    },
    xAxis: {
      type: "category",
      // data: data?.map((item) => item.date),
      data: averages ? Object.keys(averages) : [],
    },
    yAxis: {
      type: "value",
      name: yAxisTitle || "", // Set the Y-axis label here
      nameLocation: "middle", // Optional: Position the label in the middle of the axis
      nameTextStyle: {
        // Optional: Customize the style of the label
        fontSize: 16,
        color: "black",
      },
      nameGap: 50, // Optional: Adjust the gap between the label and the axis
      min: 0, // Set the minimum value of the y-axis
      max: 10, // Set the maximum value of the y-axis
    },
    series,
  };
};
