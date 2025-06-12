import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - My Blog</title>
        <meta name="description" content="Learn more about our blog and mission." />
      </Helmet>
      <h1>About Us</h1>
      <ul>
        <li>
            <Link to='/home' >Home</Link>
        </li>
        <li>
            <Link to='/blog' >Blog</Link>
        </li>
      </ul>
    </>
  );
}
