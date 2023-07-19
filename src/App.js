import { useRef } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import { ReactComponent as Top } from './assets/icons/top-icon.svg'
import './App.css';

function App() {
  const top = useRef();

  const handleScroll = () => {
    if (top.current) {
      if (window.scrollY >= 200) {
        top.current.classList.remove('invisible');
      } else {
        top.current.classList.add('invisible');
      }
    }
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <a className="back-to-top flex invisible" ref={top} href='#top'>
        <Top />
      </a>
    </div>
  );
}

export default App;
