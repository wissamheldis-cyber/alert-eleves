import { PlayCircle, Clock } from "lucide-react";
import { videosData } from "@/data/videos";
import Image from "next/image";

export default function RessourcesPage() {
    return (
        <div className="max-w-6xl mx-auto pb-12">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Vidéos & Infos
                </h1>
                <p className="text-neutral-400 text-lg">
                    Une bibliothèque de ressources pour aller plus loin et comprendre ce qui t'arrive, à ton rythme.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {videosData.map((video) => (
                    <div key={video.id} className="bg-surface border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-secondary/50 transition-all">
                        {/* Thumbnail Container */}
                        <div className="relative aspect-video w-full bg-black/50 overflow-hidden">
                            <img 
                                src={video.thumbnailUrl} 
                                alt={video.title}
                                className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-secondary/90 group-hover:border-secondary transition-all group-hover:scale-110">
                                    <PlayCircle className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {video.duration}
                            </div>
                            <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white">
                                {video.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                                {video.title}
                            </h3>
                            <p className="text-neutral-400 text-sm line-clamp-2">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-surface/30 border border-white/5 rounded-2xl text-center">
                <h3 className="text-lg font-bold text-white mb-2">D'autres ressources arrivent bientôt</h3>
                <p className="text-neutral-500">De nouvelles vidéos sont ajoutées régulièrement par l'équipe.</p>
            </div>
        </div>
    );
}
