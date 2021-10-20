export const getTask = () => {
    return{
      type: "TASK_REQUEST"
    }
}

export const add = (title) => {
    return {
        type: "ADD_TASK_REQUEST",
        payload: title //data yg akan dikirim ke store
    }
}

export const del = (id) => {
    return {
        type: "DEL_TASK_REQUEST",
        payload: id
    }
}