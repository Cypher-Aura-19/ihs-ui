---
name: Academic Prestige
colors:
  surface: '#fff9ee'
  surface-dim: '#dfd9cf'
  surface-bright: '#fff9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3e8'
  surface-container: '#f3ede2'
  surface-container-high: '#eee7dd'
  surface-container-highest: '#e8e2d7'
  on-surface: '#1d1b15'
  on-surface-variant: '#4b4738'
  inverse-surface: '#333029'
  inverse-on-surface: '#f6f0e5'
  outline: '#7c7766'
  outline-variant: '#cdc6b3'
  surface-tint: '#6e5e06'
  primary: '#6e5e06'
  on-primary: '#ffffff'
  primary-container: '#f0d97a'
  on-primary-container: '#6e5e06'
  inverse-primary: '#dcc669'
  secondary: '#77583a'
  on-secondary: '#ffffff'
  secondary-container: '#fdd2ac'
  on-secondary-container: '#78593a'
  tertiary: '#565e74'
  on-tertiary: '#ffffff'
  tertiary-container: '#d1d9f3'
  on-tertiary-container: '#575e75'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fae282'
  primary-fixed-dim: '#dcc669'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#534600'
  secondary-fixed: '#ffdcbe'
  secondary-fixed-dim: '#e8bf9a'
  on-secondary-fixed: '#2c1601'
  on-secondary-fixed-variant: '#5d4124'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#fff9ee'
  on-background: '#1d1b15'
  surface-variant: '#e8e2d7'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

> **Implementation note:** This file is the canonical color and brand-theme reference. All agents must use `UI_DESIGN_SYSTEM.md` for typography usage, spacing, layout, components, tables, forms, modals, role-aware shells, interaction states, accessibility, data consistency, and responsive behavior.

## Brand & Style
The design system is engineered for an "Education-First" aesthetic, balancing the heritage of academic excellence with modern accessibility. The brand personality is authoritative yet welcoming, positioning the product as a premiere institutional resource.

The visual style follows a **Corporate / Modern** approach with **Minimalist** tendencies. It leverages high-contrast typography and a sophisticated metallic palette to evoke a sense of tradition, while maintaining a clean, systematic layout that ensures information density remains manageable and legible for students and educators alike.

## Colors
The color strategy utilizes a "Prestige Palette." **Gold** serves as the primary accent, used sparingly for high-value actions and brand moments to prevent visual fatigue. **Bronze** and **Dark Bronze** provide the structural grounding, often used for borders, secondary buttons, and deep backgrounds.

The core interface sits on a foundation of **Navy** and **Dark Navy** for high-priority navigation and footers, while **Ghost White** and **Azure White** define the workspace surfaces. Text should primarily use **Navy** for headings to maintain a professional weight, and **Slate** for secondary body copy to reduce eye strain during long reading sessions.

## Typography
The typographic scale is designed for deep hierarchy. **Manrope** is used for all headlines to provide a modern, refined character that feels established. **Inter** is the workhorse for all UI elements and body text, chosen for its exceptional legibility at small sizes and its systematic, neutral feel.

For mobile devices, large display headers should scale down to the `headline-lg-mobile` definition to ensure they do not break layout boundaries. Use `label-md` for small metadata, tags, and eyebrow headlines to create clear visual separation from standard body text.

## Layout & Spacing
This design system utilizes an **8px linear grid** to maintain strict mathematical harmony across all components. The layout follows a **Fixed Grid** model on desktop (max-width: 1440px) with 12 columns, and transitions to a fluid model on tablet and mobile.

- **Desktop (1024px+):** 12 columns, 24px gutters, 48px outside margins.
- **Tablet (768px - 1023px):** 8 columns, 16px gutters, 24px outside margins.
- **Mobile (Up to 767px):** 4 columns, 16px gutters, 16px outside margins.

Vertical rhythm is maintained by ensuring all component heights and vertical margins are multiples of the 8px base unit.

## Elevation & Depth
Depth is conveyed through a combination of **Tonal Layers** and **Low-contrast outlines**. This avoids the "heavy" feeling of traditional shadows, keeping the academic interface light and focused.

- **Surface Level 0:** The main background color (Ghost White).
- **Surface Level 1 (Cards):** Pure White with a 1px border in `Azure White` or `Bronze` (at 10% opacity).
- **Surface Level 2 (Modals/Popovers):** Pure White with an extra-diffused ambient shadow: `0 8px 32px rgba(15, 23, 42, 0.08)`.

Interactive elements use a slight lift on hover, achieved by deepening the outline color rather than increasing shadow intensity.

## Shapes
The shape language is structured and professional. While the standard system `rounded-lg` provides a base, this design system mandates a specific **12px corner radius** for all container cards and primary layout sections to maintain consistency with previous IHS iterations.

Smaller UI components like buttons and input fields should use a tighter **6px radius** to appear more precise and "tool-like," contrasting against the softer, more approachable 12px radius of the primary content containers.

## Components
- **Buttons:** Primary buttons use a solid **Bronze** background with **White** text. Secondary buttons use a 1px **Bronze** stroke with **Bronze** text. Tertiary buttons are text-only with the **Gold** color used for the label to indicate interactivity.
- **Chips/Tags:** Use `body-sm` typography. Backgrounds should be `Azure White` with `Slate` text for neutral states, or `Gold` at 20% opacity with `Bronze` text for highlighted states.
- **Input Fields:** 1px border using `Slate` at 20% opacity. On focus, the border transitions to **Bronze** with a 2px outer glow of **Gold** at 30% opacity.
- **Lists:** Use `8px` of vertical spacing between list items. Dividers should be 1px thick using `Azure White`.
- **Cards:** 12px radius, **White** background. Use a subtle top-border (2px) in **Gold** for "featured" or "active" cards to provide clear visual hierarchy.
- **Checkboxes & Radios:** Use **Navy** for the selected state container with a white check/dot. The unselected state should use a 1px **Slate** border.
- **Progress Bars:** Use **Azure White** for the track and a **Gold-to-Bronze gradient** for the fill to signify academic progress and achievement.
