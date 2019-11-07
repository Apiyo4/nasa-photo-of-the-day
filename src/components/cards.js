import React from 'react';

function Card(props){
    // console.log('I am a ', props.photos);
    const data  = props.photos;
    
    // if (!props.photos) return <h3>Loading...</h3>;
    return(
        
        <div className= 'card'>
          
           <img src= {props.photos.url}/>        
            <div className='info'>  
                <h3 className='title'>{props.photos.title}</h3>                     
                <p className='explanation'>{props.photos.explanation}</p>
                <p className='date'>{props.photos.explanation}</p> 
            </div>
            

        </div>
    )
}
export default Card;