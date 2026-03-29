export interface VideoResource {
    id: string;
    title: string;
    category: string;
    description: string;
    duration: string;
    // Remplace par une vraie URL YouTube, Viméo ou locale
    thumbnailUrl: string;
    videoUrl: string;
}

export const videosData: VideoResource[] = [
    {
        id: "v1",
        title: "Comment la nicotine pirate ton cerveau",
        category: "Neurologie",
        description: "Explication visuelle du circuit de la récompense et de la dopamine.",
        duration: "03:45",
        thumbnailUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        videoUrl: "#"
    },
    {
        id: "v2",
        title: "Les effets sur la condition physique",
        category: "Corps Humain",
        description: "Ce qui se passe dans tes poumons quand tu inhales la vapeur chauffée.",
        duration: "02:20",
        thumbnailUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        videoUrl: "#"
    },
    {
        id: "v3",
        title: "Témoignages : L'engrenage Puff",
        category: "Interviews",
        description: "3 jeunes racontent comment ils ont commencé et comment la dépendance s'est installée.",
        duration: "05:10",
        thumbnailUrl: "https://images.unsplash.com/photo-1529156069898-49953eb1b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        videoUrl: "#"
    },
    {
        id: "v4",
        title: "Astuces pour gérer les crises de manque",
        category: "Solutions",
        description: "Méthodes concrètes pour repousser l'envie quand elle surgit.",
        duration: "01:50",
        thumbnailUrl: "https://images.unsplash.com/photo-1499209545119-a1b7ba142c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        videoUrl: "#"
    }
];
