import React from 'react'
import { Grid, Box, Typography, Breadcrumbs, Rating,Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';

const HeroCard = () => {
    const style = { color: 'green', fontWeight: 200, fontSize: '20px', paddingTop: '4px' }
  return (
    <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} >
                    <img height={'350px'} width={'100%'} src='img/ram.png' alt='ram' />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography variant="h6">
                            Courses
                        </Typography>
                        <Typography variant="h6">
                            React
                        </Typography>
                    </Breadcrumbs>
                    <Typography variant="h1">
                        Introduction to React Native
                    </Typography>
                    <Typography variant="body2">
                        <Typography color="textSecondary" gutterBottom variant="h6" sx={{ display: 'inline' }}>Instructor</Typography>: John Doe
                    </Typography>
                    <Box sx={{ backgroundColor: '#ffd666', textAlign: 'center', width: 'fit-content', padding: '2px 5px 2px 5px', borderRadius: '5px' }}><Typography color="white" variant="h6" >Best Sellar</Typography></Box>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffd666', display: 'inline' }} >4.7</Typography> <Rating name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly /><Typography color="secondary" gutterBottom variant="h6" fontSize='20px' sx={{ display: 'inline' }}>(1500)Ratings</Typography>
                    <Typography variant="body2">
                        <Typography color="textSecondary" gutterBottom variant="h6" sx={{ display: 'inline' }}>Enrolled Students : 3000+</Typography>
                    </Typography>
                    <Typography variant="body2">
                        <LocationOnOutlinedIcon sx={style} /><Typography color="textSecondary" variant="h6" sx={{ display: 'inline', paddingBottom: '10px' }}> Online</Typography>
                    </Typography>
                    <Typography variant="body2">
                        <CheckCircleOutlineOutlinedIcon sx={style} /><Typography color="textSecondary" variant="h6" sx={{ display: 'inline' }}> Enrollment Status</Typography>
                    </Typography>
                    <Grid>
                        <Grid sm={6}><CalendarMonthOutlinedIcon sx={style} /><Typography color="textSecondary" variant="h6" sx={{ display: 'inline' }}>Tuesdays and Thursdays</Typography></Grid>
                        <Grid sm={6}><AccessTimeOutlinedIcon sx={style} /><Typography color="textSecondary" variant="h6" sx={{ display: 'inline' }}> 6:00 PM - 8:00 PM</Typography></Grid>
                        <Grid sm={6}><CalendarTodayOutlinedIcon sx={style} /><Typography color="textSecondary" variant="h6" sx={{ display: 'inline' }}> Duration: 8 weeks</Typography></Grid>
                    </Grid>
                    <Button variant="contained" color={'success'} endIcon={<AddBoxIcon />}>Enroll</Button>
                </Grid>
            </Grid>
  )
}

export default HeroCard