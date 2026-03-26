import { useState } from 'react';
import { Action } from './ToDoList'
import './Todolist.css'


interface ActionProbs {
    values: Action;
    DeleteAction(tasks: string): void;
    EditAction(id: number, newText: string): void;
    CheckBoxChecked(id: number): void;
}

const DisplayProbs = ({ values, DeleteAction, EditAction, CheckBoxChecked }: ActionProbs) => {
    const [editText, seteditText] = useState(values.text)
    const [isediting, setisediting] = useState(false)
    const handleEdit = () => {
        EditAction(values.id, editText);
        setisediting(false);
    }
    console.log('values: ', values)
    return (
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 mt-md-3'>
            {isediting ? (
                <>
                    <input type='text' value={editText} autoFocus={true}
                        onChange={(e) => seteditText(e.target.value)}
                        className={`fw-bolder p-sm-1 ps-2 ${values.completed ? 'text-decoration-line-through ' : ''}`}
                    />
                    <button className='fs--sm-5 fw-bold bg-info'
                        onClick={handleEdit}>save</button>

                </>
            ) : (
                <>
                    <div className='d-flex gap-2'>

                        <input className='box'
                            type='checkBox' checked={values.completed} onChange={() => { CheckBoxChecked(values.id) }} />

                        <span
                            className={`spanText bg-white text-start fw-bolder p-sm-1 ps-2 ${values.completed ? 'text-decoration-line-through ' : ''}`}
                        >{values.text}</span>
                    </div>
                    <button className=' fs-sm-5 fw-bold bg-danger' onClick={() => { DeleteAction(values.text) }}>Delete</button>
                    <button className='fs--sm-5 fw-bold bg-info' onClick={() => setisediting(true)}>Edit</button>

                </>
            )}
        </div>
    )
}

export default DisplayProbs;