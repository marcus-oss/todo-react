import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Style from "./App.module.css"
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { Itask } from "./Interfaces/Task";
import { useState } from "react";
import Modal from "./Components/Modal";

function App() {
  const [taskList, setaskList] = useState<Itask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Itask | null>(null);

  const deleteTask = (id:number ) => {
      setaskList(taskList.filter(task => {
        return task.id !== id
      }))
  }

  const hideorShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal");
    if(display) {
      modal!.classList.remove("hide");
    }else {
      modal!.classList.add("hide");
    }
  }
  const editTask = (task:Itask): void => {
    hideorShowModal(true); 
    setTaskToUpdate(task);

  }

  const updateTask = (id: number , title:string , dificculty: number) => {
  
      const updateTask: Itask = {id, title, dificculty}

      const updateItems = taskList.map((task) => {
        return task.id === updateTask.id ? updateTask : task 

      })
      setaskList(updateItems);

      hideorShowModal(false);
  }
  return (
    <div>
      <Modal children={<TaskForm 
      btnText="editar Tarefa" 
      taskList={taskList}
      task={taskToUpdate}
      handleUpdate={updateTask}
      />}
    />
      <Header/>
      <main className= {Style.main}>
      <div>
        <h2>O que você vai fazer?</h2>
        <TaskForm btnText="Criar tarefa" 
        taskList={taskList}
        setTaskList={setaskList}
        />
      </div>
      <div>
        <h2>Suas tarefas:</h2>
        <TaskList  taskList={taskList}  handleDelete={deleteTask} handleEdit={editTask}/>
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
