import Link from 'next/link'
import React from 'react'

const page = () => {
    const blogList = [
        {
            id: 1,
            title: "This is blog 1 titme",
            description : "This is blog 1 description"
        },
        {
            id:  2,
            title: "This is blog 2 titme",
            description : "This is blog 2 description"
        },
        {
            id: 3,
            title: "This is blog 3 titme",
            description : "This is blog 3 description"
        },
    ]
  return (
    <>
        <div className='px-10'>
            <h2 className='mb-3'>Read All Blogs</h2>
            <ul>
                {
                    blogList.map((data) => 
                    <li key={data.id}> <Link href={`/blogs/${data.id}`}> {data.title} </Link> </li>

                    )
                }
            </ul>
        </div>
    </>
  )
}

export default page
