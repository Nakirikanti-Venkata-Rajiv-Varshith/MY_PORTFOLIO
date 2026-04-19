export const projects = [
{
title: "PRISM - Predictive Resource Intelligence & Scaling",
description: `
🧠 Overview:
Designed and built a real-time, resource-aware monitoring and self-healing system that detects anomalies and autonomously triggers recovery actions (restart, scaling) under constrained environments. Focused on performance, low memory usage, and system reliability.

🛠️ Tech Stack:
- Frontend: React, Socket.io (real-time visualization)
- Backend: Node.js, Express (metrics collection + orchestration)
- ML Service: Python, Flask (lightweight anomaly detection)
- DevOps & Infra: Docker, Docker Compose, NVIDIA Container Runtime
- Process Management: PM2 (service lifecycle management)
- Scripting: Bash (automated scaling and recovery workflows)

⚙️ System Flow:
- Collects CPU, RAM, disk, and GPU (when available) metrics via Node.js backend
- Streams real-time system metrics to frontend using WebSockets (Socket.io)
- Routes telemetry data to a Python (Flask) microservice for anomaly detection
- Triggers automated recovery actions (restart / scale) based on system state and anomaly signals

🧠 Anomaly Detection:
- Developed a custom lightweight anomaly detection model using trend + spike analysis
- Eliminated heavy ML dependencies (e.g., sklearn) to significantly reduce memory overhead
- Optimized for fast inference and stability in low-resource environments

⚙️ Self-Healing Engine:
- Implemented automated service recovery using PM2 process manager
- Designed custom scale-up / scale-down mechanisms using shell scripts
- Added cooldown and logging systems to prevent redundant or unstable triggers
- Persisted predictions and recovery actions for system behavior tracking and debugging

🧩 Infrastructure & Deployment:
- Architected fully Dockerized microservices (frontend, backend, ML service)
- Enforced strict memory constraints:
  - Frontend: 256MB
  - Backend / ML: 512MB
- Enabled internal container networking for reliable service-to-service communication
- Integrated NVIDIA Container Runtime for GPU-enabled workloads with hardware-level access

🔥 Key Challenges Solved:
- Solved GPU access limitations inside Docker by integrating NVIDIA Container Runtime, enabling hardware-level acceleration for ML workloads
- Resolved container isolation constraints that blocked host hardware access, ensuring stable interaction between system resources and containers
- Fixed Linux compatibility issues (e.g., missing nvidia-smi) to ensure consistent GPU visibility across environments
- Reduced memory usage and improved inference speed by replacing a heavy ML pipeline with a custom lightweight anomaly detection model
- Ensured reliable inter-service communication through optimized internal Docker networking
- Built fallback mechanisms and documented setup workflows to support both GPU and non-GPU systems
`,
image: "images/project4.png",
github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith/Predictive_Resource_Intelligence_Scaling_Manager_PRISM"
},

{
title: "CipherVault",
description: `
🧠 Overview
Built a secure full-stack notes platform with AI-assisted content generation and encrypted user authentication.

🛠️ Tech Stack:
- Frontend: React
- Backend: Node.js, Express
- Database: PostgreSQL
- Security: bcrypt
- AI Integration: OpenAI API (configurable via .env)

⚙️ System Flow:
- React frontend handles user interaction and note management UI
- Node.js + Express backend manages APIs, authentication, and data flow
- PostgreSQL stores user notes and metadata persistently
- AI requests routed via OpenAI API for content assistance

🤖 AI Integration:
- Integrated OpenAI API for generating intelligent note suggestions
- Designed system to work with placeholder/demo API keys
- Easily switchable to real API via .env configuration
- Ensures modular AI integration without affecting core system

🔐 Authentication & Security:
- Implemented secure authentication using bcrypt hashing
- User passwords are never stored in plain text
- Applied validation and controlled access to user-specific data
- Ensured safe handling of credentials via environment variables

🧩 Data Management:
- Structured PostgreSQL schema for efficient note storage
- Supports persistent user data with scalable backend design
- Handles CRUD operations with proper API structure

🎯 User Experience:
- Clean and responsive UI built with React
- Seamless interaction between note editing and AI assistance
- Designed for fast and intuitive usage
`,
image: "images/project2.png",
github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith/CipherVault.git",
// demo: "https://your-live-demo-link.com"
},

// {
// title: "Portfolio Website",
// description: "Developed a personal portfolio website using React with a modern UI, showcasing projects and skills. Implemented smooth and responsive design to create an interactive and visually polished user experience. ✨🚀",
// image: "images/project3.png",
// github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith/MY_PORTFOLIO.git",
// demo: "https://nakirikanti-venkata-rajiv-varshith.github.io/MY_PORTFOLIO/"
// },

{
title: "NetX_Vitals",
description: `
🧠 Overview:
Built a lightweight system monitoring dashboard optimized for real-time insights with minimal resource consumption.

🛠️ Tech Stack:
- Backend: Node.js
- Containerization: Docker, Docker Compose
- Data Handling: CSV (custom logic-based storage)
- Frontend: JavaScript, Chart-based visualization

⚙️ System Flow:
- Node.js backend collects system metrics at regular intervals
- Processes and formats data for real-time visualization
- Frontend renders live updates with dynamic charts
- Data pipeline ensures continuous monitoring with low overhead

🧩 Data Handling Strategy:
- Used CSV-based storage instead of databases for minimal footprint
- Implements rolling data logic:
  - Caps at 400 entries
  - Automatically trims oldest 200 entries
- Ensures consistent performance without storage bloat

🐳 Deployment & Optimization:
- Containerized into a **single Docker image** for simplicity and portability
- Faced GPU metric issues with node:slim, switched to Alpine-based image
- Pre-built and pushed image to Docker Hub for uniform deployment
- Replaced compose build step with image pull → faster and consistent setup

⚙️ Performance Focus:
- Designed with **minimal CPU, RAM, and disk usage**
- Avoided heavy dependencies and databases
- Optimized for lightweight monitoring environments

🎯 User Experience:
- Clean and aesthetic dashboard UI
- Real-time metric updates with clear visualization
- Focused on simplicity and usability

`,
image: "images/project5.png",
github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith/Netx_Vitals_Docker_V1.git",
},


{
title: "Fappy Bird for PC",
description: `
🧠 Overview:
A Flappy Bird–inspired browser game built with smooth physics-based mechanics and responsive controls, designed to maintain engaging and balanced gameplay across increasing difficulty levels.

🛠️ Tech Stack:
- HTML, CSS, JavaScript
- Browser APIs (localStorage, audio handling)

⚙️ System Flow:
- Game loop continuously updates bird position using velocity and gravity logic
- Detects collisions with pipes and ground in real time
- Generates obstacles (pillars) with dynamic gap adjustments
- Tracks score based on successful obstacle passes
- Renders updates efficiently for smooth gameplay experience

🧠 Gameplay Mechanics:
- Initially increased difficulty using gravity scaling
- Refactored approach to adjust **pillar gap and speed** instead of gravity
- Ensured gameplay remains challenging but not impossible
- Maintains minimum gap threshold (≥ 60px) for playability

⚙️ Difficulty Scaling:
- Every 5 levels:
  - Increases pillar movement speed
  - Dynamically adjusts obstacle spacing
- Designed progressive difficulty curve for sustained engagement

🧩 Data Persistence:
- Implemented high-score tracking using browser localStorage
- Allows persistent scores per user without backend
- Ensures lightweight and fast access

🎯 User Experience:
- Added meme-based audio feedback for fun interaction
- Responsive controls for smooth user input
- Optimized rendering for seamless cross-device performance
`,
image: "images/project1.png",
github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith/Viral-Sairam-Bird.git",
demo: "https://nakirikanti-venkata-rajiv-varshith.github.io/Viral-Sairam-Bird/"
},

{
title: "PC Multi Game Web App",
description: `
🧠 Overview:
 Built an AI-driven multi-game platform integrating pathfinding (A*) and decision-making (Minimax) algorithms with interactive gameplay.

🛠️ Tech Stack:
- Frontend: React, Vite
- Styling: CSS
- Algorithms: A* Search, Minimax

⚙️ System Flow:
- React frontend manages game state, rendering, and user interactions
- N-Puzzle solver processes input configurations and computes optimal solution path
- OXO game handles grid logic, move validation, and win detection in real time
- UI dynamically updates based on game state and AI decisions

🧠 AI & Algorithms:
- Implemented A* search algorithm for solving N-Puzzle (8-puzzle & 15-puzzle)
- Uses heuristic-based pathfinding to compute optimal moves efficiently
- Integrated Minimax algorithm for OXO AI gameplay
- Enables single-player mode with intelligent opponent decisions

🎮 Gameplay Features:
- Supports multiple grid sizes:
  - N-Puzzle: 8-puzzle and 15-puzzle
  - OXO: 3×3, 4×4, and 5×5 boards
- Real-time solving visualization for puzzle states
- Dynamic win detection and game state tracking
- Designed for engaging single-player and interactive gameplay

🧩 Key Decisions:
- Initially planned larger puzzle sizes but optimized for 8 & 15 puzzle for performance and usability
- Introduced AI opponent in OXO to enable solo gameplay
- Balanced complexity and responsiveness for smooth browser experience

🎯 User Experience:
- Clean and responsive UI built with React + CSS
- Smooth animations and real-time feedback
- Optimized rendering for seamless gameplay performance

`,
image: "images/project6.png",
demo: "https://nakirikanti-venkata-rajiv-varshith.github.io/Multi_Game_Website_Ai/",
github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith/Multi_Game_Website_Ai.git"

},

{
  title: "Automated Systems & Intelligent Orchestration",
  description: `description: "Designing self-managing systems that monitor, predict, and automatically recover from failures. Leveraging Dockerized microservices, real-time telemetry, and lightweight ML to achieve efficient and reliable orchestration under resource constraints. ⚡"
  
  "More systems and experiments currently in progress… 🚧"`,
  image: "images/github.png",
  github: "https://github.com/Nakirikanti-Venkata-Rajiv-Varshith",
  demo: ""
},


];
