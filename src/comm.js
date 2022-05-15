import './scss/main.scss';

const Comm = (props) => {

const {text, date, id} = props.task;

    return (
            <div className="commForm_subtitle">
            <p>{text}, {date} </p>
            <button className='super' onClick={() => props.change(id)}>Wyróżnij</button>
            <button className='del' onClick={() => props.delete(id)}>X</button>
            </div>
        )
    
}
 
export default Comm;