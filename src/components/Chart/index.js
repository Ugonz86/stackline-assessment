import React, { Component } from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

export class Chart extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {

  }

  render() {
    return (
      <div className="chartContainer">
        <h3 className="title">Retail Sales</h3>
        <ResponsiveContainer width="100%" height={450} >
          <LineChart>
            <XAxis />
            <Tooltip />
            <Line />
            <Line />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default Chart;