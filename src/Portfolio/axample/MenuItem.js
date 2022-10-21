import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Scroll from 'react-scroll';


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



export const MenuItem = ({ link }) => {
  const style = { border: `2px solid ${[link]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <div className="text-placeholder" style={style}>
        <button className="btn-sm btn-outline px-8 w-50 mx-auto text-xl uppercase">
          <Link
            to={link.to}
            spy={true}
            smooth={true}
            duration={500}
          >{link.name}</Link>
        </button>
      </div>

    </motion.li>
  );
};
