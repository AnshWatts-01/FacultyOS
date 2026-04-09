import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        shell: "#f5f5f2",
        panel: "#fbfbf9",
        line: "#deded8",
        ink: "#111318",
        mist: "#eef2f8",
        accent: "#91a7c7"
      },
      boxShadow: {
        soft: "0 20px 50px -28px rgba(17, 19, 24, 0.18)",
        float: "0 30px 80px -32px rgba(17, 19, 24, 0.22)"
      },
      backgroundImage: {
        "hero-halo":
          "radial-gradient(circle at top, rgba(164, 185, 215, 0.32), transparent 44%), radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.92), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,245,247,0.88))"
      },
      animation: {
        shimmer: "shimmer 10s linear infinite",
        float: "float 12s ease-in-out infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
