# IHS 2.0 Product UI Design System

Status: Mandatory implementation contract  
Applies to: Every dashboard, sidebar page, table, form, modal, empty state, and responsive layout  
Product: Huzsam IHS LMS Operations Platform  
Design language: Academic Prestige with Fluent-style enterprise information hierarchy  
Version: 1.0

Companion implementation prompt: `ROLE_UI_AGENT_PROMPT.md`

## 1. How agents must use this document

Every agent changing the interface MUST read this entire file before editing UI code.

The authority order is:

1. Functional requirements, role flows, permission rules, and workflow state rules.
2. This file for layout, typography, components, interaction, density, and responsiveness.
3. `DESIGN.md` for brand colors and the original theme intent only.
4. Existing `styles.css` and markup as implementation evidence, not permission to duplicate inconsistent patterns.

When documents conflict, preserve the functional flow and use this document for presentation. Do not invent a new visual language for one page.

### Non-negotiable principles

- One product, one visual system.
- Each role receives a role-specific shell, dashboard, navigation, actions, and data scope.
- The interface is dense, calm, precise, and operational. It is not a marketing site.
- Metrics, tables, cards, and modals MUST read from the same source data.
- Decisions MUST use domain-specific evidence, checks, outcomes, and downstream effects.
- Empty data MUST use a compact empty state. Never create a large blank table body.
- Desktop and mobile behavior MUST be designed together.
- Accessibility and keyboard behavior are completion requirements.
- Do not change route names, field names, role permissions, or workflow state meanings for visual convenience.

## 2. Design direction

Design read: A regulated enterprise operations console for platform, executive, technical, compliance, and support roles. The visual language is authoritative, warm, and highly legible.

Design dials:

| Dial | Value | Meaning |
|---|---:|---|
| Design variance | 4/10 | Structured grids with limited asymmetry for priority areas |
| Motion intensity | 2/10 | State feedback only, no decorative animation |
| Visual density | 8/10 | Compact operational data with clear hierarchy |

The implementation is Fluent-inspired, not an official Fluent UI package. Do not import another design system unless the project is formally migrated as a whole.

## 3. Theme and color contract

`DESIGN.md` is the canonical source for color values. Agents MUST NOT replace the palette or introduce a role-specific theme.

### 3.1 Core semantic tokens

```css
:root {
  --surface: #fff9ee;
  --surface-soft: #fbf6ec;
  --surface-container-lowest: #ffffff;
  --surface-container-low: #f9f3e8;
  --surface-container: #f3ede2;
  --surface-container-high: #eee7dd;
  --surface-container-highest: #e8e2d7;

  --on-surface: #1d1b15;
  --on-surface-variant: #4b4738;
  --navy-dark: #0a1128;
  --navy-medium: #1c2541;
  --navy-light: #2c3e66;
  --slate: #475569;

  --primary: #6e5e06;
  --primary-container: #f0d97a;
  --secondary: #77583a;
  --secondary-container: #fdd2ac;
  --tertiary: #565e74;

  --outline: #7c7766;
  --outline-variant: #cdc6b3;
  --error: #ba1a1a;
  --error-container: #ffdad6;
}
```

### 3.2 Usage rules

- `--surface` is the page canvas.
- `--surface-container-lowest` is the main card, modal, toolbar, and table surface.
- `--navy-dark` is reserved for the application sidebar and high-priority executive decision panels.
- `--navy-medium` is the default heading and strong-value color.
- `--slate` is supporting copy. Do not use it below accessible contrast.
- `--primary` is the academic gold interaction accent.
- `--secondary` is the primary solid button color.
- Gold must be used sparingly for active navigation, focus, counts, and priority indicators.
- Error red is only for errors, destructive actions, SLA breaches, and invalid states.
- Green is only for verified success, healthy status, or completed state.
- Colored dots are only allowed when they communicate a live semantic state.
- Never add neon, purple glow, pure black, or unrelated cool-gray palettes.
- The product uses one light workspace theme. The dark sidebar is a navigation surface, not a separate theme.

### 3.3 Contrast

