import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const CategoryItem = styled.a`
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  background: linear-gradient(45deg, #ff6b6b, #f7b733);
  color: white;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(45deg, #f7b733, #ff6b6b);
    transform: scale(1.05);
  }
`;

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryItem href="#">Nature</CategoryItem>
      <CategoryItem href="#">Photography</CategoryItem>
      <CategoryItem href="#">Relaxation</CategoryItem>
      <CategoryItem href="#">Vacation</CategoryItem>
      <CategoryItem href="#">Travel</CategoryItem>
      <CategoryItem href="#">Adventure</CategoryItem>
    </CategoryContainer>
  );
};

export default Category;
