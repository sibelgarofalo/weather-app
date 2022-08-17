import './Paper.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


class Paper extends React.Component {
    render() {
        return (
            <div className='Paper'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Search for Cities
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Start edit the text below to find an available City
                        </Typography>
                        <Autocomplete
                            id="controllable-states-demo"
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Controllable" />}
                        />
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default Paper;