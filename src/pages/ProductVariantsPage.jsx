import { Header } from '../components/Header'

export const ProductVariantsPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#000000] to-[#252634]">
      <Header />
      <main className="min-h-[calc(100vh-4rem)] px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <img
            src="/small-variant.png"
            alt="Small variant"
            className="w-full max-w-xl h-auto"
          />
          <img
            src="/medium-variant.png"
            alt="Medium variant"
            className="w-full max-w-xl h-auto"
          />
          <img
            src="/large-variant.png"
            alt="Large variant"
            className="w-full max-w-xl h-auto"
          />
          <img
            src="/xl-variant.png"
            alt="XL variant"
            className="w-full max-w-xl h-auto"
          />
        </div>
      </main>
    </div>
  )
}
