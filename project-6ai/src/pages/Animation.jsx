import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
        x: 1000,
        scale: 0.95,
        rotateY: 180,
    },
    enter: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
    },
    exit: {
        opacity: 0,
        x: -1000,
        scale: 1.05,
        rotateY: -180,
    },
};

const AnimatedLayout = ({ children }) => {
    return (
        <motion.div
            style={{
                minWidth: '100%',
            }}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{
                type: 'spring',
                stiffness: 50,
                mass: 1.5,
                damping: 25,
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedLayout;
