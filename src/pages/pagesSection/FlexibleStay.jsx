import React from "react";
import { Link } from "react-router-dom";
import { CalendarMinus2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FlexibleStay() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      rotateY: -15 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.5
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto w-[92vw] grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Column */}
        <motion.div 
          className="aos order-2 lg:order-1 relative"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating Element 1 */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg z-10"
            animate={floatingAnimation}
          >
            <span className="text-sm font-bold">Flexible Stays</span>
          </motion.div>
          
          {/* Floating Element 2 */}
          <motion.div 
            className="absolute -bottom-4 -left-4 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-lg z-10"
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
          >
            <span className="text-xs font-semibold text-blue-600">No Lock-in</span>
          </motion.div>

          <motion.img
            src="https://5.imimg.com/data5/SELLER/Default/2023/3/293250320/MO/IK/UG/9676319/hostel-managemen-info-500x500.jpg"
            alt="Flexible Stay Options"
            className="w-full rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 relative z-0"
            loading="lazy"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content Column */}
        <motion.div 
          className="aos order-1 lg:order-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={textVariants}
            className="text-3xl lg:text-4xl font-black text-slate-900 mb-6"
          >
            Flexible Stay Options
          </motion.h2>
          
          <motion.p 
            variants={textVariants}
            className="text-base lg:text-lg text-slate-600 mb-6 leading-relaxed"
          >
            Our day-wise booking system allows students to pay only for the days they actually stay.
            Perfect for exam periods, interviews, or short-term accommodations.
          </motion.p>

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8"
            variants={containerVariants}
          >
            {[
              "Pay per day stayed",
              "1-30 day flexibility",
              "Instant confirmation"
            ].map((tag, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={tagVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* List */}
          <motion.ul 
            className="space-y-3 text-slate-600 mb-8"
            variants={containerVariants}
          >
            {[
              "Real-time availability and instant booking confirmation",
              "No monthly lock-in — extend or shorten stay anytime",
              "Digital receipts and 24/7 customer support"
            ].map((item, index) => (
              <motion.li 
                key={index}
                custom={index}
                variants={listItemVariants}
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }
                  }}
                />
                <span className="group-hover:text-blue-700 transition-colors duration-200">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CalendarMinus2Icon/>
              </motion.div>
              <motion.span
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white bg-[length:200%_auto]"
                style={{ WebkitBackgroundClip: "text" }}
              >
                Explore Flexible Stays
              </motion.span>
            </Link>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="mt-8 flex items-center gap-2 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            {/* <span className="whitespace-nowrap">Trusted by 500+ students</span> */}
            <motion.div
              className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
      />
    </section>
  );
}

export default FlexibleStay;