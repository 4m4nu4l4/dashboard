import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Body() {
  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#FAF1E5",
          color: "#333",
          margin: "0",
          padding: "20px 0px",
          minHeight: "64.8vh",
        }}
      >
        <Outlet />
      </div>
      <div
        style={{
          backgroundColor: "#FAF1E5",
        }}
      >
        <Footer />
      </div>
    </>
  );
}
