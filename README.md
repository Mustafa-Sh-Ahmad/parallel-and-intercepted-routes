# Next.js Parallel and Intercepted Routes Demo

A complete demonstration of **Parallel Routes** and **Intercepted Routes** in Next.js 15+ with the App Router, featuring a photo gallery with modal functionality.

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)

## 🚀 Features

- **Parallel Routes**: Modal slot (`@modal`) runs in parallel with main content
- **Intercepted Routes**: Smart navigation that shows modals from gallery but full pages from direct URLs
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Responsive design with smooth animations
- **SEO Friendly**: Full page views are crawlable and shareable
- **Progressive Enhancement**: Works with and without JavaScript

## 🎯 Demo Behavior

- **📱 From Gallery**: Clicking photos opens them in a modal overlay
- **🔗 Direct URL**: Navigating to `/photos/[id]` directly shows full page view
- **⬅️ Browser Back**: Closes modal and returns to gallery
- **🔄 Page Refresh**: Shows full page view (maintains URL structure)

## 📁 Project Structure

```
├── app/
│   ├── @modal                       # Parallel route slot
│   │   ├── (.)photos/               # Intercepted route (Next.js 15 syntax)
│   │   │   └── [id]/
│   │   │       └── page.tsx         # Modal photo page
│   │   └── default.tsx              # Required for parallel routes
│   ├── photos/
│   │   ├── [id]/
│   │   │   └── page.tsx             # Individual photo page
│   │   ├── layout.tsx               # Photos layout
│   │   ├── page.tsx                 # Photo gallery page
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout with parallel slots
│   ├── page.tsx                     # Home page
├── components/
│   ├── Modal.tsx                    # Modal component
│   ├── PhotoCard.tsx                # Photo card component
│   └── Navigation.tsx               # Navigation component
├── data/
│   └── photos.ts                    # Sample photo data
├── types/
│   └── photo.ts                     # TypeScript interfaces
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- pnpm (package manager)

### Installing pnpm (if not exist)

If you don't have pnpm installed, you can install it using the following command

```bash
npm install -g pnpm
```

Verify Installation

```bash
pnpm --version
```

> **💡 Why pnpm?** pnpm is faster and more disk-space efficient than npm. It creates hard links instead of copying files, saving space and installation time. [Learn more about pnpm](https://pnpm.io/motivation).

### Quick Start

Installing the project

```bash
pnpm create next-app@latest photo-gallery --example https://github.com/Mustafa-Sh-Ahmad/parallel-and-intercepted-routes
```

Going to the project directory

```bash
cd photo-gallery
```

Running the development server

```bash
pnpm dev
```

Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> in your browser to see the result! 🎉

## 📚 Key Concepts Explained

### Parallel Routes (@modal)

Parallel routes allow you to render multiple pages in the same layout simultaneously.

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode; // ← Parallel slot
}) {
  return (
    <html>
      <body>
        {children}
        {modal} {/* ← Renders simultaneously */}
      </body>
    </html>
  );
}
```

### Intercepted Routes

Intercepted routes allow you to load a route from another part of your application within the current layout.

- `(.)` - intercept routes at the same level
- `(..)` - intercept routes one level up (deprecated in Next.js 15)
- `(..)(..)` - intercept routes two levels up
- `(...)` - intercept routes from the root

### Next.js 15 Changes

This project is updated for Next.js 15 with the following changes:

1. **Intercepted route syntax**: Uses `(.)` instead of `(..)` for same-level interception
2. **Async params**: Route parameters must be awaited:
   ```typescript
   export default async function Page({ params }: { params: Promise<{ id: string }> }) {
     const { id } = await params; // ← Must await
     // ...
   }
   ```

## 🎨 Customization

### Adding More Photos

Edit `data/photos.ts` to add more photos:

```typescript
export const photos: Photo[] = [
  {
    id: "7",
    title: "Your Photo Title",
    description: "Your photo description",
    imageUrl: "https://your-image-url.com/photo.jpg",
    photographer: "Photographer Name",
  },
  // ... more photos
];
```

### Styling

- Edit `app/globals.css` for global styles
- Modify component styles inline or extract to CSS modules
- The project uses vanilla CSS for maximum compatibility

### Adding Features

- **Image optimization**: Already configured with Next.js Image component
- **Loading states**: Add loading components in route folders
- **Error handling**: Add error.tsx files in route folders
- **Metadata**: Add metadata exports to page components

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- Railway
- Heroku
- AWS
- Any Node.js hosting platform

Build the project:

```bash
pnpm build
pnpm start
```

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📖 Learn More

- [Next.js Parallel Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Next.js Intercepting Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [Next.js 15 Release Notes](https://nextjs.org/blog/next-15)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

- **Direct URL Access**: Try navigating directly to `/photos/1` vs clicking from gallery
- **Browser DevTools**: Check the Network tab to see different loading behavior
- **Mobile**: The modal experience works great on mobile devices
- **SEO**: Each photo has its own URL and is fully indexable

---

**Built with ❤️ using Next.js 15, TypeScript, and modern React patterns.**
