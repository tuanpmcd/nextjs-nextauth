import React from 'react'

const TodoItem = ({ todo }) => {
    return (
        <div className="card d-flex justify-content-center mx-auto bg-light shadow" style={{ maxWidth: '450px' }}>
            <div className="card-body">
                {todo.name}
            </div>
        </div>
    )
}

export default TodoItem
