import Header from '../components/Header';
import NewsCard from '../components/Card';
import Category from '../components/Category';
import styled from 'styled-components';

const posts = [
  {
    title: "The Road Ahead",
    date: "September 25, 2015",
    image: "/path/to/image1.jpg",
    category: "Photography",
  },
  {
    title: "From Top Down",
    date: "September 25, 2015",
    image: "/path/to/image2.jpg",
    category: "Adventure",
  },
  {
    title: "Still Standing Tall",
    date: "September 25, 2015",
    image: "/path/to/image3.jpg",
    category: "Nature",
  },
  {
    title: "Sunny Side Up",
    date: "September 25, 2015",
    image: "/path/to/image4.jpg",
    category: "Photography",
  },
  {
    title: "Water Falls",
    date: "September 25, 2015",
    image: "/path/to/image5.jpg",
    category: "Relaxation",
  },
];

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
  return (
    <>
      <Header />
      <Category />
      <FeaturedPostsTitle>주목할 기사</FeaturedPostsTitle>
      <Container>
        {posts.slice(0, 2).map((post, index) => (
          <NewsCard key={index} title={post.title} date={post.date} image={post.image} category={post.category} />
        ))}
      </Container>
      <FeaturedPostsTitle>최근 기사</FeaturedPostsTitle>
      <Container>
        {posts.slice(2).map((post, index) => (
          <NewsCard key={index} title={post.title} date={post.date} image={post.image} category={post.category} />
        ))}

      </Container>
    </>
  );
}
