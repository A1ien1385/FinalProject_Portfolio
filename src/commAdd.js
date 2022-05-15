import './scss/main.scss';
import React, { Component } from "react";

class CommAdd extends Component {
     state = { 
        text: '',
        date: "1970-01-01"        
      } 
    render() { 
        return (
            <>
            <div className="commForm_subtitle">
              <input className='addCommElement addInput' type="text" placeholder='Dodaj komentarz' value={this.state.text}/> <br/>
              <label className='addCommElement' htmlFor='date'>Data: </label>
              <input className='addCommElement addInput' type="date" /> <br/>
              <button className='addCommElement addBtn'>Dodaj komentarz</button>
            </div>
            </>
        );
    }
}
 
export default CommAdd;