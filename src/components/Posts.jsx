import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const COHORT_NAME = '2302-ACC-PT-WEB-PT-B';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        console.log(response.data.data.posts)
        const info = response.data.data.posts;
        setPosts(info);
      } catch (e) {
        console.log(e);
      }
    };

    getPosts();
  }, [BASE_URL]);

  // Implement conditionals to only show posts if logged in, w link to login.
  return (
    <div>
      <h2>Post List</h2>
      <ul id="postlist">
        {posts.length > 0 ? (
          posts.map((item) => (
            <div key={item._id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{"$"}{item.price}</p>
              <p>{item.updatedAt}</p>
              <p>{item.location}</p>
              <p>{item.willDeliver ? "Will deliver" : "Will not deliver"}</p>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </ul>
    </div>
  )}