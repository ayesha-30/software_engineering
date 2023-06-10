import React from "react";
import { Component } from "react";
import "./Contest.css";
import AddPracticeContest from "../res/AddPracticeContest/AddPracticeContest";
import AddTeam from "../res/AddTeam/AddTeam";
import {
  isLoggedIn,
  getPracticeContests,
  addPracticeContest,
  createTeam,
  getTeams,
  getNationalContest,
} from "../helper";
import FadeScroll from "../res/FadeScroll/FadeScroll";
import TeamCard from "../res/TeamCard/TeamCard";
class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggidIn: 0,
      practiceContests: [],
      teams: [],
      contest: {
        name: "",
      },
    };
    let url = new URL(window.location.href);
    this.id = url.searchParams.get("id");
    if (this.id === null || this.id === undefined) this.id = -1;
    this.nameRef = React.createRef();
    this.member1Ref = React.createRef();
    this.member2Ref = React.createRef();
    this.member3Ref = React.createRef();
    this.member4Ref = React.createRef();
    this.member5Ref = React.createRef();
    this.member6Ref = React.createRef();
    this.member7Ref = React.createRef();
    this.member8Ref = React.createRef();
    this.member9Ref = React.createRef();
    this.member10Ref = React.createRef();
    this.member11Ref = React.createRef();
    this.member12Ref = React.createRef();
    this.member13Ref = React.createRef();
    this.member14Ref = React.createRef();
    this.member15Ref = React.createRef();
    this.coachRef = React.createRef();
  }
  createPracticeContest = (name, link) => {
    addPracticeContest(name, this.id, link)
      .then(() => {
        window.location.reload(false);
      })
      .catch(() => {
        window.location.reload(false);
      });
  };
  addTeam = (name, member1, member2, member3,member4,member5, member6, member7,member8, member9, member10,member11, member12, member13,member14,member15, coach) => {
    createTeam(name, member1, member2, member3,member4,member5, member6, member7,member8, member9, member10,member11, member12, member13,member14,member15, coach, this.id).then(
      (response) => {
        if (response === 1) {
          this.member1Ref.current.setCustomValidity("Student doesn't exist");
          this.member1Ref.current.reportValidity();
        } else if (response === 2) {
          this.member2Ref.current.setCustomValidity("Student doesn't exist");
          this.member2Ref.current.reportValidity();
        } else if (response === 3) {
          this.member3Ref.current.setCustomValidity("Student doesn't exist");
          this.member3Ref.current.reportValidity();
          
        }
        else if (response === 4) {
          this.member4Ref.current.setCustomValidity("Student doesn't exist");
          this.member4Ref.current.reportValidity();
        }
        else if (response === 5) {
          this.member5Ref.current.setCustomValidity("Student doesn't exist");
          this.member5Ref.current.reportValidity();
        }
        else if (response === 6) {
          this.member6Ref.current.setCustomValidity("Student doesn't exist");
          this.member6Ref.current.reportValidity();
        }
        else if (response === 7) {
          this.member7Ref.current.setCustomValidity("Student doesn't exist");
          this.member7Ref.current.reportValidity();
        }else if (response === 8) {
          this.member8Ref.current.setCustomValidity("Student doesn't exist");
          this.member8Ref.current.reportValidity();
        }else if (response === 9) {
          this.member9Ref.current.setCustomValidity("Student doesn't exist");
          this.member9Ref.current.reportValidity();
        } 
        else if (response === 10) {
          this.member10Ref.current.setCustomValidity("Student doesn't exist");
          this.member10Ref.current.reportValidity();
        } 
        else if (response === 18) {
          this.coachRef.current.setCustomValidity("Mentor doesn't exist");
          this.coachRef.current.reportValidity();
        } else if (response === 5) {
          alert("Error accessing database");
        }
        else if(response===20){
          alert( "Member already connect with another team.");
        }
         else {
          window.location.reload(false);
        }
      }
    );
  };
  componentDidMount() {
    isLoggedIn().then((res) => {
      console.log(res);
      if (res === 1) {
        let data = this.state;
        data.isloggidIn = -1;
        this.setState(data);
      } else {
        if (res.userType === 1) {
          let data = this.state;
          data.isloggidIn = 1;
          this.setState(data);
        } else {
          let data = this.state;
          data.isloggidIn = -1;
          this.setState(data);
        }
      }
    });
    getNationalContest(this.id).then((res) => {
      let data = this.state;
      data.contest = res;
      this.setState(data);
    });
    getPracticeContests(this.id).then((res) => {
      let data = this.state;
      data.practiceContests = res;
      this.setState(data);
    });
    getTeams(this.id).then((res) => {
      let data = this.state;
      data.teams = res;
      this.setState(data);
    });
  }
  render() {
    return (
      <div className="Contest">
        <div className="contestTitle">{this.state.contest.name}</div>
        {this.state.isloggidIn === 1 ? (
          <div>
            <FadeScroll>
              <AddPracticeContest
                createPracticeContest={this.createPracticeContest}
              ></AddPracticeContest>
            </FadeScroll>
            <FadeScroll>
              <AddTeam
                addTeam={this.addTeam}
                nameRef={this.nameRef}
                member1Ref={this.member1Ref}
                member2Ref={this.member2Ref}
                member3Ref={this.member3Ref}
                member4Ref={this.member4Ref}
                member5Ref={this.member5Ref}
                member6Ref={this.member6Ref}
                member7Ref={this.member7Ref}
                member8Ref={this.member8Ref}
                member9Ref={this.member9Ref}
                member10Ref={this.member10Ref}
                member11Ref={this.member11Ref}
                member12Ref={this.member12Ref}
                member13Ref={this.member13Ref}
                member14Ref={this.member14Ref}
                member15Ref={this.member15Ref}
                coachRef={this.coachRef}
              ></AddTeam>
            </FadeScroll>
          </div>
        ) : (
          ""
        )}
        <div className="practiceContestSection">
          <div className="sectionHeader">Practice Conests : </div>
          <div className="practiceContestContainer">
            {this.state.practiceContests.map((data, index) => {
              let contest = data;
              return (
                <a key={index} className="practiceContest" href={contest.link}>
                  {contest.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="teamSection">
          <div className="teamsContainer">
            {this.state.teams.map((data, index) => {
              let team = data;
              return <TeamCard key={index} team={team}></TeamCard>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Contest;
