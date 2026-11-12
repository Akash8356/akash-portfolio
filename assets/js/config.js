// ===== Site configuration — edit this file only =====
window.SITE = {
  // Web3Forms PUBLIC access key (safe in browser code). Get one free at https://web3forms.com using akash.p8869@gmail.com
  // Leave as-is until you have a real key: the form then falls back to opening your email app (mailto).
  web3formsKey: "USER_WILL_CONFIGURE_THIS",
  email: "akash.p8869@gmail.com",
  roles: ["Python Backend Engineer", "Applied AI Engineer", "GenAI Engineer", "AI Systems Developer"],
  resumes: [
    { title: "Master Resume", desc: "Python backend plus applied AI/LLM work in one document. Best general-purpose version.", file: "assets/documents/Akash_Prajapati_Master_Resume.pdf" },
    { title: "Python Backend Engineer Resume", desc: "Django, DRF, FastAPI, microservices, Kafka, Redis and integrations. AI is listed as additional knowledge.", file: "assets/documents/Akash_Prajapati_Backend_Resume.pdf" },
    { title: "Applied AI / GenAI Resume", desc: "RAG, LangGraph, semantic retrieval, LLM evaluation and safety controls on a backend foundation.", file: "assets/documents/Akash_Prajapati_GenAI_Resume.pdf" }
  ],
  skills: {
    "Programming & Backend": ["Python","SQL","Django","Django REST Framework","FastAPI","REST APIs","Microservices"],
    "Applied AI & GenAI": ["LLMs","RAG","Prompt Engineering","OpenAI APIs","LangChain","LangGraph","LangSmith","Semantic Retrieval","Sentence Transformers","Text Embeddings","Image Embeddings","ChromaDB","Whisper","ElevenLabs","Guardrails","LLM Evaluation","Response Validation"],
    "Databases & Messaging": ["PostgreSQL","Redis","Django ORM","Celery","Apache Kafka"],
    "Auth & Integrations": ["Keycloak","JWT","OAuth 2.0","OTP Verification","RBAC","Payment Gateway Integration","Third-Party APIs"],
    "Cloud & DevOps": ["AWS S3","AWS RDS","AWS EC2","AWS ELB","Docker","Kubernetes (fundamentals)","Grafana"],
    "Tools & Concepts": ["Git","GitHub","Swagger/OpenAPI","OOP","Database Design","Query Optimization","System Design","Agile"]
  },
  projects: [
    { name:"Hindi Voice-Enabled RAG Assistant (Bhasasetu)", feature:true, domain:"Applied AI · Whirlpool client",
      problem:"Give customers context-grounded answers from a product knowledge base through Hindi voice.",
      mine:"Built the backend APIs and the end-to-end RAG pipeline in Python/Django: chunking (500 words, 20 overlap), Sentence Transformers embeddings, ChromaDB, cosine-similarity retrieval with dynamic thresholding, LangGraph routing with query rephrasing and fallback, plus PII redaction, output validation and prompt-injection detection.",
      flow:["Knowledge docs","Recursive chunking","Sentence Transformers","ChromaDB","Semantic retrieval","LangGraph","GPT-4","Output validation"],
      flow2:["User audio","Whisper STT","RAG pipeline","GPT-4","ElevenLabs TTS","Audio reply"],
      stack:["Python","Django","LangGraph","ChromaDB","Whisper","GPT-4","ElevenLabs","LangSmith"],
      out:"About 100–500 knowledge-base items; ~5,000 test cases evaluated with expected answers and LLM-based scoring; ~87% average evaluation score. Supports Hindi (not a general multilingual deployment)." },
    { name:"Image & Text Smart Search", feature:true, domain:"Applied AI · Tata Motors client (Edukaan)",
      problem:"Help buyers find the right commercial-vehicle spare part without knowing its exact name.",
      mine:"Implemented separate image and text embedding pipelines with similarity search, alongside part-number, name, category and voice discovery.",
      flow:["Image input","Image embedding pipeline","Image vector index","Similarity search","Top-5 products"],
      flow2:["Text / voice input","Text embedding pipeline","Text vector index","Similarity search","Top-5 products"],
      stack:["Python","Django","Embeddings","Vector similarity"],
      out:"Returns the top five similarity-based results across image, part-number, name, category and voice queries." },
    { name:"AI-Assisted Git Security Analysis (Vidura)", domain:"Applied AI · Sankey Solutions",
      problem:"Review commit changes faster and catch exposed secrets before they spread.",
      mine:"Independently built the solution: GitHub API integration for commit diffs and surrounding code, separate OpenAI workflows for change summaries and security detection, and secret checks (API keys, tokens, passwords, email credentials, AWS details).",
      stack:["Python","GitHub API","OpenAI API"], out:"Structured reports with issue descriptions and severity levels for developer review." },
    { name:"Enterprise E-Commerce Backend", domain:"Backend · Tata Motors client (Edukaan, PV Shopee)",
      problem:"Reliable order, notification and fulfilment workflows for a spare-parts platform with 1,000+ daily orders.",
      mine:"Developed 40+ REST APIs; FastAPI + Kafka notification services; Redis caching for Order History; ORM optimisation; Celery/Redis report exports with S3 presigned downloads; DSR/MSR workflows; Shiprocket and SAP Grow integrations; Keycloak/JWT/OAuth 2.0 auth.",
      stack:["Django","DRF","FastAPI","Kafka","Redis","Celery","AWS S3","Keycloak"], out:"~1,000–10,000 notifications per day supported." },
    { name:"Fleet Management & Vehicle Tracking", domain:"Backend · Tata Motors client (FleetEdge)",
      problem:"Trip, mileage and subscription features inside an ~18-microservice fleet platform.",
      mine:"Worked on vehicle, wrapper, subscription and payment services (part of the platform, not its owner). Built the Day-wise Tracker (GPS, Haversine, trips/stops, map routes), Mileage Saarathi logic, Sahaj telemetry sync, CCAvenue integration and role/subscription access control.",
      stack:["Django","PostgreSQL","Redis","CCAvenue"], out:"20–30% API performance gain from N+1 fixes and ORM optimisation." },
    { name:"Intelligent Quality Management System", domain:"Backend · Tata Motors client (IQMS)",
      problem:"Replace paper-based assembly-line quality inspections.",
      mine:"Built the User Portal backend with 50+ REST APIs, Quality Maker/Checker workflows, a Kafka consumer for VIN data and Swagger/OpenAPI docs.",
      stack:["Django","PostgreSQL","Kafka","Swagger"], out:"Digitised inspection, defect reporting, corrective action and verification." }
  ]
};
