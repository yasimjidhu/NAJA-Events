"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const footerLinks = {
    Services: ["Sound Systems", "Lighting Design", "Event Production", "Technical Support"],
    Company: ["About Us", "Our Team", "Careers", "Contact"],
    Resources: ["Portfolio", "Blog", "FAQs", "Privacy Policy"],
};

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="text-4xl font-bold tracking-tighter mb-4">
                                <span className="text-white">NA</span>
                                <span className="text-primary">JA</span>
                            </div>
                            <p className="text-white/60 leading-relaxed max-w-sm">
                                Transforming events into extraordinary experiences through premium light and sound solutions.
                            </p>
                        </motion.div>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                                >
                                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-bold text-white mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} Naja Events. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:info@najaevents.com" className="hover:text-primary transition-colors">
                                info@najaevents.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
