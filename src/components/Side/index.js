import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../../App.css";

export class Side extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <Grid className="sideContainer">
                <div className="sideProduct">
                    <img src={this.props.data.image} className="productImage" alt="product"></img>
                    <h3>{this.props.data.title}</h3>
                    <h6>{this.props.data.subtitle}</h6>
                </div>
                <div className="sideTags">
                    {this.props.data.tags.map((tag) => (
                        <Button className="tags">{tag}</Button>
                    ))}
                </div>
            </Grid> 
        )
    }
}

const mapStateToProps = state => {
    return { data: state.data };
}

export default connect(mapStateToProps,{fetchData})(Side);