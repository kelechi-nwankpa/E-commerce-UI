import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Provider } from './context';

function App() {
 

  return (
    <>
   
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cart" element={<CartPage/>} />
          <Route/>
        </Routes>
      </Layout>

    </>
  )
}

export default App
