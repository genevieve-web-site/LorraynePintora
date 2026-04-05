"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const bgImages = [
  "/images/ProjetoVolunt/projeto1.jpg",
  "/images/ProjetoVolunt/projeto2.jpg",
  "/images/ProjetoVolunt/projeto3.jpg",
];

export default function ProjetoSocial() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Timer para o carrossel de fundo (4 segundos)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Botão Voltar */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          ← VOLTAR
        </Link>
      </nav>

      {/* Hero Section: O Propósito */}
      <header className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-100 ease-out"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.1}px)` }}
        >
          <Image
            src={bgImages[currentImage]}
            alt="Projeto Social"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-orange-500 font-mono tracking-[0.5em] uppercase text-[10px] mb-4 block italic mt-6">
            Iniciativa Voluntária
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-none">
            Colorindo <br />{" "}
            <span className="text-orange-500 italic">Vidas</span>
          </h1>
          <p className="text-white/70 mt-0 bg-white/10  max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Lorrayne Lucas e equipe transformando lares em Betim e região. Mais
            que tinta, entregamos dignidade e esperança para mulheres e famílias
            que precisam.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("ajudar")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8  mb-6 px-10 py-4 bg-orange-600 text-white font-bold text-sm md:text-base rounded-full shadow-2xl hover:bg-blue-600  hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-widest border border-white/10"
          >
            Seja um voluntário
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FORMULÁRIO 1: QUERO MINHA CASA COLORIDA */}
          <div className="bg-orange-600 p-8 md:p-12 rounded-[3rem] shadow-xl border border-orange-100 relative overflow-hidden">
            <div className="absolute top-0  right-0 p-8 text-6xl  font-black italic text-white/30 uppercase pointer-events-none">
              Preciso
            </div>

            <h2 className="text-3xl font-black mt-12 text-slate-900 mb-2 uppercase italic">
              Receber Ajuda
            </h2>
            <p className="text-slate-200 mb-8 font-light text-sm">
              Mora em Betim ou região? Conte sua história para nossa análise.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu Nome Completo"
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Seu Endereço / Bairro"
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="WhatsApp para contato"
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
              <textarea
                placeholder="Conte-nos sua história e por que sua casa precisa dessa transformação..."
                rows={5}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-10 bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-slate-500 transition-all uppercase tracking-widest shadow-lg active:scale-95"
              >
                Enviar Minha História
              </button>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="text-white text-2xl">🌟</div>
                <p className="text-[10px] text-slate-200 uppercase tracking-widest">
                  Estamos prontos para apoiar sua jornada, retornaremos o
                  contato em breve.
                </p>
              </div>
            </form>
          </div>

          {/* FORMULÁRIO 2: QUERO AJUDAR O PROJETO */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-black italic text-white uppercase pointer-events-none">
              Ajudar
            </div>

            <h2 className="text-3xl mt-12  font-black mb-2 uppercase italic">
              Ser um Parceiro
            </h2>
            <p className="text-slate-400 mb-8 font-light text-sm">
              Doe materiais, mão de obra ou patrocine uma transformação.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome ou Empresa"
                className="w-full p-4 bg-white/10 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none text-white transition-all"
              />
              <select className="w-full p-4 bg-white/10 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none text-white transition-all appearance-none">
                <option className="text-slate-900">Como deseja ajudar?</option>
                <option className="text-slate-900">
                  Doação de Tintas/Materiais
                </option>
                <option className="text-slate-900">
                  Voluntário (Mão de Obra)
                </option>
                <option className="text-slate-900">
                  Patrocínio Financeiro
                </option>
                <option className="text-slate-900">Outros</option>
              </select>
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                className="w-full p-4 bg-white/10 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none text-white transition-all"
              />
              <textarea
                placeholder="Fale brevemente sobre como você ou sua empresa podem contribuir..."
                rows={4}
                className="w-full p-4 bg-white/10 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none text-white transition-all resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white mt-12 text-slate-900 font-bold py-5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all uppercase tracking-widest shadow-lg active:scale-95"
              >
                Quero Contribuir
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="text-orange-500 text-2xl">❤</div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                Toda ajuda é bem-vinda para manter esse projeto vivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Betim/MG */}
      <footer className="bg-white py-10 text-center border-t border-gray-100">
        <p className="text-[9px] md:text-[10px] text-gray-600 uppercase tracking-[0.4em]">
          © 2024 Lorrayne Lucas • Especialista em Acabamentos Finos
        </p>
        <a
          href="https://www.genevieve.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] md:text-[10px] text-gray-600 uppercase tracking-[0.4em] inline-block hover:text-orange-600 transition-colors"
        >
          Desenvolvido por Genevieve WebSite
        </a>
      </footer>
    </main>
  );
}
