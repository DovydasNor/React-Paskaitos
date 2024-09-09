import './App.css'
import './Main.css'
import HeaderImage from './components/HeaderImage'
import HeaderLogo from './components/HeaderLogo'
import HeaderNav from './components/HeaderNav'
import MainContent from './components/MainConten'
import MainNavAndContent from './components/MainNavAndContent'

function App() {
  return (
    <div className="App">
      <div className='Container'>
      <header className="App-header">
        <HeaderLogo />
        <HeaderNav />
        <HeaderImage />
      </header>

      <main>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainNavAndContent />
      </main>
      </div>
    </div>
  );
}

export default App;
