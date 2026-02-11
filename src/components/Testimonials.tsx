"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Aditya Verma",
        role: "Wedding Client",
        company: "Mumbai",
        rating: 5,
        text: "Naja Events transformed our wedding into a magical experience. The lighting was breathtaking and the sound quality was crystal clear. Highly recommended!",
        image: "/images/team-1.png",
    },
    {
        id: 2,
        name: "Meera Reddy",
        role: "Event Organizer",
        company: "Tech Summit 2024",
        rating: 5,
        text: "Professional, punctual, and absolutely brilliant. They handled our 5000+ attendee conference flawlessly. The AV setup was world-class.",
        image: "/images/team-1.png",
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Music Festival Director",
        company: "Rhythm Fest",
        rating: 5,
        text: "We've worked with many vendors, but Naja stands out. Their technical expertise and creative vision elevated our festival to new heights.",
        image: "/images/team-1.png",
    },
    {
        id: 4,
        name: "Kavya Iyer",
        role: "Corporate Events Manager",
        company: "Fortune 500 Company",
        rating: 5,
        text: "Exceptional service from start to finish. Their team is knowledgeable, responsive, and delivers beyond expectations every single time.",
        image: "/images/team-1.png",
    },
    {
        id: 5,
        name: "Rohan Kapoor",
        role: "Concert Promoter",
        company: "Live Nation India",
        rating: 5,
        text: "The best in the business! Their sound systems are top-notch and the crew is incredibly professional. Our artists always love performing with their setup.",
        image: "/images/team-1.png",
    },
    {
        id: 6,
        name: "Ananya Das",
        role: "Bride",
        company: "Destination Wedding",
        rating: 5,
        text: "They made our dream wedding come true! The ambient lighting created the perfect romantic atmosphere. Thank you for making our special day unforgettable!",
        image: "/images/team-1.png",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about working with Naja Events.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl p-8 hover:border-primary/30 transition-all relative"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                                ))}
                            </div>

                            <p className="text-white/80 leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-white/60">{testimonial.role}</p>
                                    <p className="text-xs text-primary">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
