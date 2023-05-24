import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import questTheme from "src/MyDesignSystemLightTheme";

import Home from "src/components/Home/Home.js";
import Login from "./components/Login/login.js";

import Join from "./components/Join/join.js";
import Avatar from "./components/Avatar1/Avatar.js";
import AvatarStart from "./components/Avatar1/AvatarStart.js";

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Routes>
              {/* 일단 이런식으로 화면 확인 가능한데 수정 필요한 페이지입니다!*/}
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Join" element={<Join />} />
              <Route path="/AvatarStart" element={<AvatarStart />} />
              <Route path="/Avatar" element={<Avatar />} />
            </Routes>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
