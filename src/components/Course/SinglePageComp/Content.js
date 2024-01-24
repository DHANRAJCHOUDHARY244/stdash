import React from 'react'
import { Grid, Box, Typography } from '@mui/material';

const Content = () => {
    return (
        <Box>
            <Grid md={12} sm={12} sx={12} p={5}>
                <Typography gutterBottom variant="h4">Prerequisites</Typography>
                <Box>
                    <ul>
                        <li> <Typography gutterBottom variant="body2">Basic JavaScript knowledge</Typography></li>
                        <li> <Typography gutterBottom variant="body2">Familiarity with
                            React</Typography>
                        </li>
                    </ul>
                </Box>
            </Grid>
            <Grid md={12} sm={12} sx={12} p={5}>
                <Typography gutterBottom variant="h4">Description</Typography>
                <Box>
                    <ul >
                        <li> <Typography gutterBottom variant="body2">Learn the basics of React Native development and
                            build your first mobile app.</Typography></li>

                    </ul>
                </Box>
            </Grid>
        </Box>
    )
}

export default Content