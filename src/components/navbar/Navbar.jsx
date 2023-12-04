import "./Navbar.scss";
import pic from "../../img/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={pic} alt="" width="100px" />
      <ul>
        <li><a href="#">HOROSCOPE</a></li>
        <li><a href="#">DAILY</a></li>
        <li><a href="#">TAROT</a></li>
        <li><a href="#">ARTICLE</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
