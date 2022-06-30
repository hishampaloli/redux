
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Usage from './Usage';
import ShowLabel from './Show-label';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Usage />
      <ShowLabel />
    </div>
    </Provider>
  );
}

export default App;
