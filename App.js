import React from "react";
import Navbar from "./components/Navbar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionsManagement from "./components/PermissionsManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">{children}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionsManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
