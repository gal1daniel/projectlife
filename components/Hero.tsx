"use client"
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {

    const placeholders = [
        "Are you ready?",
        "A new beginning..",
        "Beyond the stars..",
        "Ready to start over?",
        "Earth 2.0",
      ];
     
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };

      return (
        <section className="relative w-full h-screen overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 6 }}
            >
                <Spline
                    className="absolute inset-0 w-full h-full z-10"
                    scene="https://prod.spline.design/AeeZztiiDia5kZV1/scene.splinecode"
                />
                <ShootingStars />
                <StarsBackground />
            </motion.div>

            <AnimatePresence>
                {(
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 4 }}
                    >
                        <motion.h1 
                            className="md:text-6xl text-4xl font-thin text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 1 }}
                        >
                            Project: <span className='font-light'>Life</span>
                        </motion.h1>
                        <motion.p 
                            className="md:text-2xl text-white font-thin text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 2 }}
                        >
                            Find a perfect place for your NEW life.
                        </motion.p>
                        <motion.div 
                            className='mt-4'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 3 }}
                        >
                            <PlaceholdersAndVanishInput
                                placeholders={placeholders}
                                onChange={handleChange}
                                onSubmit={onSubmit}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;