export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full font-roboto-condensed">
			<div className="bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
				<div className="mx-auto flex h-16 w-full items-center justify-left gap-x-12 px-6">
					<a href="#" className="flex items-center gap-3" aria-label="ANT61 home">
						<img src="/ant61_logo.svg" alt="ANT61" className="h-8 w-auto" />
					</a>

					<nav aria-label="Primary" className="flex items-center gap-8 uppercase font-normal text-sm">
						<a
							href="#beacon"
							className="text-white/90 transition-colors hover:text-white"
						>
							The Beacon
						</a>
						<a
							href="#about"
							className="text-white/90 transition-colors hover:text-white"
						>
							About
						</a>
						<a
							href="#news"
							className="text-white/90 transition-colors hover:text-white"
						>
							News
						</a>
            <a
							href="#news"
							className="text-white/90 transition-colors hover:text-white"
						>
							Docs
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}

