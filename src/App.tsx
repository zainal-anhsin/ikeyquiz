import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import 'antd/dist/antd.min.css'; // Import antd styles

// Import your page components
import Home from './schoolPages/index/page';
import Quiz from './schoolPages/quiz/page';
import Homework from './schoolPages/homework/page';
import Exam from './schoolPages/exam/page';
import LiveQuiz from './schoolPages/live-quiz/page';
import Dashboard from './livequizPages/dashboard/page';
import ThemePage from './schoolPages/themepage/page';
import Student from './livequizPages/student/page';
import QuestionSet from './livequizPages/questionset/page';
import AddStudent from './livequizPages/student/addStudent/page';
import EditStudent from './livequizPages/student/editStudent/page';
import UploadStudent from './livequizPages/student/uploadStudent/page';
import SettingQuestion from './livequizPages/questionset/editQuestion/components/settingQuestion';
import UploadQuestion from './livequizPages/questionset/uploadQuestion/page';
import EditQuestion from './livequizPages/questionset/editQuestion/page';
import ManageGroup from './livequizPages/setting/manageGroup/page';
import BulkEdit from './livequizPages/setting/manageGroup/bulkEdit/page';
import RoomResult from './livequizPages/report/roomResult/page';
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
