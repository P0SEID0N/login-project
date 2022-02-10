
import './formFooter.css';

const FormFooter = ({children}) => {
  return (
    <footer className="FormFooter">
        <p className="FooterElement"><a href="/#">Forgot your password?</a></p>
        <p className="FooterElement">Dont have an account? <a href="/#">Sign up</a></p>
        <p className="FooterElement"><a href="/#">Resend Email Confirmation</a></p>
    </footer>
  );
}

export default FormFooter;
