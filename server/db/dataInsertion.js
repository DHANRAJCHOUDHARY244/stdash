const sqlite3 = require('sqlite3').verbose();
const courseModel=require('./dummyCourseModel.js')
// Create and connect to the database
const db = new sqlite3.Database('./knowledgeAcademy.db');

// Define the schema for the 'courses' table
exports.DataInsertion=()=>{
    db.run(`
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    name TEXT,
    instructor TEXT,
    description TEXT,
    enrollmentStatus TEXT,
    thumbnail TEXT,
    duration TEXT,
    scheduledays TEXT,
    scheduleTime TEXT,
    prerequisites TEXT,
    syllabus TEXT,
    location TEXT,
    students TEXT,
    rating TEXT,
    ratingStudents TEXT,
    enrollStudents TEXT
  )
`);

// Insert data into the 'courses' table
courseModel.forEach(course => {
  const {
    name, instructor, description, enrollmentStatus, thumbnail, duration, scheduledays, scheduleTime, prerequisites, syllabus, location, students, rating, ratingStudents, enrollStudents
  } = course;

  db.run(`
    INSERT INTO courses (
      name, instructor, description, enrollmentStatus, thumbnail, duration, scheduledays, scheduleTime, prerequisites, syllabus, location, students, rating, ratingStudents, enrollStudents
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
  [
    name, instructor, description, enrollmentStatus, thumbnail, duration, scheduledays, scheduleTime,
    JSON.stringify(prerequisites), JSON.stringify(syllabus), location,
    JSON.stringify(students), rating, ratingStudents, enrollStudents
  ],
  (err) => {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log(`Data inserted for course: ${name}`);
    }
  });
});



}