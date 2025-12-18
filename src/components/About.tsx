"use client";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Identity — NO CARD, NO BORDER, FULLY BLENDED */}
          <div className="relative p-10 via-transparent to-transparent">
            <div className="absolute inset-0 opacity-50" />
            <div className="relative">
              <h3 className="text-4xl font-bold mb-6 flex items-center gap-4 text-red-500">
                Whoami?
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                Nama panggung: <span className="text-purple-500 font-bold text-2xl">Akira Tensai</span>
                <br />Base: Indonesia
                <br />Mission: Menghancurkan pemerintahan yang korup.
                <br /><br />
                <span className="text-emerald-500 font-bold text-xl">
                  "Bakat itu overrated. Grind itu undefeated."
                </span>
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center py-12">
            <p className="text-2xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "Aku mungkin terlahir tanpa bakat, tapi aku percaya kalau usaha yang sering diasah, bisa menyaingi bahkan melebihi mereka yang berbakat."
            </p>
            <p className="mt-6 text-primary font-bold text-xl">— Cujud</p>
          </div>
        </div>

        {/* Skill Levels */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h4 className="text-center text-2xl font-bold mb-10 text-blue-500">Skill Levels</h4>
          <div className="space-y-8">
            {[
              { name: "Next.js", level: 3 },
              { name: "TypeScript", level: 2 },
              { name: "Tailwind", level: 2 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-3">
                  <span className="text-foreground font-medium text-xl">{skill.name}</span>
                  <span className="text-primary font-bold">LV. {skill.level}</span>
                </div>
                <div className="h-4 bg-background/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}