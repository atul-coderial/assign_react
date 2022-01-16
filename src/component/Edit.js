import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import Box from "@mui/material/Box";

import { editFindResult, editResult, editStart } from "../actions/editData";

class Edit extends Component {
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

  // Time Out
  formInput = false;
  timer = null;

  componentDidMount() {
    // Find URL Params
    var urlID = window.location.pathname;
    var id = urlID.substring(urlID.lastIndexOf("/") + 1);

    this.props.dispatch(editFindResult(id));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.editData.results._id,
      username: nextProps.editData.results.username,
      total_quest: nextProps.editData.results.total_quest,
      attend_quest: nextProps.editData.results.attend_quest,
      correct: nextProps.editData.results.correct,
      attempt: nextProps.editData.results.attempt,
    });
  }

  // Handle Change
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(editStart());
    this.props.dispatch(editResult(this.state));
    this.timer = setTimeout(() => {
      this.formInput = true;
      if (this.formInput === true) {
        console.log(this.formInput);
        window.location.href = "http://localhost:3000/add";
      }
    }, 5000);
  };

  render() {
    const { inProgress, error, success } = this.props.editData;

    return (
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
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <Box className="add-rest-box">
          <TextField
            label="Total No. of Questions"
            name="total_quest"
            value={this.state.total_quest}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Total No. of Attend Questions"
            className="add-rest-filed"
            name="attend_quest"
            value={this.state.attend_quest}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Total No. of Correct Answers"
            className="add-rest-filed"
            name="correct"
            value={this.state.correct}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="No. of Attempt"
            className="add-rest-filed"
            name="attempt"
            value={this.state.attempt}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
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
    );
  }
}

const mapStateToProps = ({ editData }) => {
  return {
    editData,
  };
};

export default connect(mapStateToProps)(Edit);
