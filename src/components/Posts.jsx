import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [ selectedPost, setSelectedPost ] = useState(null);
  const [ searchQuery, setSearchQuery] = useState("");
  const [ filterValue, setFilterValue ] = useState("postName")

  const handleSearch = () => {
    const selectedPost = posts.filter((post) => {
      if (filterValue === "postName") {
        return post.title.toLowerCase().includues(searchQuery.toLowerCase());
      } else if (filterValue === "category") {
        return post.category 
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      }
      return true;
    });
        setSelectedPost(selectedPost);
  };

    const filteredPosts = posts.filter((post) => {
      const postName = post.title ? post.title.toLowerCase() : "";
      const postCategory = post.category ? post.category.toLowerCase() : "";

      if (filterValue === "postName") {
        return postName.includes(searchQuery.toLowerCase());
      } else if ( filterValue === "category") {
        return postCategory.includes(searchQuery.toLowerCase());
      }
      return true;
    });

    const postItems = searchQuery
    ? filteredPosts.map((post) => (
      <div key={post.id}>
      <h2>{post.title}</h2>
      </div>
    ))
      : null;


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
      <p>
      <input
          type="text"
          placeholder="Search by name or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="postName">Post Name</option>
          <option value="category">Category</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </p>
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