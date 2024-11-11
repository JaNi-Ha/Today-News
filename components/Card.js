import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 10px;
  width: calc(33.33% - 20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 15px;
  background: white;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const Date = styled.p`
  color: #888;
  font-size: 0.9em;
`;

const Category = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const NewsCard = ({ title, date, image, category }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <Category>{category}</Category>
      <CardContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
