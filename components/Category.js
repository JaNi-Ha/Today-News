import styled from 'styled-components';

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #f8f8f8;
    padding: 20px;
`;

const CategoryButton = styled.button`
    background-color: #e0e0e0;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d0d0d0;
    }
`;

const Category = ({ setSelectedCategory }) => {
    return (
        <CategoryContainer>
            <CategoryButton onClick={() => setSelectedCategory('')}>전체</CategoryButton>
            <CategoryButton onClick={() => setSelectedCategory('CM1')}>CM1</CategoryButton>
            <CategoryButton onClick={() => setSelectedCategory('CM2')}>CM2</CategoryButton>
            <CategoryButton onClick={() => setSelectedCategory('CM3')}>CM3</CategoryButton>
            <CategoryButton onClick={() => setSelectedCategory('신사업팀')}>신사업팀</CategoryButton>
            <CategoryButton onClick={() => setSelectedCategory('신제품')}>신제품</CategoryButton>
            <CategoryButton onClick={() => setSelectedCategory('기타')}>기타</CategoryButton>
        </CategoryContainer>
    );
};

export default Category;
