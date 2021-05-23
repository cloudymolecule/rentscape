import { Route, Switch } from 'react-router'
import './App.css'
import MainMenus from './containers/Main'
import NewReview from './containers/NewReview'
import Register from './containers/Register'
import Login from './containers/Login'

function App() {
  return (
    <Switch>
      <div className='wrapper'>
        <Route exact path="/" component={MainMenus} />
        <Route exact path="/add-property" component={NewReview} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Switch>
  )
}

export default App
