import React from 'react'
import { useSelector } from 'react-redux'

const Output = () => {
    const { list } = useSelector((state) => state.todo)

    const generateList = list.map((val, i) => {
        return (
            <div style={{ border: '1px solid gray', margin: '10px' }}>
                <h3>Title: {val.task}</h3>
                <p>Details: {val.details}</p>
            </div>
        )
    })
    return (
        <div>
            {generateList}
        </div>
    )
}

export default Output