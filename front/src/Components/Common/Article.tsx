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

const Article = () => {
  return (
    <ArticleBlock>
      <p className='Head'>
        <span className='title'>Title 1</span>
        <span className='date'>2022-09-20</span>
      </p>
      <p className='content'>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non obcaecati
        ipsam magnam accusantium architecto ratione reprehenderit dolore,
        recusandae dolor nesciunt quos praesentium aliquid blanditiis odit
        repellat ullam velit ex culpa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga vitae officia impedit possimus ex velit itaque
        modi aliquam qui sint obcaecati, accusantium excepturi. Excepturi
        dignissimos eaque quaerat culpa. Obcaecati, laborum.
      </p>
    </ArticleBlock>
  );
};
export default Article;
