import { React, Component } from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  startCreate,
  create,
  fetchResult,
  deleteStart,
  deleteResult,
} from "../actions/addData";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      total_quest: "",
      attend_quest: "",
      correct: "",
      attempt: "",
    };
  }

  // Time Out
  formInput = false;
  timer = null;

  handleSubmit = (e) => {
    e.preventDefault();
    this.formInput = true;
    this.props.dispatch(startCreate());
    this.props.dispatch(create(this.state));
    this.setState({
      username: "",
      total_quest: "",
      attend_quest: "",
      correct: "",
      attempt: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // ComponentDidMount
  componentDidMount() {
    this.props.dispatch(fetchResult());
  }

  // ComponentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (this.formInput === true) {
      this.props.dispatch(fetchResult());
    }

    this.timer = setTimeout(() => {
      this.formInput = false;
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
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

  // Delete Data
  handleDelete = (ID) => {
    this.formInput = true;
    this.props.dispatch(deleteStart());
    this.props.dispatch(deleteResult(ID));
  };

  // Edit Data
  // handleEdit = (data) => {
  //   console.log("Edit", data);
  //   <Routes>
  //     <Route path="*" element={<Navigate to="/" />} />;
  //   </Routes>
    
  // };

  render() {
    const { inProgress, error, success, results } = this.props.addData;
    console.log(this.props.addData)
    return (
      <>
        <Box component="form" className="add-bx-sadow">
          <div>
            {error && <div className="alert error-dailog">{error}</div>}
            {success && <div className="alert success-dailog">{success}</div>}
          </div>
          <Typography className="add-tp-style">ADD Details</Typography>
          <TextField
            label="Name"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
            fullWidth
          />
          <Box className="add-rest-box">
            <TextField
              label="Total No. of Questions"
              name="total_quest"
              value={this.state.total_quest}
              onChange={this.handleChange}
            />
            <TextField
              label="Total No. of Attend Questions"
              className="add-rest-filed"
              name="attend_quest"
              value={this.state.attend_quest}
              onChange={this.handleChange}
            />
            <TextField
              label="Total No. of Correct Answers"
              className="add-rest-filed"
              name="correct"
              value={this.state.correct}
              onChange={this.handleChange}
            />
            <TextField
              label="No. of Attempt"
              className="add-rest-filed"
              name="attempt"
              value={this.state.attempt}
              onChange={this.handleChange}
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            onClick={this.handleSubmit}
            fullWidth
            className="add-btn-style"
            disabled={inProgress}
          >
            Submit
          </Button>
        </Box>

        <Box className="add-tbl-style">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <this.StyledTableCell>Name</this.StyledTableCell>
                  <this.StyledTableCell align="right">
                    Total No. of Questions
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">
                    Total No. of Attend Questions
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">
                    Total No. of Correct Answers
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">
                    No. of Attempt
                  </this.StyledTableCell>
                  <this.StyledTableCell>Action</this.StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.reverse().map((row) => (
                  <this.StyledTableRow key={row._id}>
                    <this.StyledTableCell component="th" scope="row">
                      {row.username}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="right">
                      {row.total_quest}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="right">
                      {row.attend_quest}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="right">
                      {row.correct}
                    </this.StyledTableCell>
                    <this.StyledTableCell align="right">
                      {row.attempt}
                    </this.StyledTableCell>
                    <this.StyledTableCell>
                      <Link  aria-label="edit"
                        color="success" to={"/edit/" + row._id} >
                        
                      {/* <IconButton
                        aria-label="edit"
                        color="success"
                        onClick={() => this.handleEdit(row)}
                      > */}
                        <EditIcon />
                      {/* </IconButton> */}
                      </Link>
                      
                      <IconButton
                        aria-label="delete"
                        color="secondary"
                        onClick={() => this.handleDelete(row._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </this.StyledTableCell>
                  </this.StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
  }
}

const mapStateToProps = ({ addData}) => ({
  addData,
});

export default connect(mapStateToProps)(Add);
