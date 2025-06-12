import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Blog Post {id} - My Blog</title>
        <meta name="description" content={`Details of blog post ${id}.`} />
      </Helmet>
      <h1>Blog Post Detail - {id}</h1>
    </>
  );
}