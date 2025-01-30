import { Subject } from "@dtos/SubjectDTO";
import { Requirements } from "@dtos/RequirementsDTO";

export const subjects: Subject[] = [
  {
    creditCode: "95300-04",
    name: "Cálculo I",
    semester: 1,
    requirements: [],
    required: [
      {
        creditCode: "95304-04",
        name: "Probabilidade e Estatística",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "254CF-02",
    name: "Formação do Empreendedor",
    semester: 1,
    requirements: [],
    required: []
  },
  {
    creditCode: "4611C-06",
    name: "Fundamentos de Programação",
    semester: 1,
    requirements: [],
    required: [
      {
        creditCode: "4611F-04",
        name: "Programação Orientada a Objetos",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "4645G-04",
        name: "Algoritmos e Estruturas de Dados I",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98705-02",
    name: "Introdução à Computação",
    semester: 1,
    requirements: [],
    required: [
      {
        creditCode: "98800-04",
        name: "Fundamentos de Sistemas Computacionais",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "98900-02",
    name: "Introdução à Engenharia de Software",
    semester: 1,
    requirements: [],
    required: [
      {
        creditCode: "46506-04",
        name: "Engenharia de Requisitos",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "46522-04",
        name: "Prática na Ages I",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "95303-04",
    name: "Matemática Discreta",
    semester: 1,
    requirements: [],
    required: [
      {
        creditCode: "4611E-04",
        name: "Lógica para Computação",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "46515-04",
        name: "Linguagens, Autômatos e Computação",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "4645G-04",
    name: "Algoritmos e Estruturas de Dados I",
    semester: 2,
    requirements: [
      {
        creditCode: "4611C-06",
        name: "Fundamentos de Programação",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "4645H-04",
        name: "Algoritmos e Estruturas de Dados II",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "46526-02",
        name: "Programação de Software Básico",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "98901-04",
    name: "Banco de Dados I",
    semester: 2,
    requirements: [],
    required: [
      {
        creditCode: "98902-02",
        name: "Banco de Dados II",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "46523-04",
        name: "Prática na Ages II",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46506-04",
    name: "Engenharia de Requisitos",
    semester: 2,
    requirements: [
      {
        creditCode: "98900-02",
        name: "Introdução à Engenharia de Software",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "98904-04",
        name: "Verificação e Validação de Software",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98905-04",
        name: "Experiência do Usuário",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98800-04",
    name: "Fundamentos de Sistemas Computacionais",
    semester: 2,
    requirements: [
      {
        creditCode: "98705-02",
        name: "Introdução à Computação",
        requirementType: "SPECIAL"
      }
    ],
    required: [
      {
        creditCode: "98700-04",
        name: "Sistemas Operacionais",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46509-02",
    name: "Gerenciamento de Config. de Software",
    semester: 2,
    requirements: [],
    required: [
      {
        creditCode: "46522-04",
        name: "Prática na Ages I",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "4611E-04",
    name: "Lógica para Computação",
    semester: 2,
    requirements: [
      {
        creditCode: "95303-04",
        name: "Matemática Discreta",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "98708-04",
        name: "Inteligência Artificial",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "4646M-04",
        name: "Métodos Formais para Computação",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "4611F-04",
    name: "Programação Orientada a Objetos",
    semester: 2,
    requirements: [
      {
        creditCode: "4611C-06",
        name: "Fundamentos de Programação",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "46522-04",
        name: "Prática na Ages I",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98713-04",
        name: "Fundamentos de Processamento Paralelo e Distribuído",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "4645H-04",
    name: "Algoritmos e Estruturas de Dados II",
    semester: 3,
    requirements: [
      {
        creditCode: "4645G-04",
        name: "Algoritmos e Estruturas de Dados I",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "4646Z-04",
        name: "Projeto e Otimização de Algoritmos",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98708-04",
        name: "Inteligência Artificial",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98902-02",
    name: "Banco de Dados II",
    semester: 3,
    requirements: [
      {
        creditCode: "98901-04",
        name: "Banco de Dados I",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "98H00-04",
        name: "Infraestrutura para Gestão de Dados",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "4636N-04",
        name: "Infraestrutura de Tecnologia da Informação",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46515-04",
    name: "Linguagens, Autômatos e Computação",
    semester: 3,
    requirements: [
      {
        creditCode: "95303-04",
        name: "Matemática Discreta",
        requirementType: "SPECIAL"
      }
    ],
    required: [
      {
        creditCode: "46514-04",
        name: "Linguagens de Programação",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98713-04",
        name: "Fundamentos de Processamento Paralelo e Distribuído",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "95304-04",
    name: "Probabilidade e Estatística",
    semester: 3,
    requirements: [
      {
        creditCode: "95300-04",
        name: "Cálculo I",
        requirementType: "SPECIAL"
      }
    ],
    required: [
      {
        creditCode: "46507-02",
        name: "Engenharia de Software Experimental",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "4611G-04",
        name: "Simulação e Métodos Analíticos",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46526-02",
    name: "Programação de Software Básico",
    semester: 3,
    requirements: [
      {
        creditCode: "4645G-04",
        name: "Algoritmos e Estruturas de Dados I",
        requirementType: "SPECIAL"
      }
    ],
    required: []
  },
  {
    creditCode: "46522-04",
    name: "Prática na Ages I",
    semester: 3,
    requirements: [
      {
        creditCode: "98900-02",
        name: "Introdução à Engenharia de Software",
        requirementType: "SPECIAL"
      },
      {
        creditCode: "46509-02",
        name: "Gerenciamento de Config. de Software",
        requirementType: "SPECIAL"
      },
      {
        creditCode: "4611F-04",
        name: "Programação Orientada a Objetos",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "46523-04",
        name: "Prática na Ages II",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98713-04",
    name: "Fundamentos de Processamento Paralelo e Distribuído",
    semester: 4,
    requirements: [
      {
        creditCode: "46515-04",
        name: "Linguagens, Autômatos e Computação",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "4611F-04",
        name: "Programação Orientada a Objetos",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "46514-04",
    name: "Linguagens de Programação",
    semester: 4,
    requirements: [
      {
        creditCode: "46515-04",
        name: "Linguagens, Autômatos e Computação",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "98903-02",
    name: "Processos de Software",
    semester: 4,
    requirements: [],
    required: []
  },
  {
    creditCode: "4646Z-04",
    name: "Projeto e Otimização de Algoritmos",
    semester: 4,
    requirements: [
      {
        creditCode: "4645H-04",
        name: "Algoritmos e Estruturas de Dados II",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "98906-04",
        name: "Projeto e Arquitetura de Software",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98715-04",
        name: "Segurança de Sistemas",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46523-04",
    name: "Prática na Ages II",
    semester: 4,
    requirements: [
      {
        creditCode: "46522-04",
        name: "Prática na Ages I",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98901-04",
        name: "Banco de Dados I",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "46524-04",
        name: "Prática na Ages III",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98904-04",
    name: "Verificação e Validação de Software",
    semester: 4,
    requirements: [
      {
        creditCode: "46506-04",
        name: "Engenharia de Requisitos",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "46524-04",
        name: "Prática na Ages III",
        requirementType: "SPECIAL"
      },
      {
        creditCode: "46517-02",
        name: "Melhoria de Processos de Software",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46507-02",
    name: "Engenharia de Software Experimental",
    semester: 5,
    requirements: [
      {
        creditCode: "95304-04",
        name: "Probabilidade e Estatística",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "98905-04",
    name: "Experiência do Usuário",
    semester: 5,
    requirements: [
      {
        creditCode: "46506-04",
        name: "Engenharia de Requisitos",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "46510-04",
    name: "Gerenciamento de Projeto de Software",
    semester: 5,
    requirements: [],
    required: [
      {
        creditCode: "46525-04",
        name: "Prática na Ages IV",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98708-04",
    name: "Inteligência Artificial",
    semester: 5,
    requirements: [
      {
        creditCode: "4611E-04",
        name: "Lógica para Computação",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "4645H-04",
        name: "Algoritmos e Estruturas de Dados II",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "98906-04",
    name: "Projeto e Arquitetura de Software",
    semester: 5,
    requirements: [
      {
        creditCode: "4646Z-04",
        name: "Projeto e Otimização de Algoritmos",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "46504-04",
        name: "Construção de Software",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98700-04",
    name: "Sistemas Operacionais",
    semester: 5,
    requirements: [
      {
        creditCode: "98800-04",
        name: "Fundamentos de Sistemas Computacionais",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "98709-04",
        name: "Fundamentos de Redes de Computadores",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "46504-04",
    name: "Construção de Software",
    semester: 6,
    requirements: [
      {
        creditCode: "98906-04",
        name: "Projeto e Arquitetura de Software",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "46524-04",
        name: "Prática na Ages III",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "98709-04",
    name: "Fundamentos de Redes de Computadores",
    semester: 6,
    requirements: [
      {
        creditCode: "98700-04",
        name: "Sistemas Operacionais",
        requirementType: "PREREQUISITE"
      }
    ],
    required: [
      {
        creditCode: "98710-02",
        name: "Laboratório de Redes de Computadores",
        requirementType: "COREQUISITE"
      }
    ]
  },
  {
    creditCode: "98H00-04",
    name: "Infraestrutura para Gestão de Dados",
    semester: 6,
    requirements: [
      {
        creditCode: "98902-02",
        name: "Banco de Dados II",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "98710-02",
    name: "Laboratório de Redes de Computadores",
    semester: 6,
    requirements: [
      {
        creditCode: "98709-04",
        name: "Fundamentos de Redes de Computadores",
        requirementType: "COREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "4471V-02",
    name: "Sistemas de Planejamento e Custos para Engenharia",
    semester: 6,
    requirements: [],
    required: [
      {
        creditCode: "4471X-02",
        name: "Engenharia Econômica",
        requirementType: "SPECIAL"
      }
    ]
  },
  {
    creditCode: "1501A-04",
    name: "Ética e Cidadania",
    semester: 6,
    requirements: [],
    required: []
  },
  {
    creditCode: "4471X-02",
    name: "Engenharia Econômica",
    semester: 7,
    requirements: [
      {
        creditCode: "4471V-02",
        name: "Sistemas de Planejamento e Custos para Engenharia",
        requirementType: "SPECIAL"
      }
    ],
    required: []
  },
  {
    creditCode: "4636N-04",
    name: "Infraestrutura de Tecnologia da Informação",
    semester: 7,
    requirements: [
      {
        creditCode: "98902-02",
        name: "Banco de Dados II",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "4646M-04",
    name: "Métodos Formais para Computação",
    semester: 7,
    requirements: [
      {
        creditCode: "4611E-04",
        name: "Lógica para Computação",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "46524-04",
    name: "Prática na Ages III",
    semester: 7,
    requirements: [
      {
        creditCode: "46504-04",
        name: "Construção de Software",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "46523-04",
        name: "Prática na Ages II",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "98904-04",
        name: "Verificação e Validação de Software",
        requirementType: "SPECIAL"
      }
    ],
    required: [
      {
        creditCode: "46525-04",
        name: "Prática na Ages IV",
        requirementType: "PREREQUISITE"
      }
    ]
  },
  {
    creditCode: "13397-02",
    name: "Psicologia e Gestão de Pessoas em TI",
    semester: 7,
    requirements: [],
    required: []
  },
  {
    creditCode: "4611G-04",
    name: "Simulação e Métodos Analíticos",
    semester: 7,
    requirements: [
      {
        creditCode: "95304-04",
        name: "Probabilidade e Estatística",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "98907-02",
    name: "Engenharia e Gestão do Conhecimento",
    semester: 8,
    requirements: [],
    required: []
  },
  {
    creditCode: "11521-04",
    name: "Humanismo e Cultura Religiosa",
    semester: 8,
    requirements: [],
    required: []
  },
  {
    creditCode: "46517-02",
    name: "Melhoria de Processos de Software",
    semester: 8,
    requirements: [
      {
        creditCode: "98904-04",
        name: "Verificação e Validação de Software",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "46525-04",
    name: "Prática na Ages IV",
    semester: 8,
    requirements: [
      {
        creditCode: "46524-04",
        name: "Prática na Ages III",
        requirementType: "PREREQUISITE"
      },
      {
        creditCode: "46510-04",
        name: "Gerenciamento de Projeto de Software",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  },
  {
    creditCode: "98715-04",
    name: "Segurança de Sistemas",
    semester: 8,
    requirements: [
      {
        creditCode: "4646Z-04",
        name: "Projeto e Otimização de Algoritmos",
        requirementType: "PREREQUISITE"
      }
    ],
    required: []
  }
];
