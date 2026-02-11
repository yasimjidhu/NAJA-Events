"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Volume2, Lightbulb, Sparkles } from "lucide-react";

const services = [
    {
        icon: Volume2,
        title: "Premium Sound Systems",
        description: "Crystal-clear audio with professional-grade line arrays, subwoofers, and monitoring systems for venues of any size.",
        image: "/images/service-sound.png",
        features: ["Line Array Systems", "Digital Mixing Consoles", "Wireless Microphones", "In-Ear Monitoring"],
    },
    {
        icon: Lightbulb,
        title: "Dynamic Lighting Design",
        description: "Transform your venue with intelligent moving heads, LED fixtures, and custom-programmed light shows.",
        image: "/images/service-lighting.png",
        features: ["Moving Head Fixtures", "LED Par Lights", "DMX Control", "Custom Programming"],
    },
    {
        icon: Sparkles,
        title: "Complete Event Solutions",
        description: "Full-service production for weddings, concerts, corporate events, and festivals with expert technical support.",
        image: "/images/service-event.png",
        features: ["Stage Design", "Technical Crew", "Power Distribution", "24/7 Support"],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-mesh relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Services</span>
                    <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                        What We <span className="text-gradient">Deliver</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        From intimate gatherings to massive festivals, we bring technical excellence and creative vision to every project.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>

                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm text-white/50">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
