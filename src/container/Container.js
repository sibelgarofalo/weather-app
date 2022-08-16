import './Container.css';
import React from 'react';
import Box from './box/Box';

class Container extends React.Component {
    render(){
        return (
            <div className='Container'>
                <Box/>
            </div>
        )
    }
}

export default Container;