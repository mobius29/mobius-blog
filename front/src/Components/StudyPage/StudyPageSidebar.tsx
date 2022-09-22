import styled from 'styled-components';

const StudyPageSidebarBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;

  .type-all {
    margin-left: 2rem;

    font-size: 0.875rem;
  }

  .type-bl {
    margin-top: 1.25rem;
    margin-left: 2rem;
  }
  .type-bl .name {
    font-size: 1.25rem;
  }
  .type-bl .list {
    margin-left: 0.5rem;
  }
  .type-bl .item {
    margin-top: 0.375rem;
  }
`;

const StudyPageSidebar = () => {
  return (
    <StudyPageSidebarBlock>
      <p>
        <span className='type-all'>전체보기</span>
      </p>
      <div className='type-bl'>
        <div className='name'>Language</div>
        <ul className='list'>
          <li className='item'>C</li>
          <li className='item'>C++</li>
          <li className='item'>Java</li>
          <li className='item'>JavaScript</li>
          <li className='item'>Python</li>
        </ul>
      </div>

      <div className='type-bl'>
        <div className='name'>Language</div>
        <ul className='list'>
          <li className='item'>C</li>
          <li className='item'>C++</li>
          <li className='item'>Java</li>
          <li className='item'>JavaScript</li>
          <li className='item'>Python</li>
        </ul>
      </div>
    </StudyPageSidebarBlock>
  );
};

export default StudyPageSidebar;
