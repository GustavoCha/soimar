# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static single-file HTML, CSS, and JavaScript, inferred from the supplied functional mockup and retained to avoid unnecessary dependencies.

## Users

- Drivers in Valparaíso and nearby areas who have a chipped, cracked, or broken windshield and need to understand the safest next step quickly.
- Fleet, colectivo, and company operators who need coordinated glass work, formal quotations, and records by vehicle.

## Product Purpose

Help a visitor understand whether their windshield damage may be repairable, contact Soimar with a photo, and plan a workshop visit. The site supports orientation and conversion; it does not make a definitive technical diagnosis.

## Positioning

Soimar combines a fast visual orientation flow with direct workshop access, making the repair-versus-replacement decision easier to understand before the customer travels to the workshop.

## Operating Context

Most visitors arrive with a damaged vehicle, often on a phone, and need an answer quickly. The preferred first step is sending a clear photo by WhatsApp with the vehicle parked and the glass dry. Company customers may need coordinated batches, formal quotations, electronic invoicing, and photographic records.

## Capabilities and Constraints

- Preserve the interactive damage orientation, before/after comparison, service presentation, explorable work gallery, process, company enquiry, reviews, FAQ, and workshop location.
- Preserve the approved diagnostic rules. In particular, a chip larger than a coin and close to the edge returns `replace`.
- The diagnostic result is guidance only. The diagnostic decision table remains pending validation with Soimar.
- Google rating is 5.0 from 2 reviews, verified 2026-10. Do not display it in the hero while there are fewer than 10 reviews.
- OpenFreeMap must retain visible OpenFreeMap and OpenStreetMap attribution.
- No form may simulate a real submission.
- Preview artifacts use `noindex` and must not be deployed to production before Phase 6 is complete and validated.
- Preserve Tailwind Preflight compatibility, base adjustments through `@layer base` when Tailwind is present, 68px scroll padding, minimum 4.5:1 text contrast, a comparator inside a `tabpanel`, and gallery hover only on compatible devices from 761px.
- Do not add the mockup information bar to the final application.
- Domain, coordinates, telephone, opening hours, prices, and other unconfirmed commercial data remain visibly marked as pending or must be omitted from customer-facing claims.

## Brand Commitments

- Name: Soimar Parabrisas.
- Voice: close, transparent, technically precise, and reassuring without sounding like a cold multinational.
- The experience must communicate safety, trust, experience, and professional automotive-glass workmanship.

## Evidence on Hand

- Functional reference mockup: `C:\Users\g.chamorro.soto\Downloads\soimar-mockup 1.html`.
- Confirmed rating evidence: Google 5.0 with 2 reviews, verified 2026-10.
- The mockup contains illustrative SVG scenes and vehicle graphics, not verified photographs of Soimar work.
- No verified customer quotations, prices, certifications, production domain, telephone number, exact coordinates, or authentic job photography were supplied. Future work must not fabricate them.

## Product Principles

1. Make the next safe action obvious within seconds.
2. Demonstrate the repair decision honestly without overstating certainty.
3. Use verified evidence only; label illustrative material and pending facts plainly.
4. Keep every core interaction usable by touch, keyboard, and assistive technology.
5. Prioritize a fast, dependable mobile experience for visitors dealing with a damaged vehicle.

## Accessibility & Inclusion

Target WCAG 2.2 AA fundamentals: text contrast of at least 4.5:1, visible focus, logical heading and tab order, meaningful accessible names, touch targets around 44px or larger, a non-drag alternative for draggable controls, and motion that respects `prefers-reduced-motion`.
