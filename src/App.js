import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { TemplateProvider } from "./templates/TemplatesProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/product/DetailView";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("carts"));
    dispatch(fetch(cart));
  }, []);
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={DetailView}></Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
