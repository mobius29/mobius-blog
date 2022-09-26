import styled from 'styled-components';

const DetailPageMainBlock = styled.div`
  margin: 0 auto;
  width: 800px;

  .title {
    font-size: 3rem;
    font-weight: 600;
  }

  .content {
    margin-top: 2rem;
    min-height: 300px;

    font-size: 1.25rem;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

const DetailPageMain = () => {
  return (
    <DetailPageMainBlock>
      <div className='title'>Title1</div>
      <div className='content'>Content1</div>
      <div className='navigation'>
        <div className='prev'>이전 글</div>
        <div className='next'>다음 글</div>
      </div>
    </DetailPageMainBlock>
  );
};

export default DetailPageMain;
