import React from "react";
import { Component } from "react";
import { getPosts, decodePost } from "../helper";
import "./CreateContest.css";
import { Navigate } from "react-router-dom";
import FadeScroll from "../res/FadeScroll/FadeScroll";
import WavyText from "../res/WavyText/WavyText";
class CreateContest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nameRef = React.createRef();
    this.dateRef = React.createRef();
    this.startRef = React.createRef();
    this.endRef = React.createRef();

  }
  createContest = () => {
    let name = this.nameRef.current.value;
    let date = this.dateRef.current.value;
    let start = this.startRef.current.value;
    let end = this.endRef.current.value;
    if (name === null || name === undefined || name.length === 0) {
      this.nameRef.current.reportValidity();
      return;
    }

    if (date === null || date === undefined || date.length === 0) {
      this.dateRef.current.reportValidity();
      return;
    }
    if (start === null || start === undefined || start==="Select start time") {
      this.startRef.current.reportValidity();
      return;
    }
    if (end === null || end === undefined || end==="Select End time") {
      this.endRef.current.reportValidity();
      return;
    }

if(start.split(":")[0]===end.split(":")[0])
    {
      alert("Contest start time and end time can not be same.")
      return;
    }






    this.props.addContest(name, date, start, end);
  };
  componentDidMount() { }
  render() {
    return (
      <div className="CreateContest">
        <div className="contestInpContainer">
          <WavyText>Contest Name</WavyText>
          <input
            className="contestNameInp"
            type="text"
            ref={this.nameRef}
            required
          ></input>
        </div>
        <div className="contestInpContainer">
          <WavyText>Contest Date</WavyText>
          <input
            className="contestDateInp"
            type="date"
            ref={this.dateRef}
            required
          ></input>
        </div>
        <div className="contestInpContainer" style={{display:'flex',flexDirection:'row'}}>
          <div className="contestInpContainer">
          <WavyText>Contest Start Time</WavyText>
          <select className="contestDateInp" ref={this.startRef} aria-label="Default select example">
            <option selected>Select start time</option>
            <option value="9:00">9 am</option>
            <option value="10:00">10 am</option>
            <option value="11:00">11 am</option>
            <option value="12:00">12 pm</option>
            <option value="13:00">1 pm</option>
            <option value="14:00">2 pm</option>
            <option value="15:00">3 pm</option>
            <option value="16:00">4 pm</option>
            <option value="17:00">5 pm</option>
            <option value="18:00">6 pm</option>
            <option value="19:00">7 pm</option>
            <option value="20:00">8 pm</option>
            <option value="21:00">9 pm</option>
          </select>
        </div>
        <div className="contestInpContainer">
          <WavyText>Contest End Time</WavyText>
          <select ref={this.endRef} className="contestDateInp" aria-label="Default select example">
            <option selected>Select End time</option>
            <option value="9:00">9 am</option>
            <option value="10:00">10 am</option>
            <option value="11:00">11 am</option>
            <option value="12:00">12 pm</option>
            <option value="13:00">1 pm</option>
            <option value="14:00">2 pm</option>
            <option value="15:00">3 pm</option>
            <option value="16:00">4 pm</option>
            <option value="17:00">5 pm</option>
            <option value="18:00">6 pm</option>
            <option value="19:00">7 pm</option>
            <option value="20:00">8 pm</option>
            <option value="21:00">9 pm</option>
          </select>
        </div>
        </div>
        
        <div className="createContestBtn" onClick={this.createContest}>
          Add Contest
        </div>
      </div>
    );
  }
}
export default CreateContest;
