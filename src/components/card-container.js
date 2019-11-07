import React from 'react';
import Card from './cards'

function CardContainer(props){
   
    return(
        
        <div className="cardContainer">
           
            <Card 
                photos = {props.photos}
                setPhotos = {props.setPhotos}
                
            />
        </div>
    );
}
export default CardContainer;