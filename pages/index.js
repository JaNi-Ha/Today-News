import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsCard from '../components/Card';
import Category from '../components/Category';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Link from 'next/link';

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

  const newsData = {
    CM1: [
      { title: 'CM1 뉴스 제목 1', content: 'CM1 관련 뉴스 내용 1' },
      { title: 'CM1 뉴스 제목 2', content: 'CM1 관련 뉴스 내용 2' },
    ],
    CM2: [
      { title: 'CM2 뉴스 제목 1', content: 'CM2 관련 뉴스 내용 1' },
      { title: 'CM2 뉴스 제목 2', content: 'CM2 관련 뉴스 내용 2' },
    ],
    CM3: [
      { title: 'CM3 뉴스 제목 1', content: 'CM3 관련 뉴스 내용 1' },
      { title: 'CM3 뉴스 제목 2', content: 'CM3 관련 뉴스 내용 2' },
    ],
    신사업팀: [
      { title: '신사업팀 뉴스 제목 1', content: '신사업팀 관련 뉴스 내용 1' },
      { title: '신사업팀 뉴스 제목 2', content: '신사업팀 관련 뉴스 내용 2' },
    ],
  };

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
      <Link href="/news/CM1">
        <button>CM1</button>
      </Link>
      <Link href="/news/CM2">
        <button>CM2</button>
      </Link>
      <Link href="/news/CM3">
        <button>CM3</button>
      </Link>
      <Link href="/news/신사업팀">
        <button>신사업팀</button>
      </Link>
    </>
  );
}
