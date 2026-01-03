# Coup. - iMessage Automation Landing Page

This is a high-fidelity landing page for **Coup.**, an iMessage automation tool for teams and AI workflows. The project features smooth animations, a premium design aesthetic, and a responsive layout.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🎨 Design Highlights & Implementation Notes

### Interactive Navbar Button
- **Concave Hover Effect**: The "Contact Sales" button features a unique "cup-like" or "scooped" receding background animation. This was achieved by translating a background container that includes a white circular "cutter" element at its trailing edge, creating an inward-curving visual as the blue mass moves out.

### Animated Background
- **Dynamic Elements**: Features birds (fly-out and scrolling) and soft layered clouds.
- **Flight Paths**: Fly-out birds follow specific trajectories (e.g., bottom-left to mid-top-right) with smooth easing and symmetrical exit points.
- **Performance**: High-performance animations using Framer Motion's hardware-accelerated transforms.

### Component Transitions
- **AnimatePresence**: Seamless switching between the Hero section and the Contact Sales view without page reloads, providing a modern SPA feel.

### Typography
- **Custom Fonts**: Uses the "General Sans" font family for a sleek, professional look, with specific weights configured for headings and body text.

### Responsive Design
- **Mobile Optimization**: Certain intensive background animations and decorative elements are hidden on mobile (`hidden lg:block`) to ensure performance and clarity on smaller screens.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Assumptions

- The landing page is the primary entry point, focusing on conversion through the "Get Started" and "Contact Sales" actions.
- Background assets are optimized for various viewport sizes but prioritized for larger screens where the "immersive" effect is most effective.
- The project follows the repository requirements for a public submission.
