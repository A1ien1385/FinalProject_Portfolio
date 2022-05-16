import './scss/main.scss';
import React, { Component } from "react";

class CommAdd extends Component {

  minDate = new Date().toISOString().slice(0,10)
     state = { 
        text: '',
        date: this.minDate        
      } 

      handleText = (e) =>
      {
        this.setState(
          {
            text: e.target.value
          }
        )
      }

      handleDate = (e) =>
      {
       this.setState(
         {
          date: e.target.value 
         }
       ) 
      }

      handleClick = (e) => 
      {
        console.log("Dodaj");
        const {text} = this.state; 
        const add = this.props.add(text);
        if(add) {
          this.setState(
            {
              text: '',
              
            }
          )
        }
      }



    render() { 
        return (
            <>
            <div className="commForm_subtitle">
              <input className='addCommElement addInput' type="text" placeholder='Dodaj komentarz' value={this.state.text} onChange={this.handleText} /> <br/>
              <label className='addCommElement' htmlFor='date'>Data: </label>
              {/* <input className='addCommElement addInput' type="date" value={this.state.date} min={this.minDate} onChange={this.handleDate}/> <br/> */}
              <button onClick={this.handleClick} className='addCommElement addBtn'>Dodaj komentarz</button>
            </div>
            </>
        );
    }
}
 
export default CommAdd;