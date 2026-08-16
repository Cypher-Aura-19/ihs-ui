# Reusable Role UI Implementation Prompt

Use this prompt whenever a new role specification is ready. Copy everything inside the prompt block and paste the new role description beneath it.

## Copy-paste prompt

```text
Implement the complete UI and UX for the role specification pasted below in the existing IHS 2.0 application.

This is an implementation task, not a design proposal or written summary. Inspect the existing workspace, implement the role, and verify the rendered result.

SCOPE

- Work on the product UI layer, role navigation, screens, interactions, client-side workflow behavior, and coherent demonstration data.
- Do not invent backend services, APIs, permissions, or business rules that are absent from the supplied role specification.
- Do not redesign unrelated roles. Shared component improvements are allowed only when they preserve all existing role experiences.
- Preserve existing route names, IDs, working interactions, and functional behavior unless the supplied role flow explicitly requires a change.

MANDATORY DOCUMENTS

Read these files completely before changing code:

1. UI_DESIGN_SYSTEM.md
   This is the mandatory implementation contract for typography, spacing, layout, components, tables, forms, modals, role shells, states, accessibility, data consistency, and responsiveness.

2. DESIGN.md
   Use this only for the Academic Prestige color palette and brand-theme intent. Do not treat it as the complete UI specification.

3. The relevant functional requirements and flow specifications already present in the workspace.

4. The new role specification pasted below.

If the role specification conflicts with visual preferences, the functional role flow wins. Present that flow using UI_DESIGN_SYSTEM.md.

DESIGN DIRECTION

- Product type: regulated enterprise operations console.
- Visual language: Academic Prestige with Fluent-style enterprise hierarchy.
- Design variance: 4/10.
- Motion intensity: 2/10.
- Visual density: 8/10.
- Fonts: Manrope for headings, Inter for UI and body text, Fira Code for IDs and technical values.
- Keep the current light workspace and navy navigation shell.
- Do not introduce another design system, unrelated color palette, serif font, glassmorphism, neon effects, or decorative animation.

ROLE DISCOVERY

Before implementation, extract the following from the pasted role specification:

- Role purpose and authority.
- Authorized data scope.
- Forbidden or read-only areas.
- Sidebar groups and routes.
- Dashboard priorities.
- Features available on each page.
- Records, fields, filters, metrics, and actions.
- Approval or decision responsibilities.
- Workflow entry states, transitions, correction paths, and terminal states.
- Evidence required before each high-impact action.
- Downstream effects and actions that must remain separate.
- Audit, MFA, segregation-of-duty, or claim requirements.
- Loading, empty, filtered-empty, error, unauthorized, disabled, success, and stale states.

Use this extraction as an internal completeness checklist. Do not omit a supplied feature because another role already has a similar page.

ROLE-AWARE APPLICATION SHELL

Create or update a truly role-specific shell:

- Add the role to the existing role simulator if it is not already available.
- Give the role its own dashboard shell.
- Show only navigation groups and pages authorized for this role.
- Hide empty navigation groups.
- Remove quick actions the role cannot perform.
- Update the header title, role label, profile context, dashboard copy, and visible badges.
- Preserve the same global design language while making the information hierarchy match this role's daily work.
- Do not reuse the Platform Admin or COO dashboard unchanged.

DASHBOARD REQUIREMENTS

The dashboard must prioritize the role's real responsibilities from the supplied specification.

Build, when relevant:

- One clear greeting or role context area.
- One primary role action.
- A priority region for decisions, incidents, work, cases, or compliance risk.
- Exact attention counts with drill-down routes.
- Operational or business summaries relevant to the role.
- Department, queue, or workload status where authorized.
- Freshness and scope context.

Every dashboard number must be calculated from the same source records shown after drill-down. Do not hard-code a count separately from its rows.

SIDEBAR PAGE REQUIREMENTS

Implement every page required by the role specification. No placeholder pages and no one-record filler views.

Each page must include:

- Route heading with group, title, concise purpose, and authority or scope context when useful.
- Source-backed metrics.
- Search and relevant filters that actually work together.
- The correct content pattern: compact table, record board, matrix, configuration form, observability panel, case timeline, or decision queue.
- Several coherent records when showing demonstration data.
- Clear owner, state, age or timing, risk, and source identity where applicable.
- Domain-specific actions.
- Loading, populated, empty, filtered-empty, error, unauthorized, and disabled behavior.

Tables must be compact and content-driven. Never use fixed table-body height or leave a large blank rectangle when no rows exist.

WORKFLOW AND MODAL REQUIREMENTS

Do not use one generic review modal for unrelated workflows.

Each approval, review, escalation, correction, publication, payment, payroll, HR, compliance, support, or technical workflow must have its own configuration containing:

- Domain-specific title and icon.
- Governing principle.
- Authoritative source record.
- Relevant evidence fields.
- Required review checklist.
- Only the outcomes permitted by that workflow.
- Required reason or correction note.
- Live downstream-effect preview for the selected outcome.
- MFA confirmation when required.
- Segregation-of-duty protection when required.
- Concurrent-review claim handling when required.
- Domain-specific audit action code and state transition.
- Clear statement of what the decision does not complete.

Examples of separation that must remain explicit:

- Payment approval does not automatically grant access.
- Payroll approval does not mean settlement or payment.
- Delivery approval may create earning and entitlement events but does not pay payroll.
- Commission eligibility may create a payable earning but does not settle it.
- Publication approval applies to a version and must preserve earlier versions.
- Corrections and reversals create new auditable events instead of silently editing history.

Use the supplied role flow to determine the actual separations for this role. Do not copy these examples when they do not apply.

DATA CONSISTENCY

Create one coherent mock-data source for the role's visible records.

- Sidebar badges derive from it.
- Dashboard metrics derive from it.
- Page metrics derive from it.
- Tables and record boards render it.
- Modals open the same source record.
- Search and filters operate on it.
- Decisions update it.
- Audit entries describe the same transition.

Every list page should contain enough realistic records to demonstrate sorting, filtering, different states, risks, owners, and empty-filter behavior. Avoid generic names, duplicate filler rows, fake-perfect metrics, and unrelated random data.

UI QUALITY

Follow UI_DESIGN_SYSTEM.md exactly, including:

- Academic Prestige semantic colors.
- Manrope, Inter, and Fira Code usage.
- 4px sub-grid and 8px primary spacing rhythm.
- 6px controls, 12px panels, and pill badges only.
- Warm low-contrast borders and restrained tinted shadows.
- 72px desktop header and 68px mobile header.
- 280px full sidebar, 76px compact sidebar, and mobile drawer.
- 32px desktop page padding and 16px mobile page padding.
- Compact tables, explicit empty states, and readable forms.
- Visible keyboard focus and WCAG AA contrast.
- One icon family using the project's existing Lucide integration.
- No clipped critical text, wrapped desktop action labels, or page-level horizontal overflow.

RESPONSIVENESS

Explicitly implement and verify:

- Large desktop at 1440px or wider.
- Desktop between 1024px and 1279px.
- Tablet between 769px and 1023px.
- Mobile between 481px and 768px.
- Small mobile at 480px and below.

At mobile sizes:

- Use the off-canvas navigation drawer.
- Collapse primary grids to one column.
- Stack toolbars and action groups.
- Keep touch targets at least 44px where appropriate.
- Allow tables to scroll inside their containers.
- Convert record boards to stacked layouts.
- Use near-full-screen workflow modals with stacked footer actions.
- Wrap critical evidence, risk, and decision text.
- Prevent page-level horizontal scrolling.

ACCESSIBILITY

- Keep semantic heading order.
- Give every icon-only button an accessible name.
- Use visible form labels.
- Associate field errors with inputs.
- Support keyboard navigation across the shell and every workflow.
- Trap modal focus, close with Escape where safe, and return focus to the trigger.
- Use aria-current for active routes and aria-expanded for collapsible navigation.
- Never rely on color alone for state.
- Respect reduced motion.

IMPLEMENTATION PROCESS

1. Audit the current role shells, routes, shared components, and working state.
2. Map every supplied feature and flow to a route or interaction.
3. Implement the role shell and dashboard.
4. Implement all sidebar pages.
5. Implement domain-specific workflows and modal states.
6. Populate coherent source-backed data.
7. Connect all metrics, filters, actions, and drill-downs.
8. Complete responsive and accessibility behavior.
9. Render and inspect desktop and mobile layouts.
10. Fix inconsistencies before reporting completion.

VALIDATION REQUIRED BEFORE COMPLETION

- JavaScript or TypeScript syntax passes.
- No duplicate HTML IDs.
- Every specified sidebar route exists and renders.
- No required feature or workflow is missing.
- No route contains an accidental one-record placeholder.
- Dashboard, sidebar, and route counts reconcile with source records.
- Search and filters work together.
- Every high-impact workflow has distinct evidence, checks, outcomes, effects, and audit behavior.
- Empty tables collapse correctly without large blank space.
- Buttons remain readable and do not wrap at desktop.
- Critical content does not clip on mobile.
- The page shell does not overflow horizontally.
- Keyboard focus is visible.
- Temporary screenshots and test artifacts are removed.

FINAL RESPONSE

Lead with what was implemented. List the role routes, major workflows, and validation performed. Link to the important changed files. Do not provide a proposal when implementation was requested.

ROLE SPECIFICATION STARTS BELOW

[PASTE THE COMPLETE ROLE, FEATURES, PERMISSIONS, PAGES, AND WORKFLOW SPECIFICATION HERE]

ROLE SPECIFICATION ENDS HERE
```

## What to paste below the prompt

Paste the role specification exactly as provided. It is most useful when it contains:

- Role name and business purpose.
- What the role can view, create, edit, approve, reject, escalate, export, or administer.
- What the role cannot access.
- Required dashboard information.
- Required sidebar pages.
- Fields and records shown on each page.
- Workflow steps and allowed status transitions.
- Evidence and approval rules.
- Notifications and audit expectations.
- Mobile or permission constraints that are specific to the role.

Do not summarize away detailed flow rules before pasting them. The implementation agent needs the complete role specification.
