import logo from './logo.svg';
import './App.css';

import LoginForm from './components/loginForm/loginForm';
import FormHeader from './components/formHeader/formHeader';
import FormFooter from './components/formFooter/formFooter';

const App = () => {
  return (
    <article className="flex-container">
      <section className="container">
        <FormHeader>Sign In</FormHeader>
        <LoginForm/>
        <FormFooter/>
      </section>
    </article>
  );
}

export default App;
