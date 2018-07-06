import React from 'react'

const Character = (props) =>{
    const style= {
        display:'inline-block',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black'
    }
    return(
    <div onClick={props.delete} style={style}>
        <h4>{props.letter}</h4>
    </div>
    )
}

export default Character

