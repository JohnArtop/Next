# Next.js 14 + Contentstack Headless Boilerplate

An enterprise-ready, ultra-minimalist boilerplate for Next.js (App Router) and Contentstack. This project showcases how to handle modular blocks and server-side data fetching with a decoupled frontend.

## Features
* Next.js 14 App Router: Optimized for Server Components (RSC) and fast initial page loads.
* Modular Blocks Rendering: A robust RenderBlocks engine that iterates through Contentstack's modular block schema to build pages dynamically.
* Type Safety: Prepared for TypeScript integration with a clear separation between SDK logic and UI components.

## Quick Start
1. Clone the repo & Install:
   npm install

2. Configure Environment:
   Rename .env.example to .env and add your Contentstack keys:
   CONTENTSTACK_API_KEY=your_key
   CONTENTSTACK_DELIVERY_TOKEN=your_token
   CONTENTSTACK_ENVIRONMENT=production

3. Run Locally:
   npm run dev

## Architecture
The project follows the Registry Pattern. By maintaining a componentMap, the frontend is completely decoupled from the CMS structure, allowing content editors to rearrange the UI without requiring code changes for every update.