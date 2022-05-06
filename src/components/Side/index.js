import React, { Component } from 'react';
import { connect } from "react-redux";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../../App.css";

export class Side extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <Grid className="sideContainer">
            <div className="sideProduct">
                    <img className="productImage" alt="product"></img>
                    <h3>title</h3>
                    <h6>subtitle</h6>
                </div>

                <div className="sideTags">

                    <Button className="tags">tag</Button>
     
            </div>
        </Grid> 
      )
    }
}

export default Side;