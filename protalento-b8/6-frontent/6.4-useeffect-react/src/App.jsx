import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('colombia');

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('consultando api');
        const response = await fetch(
          `https://www.reddit.com/r/${subreddit}.json`,
        );

        const json = await response.json();

        if (!json.error) {
          setPosts(json.data.children.map((post) => post.data));
        } else {
          console.log(json?.message);
          setPosts([]);
        }
      } catch (error) {
        console.log(error.message);
        setPosts([]);
      }
    }

    fetchData();
  }, [subreddit]);

  return (
    <main className="app">
      <input
        className="search"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        type="text"
      />

      <ul className="results">
        {posts.map((post) => (
          <li className="item" key={post.id}>
            <a href={post.url} target="_blank" rel="noreferrer">
              Titulo:
              {' '}
              {post.title}
            </a>
            <p>
              Autor:
              {' '}
              {post.author_fullname}
            </p>
            <p>
              Fecha:
              {' '}
              {new Date(post.created * 1000).toLocaleDateString('es-ES', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
