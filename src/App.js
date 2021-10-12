//import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodosPage from './page/TodoPage/TodoPage';

function App() {
  return (
    <>
      <TodosPage />
       <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </>
      
  );
}

export default App;
