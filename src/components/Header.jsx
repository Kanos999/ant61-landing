export const Header = () => {
  const pathname = window.location.pathname;

  const isActive = (path) => pathname === path;
  console.log("Current path:", pathname); // Debugging log

	return (
		<header className="sticky top-0 z-50 w-full font-roboto-condensed">
			<div className="bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
				<div className="mx-auto flex h-16 w-full items-center justify-left gap-x-12 px-6">
					<a href="/" className="flex items-center gap-3" aria-label="ANT61 home">
						<img src="/ant61_logo.svg" alt="ANT61" className="h-8 w-auto" />
					</a>

					<nav aria-label="Primary" className="flex items-center gap-8 uppercase font-light text-sm">
						<a
							href="/beacon"
							className={`text-white/80 transition-colors hover:text-white ${isActive("/beacon") ? "font-normal text-white/100" : ""}`}
						>
							The Beacon
						</a>
						<a
							href="/about"
							className={`text-white/80 transition-colors hover:text-white ${isActive("/about") ? "font-normal text-white/100" : ""}`}
						>
							About
						</a>
						<a
							href="/news"
							className={`text-white/80 transition-colors hover:text-white ${isActive("/news") ? "font-normal text-white/100" : ""}`}
						>
							News
						</a>
            <a
							href="/docs"
							className={`text-white/80 transition-colors hover:text-white ${isActive("/docs") ? "font-normal text-white/100" : ""}`}
						>
							Docs
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}

