import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <nav className="navbar-container">
      <h1>ReactJS: Formulários</h1>
      <div className="navlink-container">
        <NavLink to="/">Form Puro</NavLink>
        <NavLink to="/rhf">Hook Form</NavLink>
        <NavLink to="/formik">Fornmik</NavLink>
      </div>
    </nav>
  );
}
