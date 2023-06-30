import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProductForm/>}/>
      <Route path="/producttable" element={<ProductTable/>}/>
    <Route path="/update/:pid" element={<UpdateForm/>}></Route>
      </Routes>
      
      </BrowserRouter>
        
    </div>
  );
}

export default App;
