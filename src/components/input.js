import React, {useState, useEffect} from 'react';
import App from '../App'

function InputDate(props){
    // const[pick, setPick] = useState('2014-05-08');
    useEffect(()=>{
        // function handleChange(e){
        //     setPick(e.target.value);
        // }
        

    })
    function handleChange(e){
        props.setPick(e.target.value);
    }
    return(
       < div>
        <form>
            <label>Pick a date to see a new photo:    
            <select id="mySelect" onChange = {handleChange} >
                <option>2019-07-28</option>
                <option>2012-03-14</option>
                <option>2018-04-30</option>
                <option>2014-05-08</option>
                <option>2015-06-27</option>
                <option>2016-09-22</option>
                <option>2018-02-12</option>
                <option>2019-01-06</option>
                
            </select>
            </label>

        </form>
   
      
        </div>
    );
}
export default InputDate;