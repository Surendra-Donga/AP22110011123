import React from 'react'

const feedData = [
    { id: 1, content: "Feed content 1" },
    { id: 2, content: "Feed content 2" },
  ];
const page = () => {
  return (
    <>
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Feed</h1>
      {feedData.map((feed) => (
        <div key={feed.id} className="p-4 bg-white shadow rounded mb-3">
          <p>{feed.content}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default page