import React from "react";
import { Component } from "react";
import "./AddTeam.css";
import WavyText from "../WavyText/WavyText";
import FadeScroll from "../FadeScroll/FadeScroll";
class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state={
      moreMember:-1,
      more:[this.props.member11Ref,this.props.member12Ref,this.props.member13Ref,this.props.member14Ref,this.props.member15Ref]
    }

    
  }
  createTeam = () => {
    let name = this.props.nameRef.current.value;
    let member1 = this.props.member1Ref.current.value;
    let member2 = this.props.member2Ref.current.value;
    let member3 = this.props.member3Ref.current.value;
    let member4= this.props.member4Ref.current.value;
    let member5= this.props.member5Ref.current.value;
    let member6= this.props.member6Ref.current.value;
    let member7= this.props.member7Ref.current.value;
    let member8= this.props.member8Ref.current.value;
    let member9= this.props.member9Ref.current.value;
    let member10= this.props.member10Ref.current?.value;
    let member11= this.props.member11Ref.current?.value;
    let member12= this.props.member12Ref.current?.value;
    let member13= this.props.member13Ref.current?.value;
    let member14= this.props.member14Ref.current?.value;
    let member15= this.props.member15Ref.current?.value;
    let coach = this.props.coachRef.current.value;
    this.props.nameRef.current.setCustomValidity("");
    this.props.member1Ref.current.setCustomValidity("");
    this.props.member2Ref.current.setCustomValidity("");
    this.props.member3Ref.current.setCustomValidity("");
    this.props.coachRef.current.setCustomValidity("");
    if (name === null || name === undefined || name.length === 0) {
      this.props.nameRef.current.setCustomValidity("This field is required");
      this.props.nameRef.current.reportValidity();
      return;
    }
    if (member1 === null || member1 === undefined || member1.length === 0) {
      this.props.member1Ref.current.setCustomValidity("This field is required");
      this.props.member1Ref.current.reportValidity();
      return;
    }
    if (member2 === null || member2 === undefined || member2.length === 0) {
      this.props.member2Ref.current.setCustomValidity("This field is required");
      this.props.member2Ref.current.reportValidity();
      return;
    }
    if (member3 === null || member3 === undefined || member3.length === 0) {
      this.props.member3Ref.current.setCustomValidity("This field is required");
      this.props.member3Ref.current.reportValidity();
      return;
    }


    if (coach === null || coach === undefined || coach.length === 0) {
      this.props.coachRef.current.setCustomValidity("This field is required");
      this.props.coachRef.current.reportValidity();
      return;
    }

    let members=[ member1, member2, member3,member4,member5, member6, member7,member8, member9, member10];
    
    

    if((new Set(members)).size === members.length)this.props.addTeam(name, member1, member2, member3,member4,member5, member6, member7,member8, member9, member10,member11, member12, member13,member14,member15, coach);
    else alert("You have already added member")
  };
  render() {
    return (
      <div className="AddTeam">
        <div className="TeamInpContainer">
          <WavyText>Team Name</WavyText>
          <input
            className="TeamNameInp"
            type="text"
            ref={this.props.nameRef}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 1</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member1Ref}
            required
          ></input>
        </div>

        <div className="TeamInpContainer">
          <WavyText>Member 2</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member2Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 3</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member3Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 4</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member4Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 5</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member5Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 6</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member6Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 7</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member7Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 8</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member8Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 9</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member9Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Member 10</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.member10Ref}
            required
          ></input>
        </div>
        <div className="TeamInpContainer" style={{display:'flex',flexDirection:"column",fontSize:'20px',alignItems:'flex-start',width:'100%'}}>
          {[this.props.member11Ref,this.props.member12Ref,this.props.member13Ref,this.props.member14Ref,this.props.member15Ref].map((m,id)=>id<=this.state.moreMember&&(
            <div className="TeamInpContainer">
            <WavyText>Member {id+10+1}</WavyText>
            <input
              className="member1Inp"
              type="text"
              ref={m}
              required
            ></input>
          </div>
          ))}
          <div>
          <button style={{marginTop:'10px',marginRight:'10px'}} onClick={()=>this.setState({moreMember:this.state.moreMember+1})}>+ Add Member</button>
          {this.state.moreMember>=0&& <button style={{marginTop:'10px'}} onClick={()=>{
            this.state.more[this.state.moreMember].current.value=null;
            
            this.setState({...this.setState,moreMember:this.state.moreMember-1})
            }}>+ Remove Member</button>}
          </div>
        </div>
        <div className="TeamInpContainer">
          <WavyText>Coach</WavyText>
          <input
            className="member1Inp"
            type="text"
            ref={this.props.coachRef}
            required
          ></input>
        </div>

        <div className="createTeamBtn" onClick={this.createTeam}>
          CreateTeam
        </div>
      </div>
    );
  }
}
export default AddTeam;
