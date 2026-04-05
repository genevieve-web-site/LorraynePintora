"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  // --- CONFIGURAÇÃO DO CARROSSEL ADICIONADA ---
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 4;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Timer para o Loop Infinito do Carrossel (3 segundos)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer); // Limpa o timer ao sair da página
    };
  }, []);
  // --------------------------------------------

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Botão Voltar */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          ← VOLTAR
        </Link>
      </nav>

      {/* PRIMEIRA SEÇÃO: TRAJETÓRIA + IMAGEM GRANDE */}
      <section className="relative flex flex-col md:flex-row min-h-screen border-b border-gray-50">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-white z-10">
          <span className="text-orange-600 font-bold tracking-widest text-sm mb-4 uppercase">
            A Trajetória
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
            Lorrayne <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
              Lucas
            </span>
          </h1>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-light max-w-xl">
            <p>
              Tudo começou com um desafio inesperado: pintar um salão inteiro a
              pedido de uma tia. Daquele primeiro rolo de tinta, nasceu algo{" "}
              <strong>inexplicável</strong>.
            </p>
            <p>
              O caminho não foi fácil. Como ajudante iniciante, Lorrayne
              enfrentou o preconceito em um ramo predominantemente masculino.
              Mas com <strong>garra e fé</strong>, ela transformou cada dúvida
              alheia em degrau.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ transform: `scale(1.2) translateY(${scrollY * 0.1}px)` }}
          >
            <Image
              src="/images/about/about.jpeg"
              alt="Lorrayne Lucas Pintora"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-10 right-10 z-20">
            <p className="text-white font-bold tracking-[0.3em] text-xs uppercase bg-black/20 backdrop-blur-sm p-4 rounded-lg">
              Influenciadora & Pintora
            </p>
          </div>
        </div>
      </section>

      {/* SEGUNDA SEÇÃO: CARROSSEL (ESQUERDA) + TEXTO FINAL (DIREITA) */}
      <section className="relative flex flex-col-reverse md:flex-row min-h-screen bg-gray-50">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex items-center justify-center relative">
          <div
            className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-4 border-[10px] border-white transition-transform"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          >
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-[24px] font-bold px-4 py-2 rounded-full shadow-lg z-30">
              +800 PROJETOS
            </div>

            {/* Carrossel de Imagens - CONFIGURAÇÃO ANIMADA */}
            <div className="relative overflow-hidden rounded-[1.5rem] h-64 md:h-80">
              <div
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="min-w-full h-full relative">
                    <Image
                      src={`/images/about/projeto${num}.jpg`}
                      alt={`Projeto ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores Visuais (Dots) */}
            <div className="mt-4 flex justify-center gap-2">
              {[...Array(totalImages)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? "w-6 bg-orange-600" : "w-2 bg-gray-200"}`}
                />
              ))}
            </div>

            <div className="mt-2 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Portfólio em constante movimento
              </p>
            </div>
          </div>
          <div className="absolute -z-10 w-72 h-72 bg-orange-200/50 rounded-full blur-3xl" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <blockquote className="border-l-4 border-orange-500 pl-6 italic text-xl md:text-2xl text-slate-900 mb-8 bg-white/50 py-6 pr-4 shadow-sm rounded-r-xl">
            “Batalho há anos pela valorização da mulher na pintura. Quero
            mostrar que podemos fazer a diferença.”
          </blockquote>

          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-lg">
            Hoje, integrante do <strong>Esquadrão Brasilux</strong>, ela não
            apenas pinta paredes, mas constrói histórias e inspira milhares de
            profissionais.
          </p>

          <div className="grid grid-cols-2 gap-10 border-t border-gray-200 pt-10">
            <div>
              <p className="text-5xl font-black text-slate-900 leading-none">
                100%
              </p>
              <p className="text-xs text-orange-600 font-bold uppercase mt-2 tracking-widest">
                Profissionalismo
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-slate-900 leading-none italic">
                Infinita
              </p>
              <p className="text-xs text-orange-600 font-bold uppercase mt-2 tracking-widest">
                Dedicação
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-20 px-8 text-center">
        <h2 className="text-white text-2xl font-light o mb-2 italic">
          Mãe • Trabalhadora • Influenciadora
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-orange-500 font-mono text-[10px] tracking-[0.3em] uppercase">
          <span>[ Resiliência ]</span>
          <span>[ Técnica ]</span>
          <span>[ Liderança ]</span>
        </div>
        <p className="font-normal mt-12 text-gray-400 hover:text-orange-500 transition-colors">
          Desenvolvido por{" "}
          <a
            href="https://www.genevieve.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-gray-400 hover:text-orange-500 transition-colors"
          >
            Genevieve WebSite
          </a>
        </p>
      </footer>
    </main>
  );
}
