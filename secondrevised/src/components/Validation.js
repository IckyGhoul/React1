import React from 'react';

const validationComponent = (props) =>{
    let textLength;
    if(props.text.length < 5){
        textLength = ('Text too short')
    } else{
        textLength = ('Text long enough')
    }
   

    return(
        <h3>{textLength}</h3>
    )
};

export default validationComponent;