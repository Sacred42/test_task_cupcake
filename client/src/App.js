import './App.css';
import Header from './components/Header/Header';
import GetCurrency from './components/Currency/GetApiCurrency/GetApiCurrency';

function App() {
  return (
    <div className="App">
      <Header/>
      <GetCurrency/>
    </div>
  );
}

export default App;
