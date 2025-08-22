import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const MainContent = () => (
  <main className="flex-grow">
    <Outlet />
  </main>
);

// Main DefaultLayout component
function DefaultLayout() {
  return (
    <div className="min-h-screen bg-gray-bg flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
