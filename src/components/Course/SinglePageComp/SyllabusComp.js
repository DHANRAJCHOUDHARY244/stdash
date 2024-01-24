import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SyllabusComp = () => {
  const [expanded, setExpanded] = React.useState (false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded (isExpanded ? panel : false);
  };

  return (
    <Box md={12} sm={12} sx={12} p={5}>
     <Typography gutterBottom variant="h4">Syllabus</Typography>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange ('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{width: '33%', flexShrink: 0}}>
            General settings
          </Typography>
          <Typography sx={{color: 'text.secondary'}}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange ('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{width: '33%', flexShrink: 0}}>Users</Typography>
          <Typography sx={{color: 'text.secondary'}}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange ('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{width: '33%', flexShrink: 0}}>
            Introduction to React Native
          </Typography>
          <Typography sx={{color: 'text.secondary'}}>
            week: 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            'Overview of React Native, setting up your
            development environment.'
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SyllabusComp;
