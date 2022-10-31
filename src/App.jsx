import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";
import 'material-icons/iconfont/material-icons.css'
import './App.css';
import {Header} from "./layout/Header";
import {Main} from "./layout/Main";
import {Footer} from "./layout/Footer";

function App() {
  return (
      <>
        <Header />
          <Main />
        <Footer />
      </>
  );
}

export default App;
