import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import RetrospectPage from './Pages/RetrospectPage';
import StudyPage from './Pages/StudyPage';
import DiaryPage from './Pages/DiaryPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/retrospect' element={<RetrospectPage />} />
      <Route path='/study' element={<StudyPage />} />
      <Route path='/diary' element={<DiaryPage />} />
    </Routes>
  );
};

export default App;
