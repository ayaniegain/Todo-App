import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponents() {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(50000)

    const IncSalary=useCallback(()=>{
        setSalary(salary+10000)
    },[salary])
    const IncAge=useCallback(()=>{
        setAge(age+1)
    },[age])

  return (
    <div >
        <Title/>
        <Count text="age" count={age}/>
        <Button HandleClick={IncAge}>Increment age</Button>
        <Count text="salary" count={salary}/>
        <Button HandleClick={IncSalary}>Imcrement salary</Button>

    </div>
  )
}

export default ParentComponents