import Card from '../../components/Card';

const TodayNews = () => {
  const newsData = [
    { title: '뉴스 제목 1', content: '오늘의 새상품 내용 1' },
    { title: '뉴스 제목 2', content: '오늘의 새상품 내용 2' },
    { title: '뉴스 제목 3', content: '다른 뉴스 내용' },
    { title: '뉴스 제목 4', content: '오늘의 새상품 내용 3' },
  ];

  const filteredNews = newsData.filter(news => news.content.includes('오늘의 새상품'));

  return (
    <div>
      <h1>오늘의 새상품</h1>
      {filteredNews.map((news, index) => (
        <Card key={index} title={news.title} content={news.content} />
      ))}
    </div>
  );
};

export default TodayNews;

