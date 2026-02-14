# GitHub Copilot Project Instruction -- Property Map MVP

## Project Overview

This project is a Property Mapping MVP built using:

-   Nuxt v4
-   @nuxt/tailwindcss
-   @nuxt/leaflet
-   reka-ui
-   MySQL (Docker)
-   mysql2 (no ORM)
-   Docker Compose for local development

The application allows users to: - View properties on a map - Store
property data in MySQL - Display property statistics - Basic CRUD via
Nuxt server routes

------------------------------------------------------------------------

## Architecture

Frontend: - Nuxt pages for dashboard, analysis, valuation - Leaflet map
for displaying property markers - TailwindCSS + reka-ui for UI

Backend: - Nuxt server routes (server/api) - MySQL connection via mysql2
pool - No external backend service

Infrastructure: - Docker Compose - MySQL container - Nuxt dev container

------------------------------------------------------------------------

## Folder Structure Convention

pages/ dashboard.vue analysis.vue valuation.vue

components/ MapView.vue PropertyCard.vue StatsPanel.vue

server/ api/ properties.get.ts properties.post.ts utils/ db.ts

------------------------------------------------------------------------

## Database Schema

Table: properties

Fields: - id (INT, auto increment, primary key) - title (VARCHAR 255) -
price (BIGINT) - latitude (DOUBLE) - longitude (DOUBLE) - created_at
(TIMESTAMP default current_timestamp)

------------------------------------------------------------------------

## Coding Guidelines for Copilot

1.  Use Composition API with
    ```{=html}
    <script setup>
    ```
2.  Keep components small and reusable
3.  Do not introduce external state management libraries
4.  Do not introduce ORM (Prisma, Sequelize, etc.)
5.  Use mysql2 with connection pool only
6.  Use environment variables for DB configuration
7.  Keep MVP simple --- no authentication yet
8.  Prefer clean Tailwind utility classes
9.  Use reka-ui for dialogs, dropdowns, and modals
10. Keep server routes REST-style

------------------------------------------------------------------------

## API Style Guide

GET /api/properties POST /api/properties PUT /api/properties/:id DELETE
/api/properties/:id

Return JSON only. No HTML rendering from server routes.

------------------------------------------------------------------------

## Leaflet Rules

-   Use OpenStreetMap tile layer
-   Dynamically render markers from API data
-   Auto-fit map bounds
-   Prepare structure for future clustering support

------------------------------------------------------------------------

## MVP Scope (Do NOT Overbuild)

Phase 1: - Display properties on map - Add property via simple form -
Store in MySQL - Show list view

Phase 2: - Basic price statistics - Simple filtering

Do NOT implement: - Authentication - Role-based access control - Complex
analytics - Microservices

------------------------------------------------------------------------

## Docker Development Notes

-   Run Nuxt in dev mode inside container
-   Use volume mount for hot reload
-   MySQL runs in separate container
-   Database credentials come from docker-compose environment variables

------------------------------------------------------------------------

## Code Style Preferences

-   TypeScript preferred
-   Explicit return types in server routes
-   Avoid deeply nested logic
-   Keep functions under 40 lines when possible
-   Separate DB logic into utils/db.ts

------------------------------------------------------------------------

## Goal

Build a clean, maintainable, and extendable MVP. Optimize for clarity
and speed of iteration, not enterprise complexity.
