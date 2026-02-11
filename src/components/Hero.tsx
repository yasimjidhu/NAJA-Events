"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <header id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Professional concert stage with spectacular lighting and sound systems by Naja Events"
                    fill
                    className="object-cover opacity-60 scale-105 animate-pulse-slow"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase border border-primary/30 rounded-full glass">
                        Elevating Every Moment
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                        LIGHT <span className="text-primary italic">&</span> SOUND <br />
                        <span className="text-gradient">REDEFINED</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
                        Naja delivers immersive sensory experiences with world-class audio systems and breathtaking lighting designs for any scale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,170,0,0.4)]">
                            Get an Estimate
                        </button>
                        <button className="glass text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/20">
                            View Our Work
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </header>
    );
}
