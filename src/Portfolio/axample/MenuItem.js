import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



export const MenuItem = ({ link, toggle }) => {

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <div className="text-placeholder">
        <button className="btn-sm btn-outline sm:px-8 sm:text-xl uppercase ">
          <Link
          onClick={toggle}
            to={link.to}
            smooth={true}
            spy={true}
            duration={1000}
          >{link.name}</Link>
        </button>
      </div>

    </motion.li>
  );
};
