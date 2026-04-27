"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "./data";

export default function Servicos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Botão Voltar */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          ← VOLTAR
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/Imagens/AboutLorrayne/LorraynePintandooTeto.jpeg"
            alt="Serviços Lorrayne Lucas"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="relative z-10 px-8 md:px-20 pb-12 md:pb-20">
          <span className="text-orange-100 font-bold tracking-[0.3em] text-xs uppercase mb-4 inline-block bg-orange-500 px-3 py-1 rounded-md backdrop-blur-sm">
            O que oferecemos
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none">
            Nossos Serviços
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-12 px-8 md:px-20 max-w-4xl mx-auto text-center">
        <p className="text-slate-600 text-lg md:text-[22px] leading-relaxed">
          Da pintura residencial aos efeitos mais sofisticados, cada serviço é
          entregue com técnica, dedicação e o padrão de excelência que só
          Lorrayne Lucas oferece.
        </p>
      </section>

      {/* GRID DE SERVIÇOS */}
      <section className="pb-20 md:pb-28 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.cover}
                  alt={s.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[16px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${s.category === "Pinturas Decorativas" ? "bg-orange-400 text-white" : "bg-orange-600 text-white"}`}
                  >
                    {s.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-8 h-0.5 bg-orange-500 mb-4 rounded-full" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-[18px] leading-relaxed mb-5">
                  {s.short}
                </p>
                <span className="text-orange-600 font-bold text-sm uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                  Saiba Mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-12 md:py-12 bg-orange-500">
        <div className="text-center mb-12">
          <span className="text-orange-100 font-bold tracking-[0.4em] uppercase text-[22px] mb-3 block">
            Nos Bastidores
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 bg-orange-500">
            Nossa Equipe
          </h2>
        </div>
        {/* Carrossel de 4 imagens com loop infinito */}
        {(() => {
          const equipeImgs = [
            {
              nome: "Equipe em Ação",
              img: "/Imagens/equipe/equipedescanso.jpeg",
            },
            { nome: "Equipe Unida", img: "/Imagens/Filhos/Filha.jpeg" },
            {
              nome: "Equipe Pintando",
              img: "/Imagens/Filhos/NaescadacomFilho.jpeg",
            },
            {
              nome: "Equipe Sorrindo",
              img: "/Imagens/equipe/Equipe.jpeg",
            },
          ];
          const [equipeIndex, setEquipeIndex] = useState(0);
          const showImgs = [
            equipeImgs[(equipeIndex + 0) % equipeImgs.length],
            equipeImgs[(equipeIndex + 1) % equipeImgs.length],
            equipeImgs[(equipeIndex + 2) % equipeImgs.length],
            equipeImgs[(equipeIndex + 3) % equipeImgs.length],
          ];
          return (
            <div className="relative flex items-center justify-center">
              <button
                aria-label="Anterior"
                onClick={() =>
                  setEquipeIndex(
                    (prev) =>
                      (prev - 1 + equipeImgs.length) % equipeImgs.length,
                  )
                }
                className="absolute left-0 z-10 bg-black/30 hover:bg-orange-600 text-white rounded-full p-2 m-2"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="w-full max-w-5xl">
                {/* Mobile: carrossel horizontal scroll-x, Desktop: grid de 4 */}
                <div
                  className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible scrollbar-hide"
                  style={{
                    WebkitOverflowScrolling: "touch",
                    touchAction: "pan-x",
                  }}
                >
                  {showImgs.map((m, i) => (
                    <div
                      key={i}
                      className="min-w-[70vw] max-w-xs md:min-w-0 md:max-w-none bg-white p-3 rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                    >
                      <div className="relative h-52 md:h-80 w-full rounded-2xl overflow-hidden">
                        <Image
                          src={m.img}
                          alt={m.nome}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                aria-label="Próximo"
                onClick={() =>
                  setEquipeIndex((prev) => (prev + 1) % equipeImgs.length)
                }
                className="absolute right-0 z-10 bg-black/30 hover:bg-orange-600 text-white rounded-full p-2 m-2"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          );
        })()}
      </section>

      {/* LOCALIZAÇÃO + MAPA */}
      <section className="px-8 md:px-20 pb-16 md:pb-24 mt-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-10 flex flex-col justify-center bg-slate-900 text-white">
            <span className="text-orange-100 font-bold tracking-widest text-xs mb-4 uppercase">
              Vamos conversar
            </span>
            <h2 className="text-3xl font-extrabold mb-6 leading-tight">
              Divinópolis MG <br />
              <span className="text-orange-500">& Região</span>
            </h2>
            <p className="text-slate-400 text-[22px] leading-relaxed mb-8">
              Atendemos em toda a cidade de Divinópolis e cidades vizinhas em
              Minas Gerais.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500 text-lg">
                📍
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                Minas Gerais, Brasil
              </span>
            </div>
            <a
              href="https://wa.me/553788287934"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-500 transition-all text-sm uppercase tracking-widest text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="w-full md:w-2/3 mt-2 h-80 md:h-auto min-h-[400px] relative group cursor-pointer">
            <iframe
              title="Mapa de Atendimento"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.003964479836!2d-44.89164168509544!3d-20.14566958648909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6b6b7e7e7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sDivin%C3%B3polis%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1711380000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay para tornar o mapa clicável e abrir o link externo */}
            <a
              href="https://www.google.com/maps/place/Divin%C3%B3polis,+MG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir mapa de Divinópolis, MG no Google Maps"
              className="absolute inset-0 z-10"
              style={{ cursor: "pointer" }}
            >
              <span className="sr-only">
                Abrir mapa de Divinópolis, MG no Google Maps
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-white/10 py-12 px-8 text-center">
        <p className="text-gray-400 text-xs">
          Desenvolvido por{" "}
          <a
            href="https://www.genevieve.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            Genevieve WebSite
          </a>
        </p>
      </footer>
    </main>
  );
}
