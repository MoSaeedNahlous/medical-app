/* eslint-disable no-unused-vars */
import './App.css';
import {
  HashRouter,
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


// التطبيق ك كل والذي نضع ضمنه مخازن الحالات وكل الطرق اي ال راوتنغ والصفحات
const App =()=> {

  return (
    <UserGlobalProvider>
      <ArticleGlobalProvider>
        <QuestionGlobalProvider>
          <ReplyGlobalProvider>
      <div className="App">
        <HashRouter basename="/">
        
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/doc-signup' component={DocSignUpPage} />
          <Route exact path='/articles' component={ArticlesPage} />      
          <Route exact path="/article/:id" component={ArticlePage} />
          <Route exact path="/questions" component={QuestionsPage} /> 
          <Route exact path="/question/:id" component={QuestionPage} />

          <PrivateUserRoute exact path="/profile" component={Profile} />
          <PrivateUserRoute exact path="/admin" component={Admin} />
                  

          {/* <Route path='/medical-app/404' component={NotFound} />
          <Redirect to='/medical-app/404' /> */}
                  
          
        </HashRouter>
            </div>
          </ReplyGlobalProvider>
        </QuestionGlobalProvider>
      </ArticleGlobalProvider>
    </UserGlobalProvider>
  );
}

export default App;
