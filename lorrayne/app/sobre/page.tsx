"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/Imagens/AboutLorrayne/perfilemPe.jpeg",
  "/Imagens/AboutLorrayne/Capuz.jpeg",
  "/Imagens/AboutLorrayne/LorrayneTrabalhandoComCapuz.jpeg",
  "/Imagens/AboutLorrayne/NaLata.jpeg",
  "/Imagens/AboutLorrayne/PArcerias.jpeg",
  "/Imagens/AboutLorrayne/LixandoGesso.jpeg",
  "/Imagens/AboutLorrayne/EmTrabalho.jpeg",
  "/Imagens/AboutLorrayne/LorraynePintandooTeto.jpeg",
];

const values = [
  {
    title: "Garra",
    desc: "Superando obstáculos com determinação em cada projeto realizado.",
    img: "/Imagens/AboutLorrayne/LixandoParedes.jpeg",
  },
  {
    title: "Fé",
    desc: "A espiritualidade que sustenta cada pincelada e cada conquista.",
    img: "/Imagens/AboutLorrayne/PintoraLorrayne.jpeg",
  },
  {
    title: "Qualidade",
    desc: "Entrega impecável em cada serviço, sem exceções ou atalhos.",
    img: "/Imagens/serviços/CasaAltoPadrao.jpeg",
  },
  {
    title: "Técnica",
    desc: "Anos de aprendizado transformados em excelência profissional.",
    img: "/Imagens/AboutLorrayne/AplicandoGessonoTeto.jpeg",
  },
  {
    title: "Família",
    desc: "O propósito que move tudo: construir um futuro melhor.",
    img: "/Imagens/Filhos/Comfilho.jpeg",
  },
  {
    title: "Liderança",
    desc: "Inspirando mulheres a ocuparem seu espaço no mercado.",
    img: "/Imagens/AboutLorrayne/EquipeLorrayne.jpeg",
  },
];

const parallaxFactors = [-0.04, -0.07, -0.03, -0.06, -0.02, -0.05];

