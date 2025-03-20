import React from 'react'

const trendingPosts = [
    { id: 1, title: "Post 1", description: "This is post 1" },
    { id: 2, title: "Post 2", description: "This is post 2" },
  ];

  
const page = () => {
  return (
    <>
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Trending Posts</h1>
      {trendingPosts.map((post) => (
        <div key={post.id} className="p-4 bg-white shadow rounded mb-3">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default page