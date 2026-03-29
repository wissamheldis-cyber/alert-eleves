export const metadata = {
    title: "Atelier Prévention — ALERT'ELEVES",
    description: "Atelier personnel de prévention Puff. A.M.17.",
};

export default function AtelierStandaloneLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-black overflow-x-hidden">
            {children}
        </div>
    );
}
