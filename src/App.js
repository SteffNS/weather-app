//dev components
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageNotFound from './pages/PageNotFound';

//components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename = "weather-app">
        <Header />
        <main className = 'app-wrapper'>
          <Routes>
            <Route path='/' exact='true' element={<PageHome />} />
            <Route path ='/about' element ={<PageAbout />} />
            <Route path = '*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
