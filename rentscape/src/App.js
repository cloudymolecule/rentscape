import { Route, Switch } from 'react-router'
import './App.css'
import MainMenus from './containers/Main'
import NewReview from './containers/NewReview'

function App() {
  return (
    <Switch>
      <div className='wrapper'>
        <Route exact path="/" component={MainMenus} />
        <Route exact path="/add-property" component={NewReview} />
      </div>
    </Switch>
  )
}

export default App
