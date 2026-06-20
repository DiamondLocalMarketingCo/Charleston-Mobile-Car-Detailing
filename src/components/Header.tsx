"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Charleston Mobile Car Detailing home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-car" />
        <span className="brand-spark brand-spark-one">✦</span>
        <span className="brand-spark brand-spark-two">✦</span>
      </span>
      <span className="brand-copy">
        <strong>Charleston</strong>
        <span>Mobile Car Detailing</span>
      </span>
    </a>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary header-cta" href="#contact">
          Book now
        </a>
        <button
          className={`menu-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="button button-primary" href="#contact" onClick={closeMenu}>
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
}
