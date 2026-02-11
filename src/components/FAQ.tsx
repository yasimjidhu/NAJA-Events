"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "What types of events do you cater to?",
        answer: "We provide light and sound solutions for all types of events including weddings, corporate events, concerts, music festivals, product launches, conferences, and private parties. No event is too big or too small for our team.",
    },
    {
        id: 2,
        question: "How far in advance should I book your services?",
        answer: "We recommend booking at least 2-3 months in advance for major events, especially during peak wedding and festival seasons. However, we also accommodate last-minute requests based on availability. Contact us as early as possible to secure your date.",
    },
    {
        id: 3,
        question: "Do you provide equipment for outdoor events?",
        answer: "Absolutely! We have extensive experience with outdoor events and provide weather-resistant equipment, generators, and backup systems. Our team conducts thorough site surveys to ensure optimal setup for outdoor venues.",
    },
    {
        id: 4,
        question: "Can you customize lighting designs for our event theme?",
        answer: "Yes! Our creative lighting designers work closely with you to create custom lighting schemes that match your event theme, brand colors, or personal preferences. We offer pre-event consultations and can provide design mockups.",
    },
    {
        id: 5,
        question: "What brands of equipment do you use?",
        answer: "We use only premium, industry-leading brands including JBL, L-Acoustics, Martin, Robe, Chauvet, and Yamaha. All our equipment is regularly maintained and tested to ensure peak performance.",
    },
    {
        id: 6,
        question: "Do you provide technical staff during the event?",
        answer: "Yes, all our packages include certified technical staff who will be present throughout your event. This includes audio engineers, lighting technicians, and stage managers to ensure everything runs smoothly.",
    },
    {
        id: 7,
        question: "What is your cancellation policy?",
        answer: "We understand that plans can change. Cancellations made 30+ days before the event receive a full refund minus a 10% processing fee. Cancellations within 30 days are subject to a 50% cancellation fee. Please refer to our contract for complete terms.",
    },
    {
        id: 8,
        question: "Do you offer packages or custom quotes?",
        answer: "We offer both! We have pre-designed packages for common event types, and we also provide custom quotes tailored to your specific needs and budget. Contact us for a free consultation and detailed quote.",
    },
];

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-mesh relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">FAQ</span>
                    <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Got questions? We've got answers. Find everything you need to know about our services.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-8 py-6 flex justify-between items-center text-left group"
                            >
                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openId === faq.id ? "auto" : 0,
                                    opacity: openId === faq.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-white/60 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-block bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
