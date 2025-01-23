# Three.js Physics Animation 🌌

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Site-green?style=for-the-badge&logo=vercel)](https://ketan1406.github.io/threejs-phy-animation/)

An interactive 3D physics-based animation using Three.js, showcasing realistic object interactions powered by Rapier3D.

## ✨ Key Features

- **Physics Simulation** - Realistic object collisions and movement using Rapier3D.
- **Interactive Scene** - Orbit controls for rotating and zooming into the scene.
- **Procedural Environment** - Dynamically created elements for a unique experience.
- **Optimized Performance** - Lightweight setup with efficient rendering.

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/threejs-phy-animation.git
   ```

2. Install dependencies:

   ```bash
   cd threejs-phy-animation && npm install

   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 💡 Technologies Used

- [Three.js](https://threejs.org/) - Core 3D rendering engine.
- [Vite](https://vitejs.dev/) - Build tool & dev server.
- [Rapier](https://rapier.rs/) - Physics simulation library.
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) - Camera interaction.
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Automated deployment.

## 📂 Project Structure

    /threejs-phy-animation/
    ├── README.md
    ├── index.html               # Entry point for the app
    ├── package.json             # Project dependencies
    ├── public/                  # Static assets
    ├── src/                     # Source files
    │   ├── getBodies.js         # Physics body generator
    │   ├── main.js              # Main script for scene setup
    ├── vite.config.js           # Build configuration
