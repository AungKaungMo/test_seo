import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const dummyPosts = [
  { id: '1', title: 'First Blog Post' },
  { id: '2', title: 'Second Blog Post' }
];

export default function BlogListing() {
  return (
    <>
      <Helmet>
        <title>Blog Listing - My Blog</title>
        <meta name="description" content="Browse all our latest blog posts." />
      </Helmet>
      <ul>
        <li>
            <Link to='/home' >Home</Link>
        </li>
        <li>
            <Link to='/about' >About</Link>
        </li>
      </ul>
      <h1>Blog Listing</h1>
      <ul>
        {dummyPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      
    </>
  );
}