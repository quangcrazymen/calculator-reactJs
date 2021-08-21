
import './App.css';
import Calculator from './components/Calculator';
const math=require('mathjs')

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <h1>Hello world {math.evaluate('1+5')}</h1> */}
          <Calculator/>
      </header>
    </div>
  );
}

export default App;
