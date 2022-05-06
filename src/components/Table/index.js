import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";
import TableContainer from '@mui/material/TableContainer';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

export class TableComponent extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{  "& th": {color: "#181818", fontWeight: "bold"}}}>
                            <TableCell align="center">Week Ending</TableCell>
                            <TableCell align="center">Retail Sales</TableCell>
                            <TableCell align="center">Wholesale Sales</TableCell>
                            <TableCell align="center">Units Sold</TableCell>
                            <TableCell align="center">Retailer Margin</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.sales.map((row) => (
                        <TableRow key={row.weekEnding} sx={{  "& th": {color: "#696969"}}}>
                            <TableCell align="center" component="th" scope="row">
                                {row.weekEnding.toLocaleString()}
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#696969"}}>
                                {"$" + row.retailSales.toLocaleString()}
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#696969"}}>
                                {"$" + row.wholesaleSales.toLocaleString()}
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#696969"}}>
                                {"$" + row.unitsSold.toLocaleString()}
                            </TableCell>
                            <TableCell align="center" sx={{ color: "#696969"}}>
                                {"$" + row.retailerMargin.toLocaleString()}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.data };
}

export default connect(mapStateToProps, { fetchData })(TableComponent);