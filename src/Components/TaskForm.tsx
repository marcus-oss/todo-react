import Style from "./TaskForm.module.css"
import { Itask } from "../Interfaces/Task";
import React, {useState,ChangeEvent, FormEvent,useEffect } from "react"
import TaskList from "./TaskList";

type Props = {
    btnText: string,
    taskList: Itask[]
    setTaskList?: React.Dispatch<React.SetStateAction<Itask[]>> 
    task?: Itask | null ;
    handleUpdate?(id: number , title:string , dificculty: number): void
}

const TaskForm = ({btnText, taskList,setTaskList, task , handleUpdate}: Props) => {

  const [id,setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("")
  const [dificculty,setIDdificulty ] = useState<number>(0);

  useEffect(() => {
    if(task){
      setId(task.id);
      setTitle(task.title);
      setIDdificulty(task.dificculty);
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleUpdate) {
      handleUpdate(id,title,dificculty)

    }else {
    
      const id = Math.floor(Math.random() * 100)
    const newTask: Itask = {id,title, dificculty}

    setTaskList!([...taskList, newTask])

    setTitle("")
    setIDdificulty(0)
    }

    
  };

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

    if(e.target.name === "title") {
        setTitle(e.target.value)
    }else {
      setIDdificulty(parseInt((e.target.value)))

    }
  }

  return (
    <form  onSubmit={addTaskHandler} className={Style.form}>
    <div className={Style.input_container}>
        <label htmlFor="title">Titulo:</label>
        <input 
        type="text"
        name="title" 
        placeholder="Titulo da tarefa" 
        onChange={handleChange}
        value={title}/>
    </div>

    <div className={Style.input_container}>
        <label htmlFor="dificculty">Dificuldade:</label>
        <input type="text"
        name="dificculty" 
        placeholder="Dificuldade da tarefa"
        onChange={handleChange}
        value={dificculty}/>
    </div>
    <input type="submit" value={btnText} />

    </form>
    
  )
}

export default TaskForm