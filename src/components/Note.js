import React, {useState} from 'react'

function Note() {
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')
    const [task, setTask] = useState([])

    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleChange1 = (event) => {
        setText1(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log('clicked')
        setTask([...task, text, text1])
        setText('')

    }
    const removeTask =(a)=>{
        const finalData = task.filter((curElem, index) =>{
            return index !== a
        })
        setTask(finalData)
    }
    return (
       <div>
         <div className=' bg-danger text-white'>
            <div className=" bg-primary  ">
                <div className=' '>
                    <h1 className=' text-light fw-bolder p-2 text-center'>iaMac</h1>
                </div>
            </div>
            <div className="conatiner p-3">
                <form onSubmit={submitHandler}>
                    <div class="mb-3">
                        <label  class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="noteApp" value={text} onChange={handleChange} />
                            
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Add Note</label>
                        <br />
                        <textarea name="" id="" cols="38" rows="10" value={text1} onChange={handleChange1}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
           
        </div>
        <div className=' row'>
         {
                 task.map((elem, index)=>{
                     return <div className="col-md container" key={elem.index} >
                       <div className=' d-flex'>  <p >{elem}</p>
                         <button type='button' className=' btn btn-primary ' onClick={()=> removeTask(index)}>X</button></div>
                     </div>
                 })
             }
         </div>
       </div>
         
    )
}

export default Note