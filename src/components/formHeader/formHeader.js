
import './formHeader.css';

/*
* Component: FormHeader
* @param Props.children -> default prop passed to access any wrapped content
* Emcompases all elements that makeup the header function, this wraps whatever is passed from app.js so you can customize the header with other components should you wish.
*/
const FormHeader = ({children}) => {
  return (
    <header className="FormHeader">
        <h2>{children}</h2>
    </header>
  );
}

export default FormHeader;
