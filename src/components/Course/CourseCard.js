import * as React from 'react';


import {Typography,Button,CardMedia,CardActions,CardContent,Card,Rating} from '@mui/material';
export default function CoursesCard({name,instructor,description,rating}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="img/ram.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
        <span>
           <span style={{fontSize:'20px',fontWeight:'bold'}}>{rating}</span> <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly /><Typography fontSize={'15px'} gutterBottom variant="caption">(5000)</Typography>
        </span>
        <div>
          <span>Enrollment status</span>
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