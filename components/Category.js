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

const Category = () => {
    return (
        <CategoryContainer>
            <CategoryButton>CM1</CategoryButton>
            <CategoryButton>CM2</CategoryButton>
            <CategoryButton>CM3</CategoryButton>
            <CategoryButton>신사업팀</CategoryButton>
            <CategoryButton>신제품</CategoryButton>
        </CategoryContainer>
    );
};

export default Category;
