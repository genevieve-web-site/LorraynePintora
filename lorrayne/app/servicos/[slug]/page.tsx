"use client";
import Image from "next/image";
import Link from "next/link";

import { notFound, useParams } from "next/navigation";
import { services } from "../data";
import { useState } from "react";

export default function ServiceDetail() {
  const params = useParams();
  const [modalMedia, setModalMedia] = useState<string | null>(null);

  const slug =
    typeof params.slug === "string"
      ? params.slug.trim().toLowerCase()
      : Array.isArray(params.slug)
        ? params.slug[0]?.trim().toLowerCase() ?? ""
        : "";
  const service = services.find((s) => s.slug.trim().toLowerCase() === slug);
  if (!service) notFound();

  const renderGallery = (title: string, images: string[]) => (
    <div className="mb-16">
      <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">
        {title}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 leading-tight">
        {title === "Nosso trabalho" ? "Galeria" : title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={`${title}-${i}`}
            className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm focus:outline-none"
            type="button"
            onClick={() => setModalMedia(img)}
            aria-label={`Abrir mídia ${i + 1} em destaque`}
          >
            {img.toLowerCase().endsWith(".mp4") ? (
              <video
                src={img}
                className="h-full w-full object-cover object-center"
                muted
                playsInline
                loop
                autoPlay
              />
            ) : (
              <Image
                src={img}
                alt={`${title} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );

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

      {/* TÍTULO + DESCRIÇÃO */}
      <section className="pt-28 pb-12 px-8 md:px-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <span className="font-bold tracking-[0.3em] text-xs uppercase mb-3 inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md text-orange-400">
            {service.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
            {service.title}
          </h1>
        </div>
      </section>

      {/* GALERIAS */}
      <section className="py-16 md:py-24 px-8 md:px-20 max-w-7xl mx-auto">
        {service.galleryCasaNaPraia?.length ? (
          renderGallery(" Especial - Casa na Praia", service.galleryCasaNaPraia)
        ) : null}

        {renderGallery("Nosso trabalho", service.gallery)}

        {/* Modal de imagem */}
        {modalMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-12"
            onClick={() => setModalMedia(null)}
          >
            <button
              className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={() => setModalMedia(null)}
              aria-label="Fechar imagem"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className="relative w-full h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {modalMedia.toLowerCase().endsWith(".mp4") ? (
                <video
                  src={modalMedia}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <Image
                  src={modalMedia}
                  alt="Imagem em destaque"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </div>
        )}
      </section>
      {/* DESCRIÇÃO DO SERVIÇO */}
      <section className="bg-gray-50 py-16 md:py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            Descrição
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 leading-tight">
            O que está incluso
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


      <footer className="bg-slate-900 border-t border-white/10 py-12 px-8 text-center">
        <p className="text-gray-400 text-xs">
          Lorrayne Lucas |  Desenvolvido por{" "}
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
