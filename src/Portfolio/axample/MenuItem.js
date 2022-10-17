import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ link }) => {
  const style = { border: `2px solid ${colors[link]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <div className="text-placeholder" style={style}>
        <button className="btn-sm btn-outline px-8 w-50 mx-auto text-xl uppercase">    
          <NavLink to={link.to}>{link.name}</NavLink>
        </button>
      </div>


    </motion.li>
  );
};
