import BlogCard from '../components/BlogCard/BlogCard'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';

export default function Blog({ movies }) {

  const [posts, setPosts] = useState([]);

  useEffect((e) => {
    setPosts(movies);
  }, [movies]);

  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1>Últimos Reviews do blog</h1>
      {
        movies.map((m) => {
          return (
            <BlogCard key={m.episode_id} title={m.title} content={m.opening_crawl}></BlogCard>
          )
        })
      }
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://swapi.dev/api/films`)
  const data = await res.json()
  const movies = data.results;
  return { props: { movies } }
}
