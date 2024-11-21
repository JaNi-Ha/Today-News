import Card from '../../components/Card';

const CM2News = () => {
  const newsData = [
    { title: '신사업팀 뉴스 제목 1', content: '신사업팀 관련 뉴스 내용 1' },
    { title: '신사업팀 뉴스 제목 2', content: '신사업팀 관련 뉴스 내용 2' },
  ];

  return (
    <div>
      <h1>CM2 뉴스</h1>
      {newsData.map((news, index) => (
        <Card key={index} title={news.title} content={news.content} />
      ))}
    </div>
  );
};

export default CM2News;

