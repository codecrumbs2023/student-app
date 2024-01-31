import './App.css';
import ParentComponent from './components/ParentComponent.jsx';
import Greet from './components/greet.js';
import CounterComponent from './components/CounterComponent.js';
import ToDo from './components/ToDo.js';
import Welcome from './components/Welcome.js';

function App() {
  return (
    <div className="App">
      <Greet/>
      <ParentComponent/>
      <CounterComponent/>
      <ToDo/>
      <Welcome/>
    </div>
  );
}

export default App;
