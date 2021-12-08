import classes from './Header.module.css';
import logo from "../../assets/underground-logo.png";

const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="London Underground Logo" />
      </div>
      <div className={classes.welcome}>
        <h1>Tube Arrivals</h1>
        <p>London Undergound Arrival Updates</p>
      </div>
    </header>
  );
};

export default Header;
