import {React,memo} from 'react'

function Button({HandleClick,children}) {
  console.log("render button click ",children)
  return (
  <button onClick={HandleClick}>{children}</button>
  )
}

export default memo(Button)