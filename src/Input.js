import React from 'react'
import './Input.css'

class Input extends React.Component {
    render() {
        return (
            <div className='inputs'>
            <label for='sel'>Select:</label>
            <select id='sel' onChange={this.props.changes}>
                    <option value='all'>All</option>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='starships'>Starships</option>
                </select>
            <input type='text' placeholder='Please Enter' onChange={this.props.change}/>
            </div>
        );
    }
}

export default Input;