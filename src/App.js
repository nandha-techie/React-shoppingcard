import Router from './Router/Router';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
      </Provider>  
  );
}

export default App;
