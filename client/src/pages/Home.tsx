import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page - My Blog</title>
        <meta name="description" content="Welcome to the home page of our blog." />
      </Helmet>
      <h1>Home Page</h1>
      <ul>
        <li>
            <Link to='/about' >About</Link>
        </li>
        <li>
            <Link to='/blog' >Blog</Link>
        </li>
      </ul>
    </>
  );
}