export default function Sobre() {
  const [currentHero, setCurrentHero] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

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
      <section className="relative h-[110vh] md:h-screen flex items-end bg-white md:bg-slate-900">
        <div className="absolute inset-0">
          {/* Setas de navegação */}
          <button
            aria-label="Imagem anterior"
            onClick={() =>
              setCurrentHero(
                (prev) => (prev - 1 + heroImages.length) % heroImages.length,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-orange-500 text-white rounded-full p-2 transition-all"
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
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
          <button
            aria-label="Próxima imagem"
            onClick={() =>
              setCurrentHero((prev) => (prev + 1) % heroImages.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-orange-500 text-white rounded-full p-2 transition-all"
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
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
          {heroImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === currentHero ? "opacity-100" : "opacity-0"
              } ${
                src.includes("perfilemPe") || src.includes("NaLata")
                  ? "md:hidden"
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`Lorrayne Lucas Pintora ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover object-center md:object-[center_45%] scale-110 md:scale-100"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentHero ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative z-20 px-8 md:px-20 pb-16 md:pb-24 max-w-4xl">
          <span className="text-orange-100 font-bold tracking-[0.3em] text-xs uppercase mb-4 inline-block bg-orange-500 px-3 py-1 rounded-md backdrop-blur-sm">
            A Trajetória
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none mb-6">
            Lorrayne
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              Lucas
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            Pintora profissional, influenciadora e referência de mulheres no
            mercado da construção civil.
          </p>
        </div>
      </section>

      {/* MINHA HISTÓRIA */}
      <section className="py-12 md:py-12 px-8 md:px-20 max-w-4xl mx-auto">
        <span className="text-orange-600 font-bold tracking-widest text-[22px] md:text-[22px] uppercase mb-4 block">
          Minha História
        </span>
        <p
          className="text-slate-600 text-[16px] leading-relaxed mb-6"
          style={{ fontSize: "18px" }}
        >
          Tudo começou com um desafio inesperado: pintar um salão inteiro a
          pedido de uma tia. Daquele primeiro rolo de tinta, nasceu algo{" "}
          <strong className="text-slate-900">inexplicável</strong>.
        </p>
        <p
          className="text-slate-600 text-[16px] leading-relaxed"
          style={{ fontSize: "18px" }}
        >
          O caminho não foi fácil. Como ajudante iniciante, Lorrayne enfrentou o
          preconceito em um ramo predominantemente masculino. Mas com{" "}
          <strong className="text-slate-900">garra e fé</strong>, ela
          transformou cada dúvida alheia em degrau.
        </p>
      </section>

      {/* VALORES */}
      <section className="bg-gray-50 py-10 md:py-28 px-8 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-widest text-[22px] md:text-[22px] uppercase mb-4 block">
              O que me move?
            </span>
            <h2
              className="text-3xl font-extrabold text-slate-900"
              style={{ fontSize: "48px" }}
            >
              Valores que guiam cada pincelada
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="relative h-52 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group"
                style={{
                  transform: `translateY(${scrollY * parallaxFactors[i]}px)`,
                  willChange: "transform",
                }}
              >
                <Image
                  src={v.img}
                  alt={v.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
                  <div className="w-8 h-0.5 bg-orange-500 mb-2 rounded-full" />
                  <h3 className="text-white font-extrabold text-lg md:text-[22px] mb-1">
                    {v.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-[22px] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA - bloco 1 */}
      <section className="py-12 md:py-12 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Imagem à esquerda no desktop */}
          <div className="order-1">
            <div className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl mb-4">
              <Image
                src="/Imagens/AboutLorrayne/IniciodeCarreira.jpeg"
                alt="Início de carreira de Lorrayne"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Texto à direita no desktop */}
          <div className="order-2 md:pl-8">
            <span className="text-orange-600 font-bold tracking-widest text-[22px] md:text-[22px] uppercase mb-4 block">
              O Começo
            </span>
            <h2
              className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight"
              style={{ fontSize: "48px" }}
            >
              Tudo começou com um rolo de tinta
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Tudo começou com um desafio inesperado: pintar um salão inteiro a
              pedido de uma tia. Daquele primeiro rolo de tinta, nasceu algo{" "}
              <strong className="text-slate-900">inexplicável</strong>.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Como ajudante iniciante, Lorrayne enfrentou o preconceito em um
              ramo predominantemente masculino. Mas com{" "}
              <strong className="text-slate-900">garra e fé</strong>, ela
              transformou cada dúvida alheia em degrau.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA - bloco 2 */}
      <section className="bg-gray-50 py-12 md:py-12 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Texto à esquerda no desktop */}
          <div className="order-2 md:order-1 md:pr-8">
            <span className="text-orange-600 font-bold tracking-widest text-[22px] md:text-[22px] uppercase mb-4 block">
              O Crescimento
            </span>
            <h2
              className="text-3xl font-extrabold text-slate-900 mt-6 leading-tight"
              style={{ fontSize: "48px" }}
            >
              Da obra ao palco: uma voz que inspira milhares
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Hoje, conta com{" "}
              <strong className="text-slate-900">Equipe Qualificada</strong>,
              ela não apenas pinta paredes, mas constrói histórias e inspira
              milhares de profissionais em todo o Brasil.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-6 italic text-slate-700 text-lg leading-relaxed">
              &quot;Batalho há anos pela valorização da mulher na pintura. Quero
              mostrar que podemos fazer a diferença.&quot;
            </blockquote>
          </div>
          {/* Imagem à direita no desktop */}
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/Imagens/AboutLorrayne/PintoraLorrayne2.jpeg"
                alt="Lorrayne pintando em ação"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-8 md:py-12 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-6xl md:text-7xl font-black text-slate-900 leading-none">
              +580
            </p>
            <div className="w-10 h-1 bg-orange-500 mx-auto my-4 rounded-full" />
            <p
              className="text-sm font-bold text-orange-600 uppercase tracking-widest"
              style={{ fontSize: "18px" }}
            >
              Obras Realizadas
            </p>
          </div>
          <div>
            <p className="text-6xl md:text-7xl font-black text-slate-900 leading-none">
              100%
            </p>
            <div className="w-10 h-1 bg-orange-500 mx-auto my-4 rounded-full" />
            <p
              className="text-sm font-bold text-orange-600 uppercase tracking-widest"
              style={{ fontSize: "18px" }}
            >
              Profissionalismo
            </p>
          </div>
          <div>
            <p className="text-6xl md:text-7xl font-black text-slate-900 leading-none italic">
              ∞
            </p>
            <div className="w-10 h-1 bg-orange-500 mx-auto my-4 rounded-full" />
            <p
              className="text-sm font-bold text-orange-600 uppercase tracking-widest"
              style={{ fontSize: "18px" }}
            >
              Dedicação
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-8 md:py-12 px-8 text-center">
        <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-6 block">
          Próximo passo
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 leading-tight">
          Conheça nossos serviços
        </h2>
        <Link
          href="/servicos"
          className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-500 transition-all shadow-lg active:scale-95 text-sm uppercase tracking-widest"
        >
          Ver Serviços →
        </Link>
      </section>

      <footer className="bg-slate-900 border-t border-white/10 py-20 px-8 text-center">
        <h2 className="text-white text-2xl font-light mb-2 italic">
          Mãe • Trabalhadora • Influenciadora
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-orange-500 font-mono text-[10px] tracking-[0.3em] uppercase mt-4">
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
