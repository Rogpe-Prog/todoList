import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td>
                    <IconButton style='outline-success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton style='outline-warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPendind(todo)}></IconButton>
                    <IconButton style='outline-danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}