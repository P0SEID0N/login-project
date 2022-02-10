
import './formHeader.css';

const FormHeader = ({children}) => {
  return (
    <header className="FormHeader">
        <h2>{children}</h2>
    </header>
  );
}

export default FormHeader;
