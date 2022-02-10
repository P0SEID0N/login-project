
import './formFooter.css';

/*
* Component: FormFooter
* Structures the footer elements, which all makeup different text and links. 
* Note: none of the links go anywhere due to no react-router being present
*/
const FormFooter = () => {
  return (
    <footer className="FormFooter">
        <p className="FooterElement"><a href="/#">Forgot your password?</a></p>
        <p className="FooterElement">Dont have an account? <a href="/#">Sign up</a></p>
        <p className="FooterElement"><a href="/#">Resend Email Confirmation</a></p>
    </footer>
  );
}

export default FormFooter;
