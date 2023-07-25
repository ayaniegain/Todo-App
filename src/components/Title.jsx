import {React,memo} from 'react'

function Title() {
    console.log("title render")
  return (
    <div>Call back hooks</div>
  )
}

export default memo(Title)