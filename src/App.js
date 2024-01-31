// import './App.css';
// import React from 'react';
// import { useState, useEffect } from 'react';

// function App() {
//   // useEffect(() =>

//   // )
//   return (
//     <div className="App">
//       Hello World.!
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch data (e.g., from an API)
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means it runs once after the initial render

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;