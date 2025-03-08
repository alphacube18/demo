import './css/Header.css'
const Header = (props) => {
    return (
      <header className="header">
        <h1>{props.Title}</h1>
      </header>
    );
  };
 
  export default Header;
  