import React from 'react';

const UserInput = (props) =>{
    return(
        <div className='input'>
            <form>
                <label> user input </label>
                <input value = {props.username} onChange={props.switch} type='text'/>
            </form>
        </div>
    )
}

export default UserInput;