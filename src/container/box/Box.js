import './Box.css';
import React from 'react';
import ToolbarComponent from './toolbar/ToolbarComponent';
import Paper from './paper/Paper';

class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCity: '',
            availableCities: []
        }
    }

    onSelectedCity = (city) => {
        this.setState({
            selectedCity: city
        });
    }

    onSearchCities = (filter) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${filter}&limit=10&appid=483ac9a00a2a2488d6651d0962266ee8`)
            .then((response) => response.json())
            .then((data) => {
                const citiesFound = data.map((item) => `${item.name} (${item.country})`);
                this.setState({
                    availableCities: citiesFound
                });
            });
    }

    render() {
        return (
            <div className='Box'>
                <ToolbarComponent/>
                <Paper 
                    selectedCity={this.state.selectedCity}
                    availableCities={this.state.availableCities}
                    onSelectedCity={this.onSelectedCity}
                    onSearchCities={this.onSearchCities} />
            </div>
        )
    }
}
export default Box;