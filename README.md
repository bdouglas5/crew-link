# Crewlink

This project is a lightweight starter for a film and TV crew networking app built with Next.js and TypeScript. It demonstrates Firebase authentication, Firestore storage, and Tailwind CSS styling.

## Folder Structure

```
lib/            Firebase configuration
pages/          Next.js route pages
components/     Reusable UI components
styles/         Global styles (Tailwind)
public/         Static assets like the logo
```

## Development

1. Install dependencies with `npm install`.
2. Run the development server with `npm run dev`.

A minimal set of configuration files is provided for Next.js, TypeScript, and Tailwind CSS. Authentication and Firestore logic live in `lib/firebase.ts`.

## Architecture Notes

Pages under `pages/` map directly to application routes. Components in `components/` encapsulate UI pieces like the navigation bar, user profile cards, project forms, and an authentication guard. Firebase is initialized once in `lib/firebase.ts` to share the configuration across the app.
