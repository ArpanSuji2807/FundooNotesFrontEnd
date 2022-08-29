import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/signup';
import Header from './components/header/header';
import Signin from './pages/signin/signin';
import Takenote1 from './components/takenote1/takenote1';
import Takenote2 from './components/takenote2/takenote2';
import Dashboard from './pages/dashboard/dashboard';
import ReactRouter from './router/router';
import Provider from 'react-redux/es/components/Provider';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <ReactRouter/>
      </Provider>
    </div>
  );
}

export default App;
