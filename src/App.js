import logo from './logo.svg'
import React, {useState } from 'react'
import FormInput from './components/FormInput'
import TodoItem from "./components/TodoItem"
import EditModal from './components/EditModal'
import ConfirmModal from './components/ConfirmModal'
import "./App.css"

 function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "reading a book"
    },
    {
      id: 2,
      title: "workout"
    },
    {
      id: 3,
      title: "kerjaan"
    },
    {
      id: 4,
      title: "tidur"
    },
  ]
  )
  const [openModal, setOpenModal] = useState(false);
  const addTask = data => {
    console.log(data);
    const id = todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    setTodos({
      setTodos: ([...todos, newData])
    })
    console.log(...todos, newData);
  }


  return (
    <div>
         <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
      </div>
          <div className="list">
            {todos.map(item =>
              <TodoItem
                key={item.id}
                todo={item}
                del={(id) => this.openConfirmModal(id)}
                open={openModal}
              />
              )}
      </div>
      <div className="input-form">
          <FormInput
            add={addTask}
          />
      </div>
         {/* <EditModal
            edit={this.state.isEdit}
            close={this.closeModal}
            change={this.setTitle}
            data={this.state.editData}
            update={this.update}
          />
          {todos.map(item =>
            <ConfirmModal
            key={item.id}
            dataC={item}
            openIsDelete={this.state.isDelete}
            closed={this.closeConfirmModal}
            deleted={this.deleteTask}
            itemId={this.state.selectedId}
          />
          )} */}
        </div>
      </div>
  )
 }

export default App;