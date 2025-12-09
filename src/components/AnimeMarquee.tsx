// src/components/AnimeMarquee.tsx
import Image from "next/image";
import Link from "next/link";

const animes = [
  { title: "Solo Leveling", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/53089/Solo_Leveling" },
  { title: "Jujutsu Kaisen", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen" },
  { title: "Attack on Titan", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin" },
  { title: "One Piece", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/21/One_Piece" },
  { title: "Steins;Gate", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/9253/Steins_Gate" },
  { title: "Death Note", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/1535/Death_Note" },
  { title: "Frieren", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/52991/Sousou_no_Frieren" },
  { title: "Vinland Saga", cover: "/anime/frieren.jpg", url: "https://myanimelist.net/anime/37521/Vinland_Saga" },
];

export default function AnimeMarquee() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6 max-w-7xl mx-auto">
        <h2 className="text-center mb-20 text-4xl md:text-6xl font-bold mb-4">Hall of Anime</h2>

        {/* SUPER SMOOTH MARQUEE */}
        <div className="relative">
          <div className="flex gap-6 animate-smooth-marquee">
            {/* Duplicate 3x biar gak pernah kelar */}
            {[...animes, ...animes, ...animes].map((anime, i) => (
              <Link
                key={`${anime.title}-${i}`}
                href={anime.url}
                target="_blank"
                className="flex-shrink-0 group"
              >
                <div className="relative w-64 h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105">
                  <Image
                    src={anime.cover}
                    alt={anime.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 70vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-8">
                    <p className="text-white font-bold text-2xl drop-shadow-2xl">
                      {anime.title}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl ring-4 ring-emerald-500/0 group-hover:ring-emerald-500/60 transition-all duration-700" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-center mt-10 text-muted-foreground">
          Hover untuk pause • Klik untuk MyAnimeList
        </p>
      </div>
    </section>
  );
}