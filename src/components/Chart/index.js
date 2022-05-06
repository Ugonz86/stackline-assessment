import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

class Chart extends Component {
  
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="chartContainer">
        <h3 className="title">Retail Sales</h3>
        <ResponsiveContainer width="100%" height={350} >
          <LineChart data={this.props.data} >
            <XAxis dataKey="Week Ending" tickLine={false} axisLine={{ stroke: "#c7cfd9" }} />
            <Tooltip />
            <Line type="basis" dataKey="Monthly Sale" stroke="#49a9f4" strokeWidth={2} dot={false} />
            <Line type="basis" dataKey="Monthly Wholesale" stroke="#9aa8bc" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const dataFetched = state.data.sales;

  const allData = dataFetched.map(a => ({ ...a, weekEnding: parseInt(a.weekEnding.split("-")[1], 10), retailSales: Number(a.retailSales), wholesaleSales: Number(a.wholesaleSales) }));
  
  const monthlyRetailSales = allData.reduce((accumulator, currentValue) => {
    accumulator[currentValue.weekEnding] = accumulator[currentValue.weekEnding] + currentValue.retailSales || currentValue.retailSales;
    return accumulator;
  }, {});

  const monthlyWholesaleSales = allData.reduce((accumulator, currentValue) => {
    accumulator[currentValue.weekEnding] = accumulator[currentValue.weekEnding] + currentValue.wholesaleSales || currentValue.wholesaleSales;
    return accumulator;
  }, {});

  const result = [];

  const months = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};

  for (let i = -1, keys = Object.keys(months), ii = keys.length + 1; i < ii; i++) {
    let updated = {"Week Ending": months[keys[i]], "Monthly Sale": monthlyRetailSales[keys[i]], "Monthly Wholesale": monthlyWholesaleSales[keys[i]]}
    result.push(updated);
  }
  return {data: result}
}

export default connect(mapStateToProps, { fetchData })(Chart);