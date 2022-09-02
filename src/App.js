import './App.css';
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import Interest from './components/Interest'
function App() {
  return (
    <div className="App">
      <div className='card'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
