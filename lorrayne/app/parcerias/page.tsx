"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const parcerias = [
  {
    title: "Divulgação de Marcas",
    description:
      "Sua marca em evidência para um público qualificado de pintores, arquitetos e clientes finais que buscam qualidade.",
    icon: "📣",
  },
  {
    title: "Review de Produtos",
    description:
      "Teste técnico de tintas, rolos e ferramentas em obras reais, demonstrando a aplicação e o resultado final na prática.",
    icon: "🛠️",
  },
  {
    title: "Permutas Selecionadas",
    description:
      "Aberta a negociações de permuta que envolvam materiais de obra, equipamentos e melhorias que agreguem valor ao trabalho.",
    icon: "🤝",
  },
];

export default function Parcerias() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      {/* Header com Paralaxe */}
      <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-100 ease-out"
          style={{ transform: `scale(1.2) translateY(${scrollY * 0.1}px)` }}
        >
          <Image
            src="/images/capaTree/1.png"
            alt="Parcerias"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <span className="text-orange-500 font-mono tracking-[0.5em] uppercase text-[10px] mb-2 block">
            Colaborações
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic">
            Parcerias
          </h1>
        </div>
      </header>

      {/* Seção de Informações */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-4">
            Vamos construir juntos?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Busco parceiros que prezam pela excelência e inovação no mundo da
            pintura. Transforme sua marca em autoridade através de conteúdos
            reais e técnicos.
          </p>
        </div>

        {/* Grid de Cards de Parceria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {parcerias.map((p, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Card de Contato - Betim, MG */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black uppercase mb-6">
                Informações de <span className="text-orange-500">Contato</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                    📍
                  </div>
                  <p className="text-sm font-light">Betim — Minas Gerais</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                    📧
                  </div>
                  <p className="text-sm font-light">
                    contato@lorraynelucas.com.br
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500">
                    📱
                  </div>
                  <p className="text-sm font-light">(37) 8828-7934</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/553788287934"
                target="_blank"
                className="bg-orange-600 hover:bg-orange-500 text-center py-5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:contato@lorraynelucas.com.br"
                className="bg-white text-slate-900 hover:bg-gray-100 text-center py-5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Enviar E-mail
              </a>
            </div>
          </div>

          {/* Decoração de fundo do card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
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
