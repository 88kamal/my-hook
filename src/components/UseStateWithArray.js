import React, {useState} from 'react'

function UseStateWithArray() {
    const myBioDate = [
        {
            id: 0,
            myname: 'kamal',
            class: 'Bs-2'
        },
        {
            id: 1,
            myname: 'kamal',
            class: 'Bs-2'
        }
    ] 
    const [clear, setClear] = useState(myBioDate)

    const Clear =()=>{
        setClear([])
    }
  return (
    <div>
   {
    clear.map((elem)=>{
        return <div key={elem.id}>
            <h1>Name: {elem.myname} & class:{elem.class}</h1>
        </div>
    })
   }
   <button onClick={Clear}>Clear</button>
    </div>
  )
}

export default UseStateWithArray