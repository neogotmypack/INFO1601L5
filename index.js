
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course) {
  for (let i = 0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      let grades = student.transcript[i].grades;
      let sum = 0;
      for (let j = 0; j < grades.length; j++) {
        sum += grades[j];
      }
      return sum / grades.length;
    }
  }
  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let i = 0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      if (num >= 0 && num < student.transcript[i].grades.length) {
        return student.transcript[i].grades[num];
      }
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;
  
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].transcript.length; j++) {
      if (students[i].transcript[j].course === courseName) {
        if (assignment >= 0 && assignment < students[i].transcript[j].grades.length) {
          sum += students[i].transcript[j].grades[assignment];
          count++;
        }
      }
    }
  }
  
  if (count === 0) {
    return -1;
  }
  return sum / count;
}