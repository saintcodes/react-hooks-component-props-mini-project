import React from 'react'
import Article from "./Article"

function ArticleList({posts}) {

  const renderPosts = posts.map((post) => (
    <Article key={post.id} post={post} title={post.title} date={post.date} preview={post.preview}/>
  ))

  console.log(posts)
  return (
    <main>
      {renderPosts}
    </main>
  )
}

export default ArticleList