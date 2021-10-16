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
  const [isDelete, setIsDelete] = useState(false);
  const [isId, selectedId] = useState({id: 0});
  const [isEdit, setIsEdit] = useState(false);
   const [data, setData] = useState({
     id: "",
     title: ""
  })

  const addTask = data => {
    const id = todos.length
    const newData = {
      id: id + 1,
      title: data
    }
      setTodos([...todos, newData])
   }

  //  Delete
   const deleteTask = () => {
    const {id} = isId;
    setTodos(todos => todos.filter(item => item.id !== id))
    setIsDelete(false)
   }

   const openConfirm = (id) => {
     setIsDelete(true)
     selectedId({ id })
    }

   const closeConfirmModal = () => {
    setIsDelete(false)
   }

  //  Edit
   const openEdit = (id, data) => {
     setIsEdit(true);
     setData({
       id,
       title: data
     })
   }
   const closeEdit = () => {
     setIsEdit(false);
   }

   const setTitle = e => {
     setData({
       ...data,
        title: e.target.value
     })
   }

   const update = () => {
     const { id, title } = data
     const newData = { id, title }
     const newTodos = todos
     newTodos.splice((id - 1), 1, newData)
     setTodos(newTodos)
     setIsEdit(false)
     setData({id: "", title: ""})
   }

   return (
    <div>
         <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
      </div>
          <div className="list">
            {todos.map (item =>
              <TodoItem
                key={item.id}
                todo={item}
                del={openConfirm}
                open={openEdit}
              />
              )}
      </div>
      <div className="input-form">
          <FormInput
            add={addTask}
          />
      </div>
         <EditModal
            edit={isEdit}
            close={closeEdit}
            change={setTitle}
            data={data}
            update={update}
          />
          {todos.map(item =>
            <ConfirmModal
            key={item.id}
            dataC={item}
            openIsDelete={isDelete}
            closed={closeConfirmModal}
            deleted={deleteTask}
            itemId={selectedId}
          />
          )}
        </div>
      </div>
  )
 }

export default App;