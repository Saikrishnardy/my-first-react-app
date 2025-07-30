import './App.css';
import Heading from './components/Heading';
import App1 from './components/App1';
import ProductList from './components/ProductList';
import Brands from './components/brands';

function App() {
let a=10
  return (
    
    <div className="App">
      <Heading />
      <App1></App1>
      <ProductList/>
      <Brands/>
   
     
    </div>
  );
}

export default App;
