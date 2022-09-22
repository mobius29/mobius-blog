import styled from 'styled-components';

const MainSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-left: 2rem;
  width: 200px;

  .img {
    margin: 0 auto;
    width: 150px;
    height: 150px;

    border-radius: 50%;

    background-color: black;
  }

  .nav-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100px;
    margin-top: 2rem;

    font-size: 1rem;
  }

  .nav-text .name {
    font-weight: 600;
    font-size: 1.25rem;
  }
`;

const MainSidebar = () => {
  return (
    <MainSidebarContainer>
      <div className='img'></div>

      <nav className='nav-text'>
        <p className='nav-item name'>Seongjin Lee</p>
        <p className='nav-item univ'> &raquo; Univ: Korea Univ.</p>
        <p className='nav-item home'> &raquo; Location: Seoul / Korea</p>
      </nav>
    </MainSidebarContainer>
  );
};

export default MainSidebar;
