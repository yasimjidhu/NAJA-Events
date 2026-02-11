"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="py-24 px-6 bg-mesh relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Get In Touch</span>
                    <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                        Let's Create <span className="text-gradient">Magic</span> Together
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Ready to elevate your next event? Reach out and let's discuss how we can bring your vision to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-primary focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-primary focus:outline-none transition-colors"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <select
                                    value={formData.eventType}
                                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                                    required
                                >
                                    <option value="" className="bg-background">Select Event Type</option>
                                    <option value="wedding" className="bg-background">Wedding</option>
                                    <option value="concert" className="bg-background">Concert</option>
                                    <option value="corporate" className="bg-background">Corporate Event</option>
                                    <option value="festival" className="bg-background">Festival</option>
                                    <option value="other" className="bg-background">Other</option>
                                </select>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Tell us about your event..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-primary focus:outline-none transition-colors resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,170,0,0.3)]"
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Phone</div>
                                        <a href="tel:+1234567890" className="text-white/60 hover:text-primary transition-colors">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Email</div>
                                        <a href="mailto:info@najaevents.com" className="text-white/60 hover:text-primary transition-colors">
                                            info@najaevents.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Location</div>
                                        <p className="text-white/60">
                                            123 Event Street<br />
                                            City, State 12345
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-white/60">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold">Closed</span>
                                </div>
                            </div>
                            <p className="text-sm text-primary mt-4">
                                * Emergency support available 24/7 for active events
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
