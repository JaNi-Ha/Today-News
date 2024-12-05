import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 250px 0;
  background: url('https://cdn.pixabay.com/photo/2018/08/21/17/26/korea-3621711_1280.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  h1, p {
    position: relative;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 20px auto;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <HeaderContainer>
      <Title>Card News</Title>
      <Subtitle>음료 마케터의 최신 뉴스</Subtitle>
      <SearchInput 
        type="text" 
        placeholder="원하는 키워드 검색" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </HeaderContainer>
  );
};

export default Header;
