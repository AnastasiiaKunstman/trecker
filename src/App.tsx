import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PasswordRecovery from "./components/Auth/PasswordRecovery/PasswordRecovery";
import CardList from "./components/CardList/CardList";
import VacancyForm from "./components/VacancyForm/VacancyForm";
import StudentTable from "./components/Table/StudentTable";
import Profile from "./components/Profile/Profile";
import InvitedStudents from "./components/Student/InvitedStudents";
import NotFoundError from "./components/NotFoundError/NotFoundError";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth podComponent="login" />} />
        <Route path="/signup" element={<Auth podComponent="registration" />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/vacancies" element={<VacancyForm />} />
        <Route path="/vacancies/active" element={<CardList />} />
        <Route path="/vacancies/archive" element={<CardList />} />
        <Route path="/students" element={<StudentTable />} />
        <Route path="/students/save" element={<StudentTable />} />
        <Route path="/students/invited" element={<InvitedStudents />} />
        <Route path="/students/viewed" element={<InvitedStudents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </>
  )
}

export default App
