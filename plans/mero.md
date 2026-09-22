# ECOCEE OFFICIAL WEBSITE + MERO PRODUCT LAUNCH PAGE

Redesign the existing official Ecocee website into a **premium, editorial, product-focused technology website** with a dedicated launch experience for **Mero**.

Important: the product name is **Mero**. Keep the spelling exactly as `Mero` everywhere.

The goal is not to make a generic startup website.

The goal is to create a website that feels **high-end, calm, minimal, cinematic, and intentional**, with the product presentation quality of companies such as Apple, but with a completely original Ecocee/Mero identity.

---

# 1. INSPECT THE EXISTING PROJECT FIRST

Before changing anything, inspect:

* Existing Next.js structure
* Current home page
* Header/navigation
* Footer
* Existing design system
* Fonts
* Tailwind configuration
* shadcn components
* Existing animations
* Existing assets
* `public/` folder
* All Mero-related images already available
* Existing routes
* Existing metadata
* Responsive behavior

Do not rewrite the whole project blindly.

Preserve working architecture and reuse existing components where appropriate.

---

# 2. MAIN ECOCEE WEBSITE

The root website `/` is the official Ecocee company website.

It should primarily communicate:

**Ecocee**

and highlight products, technology, and the company.

The navigation should be extremely clean.

Example:

**Ecocee**

Products
Company
Contact

On the right:

**Mero — Launching Soon**

or a similarly restrained launch indicator.

Do not fill the navigation with unnecessary links.

---

# 3. MERO PRODUCT ENTRY

Mero should be the main featured upcoming product.

On the Ecocee homepage, create a premium Mero section.

Example:

**Mero**

A self-hosted software platform built for organizations.

**Launching Soon**

**Explore Mero →**

When the user clicks it:

```text
/mero
```

Do not open a popup.

Do not scroll to another section.

Actually navigate to the dedicated Mero product page.

---

# 4. ECOCEE HOMEPAGE HERO

Create a strong, minimal company hero.

The hero should establish Ecocee without making it look like a generic AI startup.

Use:

* Large typography
* Excellent whitespace
* Restrained animation
* Strong visual composition
* Minimal copy
* Premium transitions

Avoid:

* giant gradients
* AI particles
* floating cards
* excessive glassmorphism
* glowing UI
* excessive rounded boxes
* generic 3D shapes
* stock-style technology imagery

The first screen should feel confident and quiet.

---

# 5. MERO FEATURED SECTION

Create a large premium Mero section on the homepage.

Use the actual Mero assets from:

```text
/public
```

Inspect all available images and use the best ones.

Do not invent placeholder images if real Mero images already exist.

The section should visually introduce Mero as an upcoming product.

Possible copy:

**Mero**

**Your organization's software, running on your own system.**

**Launching Soon**

Then:

**Explore Mero**

Keep copy short.

---

# 6. DEDICATED MERO PAGE

Create:

```text
/mero
```

This page is entirely about Mero.

Do not talk about other Ecocee products here.

Do not make it look like another generic SaaS landing page.

It should feel like a **premium product launch page**.

---

# 7. MERO HERO

Start with a visually powerful hero.

Use the best Mero hardware/product image from the `public` folder.

Large headline:

**Mero**

Then a concise positioning statement.

Example:

**A self-hosted platform for workflows, AI agents, data, and automation.**

Supporting text should explain the product in one or two short sentences.

Primary CTA:

**Launching Soon**

or:

**Explore Mero**

Secondary CTA:

**See how it works**

Keep the hero extremely clean.

---

# 8. SCROLL EXPERIENCE

The `/mero` page should feel like a continuous story.

Do not create a sequence of generic card grids.

Use large visual sections with strong transitions.

Suggested narrative:

### Section 1

Mero introduction

### Section 2

The problem

Organizations have software, data, workflows, and people spread across different systems.

### Section 3

The idea

Mero brings those processes into one self-hosted environment.

### Section 4

The system

Show the Mero hardware and software relationship.

### Section 5

Flows

Show that users can visually create workflows.

### Section 6

Agents

Show AI agents as a practical feature, not as marketing hype.

### Section 7

Data + Knowledge

Explain that Mero can work with organizational data and knowledge.

### Section 8

Self-hosted

Emphasize local deployment and organizational control.

### Section 9

The hardware

Use the Mero hardware imagery prominently.

### Section 10

Product capabilities

Show the major features using visual storytelling rather than a giant feature checklist.

### Section 11

Launching Soon

Strong final brand moment.

---

# 9. FEATURES TO COMMUNICATE

Use the actual Mero product capabilities already implemented/planned.

Important concepts:

* Self-hosted deployment
* Local organizational software
* Workflow builder
* Real executable nodes
* External API connections
* HTTP requests
* HTTP scraping
* MQTT
* Data processing
* Conditional logic
* AI agents
* Knowledge
* Data management
* Teams
* Roles
* Permissions
* Activity
* Insights
* Execution history

Do not present unimplemented functionality as if it already exists.

Only describe features supported by the current product or clearly label future functionality.

