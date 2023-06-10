import React from "react";
import { Component } from "react";
import "./TeamCard.css";
class TeamCard extends Component {
  constructor(props) {
    super(props);
  console.log(this.props)
  }
  render() {
    return (
      <div className="TeamCard">
        <div className="TeamName">{this.props.team.name}</div>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member1}
        >
          {this.props.team.member1}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member2}
        >
          {this.props.team.member2}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member3}
        >
          {this.props.team.member3}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member4}
        >
          {this.props.team.member4}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member5}
        >
          {this.props.team.member5}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member6}
        >
          {this.props.team.member6}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member7}
        >
          {this.props.team.member7}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member8}
        >
          {this.props.team.member8}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member9}
        >
          {this.props.team.member9}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member10}
        >
          {this.props.team.member10}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member10}
        >
          {this.props.team.member11&&this.props.team.member11}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member10}
        >
          {this.props.team.member12&&this.props.team.member12}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member10}
        >
          {this.props.team.member13&&this.props.team.member13}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member10}
        >
          {this.props.team.member14&&this.props.team.member14}
        </a>
        <a
          className="teamMember"
          href={"profile?username=" + this.props.team.member10}
        >
          {this.props.team.member15&&this.props.team.member15}
        </a>
        <a className="coach" href={"profile?username=" + this.props.team.coach}>
          {this.props.team.coach}
        </a>
      </div>
    );
  }
}
export default TeamCard;
