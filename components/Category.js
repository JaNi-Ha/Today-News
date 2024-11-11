import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`;

const CategoryButton = styled.button`
  background: ${({ category }) => {
    switch (category) {
      case '식물성식품':
        return '#A8E6CF';
      case '건강식품':
        return '#FF8C94';
      case '전통식품':
        return '#FFD3B6';
      case 'K푸드':
        return '#FFABAB';
      case '컬래버레이션':
        return '#FF677D';
      case '건강음료':
        return '#D4A5A5';
      case '글로벌 마케팅':
        return '#392F5A';
      case '식품유통':
        return '#6A0572';
      case '식품가격':
        return '#F9FBCB';
      case '제과제빵':
        return '#FFE156';
      default:
        return '#E0E0E0';
    }
  }};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-family: 'Freesentation', sans-serif;
  transition: background 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryButton category="식물성식품">식물성식품</CategoryButton>
      <CategoryButton category="건강식품">건강식품</CategoryButton>
      <CategoryButton category="전통식품">전통식품</CategoryButton>
      <CategoryButton category="K푸드">K푸드</CategoryButton>
      <CategoryButton category="컬래버레이션">컬래버레이션</CategoryButton>
      <CategoryButton category="건강음료">건강음료</CategoryButton>
      <CategoryButton category="글로벌 마케팅">글로벌 마케팅</CategoryButton>
      <CategoryButton category="식품유통">식품유통</CategoryButton>
      <CategoryButton category="식품가격">식품가격</CategoryButton>
      <CategoryButton category="제과제빵">제과제빵</CategoryButton>
    </CategoryContainer>
  );
};

export default Category;
