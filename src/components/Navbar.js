// images

import airbnbLogo from "../resources/images/airbnb.png";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img className="navbar--logo" src={airbnbLogo} alt="air bnb logo" />
    </nav>
  );
}
