import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const links = [
  {
    name: 'home', to: "home", id: 1

  },
  {
    name: 'about', to: "about", id: 2
  },
  {
    name: 'project', to: "service", id: 4
  },
  {
    name: 'review', to: "testimonials", id: 4
  },
  {
    name: 'contact', to: "contact", id: 3
  },

]


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants} className="flex justify-around items-center sm:pl-16 pl-12 py-6">
    {
      links.map(link => <MenuItem
        toggle={toggle}
        key={link.id}
        link={link}

      />)
    }
  </motion.ul>
);



