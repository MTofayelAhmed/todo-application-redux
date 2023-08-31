import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <body>
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar></Navbar>

        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header></Header>

          <hr class="mt-4" />

          <TodoList></TodoList>

          <hr class="mt-4" />

          <Footer></Footer>
        </div>
      </div>
    </body>
    </Provider>
  );
}

export default App;
