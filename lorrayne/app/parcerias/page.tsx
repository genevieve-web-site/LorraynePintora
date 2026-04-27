"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialCards = [
  {
    platform: "Instagram",
    handle: "@lorraynelucas_pintora",
    stat1: "+223 mil",
    label1: "Seguidores",
    stat2: "Milhões",
    label2: "de Engajamento",
    img: "/Imagens/Marcas/PArcerias.jpeg",
  },
  {
    platform: "TikTok",
    handle: "@lorraynelucas",
    stat1: "+50 mil",
    label1: "Seguidores",
    stat2: "Viral",
    label2: "Alcance Nacional",
    img: "/Imagens/Marcas/Evento.jpeg",
  },
  {
    platform: "Facebook",
    handle: "Lorrayne Lucas Pintora",
    stat1: "+30 mil",
    label1: "Seguidores",
    stat2: "Ativo",
    label2: "Comunidade",
    img: "/Imagens/Marcas/Entrevista.jpeg",
  },
];

const partnershipTypes = [
  {
    title: "Divulgação de Marcas",
    description:
      "Sua marca em evidência para um público qualificado de pintores, arquitetos e clientes finais.",
    icon: "📣",
  },
  {
    title: "Review de Produtos",
    description:
      "Teste técnico de tintas, rolos e ferramentas em obras reais, demonstrando resultado na prática.",
    icon: "🛠️",
  },
  {
    title: "Permutas",
    description:
      "Negociações com materiais de obra, equipamentos e melhorias que agreguem valor ao trabalho.",
    icon: "🤝",
  },
];

const partners = [
  { name: "Maza", img: "/Imagens/Marcas/Maza.jpeg" },
  { name: "CD Logístico", img: "/Imagens/Marcas/ParceriasCDLogistico.jpeg" },
  { name: "Equipe Maza", img: "/Imagens/Marcas/EquipeMAza.jpeg" },
  { name: "Brasilux", img: "/Imagens/logos/Lorrayne.jpeg" },
  { name: "Parceria", img: "/Imagens/Marcas/Parcerias.jpeg" },
  { name: "Maza Pro", img: "/Imagens/Marcas/MAza.jpeg" },
];

export default function Parcerias() {
  const [partnerIdx, setPartnerIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setPartnerIdx((p) => (p + 1) % partners.length),
      3500,
    );
    return () => clearInterval(t);
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
      <section className="relative h-[45vh] md:h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/Imagens/Marcas/Parcerias.jpeg"
            alt="Parcerias"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="relative z-10 px-8 md:px-20 pb-12 md:pb-20">
          <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
            Colaborações
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none">
            Parcerias
          </h1>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section className="py-16 md:py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-orange-600 font-bold tracking-widest text-[22px] uppercase mb-3 block">
            Presença digital
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Uma audiência real que engaja
          </h2>
        </div>

        {/* Mobile: scroll horizontal / Desktop: grid 3 cols */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scroll-pl-8 -mx-8 px-8 md:mx-0 md:px-0">
          {socialCards.map((s, i) => (
            <div
              key={i}
              className="min-w-[110vw] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-72 md:h-110 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.platform}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white font-extrabold text-sm px-3 py-1 rounded-full">
                  {s.platform}
                </span>
                <span className="absolute bottom-4 left-4 text-white/80 text-xs">
                  {s.handle}
                </span>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-slate-900">
                    {s.stat1}
                  </p>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-widest mt-1">
                    {s.label1}
                  </p>
                </div>
                <div className="text-center border-l border-gray-100">
                  <p className="text-2xl font-black text-slate-900">
                    {s.stat2}
                  </p>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-widest mt-1">
                    {s.label2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIPOS DE PARCERIA - cards menores */}
      <section className="bg-gray-50 py-16 md:py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-orange-600 font-bold tracking-widest text-[22px] uppercase mb-3 block">
              Como trabalhar juntos
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Modalidades de parceria
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {partnershipTypes.map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-4 items-start"
              >
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-[16px] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARROSSEL DE PARCEIROS */}
      <section className="py-16 md:py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-orange-600 font-bold tracking-widest text-[22px] uppercase mb-3 block">
            Quem confia no trabalho
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Parceiros
          </h2>
        </div>

        <div className="relative">
          {/* Track */}
          <div className="flex gap-5 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const idx = (partnerIdx + offset) % partners.length;
              const p = partners[idx];
              return (
                <div
                  key={offset}
                  className="flex-1 min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-70 md:h-110">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-6 h-0.5 bg-orange-500 mx-auto mb-2 rounded-full" />
                    <p className="font-extrabold text-slate-900 text-sm">
                      {p.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {partners.map((_, i) => (
              <button
                key={i}
                onClick={() => setPartnerIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === partnerIdx ? "w-6 bg-orange-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="bg-slate-900 py-20 md:py-28 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              Vamos conversar
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
              Quer ser um parceiro?
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                  📍
                </div>
                <p className="text-slate-300 text-sm">
                  Divinópolis — Minas Gerais
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                  📱
                </div>
                <p className="text-slate-300 text-sm">(37) 8828-7934</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                  📧
                </div>
                <p className="text-slate-300 text-sm">
                  contato@lorraynelucas.com.br
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/553788287934"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white text-center py-4 px-8 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg text-sm"
            >
              Chamar no WhatsApp →
            </a>
            <a
              href="mailto:contato@lorraynelucas.com.br"
              className="bg-white/10 hover:bg-white/20 text-white text-center py-4 px-8 rounded-full font-bold uppercase tracking-widest transition-all text-sm"
            >
              Enviar E-mail
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
