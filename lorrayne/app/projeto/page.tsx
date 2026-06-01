"use client";
import Image from "next/image";
import Link from "next/link";
import { submitForm } from "./actions";
import { useEffect, useState } from "react";

const bgImages = [
  "/images/ProjetoVolunt/projeto1.jpg",
  "/images/ProjetoVolunt/projeto2.jpg",
  "/images/ProjetoVolunt/projeto3.jpg",
];

type ModalState = { show: boolean; success: boolean; message: string };

export default function ProjetoSocial() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [modal, setModal] = useState<ModalState>({
    show: false,
    success: false,
    message: "",
  });
  const [loadingForm, setLoadingForm] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 11);
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formName: string,
  ) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoadingForm(formName);
    const formData = new FormData(form);
    const result = await submitForm(formName, formData);
    setLoadingForm(null);

    if (result.success) {
      setModal({ show: true, success: true, message: "" });
      form.reset();
    } else {
      setModal({
        show: true,
        success: false,
        message: result.error ?? "Tente novamente.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Modal de feedback */}
      {modal.show && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setModal({ show: false, success: false, message: "" })}
        >
          <div
            className="bg-white rounded-3xl p-10 max-w-sm w-full shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {modal.success ? (
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}

            <h3 className="text-2xl font-black uppercase text-slate-900 mb-2 tracking-wide">
              {modal.success ? "Enviado!" : "Erro no envio"}
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-light leading-relaxed">
              {modal.success
                ? "Recebemos sua mensagem e entraremos em contato em breve."
                : modal.message}
            </p>

            <button
              onClick={() =>
                setModal({ show: false, success: false, message: "" })
              }
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-sm active:scale-95"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Botão Voltar */}
      <nav className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-sm font-bold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          ← VOLTAR
        </Link>
      </nav>

      {/* Hero Section */}
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

          <button
            onClick={() =>
              document
                .getElementById("ajudar")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 mb-6 px-10 py-4 bg-orange-600 text-white font-bold text-sm md:text-base rounded-full shadow-2xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-widest border border-white/10"
          >
            Seja um voluntário
          </button>
        </div>
      </header>

      <section id="ajudar" className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* COLUNA ESQUERDA: TEXTOS INFORMATIVOS */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">
                O Projeto Colorindo Vidas
              </h2>
              <p className="text-slate-600 font-light text-base leading-relaxed max-w-xl">
                Um projeto social de iniciativa voluntária criada para ajudar
                mulheres e famílias que precisam de apoio para transformar seus
                lares. Se você precisa de ajuda, preencha o formulário contando
                sua história, que é analisada pela equipe da Lorrayne Lucas.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase italic">
                Quer Ajudar?
              </h3>
              <p className="text-slate-600 font-light text-base leading-relaxed max-w-xl">
                Aceitamos ajuda financeira, doação de materiais, mão de obra e
                muito mais. Se você quer fazer a diferença, preencha o
                formulário ao lado.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {/* FORMULÁRIO 1: RECEBER AJUDA */}
            <div className="bg-orange-600 p-8 md:p-12 rounded-[3rem] shadow-xl border border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black italic text-white/30 uppercase pointer-events-none">
                Preciso
              </div>

              <h2 className="text-3xl font-black mt-12 text-slate-900 mb-2 uppercase italic">
                Receber Ajuda
              </h2>
              <p className="text-slate-200 mb-8 font-light text-sm">
                Mora em Divinópoles MG ou região? Conte sua história para nossa
                análise.
              </p>

              <form
                onSubmit={(e) => handleFormSubmit(e, "receber-ajuda")}
                className="space-y-4"
                noValidate
              >
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu Nome Completo"
                  pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+"
                  title="Somente letras e espaços"
                  className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-slate-900 outline-none transition-all"
                />
                <input
                  type="text"
                  name="endereco"
                  required
                  placeholder="Seu Endereço / Bairro"
                  title="Endereço com letras e números"
                  className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-slate-900 outline-none transition-all"
                />
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="WhatsApp — somente números (ex: 31999998888)"
                  pattern="[0-9]{11}"
                  title="DDD + 9 dígitos, somente números. Ex: 31999998888"
                  onInput={handlePhoneInput}
                  className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-slate-900 outline-none transition-all"
                />
                <textarea
                  name="historia"
                  required
                  placeholder="Conte-nos sua história e por que sua casa precisa dessa transformação..."
                  rows={5}
                  className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-slate-900 outline-none transition-all resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loadingForm === "receber-ajuda"}
                  className="w-full mt-10 bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-slate-700 transition-all uppercase tracking-widest shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  {loadingForm === "receber-ajuda"
                    ? "Enviando..."
                    : "Enviar Minha História"}
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

            {/* FORMULÁRIO 2: SER PARCEIRO */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-black italic text-white uppercase pointer-events-none">
                Ajudar
              </div>

              <h2 className="text-3xl mt-12 font-black mb-2 uppercase italic">
                Ser um Parceiro
              </h2>
              <p className="text-slate-400 mb-8 font-light text-sm">
                Doe materiais, mão de obra ou patrocine uma transformação.
              </p>

              <form
                onSubmit={(e) => handleFormSubmit(e, "ser-parceiro")}
                className="space-y-4"
                noValidate
              >
                <input
                  type="text"
                  name="nome-empresa"
                  required
                  placeholder="Nome ou Empresa"
                  className="w-full p-4 bg-white/10 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-white/50 outline-none text-white transition-all"
                />
                <select
                  name="tipo-ajuda"
                  required
                  defaultValue=""
                  className="w-full p-4 bg-white/10 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-white/50 outline-none text-white transition-all appearance-none"
                >
                  <option value="" disabled className="text-slate-900">
                    Como deseja ajudar?
                  </option>
                  <option value="tintas-materiais" className="text-slate-900">
                    Doação de Tintas/Materiais
                  </option>
                  <option value="mao-de-obra" className="text-slate-900">
                    Voluntário (Mão de Obra)
                  </option>
                  <option value="patrocinio" className="text-slate-900">
                    Patrocínio Financeiro
                  </option>
                  <option value="outros" className="text-slate-900">
                    Outros
                  </option>
                </select>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="WhatsApp — somente números (ex: 31999998888)"
                  pattern="[0-9]{11}"
                  title="DDD + 9 dígitos, somente números. Ex: 31999998888"
                  onInput={handlePhoneInput}
                  className="w-full p-4 bg-white/10 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-white/50 outline-none text-white transition-all"
                />
                <textarea
                  name="contribuicao"
                  required
                  placeholder="Fale brevemente sobre como você ou sua empresa podem contribuir..."
                  rows={4}
                  className="w-full p-4 bg-white/10 border-2 border-transparent rounded-2xl focus:ring-0 focus:border-white/50 outline-none text-white transition-all resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loadingForm === "ser-parceiro"}
                  className="w-full bg-white mt-12 text-slate-900 font-bold py-5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all uppercase tracking-widest shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  {loadingForm === "ser-parceiro"
                    ? "Enviando..."
                    : "Quero Contribuir"}
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
        </div>
      </section>

      {/* Footer */}
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
