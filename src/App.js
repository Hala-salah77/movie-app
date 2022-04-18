import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from './Layout/Navbar';
import Movies from './Components/Movies';
import MovieDetails from './Components/MovieDetails';
import NotFound from "./Components/NotFound";
function App() {
  return (
    <>
<BrowserRouter>
          <Navbar />
            <Switch>
              <Route path={"/"} exact component={Movies} />
              <Route path={"/product-details/:id"} exact component={MovieDetails} />
              <Route path={"*"} component={NotFound} />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
