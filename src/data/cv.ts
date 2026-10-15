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
            location: 'Barcelona',
            roles: [
              {
                title: 'Senior Software Engineer',
                period: '01/2025 – Present',
                description: 'Design and maintain scalable backend microservices within Wallbox’s high-scale IoT ecosystem, ensuring resilient and reliable multi-service communication across 500k+ connected smart EV chargers.',
                highlights: [
                  'Backend Architecture: Built and optimized microservices in Go (Golang) and PHP, applying Hexagonal Architecture (Ports & Adapters) and clean code practices for modular, testable systems.',
                  'IoT & Real-Time Messaging: Orchestrated asynchronous telemetry streaming and device communication using MQTT protocols and AWS SNS/SQS across distributed services.',
                  'Third-Party Integrations: Integrated external APIs from the energy grid, connected vehicle, and smart energy device sectors to enrich charging features and enable seamless interoperability with the broader EV ecosystem.',
                  'Cloud Infrastructure & CI/CD: Maintained containerized workflows with Docker and automated service deployments to AWS via GitLab CI/CD pipelines.',
                  'Observability & Data Integrity: Monitored system health and diagnosed production issues using Grafana, while querying and validating relational data with MySQL, Metabase, and Databricks.',
                  'AI-Assisted Engineering: Integrated Claude Code into the development lifecycle to accelerate code delivery, streamline debugging, and uphold high test quality.',
                ],
                tags: ['Go', 'PHP', 'AWS', 'SNS/SQS', 'MQTT', 'REST', 'GitLab', 'Docker', 'MySQL', 'Grafana', 'Databricks', 'Claude Code'],
              },
              {
                title: 'Senior C++ Engineer',
                period: '04/2022 – 12/2024',
                description: 'Developed embedded C++ services on an Embedded Linux platform for Wallbox\'s smart EV chargers, within a cross-platform team collaborating closely with Mobile and Cloud engineers to deliver user-centric charging solutions.',
                highlights: [
                  'Microservices Architecture: Designed and maintained on-device microservices communicating via Redis Pub/Sub in an event-driven architecture, enabling decoupled and independently deployable modules on a single embedded platform.',
                  'Connectivity & Protocols: Implemented the BLE protocol and its APIs for mobile app integration, REST APIs for cloud synchronization, and MQTT for real-time backend telemetry — ensuring reliable communication across the full device-to-cloud stack.',
                  'Energy Management: Delivered key features including green energy charging, single-to-three-phase switching, dynamic load balancing, and scheduled charging — optimizing energy consumption for end users.',
                  'Peripheral Integration: Developed Modbus drivers for external energy meter communication and contributed to low-level firmware components (RTOS, hardware drivers) bridging the embedded and real-time layers.',
                  'Testing & Quality: Ensured reliability through unit testing with GTest and end-to-end validation using Python + Robot Framework, maintaining high coverage across the embedded software stack.',
                ],
                tags: ['C++', 'Gtest', 'Robot Framework', 'Embedded Linux', 'Modbus', 'BLE', 'REST', 'MQTT', 'CMake', 'Bash', 'GitLab', 'MariaDB', 'Raspberry Pi', 'i.MX8'],
              },
            ],
          },
          {
            company: 'Idneo Technologies',
            location: 'Barcelona',
            roles: [
              {
                title: 'R&D Embedded SW Engineer',
                period: '01/2020 – 04/2022',
                description: 'Built application-level C++ flows and state machines on Embedded Linux for HP\'s Jet Fusion 3D industrial printer, acting as the software bridge between the UI front panel, cloud & telemetry services, and the PLC commanding the print hardware. Worked in Agile CI/CD workflows.',
                tags: ['C++', 'Gtest', 'Embedded Linux', 'Docker', 'TCP/UDP', 'Agile', 'CI/CD'],
              },
              {
                title: 'Embedded Software Engineer',
                period: '01/2017 – 12/2019',
                description: 'Designed and developed real-time state machines in C on RTOS to drive the powder transport subsystem of HP\'s Jet Fusion 3D printer, writing low-level drivers and integrating sensors and actuators in close collaboration with the mechanical team. Interfaced with the Embedded Linux application layer over TCP/UDP and maintained code quality with Unity unit tests and Python/Pytest integration tests on Jenkins CI/CD.',
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
            location: 'Barcelona',
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
          { name: 'French', level: 'Intermediate Proficiency', rating: 3 },
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
            location: 'Barcelona',
            roles: [
              {
                title: 'Senior Software Engineer',
                period: '01/2025 – Actualitat',
                description: 'Disseny i manteniment de microserveis backend escalables dins de l\'ecosistema IoT d\'alta concurrència de Wallbox, garantint una comunicació fiable i d\'alt rendiment entre més de 500.000 carregadors de vehicles elèctrics connectats.',
                highlights: [
                  'Arquitectura Backend: Desenvolupament i optimització de microserveis en Go (Golang) i PHP, aplicant Arquitectura Hexagonal (Ports i Adaptadors) i bones pràctiques per a un codi modular i altament testeable.',
                  'IoT i Missatgeria en Temps Real: Gestió de streaming de telemetria asíncrona i comunicació bidireccional amb dispositius mitjançant protocols MQTT i AWS SNS/SQS en serveis distribuïts.',
                  'Integracions de Tercers: Integració d\'APIs externes dels sectors de xarxa elèctrica, vehicles connectats i dispositius d\'energia intel·ligent per enriquir les funcionalitats de càrrega i facilitar la interoperabilitat amb l\'ecosistema de VE.',
                  'Cloud i DevOps: Manteniment de fluxos de treball "cloud-native" amb contenidors Docker i desplegament continu a AWS mitjançant canonades de GitLab CI/CD.',
                  'Observabilitat i Dades: Monitorització de l\'estat del sistema i resolució d\'incidències a producció amb Grafana, verificant i consultant dades amb MySQL, Metabase i Databricks.',
                  'Enginyeria Assistida per IA: Integració de Claude Code al flux de desenvolupament per accelerar la implementació de codi, optimitzar la depuració i garantir alts estàndards de qualitat.',
                ],
                tags: ['Go', 'PHP', 'AWS', 'SNS/SQS', 'MQTT', 'REST', 'GitLab', 'Docker', 'MySQL', 'Grafana', 'Databricks', 'Claude Code'],
              },
              {
                title: 'Senior C++ Engineer',
                period: '04/2022 – 12/2024',
                description: 'Desenvolupament de serveis C++ encastats sobre una plataforma Embedded Linux per als carregadors intel·ligents de vehicles elèctrics de Wallbox, dins d\'un equip transversal col·laborant estretament amb enginyers de Mobile i Cloud per oferir solucions de càrrega orientades a l\'usuari.',
                highlights: [
                  'Arquitectura de Microserveis: Disseny i manteniment de microserveis al dispositiu comunicats mitjançant Redis Pub/Sub en una arquitectura basada en esdeveniments, permetent mòduls desacoblats i desplegables independentment en una sola plataforma encastada.',
                  'Connectivitat i Protocols: Implementació del protocol BLE i les seves APIs per a la integració amb l\'app mòbil, APIs REST per a la sincronització amb el núvol, i MQTT per a telemetria en temps real — assegurant una comunicació fiable al llarg de tot l\'stack dispositiu-núvol.',
                  'Gestió Energètica: Lliurament de funcionalitats clau com càrrega amb energia verda, commutació monofàsic-trifàsic, balanceig dinàmic de càrrega i programació de càrrega — optimitzant el consum energètic per als usuaris finals.',
                  'Integració de Perifèrics: Desenvolupament de drivers Modbus per a la comunicació amb comptadors d\'energia externs i contribució a components de firmware de baix nivell (RTOS, drivers de hardware) connectant les capes encastada i de temps real.',
                  'Testing i Qualitat: Garantia de fiabilitat mitjançant tests unitaris amb GTest i validació extrem a extrem amb Python + Robot Framework, mantenint una alta cobertura a tot l\'stack de software encastat.',
                ],
                tags: ['C++', 'Gtest', 'Robot Framework', 'Embedded Linux', 'Modbus', 'BLE', 'REST', 'MQTT', 'CMake', 'Bash', 'GitLab', 'MariaDB', 'Raspberry Pi', 'i.MX8'],
              },
            ],
          },
          {
            company: 'Idneo Technologies',
            location: 'Barcelona',
            roles: [
              {
                title: 'R&D Embedded SW Engineer',
                period: '01/2020 – 04/2022',
                description: 'Desenvolupament de fluxos i màquines d\'estat en C++ a nivell d\'aplicació sobre Embedded Linux per a la impressora 3D industrial HP Jet Fusion, actuant com a pont de software entre el panell frontal d\'usuari, els serveis de cloud i telemetria, i el PLC que comanda el hardware d\'impressió. Treball en entorns Àgils amb CI/CD.',
                tags: ['C++', 'Gtest', 'Embedded Linux', 'Docker', 'TCP/UDP', 'Agile', 'CI/CD'],
              },
              {
                title: 'Embedded Software Engineer',
                period: '01/2017 – 12/2019',
                description: 'Disseny i desenvolupament de màquines d\'estat en temps real en C sobre RTOS per al subsistema de transport de pols de la impressora 3D HP Jet Fusion, escrivint drivers de baix nivell i integrant sensors i actuadors en estreta col·laboració amb l\'equip mecànic. Interfície amb la capa d\'aplicació Embedded Linux via TCP/UDP i manteniment de la qualitat del codi amb tests unitaris Unity i tests d\'integració Python/Pytest sobre Jenkins CI/CD.',
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
            location: 'Barcelona',
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
          { name: 'Francès', level: 'Nivell Intermedi', rating: 3 },
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
            location: 'Barcelona',
            roles: [
              {
                title: 'Senior Software Engineer',
                period: '01/2025 – Actualidad',
                description: 'Diseño y mantenimiento de microservicios backend escalables dentro del ecosistema IoT de alta concurrencia de Wallbox, garantizando una comunicación fiable y de alto rendimiento entre más de 500.000 cargadores de vehículos eléctricos conectados.',
                highlights: [
                  'Arquitectura Backend: Construcción y optimización de microservicios en Go (Golang) y PHP, aplicando Arquitectura Hexagonal (Puertos y Adaptadores) y buenas prácticas para un código modular y altamente testable.',
                  'IoT y Mensajería en Tiempo Real: Gestión de streaming asíncrono de telemetría y comunicación con dispositivos mediante protocolos MQTT y AWS SNS/SQS en servicios distribuidos.',
                  'Integraciones de Terceros: Integración de APIs externas de los sectores de red eléctrica, vehículos conectados y dispositivos de energía inteligente para enriquecer las funcionalidades de carga y facilitar la interoperabilidad con el ecosistema de VE.',
                  'Cloud y DevOps: Mantenimiento de flujos de trabajo nativos en la nube con contenedores Docker y despliegues continuos en AWS mediante pipelines de GitLab CI/CD.',
                  'Observabilidad y Datos: Monitorización del estado del sistema y resolución de incidencias en producción con Grafana, consultando y verificando datos con MySQL, Metabase y Databricks.',
                  'Ingeniería Asistida por IA: Integración de Claude Code en el flujo de desarrollo para acelerar la entrega de código, optimizar el debugging y mantener altos estándares de calidad.',
                ],
                tags: ['Go', 'PHP', 'AWS', 'SNS/SQS', 'MQTT', 'REST', 'GitLab', 'Docker', 'MySQL', 'Grafana', 'Databricks', 'Claude Code'],
              },
              {
                title: 'Senior C++ Engineer',
                period: '04/2022 – 12/2024',
                description: 'Desarrollo de servicios C++ embebidos sobre una plataforma Embedded Linux para los cargadores inteligentes de vehículos eléctricos de Wallbox, dentro de un equipo transversal colaborando estrechamente con ingenieros de Mobile y Cloud para ofrecer soluciones de carga orientadas al usuario.',
                highlights: [
                  'Arquitectura de Microservicios: Diseño y mantenimiento de microservicios en el dispositivo comunicados mediante Redis Pub/Sub en una arquitectura basada en eventos, permitiendo módulos desacoplados y desplegables independientemente en una sola plataforma embebida.',
                  'Conectividad y Protocolos: Implementación del protocolo BLE y sus APIs para la integración con la app móvil, APIs REST para la sincronización con la nube, y MQTT para telemetría en tiempo real — asegurando una comunicación fiable a lo largo de todo el stack dispositivo-nube.',
                  'Gestión Energética: Entrega de funcionalidades clave como carga con energía verde, conmutación monofásico-trifásico, balanceo dinámico de carga y programación de carga — optimizando el consumo energético para los usuarios finales.',
                  'Integración de Periféricos: Desarrollo de drivers Modbus para la comunicación con contadores de energía externos y contribución a componentes de firmware de bajo nivel (RTOS, drivers de hardware) conectando las capas embebida y de tiempo real.',
                  'Testing y Calidad: Garantía de fiabilidad mediante tests unitarios con GTest y validación extremo a extremo con Python + Robot Framework, manteniendo una alta cobertura en todo el stack de software embebido.',
                ],
                tags: ['C++', 'Gtest', 'Robot Framework', 'Embedded Linux', 'Modbus', 'BLE', 'REST', 'MQTT', 'CMake', 'Bash', 'GitLab', 'MariaDB', 'Raspberry Pi', 'i.MX8'],
              },
            ],
          },
          {
            company: 'Idneo Technologies',
            location: 'Barcelona',
            roles: [
              {
                title: 'R&D Embedded SW Engineer',
                period: '01/2020 – 04/2022',
                description: 'Desarrollo de flujos y máquinas de estado en C++ a nivel de aplicación sobre Embedded Linux para la impresora 3D industrial HP Jet Fusion, actuando como puente de software entre el panel frontal de usuario, los servicios de cloud y telemetría, y el PLC que comanda el hardware de impresión. Trabajo en entornos Ágiles con CI/CD.',
                tags: ['C++', 'Gtest', 'Embedded Linux', 'Docker', 'TCP/UDP', 'Agile', 'CI/CD'],
              },
              {
                title: 'Embedded Software Engineer',
                period: '01/2017 – 12/2019',
                description: 'Diseño y desarrollo de máquinas de estado en tiempo real en C sobre RTOS para el subsistema de transporte de polvo de la impresora 3D HP Jet Fusion, escribiendo drivers de bajo nivel e integrando sensores y actuadores en estrecha colaboración con el equipo mecánico. Interfaz con la capa de aplicación Embedded Linux vía TCP/UDP y mantenimiento de la calidad del código con tests unitarios Unity y tests de integración Python/Pytest sobre Jenkins CI/CD.',
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
            location: 'Barcelona',
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
          { name: 'Francés', level: 'Competencia Intermedia', rating: 3 },
        ],
      },
      footer: {
        hostedOn: 'Alojado en Cloudflare Pages',
        printFriendly: 'Consejo: Pulsa Cmd/Ctrl + P para obtener una versión imprimible optimizada para PDF.',
      },
    },
  },
};
