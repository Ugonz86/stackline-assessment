import React, { Component } from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

export class TableComponent extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Week Ending</TableCell>
                            <TableCell align="center">Retail Sales</TableCell>
                            <TableCell align="center">Wholesale Sales</TableCell>
                            <TableCell align="center">Units Sold</TableCell>
                            <TableCell align="center">Retailer Margin</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center" component="th" scope="row">

                            </TableCell>
                            <TableCell align="center">
  
                            </TableCell>
                            <TableCell align="center">

                            </TableCell>
                            <TableCell align="center">

                            </TableCell>
                            <TableCell align="center">

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default TableComponent;