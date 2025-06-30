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
import Dashboard from './dashboard/page';
import ThemePage from './pages/themepage/page';
import Student from './student/page';
import QuestionSet from './questionset/page';
import AddStudent from './student/addStudent/page';
import EditStudent from './student/editStudent/page';
import UploadStudent from './student/uploadStudent/page';
import SettingQuestion from './questionset/editQuestion/components/settingQuestion';
import UploadQuestion from './questionset/uploadQuestion/page';
import EditQuestion from './questionset/editQuestion/page';
import ManageGroup from './setting/manageGroup/page';
import BulkEdit from './setting/manageGroup/bulkEdit/page';
import RoomResult from './report/roomResult/page';
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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="themepage" element={<ThemePage />} />
          <Route path="student" element={<Student />} />
          <Route path="questionset" element={<QuestionSet />} />
          <Route path="student/add-student" element={<AddStudent />} />
          <Route path="student/edit-student" element={<EditStudent />} />
          <Route path="student/upload-student" element={<UploadStudent />} />
          <Route path="questionset/setting-question" element={<SettingQuestion />} />
          <Route path="questionset/upload-question" element={<UploadQuestion />} />
          <Route path="questionset/edit-question" element={<EditQuestion />} />
          <Route path="setting/manage-group" element={<ManageGroup />} />
          <Route path="setting/manage-group/bulk-edit" element={<BulkEdit />} />
          <Route path="report/room-result" element={<RoomResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
