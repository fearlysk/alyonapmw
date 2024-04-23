import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import './styles/App.scss';
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import ScrollToTopOnLoad from "./utils/scrollToTopOnLoad";

const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTopOnLoad />
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path={routes.HOME} element={<Home />} />
            <Route path="/alyonapmw" element={<Home />} /> {/* temp, remove on deploy */}
            <Route path={routes.PORTFOLIO} element={<Portfolio />} />
            <Route path={routes.SERVICES} element={<Services />} />
            <Route path={routes.COURSES} element={<Courses />} />
            <Route path={routes.CONTACTS} element={<Contacts />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
