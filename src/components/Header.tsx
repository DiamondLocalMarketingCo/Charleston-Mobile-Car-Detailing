"use client";

import Image from "next/image";
import { useState } from "react";
import { business, serviceAreas, services } from "@/lib/site";

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Charleston Mobile Car Detailing home">
      <Image
        className="brand-logo"
        src="/images/charleston-logo-transparent.png"
        alt="Charleston Mobile Car Detailing"
        width={170}
        height={99}
        priority
      />
    </a>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((open) => {
      if (open) {
        setServicesOpen(false);
        setAreasOpen(false);
      }

      return !open;
    });
  };

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <div className="nav-dropdown">
            <a href="/services" className="nav-dropdown-trigger">Services</a>
            <div className="nav-dropdown-menu" aria-label="Services submenu">
              <a href="/services">All Services</a>
              {services.map((service) => (
                <a key={service.slug} href={`/services/${service.slug}`}>{service.navTitle}</a>
              ))}
            </div>
          </div>
          <a href="/gallery">Gallery</a>
          <div className="nav-dropdown">
            <a href="/service-areas" className="nav-dropdown-trigger">Service Areas</a>
            <div className="nav-dropdown-menu nav-dropdown-wide" aria-label="Service areas submenu">
              <a href="/service-areas">All Service Areas</a>
              {serviceAreas.map((area) => (
                <a key={area.slug} href={`/service-areas/${area.slug}`}>{area.city}, {area.state}</a>
              ))}
            </div>
          </div>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="button button-primary header-cta" href={business.bookingUrl}>
          Book now
        </a>
        <button
          className={`menu-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
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
          <a href="/" onClick={closeMenu}>Home <span aria-hidden="true">↗</span></a>

          <button
            className="mobile-accordion-trigger"
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="mobile-services-submenu"
            onClick={() => setServicesOpen((open) => !open)}
          >
            Services <span aria-hidden="true">⌄</span>
          </button>
          <div
            className={`mobile-submenu${servicesOpen ? " is-open" : ""}`}
            id="mobile-services-submenu"
            aria-hidden={!servicesOpen}
          >
            <a href="/services" onClick={closeMenu}>All Services <span aria-hidden="true">↗</span></a>
            {services.map((service) => (
              <a className="mobile-sub-link" key={service.slug} href={`/services/${service.slug}`} onClick={closeMenu}>
                {service.navTitle}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <a href="/gallery" onClick={closeMenu}>Gallery <span aria-hidden="true">↗</span></a>

          <button
            className="mobile-accordion-trigger"
            type="button"
            aria-expanded={areasOpen}
            aria-controls="mobile-areas-submenu"
            onClick={() => setAreasOpen((open) => !open)}
          >
            Service Areas <span aria-hidden="true">⌄</span>
          </button>
          <div
            className={`mobile-submenu${areasOpen ? " is-open" : ""}`}
            id="mobile-areas-submenu"
            aria-hidden={!areasOpen}
          >
            <a href="/service-areas" onClick={closeMenu}>All Service Areas <span aria-hidden="true">↗</span></a>
            {serviceAreas.map((area) => (
              <a className="mobile-sub-link" key={area.slug} href={`/service-areas/${area.slug}`} onClick={closeMenu}>
                {area.city}, {area.state}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <a href="/reviews" onClick={closeMenu}>Reviews <span aria-hidden="true">↗</span></a>
          <a href="/contact" onClick={closeMenu}>Contact <span aria-hidden="true">↗</span></a>
          <a className="button button-primary" href={business.bookingUrl} onClick={closeMenu}>
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
}
