"use client";

import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#25221f]">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#d8c9ae]/40 bg-[#faf9f6]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
           <div className="relative h-20 w-40 overflow-hidden">
  <Image
    src="/haruviana-logo.png"
    alt="Haruviana Studio"
    fill
    className="object-contain scale-[1.2]sss"
    priority
  />
</div>
</div>
          <div className="hidden items-center gap-10 text-xs tracking-[0.2em] md:flex">
            <a href="#home" className="hover:text-[#a58550]">HOME</a>
            <a href="#collection" className="hover:text-[#a58550]">COLLECTION</a>
            <a href="#about" className="hover:text-[#a58550]">ABOUT</a>
            <a href="#contact" className="hover:text-[#a58550]">CONTACT</a>
          </div>
</div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

        {menuOpen && (
          <div className="border-t border-[#d8c9ae]/40 bg-[#faf9f6] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm tracking-[0.2em]">
              <a href="#home">HOME</a>
              <a href="#collection">COLLECTION</a>
              <a href="#about">ABOUT</a>
              <a href="#contact">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="text-center md:text-left">
            <p className="mb-5 text-xs tracking-[0.45em] text-[#a58550]">
              HANDCRAFTED JEWELLERY
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Born from light,
              <br />
              <span className="italic text-[#a58550]">
                crafted in aura.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#6f6962] md:mx-0">
              Discover timeless handmade jewellery created with delicate
              pearls, graceful details and a touch of modern elegance.
            </p>

            <div className="mt-9 flex justify-center gap-4 md:justify-start">
              <a
                href="#collection"
                className="border border-[#25221f] bg-[#25221f] px-7 py-4 text-xs tracking-[0.25em] text-white transition hover:bg-[#a58550]"
              >
                EXPLORE COLLECTION
              </a>

              <a
                href="#about"
                className="border border-[#b9a98d] px-7 py-4 text-xs tracking-[0.25em] transition hover:bg-[#eee7da]"
              >
                OUR STORY
              </a>
            </div>
          </div>

          {/* JEWELLERY VISUAL */}
          <div className="relative mx-auto flex h-[520px] w-full max-w-[480px] items-center justify-center overflow-hidden bg-[#eee8dc]">
            <div className="absolute h-[330px] w-[330px] rounded-full border border-[#c9b28a]" />
            <div className="absolute h-[250px] w-[250px] rounded-full border border-[#c9b28a]/60" />

            <div className="relative text-center">
              <div className="mb-8 text-7xl">✧</div>

              <p className="font-serif text-4xl tracking-[0.15em]">
                HV
              </p>

              <p className="mt-4 text-[10px] tracking-[0.5em] text-[#a58550]">
                HANDMADE • TIMELESS • ELEGANT
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.4em] text-[#a58550]">
              THE COLLECTION
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Pieces made to be remembered
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77716a]">
              Elegant creations designed to add a subtle statement to every
              occasion.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="group">
              <div className="flex h-[380px] items-center justify-center bg-[#f1ece3] transition group-hover:bg-[#ebe2d3]">
                <div className="text-center">
                  <div className="text-7xl">◊</div>
                  <p className="mt-5 font-serif text-2xl">Pearl Elegance</p>
                </div>
              </div>

              <div className="flex justify-between pt-5">
                <p className="font-serif text-lg">Pearl Necklace</p>
                <p className="text-sm text-[#a58550]">₹1,499</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group">
              <div className="flex h-[380px] items-center justify-center bg-[#f4eee6] transition group-hover:bg-[#ebe2d3]">
                <div className="text-center">
                  <div className="text-7xl">✧</div>
                  <p className="mt-5 font-serif text-2xl">Royal Detail</p>
                </div>
              </div>

              <div className="flex justify-between pt-5">
                <p className="font-serif text-lg">Kolhapuri Saaj</p>
                <p className="text-sm text-[#a58550]">₹1,999</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group">
              <div className="flex h-[380px] items-center justify-center bg-[#eee9df] transition group-hover:bg-[#ebe2d3]">
                <div className="text-center">
                  <div className="text-7xl">♡</div>
                  <p className="mt-5 font-serif text-2xl">Delicate Charm</p>
                </div>
              </div>

              <div className="flex justify-between pt-5">
                <p className="font-serif text-lg">Pearl Earrings</p>
                <p className="text-sm text-[#a58550]">₹899</p>
              </div>
            </div>

          </div>

          <div className="mt-14 text-center">
            <button className="border border-[#25221f] px-9 py-4 text-xs tracking-[0.3em] transition hover:bg-[#25221f] hover:text-white">
              VIEW ALL PIECES
            </button>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#a58550]">
            THE HARUVIANA STORY
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Jewellery with a little piece of soul.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-[#6f6962]">
            Haruviana Studio is a handmade jewellery label created for those
            who believe that elegance does not need to be loud. Every piece
            is thoughtfully crafted with delicate details, timeless
            silhouettes and an artistic touch.
          </p>

          <div className="mt-12 flex justify-center gap-10 text-xs tracking-[0.2em] text-[#a58550]">
            <span>HANDMADE</span>
            <span>✦</span>
            <span>TIMELESS</span>
            <span>✦</span>
            <span>UNIQUE</span>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#25221f] px-6 py-24 text-center text-white">
        <p className="text-xs tracking-[0.4em] text-[#d1b783]">
          LET'S CONNECT
        </p>

        <h2 className="mt-5 font-serif text-4xl md:text-5xl">
          Find your signature piece.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
          Follow Haruviana Studio and discover new handmade creations,
          launches and exclusive pieces.
        </p>

        <a
          href="https://instagram.com/haruviana_studio"
          target="_blank"
          className="mt-9 inline-block border border-[#d1b783] px-9 py-4 text-xs tracking-[0.3em] text-[#d1b783] transition hover:bg-[#d1b783] hover:text-[#25221f]"
        >
          INSTAGRAM
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#181715] px-6 py-8 text-center text-xs tracking-[0.2em] text-white/40">
        © 2026 HARUVIANA STUDIO — HANDCRAFTED WITH LOVE
      </footer>

    </main>
  );
}
