# Portfolio Website - Architecture Overview

## Overview

This is a modern, responsive portfolio website built with React and TypeScript, featuring a single-page application (SPA) architecture with Express.js backend. The application showcases a personal portfolio with sections for about, education, experience, skills, projects, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Built-in session handling preparation
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting (includes Education, Experience, Skills, Projects, Achievements sections)
- **Hero Section**: Landing page with call-to-action buttons and social links
- **About Section**: Personal information and statistics display
- **Education Section**: Academic background with CGPA and achievements from IIIT Delhi and CBSE
- **Experience Section**: Work history with detailed achievements and tech stacks (TRDDC, ScrapUncle internships)
- **Skills Section**: Categorized technical skills with visual badges (Expertise Areas, Programming Languages, Tools & Technologies, Core Electives)
- **Projects Section**: Comprehensive portfolio projects with GitHub links and descriptions (7 projects total including Scanerr, Portfolio Optimizer, Mental Health NLP, OS Components, Smart Analyzer, BlinkBasket, and Stick Hero Game)
- **Achievements Section**: Honors and awards including Dean's Excellence Award, CBSE Merit Certificate, LeetCode achievements, competitive programming accomplishments, and positions of responsibility
- **Contact Section**: Contact form with validation and toast notifications
- **Footer**: Social links and copyright information

### Backend Components
- **Routes**: API endpoints for contact form submission
- **Storage**: In-memory storage with interface for future database integration
- **Middleware**: Request logging, error handling, and development tools
- **Static Serving**: Production-ready static file serving

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation occurs client-side
3. Form data submitted to `/api/contact` endpoint
4. Backend validates required fields and email format
5. Success/error response sent back to frontend
6. Toast notification displayed to user

### Development Workflow
1. Vite serves frontend assets with hot reloading
2. Express server handles API routes
3. Development middleware provides error overlays
4. TypeScript compilation ensures type safety

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Animations**: CSS animations and transitions

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL session store (connect-pg-simple)
- **Development**: tsx for TypeScript execution

### Development Tools
- **Bundling**: Vite with React plugin
- **Code Quality**: TypeScript strict mode
- **Error Handling**: Replit runtime error overlay
- **Path Aliases**: Configured for clean imports

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with Express API integration
- **Hot Reloading**: Frontend changes reflect immediately
- **API Proxy**: Development server proxies API requests to Express
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL connection via environment variables

### Database Schema
- **Users Table**: Basic user schema with username and password
- **Migrations**: Drizzle migrations in `migrations/` directory
- **Type Safety**: Generated TypeScript types from schema

### Error Handling
- **Frontend**: React error boundaries and toast notifications
- **Backend**: Centralized error middleware with proper status codes
- **Development**: Enhanced error overlays for debugging

The architecture prioritizes developer experience with modern tooling while maintaining production readiness through proper error handling, type safety, and scalable database integration.