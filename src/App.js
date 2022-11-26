import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Form />
    </>
  );
}

export default App;
