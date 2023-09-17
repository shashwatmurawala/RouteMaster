const { Sequelize } = require("sequelize-cockroachdb");

const sequelize = new Sequelize(process.env.DATABASE_URL);

// const Courses = sequelize.define("courses", {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//     },
//     balance: {
//       type: Sequelize.INTEGER,
//     },
//   });


var courses;
(async () => {
  try {
    courses = await sequelize.query("SELECT * FROM courses");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    await sequelize.close();
  }
})();



//first we fetch the list of major courses.
//queries might not be exact.  can fix todo.

var majorcourses;
(async () => {
    try {
      majorcourses = await sequelize.query("SELECT courses FROM majors");
      console.log(majorcourses);
    } catch (err) {
      console.error("error executing query:", err);
    } finally {
      await sequelize.close();
    }
  })();

majorcourses = majorcourses.split(",") //split into array of course strings.
//we have a list of courses we need to take for our major.  Next, we need to get their prerequisites.

const prereqs = new Map(majorcourses.map((obj) => [obj, []]));

for (let key of prereqs.keys()) { //iterate over every major course to get their prereqs
    try {
        majorcourses = await sequelize.query("SELECT courses FROM majors");
        console.log(majorcourses);
      } catch (err) {
        console.error("error executing query:", err);
      } finally {
        await sequelize.close();
      }
}



const taken = Set();
const available = Set();
const unavailable = Set();

//lets say we have an array of courses we need to take.
//we have taken courses and courses we haven't taken.  and courses we can't take yet.

for (var i = 0; i < courses.length; i++) {
    if (prereqs.has(courses[i].coursecode)) {
        if (courses[i].prereq_1) {
            prereqs[courses[i].coursecode].push(courses[i].prereq_1.split(","))
        }
        if (courses[i].prereq_2) {
            prereqs[courses[i].coursecode].push(courses[i].prereq_2.split(","))
        }
        if (courses[i].prereq_3) {
            prereqs[courses[i].coursecode].push(courses[i].prereq_3.split(","))
        }
        if (courses[i].prereq_4) {
            prereqs[courses[i].coursecode].push(courses[i].prereq_4.split(","))
        }
        if (prereqs[courses[i].coursecode].length == 0) {//if course has no prereqs add it to our available courses list
            available.add(courses[i].cousecode)
        }
        else {//else a course has prreqs and we acnt take it rn
            unavailable.add(courses[i].coursecode)
        }            
    }
}

//we now have a map with pairs of [coursecode, [[prereq array].... [prereq array]]] 
//where at least one course in each nested array must be taken before the course can be taken.

//now we just loop over our courses.  we can take a max of 4 major courses per term, leaving 1 elective.
//we take as many major courses per term as possible until we run out of major courses.  
//then after that we can insert work terms/break terms as necessary.  we dont have to worry about 
//sequences this way until the ned

//keep looping until our taken courses == # of major courses.

//can whoever reads this set the default value of the course schedule json to elective so i dont have to thanks


const checkPrereq = function(course) {//check if course is in taken
    for (arr in prereqs[course]) {
        if (!arr1.some( ai => taken.has(ai) )) {
            return false;
        }
    }
    return true;

};

var courseSchedule = [];

for (var j = 0; j <= 13; j++) {
    var termCourses = []; //can't use json in the middle so we make a nested array then convert to json at the end
    var count = 0;//4 major courses per term
    for (const value of available) {//remove 4 course from available ones and put them in taken.
        if (count == 3) {
            break;
        }
        taken.add(value);
        termCourses.push(value); 

        count += 1;
        available.remove(value);
    }
    for (i = 0; i < 5 - count; i++) { //fill remaining slots with electives
        termCourses.push('Elective');
    } 


    var findOne = function (haystack, arr) {
        return arr.some(function (v) {
            return haystack.indexOf(v) >= 0;
        });
    };

    

    for (const course of unavailable) {//move courses from unavaible to available
        if (checkPrereq(course)) {
            unavailable.remove(course);
            available.add(course);
        }
    }
    courseSchedule.push(termCourses);
}


//++============ CONVERT courseSchedule to JSON HERE PLEASE THEN DO WHATEVER WITH IT



