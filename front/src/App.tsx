import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import RetrospectPage from './Pages/RetrospectPage';
import StudyPage from './Pages/StudyPage';
import DiaryPage from './Pages/DiaryPage';
import RetrospectDetailPage from './Pages/RetrospectDetailPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/retrospect' element={<RetrospectPage />} />
      <Route path='/study' element={<StudyPage />} />
      <Route path='/diary' element={<DiaryPage />} />
      <Route path='/retrospect/:id' element={<RetrospectDetailPage />} />
    </Routes>
  );
};

export default App;
