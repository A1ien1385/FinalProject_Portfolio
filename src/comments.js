import React, { Component } from 'react'; 
import './scss/main.scss';
import CommAdd from "./commAdd"
import CommList from './commList';



class Comments extends Component {
counter = 2
 state = {
   tasks: [
     {
       id: 0,
       text: 'Great artworks. Good job',
       active: true,
     
     },
     
     {
      id: 1,
      text: 'Well Done!',
      active: true,
      
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
     })}

     addTask = (text) =>
     {
       
       const task = {
         id: this.counter,
         text: text,
         active: true
        }

       this.counter++
       console.log(task);

       this.setState(prevState =>({
          tasks: [...prevState.tasks, task]
       }))

       return true
     }

  render()
  {  
  return (
    <>
     <h1 id="comments" className="art_sections_title">Komentarze</h1>
     <CommAdd add={this.addTask}/>
     <CommList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
    </>
  )};
}

export default Comments;