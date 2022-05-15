import './scss/main.scss';
import Comm from './comm';

const CommList = (props) => {

        const active = props.tasks.filter(task => task.active);
        const done =  props.tasks.filter(task => !task.active);
        const activeTasks = active.map(task => <Comm key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const doneTasks = done.map(task => <Comm key={task.id} task={task} delete={props.delete} change={props.change}/>);

    return (
            <>
            <div className="commForm_subtitle">
                <h2>Lista komentarzy</h2>
                   {activeTasks}
                </div>

                <hr/>

                <div className="commForm_subtitle super">
                <h2>Komentarze wyróżnione</h2>
                  {doneTasks}
                </div>
             </>   
        )
    
}
 
export default CommList;