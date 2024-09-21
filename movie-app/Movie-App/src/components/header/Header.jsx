import { useState } from 'react'
import  "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    const [Mobile, setMobile] = useState(false)
  return (
    <div>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img
                src="https://play-lh.googleusercontent.com/09V0Z-LB9y7-RA3yygmRdYaNtt-w1LExNEdctz7txCmIy11E_Z0ZCLDeUwwKYK5UXA=w600-h300-pc0xffffff-pd"
                alt=""
              />
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/"> Home</Link>
              <Link to="/series"> Series</Link>
              <Link to="/Moviepage"> Movies</Link>
              <Link to="/tvshow"> TV shows</Link>
              <Link to="/contact"> Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </div>
  );
}
