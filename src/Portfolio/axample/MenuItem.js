import * as React from "react";
import { motion } from "framer-motion";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller  } from "react-scroll";
import  Scroll from 'react-scroll';


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
          <Link 
          to={link.to}>{link.name}</Link>
        </button>
      </div>


    </motion.li>
  );
};
