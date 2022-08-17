import './Box.css';
import React from 'react';
import ToolbarComponent from './toolbar/ToolbarComponent';
import Paper from './paper/Paper';

class Box extends React.Component {
    render() {
        return (
            <div className='Box'>
                <ToolbarComponent/>
                <Paper/>
            </div>
        )
    }
}
export default Box;