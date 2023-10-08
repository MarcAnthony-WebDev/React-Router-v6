import { Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/red30-tech-logo.png';

import Home from './Home';
import Categories from './Categories';
import About from './About';

function App() {
  return (
    <div className='app'>
      <header className='container'>
        <img
          className='logo'
          src={logo}
          alt='Red30 Tech logo'
          title='Red30 Tech | Home'
        />

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/categories'>Categories</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} title='welcome to home 30 tech' />
        <Route path='categories' element={<Categories />} />
        <Route path='about' element={<About />} />
      </Routes>

      <footer className='container'>
        &copy;2022 | <a href='https://red30tech.com/'>Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
