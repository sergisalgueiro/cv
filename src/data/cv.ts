export type Locale = 'en' | 'ca' | 'es';

export interface CVData {
  meta: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone?: string;
    linkedin: string;
    github: string;
    pdfFileName: string;
  };
  translations: Record<
    Locale,
    {
      langName: string;
      metaDescription: string;
      nav: {
        about: string;
        experience: string;
        education: string;
        skills: string;
        languages: string;
      };
      about: {
        title: string;
        lead: string;
        bio: string;
        downloadPdf: string;
        copyEmail: string;
        emailCopied: string;
        callPhone: string;
        viewGithub: string;
        viewLinkedin: string;
      };
      experience: {
        title: string;
        present: string;
        items: Array<{
          company: string;
          location: string;
          roles: Array<{
            title: string;
            period: string;
            description: string;
            highlights?: string[];
            tags: string[];
          }>;
        }>;
      };
      education: {
        title: string;
        items: Array<{
          institution: string;
          location: string;
          degree: string;
          period: string;
          specialization?: string;
          relevantCourses: string[];
          thesis: {
            title: string;
            supervisor: string;
          };
        }>;
      };
      skills: {
        title: string;
        categories: Array<{
          name: string;
          items: string[];
        }>;
      };
      spokenLanguages: {
        title: string;
        items: Array<{
          name: string;
          level: string;
          rating: number; // 1 to 5
        }>;
      };
      footer: {
        hostedOn: string;
        printFriendly: string;
      };
    }
  >;
}

