import React from 'react';
import {  Box} from '@mui/material';
import HeroCard from './SinglePageComp/HeroCard';
import Content from './SinglePageComp/Content';
import SyllabusComp from './SinglePageComp/SyllabusComp';
const SingleCoursePage = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <HeroCard/>
            <Content/>
            <SyllabusComp/>
        </Box>
    );
}

export default SingleCoursePage;