- Normal text MUST meet WCAG AA at 4.5:1.
- Large text and large icons MUST meet at least 3:1.
- Focus indicators MUST remain visible on cream, white, navy, and bronze surfaces.
- Do not use gold body text on cream backgrounds. Use navy or dark bronze.

## 4. Typography

### 4.1 Font families

The current application font stack is mandatory:

```css
--font-display: 'Manrope', sans-serif;
--font-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'Fira Code', ui-monospace, SFMono-Regular, Consolas, monospace;
```

- Manrope is used for page titles, section titles, card titles, major metrics, and modal titles.
- Inter is used for navigation, body copy, forms, tables, buttons, badges, and helper text.
- Fira Code is used only for IDs, timestamps, technical keys, correlation IDs, code, and machine values.
- Never use a serif font in the product interface.
- Never mix more than these three families.
- If fonts are moved from Google Fonts, self-host the same families and weights. Do not silently substitute fonts.

Current required weights:

- Inter: 400, 500, 600
- Manrope: 600, 700, 800
- Fira Code: 400, 500

### 4.2 Product type scale

| Token | Desktop | Mobile | Weight | Family | Use |
|---|---|---|---:|---|---|
| Display | 42px / 46px | 32px / 36px | 800 | Manrope | Dashboard greeting or critical count |
| Page title | 30px / 35px | 24px / 30px | 750 | Manrope | Route heading |
| Section title | 18px / 24px | 17px / 22px | 700 | Manrope | Major content section |
| Card title | 14px / 19px | 14px / 19px | 700 | Manrope | Record or panel title |
| Body | 13px / 20px | 12px / 19px | 400 | Inter | Descriptions and guidance |
| UI text | 12px / 16px | 12px / 16px | 500 | Inter | Controls and table values |
| Compact text | 10px / 15px | 10px / 15px | 500 | Inter | Secondary table text |
| Metadata | 9px / 12px | 9px / 12px | 650 | Inter | Labels, captions, timestamps |
| Machine data | 10px / 14px | 10px / 14px | 500 | Fira Code | IDs and technical values |

### 4.3 Typography rules

- Page headings use tight tracking between `-0.02em` and `-0.045em`.
- Body text uses normal tracking and a maximum readable width of 65 characters where practical.
- Uppercase is reserved for metadata, group labels, and short context labels.
- Uppercase labels use no more than `0.085em` tracking.
- Button labels use sentence case.
- Do not center operational copy.
- Do not truncate risk, decision, error, or evidence text.
- Navigation and noncritical compact labels may truncate with an accessible full label.
- Do not use decorative em dashes or en dashes. Rewrite the sentence or use a standard hyphen.

## 5. Spacing and sizing

The interface uses a 4px sub-grid and an 8px primary rhythm.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
```

### 5.1 Standard measurements

| Element | Desktop | Mobile |
|---|---:|---:|
| Page padding | 32px | 16px |
| Header height | 72px | 68px |
| Full sidebar width | 280px | Drawer, maximum 300px |
| Compact sidebar width | 76px | Not used |
| Section gap | 16-20px | 12-16px |
| Card padding | 20-24px | 16px |
| Compact panel padding | 12-16px | 12-16px |
| Toolbar padding | 12-14px | 12px |
| Grid gap | 12-16px | 12px |
| Form field gap | 8px | 8px |
| Table cell horizontal padding | 20px | 16px |
| Button gap | 8px | 8px |

### 5.2 Spacing rules

- Use the documented scale. Do not add arbitrary values such as 17px, 29px, or 37px.
- Do not create empty height to make a page appear spacious.
- A container grows with content. Fixed heights are only allowed for the app shell, header, controlled scroll regions, and purpose-built visualization areas.
- Do not set a minimum table body height. An empty table uses an empty state directly beneath its header or replaces the table entirely.
- Nested cards should be avoided. Use dividers and surface tone inside an existing card.
- Adjacent regions with the same hierarchy should share one container and use a divider.

## 6. Shape, border, shadow, and elevation

```css
--radius-sm: 4px;
--radius-control: 6px;
--radius-panel: 12px;
--radius-pill: 9999px;

