//import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodosPage from './page/TodoPage/TodoPage';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
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
    </Container>
      
  );
}

export default App;
