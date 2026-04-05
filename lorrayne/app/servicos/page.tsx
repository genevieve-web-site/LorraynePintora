"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const servicos = [
  {
    title: "Pinturas Decorativas",
    description:
      "Especialista em efeitos de alto padrão: Cimento Queimado, Marmorização e brilho, Efeito Madeira e acabamentos especiais.",
    images: [
      "/images/Servicescapas/3.jpg",
      "/images/Servicescapas/4.jpg",
      "/images/Servicescapas/6.jpg",
    ],
    tags: ["Cimento Queimado", "Marmorização", "Velvet"],
  },
  {
    title: "Residencial e Comercial",
    description:
      "Pintura completa de paredes, tetos, fachadas e esquadrias. Uso de tintas acrílicas, vernizes e esmaltes com acabamento impecável.",
    images: [
      "/images/Servicescapas/1.jpg",
      "/images/Servicescapas/2.jpg",
      "/images/Servicescapas/5.jpg",
    ],
    tags: ["Fachadas", "Interiores", "Metais"],
  },
  {
    title: "Tratamento de Superfícies",
    description:
      "Preparação técnica com emassamento, lixamento e reparo de trincas. Garantia de uma base lisa para a máxima aderência da pintura final.",
    images: [
      "/images/Servicescapas/7.jpg",
      "/images/Servicescapas/8.webp",
      "/images/Servicescapas/10.jpg",
    ],
    imageClassName: "object-bottom",
    tags: ["Nivelamento", "Reparos", "Lixamento"],
  },
  {
    title: "Consultoria Técnica",
    description:
      "Auxílio profissional na escolha de paletas de cores que harmonizam o ambiente e orientação sobre os melhores materiais.",
    images: [
      "/images/Servicescapas/1.jpg",
      "/images/Servicescapas/2.jpg",
      "/images/Servicescapas/3.jpg",
    ],
    tags: ["Cores", "Materiais", "Harmonia"],
  },
];

const equipe = [
  {
    nome: "José Santos",
    cargo: "Especialista",
    image: "/images/Colaboradores/equipe.jpg",
  },
  {
    nome: "Matheus Oliveira",
    cargo: "Pintor",
    image: "/images/Colaboradores/equipe2.jpg",
  },
  {
    nome: "Lorrayne Lucas",
    cargo: "Auxiliar",
    image: "/images/about/perfil.jpg",
  },
  {
    nome: "Jõao Silva",
    cargo: "Acabamento",
    image: "/images/Colaboradores/colaborador4.jpg",
  },
];

export default function Servicos() {
  const [carouselTick, setCarouselTick] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const timer = setInterval(() => setCarouselTick((t) => t + 1), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-slate-50 overflow-hidden"
    >
      {/* Botão Voltar */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          ← VOLTAR
        </Link>
      </nav>

      {/* Header com Paralaxe */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 0.5], [0, -150]),
            scale: 1.2,
          }}
          className="absolute inset-0 opacity-40"
        >
          <Image
            src="/images/about/projeto2.jpg"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.span className="text-orange-500 font-mono tracking-[0.5em] uppercase text-xs mb-2 block">
            Técnica & Excelência
          </motion.span>
          <motion.h1 className="text-5xl md:text-8xl font-black text-white uppercase italic">
            Nossos <br /> Serviços
          </motion.h1>
        </div>
      </header>

      {/* Grid de Serviços */}
      <section className="max-w-7xl mx-auto py-0 md:py-24 px-4 md:px-6">
        <div className="relative z-10 text-center px-4 mb-12">
          <Link
            href="https://wa.me/553788287934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-xs font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95 uppercase tracking-[0.5em]"
          >
            Contrate Nossos Serviços
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {servicos.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col-reverse md:flex-col bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6 text-sm md:text-base">
                  {s.description}
                </p>
                <button className="w-fit text-xs md:text-sm font-black text-slate-900 border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition-colors uppercase tracking-widest">
                  Solicitar Orçamento →
                </button>
              </div>
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={s.images[(carouselTick + index) % s.images.length]}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover md:object-[center_25%] transition-transform duration-700 group-hover:scale-110 ${"imageClassName" in s ? (s.imageClassName as string) : ""}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: NOSSA EQUIPE (2 CARDS) */}
      <section className="max-w-7xl mx-auto pb-16 md:pb-24 px-4 md:px-6">
        <div className="text-center mb-0">
          <span className="text-gray-400 font-mono tracking-[0.4em] uppercase text-[10px] mb-2 block">
            Nos Bastidores
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic">
            Nossa Equipe
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {equipe.slice(0, 2).map((membro, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-3 rounded-3xl border border-gray-100 shadow-sm overflow-hidden text-center"
            >
              <div className="relative h-52 md:h-78 w-full rounded-2xl overflow-hidden mb-0">
                <Image
                  src={membro.image}
                  alt={membro.nome}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover md:object-[center_38%] transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: LOCALIZAÇÃO & MAPA */}
      <section className="max-w-7xl mx-auto py-4 md:py-20 px-4 md:px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-10 flex flex-col justify-center bg-slate-900 text-white">
            <span className="text-orange-500 font-mono tracking-widest text-xs mb-4 uppercase">
              Atendimento
            </span>
            <h2 className="text-3xl font-black uppercase italic mb-6 leading-tight">
              Betim <br /> <span className="text-orange-500">& Região</span>
            </h2>
            <p className="text-slate-400 font-light text-sm mb-8">
              Atendemos em toda a cidade de Betim e cidades vizinhas em Minas
              Gerais.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                📍
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                Minas Gerais, Brasil
              </span>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-80 md:h-auto min-h-[400px]">
            <iframe
              title="Mapa de Atendimento"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120031.5714349457!2d-44.25464139268311!3d-19.923145404172555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695669b6a1e35%3A0xc6a8220c436d4948!2sBetim%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1711380000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-orange-600 py-20 px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 uppercase leading-tight italic">
            Pronto para <br /> transformar seu espaço?
          </h2>
          <Link
            href="https://wa.me/553788287934"
            className="inline-block bg-slate-900 text-white font-bold px-10 py-4 md:px-12 md:py-5 rounded-full hover:bg-white hover:text-orange-600 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </section>

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
