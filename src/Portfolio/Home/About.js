import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import react from "../../image/react.png";
import js from "../../image/js.png";
import node from "../../image/node.png";
import express from "../../image/express.png";
import mongodb from "../../image/mongodb.png";
import htmlCss from "../../image/html-css.jfif";
import resume from "../../image/jasim-resume.pdf";
import "./About.css";

const About = () => {
  return (
    <div Id="about">
      <div className="px-12 py-24 relative">
        <h2 className="text-4xl  font-bold mb-3 rotate absolute top-2 underline decoration-secondary decoration-wavy		 left-0 mt-6">
          About
        </h2>
        <h3 className="text-2xl font-bold text-accent py-6 mt-4">
          I'm Jasim Web developer
        </h3>
        <h3 className="text-xl mt-8 text-base-100 font-mono">
          In my capacity as a contract-based web developer, I have successfully
          delivered and completed 3-4 projects, encompassing a comprehensive
          spectrum of front-end and back-end technologies. I have consistently
          demonstrated a high level of proficiency in meeting project
          objectives, overcoming challenges, and ensuring client satisfaction
          while adhering to specified timelines. Moreover, I have thoughtfully
          curated a portfolio website to showcase my work and achievements,
          providing a more comprehensive overview of my capabilities and
          expertise in the field.
        </h3>
      </div>

      <div
        className="w-5/6 mx-auto sm:skew-x-6	


z-10 rounded-md about-me shadow-xl rounded border-t "
        style={{
          marginTop: "-2rem",
          background: "#353433",
        }}
      >
        <h2 className="text-2xl text-primary font-bold text-center pb-16">
          <BsCodeSlash className="w-50 mx-auto text-5xl text-secondary" />
          Skills & Technology
        </h2>

        <div className="relative">
          <Tabs>
            <TabList className="tabs -top-20 mt-2 left-6 z-10">
              <Tab className="tab tab-bordered text-white">Skills</Tab>
              <Tab className="tab tab-bordered text-white">service</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 py-6">
                <div className="effect-container">
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primary" />
                    <span className="">React</span>{" "}
                  </h2>
                  <motion.img
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    src={react}
                    alt="img"
                  />
                </div>
                <div className="effect-container">
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primary" />
                    <span className="">Javascript</span>{" "}
                  </h2>
                  <motion.img
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    src={js}
                    alt="img"
                  />
                </div>
                <div className="effect-container">
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primary" />
                    <span className="">Node js</span>{" "}
                  </h2>
                  <motion.img
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    src={node}
                    alt="img"
                  />
                </div>
                <div className="effect-container">
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primary" />
                    <span className="">Mongodb</span>{" "}
                  </h2>
                  <motion.img
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    src={mongodb}
                    alt="img"
                  />
                </div>
                <div className="effect-container">
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primary" />
                    <span className="">Express js</span>{" "}
                  </h2>
                  <motion.img
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    src={express}
                    alt="img"
                  />
                </div>
                <div className="effect-container">
                  <h2
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    className="flex lg:max-w-lg items-center justify-around font-bold text-4xl bg-base-300 shadow-xl rounded-lg"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primary" />
                    <span className="">html & css</span>{" "}
                  </h2>
                  <motion.img
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    src={htmlCss}
                    alt="img"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 py-2"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="card lg:max-w-lg shadow-xl"
                  style={{ background: "#082a37" }}
                >
                  <div className="card-body">
                    <h2 className="card-title text-xl text-yellow-100 font-bold">
                      Front-End development
                    </h2>
                    <p className="text-sm text-white font-bold">
                      Technology: html, css, tailwindCss, Bootstrap javascript
                      and React js
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="card lg:max-w-lg bg-base-300 shadow-xl"
                  style={{ background: "#082a37" }}
                >
                  <div className="card-body">
                    <h2 className="card-title text-xl text-yellow-100 font-bold">
                      Back-End development
                    </h2>
                    <p className="text-sm text-white font-bold">
                      technology: node js, express js, mongodb, rest api, cors
                      policy, json web token, pagination
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="card lg-max-w-lg bg-base-200 shadow-xl"
                  style={{ background: "#082a37" }}
                >
                  <div className="card-body">
                    <h2 className="card-title text-xl text-yellow-100 font-bold">
                      full-Stack development
                    </h2>
                    <p className="text-sm text-white font-bold">
                      Mern stack - React js, node js, mongodb and express js
                    </p>
                  </div>
                </motion.div>
              </div>
            </TabPanel>
          </Tabs>

          <a
            href={resume}
            className="flex justify-between items-center btn btn-primary text-xl font-bold absolute right-0 "
            download
          >
            <FiDownloadCloud className="mr-2 text-2xl" /> download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
