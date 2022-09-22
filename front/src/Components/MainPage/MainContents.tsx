import styled from 'styled-components';

const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;

  width: 800px;

  .literal-large {
    font-size: 1.75rem;
    font-weight: 500;
  }

  .literal-middle {
    padding-left: 0.5rem;

    font-size: 1.375rem;
    font-weight: 500;
  }

  .literal-small {
    padding-left: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
  }

  .Stack-item {
    margin-top: 1rem;
    padding-left: 0.5rem;
  }

  .job {
    margin-left: 2rem;

    font-size: 2rem;
    font-weight: 500;
  }

  .Stack-bl {
    margin-top: 2rem;
  }

  .List {
    display: flex;

    margin-top: 1.25rem;
  }

  .List .item {
    margin-left: 1rem;
  }

  .Tools-bl {
    margin-top: 3rem;
  }
`;

const MainContents = () => {
  return (
    <MainContentsContainer>
      <p className='job'>Backend Developer</p>
      <div className='Stack-bl'>
        <p className='literal-large'>Stack</p>
        <div className='Stack-item Language-bl'>
          <p className='literal-middle'>Languages</p>
          <ul className='List literal-small'>
            <li className='item'>C</li>
            <li className='item'>C++</li>
            <li className='item'>Java</li>
            <li className='item'>Python</li>
            <li className='item'>HTML</li>
            <li className='item'>CSS</li>
            <li className='item'>JavaScript</li>
            <li className='item'>TypeScript</li>
          </ul>
        </div>
        <div className='Stack-item Tools-bl'>
          <div className='literal-middle'>Tools</div>
          <ul className='List literal-small'>
            <li className='item'>Node.js</li>
            <li className='item'>Express</li>
            <li className='item'>git</li>
            <li className='item'>github</li>
          </ul>
        </div>
      </div>
    </MainContentsContainer>
  );
};

export default MainContents;
