import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Index from './components/header/Index';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
   <div className='mt-16'>
    <Provider store={store}>
    <BrowserRouter>
    <h1><Index/></h1>
    <Routes>
      <Route path='/' exact element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
    </BrowserRouter>
    </Provider>

   </div>
  
  );
}

export default App;
