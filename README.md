# Ashford Hills HOA Landing Page

A modern, responsive website for the Ashford Hills Homeowners Association in Granger, Indiana. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero image, quick stats (homes, annual HOA dues, established), neighborhood highlights, and a contact call-to-action
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Modern UI**: Clean, professional design inspired by Knollwood West HOA

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ashford-hills
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
ashford-hills/
├── app/
│   ├── layout.tsx             # Root layout with Header/Footer
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx              # Footer component
├── public/                     # Static assets
└── package.json
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com), the platform created by the Next.js team.

#### Option 1: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

#### Option 3: Deploy via GitHub Integration

1. Connect your GitHub account to Vercel
2. Select the repository
3. Vercel will automatically deploy on every push to the main branch

### Environment Variables

Currently, no environment variables are required. If you add features like email sending or API integrations in the future, create a `.env.local` file:

```bash
# Example (not currently used)
# NEXT_PUBLIC_SITE_URL=https://ashfordhills.org
# CONTACT_EMAIL=info@ashfordhills.org
```

### Custom Domain

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `ashfordhills.org`)
3. Follow Vercel's instructions to configure DNS records

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** (via ESLint) for code formatting
- **TypeScript** for type safety

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library

## Content Updates

To update content on the site:

- **Home page**: Edit `app/page.tsx`
- **Navigation**: Edit `components/Header.tsx`
- **Footer**: Edit `components/Footer.tsx`

## Contact

The site uses a simple email link (`mailto:info@ashfordhills.org`) instead of a contact page/form.

## License

Copyright © 2025 Ashford Hills HOA – All Rights Reserved
