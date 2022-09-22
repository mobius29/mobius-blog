import styled from 'styled-components';
import MainContents from './MainContents';
import MainSidebar from './MainSidebar';

const MainContentsBoxContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;
const MainContentsBox = () => {
  return (
    <MainContentsBoxContainer>
      <MainSidebar />
      <MainContents />
    </MainContentsBoxContainer>
  );
};

export default MainContentsBox;
