import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
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
import DocSignUpPage from './components/SignIn-Up/DocSignUpPage';
import ArticlesPage from './components/layout/articles/ArticlesPage';
import QuestionsPage from './components/layout/questions/QuestionsPage';
import PrivateUserRoute from './Routes/PrivateUserRoute';
// import PrivateAdminRoute from './Routes/PrivateAdminRoute';
import Profile from './components/main-sections/Profile';
import NotFound from './components/main-sections/NotFound';
import Admin from './components/main-sections/Admin';


// التطبيق ك كل والذي نضع ضكمه مخازن الحالات وكل الطرق اي ال راوتنغ والصفحات
const App =()=> {

  return (
    <UserGlobalProvider>
      <ArticleGlobalProvider>
        <QuestionGlobalProvider>
          <ReplyGlobalProvider>
      <div className="App">
        <Router>
        <Switch>
          <Route exact path='/medical-app/' component={HomePage} />
          <Route exact path='/medical-app/signin' component={SignInPage} />
          <Route exact path='/medical-app/signup' component={SignUpPage} />
          <Route exact path='/medical-app/doc-signup' component={DocSignUpPage} />
          <Route exact path='/medical-app/articles' component={ArticlesPage} />      
          <Route exact path="/medical-app/article/:id" component={ArticlePage} />
          <Route exact path="/medical-app/questions" component={QuestionsPage} /> 
          <Route exact path="/medical-app/question/:id" component={QuestionPage} />

          <PrivateUserRoute exact path="/medical-app/profile" component={Profile} />
          <PrivateUserRoute exact path="/medical-app/admin" component={Admin} />
                  

          <Route path='/medical-app/404' component={NotFound} />
          <Redirect to='/medical-app/404' />
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
