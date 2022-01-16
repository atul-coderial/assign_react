import React, { Component } from 'react'
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
    fetchHomeData
} from '../actions/homeData'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: "",
          username: "",
          total_quest: "",
          attend_quest: "",
          correct: "",
          attempt: "",
        };
      }
    

    StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    
      StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }));

      componentDidMount(){
        this.props.dispatch(fetchHomeData());
      }

    render() {

        
        console.log(this.props.homeData)
        return (
            <Box className="home-bx-sadow">
               <Box>
                   <Typography color="green">Logo</Typography>
               </Box>
               <Box className='home-tbl-style1'>
               <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <this.StyledTableCell align='center'>Total Questions</this.StyledTableCell>
                  <this.StyledTableCell align="center">
                    Questins Attended
                  </this.StyledTableCell>
                  <this.StyledTableCell align="center">
                    Correct Answers
                  </this.StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.homeData.record.filter((item, idx) => idx < 1).map((row) => (
                  <this.StyledTableRow key={row._id} >
                    <this.StyledTableCell align="center">
                     {row.total_quest}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="center">
                      {row.attend_quest}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="center">
                      {row.correct}
                    </this.StyledTableCell>
                  
                  </this.StyledTableRow>
               ))} 
              </TableBody>
            </Table>
          </TableContainer>
               </Box>
               <Box >
                    <Typography variant="h3">Trend Analysis</Typography>
                    <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" className='home-tbl-style1'>
              <TableHead>
                <TableRow>
                  <this.StyledTableCell align='center'>User</this.StyledTableCell>
                  <this.StyledTableCell align="center">
                    Accuracy
                  </this.StyledTableCell>
                  <this.StyledTableCell align="center">
                    Attempt
                  </this.StyledTableCell>
                  <this.StyledTableCell align="center">
                    Score
                  </this.StyledTableCell>
                  <this.StyledTableCell align="center">
                    Band
                  </this.StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.homeData.record.map((row) => (
                  <this.StyledTableRow  key={row._id}>
                  <this.StyledTableCell align="center">
                     {row.username}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="center">
                     {row.accuracy}%
                    </this.StyledTableCell>
                    <this.StyledTableCell align="center">
                     {row.attend_quest}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="center">
                      {row.score}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="center">
                      {row.score}
                    </this.StyledTableCell>
                  
                  </this.StyledTableRow>
                 ))} 
              </TableBody>
            </Table>
          </TableContainer>
               </Box>
            </Box>
        )
    }
}

const mapStateToProps = ({ homeData }) => {
    return {
      homeData,
    };
  };


export default connect(mapStateToProps)(Home);
