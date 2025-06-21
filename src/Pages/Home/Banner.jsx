import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 5.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        yoyo: Infinity,
        duration: 4.5
      }
    }
  };

  const bgVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero min-h-screen ">
        {/* Animated Background */}
        <motion.div
          className="hero bg-opacity-60"
          variants={bgVariants}
        ></motion.div>
        
        <motion.div
          className="hero-content text-neutral-content text-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/S7xTGkFJ/banner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "80vh",
          }}
          variants={bgVariants}
        >
          <div className="max-w-md">
            <motion.p
              className="mb-10 text-3xl font-semibold text-cyan-200 hover:text-purple-200 p-2"
              variants={textVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🔥 FLASH SALE: 50% OFF EVERYTHING! 🔥
            </motion.p>
            
            <motion.button
              className="btn btn-primary rounded-2xl p-6"
              variants={buttonVariants}
              whileHover="hover"
            >
              <NavLink to="/Categories">Get Started</NavLink>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;