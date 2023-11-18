import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import OneCompany from "./pages/OneCompany";
import Users from "./pages/Users";
import OneUser from "./pages/OneUser";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/company/:id" element={<OneCompany />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<OneUser />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
