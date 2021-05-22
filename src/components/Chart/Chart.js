import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const expArray=props.dataPoints.map(dataPoint=>dataPoint.value);
  const maximum = Math.max(...expArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}

        />
      ))} 
    </div>
  );
};
export default Chart;
