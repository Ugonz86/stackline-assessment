import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Header from "./components/Header";
import Side from "./components/Side";
import Chart from "./components/Chart";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3} className="gridContainer">
          <Grid item xs={12}>
            <Paper className="headerContainer">
              <Header />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className="sideContainer">
              <Side />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className="chartContainer">
              <Chart />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper>
              {/* tags component goes here */}
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className="tableContainer">
              {/* table component goes here */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
