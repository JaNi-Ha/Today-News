import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsCard from '../components/Card';
import Category from '../components/Category';
import styled from 'styled-components';

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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxOH9F2SpN1iqVE0H4kH5RGlj2pPnUNqRJ87Fo47vleBk-Elu6pF4B7ImlZ5AcnMlVX/exec');
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory ? post.카테고리 === selectedCategory || (selectedCategory === '기타' && !['CM1', 'CM2', 'CM3', '신사업팀', '신제품'].includes(post.카테고리)) : true;
    const matchesSearch = post.제목.includes(searchTerm) || post.내용.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  console.log(filteredPosts);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Category setSelectedCategory={setSelectedCategory} />
      <FeaturedPostsTitle>오늘의 뉴스</FeaturedPostsTitle>
      <Container>
        {filteredPosts.length === 0 ? (
          <p>결과가 없습니다.</p>
        ) : (
          filteredPosts.map((post, index) => (
            <NewsCard
              key={index}
              title={post.제목}
              date={new Date(post.날짜).toLocaleDateString()}
              content={post.내용}
              summary={post.요약}
              category={post.카테고리}
              imageUrl={post.이미지}
              sourceUrl={post.출처}
            />
          ))
        )}
      </Container>
    </>
  );
}
