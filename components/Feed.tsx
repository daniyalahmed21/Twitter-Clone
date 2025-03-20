import React from 'react'
import Post from './Post'
import { prisma } from '@/prisma'

const Feed = async() => {
  const post =await prisma.post.findMany({
    
  })
  return (
    <div>
      {post.map((post)=>(
        <Post key={post.id}/>
      ))}
      {/* <Post/>
      <Post/> */}
    </div>
  )
}

export default Feed