"use client";
import Image from "next/image";
import Link from "next/link";

import { notFound, useParams } from "next/navigation";
import { services } from "../data";
import { useState } from "react";

export default function ServiceDetail() {
  const params = useParams();
  const [modalImg, setModalImg] = useState<string | null>(null);

  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
        ? params.slug[0]
        : "";
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Botão Voltar */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/servicos"
          className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          ← SERVIÇOS
        </Link>
      </nav>

      {/* HERO */}
      <section
        className={`relative h-[60vh] md:h-[70vh] flex items-end ${service.slug === "pinturas-decorativas" ? "bg-orange-600" : ""}`}
      >
        <div className="absolute inset-0">
          <Image
            src={service.hero}
            alt={service.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative z-10 px-8 md:px-20 pb-12 md:pb-20 max-w-5xl">
          <span
            className={`font-bold tracking-[0.3em] text-xs uppercase mb-3 inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md ${service.category === "Alto Padrão" ? "text-white" : "text-orange-500"}`}
          >
            {service.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-3">
            {service.title}
          </h1>
        </div>
      </section>

      {/* INTRO removido conforme solicitado */}

      {/* SERVIÇOS ESPECÍFICOS */}
      <section className="bg-gray-50 py-16 md:py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 leading-tight">
            Pinturas especializados
          </h2>
          <div className="space-y-4">
            {service.items.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-extrabold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                    {item.name}
                  </h3>
                  <p
                    className="text-slate-600 leading-relaxed"
                    style={{ fontSize: "22px" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-16 md:py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">
          Nosso trabalho
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 leading-tight">
          Galeria
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {service.gallery.map((img, i) => (
            <button
              key={i}
              className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm focus:outline-none"
              type="button"
              onClick={() => setModalImg(img)}
              aria-label={`Abrir imagem ${i + 1} em destaque`}
            >
              <Image
                src={img}
                alt={`${service.title} ${i + 1}`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
        {/* Modal de imagem */}
        {modalImg && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-12"
            onClick={() => setModalImg(null)}
          >
            <button
              className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={() => setModalImg(null)}
              aria-label="Fechar imagem"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className="relative w-full h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImg}
                alt="Imagem em destaque"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 md:py-28 px-8 text-center">
        <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-6 block">
          Vamos conversar
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 leading-tight">
          Quer este serviço no seu espaço?
        </h2>
        <a
          href="https://wa.me/553788287934"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-500 transition-all shadow-lg active:scale-95 text-sm uppercase tracking-widest"
        >
          Solicitar Orçamento →
        </a>
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
