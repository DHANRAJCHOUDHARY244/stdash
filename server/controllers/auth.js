const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/dbConnect.js');
const secretKey = 'bjbhqebiubden';


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; 
    // Query the database for the user with the provided email
    const sql = 'SELECT * FROM users WHERE email=?';
    await db.get(sql, [email], async (err,data)=>{
      if (err) {
        console.error(err.message)
       return res.status(500).json({ error: 'Internal Server Error' })
      } else {
        if (!data.id) {
          return res.status(404).json({ error: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, data.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Incorrect password' });
        }
        jwt.sign({ id:data.id,email:data.email,name:data.name}, secretKey, { expiresIn: '300s' }, (err, token) => {
          if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            res.cookie('jwt', token).json({success:true,token:token});
          }
        });
      }
    }) 
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  console.log(email, password, name);

  try {
    // Check if the user already exists
    const checkUserSql = 'SELECT * FROM users WHERE email=?';
    await db.get(checkUserSql, [email], async (err, data) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (data) {
          return res.status(400).json({ error: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const insertUserSql = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
        await db.run(insertUserSql, [email, hashedPassword, name], async function (err) {
          if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }

          // Get the ID of the last inserted row
          const userId = this.lastID;

          // Retrieve all data for the last inserted row
          const getUserSql = 'SELECT * FROM users WHERE id=?';
          await db.get(getUserSql, [userId], (err, data) => {
            if (err) {
              console.error(err.message);
              return res.status(500).json({ error: 'Internal Server Error' });
            }

            jwt.sign({ id:data.id,email:data.email,name:data.name}, secretKey, { expiresIn: '300s' }, (err, token) => {
              if (err) {
                console.error(err.message);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.cookie('jwt', token).status(201).json({success:true,token:token,message: 'User registered successfully',});
              }
            });
          });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
