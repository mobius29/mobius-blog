import styled from 'styled-components';

const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  width: 100%;

  .Head {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 2rem;
  }

  .date {
    font-size: 1.25rem;

    padding-right: 0.5rem;
  }

  .content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-align: left;
    overflow: hidden;
    line-height: 1.2rem;
    height: 3.6rem;

    margin-top: 0.5rem;
    padding-left: 0.5rem;
    font-size: 1.25;
  }
`;

interface ArticleProps {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Article: React.FC<ArticleProps> = ({ id, title, content, date }) => {
  return (
    <ArticleBlock>
      <p className='Head'>
        <span className='title'>{title}</span>
        <span className='date'>{date}</span>
      </p>
      <p className='content'>{content}</p>
    </ArticleBlock>
  );
};
export default Article;
