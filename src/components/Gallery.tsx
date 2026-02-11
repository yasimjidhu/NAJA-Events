"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Play, X, Image as ImageIcon, Video } from "lucide-react";

const galleryPhotos = [
    {
        id: 1,
        src: "/images/gallery-1.png",
        title: "Music Festival 2024",
        category: "Concert",
    },
    {
        id: 2,
        src: "/images/gallery-2.png",
        title: "Elegant Wedding Reception",
        category: "Wedding",
    },
    {
        id: 3,
        src: "/images/gallery-3.png",
        title: "Corporate Summit",
        category: "Corporate",
    },
    {
        id: 4,
        src: "/images/gallery-4.png",
        title: "Club Night Experience",
        category: "Club Event",
    },
    {
        id: 5,
        src: "/images/service-sound.png",
        title: "Premium Sound System",
        category: "Equipment",
    },
    {
        id: 6,
        src: "/images/service-lighting.png",
        title: "Lighting Rig Setup",
        category: "Lighting",
    },
    {
        id: 7,
        src: "/images/service-event.png",
        title: "Outdoor Gala Event",
        category: "Wedding",
    },
    {
        id: 8,
        src: "/images/hero.png",
        title: "Concert Stage Design",
        category: "Concert",
    },
];

const galleryVideos = [
    {
        id: 1,
        thumbnail: "/images/gallery-1.png",
        title: "Festival Highlights 2024",
        duration: "2:45",
        views: "12K",
    },
    {
        id: 2,
        thumbnail: "/images/gallery-2.png",
        title: "Wedding Setup Timelapse",
        duration: "1:30",
        views: "8.5K",
    },
    {
        id: 3,
        thumbnail: "/images/gallery-3.png",
        title: "Corporate Event Production",
        duration: "3:15",
        views: "15K",
    },
    {
        id: 4,
        thumbnail: "/images/gallery-4.png",
        title: "DJ Night Experience",
        duration: "2:00",
        views: "20K",
    },
    {
        id: 5,
        thumbnail: "/images/service-sound.png",
        title: "Sound System Demo",
        duration: "1:45",
        views: "9.2K",
    },
    {
        id: 6,
        thumbnail: "/images/service-lighting.png",
        title: "Lighting Design Showcase",
        duration: "2:30",
        views: "11K",
    },
    {
        id: 7,
        thumbnail: "/images/service-event.png",
        title: "Outdoor Event Setup",
        duration: "3:00",
        views: "7.8K",
    },
    {
        id: 8,
        thumbnail: "/images/hero.png",
        title: "Behind The Scenes",
        duration: "4:20",
        views: "25K",
    },
];

export default function Gallery() {
    const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
    const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

    return (
        <section id="gallery" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
                    <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                        See Our <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Explore our portfolio of successful events and productions that showcase our expertise and creativity.
                    </p>
                </motion.div>

                {/* Tab Switcher */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab("photos")}
                        className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === "photos"
                                ? "bg-primary text-black shadow-[0_0_20px_rgba(255,170,0,0.3)]"
                                : "glass text-white hover:border-primary/30"
                            }`}
                    >
                        <ImageIcon size={20} />
                        Photos
                    </button>
                    <button
                        onClick={() => setActiveTab("videos")}
                        className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === "videos"
                                ? "bg-primary text-black shadow-[0_0_20px_rgba(255,170,0,0.3)]"
                                : "glass text-white hover:border-primary/30"
                            }`}
                    >
                        <Video size={20} />
                        Videos
                    </button>
                </div>

                {/* Photos Grid */}
                {activeTab === "photos" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {galleryPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedMedia(photo.id)}
                                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-xs text-primary font-bold uppercase tracking-wider">
                                            {photo.category}
                                        </span>
                                        <h3 className="text-white font-bold text-lg mt-1">{photo.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Videos Grid */}
                {activeTab === "videos" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {galleryVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedMedia(video.id)}
                                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-black fill-black ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs font-bold">
                                    {video.duration}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                                    <p className="text-white/60 text-sm">{video.views} views</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Lightbox Modal */}
                {selectedMedia !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            onClick={() => setSelectedMedia(null)}
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
                            {activeTab === "photos" ? (
                                <Image
                                    src={galleryPhotos.find((p) => p.id === selectedMedia)?.src || ""}
                                    alt="Gallery image"
                                    fill
                                    className="object-contain rounded-2xl"
                                />
                            ) : (
                                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <Play className="w-20 h-20 text-primary mx-auto mb-4" />
                                        <p className="text-white/60">Video player would load here</p>
                                        <p className="text-sm text-white/40 mt-2">
                                            {galleryVideos.find((v) => v.id === selectedMedia)?.title}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
