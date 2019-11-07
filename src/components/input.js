import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';

const Form = Styled.form`
    margin-bottom : 50px;
    position: relative;
  font-family: Arial;

`;
const Select = Styled.select`
   margin-left: 10px;
   border-radius: 5% / 25%;
   padding: 5px;


`;

function InputDate(props){
    
    function handleChange(e){
        props.setPick(e.target.value);
    }
    return(
       < div>
        <Form>
            <label>Pick a date to see a new photo:    
            <Select className="mySelect" onChange = {handleChange} >
                <option>2019-07-28</option>
                <option>2012-03-14</option>
                <option>2018-04-30</option>
                <option>2014-05-08</option>
                <option>2015-08-27</option>
                <option>2016-09-22</option>
                <option>2018-11-12</option>
                <option>2019-01-06</option>
                
            </Select>
            </label>

        </Form>
   
      
        </div>
    );
}
export default InputDate;