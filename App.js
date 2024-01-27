import logo from './logo.svg';
import './App.css';
import Sidebar from './sideBar';
import NewPage from './NewPage';
import MainContent from './MainContent';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="container">
        <Sidebar />
        <div className="content">
          <NewPage />
          


  <MainContent />

        </div>
      </div>
    </div>
  );
}

export default App;
