import Clock from './components/Clock';
// import NavigationClock from './components/NavigationClock';
import './App.css'

function App() {
  return (
    <div>
      <div style={{ display: 'flex', flexFlow: 'column wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: `${100}vh` }}>
        <Clock />
      </div>
    </div >
  );
}

export default App;
