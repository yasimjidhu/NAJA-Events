"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Chief Audio Engineer",
        image: "/images/team-1.png",
        bio: "15+ years of experience in live sound engineering for major concerts and festivals.",
        linkedin: "#",
        email: "rajesh@najaevents.com",
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Lighting Design Director",
        image: "/images/team-1.png",
        bio: "Award-winning lighting designer specializing in creative and technical excellence.",
        linkedin: "#",
        email: "priya@najaevents.com",
    },
    {
        id: 3,
        name: "Arjun Menon",
        role: "Production Manager",
        image: "/images/team-1.png",
        bio: "Expert in managing large-scale events with precision and attention to detail.",
        linkedin: "#",
        email: "arjun@najaevents.com",
    },
    {
        id: 4,
        name: "Sneha Patel",
        role: "Technical Director",
        image: "/images/team-1.png",
        bio: "Certified technical specialist ensuring flawless execution of every project.",
        linkedin: "#",
        email: "sneha@najaevents.com",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-24 px-6 bg-mesh relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Meet The Team</span>
                    <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                        The <span className="text-gradient">Experts</span> Behind Every Event
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Our passionate team of certified professionals brings decades of combined experience to make your event extraordinary.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all"
                        >
                            <div className="relative h-80 overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                                <p className="text-white/60 text-sm leading-relaxed mb-4">{member.bio}</p>

                                <div className="flex gap-3">
                                    <a
                                        href={member.linkedin}
                                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/icon"
                                    >
                                        <Linkedin className="w-5 h-5 text-white/60 group-hover/icon:text-black transition-colors" />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/icon"
                                    >
                                        <Mail className="w-5 h-5 text-white/60 group-hover/icon:text-black transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
