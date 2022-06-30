import React from 'react'
import { useSelector } from 'react-redux/es/exports'

function ShowLabel() {

    const val = useSelector((state) => state.showLabel);

  return (
    <div>
        {val ? <h1>786</h1> : <h1>Cannot see</h1> }
    </div>
  )
}

export default ShowLabel