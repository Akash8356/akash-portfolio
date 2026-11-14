
// ===== Site configuration — edit this file only =====
window.SITE = {
  // Web3Forms PUBLIC access key (safe in browser code).
  // Configure your key at https://web3forms.com
  web3formsKey: "USER_WILL_CONFIGURE_THIS",

  email: "akash.p8869@gmail.com",

  roles: [
    "Python Backend Engineer",
    "Applied AI Engineer",
    "GenAI Engineer",
    "AI Systems Developer"
  ],

  // Resume order: Applied AI → Backend → GenAI → Full-Stack AI
  resumes: [
    {
      title: "Applied AI Engineer",
      desc: "Applied AI engineering with Python backend experience, RAG pipelines, LLM integrations, semantic search, image embeddings and production AI applications.",
      file: "assets/documents/Akash_Prajapati_Applied_AI_Engineer_Resume_14_Nov_2026.pdf"
    },
    {
      title: "Python Backend Engineer",
      desc: "Backend engineering with Python, Django, DRF, FastAPI, REST APIs, microservices, PostgreSQL, Kafka, Redis, Celery and enterprise integrations.",
      file: "assets/documents/Akash_Prajapati_Python_Backend_Engineer_Resume_14_Nov_2026.pdf"
    },
    {
      title: "GenAI Engineer",
      desc: "Generative AI engineering focused on RAG architecture, LLM applications, LangChain, LangGraph, semantic retrieval, embeddings, vector databases, voice AI and LLM evaluation.",
      file: "assets/documents/Akash_Prajapati_GenAI_Engineer_Resume_14_Nov_2026.pdf"
    },
    {
      title: "Full-Stack Developer with AI",
      desc: "Full-stack development combining Python, Django, REST APIs, React Native, React.js, Redux, mobile integrations and applied AI capabilities.",
      file: "assets/documents/Akash_Prajapati_Full_Stack_ai_Resume_14_Nov_2026.pdf"
    }
  ],

  skills: {
    "Programming & Backend": [
      "Python",
      "SQL",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
      "Microservices"
    ],

    "Applied AI & GenAI": [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "OpenAI APIs",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Semantic Retrieval",
      "Sentence Transformers",
      "Text Embeddings",
      "Image Embeddings",
      "ChromaDB",
      "Whisper",
      "ElevenLabs",
      "Guardrails",
      "Tool Calling",
      "LLM Harnessing",
      "LLM Evaluation",
      "Response Validation"
    ],

    "Databases & Messaging": [
      "PostgreSQL",
      "Redis",
      "Django ORM",
      "Celery",
      "Apache Kafka"
    ],

    "Auth & Integrations": [
      "Keycloak",
      "JWT",
      "OAuth 2.0",
      "OTP Verification",
      "RBAC",
      "Payment Gateway Integration",
      "Third-Party APIs"
    ],

    "Cloud & DevOps": [
      "AWS S3",
      "AWS RDS",
      "AWS EC2",
      "AWS ELB",
      "Docker",
      "Kubernetes (fundamentals)",
      "Grafana"
    ],

    "Frontend & Mobile": [
      "React Native",
      "React.js",
      "Redux",
      "Redux Toolkit",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Axios"
    ],

    "Tools & Concepts": [
      "Git",
      "GitHub",
      "Swagger/OpenAPI",
      "OOP",
      "Database Design",
      "Query Optimization",
      "System Design",
      "Agile"
    ]
  },

  projects: [
    {
      name: "Hindi Voice-Enabled RAG Assistant",
      feature: true,
      domain: "Applied AI · Voice AI & Knowledge Retrieval",

      problem: "Help users get context-grounded answers from a product knowledge base through Hindi voice interactions.",

      mine: "Built backend APIs and an end-to-end RAG pipeline in Python/Django: recursive chunking (500 words, 20-word overlap), Sentence Transformers embeddings, ChromaDB, cosine-similarity retrieval with dynamic thresholding, LangGraph routing with query rephrasing and fallback, plus PII redaction, output validation and prompt-injection detection.",

      flow: [
        "Knowledge documents",
        "Recursive chunking",
        "Sentence Transformers",
        "ChromaDB",
        "Semantic retrieval",
        "LangGraph",
        "LLM generation",
        "Output validation"
      ],

      flow2: [
        "User audio",
        "Whisper STT",
        "RAG pipeline",
        "LLM generation",
        "ElevenLabs TTS",
        "Audio reply"
      ],

      stack: [
        "Python",
        "Django",
        "LangGraph",
        "ChromaDB",
        "Whisper",
        "GPT-4",
        "ElevenLabs",
        "LangSmith"
      ],

      out: "Processed approximately 100–500 knowledge-base items; evaluated ~5,000 test cases using expected answers and LLM-based scoring, achieving an ~87% average evaluation score. Hindi language support."
    },

    {
      name: "AI-Powered Image & Text Search",
      feature: true,
      domain: "Applied AI · Commercial Vehicle Spare-Parts Search",

      problem: "Help users discover the right commercial-vehicle spare part without knowing its exact product name or part number.",

      mine: "Implemented separate image and text embedding pipelines with independent vector indexes and similarity search, supporting image, part-number, product-name, category and voice-based discovery.",

      flow: [
        "Image input",
        "Image embedding pipeline",
        "Image vector index",
        "Similarity search",
        "Top-5 results"
      ],

      flow2: [
        "Text / voice input",
        "Text embedding pipeline",
        "Text vector index",
        "Similarity search",
        "Top-5 results"
      ],

      stack: [
        "Python",
        "Django",
        "Image Embeddings",
        "Text Embeddings",
        "Vector Similarity"
      ],

      out: "Returns the top five similarity-based results across image, part-number, product-name, category and voice queries."
    },

    {
      name: "AI-Assisted Git Change & Security Analysis",
      domain: "Applied AI · Developer Productivity & Code Security",

      problem: "Help developers review code changes efficiently and identify potentially exposed credentials or security-sensitive information.",

      mine: "Independently built the solution using GitHub API integration to retrieve commit diffs and surrounding code context, separate OpenAI workflows for change summaries and security detection, and checks for exposed API keys, tokens, passwords, email credentials and AWS details.",

      stack: [
        "Python",
        "GitHub API",
        "OpenAI API"
      ],

      out: "Generates structured reports containing issue descriptions, issue types and severity levels for developer review."
    },

    {
      name: "Enterprise E-Commerce Backend Platform",
      domain: "Backend Engineering · Commercial Vehicle Spare-Parts E-Commerce",

      problem: "Support reliable order processing, notifications and fulfilment workflows for an enterprise spare-parts platform handling 1,000+ daily orders.",

      mine: "Developed 40+ REST APIs; built FastAPI and Kafka notification services; implemented Redis caching for Order History, Django ORM optimisation, Celery/Redis report exports with AWS S3 presigned downloads, field-sales workflows, shipment tracking and ERP integrations; implemented Keycloak/JWT/OAuth 2.0 authentication.",

      stack: [
        "Python",
        "Django",
        "DRF",
        "FastAPI",
        "Kafka",
        "Redis",
        "Celery",
        "AWS S3",
        "Keycloak"
      ],

      out: "Supported approximately 1,000–10,000 notifications per day alongside order, reporting and fulfilment workflows."
    },

    {
      name: "Enterprise Fleet Management & Telematics Platform",
      domain: "Backend Engineering · Fleet Management & Connected Vehicles",

      problem: "Power vehicle tracking, mileage analytics, telemetry processing and subscription workflows across an approximately 18-microservice platform.",

      mine: "Contributed to vehicle, wrapper, subscription and payment services. Developed a vehicle day-wise tracker using GPS processing, Haversine distance calculations, trip/stop identification and map-route data; implemented mileage analytics, incremental telemetry synchronisation, payment gateway integration and role/subscription-based access control.",

      stack: [
        "Python",
        "Django",
        "PostgreSQL",
        "Redis",
        "GPS",
        "Telemetry",
        "Payment Integration"
      ],

      out: "Achieved a 20–30% API performance improvement through N+1 query fixes and Django ORM optimisation."
    },

    {
      name: "Enterprise Quality Management System",
      domain: "Backend Engineering · Manufacturing & Quality Management",

      problem: "Digitise paper-based vehicle assembly-line inspections, defect reporting and corrective-action workflows.",

      mine: "Built the User Portal backend with 50+ REST APIs, Quality Maker/Checker workflows, a Kafka consumer for vehicle identification data and Swagger/OpenAPI documentation.",

      stack: [
        "Python",
        "Django",
        "PostgreSQL",
        "Apache Kafka",
        "Swagger/OpenAPI"
      ],

      out: "Supported digital inspection, defect reporting, corrective actions and verification workflows."
    }
  ]
};
