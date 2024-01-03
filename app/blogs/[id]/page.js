import { notFound } from 'next/navigation'
import React from 'react'

const singleBlog = ({params}) => {
    const {id} = params
    if( id  > id.length ){
       notFound()
    }
  return (
    <div> This is blog id : {id} </div>
  )
}

export default singleBlog
