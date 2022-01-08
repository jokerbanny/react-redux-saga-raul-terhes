import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, addPost } from '../store/actions/postsAction'

const Posts = () => {
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAdd = () => {
    dispatch(addPost({ title, body }))
    setTitle('')
    setBody('')
  }
  return (
    <div>
      <div>
        <button onClick={() => dispatch(getPosts())}>Get Posts</button>
      </div>
      <input
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='description'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAdd}>Add Item</button>
      <div style={{ marginTop: '100px', width: '700px' }}>
        <h3>List Of Post From jsonplaceholder</h3>
        <ul>
          {posts.map((post) => (
            <li>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Posts
