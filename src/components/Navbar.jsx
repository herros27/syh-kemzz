import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const currentIndex = [
      "/",
      "/about",
      "/project",
      "/certificate",
      "/contact",
    ].indexOf(location.pathname);
    setActiveIndex(currentIndex);
  }, [location]);

  return (
    <nav className="bg-midnight">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-14">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <AnimatedSection>
                <div className="flex space-x-4">
                  {["/", "/about", "/project", "/certificate", "/contact"].map(
                    (path, index) => {
                      const labels = [
                        "Home",
                        "About",
                        "Projects",
                        "Certificates",
                        "Contact",
                      ];
                      return (
                        <motion.div
                          key={index}
                          whileTap={{ scale: 1.7 }}
                          animate={
                            activeIndex === index
                              ? { scale: 1.5 }
                              : { scale: 1 }
                          }
                        >
                          <Link
                            to={path}
                            className={`text-white block px-3 py-2 rounded-md text-base font-medium ${
                              location.pathname === path ? "bg-gray-700" : ""
                            }`}
                            onClick={() => setActiveIndex(index)}
                          >
                            {labels[index]}
                          </Link>
                        </motion.div>
                      );
                    }
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="sm:hidden"
          initial={{ opacity: 0, height: 0 }} // Mulai dengan tidak terlihat dan tinggi nol
          animate={{ opacity: 1, height: "auto" }} // Mengatur opacity dan tinggi ke auto saat membuka
          exit={{ opacity: 1, height: 0 }} // Mengatur kembali saat menutup
          transition={{ duration: 0.3 }} // Durasi animasi
        >
          <div className="px-2 pb-3 space-y-2">
            {["/", "/about", "/project", "/certificate", "/contact"].map(
              (path, index) => {
                const labels = [
                  "Home",
                  "About",
                  "Projects",
                  "Certificates",
                  "Contact",
                ];
                return (
                  <motion.div
                    key={index}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      activeIndex === index ? { scale: 0.9 } : { scale: 1 }
                    }
                  >
                    <AnimatedSection>
                      <Link
                        to={path}
                        className={`text-white block px-3 py-2 rounded-md text-base font-medium ${
                          location.pathname === path ? "bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          setActiveIndex(index);
                          setIsOpen(false); // Tutup menu saat item diklik
                        }}
                      >
                        {labels[index]}
                      </Link>
                    </AnimatedSection>
                  </motion.div>
                );
              }
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
