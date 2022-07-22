import React, { useState, useEffect } from 'react'
const getLocalItem = ()=>{
    let list = localStorage.getItem('lists')
    if(list){
        return JSON.parse(list)
    }
    else{
        return[]
    }
}
function Notes() {
    const [text, setText] = useState("Add Some Text")
    const [task, setTask] = useState(getLocalItem)
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log('clicked')
        setTask([...task, text])
        setText('')

    }

    const removeTask =(a)=>{
        const finalData = task.filter((curElem, index) =>{
            return index !== a
        })
        setTask(finalData)
    }
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(task))
      
    }, [task])
    
    return (
        <div>
            <div className=' container'>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">iaMac</label>
                        <input type="text" className="form-control" id="noteApp" value={text} onChange={handleOnchange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className=' row' >
                {
                    task.map((elem, index)=>{
                        return <div className="col-md" key={elem.index} >
                            <p >{elem}</p>
                            <button onClick={()=> removeTask(index)}>X</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Notes