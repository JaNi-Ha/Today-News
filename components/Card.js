import styled from 'styled-components';
import Swal from 'sweetalert2';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 10px;
  width: calc(25% - 20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  font-family: 'Freesentation', sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Date = styled.p`
  color: #888;
  font-size: 0.9em;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Category = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ category }) => {
    switch (category) {
      case '식물성식품':
        return '#d1f7d1';
      case '건강식품':
        return '#f7d1d1';
      case '전통식품':
        return '#d1d1f7';
      case 'K푸드':
        return '#f7e1d1';
      default:
        return '#e0e0e0';
    }
  }};
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const NewsCard = ({ title, date, content, category, imageUrl, sourceUrl }) => {
  const handleClick = () => {
    Swal.fire({
      title: title,
      html: content.split('. ').map(sentence => `<p style="margin-bottom: 10px; text-align: left;">${sentence.trim()}</p>`).join(''),
      icon: 'info',
      confirmButtonText: 'Close',
      footer: `<a href="${sourceUrl}" target="_blank">출처</a>`,
    });
  };

  return (
    <Card onClick={handleClick}>
      <CardImage 
        src={imageUrl} 
        alt={title} 
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = 'fallback-image-url.jpg';
        }} 
      />
      <Category category={category}>{category}</Category>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <CardContent>
        {/* 내용은 팝업에서 표시하므로 여기서는 비워둡니다. */}
      </CardContent>
    </Card>
  );
};

export default NewsCard;
