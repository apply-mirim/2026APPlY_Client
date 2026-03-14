import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import Header from '@/components/Common/Header';
import LiveCursorOverlay from '@/components/Common/LiveCursorOverlay';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LiveCursorOverlay />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;