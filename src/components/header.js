import React from 'react';
import InputDate from './input'

function Header(props){

    return(
      
        <div className='header'>
            <h1>Nasa Photo Of the Day</h1>
            <InputDate 
                pick = {props.pick}
                setPick = {props.setPick}
            />
            
        </div>
    );
}
export default Header;