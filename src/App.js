import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Header from "./components/Header"

// Pages
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
