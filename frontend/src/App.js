import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/product/:id' component={Product} />
            <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
