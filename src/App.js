import './App.css';
import Navbar from './components/navbar/navbar'
import ProductList from './components/productList/productList'
import SelectedProduct from './components/selectedProduct/selectedProduct'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/selectedProduct">
             <SelectedProduct />
          </Route>
         
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
