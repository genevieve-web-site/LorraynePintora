import Image from "next/image";
import LinkCard from "./components/LinkCard";

export default function Home() {
  const cards = [
    { href: "/sobre", img: "/images/capaTree/Tree1.jpg" },
    { href: "/servicos", img: "/images/capaTree/Tree2.jpg" },
    { href: "/projeto", img: "/images/capaTree/Tree3.jpg" },
    { href: "/parcerias", img: "/images/capaTree/Tree4.jpg" },
  ];
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-#f7f9fa p-6">
      {/* Container do Perfil */}
      <div className="text-center mt-10 mb-8">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden relative border-2 border-white shadow-md">
          <Image
            src="/Imagens/LinkTree/perfil01.PNG"
            alt="Lorrayne Pintora"
            fill
            className="object-cover"
            sizes="96px"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold">Lorrayne Pintora</h1>
        <p className="text-sm text-gray-500">
          Mãe • Trabalhadora • Pintora Profissional
        </p>
      </div>

      {/* Cards - Garanta que o max-w esteja adequado */}
      <div className="w-full max-w-md space-y-4 flex-grow">
        {cards.map((card, index) => (
          <LinkCard key={index} href={card.href} bgImage={card.img} />
        ))}
      </div>

      {/* Rodapé - Adicionado margem no topo para não grudar nos cards */}
      <footer className="w-full text-center py-12 mt-10 border-t border-gray-100 space-y-2">
        <div className="text-sm text-gray-600"></div>

        <div className="text-[10px] text-gray-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} • Todos os direitos reservados</p>
          <h2 className="mt-1">
            Desenvolvido por{" "}
            <a
              href="https://www.genevieve.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-500 hover:text-orange-500 transition-colors"
            >
              Genevieve WebSite
            </a>
          </h2>
        </div>
      </footer>
    </main>
  );
}
