import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/signup';
import Header from './components/header/header';
import Signin from './pages/signin/signin';
import Takenote1 from './components/takenote1/takenote1';
import Takenote2 from './components/takenote2/takenote2';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
       {/* <Signin/> */}
       <Dashboard/>
      {/* <Header/> */}
      {/* <Takenote1/>
      <Takenote2/> */}
    </div>
  );
}

export default App;