---

# 10. HARDWARE STORY

Mero is not just a website.

It is a software platform designed to run locally on dedicated hardware.

Use the existing Mero hardware images from `/public`.

Present the hardware in a premium editorial style.

Possible messaging:

**Software that stays where you run it.**

Then explain the self-hosted model simply.

Do not overload the user with Raspberry Pi technical details.

The product should feel like a finished computing appliance, not a development project.

---

# 11. IMAGES

Inspect `/public` and identify:

* Mero hardware renders
* Logo assets
* Product photography
* Open hardware images
* Any Mero-related visual assets

Use these real assets throughout the page.

Do not repeatedly reuse the exact same image in every section.

Use image cropping, scale, position, and transitions to create visual variety from existing assets.

Optimize all assets for web performance.

Do not use giant unoptimized images unnecessarily.

---

# 12. ANIMATION

Animations should be **subtle and art-directed**.

Use motion for:

* image reveals
* typography entrance
* scroll transitions
* image scaling
* masked reveals
* section transitions
* small parallax
* logo motion
* product focus

Avoid:

* floating UI cards
* particle systems
* AI neural graphics
* constant movement
* excessive blur
* excessive 3D
* flashy effects
* gimmicky cursor effects

Every animation should have a clear purpose.

The page should still look excellent with animations disabled.

---

# 13. TYPOGRAPHY

Use a refined modern sans-serif system.

Create clear hierarchy:

* Huge hero headline
* Medium section headline
* Short body copy
* Small metadata/labels

Do not use giant paragraphs.

Do not use too many font sizes.

Typography should carry much of the visual identity.

---

# 14. LAYOUT

Avoid the typical:

```text
Card
Card
Card
Card
```

landing-page structure.

Instead use:

* Full-width sections
* Large editorial layouts
* Asymmetrical composition where appropriate
* Full-bleed images
* Large product photography
* Strong whitespace
* Clear visual rhythm

Use rounded corners sparingly.

Do not make everything a floating card.

---

# 15. COLOR

Follow the existing Mero visual identity and logo exactly.

Do not randomly recolor Mero assets.

The surrounding website can use a restrained neutral palette that lets the Mero identity stand out.

Do not build the page around excessive gradients.

---

# 16. HEADER

Create a lightweight sticky header.

For Ecocee:

**Ecocee**

Products
Company
Contact

Mero launch CTA.

For `/mero`:

**Mero**

Overview
Flows
Agents
Platform
Hardware

Back to Ecocee.

Keep both headers minimal.

---

# 17. MERO PRODUCT LANGUAGE

Mero should sound like a serious product.

Use simple language.

Good:

**Build workflows. Run agents. Work with your data.**

Good:

**A private software system for your organization.**

Avoid:

**The world's most revolutionary intelligent AI orchestration ecosystem.**

Avoid generic AI buzzwords.

---

# 18. RESPONSIVE DESIGN

The experience must work beautifully on:

* Desktop
* Laptop
* Tablet
* Mobile

On mobile:

* simplify navigation
* preserve image quality
* maintain typography hierarchy
* avoid excessive vertical spacing
* keep animations lightweight
* preserve the story of the page

---

# 19. PERFORMANCE

This is a public production website.

Optimize:

* Images
* lazy loading
* font loading
* animation performance
* bundle size
* unnecessary JavaScript
* layout shifts

Prefer CSS transforms and efficient browser-native animation where possible.

Do not introduce a large animation library unless the project already uses one and it is justified.

---

# 20. SEO + METADATA

Create appropriate metadata.

Ecocee home:

**Ecocee — Technology That Moves Ideas Forward**

Mero:

**Mero — Self-Hosted Software Platform**

Add appropriate descriptions, Open Graph metadata, and social preview support.

---

# 21. FINAL MERO CTA

End the Mero page with a strong but restrained product moment.

Example:

**Mero**

**Launching Soon**

**Built for organizations that want more control over their software.**

Use the Mero logo/product imagery.

Keep the final section visually memorable.

Do not turn it into a pricing/signup section.

---

# 22. IMPORTANT PRODUCT MODEL

Mero is not being presented as a normal SaaS website.

The website is only the **product presentation layer**.

The actual Mero software is a self-hosted system that runs on local hardware.

Therefore the marketing site should communicate:

**Discover Mero → Understand Mero → Explore Mero**

while the actual software remains a separate application experience.

Do not mix the public landing page with the authenticated Mero application.

---

# 23. FINAL QUALITY BAR

The finished website should feel:

**Premium
Minimal
Confident
Editorial
Technical
Human
Memorable**

It should not feel:

**AI-generated
Template-based
Over-designed
Startup-generic
Dashboard-heavy
Card-heavy**

The objective is to create an experience where a visitor sees Mero and immediately understands:

> **This is a real product.**

Not a concept page.

Not an AI demo.

Not a generic SaaS template.

A real software + hardware product with a strong identity.

Before implementation, inspect the existing project and `/public` assets carefully, then build the experience using the existing architecture rather than creating unnecessary parallel systems.
