# Build Log — Timon Stores Ltd Website

## 2026-08-26 — Day 1: Project Setup
- Finalized sitemap: 7 pages (Home, About, Products, Distribution, Request a Quote, Investors, Contact)
- Decided on RFQ / inquiry-cart model instead of full e-commerce checkout (business is bulk/B2B distribution, not fixed-price retail)
- Confirmed no dedicated backend needed for this phase — static site + lightweight form handler for RFQ/Contact forms
- Locked color palette: Route Navy #1B2A4A, Harvest Gold #D9A441, Highland Green #1F5C4E, Brick Rust #A84B2F, Sackcloth Sand #EDE3CC, Ink #20211D
- Locked typography: Fraunces (display), General Sans (body), IBM Plex Mono (data/stats)
- Signature design element: gold "supply route" line motif threading through timeline and coverage sections
- Chose stack: Vite (dev/build tool) + vanilla HTML/CSS/JS, static output
- Set up folder structure and initialized GitHub repo

## 2026-08-26 — Core Pages Complete
- Migrated from Vite to Next.js (App Router) + Tailwind CSS
- Built all 7 pages: Home, About, Products, Distribution, Investors, Contact, Request Quote
- Implemented inquiry-cart flow via React Context (InquiryProvider) — persists selected products from Products page into Request a Quote
- Added form validation (name, phone, email required) on RFQ and Contact forms
- Added hero slideshow with prefers-reduced-motion support
- Added route-line motif on About page timeline
- Integrated real photography (Pexels placeholders) across Home, About, Products, Distribution, Investors, Contact