--shadow-card: 0 1px 2px rgba(24, 35, 60, 0.03), 0 10px 30px rgba(70, 55, 28, 0.045);
--shadow-float: 0 18px 50px rgba(11, 19, 36, 0.14);
```

Rules:

- Inputs, buttons, icon buttons, and compact controls use 6px radius.
- Cards, tables, toolbars, route headings, and major panels use 12px radius.
- Badges and avatars may use full radius.
- Use 1px low-contrast borders to separate most surfaces.
- Use `--shadow-card` only when a surface needs separation from the page canvas.
- Use `--shadow-float` only for modals, popovers, and floating navigation.
- Shadows must be warm or navy-tinted. Never use a heavy pure-black shadow.
- Do not combine a strong border, strong shadow, and strong background on the same component.

## 7. Application shell

### 7.1 Global shell

- The shell fills `100dvh`.
- The main content area is the only primary vertical scrolling region.
- Desktop uses sidebar plus main workspace.
- Header content stays on one line at desktop.
- The header contains route context, freshness, role simulator, notifications, and the active profile.
- Header height must never exceed 72px desktop or 68px mobile.
- Main dashboard content may use a maximum width of 1600px.
- Focused module workspaces use a maximum width of 1540px.

### 7.2 Role-aware shell

Each role MUST have:

- A role-specific dashboard.
- A role-specific navigation tree.
- Only authorized quick actions.
- Role-specific page titles and context.
- Counts derived from the role-scoped data visible to that role.
- No empty navigation groups.

Never show Platform Admin infrastructure actions to COO, Compliance, CTO, or Support unless the functional specification explicitly grants them.

### 7.3 Sidebar

- Background: navy dark.
- Full width: 280px.
- Compact width: 76px between tablet and smaller desktop layouts.
- Mobile: off-canvas drawer, maximum 300px or 86vw.
- Navigation rows use a minimum 40px target height.
- Active navigation uses a gold left edge or outline and a restrained gold-tinted background.
- Icons use one family only. This project uses Lucide through the existing integration.
- Icon size is normally 16-18px with consistent stroke weight.
- Group labels are metadata, not page headings.
- Badges show live counts only. Never hard-code badge totals.

### 7.4 Route heading

Every non-dashboard page begins with one route heading containing:

- Group or breadcrumb label.
- Page title.
- One concise functional description.
- Optional context panel when it communicates authority, scope, or a governing principle.

Do not add a second page title in the first toolbar.

## 8. Layout patterns

### 8.1 Dashboard hierarchy

Use this order:

1. Greeting and one primary action.
2. Global filters when the role needs them.
3. Highest-priority decision or system status region.
4. Attention strip with exact drill-down counts.
5. Operational workbench.
6. Department or supporting status section.

Not every role requires every layer. Remove irrelevant layers instead of leaving empty cards.

### 8.2 Grid rules

- Use CSS Grid for multi-column operational regions.
- Every `minmax()` column must be allowed to shrink with `minmax(0, 1fr)`.
- Multi-column layouts MUST define an explicit mobile collapse.
- Use asymmetric grids only to show priority, such as a larger decision panel next to smaller breakdowns.
- Do not use three identical feature cards as a default layout.
- A grid contains exactly the number of items available. Never leave an empty grid cell.

### 8.3 Panels and cards

Create a card only when it represents one of these:

- A distinct source record.
- A decision region.
- A grouped control set.
- A summary with a direct drill-down.
- A contained workflow step.

Do not wrap a heading, a single sentence, or a lone metric in a card without a functional reason.

## 9. Component specifications

### 9.1 Buttons

| Type | Appearance | Use |
|---|---|---|
| Primary | Solid bronze, white text | One main action in the local region |
| Secondary | White or transparent, bronze border and text | Alternate or cancel action |
| Tertiary | Text only, gold or navy | Low-priority navigation |
| Destructive | Error red, white text | Confirmed destructive operation |
| Icon | 36-40px square | Close, menu, notification, compact utility |

Button rules:

- Desktop label stays on one line.
- Minimum target size is 36px desktop and 44px on touch-first layouts.
- Use one primary action per panel or modal footer.
- Button copy starts with a verb and describes the result.
- Use domain-specific labels such as `Review payment`, not generic `Review` when context can be clearer.
- Disabled buttons remain readable and explain why when the reason is not obvious.
- Active feedback may move the button down by 1px or scale to 0.98.

### 9.2 Forms

Required structure:

1. Visible label above the control.
2. Input, select, checkbox, radio, or textarea.
3. Optional helper text.
4. Inline error below the control.

Rules:

- Standard field height is 38-40px.
- Textareas size to the workflow and may grow vertically.
- Placeholder text is an example, never the only label.
- Required state is communicated in text or programmatically, not color alone.
- Focus uses a bronze border and a restrained gold focus ring.
- Validation occurs at the field and workflow level.
- Preserve field order and names unless the functional flow changes.

### 9.3 Filters and toolbars

- Toolbars use one contained surface with 12-14px padding.
- Search appears first, then filters, then result count, then actions.
- Filters must actually change the visible dataset.
- Search and filter logic must combine, not override one another.
- On mobile, toolbar groups stack and controls become full width.
- Saved-view and export actions remain visually secondary unless they are the page goal.

### 9.4 Metrics

- Metrics are derived from the exact data shown in their drill-down.
- The value is visually dominant. The label and scope note remain readable.
- Use Fira Code for technical runtime metrics and IDs, not for all business KPIs.
- Do not invent percentages, medians, or trends without source records and calculation logic.
- When a metric is a subset, label the subset explicitly.
- A dashboard metric must have a matching route or interaction.

### 9.5 Tables

Tables are for comparable records with stable columns.

- Container height is content-driven.
- Header height is approximately 44px.
- Rows are compact but never below an accessible reading height.
- Use one divider between rows. Do not box every cell.
- Header labels are concise uppercase metadata.
- Primary cell content uses stronger navy text.
- Secondary content appears on the next line in compact slate text.
- IDs use Fira Code.
- Status uses a semantic badge.
- Actions remain in the final column and do not wrap at desktop.
- Use horizontal scrolling when columns cannot collapse safely.
- Keep the first column readable during horizontal scroll when practical.
- Do not hide business-critical columns solely to avoid responsive work.

Empty table behavior:

- Remove artificial table height.
- Show one compact state with a title and helpful next action.
- Match the table width but not a large blank rectangle.
- Distinguish `no records exist` from `no results match filters`.

### 9.6 Record boards

Use a record board instead of a table when each item needs a title, narrative detail, owner, state, timing, and attention signal.

- Desktop uses a primary record area plus aligned metadata columns.
- Mobile stacks the primary area above a two-column metadata grid.
- The full row is clickable only when it opens a read-only detail view.
- Preserve a visible action cue and keyboard focus.

### 9.7 Badges and status

- Badges communicate state, never decoration.
- Use consistent wording across all pages.
- Recommended states include Pending, Active, Ready, In Review, Exception, Blocked, Approved, Rejected, and Recorded.
- Do not use multiple colors for states with the same meaning.
- Provide text alongside color.

### 9.8 Alerts and notices

- Info notice: scope, authority, or process explanation.
- Warning notice: recoverable risk requiring review.
- Error notice: failed or blocked action.
- Success notice: confirmed completion.
- Persistent problems stay inline. Toasts are for transient confirmation.
- Keep notices compact. They should not resemble empty content cards.

### 9.9 Modals

Standard modal:

- Maximum width: 600px.
- Maximum height: 85vh.
- Header and footer remain visually distinct.
- Body scrolls when required.

High-impact workflow modal:

- Maximum width: 980px.
- Maximum height: 92vh.
- Contains a workflow banner, source identity, evidence, required checks, decision controls, downstream impact, and authentication confirmation.
- Uses a domain accent only inside the modal while retaining the global theme.
- Must not use the same content or outcome list for unrelated domains.
- Footer shows claim or authority context and one primary submit action.
- Closing releases temporary claims when no decision was recorded.

All modals MUST:

- Have an accessible title.
- Trap focus.
- Close with Escape unless the operation must be acknowledged.
- Return focus to the trigger.
- Prevent background interaction.
- Keep destructive actions explicit.

### 9.10 Notifications

- Title describes the result.
- Body states what changed and what remains separate.
- Success does not imply downstream completion unless the workflow actually completed it.
- Notifications do not replace an audit event for governed actions.

## 10. Workflow and data integrity UI rules

These rules are part of the design system because the interface must represent system truth.

- One domain record has one authoritative source ID.
- Dashboard counts, sidebar badges, metrics, tables, and modals derive from the same collection.
- Do not maintain a separate hard-coded number for the same concept.
- A decision updates only its authorized source workflow.
- Approval is not the same as activation, settlement, publication, entitlement debit, or payroll payment.
- Downstream effects are displayed before confirmation.
- Every governed decision records actor, timestamp, previous state, new state, reason, evidence scope, and downstream effect.
- Proposers cannot approve their own controlled decision.
- High-impact decisions require recent MFA confirmation.
- Concurrent review uses a claim state and identifies the claimant.
- Corrections create a new event. Do not silently overwrite governed history.

## 11. States every component must support

Every data-bearing component MUST define:

- Loading: skeleton matching the final layout.
- Populated: normal state.
- Empty: no source records exist.
- Filtered empty: records exist but none match current filters.
- Error: retrieval or mutation failed.
- Unauthorized: role cannot access this view or action.
- Disabled: action exists but prerequisites are incomplete.
- Success: mutation completed and the new state is visible.
- Stale: last refresh exceeded the product threshold.

Do not use a generic spinner as the entire page. Do not leave a blank surface while data loads.

## 12. Responsive system

### 12.1 Canonical breakpoints

New components MUST use these breakpoints unless an existing component requires a documented intermediate adjustment:

| Range | Name | Required behavior |
|---|---|---|
| 1280px and above | Large desktop | Full sidebar, full grids, maximum content widths |
| 1024-1279px | Desktop | Compact or full sidebar based on available width, reduced grid columns |
| 769-1023px | Tablet | 76px sidebar, one-column workbench where needed, context panels may hide |
| 481-768px | Mobile | Off-canvas navigation, 16px page padding, single-column primary layout |
| 480px and below | Small mobile | Full-width actions, tighter panel padding, no clipped labels |

Existing intermediate breakpoints such as 700px, 900px, 960px, 1150px, 1240px, and 1260px may remain for specific compositions. Do not add more without a concrete layout failure.

### 12.2 Mobile rules

- Use `100dvh`, not `100vh`, for full-height mobile shells.
- The sidebar becomes a drawer with a scrim.
- The mobile menu button remains keyboard accessible.
- Page padding is 16px.
- Multi-column grids collapse to one column unless a two-column metadata grid remains readable.
- Toolbars stack vertically.
- Buttons become full width when adjacent buttons would wrap.
- Tables scroll horizontally inside their container.
- Record boards collapse to stacked rows.
- Modals use `calc(100vw - 16px)` and `calc(100dvh - 16px)`.
- Modal footer actions stack.
- Critical text wraps. It is never clipped with `overflow: hidden`.
- Touch targets are at least 44px where the interface is touch-first.

### 12.3 Overflow rules

- Set `min-width: 0` on grid and flex children containing text.
- Use `overflow-wrap: anywhere` for IDs, URLs, risk descriptions, and evidence.
- Use ellipsis only for noncritical labels with an accessible full value.
- Never solve overflow by hiding the entire page horizontally.
- A table may scroll horizontally. The page shell must not.

## 13. Interaction and motion

Motion intensity is 2/10.

- Use 160ms for hover, focus, and press feedback.
- Use 260ms for sidebar, drawer, modal, and visibility transitions.
- Animate only opacity and transform where practical.
- Motion must communicate feedback or state change.
- Do not use parallax, marquees, auto-playing carousels, magnetic buttons, or perpetual animation.
- Honor `prefers-reduced-motion: reduce` by removing nonessential animation.
- Loading skeleton movement must stop under reduced motion.

```css
--transition-fast: 160ms cubic-bezier(0.2, 0, 0, 1);
--transition-normal: 260ms cubic-bezier(0.2, 0, 0, 1);
```

## 14. Accessibility

- Use semantic headings in order.
- Every icon-only button has an accessible name.
- Every input has a visible label.
- Every validation message is associated with its field.
- Focus indicators use a 2px visible outline with at least 2px offset when space allows.
- Keyboard users can operate navigation, tables, record rows, filters, modals, and decisions.
- Do not rely on hover for essential information.
- Do not rely on color alone for state.
- Announce asynchronous completion and errors with an appropriate live region.
- Preserve readable zoom at 200 percent.
- At 320px CSS width, core tasks remain usable without page-level horizontal scrolling.
- Modal focus is trapped and restored.
- Use `aria-current` for the active route and `aria-expanded` for collapsible navigation.

## 15. Content and labeling

- Write plain operational English.
- Use the same term for the same entity everywhere.
- Page titles name the business area, not the implementation module.
- Descriptions explain purpose, not visual appearance.
- Action labels describe the domain action.
- Error messages explain what failed and how to recover.
- Empty states explain whether data is absent or filtered out.
- Avoid vague labels such as `Manage`, `Process`, `Action`, or `Review` when a specific verb is available.
- Avoid decorative slogans, poetic labels, fake version numbers, and invented precision.
- Use realistic locale-appropriate names and coherent records in demonstration data.

## 16. Implementation rules for agents

Before editing:

1. Read the relevant functional flow.
2. Identify the active role and authorized scope.
3. Inspect existing reusable classes and tokens.
4. Identify the source data used by every displayed count.
5. Declare desktop and mobile behavior.

While editing:

1. Reuse semantic variables and existing component classes.
2. Extend the system in one documented place.
3. Keep data calculations out of markup strings.
4. Use source-backed metrics and statuses.
5. Build all interaction states.
6. Keep role shells isolated through the existing role state.
7. Avoid inline styles unless a runtime value cannot be represented by a class or token.

After editing:

1. Check JavaScript syntax.
2. Check duplicate IDs.
3. Check every route has records or a deliberate empty state.
4. Check all metrics against their drill-down records.
5. Check domain workflows have distinct evidence, checks, outcomes, and effects.
6. Render at large desktop, tablet, mobile, and small mobile widths.
7. Test keyboard focus and modal behavior.
8. Test loading, empty, error, and unauthorized states.
9. Check for clipped text, wrapped desktop buttons, and page-level horizontal overflow.
10. Remove temporary screenshots and test artifacts.

## 17. Forbidden patterns

Agents MUST NOT introduce:

- A second design system or unrelated component library.
- New colors outside semantic tokens without documentation.
- Generic review modals shared by unrelated workflows.
- Hard-coded dashboard numbers that disagree with source records.
- Empty table bodies with fixed or minimum height.
- Huge blank cards used as empty states.
- Generic three-card feature rows on operational pages.
- Nested cards without hierarchy.
- Pure decorative gradients, glows, or glass effects.
- Serif headings.
- Emoji as interface icons.
- Hand-drawn SVG icon paths.
- Page-level horizontal overflow.
- Critical text truncation.
- Placeholder-only form labels.
- Invisible or low-contrast focus states.
- Destructive actions without confirmation and audit context.
- Approval wording that falsely implies settlement or access activation.
- Silent mutation of governed records.

## 18. Definition of done

A UI change is complete only when all answers are yes:

- Does it use the approved theme and fonts?
- Does it follow the spacing, radius, and elevation system?
- Is it appropriate for the selected role?
- Is every displayed number source-backed?
- Does the drill-down show the records behind the number?
- Does the workflow represent the correct domain states?
- Are loading, empty, filtered empty, error, and success states defined?
- Is the desktop layout clean without artificial empty space?
- Is the mobile layout intentionally collapsed and usable?
- Are controls keyboard accessible with visible focus?
- Do buttons and form text meet contrast requirements?
- Are modal focus, close behavior, claim release, and audit outcomes correct?
- Are there zero duplicate IDs, clipped critical labels, or unexplained hard-coded values?
- Has temporary test output been removed?

If any answer is no, the change is not ready.
