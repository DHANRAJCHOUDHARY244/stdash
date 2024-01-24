const express = require('express');
const authRoutes = require('./routes/auth.js');
const courseRoutes = require('./routes/course.js');
const userDataRoutes = require('./routes/userData.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dataInsertion = require('./db/dataInsertion.js');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // replace with your frontend origin
  credentials: true,
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// ------------auth routes---------------
app.use('/auth', authRoutes);

// ------------course routes---------------
app.use(courseRoutes);
app.use(userDataRoutes);

// dummy data insertion --------------------------
// dataInsertion.DataInsertion();

app.listen(4400, () => {
  console.log('App listening on port 4400!');
});
