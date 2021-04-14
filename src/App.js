import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { UserGlobalProvider } from './context/userContext/UserState';
import SignInPage from './components/SignIn-Up/SignInPage';
import SignUpPage from './components/SignIn-Up/SignUpPage';
import HomePage from './components/main-sections/HomePage';
import { ArticleGlobalProvider } from './context/articleContext/ArticleState';
import { QuestionGlobalProvider } from './context/questionContext/QuestionState';
import ArticlePage from './components/layout/articles/ArticlePage';
import QuestionPage from './components/layout/questions/QuestionPage';
import { ReplyGlobalProvider } from './context/replyContext/ReplyState';

const App =()=> {

  return (
    <UserGlobalProvider>
      <ArticleGlobalProvider>
        <QuestionGlobalProvider>
          <ReplyGlobalProvider>
      <div className="App">
        <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path="/article/:id" component={ArticlePage} />
          <Route exact path="/question/:id" component={QuestionPage} />         

          </Switch>
        </Router>
            </div>
          </ReplyGlobalProvider>
        </QuestionGlobalProvider>
      </ArticleGlobalProvider>
    </UserGlobalProvider>
  );
}

export default App;
