import * as React from 'react';


import {Typography,Button,CardMedia,CardActions,CardContent,Card,Rating} from '@mui/material';
export default function CoursesCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="img/ram.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <span>
           <span style={{fontSize:'20px',fontWeight:'bold'}}>4.7</span> <Rating name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly /><Typography fontSize={'15px'} gutterBottom variant="caption">(5000)</Typography>
        </span>
        <div>
          <span>Enrollment status</span>
          <span style={{backgroundColor:'rgba(0,255,0,0.3)',padding:'5px',borderRadius:'10px'}}>Opened</span>
        </div>
        <div>
          <span style={{fontSize:'15px',fontWeight:'bold'}}>$567</span> <p style={{textDecoration: 'line-through',display:'inline'}}>$8999</p>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}