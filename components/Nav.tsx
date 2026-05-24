export default function Nav() {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 bg-background/90 backdrop-blur-md backdrop-saturate-150">
            <div className="font-mono uppercase tracking-mono text-mono-label text-foreground">Matt Rybicki</div>
            <nav className="flex items-center gap-6 font-mono uppercase tracking-mono text-mono-label">
                <a target="_blank" rel="noopener noreferrer" className="text-foreground-mono hover:text-foreground transition-colors" href="/resume">Résumé</a>
                <a target="_blank" rel="noopener noreferrer" className="text-foreground-mono hover:text-foreground transition-colors" href="https://github.com/mrybick">GitHub</a>
                <a target="_blank" rel="noopener noreferrer" className="text-foreground-mono hover:text-foreground transition-colors" href="https://linkedin.com/in/matthew-j-rybicki">LinkedIn</a>
            </nav>
        </header>
    );
}