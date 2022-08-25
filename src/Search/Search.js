import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import DayCard from './DayCard'
import './Search.css';


const SearchComponent = () => {
    // mystate
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null);
    const [text, setText] = useState('')
    const [weather, setWeather] = useState({
        forecast: []
    });

    const getCities = (filter) => {
        // update the state 
        setText(filter)
        // get the list of cities
        fetch(`https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/getCities?filter=${filter}`, { method: 'GET' })
            .then((response) => response.json())
            .then((response) => {
                const result = response.map((city, index) => ({
                    id: index,
                    label: `${city.name} (${city.country})`,
                    name: city.name
                }));
                setCities(result);
            })
            .catch((error) => console.log(error));
    }

    const getWeather = (city) => {
        setSelectedCity(city);
        if (!city){
            setWeather({
                forecast: []
            })
            return
        }
        // get the weather
        fetch(`https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/getWeather?filter=${city.name}`, { method: 'GET' })
            .then((response) => response.json())
            .then((response) => {
                setWeather(response)
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
                                getWeather(newValue);
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

            <div className="Weather">
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-around">
                    {
                        weather.forecast.map((day, index) => {
                            if (index <= 2) {
                                return <DayCard info={day} key={index} />
                            }

                        })
                    }
                </Stack>
            </div>


        </div>

    );
}
export default SearchComponent;