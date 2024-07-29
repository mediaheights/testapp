import './App.css';
import Student from './components/Students';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <Header/>
        <Student 
          name="Raman"
          age={20}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
