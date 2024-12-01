import logo from './logo.svg';
import './App.scss';
//import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*
* co 2 component: class component / function component:
 - function nomal: function App()
 - arrow function: const App = () =>{}
* dung cu phap JSX: function cua javascript => return ve html
*/
//const App = () => {
  function App(){ //function cua Component
  return (
    <div className="App new-name-class">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Simple TODO Apps &amp; Reactjs v17
        </p>

        <ListTodo />
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

    </div>
  );
}

export default App;
