import netflix from "../images/netflix-2-logo-svgrepo-com (1).svg"

const Header =( {title =""}) => {
  return (
    <header>
    <div className="container">
      <img className="logo" src={netflix} alt="logo netflix" />
    </div> 
    </header>
  );
};

export default Header;
