const express = require("express");
const router = express.Router();
const queries = require("../queries");
const helper = require("../helper");
const e = require("express");
require("dotenv").config();

router.post("/getNationalContests", async (req, res) => {
  queries
    .getNationalContests()
    .then((result) => {
      let contests = [];
      result = Object.values(JSON.parse(JSON.stringify(result)));
      result.forEach((element) => {
        contests.push(element);
      });
      res.send(contests);
    })
    .catch((err) => res.send(err));
});
router.post("/getNationalContest", async (req, res) => {
  queries
    .getNationalContest(req.body.id)
    .then((result) => {
      let contests = [];
      result = Object.values(JSON.parse(JSON.stringify(result)));
      result.forEach((element) => {
        contests.push(element);
      });
      if (contests.length === 0) res.send("1");
      else res.send(contests[0]);
    })
    .catch((err) => res.send(err));
});
router.post("/addNationalContest", async (req, res) => {
  let token = req.body.token;
  const {name, date, start, end}=req.body;
  let data = helper.decryptData(token, process.env.SECRET_KEY);
  if (data) {
    queries
      .addNationalContest(name, date, start, end)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err)
        res.send("1")
      });
  } else res.send("1");
});
router.post("/addPracticeContest", async (req, res) => {
  let token = req.body.token;

  let data = helper.decryptData(token, process.env.SECRET_KEY);
  if (data) {
    queries
      .addPracticeContest(req.body.name, req.body.contest, req.body.link)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send("1"));
  } else res.send("1");
});
router.post("/createTeam", async (req, res) => {
  let token = req.body.token;
  let data = helper.decryptData(token, process.env.SECRET_KEY);
  let name = req.body.name;

  let member1 = req.body.member1
  let member2 = req.body.member2
  let member3 = req.body.member3
  let member4 = req.body.member4
  let member5 = req.body.member5
  let member6 = req.body.member6
  let member7 = req.body.member7
  let member8 = req.body.member8
  let member9 = req.body.member9
  let member10 = req.body.member10
  let member11 = req.body.member11
  let member12 = req.body.member12
  let member13 = req.body.member13
  let member14 = req.body.member14
  let member15 = req.body.member15
  let coach = req.body.coach;
  let contest = req.body.contest;


  const members = [member1, member2, member3, member4, member5, member6, member7, member8, member9, member10, member11, member12, member13, member14, member15]


  if (data) {
    queries
      .getNationalContest(contest)
      .then(conn => {
        if (conn.length > 0) {
          queries
            .getStudentInfo(member1)
            .then((resm1) => {
              if (resm1.length === 0) {
                res.send("1");
              }
              else {
                queries
                  .checkParticipent(member1,conn[0].date,conn[0].start,conn[0].end)
                  .then(pres => {
                    if (pres.length > 0) {
                      res.send("20")
                    }
                    else {
                      queries
                        .getStudentInfo(member2)
                        .then((resm2) => {
                          if (resm2.length === 0) {
                            res.send("2");
                          }
                          else {
                            queries
                              .checkParticipent(member2,conn[0].date,conn[0].start,conn[0].end)
                              .then(pres2 => {
                                if (pres2.length > 0) {
                                  res.send("20")
                                }
                                else {
                                  queries
                                    .getStudentInfo(member3)
                                    .then((resm3) => {
                                      if (resm3.length === 0) {
                                        res.send("3");
                                      }
                                      else {
                                        queries
                                          .checkParticipent(member3,conn[0].date,conn[0].start,conn[0].end)
                                          .then(pres3 => {
                                            if (pres3.length > 0) {
                                              res.send("20")
                                            }
                                            else {


                                              queries
                                                .getStudentInfo(member4)
                                                .then((resm4) => {
                                                  if (resm4.length === 0) {
                                                    res.send("4");
                                                  }
                                                  else {
                                                    queries
                                                      .checkParticipent(member4,conn[0].date,conn[0].start,conn[0].end)
                                                      .then(pres4 => {
                                                        if (pres4.length > 0) {
                                                          res.send("20")
                                                        }
                                                        else {

                                                          queries
                                                            .getStudentInfo(member5)
                                                            .then((resm5) => {
                                                              if (resm5.length === 0) {
                                                                res.send("5");
                                                              }
                                                              else {
                                                                queries
                                                                  .checkParticipent(member5,conn[0].date,conn[0].start,conn[0].end)
                                                                  .then(pres5 => {
                                                                    if (pres5.length > 0) {
                                                                      res.send("20")
                                                                    }
                                                                    else {

                                                                      queries
                                                                        .getStudentInfo(member6)
                                                                        .then((resm6) => {
                                                                          if (resm6.length === 0) {
                                                                            res.send("6");
                                                                          }
                                                                          else {
                                                                            queries
                                                                              .checkParticipent(member6,conn[0].date,conn[0].start,conn[0].end)
                                                                              .then(pres6 => {
                                                                                if (pres6.length > 0) {
                                                                                  res.send("20")
                                                                                }
                                                                                else {

                                                                                  queries
                                                                                    .getStudentInfo(member7)
                                                                                    .then((resm7) => {
                                                                                      if (resm7.length === 0) {
                                                                                        res.send("7");
                                                                                      }
                                                                                      else {
                                                                                        queries
                                                                                          .checkParticipent(member7,conn[0].date,conn[0].start,conn[0].end)
                                                                                          .then(pres7 => {
                                                                                            if (pres7.length > 0) {
                                                                                              res.send("20")
                                                                                            }
                                                                                            else {

                                                                                              queries
                                                                                                .getStudentInfo(member8)
                                                                                                .then((resm8) => {
                                                                                                  if (resm8.length === 0) {
                                                                                                    res.send("8");
                                                                                                  }
                                                                                                  else {
                                                                                                    queries
                                                                                                      .checkParticipent(member8,conn[0].date,conn[0].start,conn[0].end)
                                                                                                      .then(pres8 => {
                                                                                                        if (pres8.length > 0) {
                                                                                                          res.send("20")
                                                                                                        }
                                                                                                        else {

                                                                                                          queries
                                                                                                            .getStudentInfo(member9)
                                                                                                            .then((resm9) => {
                                                                                                              if (resm9.length === 0) {
                                                                                                                res.send("9");
                                                                                                              }
                                                                                                              else {
                                                                                                                queries
                                                                                                                  .checkParticipent(member9,conn[0].date,conn[0].start,conn[0].end)
                                                                                                                  .then(pres9 => {
                                                                                                                    if (pres9.length > 0) {
                                                                                                                      res.send("20")
                                                                                                                    }
                                                                                                                    else {

                                                                                                                      queries
                                                                                                                        .getStudentInfo(member10)
                                                                                                                        .then((resm10) => {
                                                                                                                          if (resm10.length === 0) {
                                                                                                                            res.send("10");
                                                                                                                          }
                                                                                                                          else {
                                                                                                                            queries
                                                                                                                              .checkParticipent(member10,conn[0].date,conn[0].start,conn[0].end)
                                                                                                                              .then(pres10 => {
                                                                                                                                if (pres10.length > 0) {
                                                                                                                                  res.send("20")
                                                                                                                                }
                                                                                                                                else {

                                                                                                                                  queries
                                                                                                                                    .getMentorInfo(coach)
                                                                                                                                    .then(c => {
                                                                                                                                      if (c.length === 0) {
                                                                                                                                        res.send("18")
                                                                                                                                      }
                                                                                                                                      else {

                                                                                                                                        queries
                                                                                                                                          .createTeam(
                                                                                                                                            name,
                                                                                                                                            member1, member2, member3, member4, member5, member6, member7, member8, member9, member10, member11, member12, member13, member14, member15,
                                                                                                                                            coach,
                                                                                                                                            contest,
                                                                                                                                          )
                                                                                                                                          .then(() => {
                                                                                                                                            members.forEach(m => {
                                                                                                                                              if (m) {
                                                                                                                                                queries.addParticipator(m, conn[0].date,conn[0].start,conn[0].end)
                                                                                                                                              }
                                                                                                                                            })
                                                                                                                                            res.send("0");
                                                                                                                                          })
                                                                                                                                          .catch((e) => {
                                                                                                                                            console.log(e)
                                                                                                                                            res.send("17");
                                                                                                                                          });





                                                                                                                                      }
                                                                                                                                    })


                                                                                                                                }
                                                                                                                              })
                                                                                                                          }
                                                                                                                        })

                                                                                                                    }
                                                                                                                  })
                                                                                                              }
                                                                                                            })

                                                                                                        }
                                                                                                      })
                                                                                                  }
                                                                                                })

                                                                                            }
                                                                                          })
                                                                                      }
                                                                                    })

                                                                                }
                                                                              })
                                                                          }
                                                                        })

                                                                    }
                                                                  })
                                                              }
                                                            })

                                                        }
                                                      })
                                                  }
                                                })

                                            }
                                          })
                                      }
                                    })

                                }
                              })
                          }
                        })
                    }
                  })
              }
            })
            .catch(() => {
              res.send("17");
            });
          }
          else res.send("17");
          })
        
        } else res.send("17");
      });
    router.post("/getTeams", async (req, res) => {
      queries
        .getTeams(req.body.contest)
        .then((result) => {
          let teams = [];
          result = Object.values(JSON.parse(JSON.stringify(result)));
          result.forEach((element) => {
            teams.push({
              ...element
            });
          });
          res.send(teams);
        })
        .catch((err) => res.send(err));
    });



    router.post("/getPracticeContests", async (req, res) => {
      console.log(req.body);
      queries
        .getPracticeContests(req.body.contest)
        .then((result) => {
          console.log(result)
          let contests = [];
          result = Object.values(JSON.parse(JSON.stringify(result)));
          result.forEach((element) => {
            contests.push({
              id: element.id,
              name: element.name,
              nationalcontest: element.nationalcontest,
              link: element.link,
            });
          });
          res.send(contests);
        })
        .catch((err) => res.send(err));
    });
    module.exports = router;
