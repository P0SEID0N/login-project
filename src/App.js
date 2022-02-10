import './App.css';

import LoginForm from './components/loginForm/loginForm';
import FormHeader from './components/formHeader/formHeader';
import FormFooter from './components/formFooter/formFooter';

/* 
* Component: App
* This is the root component of our application, it is structured by separating the form into three elements, header main and footer.
*/
const App = () => {
  return (
    <article className="flex-container">
      <main className="container">
        <FormHeader><h2>Sign In</h2></FormHeader>
        <LoginForm/>
        <FormFooter/>
      </main>
    </article>
  );
}

export default App;
