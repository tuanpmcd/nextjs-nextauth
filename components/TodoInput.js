import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const TodoInput = () => {
    const [todo, setTodo] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/todo', { todo })
            toast.success(res.data.msg)
            setTodo('')
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }
    return (
        <div className='mt-4 d-flex justify-content-center flex-column align-items-center'>
            <h2 className='text-center text-secondary'>Todo List</h2>
            <form className='input-group mt-4 mb-4 shadow' style={{ maxWidth: '450px' }}
                onSubmit={handleSubmit} >
                <input type="text" value={todo} className="form-control" onChange={e => setTodo(e.target.value)}
                />
                <button type='submit' className="btn btn-info">Create</button>
            </form>
        </div>
    )
}

export default TodoInput
