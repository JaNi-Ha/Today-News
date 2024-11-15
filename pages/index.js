npm install @vercel/analytics

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsCard from '../components/Card';
import Category from '../components/Category';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Analytics } from '@vercel/analytics/react';

root.render(
  <Router>
    <RouteApp />
	  <Analytics/>
  </Router>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const FeaturedPostsTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxOH9F2SpN1iqVE0H4kH5RGlj2pPnUNqRJ87Fo47vleBk-Elu6pF4B7ImlZ5AcnMlVX/exec');
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Category />
      <FeaturedPostsTitle>오늘의 뉴스</FeaturedPostsTitle>
      <Container>
        {posts.map((post, index) => (
          <NewsCard
            key={index}
            title={post.제목}
            date={new Date(post.날짜).toLocaleDateString()}
            content={post.내용}
            category={post.카테고리}
            imageUrl={post.이미지}
          />
        ))}
      </Container>
    </>
  );
}
