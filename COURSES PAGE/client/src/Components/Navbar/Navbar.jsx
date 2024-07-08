import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = ({children}) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", name: "דף הבית" },
    { path: "/About", name: "מי אנחנו" },
    { path: "/gallery", name: "גלריה" },
    { path: "/courses", name: "קורסים" },
    { path: "/dashboard", name: "אזור אישי" },
    { path: "/Contact", name: "צור קשר" },
    { path: "/login", name: "כניסה" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${
        isNavbarFixed ? styles.navbarFixed : styles.navbarTransparent
      }`}
    >
      <div className={styles.container}>
      <div className={styles.logo}>

  <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

        <div className={`hidden md:flex ${styles.desktopLinks}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className={`${styles.mobileButton} md:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          🍔
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className={styles.mobileMenu}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.activeLink : ""}`
                }
                onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
