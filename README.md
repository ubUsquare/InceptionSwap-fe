# 🚀 InceptionSwap - DeFi Platform

A fully responsive decentralized finance (DeFi) platform built with Next.js 14, featuring seamless trading, mining, staking, and more on the Binance Smart Chain.

---

## ✨ Features

- 🔄 **Token Swaps** - Exchange tokens instantly
- ⛏️ **Mining** - Earn rewards through mining pools
- �� **Liquidity Pools** - Provide liquidity and earn fees
- 🎯 **Staking** - Stake tokens for rewards
- 🔒 **Vault** - Secure asset management
- 📊 **Bonds** - Investment opportunities
- 📈 **Analytics** - Track your portfolio
- 🚀 **IMO** - Initial Mining Offerings
- 🌙 **Dark Mode** - Full dark/light theme support
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom React components
- **Theme:** next-themes (Dark/Light mode)
- **State Management:** React Context API

---

## 📁 Project Structure

```
inceptionswap/
├── public/
│   └── images/              # Static images
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   ├── analytics/       # Analytics page
│   │   ├── bonds/           # Bonds page
│   │   ├── imo/             # IMO page
│   │   ├── mines/           # Mines page
│   │   ├── more/            # More options page
│   │   ├── pools/           # Pools page
│   │   ├── stakes/          # Stakes page
│   │   ├── trades/          # Trading page
│   │   └── vault/           # Vault page
│   │
│   ├── components/          # React components
│   │   ├── app-layout.tsx   # Main app layout wrapper
│   │   ├── header.tsx       # Header with hamburger menu
│   │   ├── sidebar.tsx      # Responsive sidebar navigation
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── theme-toggle.tsx    # Dark/Light mode toggle
│   │
│   ├── contexts/            # React Context API
│   │   └── sidebar-context.tsx # Sidebar state management
│   │
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Helper utilities
│   │
│   └── types/               # TypeScript types
│       └── css.d.ts         # CSS module types
│
├── .next/                   # Next.js build output
├── node_modules/            # Dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd inceptionswap
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 Responsive Design

The application is fully responsive with the following breakpoints:

| Device | Screen Width | Features |
|--------|--------------|----------|
| **Mobile** | < 640px | Single column, hamburger menu, compact spacing |
| **Tablet** | 640px - 1023px | Flexible layouts, hamburger menu |
| **Desktop** | ≥ 1024px | Multi-column, sidebar always visible |

### Mobile Features:
- ☰ Hamburger menu (visible on screens < 1024px)
- Responsive sidebar (slides in/out with smooth animations)
- Touch-friendly buttons and navigation
- Optimized spacing and padding
- No horizontal scrolling

### Desktop Features:
- Always-visible sidebar
- Multi-column grid layouts
- Spacious design
- Enhanced hover effects

---

## 🎨 Theme Support

Toggle between dark and light modes using the theme button in the header.

- **System Theme Detection** - Automatically matches your OS preference
- **Persistent Theme** - Your choice is saved across sessions
- **Smooth Transitions** - Seamless switching between modes

---

## 📄 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🌐 Pages

1. **Home (/)** - Dashboard with mining stats and announcements
2. **Trades (/trades)** - Token swap interface
3. **Mines (/mines)** - Mining pools
4. **Pools (/pools)** - Liquidity pools
5. **Stakes (/stakes)** - Staking interface
6. **Vault (/vault)** - Asset vault
7. **Bonds (/bonds)** - Bond investments
8. **Analytics (/analytics)** - Portfolio analytics
9. **IMO (/imo)** - Initial Mining Offerings
10. **More (/more)** - Additional features

---

## 🔧 Configuration

### Tailwind CSS

Customize colors, fonts, and breakpoints in `tailwind.config.ts`

### Theme

Modify theme colors in `src/app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Emoji](https://emojipedia.org/)

---

## 📞 Support

For support, please open an issue in the repository or contact the development team.

---

**Made with ❤️ for the DeFi community**