export const cvData: CVData = {
  meta: {
    name: 'Sergi Salgueiro Genís',
    title: 'Senior Software Engineer',
    location: 'Barcelona',
    email: 'sergi@salgueiro.com',
    linkedin: 'https://www.linkedin.com/in/sergi-salgueiro-genis/',
    github: 'https://github.com/sergisalgueiro',
    pdfFileName: '/CV_Sergi_Salgueiro.pdf',
  },
  translations: {
    en: {
      langName: 'English',
      metaDescription: 'CV & Portfolio of Sergi Salgueiro Genís — Senior Software Engineer specializing in backend IoT systems, distributed architectures, and embedded software.',
      nav: {
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        languages: 'Languages',
      },
      about: {
        title: 'About Me',
        lead: 'Senior Software Engineer with deep experience spanning high-scale IoT backend microservices to robust embedded Linux and RTOS systems.',
        bio: 'Over 8+ years developing critical software solutions: from IoT backend services (Go, PHP, AWS, MQTT) powering connected devices at scale at Wallbox, to high-reliability embedded C/C++ systems for HP Jet Fusion 3D printing at Idneo. Master of Science from Denmark Technical University (DTU) in Automation & Robotics and Bachelor in Industrial Electronics & Automation from UPC Barcelona.',
        downloadPdf: 'Download PDF',
        copyEmail: 'Copy Email',
        emailCopied: 'Copied to clipboard!',
        callPhone: 'Call Phone',
        viewGithub: 'GitHub Profile',
        viewLinkedin: 'LinkedIn Profile',
      },
      experience: {
        title: 'Work Experience',
        present: 'Present',
        items: [
          {
            company: 'Wallbox Chargers',
            location: 'Barcelona, Spain',
            roles: [
              {
                title: 'Senior Software Engineer',
                period: '01/2025 – Present',
                description: 'Part of the Backend team responsible for designing, developing, and maintaining high-throughput scalable services and microservices within a large-scale smart EV charging IoT ecosystem.',
                tags: ['Go', 'PHP', 'AWS', 'SNS/SQS', 'MQTT', 'REST', 'GitLab', 'Docker', 'MySQL', 'Grafana', 'Databricks', 'Claude Code'],
              },
              {
                title: 'Senior C++ Engineer',
                period: '04/2022 – 12/2024',
                description: 'Part of a cross-platform core engineering team working alongside Mobile and Cloud teams developing user-centric, high-reliability embedded charging solutions.',
                tags: ['C++', 'Gtest', 'Robot Framework', 'Embedded Linux', 'Modbus', 'BLE', 'REST', 'CMake', 'Bash', 'GitLab', 'MariaDB', 'Raspberry Pi', 'i.MX8'],
              },
            ],
          },
          {
            company: 'Idneo Technologies',
            location: 'Barcelona, Spain',
            roles: [
              {
                title: 'R&D Embedded SW Engineer',
                period: '01/2020 – 04/2022',
                description: 'Key contributor to the HP Jet Fusion 3D industrial printing solution. Embedded Linux software development and QA in a continuous integration environment adopting Agile methodologies.',
                tags: ['C++', 'Gtest', 'Embedded Linux', 'Docker', 'TCP/UDP', 'Agile', 'CI/CD'],
              },
              {
                title: 'Embedded Software Engineer',
                period: '01/2017 – 12/2019',
                description: 'Firmware development in Real-Time Operating Systems (RTOS) and automated QA testing within continuous integration pipelines for HP Jet Fusion 3D printers.',
                tags: ['C', 'Python', 'Pytest', 'Unity UT', 'Jenkins', 'B&R', 'Modbus', 'SVN', 'RTOS'],
              },
            ],
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          {
            institution: 'Danmarks Tekniske Universitet (DTU)',
            location: 'Kgs. Lyngby, Denmark',
            degree: "Master's Degree in Electric Engineering",
            period: '2014 – 2016',
            specialization: 'Study line: Automation and Robot Technology',
            relevantCourses: [
              'Linear Control Design',
              'Robust and Fault-Tolerant Control',
              'Advanced Autonomous Robots',
              'Modular Robotics',
            ],
            thesis: {
              title: 'Object Recognition for Outdoor Mobile Robot Navigation',
              supervisor: 'Søren Hansen',
            },
          },
          {
            institution: 'Universitat Politècnica de Catalunya (UPC)',
            location: 'Barcelona, Catalonia',
            degree: 'Bachelor Degree in Electronics and Industrial Automation Engineering',
            period: '2008 – 2013',
            relevantCourses: [
              'Circuit Theory & Analog Electronics',
              'Power Electronics',
              'Digital Electronics & Microprocessors',
              'Systems & Control Theory',
              'Electronic Instrumentation',
              'Industrial Informatics & Robotics',
            ],
            thesis: {
              title: 'Software and Hardware Study, Development and Implementation of 2-axes positioning solar panels for photovoltaic installations',
              supervisor: 'Manuel Manzanares',
            },
          },
        ],
      },
      skills: {
        title: 'Technical Skills',
        categories: [
          {
            name: 'Programming Languages',
            items: ['Go', 'C++', 'C', 'PHP', 'Python', 'Bash', 'SQL'],
          },
          {
            name: 'Backend & Cloud / IoT',
            items: ['AWS', 'MQTT', 'SNS/SQS', 'REST APIs', 'Docker', 'MySQL / MariaDB', 'Grafana', 'Databricks'],
          },
          {
            name: 'Embedded Systems & Hardware',
            items: ['Embedded Linux', 'RTOS', 'i.MX8', 'Raspberry Pi', 'Modbus', 'BLE', 'TCP/UDP', 'CMake'],
          },
          {
            name: 'Testing & Tooling',
            items: ['Gtest', 'Pytest', 'Unity UT', 'Robot Framework', 'GitLab CI', 'Jenkins', 'Claude Code'],
          },
        ],
      },
      spokenLanguages: {
        title: 'Languages',
        items: [
          { name: 'Catalan', level: 'Native / Bilingual', rating: 5 },
          { name: 'Spanish', level: 'Native / Bilingual', rating: 5 },
          { name: 'English', level: 'Professional Working Proficiency', rating: 4 },
          { name: 'French', level: 'Elementary Proficiency', rating: 2 },
        ],
      },
      footer: {
        hostedOn: 'Hosted on Cloudflare Pages',
        printFriendly: 'Tip: Press Cmd/Ctrl + P for an ink-optimized printable resume.',
      },
    },
    ca: {
      langName: 'Català',
      metaDescription: 'CV i Portafoli de Sergi Salgueiro Genís — Enginyer de Software Senior especialitzat en sistemes backend per a IoT, arquitectures distribuïdes i software encastat.',
      nav: {
        about: 'Sobre mi',
        experience: 'Experiència',
        education: 'Educació',
        skills: 'Habilitats',
        languages: 'Idiomes',
      },
      about: {
        title: 'Sobre mi',
        lead: 'Enginyer de Software Senior amb sòlida experiència des de microserveis backend per a IoT d\'alta escala fins a sistemes encastats robustos en Linux i RTOS.',
        bio: 'Més de 8 anys desenvolupant solucions tecnològiques d\'alt impacte: des de serveis backend IoT (Go, PHP, AWS, MQTT) gestionant milers de dispositius connectats a Wallbox, fins a sistemes encastats C/C++ d\'alta fiabilitat per a les impressores industrials 3D HP Jet Fusion a Idneo. Màster en Ciències per la Universitat Tècnica de Dinamarca (DTU) en Automatització i Robòtica, i Graduat en Enginyeria Electrònica i Automàtica Industrial per la UPC.',
        downloadPdf: 'Descarregar PDF',
        copyEmail: 'Copiar correu',
        emailCopied: 'Copiat al porta-retalls!',
        callPhone: 'Trucar per telèfon',
        viewGithub: 'Perfil de GitHub',
        viewLinkedin: 'Perfil de LinkedIn',
      },
      experience: {
        title: 'Experiència Laboral',
        present: 'Actualitat',
        items: [
          {
            company: 'Wallbox Chargers',
            location: 'Barcelona, Catalunya',
            roles: [
              {
                title: 'Senior Software Engineer',
                period: '01/2025 – Actualitat',
                description: 'Membre de l\'equip de Backend encarregat de dissenyar, desenvolupar i mantenir microserveis i serveis altament escalables dins d\'un ecosistema IoT per a recàrrega intel·ligent de vehicles elèctrics.',
                tags: ['Go', 'PHP', 'AWS', 'SNS/SQS', 'MQTT', 'REST', 'GitLab', 'Docker', 'MySQL', 'Grafana', 'Databricks', 'Claude Code'],
              },
              {
                title: 'Senior C++ Engineer',
                period: '04/2022 – 12/2024',
                description: 'Enginyer de l\'equip transversal core treballant estretament amb enginyers de Mobile i Cloud per oferir solucions de programari encastat d\'alta fiabilitat orientades a l\'usuari.',
                tags: ['C++', 'Gtest', 'Robot Framework', 'Embedded Linux', 'Modbus', 'BLE', 'REST', 'CMake', 'Bash', 'GitLab', 'MariaDB', 'Raspberry Pi', 'i.MX8'],
              },
            ],
          },
          {
            company: 'Idneo Technologies',
            location: 'Barcelona, Catalunya',
            roles: [
              {
                title: 'R&D Embedded SW Engineer',
                period: '01/2020 – 04/2022',
                description: 'Contribució clau al projecte d\'impressió 3D industrial HP Jet Fusion. Desenvolupament de software sobre Linux encastat i QA en entorns d\'integració contínua mitjançant metodologies Àgils.',
                tags: ['C++', 'Gtest', 'Embedded Linux', 'Docker', 'TCP/UDP', 'Agile', 'CI/CD'],
              },
              {
                title: 'Embedded Software Engineer',
                period: '01/2017 – 12/2019',
                description: 'Desenvolupament de firmware en Sistemes Operatius de Temps Real (RTOS) i proves automatitzades de QA en entorns d\'integració contínua per a impressores HP Jet Fusion.',
                tags: ['C', 'Python', 'Pytest', 'Unity UT', 'Jenkins', 'B&R', 'Modbus', 'SVN', 'RTOS'],
              },
            ],
          },
        ],
      },
      education: {
        title: 'Educació i Formació',
        items: [
          {
            institution: 'Danmarks Tekniske Universitet (DTU)',
            location: 'Kgs. Lyngby, Dinamarca',
            degree: 'Màster Universitari en Enginyeria Elèctrica',
            period: '2014 – 2016',
            specialization: 'Especialitat: Tecnologia de Robòtica i Automatització',
            relevantCourses: [
              'Disseny de Control Lineal',
              'Control Robust i Tolerant a Fallades',
              'Robots Autònoms Avançats',
              'Robòtica Modular',
            ],
            thesis: {
              title: 'Object Recognition for Outdoor Mobile Robot Navigation',
              supervisor: 'Søren Hansen',
            },
          },
          {
            institution: 'Universitat Politècnica de Catalunya (UPC)',
            location: 'Barcelona, Catalunya',
            degree: 'Grau en Enginyeria Electrònica Industrial i Automàtica',
            period: '2008 – 2013',
            relevantCourses: [
              'Teoria de Circuits i Electrònica Analògica',
              'Electrònica de Potència',
              'Electrònica Digital i Microprocessadors',
              'Sistemes i Teoria del Control',
              'Instrumentació Electrònica',
              'Informàtica Industrial i Robòtica',
            ],
            thesis: {
              title: 'Estudi, desenvolupament i implementació de maquinari i programari per al posicionament en 2 eixos de panells solars per a instal·lacions fotovoltaiques',
              supervisor: 'Manuel Manzanares',
            },
          },
        ],
      },
      skills: {
        title: 'Competències Tècniques',
        categories: [
          {
            name: 'Llenguatges de Programació',
            items: ['Go', 'C++', 'C', 'PHP', 'Python', 'Bash', 'SQL'],
          },
          {
            name: 'Backend, Cloud i IoT',
            items: ['AWS', 'MQTT', 'SNS/SQS', 'REST APIs', 'Docker', 'MySQL / MariaDB', 'Grafana', 'Databricks'],
          },
          {
            name: 'Sistemes Encastats i Hardware',
            items: ['Embedded Linux', 'RTOS', 'i.MX8', 'Raspberry Pi', 'Modbus', 'BLE', 'TCP/UDP', 'CMake'],
          },
          {
            name: 'Testing i Eines',
            items: ['Gtest', 'Pytest', 'Unity UT', 'Robot Framework', 'GitLab CI', 'Jenkins', 'Claude Code'],
          },
        ],
      },
      spokenLanguages: {
        title: 'Idiomes',
        items: [
          { name: 'Català', level: 'Natiu / Bilingüe', rating: 5 },
          { name: 'Castellà', level: 'Natiu / Bilingüe', rating: 5 },
          { name: 'Anglès', level: 'Competència Professional Plena', rating: 4 },
          { name: 'Francès', level: 'Nivell Bàsic / Elemental', rating: 2 },
        ],
      },
      footer: {
        hostedOn: 'Allotjat a Cloudflare Pages',
        printFriendly: 'Consell: Prem Cmd/Ctrl + P per a una versió optimitzada per a impressora o PDF.',
      },
    },
    es: {
      langName: 'Español',
      metaDescription: 'CV y Portafolio de Sergi Salgueiro Genís — Ingeniero de Software Senior especializado en sistemas backend IoT, arquitecturas distribuidas y software embebido.',
      nav: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades',
        languages: 'Idiomas',
      },
      about: {
        title: 'Sobre mí',
        lead: 'Ingeniero de Software Senior con amplia experiencia abarcando desde microservicios backend para IoT a gran escala hasta sistemas embebidos de alta fiabilidad en Linux y RTOS.',
        bio: 'Más de 8 años de trayectoria técnica desarrollando soluciones de misión crítica: desde backend de IoT (Go, PHP, AWS, MQTT) gestionando ecosistemas de cargadores inteligentes en Wallbox, hasta sistemas embebidos C/C++ para la tecnología de impresión 3D HP Jet Fusion en Idneo. Máster por la Universidad Técnica de Dinamarca (DTU) en Automatización y Robótica, y Graduado en Ingeniería Electrónica y Automática Industrial por la UPC Barcelona.',
        downloadPdf: 'Descargar PDF',
        copyEmail: 'Copiar correo',
        emailCopied: '¡Copiado al portapapeles!',
        callPhone: 'Llamar por teléfono',
        viewGithub: 'Perfil de GitHub',
        viewLinkedin: 'Perfil de LinkedIn',
      },
      experience: {
        title: 'Experiencia Laboral',
        present: 'Actualidad',
        items: [
          {
            company: 'Wallbox Chargers',
            location: 'Barcelona, España',
            roles: [
              {
                title: 'Senior Software Engineer',
                period: '01/2025 – Actualidad',
                description: 'Parte del equipo de Backend responsable del diseño, desarrollo y mantenimiento de microservicios escalables dentro de un ecosistema IoT de alta concurrencia para carga de vehículos eléctricos.',
                tags: ['Go', 'PHP', 'AWS', 'SNS/SQS', 'MQTT', 'REST', 'GitLab', 'Docker', 'MySQL', 'Grafana', 'Databricks', 'Claude Code'],
              },
              {
                title: 'Senior C++ Engineer',
                period: '04/2022 – 12/2024',
                description: 'Miembro del equipo transversal core colaborando con ingenieros de Mobile y Cloud en soluciones de software embebido robustas orientadas al usuario.',
                tags: ['C++', 'Gtest', 'Robot Framework', 'Embedded Linux', 'Modbus', 'BLE', 'REST', 'CMake', 'Bash', 'GitLab', 'MariaDB', 'Raspberry Pi', 'i.MX8'],
              },
            ],
          },
          {
            company: 'Idneo Technologies',
            location: 'Barcelona, España',
            roles: [
              {
                title: 'R&D Embedded SW Engineer',
                period: '01/2020 – 04/2022',
                description: 'Desarrollo de software en Linux embebido y aseguramiento de calidad (QA) en integración continua bajo metodologías Ágiles para impresoras 3D HP Jet Fusion.',
                tags: ['C++', 'Gtest', 'Embedded Linux', 'Docker', 'TCP/UDP', 'Agile', 'CI/CD'],
              },
              {
                title: 'Embedded Software Engineer',
                period: '01/2017 – 12/2019',
                description: 'Desarrollo de firmware en Sistemas Operativos en Tiempo Real (RTOS) y pruebas automatizadas en entornos de integración continua para impresoras HP Jet Fusion.',
                tags: ['C', 'Python', 'Pytest', 'Unity UT', 'Jenkins', 'B&R', 'Modbus', 'SVN', 'RTOS'],
              },
            ],
          },
        ],
      },
      education: {
        title: 'Educación y Formación',
        items: [
          {
            institution: 'Danmarks Tekniske Universitet (DTU)',
            location: 'Kgs. Lyngby, Dinamarca',
            degree: 'Máster en Ingeniería Eléctrica',
            period: '2014 – 2016',
            specialization: 'Especialidad: Tecnología de Automatización y Robótica',
            relevantCourses: [
              'Diseño de Control Lineal',
              'Control Robusto y Tolerante a Fallos',
              'Robots Autónomos Avanzados',
              'Robótica Modular',
            ],
            thesis: {
              title: 'Object Recognition for Outdoor Mobile Robot Navigation',
              supervisor: 'Søren Hansen',
            },
          },
          {
            institution: 'Universitat Politècnica de Catalunya (UPC)',
            location: 'Barcelona, España',
            degree: 'Grado en Ingeniería Electrónica Industrial y Automática',
            period: '2008 – 2013',
            relevantCourses: [
              'Teoría de Circuitos y Electrónica Analógica',
              'Electrónica de Potencia',
              'Electrónica Digital y Microprocesadores',
              'Sistemas y Teoría del Control',
              'Instrumentación Electrónica',
              'Informática Industrial y Robótica',
            ],
            thesis: {
              title: 'Estudio, desarrollo e implementación de hardware y software de posicionamiento en 2 ejes de paneles solares para instalaciones fotovoltaicas',
              supervisor: 'Manuel Manzanares',
            },
          },
        ],
      },
      skills: {
        title: 'Competencias Técnicas',
        categories: [
          {
            name: 'Lenguajes de Programación',
            items: ['Go', 'C++', 'C', 'PHP', 'Python', 'Bash', 'SQL'],
          },
          {
            name: 'Backend, Cloud e IoT',
            items: ['AWS', 'MQTT', 'SNS/SQS', 'REST APIs', 'Docker', 'MySQL / MariaDB', 'Grafana', 'Databricks'],
          },
          {
            name: 'Sistemas Embebidos y Hardware',
            items: ['Embedded Linux', 'RTOS', 'i.MX8', 'Raspberry Pi', 'Modbus', 'BLE', 'TCP/UDP', 'CMake'],
          },
          {
            name: 'Testing y Herramientas',
            items: ['Gtest', 'Pytest', 'Unity UT', 'Robot Framework', 'GitLab CI', 'Jenkins', 'Claude Code'],
          },
        ],
      },
      spokenLanguages: {
        title: 'Idiomas',
        items: [
          { name: 'Catalán', level: 'Nativo / Bilingüe', rating: 5 },
          { name: 'Español', level: 'Nativo / Bilingüe', rating: 5 },
          { name: 'Inglés', level: 'Competencia Profesional Completa', rating: 4 },
          { name: 'Francés', level: 'Competencia Básica / Elemental', rating: 2 },
        ],
      },
      footer: {
        hostedOn: 'Alojado en Cloudflare Pages',
        printFriendly: 'Consejo: Pulsa Cmd/Ctrl + P para obtener una versión imprimible optimizada para PDF.',
      },
    },
  },
};
