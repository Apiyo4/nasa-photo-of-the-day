import React from 'react';
import Styled from 'styled-components';

const Img= Styled.img`
    height: 400px;
    width: 76%;
    margin-bottom: 20px;
    box-shadow: -30px -30px #cbcbcb; 
`;
const Div = Styled.div`
    width: 80%;
    margin: auto;
    
`;
const P= Styled.p`
    font-weight: 900;
    text-align: center;
`;

function Card(props){
    // console.log('I am a ', props.photos);
    const data  = props.photos;
    
    // if (!props.photos) return <h3>Loading...</h3>;
    return(
        
        <div className= 'card'>
          
           <Img src= {props.photos.url}/>        
            <Div className='info'>  
                <h3 className='title'>{props.photos.title}</h3>                     
                <p className='explanation'>{props.photos.explanation}</p>
               
            </Div>
            

        </div>
    )
}
export default Card;