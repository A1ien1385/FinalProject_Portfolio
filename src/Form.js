import React from 'react';


const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input 
            type="text" 
            value={props.value}
            placeholder="type city"
            onChange={props.change}
            />
            <button>Search city</button>
        </form>
    )
}

export default Form