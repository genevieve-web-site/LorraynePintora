export type ServiceItem = { name: string; desc: string };

export type Service = {
  slug: string;
  title: string;
  category: string;
  short: string;
  cover: string;
  hero: string;
  items: ServiceItem[];
  gallery: string[];
  galleryCasaNaPraia?: string[];
};

export const services: Service[] = [
  {
    slug: "marmorizacao",
    title: "Marmorização",
    category: "Alto Padrão",
    short:
      "Polimento em marmore e brilho intenso.",
    cover: "/Imagens/serviços/Marmorizacao.jpeg",
    hero: "/Imagens/serviços/efeito.jpeg",
    items: [
      {
        name: "Polimentos",
        desc: "Acabamento com brilho especial que deixa o efeito ultra sofisticado.",
      },

    ],
    gallery: [
      "/Imagens/serviços/Marmorizacao.jpeg",
      "/Imagens/serviços/marmores.jpeg",
   
    
      "/Imagens/serviços/Marmore.jpeg",
    ],
  },
  {
    slug: "pintura-mecanizada",
    title: "Pintura Mecanizada",
    category: "Residencial",
    short:
      " Acabamento de Alto Padrão, Sistema Airless e máquinas de pintar. ",
    cover: "/Imagens/serviços/Escadas2.jpeg",
    hero: "/Imagens/serviços/Escadas2.jpeg",
    items: [
      {
        name: "Pintura de Paredes e Tetos",
        desc: "Aplicação de tintas .",
      },
      {
        name: "Pintura de Fachadas",
        desc: "Proteção contra intempéries e revitalização estética.",
      },
      {
        name: "Escadas e Corrimãos",
        desc: "Pintura detalhada de estruturas de acesso.",
      },
    ],
    gallery: [
      "/Imagens/AboutLorrayne/LorraynePintandooTeto.jpeg",
      "/Imagens/serviços/Comercial2.jpeg",
      "/Imagens/serviços/GessoTeto.jpeg",
      "/images/Servicescapas/10.jpg",
    ],
  },
  {
    slug: "industrial-revestimento",
    title: "Pintura Industrial ",
    category: "Industrial",
    short:
      "Pisos epóxi, revitalizações : Condomínios, Escolas e Empresas. ",
    cover: "/Imagens/serviços/Escola.jpeg",
    hero: "/Imagens/serviços/PisoIndustrial.jpeg",
    items: [
      {
        name: "Pisos Industriais (Epóxi/Poliuretano)",
        desc: "Acabamento brilhante, impermeável e de fácil limpeza.",
      },
      {
        name: "Pintura de Estruturas Metálicas",
        desc: "Proteção anticorrosiva para galpões e suportes.",
      },
      {
        name: "Quadras Esportivas",
        desc: "Pintura estratificada para alta abrasão e demarcação técnica.",
      },
       {
        name: "Faxas Comerciais",
        desc: "Profissionalismo e dedicação.",
      },
    ],
    gallery: [
      "/Imagens/serviços/Comercial.jpeg",
      "/Imagens/serviços/PisoIndustrial.jpeg",
      "/Imagens/serviços/loja.jpeg",
      "/Imagens/serviços/Quadra3.jpeg",
    ],
  },
  {
    slug: "residencial",
    title: "Casas de Alto Padrão ",
    category: "Residencial",
    short:
      " Pintura internas e Externas. Cimento Queimado, Gesso, Muros, Pisos, Efeitos modernos. Apastamentos, Chacaras, Casa na Praia e muito mais ",
    cover: "/Imagens/serviços/ACasaRustica.jpeg",
    hero: "/Imagens/serviços/portaVerniz.jpeg",
    items: [
      {
        name: "Pisos",
        desc: "Piso Liquidos, Restauração e Revitalização.",
      },
      {
        name: "Calçadas e Muros ",
        desc: "Pintura com tinta Grafeno e impermeabilização de telhas de barro ou concreto.",
      },
    ],
    galleryCasaNaPraia: [
      "/Imagens/serviços/CozinhaRustica.jpeg",
      "/Imagens/serviços/Escadas.jpeg",
      "/Imagens/serviços/FrenteCasaRustica.jpeg",
      "/Imagens/serviços/ParedeCasaRustica.jpeg",
      "/Imagens/serviços/JaneladaCasaRustica.jpeg",
      "/Imagens/serviços/ParededaCasaRusticaCozinha.jpeg",
    ],
    gallery: [
      "/Imagens/serviços/AreaExterna2.jpeg",
      "/Imagens/serviços/CasaAltoPadrao.jpeg",
      "/Imagens/serviços/CimentoQueimado3.jpeg",
      "/Imagens/serviços/escadamarmoreeGesso.jpeg",
      "/Imagens/serviços/Interior.jpeg"   
    
    ],
    
  },
  {
    slug: "madeiras",
    title: "Tratamento e Vernização de Madeiras",
    category: "Madeiras",
    short:
      "Vernização premium e Laqueamento para portas, janelas, decks e telhados.",
    cover: "/Imagens/serviços/Verniz.jpeg",
    hero: "/Imagens/serviços/portaVerniz.jpeg",
    items: [
      {
        name: "Pisos Decks",
        desc: " Restauração e Revitalização.",
      },
      {
        name: "Tratamento de Telhados",
        desc: " Resina e blindagem.",
      },
       {
        name: "Potão, Portas e Janelas",
        desc: " Lixamento, Verniz e brilho",
      },
    ],
    gallery: [
       "/Imagens/serviços/telhado.jpeg",
      "/Imagens/serviços/telhado.mp4",
      "/Imagens/serviços/portaVerniz.jpeg",
      "/Imagens/serviços/PortadeVerniz2.jpeg",
     
    ],
  },
  
  {
    slug: "metais-serralheria",
    title: "Pintura em Metais",
    category: "Metais",
    short:
      "Tratamento anticorrosivo e pinturas  : Portoẽs, Grades, Portas, Janelas, Escadas e estruturas metálicas  de longa duração.",
    cover: "/Imagens/serviços/Portao.jpeg",
    hero: "/Imagens/serviços/portao2.jpeg",
    items: [
      {
        name: "Portões e Grades",
        desc: " ",
      },
            {
        name: "Janelas, Portas, Escadas e Corrimo ",
        desc: "",
      },
      {
        name: "Containers e Revestimentos Metálicos",
        desc: "",
      },
    ],
    gallery: [
      "/Imagens/serviços/Portao.jpeg",
      "/Imagens/serviços/portao2.jpeg",
      "/Imagens/serviços/portao3.jpeg",
      "/Imagens/serviços/PortaoBranco.jpeg",
      "/Imagens/serviços/TintaAOleo.jpeg",
      "/Imagens/serviços/escadaMetal.jpg",
    ],
  },
  {
    slug: "manutencao-recuperacao",
    title: "Manutenção e Recuperação de Superfícies",
    category: "Manutenção",
    short:
      "Tratamento e reformas : Alto Padrão, Textura Protegida, Pós Obra e impermeabilização de superfícies deterioradas.",
    cover: "/Imagens/serviços/Externo3.jpeg",
    hero: "/Imagens/serviços/ACasaRustica.jpeg",
    items: [
      {
        name: "Pós-Obra",
        desc: "Limpeza",
      },
      {
        name: "Restaurações Técnicas",
        desc: "Preparo completo de superfícies antes da pintura final.",
      },
    ],
    gallery: [
      "/Imagens/serviços/ParedeGesso.jpeg",
      "/Imagens/serviços/filhoMAza.jpeg",
      "/Imagens/serviços/teto3.jpeg",
      "/Imagens/serviços/TetodeGesso2.jpeg",
    ],
  },
];
