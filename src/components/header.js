import React from 'react';
import InputDate from './input';
import Styled from 'styled-components'

const Div = Styled.div`
 display: flex;
`;
const Img = Styled.img`
   margin-top: 50px;
    margin-right: 250px;
`;
const H1= Styled.h1`
    margin-top: 50px;
`
function Header(props){
    const image = 'space.jpg';

    return(
      
        <div className='header'>
            <Div>
                <Img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYvywRFeJsvy5MbbiurWVzjNXa9brTUxdYn5mHI4YN3YXObAcjQ&s" height='40px' alt='spaceship'/>
                {/* {TweenMax.to(".logo", 4, {left:600})} */}
            
            <H1>Nasa Photo Of the Day</H1>

            </Div>

            
            <InputDate 
                pick = {props.pick}
                setPick = {props.setPick}
            />
            
        </div>
    );
}
export default Header;