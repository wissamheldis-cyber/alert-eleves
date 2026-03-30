import { PlayCircle, Clock } from "lucide-react";
import { videosData } from "@/data/videos";

export default function RessourcesPage() {
    return (
        <div className="max-w-6xl mx-auto pb-12">
            {/* Header */}
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 rounded-full bg-[#CC0000]" />
                    <h1
                        className="text-3xl md:text-4xl font-black text-white tracking-[0.05em] uppercase"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        Vidéos & Infos
                    </h1>
                </div>
                <p className="text-neutral-500 text-base ml-4">
                    Une bibliothèque de ressources pour aller plus loin et comprendre ce qui t'arrive, à ton rythme.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {videosData.map((video) => (
                    <div
                        key={video.id}
                        className="bg-[#08080C]/60 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#CC0000]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-video w-full bg-black/50 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={video.thumbnailUrl}
                                alt={video.title}
                                className="object-cover w-full h-full opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-[#CC0000]/90 group-hover:border-[#CC0000] transition-all duration-300 group-hover:scale-110">
                                    <PlayCircle className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {video.duration}
                            </div>
                            <div className="absolute top-3 left-3 bg-[#CC0000]/80 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>
                                {video.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3
                                className="text-base font-black text-white mb-1.5 group-hover:text-[#CC0000] transition-colors line-clamp-2 uppercase tracking-wide"
                                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                            >
                                {video.title}
                            </h3>
                            <p className="text-neutral-500 text-sm line-clamp-2 leading-relaxed">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 p-6 md:p-8 bg-[#08080C]/60 backdrop-blur-xl border border-white/8 rounded-2xl text-center">
                <h3
                    className="text-base font-black text-white mb-2 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}
                >
                    D'autres ressources arrivent bientôt
                </h3>
                <p className="text-neutral-600 text-sm">De nouvelles vidéos sont ajoutées régulièrement par l'équipe.</p>
            </div>
        </div>
    );
}
