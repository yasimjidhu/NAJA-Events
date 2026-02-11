"use client";

import { motion } from "framer-motion";
import { Users, Award, Zap, Clock } from "lucide-react";

const stats = [
    { icon: Users, value: "500+", label: "Events Delivered" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Zap, value: "100%", label: "Client Satisfaction" },
    { icon: Clock, value: "24/7", label: "Technical Support" },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">About Naja</span>
                        <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                            Crafting <span className="text-gradient">Unforgettable</span> Experiences
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            Since our inception, Naja has been at the forefront of event production, combining cutting-edge technology with creative artistry. We don't just provide equipment—we engineer experiences that resonate.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Our team of certified audio engineers and lighting designers work tirelessly to ensure every event is executed flawlessly, from initial concept to final curtain call.
                        </p>
                        <button className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
                            Learn More About Us
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-2xl p-8 text-center hover:border-primary/30 transition-all group"
                            >
                                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                <div className="text-4xl font-black mb-2 text-gradient">{stat.value}</div>
                                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
