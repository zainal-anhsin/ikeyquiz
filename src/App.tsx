import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import 'antd/dist/antd.min.css'; // Import antd styles

// Import your page components
import Home from './pages/index/page';
import Quiz from './pages/quiz/page';
import Homework from './pages/homework/page';
import Exam from './pages/exam/page';
import LiveQuiz from './pages/live-quiz/page';
import Headmaster from './headmaster/page';
import ThemePage from './pages/themepage/page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="homework" element={<Homework />} />
          <Route path="exam" element={<Exam />} />
          <Route path="live-quiz" element={<LiveQuiz />} />
          <Route path="headmaster" element={<Headmaster />} />
          <Route path="themepage" element={<ThemePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
