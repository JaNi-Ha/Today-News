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

const SearchInput = styled.input`
  position: relative;
  z-index: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxOH9F2SpN1iqVE0H4kH5RGlj2pPnUNqRJ87Fo47vleBk-Elu6pF4B7ImlZ5AcnMlVX/exec');
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory ? post.카테고리 === selectedCategory || (selectedCategory === '기타' && !['CM1', 'CM2', 'CM3', '신사업팀', '신제품'].includes(post.카테고리)) : true;
    const matchesSearch = post.제목.includes(searchTerm) || post.내용.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Category setSelectedCategory={setSelectedCategory} />
      <FeaturedPostsTitle>오늘의 뉴스</FeaturedPostsTitle>
      <SearchInput 
        type="text" 
        placeholder="원하는 키워드 검색" 
        value={searchTerm} 
        onChange={handleSearch}
      />
      <Container>
        {filteredPosts.map((post, index) => (
          <NewsCard
            key={index}
            title={post.제목}
            date={new Date(post.날짜).toLocaleDateString()}
            content={post.내용}
            category={post.카테고리}
            imageUrl={post.이미지}
            sourceUrl={post.출처}
          />
        ))}
      </Container>
    </>
  );
}
