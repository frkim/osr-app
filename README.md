# OSR - On-site Support Request System

A Next.js application for managing on-site support requests.

## Features

- Submit new support requests
- Track request status
- Dashboard view for managing requests
- User authentication
- Priority and type classification

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: HeadlessUI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Application Structure

- `/src/app`: Main application code
  - `/components`: Reusable UI components
  - `/dashboard`: Dashboard page for viewing all requests
  - `/login`: Authentication pages
  - `/request`: Request creation and management
  - `/models`: TypeScript interfaces and types

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
