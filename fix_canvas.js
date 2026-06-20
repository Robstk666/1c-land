const fs = require('fs')
const content = fs.readFileSync('index.html', 'utf8')

const target = `        <div
          class="sticky top-0 h-screen w-full overflow-hidden bg-cream-paper flex flex-col items-center justify-center perspective-[2000px]"
        >
          <div
            id="hero-content"`

const replacement = `        <div
          class="sticky top-0 h-screen w-full overflow-hidden bg-cream-paper flex flex-col items-center justify-center perspective-[2000px]"
        >
          <!-- Layer 2: Canvas (Bottom) -->
          <canvas
            id="hero-canvas"
            class="absolute inset-0 w-full h-full object-cover z-0 opacity-0 transform-gpu"
          ></canvas>

          <!-- Layer 1: Hero Image (Top) -->
          <img
            id="hero-image"
            src="./hero-girl.jpg"
            alt="Woman with laptop in park"
            class="absolute inset-0 w-full h-full object-cover z-10 transform-gpu"
          />

          <!-- Overlay Text & Marquee -->
          <div
            id="hero-content"`

const newContent = content.replace(target, replacement)
fs.writeFileSync('index.html', newContent)
