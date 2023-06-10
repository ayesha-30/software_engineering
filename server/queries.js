const express = require("express");
const mysql = require("mysql");
const router = express.Router();
require("dotenv").config();
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "ayesha",
});
module.exports = {
  getlogininfoByUsername: function (username) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM logininfo WHERE username = ?",
        [username],
        function (err, result) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log(result);
            resolve(result);
          }
        }
      );
    });
  },
  getlogininfoByEmail: function (email) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM logininfo WHERE email = ?",
        [email],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  insertLoginInfo: function (userName, password, email, userType) {
    db.query(
      "INSERT INTO logininfo (username, password , email , userType) VALUES (?, ?, ?, ?)",
      [userName, password, email, userType]
    );
  },
  insertStudentInfo: function (userName, reg, name, phone) {
    db.query(
      "INSERT INTO student (username, regNo, name, phoneNo) VALUES (?, ?, ?, ?)",
      [userName, reg, name, phone]
    );
  },

  insertMentorInfo: function (userName, name, phone) {
    console.log("yo mentor yo");
    db.query("INSERT INTO mentor (username, name, phoneNo) VALUES (?, ?, ?)", [
      userName,
      name,
      phone,
    ]);
  },

  getStudentInfo: function (username) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM student WHERE username = ?",
        [username],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  getStudents: function (username) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM student", function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getMentorInfo: function (username) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM mentor WHERE username = ?",
        [username],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  getHandles: function (username) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT handle FROM cfhandles WHERE username = ?",
        [username],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  insertHandle: function (userName, handle) {
    console.log(handle);
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO cfhandles (username, handle) VALUES (?, ?)",
        [userName, handle],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  clearHandle: function (userName) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM cfhandles WHERE username = ?",
        [userName],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  addPost: function (userName, title, post) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO posts (author, title,content) VALUES (?, ? , ?)",
        [userName, title, post],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  getPosts: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM posts ORDER BY id DESC", (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },
  addComment: function (userName, comment, parent) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO comments (author, content,parent) VALUES (?, ? , ?)",
        [userName, comment, parent],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  addReply: function (userName, comment, parent) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO replies (author, content,parent) VALUES (?, ? , ?)",
        [userName, comment, parent],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  getComment: function (id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM comments WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  getReply: function (id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM replies WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },
  getPost: function (id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM posts WHERE id = ?", [id], (err, result) => {
        if (err) {
          reject(err);
          console.log(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getChildComments: function (par) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM comments WHERE parent = ? ORDER BY id DESC",
        [par],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  getChildReplies: function (par) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM replies WHERE parent = ? ORDER BY id DESC",
        [par],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  addNationalContest: function (name, date, start, end) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO nationalcontests (name, date, start, end) VALUES (? , ?,?,?)",
        [name, date, start, end],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  getNationalContest: function (id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM nationalcontests WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            reject(err);
            console.log(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  deletePrticipent: function (member) {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM participation WHERE member = "${member}"`,
        [member],
        (err, result) => {
          if (err) {
            reject(err);
            console.log(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  getNationalContests: function () {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM nationalcontests ORDER BY id DESC",
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  createTeam: function (name, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10, member11, member12, member13, member14, member15, coach, parent) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO teams (name,member1,member2,member3,member4,member5, member6, member7,member8, member9, member10,member11, member12, member13,member14,member15,coach,contest) VALUES (? , ?, ?, ?, ?, ?,? , ?, ?, ?, ?, ?,? , ?, ?, ?, ?, ?)",
        [name, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10, member11, member12, member13, member14, member15, coach, parent],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  addParticipator: function (member, date, start, end) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO participation (member,date,start,end) VALUES (? , ?,?,?)",
        [member, date, start, end],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },

  checkParticipent: function (member, date, constart, conend) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM participation WHERE member = "${member}" `,
        [member],
        (err, result) => {
          if (err) reject(err);
          else {
            if (result.length > 0) {
              let cstart = Number(constart.split(":")[0])
              let cend = Number(conend.split(":")[0])
              result.forEach(m => {
                if (new Date(m.date).toLocaleDateString() === new Date(date).toLocaleDateString()) {
                  let start = Number(m.start.split(":")[0])
                  let end = Number(m.end.split(":")[0])

                  if (start > cstart) { 
                    if (start >= cend) {

                    }
                    else {
                      resolve(result)
                      return
                    }
                  }
                  else if(cstart>=end && cend >= end){

                  }
                  else {
                    resolve(result)
                    return
                  }



                  
                }
              })

            }
            resolve([]);
          }
        }
      );
    });
  },

  getTeams: function (contest) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM teams WHERE contest = ? ORDER BY id DESC",
        [contest],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  addPracticeContest: function (name, parentcontest, link) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO practicecontests (name,nationalcontest,link) VALUES (? , ?, ?)",
        [name, parentcontest, link],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
  getPracticeContests: function (contest) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM practicecontests WHERE nationalcontest = ? ORDER BY id DESC",
        [contest],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  },
};
