import React from 'react';
import InputDate from './input';
import Styled from 'styled-components';

// import TweenMax from 'gsap/TweenMax';
// import Bounce from 'gsap/Bounce'

const Div = Styled.div`
 display: flex;

`;
const Div1 = Styled.div`
   margin-top: 50px;
    margin-right: 10%;
    margin-left: 4%;
`;
const H1= Styled.h1`
    margin-top: 44px;
    text-align: center;
`
function Header(props){
    const image = 'space.jpg';

    return(
      
        <div className='header'>
            <Div>
               <Div1>
                     <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYvywRFeJsvy5MbbiurWVzjNXa9brTUxdYn5mHI4YN3YXObAcjQ&s" height='40px' alt='spaceship'/>
               </Div1>
                
                {/* {TweenMax.to(".logo", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut})} */}
            
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