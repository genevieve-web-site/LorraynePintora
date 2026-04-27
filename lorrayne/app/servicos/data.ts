export type ServiceItem = { name: string; desc: string };

export type Service = {
  slug: string;
  title: string;
  category: string;
  short: string;
  cover: string;
  hero: string;
  intro: string;
  items: ServiceItem[];
  gallery: string[];
};

export const services: Service[] = [
  {
    slug: "pinturas-decorativas",
    title: "Pinturas Decorativas e Efeitos Premium",
    category: "Alto Padrão",
    short:
      "Marmorização, Cimento Queimado, Cristalgrau e acabamentos em gesso de alto valor estético.",
    cover: "/Imagens/serviços/Loja.jpeg",
    hero: "/Imagens/serviços/efeito.jpeg",
    intro:
      "Este nicho agrega os serviços de alto valor agregado e estética refinada, transformando ambientes comuns em espaços sofisticados e únicos.",
    items: [
      {
        name: "Pedras Naturais Premium",
        desc: "Mais de 400 cores + acabamento com brilho especial que deixa o efeito ultra sofisticado.",
      },
      {
        name: "Marmorização",
        desc: "Pintura que imita pedras naturais com polimento e alto brilho.",
      },
      {
        name: "Cimento Queimado",
        desc: "Acabamento moderno e urbano para paredes internas e externas.",
      },

      {
        name: "Acabamentos em Gesso",
        desc: "Pintura e finalização de sancas, molduras e tetos.",
      },
    ],
    gallery: [
      "/Imagens/serviços/Marmorizacao.jpeg",
      "/Imagens/serviços/CimentoQueimado.jpeg",
      "/Imagens/serviços/efeito3.jpeg",
      "/Imagens/serviços/Banheiro.jpeg",
      "/Imagens/serviços/GessoTeto.jpeg",
      "/Imagens/serviços/Marmore.jpeg",
    ],
  },
  {
    slug: "residencial-comercial",
    title: "Pintura Residencial e Comercial",
    category: "Residencial",
    short:
      "Paredes, tetos, fachadas e esquadrias. Proteção e renovação com qualidade garantida.",
    cover: "/Imagens/serviços/escadamarmoreeGesso.jpeg",
    hero: "/Imagens/serviços/Interior.jpeg",
    intro:
      "O serviço bem feito, focado em proteção e renovação de ambientes residenciais e comerciais, com acabamento impecável e durabilidade.",
    items: [
      {
        name: "Pintura de Paredes e Tetos",
        desc: "Aplicação de tintas acrílicas, látex e acetinadas.",
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
      "/Imagens/serviços/CasaAltoPadrao.jpeg",
      "/Imagens/serviços/Interior.jpeg",
      "/Imagens/serviços/AreaExterna.jpeg",
      "/Imagens/serviços/Escadas.jpeg",
      "/Imagens/serviços/Comercial.jpeg",
      "/Imagens/serviços/Externo3.jpeg",
    ],
  },
  {
    slug: "industrial-revestimento",
    title: "Pintura Industrial e Revestimento de Piso",
    category: "Industrial",
    short:
      "Pisos epóxi, estruturas metálicas e quadras esportivas com máxima resistência.",
    cover: "/Imagens/serviços/PisoIndustrial.jpeg",
    hero: "/Imagens/serviços/PisoIndustrial.jpeg",
    intro:
      "Focado em alta resistência e grandes áreas, com soluções técnicas para ambientes industriais, comerciais e esportivos.",
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
    ],
    gallery: [
      "/Imagens/serviços/PisoIndustrial.jpeg",
      "/Imagens/serviços/PisoIndustrial.jpeg",
      "/Imagens/serviços/Quadra.jpeg",
      "/Imagens/serviços/Quadra3.jpeg",
    ],
  },
  {
    slug: "madeiras",
    title: "Tratamento e Vernização de Madeiras",
    category: "Madeiras",
    short:
      "Vernização premium e impermeabilização para portas, janelas, decks e telhados.",
    cover: "/Imagens/serviços/PortadeVerniz2.jpeg",
    hero: "/Imagens/serviços/portaVerniz.jpeg",
    intro:
      "Especializado na recuperação e proteção de fibras naturais, preservando a beleza e aumentando a vida útil da madeira.",
    items: [
      {
        name: "Vernização Premium",
        desc: "Aplicação de verniz com diferentes tonalidades (Imbuia, Mogno, Cedro) em portas, janelas e decks.",
      },
      {
        name: "Tratamento de Telhados",
        desc: "Pintura e impermeabilização de telhas de barro ou concreto.",
      },
    ],
    gallery: [
      "/Imagens/serviços/portaVerniz.jpeg",
      "/Imagens/serviços/Verniz.jpeg",
      "/Imagens/serviços/PortadeVerniz2.jpeg",
      "/Imagens/serviços/telhado.jpeg",
    ],
  },
  {
    slug: "metais-serralheria",
    title: "Pintura de Metais e Serralheria",
    category: "Metais",
    short:
      "Portões, grades e estruturas metálicas com esmalte anticorrosivo de longa duração.",
    cover: "/Imagens/serviços/Portao.jpeg",
    hero: "/Imagens/serviços/portao2.jpeg",
    intro:
      "Foco em durabilidade e acabamento liso para metais, com proteção anticorrosiva que garante anos de vida útil.",
    items: [
      {
        name: "Portões e Grades",
        desc: "Pintura com esmalte sintético ou automotivo para prevenir ferrugem.",
      },
      {
        name: "Containers e Revestimentos Metálicos",
        desc: "Pintura de chapas onduladas e estruturas de segurança.",
      },
    ],
    gallery: [
      "/Imagens/serviços/Portao.jpeg",
      "/Imagens/serviços/portao2.jpeg",
      "/Imagens/serviços/portao3.jpeg",
      "/Imagens/serviços/PortaoBranco.jpeg",
    ],
  },
  {
    slug: "manutencao-recuperacao",
    title: "Manutenção e Recuperação de Superfícies",
    category: "Manutenção",
    short:
      "Tratamento de tijolos, remoção de umidade e impermeabilização de superfícies deterioradas.",
    cover: "/Imagens/serviços/Quadra3.jpeg",
    hero: "/Imagens/serviços/ACasaRustica.jpeg",
    intro:
      "Recuperação completa de superfícies deterioradas, garantindo uma base sólida e esteticamente agradável para a pintura final.",
    items: [
      {
        name: "Tratamento de Tijolos à Vista",
        desc: "Limpeza e aplicação de resina para tijolos expostos.",
      },
      {
        name: "Remoção de Umidade e Impermeabilização",
        desc: "Preparo completo de superfícies antes da pintura final.",
      },
    ],
    gallery: [
      "/Imagens/serviços/ACasaRustica.jpeg",
      "/Imagens/serviços/ParedeCasaRustica.jpeg",
      "/Imagens/serviços/FrenteCasaRustica.jpeg",
      "/Imagens/serviços/ParedeGesso.jpeg",
    ],
  },
];
