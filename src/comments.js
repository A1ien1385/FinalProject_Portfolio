import React, { Component } from 'react'; 
import './scss/main.scss';
import CommAdd from "./commAdd"
import CommList from './commList';



class Comments extends Component {

 state = {
   tasks: [
     {
       id: 0,
       text: 'Great artworks. Good job',
       date: '2022-06-06',
       important: true,
       active: true,
       finishDate: null
     },
     
     {
      id: 1,
      text: 'Well Done!',
      date: '2023-01-12',
      important: true,
      active: true,
      finishDate: null
    }

   ]
 }

  deleteTask =(id)=>{
    
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    })
  }
  
  changeTaskStatus =(id)=>{
    
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
     this.setState({
       tasks: tasks
     }) 

  }

  render()
  {  
  return (
    <>
     <h1 id="comments" className="art_sections_title">Komentarze</h1>
     <CommAdd/>
     <CommList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
    </>
  )};
}

export default Comments;