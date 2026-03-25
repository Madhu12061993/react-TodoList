import React, { useState } from 'react'
import DisplayProbs from './DisplayProbs';


export interface Action {
  id:number ,
  text: string,
  completed:boolean
}
const ToDoList = () => {
  const [currentItem, setcurrentItem] = useState<string>('');
  const [action, setaction] = useState<Action[]>([]);

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('current', e.target.value);
    setcurrentItem(e.target.value);
  }
  const addaction = (): void => {
    if (currentItem.trim() !== "") {
      const newcurrent = { text: currentItem , id:Date.now() ,completed:false}
      setaction([...action, newcurrent]);
      setcurrentItem("");
      console.log(action);
    }
  }

  const DeleteAction = (taskName :string) : void => {
 setaction(action.filter((task) => {
  return task.text !== taskName
 }))
}


const EditAction = (id:number , isEditing:string): void => {
  setaction(action.map((task) => {
     return (
      task.id === id ? {...task , text: isEditing} : task
    )
  }))
}

const CheckBoxChecked = (id:number) :void => {
setaction(action.map((task) => {
return task.id === id ? {...task , completed:!task.completed} : task ;
}
));
};

  return (
    <div className="App container bg-info ">
      <div className='row  '>
        <div className='col-6 bg-warning m-auto' >
          <h1 className='fw-bold m-4'>TODO LIST</h1>
          <div className='d-flex gap-2 justify-content-center align-item-center m-4'>
            <input type='text' value={currentItem} onChange={onchangeHandler} />
            <button className='bg-secondary text-white fw-bold' type='button' onClick={addaction}>ADD</button>
          </div>
          <div>
            <ul className='m-5'>
              {action.map((value, index) => {
                return (
                  <div key={value.id}>
                 <DisplayProbs values={value} DeleteAction={DeleteAction} 
                 EditAction={EditAction}  CheckBoxChecked={CheckBoxChecked}/>
                  </div>
                )
              })}
            </ul>
          </div>
          <div>
            <ul>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ToDoList