import React, { Component } from 'react'; 
import './scss/main.scss';
import CommAdd from "./commAdd"
import CommList from './commList';



class Comments extends Component {

  render()
  {  
  return (
    <>
     <h1 id="comments" className="art_sections_title">Komentarze</h1>
     <CommAdd/>
     <CommList/>
    </>
  )};
}

export default Comments;