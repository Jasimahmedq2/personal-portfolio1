import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

const links = [
  {
    name: 'home', to: "/", id: 1

  },
  {
    name: 'about', to: "/about", id: 2
  },
  {
    name: 'contact', to: "/contact", id: 3
  },
  {
    name: 'project', to: "/service", id: 4
  }
]


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {
      links.map(link => <MenuItem
        key={link.id}
        link={link}
      />)
    }
  </motion.ul>
);



