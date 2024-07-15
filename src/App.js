import React, { useContext, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import StudentReport from "./components/Dashboard/StudentReport";
import MainMenu from "./components/Menu/index";
import { UserContext, UserProvider } from "./contexts/UserContext";
// import 'antd/dist/antd.css';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#F4F4F4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "98%",
          backgroundColor: "#F4F4F4",
          flex:1
        }}
      >
        <Provider store={store}>
          <Router>
            <div style={{ position: "fixed", zIndex: 100, width: "98%" }}>
              <MainMenu />
            </div>

            <div style={{ height: 45, border: "0px solid" }}></div>

            {/* <MainMenu /> */}
            <Routes>
            <Route
                path="/admin-dashboard"
                element={
                  user && user.role != "student" ? (
                    <AdminDashboard />
                  ) : (
                    <Navigate to="/student-dashboard" />
                  )
                }
              />
              <Route
                path="/student-dashboard/:id"
                element={
                  user && user.role != "student" ? (
                    <StudentDashboard />
                  ) : (
                    !!user?.role == "student" && (
                      <Navigate to={`/student-dashboard/${user.id}`} />
                    )
                  )
                }
              />
              {/* <Route
                path="/student-dashboard/:id"
                element={
                  user && user.role === "admin" ? (
                    <StudentDashboard />
                  ) : !!user?.role=='student' && (
                    <Navigate to={`/student-dashboard/${user.id}`} />
                  )
                }
              /> */}
            </Routes>

            {/* <div
              style={{
                // position: "fixed",
                // width:'98%',
                bottom: 0,
                border: "0px solid",
                backgroundColor: "#494949",
                marginTop: 60,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#eaeaea",
                fontWeight: "bold",
                padding: "3px 0px 7px 0px",
              }}
            >
              Team Winnovate - Copywrite 2024
            </div> */}
          </Router>
        </Provider>
      </div>
    </div>
  );
};

const WrappedApp = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default WrappedApp;
