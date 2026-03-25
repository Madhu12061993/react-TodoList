import { Action } from './ToDoList'
import './Todolist.css'


interface ActionProbs {
    values: Action;
     DeleteAction(tasks : string) : void;
     EditAction(id:number , newText:string) : void;
     CheckBoxChecked(id:number) : void;
}

const DisplayProbs  = ({ values , DeleteAction ,EditAction ,CheckBoxChecked}: ActionProbs) => {
    console.log('values: ' , values )
    return (
        <div className='d-flex align-items-center justify-content-center gap-2 mt-3'>
            <input className='box'
             type='checkBox' checked={values.completed} onChange={() => {CheckBoxChecked(values.id)}}/>
            <input type='text' value={values.text}
            onChange={(e) => EditAction(values.id , e.target.value)}
            className={`p-1 ${values.completed ? 'text-decoration-line-through' : ''}`}
            />
            <button className=' fs-5 fw-bold bg-danger'  onClick={() => {DeleteAction(values.text)}}>Delete</button>
            <button className='fs-5 fw-bold bg-info' onClick={() => {EditAction(values.id , values.text)}}>Edit</button>
        </div>
    )
}

export default DisplayProbs;