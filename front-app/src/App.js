import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Router from './router/Router';

function App() {
  return (
    <>
      <BrowserRouter>
         <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;
