import './Box.css';
import React from 'react';
import Toolbar from './toolbar/Toolbar';
import Paper from './paper/Paper';

class Box extends React.Component {
    render() {
        return (
            <div className='Box'>
                <Toolbar/>
                <Paper/>
            </div>
        )
    }
}
export default Box;