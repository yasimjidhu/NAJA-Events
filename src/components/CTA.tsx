"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
            <div className="absolute inset-0 bg-mesh opacity-50" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Ready to Create an <br />
                            <span className="text-gradient">Unforgettable Experience?</span>
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Let's bring your vision to life with premium light and sound solutions.
                            Get in touch today for a free consultation and custom quote.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#contact"
                            className="group bg-primary text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,170,0,0.4)] flex items-center gap-2"
                        >
                            Get Free Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="tel:+1234567890"
                            className="glass text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/20 flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 pt-8 border-t border-white/10"
                    >
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>Book 3 Months Ahead & Save 15%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span>Limited Slots Available</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
