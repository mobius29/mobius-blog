import styled from 'styled-components';
import StudyPageList from './StudyPageList';
import StudyPageSidebar from './StudyPageSidebar';

const StudyPageMainBlock = styled.div`
  display: flex;

  width: 100%;

  .content-bl {
    width: 800px;
  }
`;

const StudyPageMain = () => {
  return (
    <StudyPageMainBlock>
      <StudyPageSidebar />
      <div className='content-bl'>
        <StudyPageList />
      </div>
    </StudyPageMainBlock>
  );
};

export default StudyPageMain;
