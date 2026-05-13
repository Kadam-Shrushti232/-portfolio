// ================================================================
//  PORTFOLIO CONFIGURATION FILE
//  ► Edit ONLY this file to update any content on your portfolio.
//  ► No other file needs to be touched.
// ================================================================

const PORTFOLIO_DATA = {

  // ── Personal Info ──────────────────────────────────────────────
  name:     "Shrushti Kadam",
  title:    "BTech AI & Machine Learning Student",
  location: "Pune, India",
  email:    "kadamshrushti232@gmail.com",
  photo:    "photo.jpg",      // ← Replace this file to update your photo
  resume:   "resume.pdf",     // ← Replace this file to update your resume
  linkedin: "https://www.linkedin.com/in/shrushtikadam",
  github:   "https://github.com/Kadam-Shrushti232",

  // ── Typing animation texts (hero section) ─────────────────────
  typingTexts: [
    "AI & ML Student",
    "Builder",
    "Problem Solver",
    "Computer Vision Enthusiast",
    "NLP Explorer"
  ],

  // ── About Bio ─────────────────────────────────────────────────
  bio: `I'm a BTech student specializing in <strong>Artificial Intelligence & Machine Learning</strong>
at Pune, India. Passionate about building intelligent systems that solve real-world problems,
I work across <strong>Computer Vision</strong>, <strong>Natural Language Processing</strong>,
and Time-Series Analysis. I love turning complex data into meaningful insights and deploying
models that make a tangible impact.`,

  // ── Stats (displayed under bio) ───────────────────────────────
  stats: [
    { value: "8.86", label: "CGPA" },
    { value: "4+",   label: "Projects" },
    { value: "4",    label: "Certifications" },
    { value: "Pune", label: "Location" }
  ],

  // ── Skills ────────────────────────────────────────────────────
  // To add a new category: copy a block and paste it here.
  skills: [
    {
      category: "Programming",
      icon: "💻",
      items: ["Python", "C++", "SQL", "JavaScript"]
    },
    {
      category: "Machine Learning",
      icon: "🤖",
      items: ["Scikit-learn", "TensorFlow", "Keras", "ARIMA"]
    },
    {
      category: "Computer Vision",
      icon: "👁️",
      items: ["OpenCV", "Face Detection", "OCR", "Image Processing"]
    },
    {
      category: "NLP",
      icon: "🗣️",
      items: ["TF-IDF", "Tokenization", "Text Classification", "Sentiment Analysis"]
    },
    {
      category: "Libraries",
      icon: "📚",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      category: "Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "Jupyter", "VS Code", "Google Colab"]
    }
  ],

  // ── Projects ──────────────────────────────────────────────────
  // To add a new project: copy one object below, paste it, and fill in your details.
  // Set live: null if you don't have a live demo link.
  projects: [
    {
      title:       "AI-Based Online Proctoring System",
      description: "Real-time exam proctoring using face detection and suspicious activity alerts, ensuring academic integrity for online assessments.",
      tech:        ["Python", "OpenCV", "Face Detection"],
      accuracy:    "85–92%",
      github:      "https://github.com/Kadam-Shrushti232",
      live:        null
    },
    {
      title:       "Sentiment Analysis using NLP & ML",
      description: "NLP pipeline for positive/negative text classification using TF-IDF feature extraction, evaluated with confusion matrix analysis.",
      tech:        ["Python", "TF-IDF", "Scikit-learn"],
      accuracy:    "High",
      github:      "https://github.com/Kadam-Shrushti232",
      live:        null
    },
    {
      title:       "Anomaly Detection using ARIMA",
      description: "Time-series forecasting model for detecting abnormal trends in sequential data using classical statistical methods.",
      tech:        ["Python", "ARIMA", "Pandas"],
      accuracy:    "80–85%",
      github:      "https://github.com/Kadam-Shrushti232",
      live:        null
    },
    {
      title:       "Smart Reading Aid for Visually Impaired",
      description: "Converts printed text to natural speech for visually impaired users via camera input, using OCR + Text-to-Speech pipelines.",
      tech:        ["Python", "OCR", "TTS"],
      accuracy:    "90–98%",
      github:      "https://github.com/Kadam-Shrushti232",
      live:        null
    }
  ],

  // ── Certifications ────────────────────────────────────────────
  // To add a new certification: copy a block and paste it here.
  certifications: [
    {
      title:  "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
      issuer: "Oracle",
      icon:   "☁️"
    },
    {
      title:  "AI-ML Virtual Internship",
      issuer: "Google for Developers · 10 Weeks",
      icon:   "🤖"
    },
    {
      title:  "Blockchain Specialization",
      issuer: "University at Buffalo · Coursera",
      icon:   "🔗"
    },
    {
      title:  "Agile Project Management",
      issuer: "Google · Coursera",
      icon:   "📋"
    }
  ]

};
