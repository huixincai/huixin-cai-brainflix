import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="/videos/:videoId" element={<MainVideoPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
