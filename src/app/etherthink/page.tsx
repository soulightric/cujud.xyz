export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient simpel */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-black to-blue-900 opacity-50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              The Next Etherthink
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 font-light">
            Testing for the future of decentralized AI on blockchain.
          </p>
        </div>
      </section>
    </main>
  );
}