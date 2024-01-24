const db = require('../db/dbConnect.js');

exports.getAllCourses = async (req, res) => {
    try {
    // Query to retrieve all data from the 'courses' table
    const query = 'SELECT * FROM courses';

   await db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error querying data:', err);
            return;
        }
        else if (rows.length === 0) {
            // If no data found, send a 404 status code with a message
            return res.status(404).json({ message: 'No courses found.' });
        }
        // Convert JSON strings back to arrays
        const courses = rows.map(row => ({
            id: row.id,
            name: row.name,
            instructor: row.instructor,
            price:row.price,
            actualPrice:row.actualPrice,
            description: row.description,
            enrollmentStatus: row.enrollmentStatus,
            thumbnail: row.thumbnail,
            duration: row.duration,
            scheduledays: row.scheduledays,
            scheduleTime: row.scheduleTime,
            prerequisites: JSON.parse(row.prerequisites),
            syllabus: JSON.parse(row.syllabus),
            location: row.location,
            students: JSON.parse(row.students),
            rating: row.rating,
            ratingStudents: row.ratingStudents,
            enrollStudents: row.enrollStudents
        }));
        return res.status(200).json(courses);
    })
} catch (error) {
    // If there's an error, log it and send a 500 status code with a message
    console.error('Error querying data:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
}
}






