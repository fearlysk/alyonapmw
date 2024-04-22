import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import routes from "./constants/routes";
import './styles/App.scss';
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import Courses from "./pages/Courses/Courses";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.PORTFOLIO} element={<Portfolio />} />
          <Route path={routes.SERVICES} element={<Services />} />
          <Route path={routes.COURSES} element={<Courses />} />
          <Route path={routes.CONTACTS} element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
