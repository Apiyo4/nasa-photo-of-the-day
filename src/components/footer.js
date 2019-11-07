import React from 'react';

function Footer(props){
    
    return(
        <div className= 'footer'>
            <p>&copy;{props.photos.copyright}, {props.photos.date}!</p>
        </div>
    );
}
export default Footer;