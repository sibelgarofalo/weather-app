import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Search.css';


const SearchComponent = () => {
    // mystate
    const [cities, setCities] = useState([
        { label: 'Milano', id: 1 },
        { label: 'Napoli', id: 2 }
    ])
    const [selectedCity, setSelectedCity] = useState(null);
    const [text, setText] = useState('')

    const getCities = (filter) => {
        // update the state 
        setText(filter)
        // get the list of cities
        fetch(`https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/getCities?filter=${filter}`, { method: 'GET' })
        .then((response) => response.json())
        .then((response) => {
            const result = response.map((city, index)=> ({
                id: index,
                label: `${city.name} (${city.country})`
            }));
            setCities(result);
        })
        .catch((error) => console.log(error));
    }

    // render
    return (
        <div className="SearchComponent">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Search for Cities
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Start edit the text below to find an available City
                    </Typography>
                    <div className="Autocomplete">
                        <Autocomplete
                            filterOptions={(x) => x}
                            value={selectedCity}
                            onChange={(event, newValue) => {
                                setSelectedCity(newValue);
                            }}
                            getOptionLabel={(option) => option.label}
                            disablePortal
                            id="combo-box-demo"
                            options={cities}
                            sx={{ width: 300 }}
                            renderInput={(params) =>
                                <TextField {...params} label="The City Name" onChange={(event) => getCities(event.target.value)} />
                            }
                        />
                    </div>

                </CardContent>
            </Card>
        </div>

    );
}
export default SearchComponent;