import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDataInList } from '../slices/todoSlice';

const Input = () => {
    const [data, setData] = useState({
        task:'',
        details:''
    })

    const dispatch = useDispatch();
    const getData = (e) => {
        setData((val) => {
            return {
                ...val, [e.target.name] : e.target.value
            }
        })
    }
    const submit = () => {
        dispatch(addDataInList(data));
    }   
    // console.log(data);

  return (
    <div>
        <input type='text' placeholder='enter task' name='task' onChange={getData} />
        <input type='text' placeholder='enter details' name='details' onChange={getData}/>
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Input