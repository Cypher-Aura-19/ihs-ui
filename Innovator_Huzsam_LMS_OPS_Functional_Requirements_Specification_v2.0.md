---
title: "Innovator Huzsam LMS & Operations System - Functional Requirements Specification"
version: "2.0"
date: "2026-08-10"
format: "Markdown"
scope: "LMS+OPS system only; public website and landing-page requirements excluded"
---

> INNOVATOR HUZSAM

# Innovator Huzsam LMS & Operations System - Functional Requirements Specification

_LMS+OPS System Only | Public website requirements excluded_

> System definition<br>A standalone, testable catalogue of every feature and functionality required for the new IHS platform. The specification covers LMS portal discovery, free learner access, multi-course learning, live and self-paced delivery, K-12, manual payment approval, finance, payroll, HR and departmental operations. Public website, landing page, marketing website, SEO, and website-CMS requirements are intentionally excluded from this version.

| Specification measure | Count |
| --- | --- |
| Feature areas | 20 |
| Functional requirements | 273 |
| Must requirements | 236 |
| Should requirements | 37 |

> Confirmed implementation context<br>Next.js App Router + TypeScript (full stack) \| Supabase (Auth, PostgreSQL, RLS, Storage, Realtime, Queues and Cron) \| Daily.co (live meetings and attendance evidence) \| Resend (transactional email) \| Launch payments: manual payer details and private receipt upload, approved or rejected by permissioned COO/OM/CSR staff.

Version 2.0  |  10 August 2026  |  LMS+OPS-only Markdown specification

## 1. Document Purpose and Control

> Purpose<br>This Functional Requirements Specification (FRS) translates the approved product direction into a complete feature-by-feature functional catalogue. It is intended to support product design, schema/API design, implementation planning, test-case creation, stakeholder review and release acceptance.

| Field | Value |
| --- | --- |
| Document owner | Innovator Huzsam leadership / Product & Technology |
| Version / date | 2.0 / 10 August 2026 |
| Status | Draft for stakeholder and engineering validation |
| Source baseline | Functional Requirements Specification v1.0, updated to remove public website scope and retain only LMS+OPS portal and operational requirements. |
| Scope | LMS+OPS capability areas only: 20 feature areas and 273 functional requirements after removing public website, landing-page, SEO and website-CMS requirements. |
| Excluded detail | The 66 non-functional requirements remain governed by the PRD and engineering quality plan; they are referenced where they constrain behavior but are not duplicated as a second NFR catalogue here. |
| Release model | Parallel clean rebuild with phased migration from the current portal |


> Scope exclusion for v2.0<br>This document intentionally excludes public website, marketing landing pages, About/Founder/Team/Contact pages, SEO, website analytics, website navigation/footer, and website CMS requirements. Portal entry flows such as registration, login, trial request, free learner access, previews, membership renewal and receipt upload remain in scope because they are LMS+OPS product workflows.

### 1.1 Source basis

- Current LMS & Operations System Analysis and Next-System Direction (31 July 2026).

- IHS Portal - Next Development Requirements.

- Innovator Huzsam Scalable LMS & Operations System PRD v1.2 - Next.js, Supabase, Daily.co, Resend and manual payments.

- Confirmed product decisions supplied after the PRD: learner/payer-entered payment details and receipt upload; COO/OM/permissioned CSR approval or rejection; future processor readiness.

### 1.2 Requirement convention

Each testable requirement contains: an immutable requirement ID; a priority; a mandatory functional statement; and implementation/acceptance evidence describing observable behavior. Requirement IDs shall be retained in user stories, design artifacts, test cases, defects and release sign-off.

| Priority | Meaning | Release treatment |
| --- | --- | --- |
| M - Must | Required for the defined product capability, security/control baseline or safe operation. | Cannot be knowingly omitted from the release that claims the capability. |
| S - Should | High-value capability or extensibility/control expected unless explicitly deferred. | Deferral requires an owned decision, impact assessment and target phase. |

### 1.3 Contents and navigation

| Section | Content |
| --- | --- |
| 1 | Document Purpose and Control |
| 2 | System-Wide Functional Model |
| 3 | End-to-End Functional Workflows |
| 4 | Detailed Functional Requirements by Feature |
| 4.1-4.20 | Platform Foundation through Administration and Platform Operations |
| 5 | Cross-Feature States, Notifications and Reporting Controls |
| 6 | Requirement Coverage and Traceability |
| Appendix A | Glossary |
| Appendix B | Review and Sign-off Checklist |

## 2. System-Wide Functional Model

The new system separates identity, catalogue, commerce, enrolment, learning delivery, assessment, communication, finance, payroll, HR and departmental operations. These domains reference one another through explicit identifiers, events and allocations; no single learner, class or payment record is allowed to perform several unrelated jobs.

### 2.1 User and role model

| Role template | Primary scope | Important restriction |
| --- | --- | --- |
| Platform Admin | Identity, role/permission, reference-data, integration and audit administration. | Should not automatically receive payroll, disciplinary, private chat or all learner content access; those require explicit grants. |
| COO | Cross-functional operational oversight, approvals, catalogue/product governance, finance/payroll oversight and departmental dashboards. | Cannot bypass immutable audit, settlement controls or safeguarding policy; segregation of duties should still apply. |
| Operational Manager | Scheduling, trials, enrolments, class review, trainer assignment, entitlements, resources, operational cases and manual payment receipt review/approval. | No unrestricted platform-security administration; refund, broad finance and payroll settlement actions require separate permission and policy. |
| CSR | Prospects, leads, trial requests, follow-ups, assisted enrolment, permission-scoped manual payment receipt review and attributed commission visibility. | May approve or reject submitted receipt evidence within assigned scope and policy; cannot change protected price, membership terms, trainer wages, grades, payroll or broad finance/HR data. |
| Course Creator | Draft course versions, syllabus, lessons, activities, assessments, previews and review submission. | Cannot publish, price or access learner results unless separately assigned as reviewer/trainer. |
| Academic Reviewer | Content review, assessment quality, publication approval and academic policy. | No product pricing, payment, payroll or unrelated learner support access. |
| Trainer / Teacher | Assigned rosters, live classes, attendance corrections, reports, resources, grading, progress and permitted conversations. | Only effective assignments; no unrelated learners, product pricing, payment details or other trainers' payroll. |
| Student / Learner | Own courses, schedule, content, submissions, grades, progress, resources, notes, membership purchase/renewal requests, payment submissions and communications. | No other learner data; payer-only details may be hidden; minor communication follows safeguarding rules. |
| Guardian / Payer | Authorized minor schedule/attendance/reports plus payer membership requests/renewals, payment submissions, invoices and receipts. | No private learner chat/notes or academic detail beyond relationship policy; no access after relationship revocation. |
| Finance / Payroll | Orders, payments, reconciliation, expenses, earning items, payroll runs and settlement. | Academic notes, private chat and content authoring are outside scope except minimum source evidence. |
| HR | Employment profiles, onboarding/offboarding, documents, letters, sensitive HR events and salary agreements. | No learner academic/financial data except where staff is also separately assigned another role. |
| Media Head / Editor | Media work assignment, submission, review, ratings, assets and related earnings. | No learner/finance/HR access beyond own pay statement and explicitly shared media assets. |
| CTO / Developer | Development work tracking, testing, deployment and technical platform operations as assigned. | Production personal data and business-admin access are not implied by developer role; support access must be controlled and audited. |
| Investor / Executive Viewer | Read-only management analytics and approved reports. | No record mutation, unrestricted export or automatic access to personal/sensitive details. |

> Authorization principle<br>Roles are reusable permission templates. One account may hold several effective, scoped role assignments. Every action also checks object relationship, record state and field sensitivity; missing scope defaults to deny.

### 2.2 Confirmed technology responsibilities

| Component | Selected technology | Product responsibility | Mandatory boundary |
| --- | --- | --- | --- |
| Full-stack web application | Next.js App Router + TypeScript | Authenticated LMS+OPS portals, permitted guest portal routes, Server Components, Server Actions, Route Handlers and the browser-facing application layer. | All mutations call domain/application services; Server Actions and Route Handlers perform authorization and input validation. |
| Backend platform | Supabase | Auth, PostgreSQL, RLS, Storage, Realtime, Queues, Cron and optional Edge Function workers. | PostgreSQL is the source of truth; service-role access is server-only; every exposed table/view and Storage object is policy-protected. |
| Live meetings | Daily.co | Private class rooms, participant tokens, trainer/learner join experience and provider attendance evidence. | Daily identifiers/events are normalized through an adapter; attendance is reconciled before business approval, credit or pay. |
| Transactional email | Resend | Authentication email delivery, application email, delivery/bounce/complaint events and template rendering. | Email is sent from durable notification jobs; delivery status never becomes the source of enrolment, payment or class state. |
| Payments (launch / future) | Next.js + Supabase PostgreSQL/Storage/RLS at launch; future processor adapter | Membership purchase/renewal request, payer-entered payment details, private receipt evidence, COO/OM/CSR review, approved transaction/allocation and future online checkout. | Submitted evidence never activates access. Approval atomically posts internal payment/allocation records; provider state, when added, is normalized and never owns membership truth. |

### 2.3 Functional domains and ownership

| Domain | Owns | Source of truth for |
| --- | --- | --- |
| Identity & access | Account, auth identity, profile, role/permission assignment, staff/learner/guardian relationship. | Authentication, account lifecycle and authorization facts. |
| Catalogue & content | Course, course version, syllabus hierarchy, content node, activity, resource link, assessment definition, preview. | What can be taught/learned and the immutable version used. |
| Commerce & membership | Product, variant, price, membership request/order, manual payment submission/evidence/review, payment transaction, refund/reversal, term, access grant and entitlement ledger. | What was requested, evidenced, approved and paid, and what access/service it grants. |
| Enrolment | Enrolment, cohort/run, trainer assignment, source attribution, enrolment state/history. | Who is academically associated with which version/run. |
| Live delivery | Occurrence, participant, meeting/provider event, attendance, trainer report, delivery approval. | What was scheduled and actually delivered. |
| Learning & assessment | Progress events, quiz attempts, submissions, rubrics, grades, feedback and gradebook. | What the learner did and achieved. |
| Communication | Conversation, message, notification, case, SLA and delivery attempts. | Who communicated about what and whether delivery/escalation succeeded. |
| Finance & payroll | Finance transaction, expense, rate agreement, earning item, payroll run/line/settlement. | Money and staff pay, independently auditable. |
| Operations extensions | HR documents/letters, Media work/review, Development items/releases, audit/jobs/configuration. | Cross-company operational workflows and governance. |

### 2.4 Core business relationships

| Relationship area | Required relationship |
| --- | --- |
| Identity | Person -> Account -> one or more authentication identities and role assignments. |
| Learning | Person -> Learner Profile -> many Enrolments -> one course version/run each. |
| Commercial access | Product/Price -> Request/Order -> Approved Payment/Allocation -> Membership Term or Access Grant. |
| Live delivery | Course Run/Cohort -> many Occurrences -> many Participant records -> Attendance and Delivery Review. |
| Learning evidence | Enrolment -> Progress Events, Attempts, Submissions, Grades and Gradebook. |
| Compensation | Approved source -> one Earning Item -> Payroll Run/Lines -> Settlement -> Finance posting. |
| Communication | Valid relationship/context -> Conversation/Case -> Messages/Events -> Notifications/Delivery Attempts. |

### 2.5 Mandatory cross-domain invariants

- One learner profile may have many enrolments; a programme/course is never a single field on the person or account.

- A receipt submission is evidence awaiting review; only an approved transaction/allocation can activate a term or entitlement.

- Published course versions, historical prices, term conditions, grades, rate snapshots and settled records are not edited in place.

- One live occurrence may have many participants, and each participant owns independent attendance and entitlement outcomes.

- One approved work or commission source creates at most one original earning item, reserved by at most one active payroll run.

- Every high-value transition is authorized, transactional, idempotent where applicable and recorded in immutable audit history.

- Private files are usable only after Storage object, database metadata, authorization and validation state are reconciled.

### 2.6 Feature inventory

| # | Code | Feature area | Total | Must | Should |
| --- | --- | --- | --- | --- | --- |
| 01 | FND | Platform Foundation | 10 | 9 | 1 |
| 02 | IAM | Identity, Authentication and Authorization | 17 | 15 | 2 |
| 03 | PORT | Learner Portal Catalogue and Free Users | 9 | 8 | 1 |
| 04 | CAT | Catalogue, Content Authoring, Products and Pricing | 15 | 13 | 2 |
| 05 | COM | Commerce, Manual Payments and Memberships | 15 | 14 | 1 |
| 06 | ENR | Enrolment and Learner Relationships | 12 | 11 | 1 |
| 07 | LIVE | Live Classes and Trial Delivery | 20 | 18 | 2 |
| 08 | MILE | Milestone-Based Self-Paced Learning | 15 | 12 | 3 |
| 09 | K12 | K-12 Tuition | 14 | 12 | 2 |
| 10 | ASM | Assessments, Submissions and Gradebook | 17 | 14 | 3 |
| 11 | RES | Resources and Media Assets | 12 | 11 | 1 |
| 12 | MSG | Communication, Cases and Notifications | 15 | 12 | 3 |
| 13 | DSH | Role Dashboards and Analytics | 15 | 13 | 2 |
| 14 | FIN | Finance | 14 | 12 | 2 |
| 15 | PAY | Payroll and Compensation | 16 | 15 | 1 |
| 16 | HR | HR Profiles, Documents and Letters | 12 | 10 | 2 |
| 17 | CSR | CSR Enrolments and Commission | 9 | 8 | 1 |
| 18 | MED | Media Department Operations | 13 | 11 | 2 |
| 19 | DEV | Development Department Operations | 11 | 8 | 3 |
| 20 | ADM | Administration and Platform Operations | 12 | 10 | 2 |

## 3. End-to-End Functional Workflows

These workflows show how feature modules collaborate without collapsing their records into one table or status. Each step must preserve the source domain, use explicit references and emit auditable events for dependent work.

### 3.1 Learner-portal discovery, registration and free access

Participating features: PUB - Learner Portal Catalogue and Free Users, IAM - Identity, Authentication and Authorization, CAT - Catalogue, Content Authoring, Products and Pricing, RES - Resources and Media Assets, MSG - Communication, Cases and Notifications

1. Prospect opens a published programme, course, service or free-resource page.

2. The LMS portal applies content access policy: guest-visible, account-required preview or paid-only.

3. Registration uses verified email/password or Google through Supabase Auth; existing identities are linked instead of duplicating the person.

4. The application creates a free learner profile and free-access grant, not a membership or payment.

5. Eligible preview progress is stored by learner and course/content version.

6. Calls to action preserve selected-offering, source and consent context for trial, callback or membership request.

### 3.2 Trial request, scheduling and follow-up

Participating features: PUB - Learner Portal Catalogue and Free Users, CSR - CSR Enrolments and Commission, LIVE - Live Classes and Trial Delivery, IAM - Identity, Authentication and Authorization, MSG - Communication, Cases and Notifications

1. A logged-in or newly registered prospect submits programme interest, timezone, availability, contact preference and placement information.

2. The trial request remains separate from the scheduled class occurrence.

3. CSR/Operations qualifies the request, selects an offering, trainer and slot, then creates a live trial occurrence and participant.

4. Daily.co provisioning and reminder jobs run through the normal live-class and notification foundations.

5. Attendance and trainer educational notes are recorded through the live-delivery workflow.

6. Trial completion automatically creates/updates a CSR follow-up and retains conversion attribution.

### 3.3 Course authoring, academic review and publication

Participating features: CAT - Catalogue, Content Authoring, Products and Pricing, ASM - Assessments, Submissions and Gradebook, RES - Resources and Media Assets, MILE - Milestone-Based Self-Paced Learning, K12 - K-12 Tuition

1. Course Creator opens a draft version and selects live, milestone, K-12 or approved future delivery type.

2. Metadata, hierarchy, outcomes, completion, release and prerequisite rules are configured.

3. Resources and assessments are linked by versioned reusable references.

4. The version is submitted for academic review; blocking comments and checklist items must be resolved.

5. Authorized publication makes only the approved version visible and purchasable; existing learners retain their original version.

6. Portal catalogue views and learner catalogues update from the shared published source.

### 3.4 Initial membership or renewal with manual payment

Participating features: CAT - Catalogue, Content Authoring, Products and Pricing, COM - Commerce, Manual Payments and Memberships, FIN - Finance, ENR - Enrolment and Learner Relationships, RES - Resources and Media Assets, MSG - Communication, Cases and Notifications, DSH - Role Dashboards and Analytics

1. Learner/payer selects the product or eligible renewal and confirms beneficiary, term, price, currency and payment instructions.

2. Payer enters transfer details and uploads receipt evidence to private Supabase Storage.

3. Submission creates a versioned record in the manual-payment queue but grants no access, credits, enrolment activation or commission.

4. Permissioned COO/OM/CSR claims the record, validates evidence and approves, rejects or requests correction.

5. Approval atomically creates payment transaction, allocation, official receipt and membership/access term; rejection preserves evidence and reason.

6. Enrolment activation, trainer/schedule assignment and entitlement opening occur through separate linked workflows.

7. Resend/in-app notifications and Finance reconciliation update from durable events.

### 3.5 Multi-course enrolment and activation

Participating features: ENR - Enrolment and Learner Relationships, COM - Commerce, Manual Payments and Memberships, CAT - Catalogue, Content Authoring, Products and Pricing, LIVE - Live Classes and Trial Delivery, MILE - Milestone-Based Self-Paced Learning, K12 - K-12 Tuition, DSH - Role Dashboards and Analytics

1. A verified allocation or authorized access grant identifies learner, course version/run and delivery model.

2. Eligibility, capacity, duplicate/repeat policy and required relationships are validated.

3. A new independent enrolment is created in Pending state with its own progress and entitlement context.

4. Live enrolments receive effective-dated trainer/cohort/schedule assignments; self-paced enrolments receive content-release context.

5. The enrolment becomes Active when all required commercial and operational conditions are satisfied.

6. The learner sees it in the All Courses dashboard and opens a delivery-specific workspace.

### 3.6 Live class from scheduling through approval

Participating features: LIVE - Live Classes and Trial Delivery, ENR - Enrolment and Learner Relationships, COM - Commerce, Manual Payments and Memberships, PAY - Payroll and Compensation, ASM - Assessments, Submissions and Gradebook, RES - Resources and Media Assets, MSG - Communication, Cases and Notifications

1. Occurrence and participant records are created after conflict and availability validation.

2. Daily.co private room provisioning runs asynchronously and reminder jobs are scheduled in recipient timezones.

3. The join endpoint issues short-lived room tokens only to eligible assigned participants/staff within the permitted window.

4. Signed Daily events are reconciled into per-participant attendance intervals and duration.

5. Trainer submits syllabus coverage, progress, homework, notes and justified corrections.

6. Operations approves or rejects the delivery record with immutable decision evidence.

7. Approval emits separate entitlement debit/reversal eligibility, progress, payable earning and notification events.

### 3.7 Milestone learning, submissions and progress

Participating features: MILE - Milestone-Based Self-Paced Learning, ASM - Assessments, Submissions and Gradebook, RES - Resources and Media Assets, ENR - Enrolment and Learner Relationships, DSH - Role Dashboards and Analytics, MSG - Communication, Cases and Notifications

1. The learner opens the next available activity after access, release and prerequisite evaluation.

2. Content interactions, quiz attempts, assignment/voice submissions and manual reviews create granular events.

3. Completion rules update the lesson/milestone/level summary and determine the next unlock.

4. The learner can resume the last meaningful position and see remaining work, grades and feedback.

5. Stalled progress, repeated failures or overdue work can create intervention tasks/notifications.

6. Completion and certificate eligibility are calculated independently from access expiry.

### 3.8 K-12 subject bundle, teaching and reporting

Participating features: K12 - K-12 Tuition, CAT - Catalogue, Content Authoring, Products and Pricing, COM - Commerce, Manual Payments and Memberships, ENR - Enrolment and Learner Relationships, LIVE - Live Classes and Trial Delivery, ASM - Assessments, Submissions and Gradebook, MSG - Communication, Cases and Notifications

1. A subject product grants one subject enrolment; a bundle creates separate child subject entitlements/enrolments.

2. Verified guardian/payer permissions determine payment, schedule, attendance and report visibility.

3. Learner is assigned to subject sections and term calendars; live occurrences use the shared Daily.co model.

4. Teacher assigns syllabus-aligned homework and assessments under grading-period/category rules.

5. Published grades and attendance feed progress reports/report cards.

6. Promotion creates a new grade/subject-version relationship without rewriting prior results.

### 3.9 Case, conversation and notification lifecycle

Participating features: MSG - Communication, Cases and Notifications, RES - Resources and Media Assets, IAM - Identity, Authentication and Authorization, DSH - Role Dashboards and Analytics

1. A valid relationship exposes a contextual conversation or allows submission of a categorized case.

2. RLS and application checks control participants, attachments and minor-safeguarding restrictions.

3. Cases route to owners with priority, SLA, waiting and escalation states.

4. Business events create durable in-app/email notification intents and idempotent Resend attempts.

5. Delivery outcomes and suppression update operational views but never alter the source business record.

6. Resolution, closure, retention, search and export remain permission-controlled and auditable.

### 3.10 Approved work to payroll settlement

Participating features: LIVE - Live Classes and Trial Delivery, CSR - CSR Enrolments and Commission, MED - Media Department Operations, PAY - Payroll and Compensation, FIN - Finance, HR - HR Profiles, Documents and Letters

1. Approved delivery, verified commission or approved Media work emits a globally unique earning source.

2. The effective rate/salary/commission rule is snapshotted into one immutable earning item.

3. A payroll draft atomically reserves eligible items and adds authorized salary, bonus, tax, deduction, fine, advance or adjustment lines.

4. Gross and net are calculated deterministically and routed to an independent approver.

5. Settlement creates the pay record, Finance posting and pay statement.

6. Corrections use reversal/adjustment items; source class/task status and historic statements remain unchanged.

### 3.11 HR document and offboarding lifecycle

Participating features: HR - HR Profiles, Documents and Letters, IAM - Identity, Authentication and Authorization, RES - Resources and Media Assets, PAY - Payroll and Compensation, ADM - Administration and Platform Operations

1. HR maintains the employment profile and verified onboarding evidence separately from the login account.

2. Official letters/certificates are generated from an approved template version and merge-field snapshot.

3. Issue creates a private document and timeline event identifying type, issuer, reason, date and status.

4. Disciplinary or sensitive records follow restricted review and decision workflows.

5. Offboarding revokes sessions/roles and surfaces open work/payroll exceptions while preserving lawful history.

### 3.12 Media and Development departmental operations

Participating features: MED - Media Department Operations, DEV - Development Department Operations, DSH - Role Dashboards and Analytics, PAY - Payroll and Compensation, RES - Resources and Media Assets

1. Department leadership creates scoped assignments with owner, priority, deadline, brief and evidence expectations.

2. Assignees update progress and submit versioned evidence or deliverables.

3. Review/testing/revision outcomes are recorded with comments and decision history.

4. Approved Media work creates an independent earning item; Development deployment records release/environment outcome.

5. Department dashboards replace spreadsheet/verbal reporting with workload, quality, blockers and completion evidence.

## 4.1 Platform Foundation

> FEATURE 01  \|  FND  \|  10 FUNCTIONAL REQUIREMENTS

Provide the common functional foundations that keep identities, courses, commerce, delivery, finance and departmental operations independent, explainable and extensible as the platform grows.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Platform Admin, CTO, authorized domain owners, background workers and integration operators. |
| Owned / primary records | Immutable entity identifiers, reference numbers, versions, snapshots, ledgers, workflow decisions, outbox jobs, provider references, archive records and optional organisation scope. |
| Dependencies and confirmed technology | Next.js App Router, Supabase PostgreSQL/RLS/Queues/Cron, typed Daily.co and Resend adapters, and future provider adapters. |
| Requirement count | 10 total: 9 Must and 1 Should |

### 4.1.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Modular product structure | FND-001 to FND-002 | Define the modular-monolith boundary and stable identifiers used by every business object. |
| Historical truth and auditable state | FND-003 to FND-005 | Version changing definitions, use append-only histories and represent sensitive transitions as explicit decisions. |
| Extensible roles, providers and background work | FND-006 to FND-008 | Support scoped multi-role users, provider abstraction and durable asynchronous processing. |
| Lifecycle and future organisation scope | FND-009 to FND-010 | Preserve records through archive/reversal states and remain ready for a branch boundary if approved. |

### 4.1.2 Principal workflows

#### Cross-domain command and side effect

1. A Next.js action or handler authenticates the account, resolves scope and validates input.

2. The owning domain performs the authoritative write in one Supabase PostgreSQL transaction.

3. The same transaction writes an outbox event with an idempotency and correlation key.

4. Queue/Cron workers deliver dependent work such as notifications, meeting provisioning or read-model refresh.

5. Retries are safe; terminal failures enter an owned exception queue without corrupting the source record.

### 4.1.3 States and lifecycle

> Required state behavior<br>Records use draft, active/published, paused/suspended, archived/cancelled or reversed states according to domain policy. Financial, payroll and approval history is corrected by compensating records rather than deletion.

### 4.1.4 Business rules, permissions and validation

- No React component or provider payload is allowed to become the source of a business rule.

- Cross-domain links use immutable internal identifiers; human-readable references are display/search aids only.

- Every balance or sensitive decision must be reconstructable from its ledger or transition history.

- Third-party unavailability must not make internal records meaningless or unrecoverable.

- Organisation/branch scope is introduced only through a deliberate tenancy decision, not ad hoc columns.

### 4.1.5 Outputs, notifications and reporting

Audit events, outbox jobs, exception queues, correlation identifiers, entity timelines and architecture-level operational health views.

### 4.1.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| FND-001 | Must | The platform shall be implemented as a TypeScript Next.js App Router modular monolith with explicit domain modules for Identity, Catalogue, Commerce, Enrolment, Learning Delivery, Assessment, Communication, Finance, Payroll, HR and departmental operations. | Routes/components call domain application services and a data-access layer; module ownership and Supabase database objects are documented; cross-domain writes use transactional services/events rather than direct component-level table coupling. |
| FND-002 | Must | Every primary business entity shall use an immutable internal identifier and may also have a human-readable reference number. | Internal UUID/ULID keys are never reused; display references such as ENR- or ORD- are generated centrally, unique and not relied on as foreign keys. |
| FND-003 | Must | The system shall preserve historical truth by versioning commercial, academic and compensation data that can change over time. | Published course versions, prices, membership terms, trainer rate agreements, grading schemes and assessment items retain effective dates and immutable snapshots on transactions. |
| FND-004 | Must | The system shall use append-only ledgers or event histories for money, entitlement, payroll and other explainable balances. | A displayed balance can be reconstructed from grants, debits, reversals and adjustments; corrections do not overwrite or delete the source transaction. |
| FND-005 | Must | Sensitive state transitions shall be represented by explicit workflow records rather than overloaded status fields. | Approvals, manual payment review/settlement, entitlement changes, payroll settlement and grade publication store actor, time, decision, reason and prior/new state. |
| FND-006 | Must | The platform shall support multiple active roles and scoped assignments for one account. | One person can be both staff and learner or hold several staff responsibilities; permissions can be scoped by organisation, department, course, cohort, enrolment or assigned record. |
| FND-007 | Must | Daily.co, Resend, future payment processors and other third-party capabilities shall be accessed through typed provider adapters; Supabase access shall be centralized through approved browser, server and admin data modules. | Launch manual payments remain an internal Commerce workflow. Provider SDKs/API payloads do not appear in core course, finance or payroll entities; adapter contract tests demonstrate normalized identifiers, errors, retries and replacement boundaries. |
| FND-008 | Must | All asynchronous side effects shall use a transactional outbox and durable Supabase Queue/Cron worker mechanism. | The source change and outbox commit together; Edge Function or approved worker consumes jobs idempotently; Daily synchronization, Resend email, reminders, media, exports and reconciliation expose retries, terminal failure and manual replay. |
| FND-009 | Must | Operational records shall use archive, suspend, cancel or reverse states instead of destructive deletion wherever legal or financial history exists. | Learners, enrolments, classes, graded work, transactions and payroll records remain auditable; deletion is restricted to eligible drafts or approved privacy workflows. |
| FND-010 | Should | The data model shall be capable of adding an organisation or branch boundary without redesigning every entity. | A documented tenancy strategy exists. If multi-branch is approved for launch, every scoped table and authorization policy includes organisation_id from day one. |

## 4.2 Identity, Authentication and Authorization

> FEATURE 02  \|  IAM  \|  17 FUNCTIONAL REQUIREMENTS

Securely register, authenticate, provision and authorize free users, learners, guardians, trainers and staff while allowing future roles and identity providers.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Prospect, learner, guardian/payer, trainer, staff invitee, Platform Admin, COO/Operations, security reviewer and support administrator. |
| Owned / primary records | Supabase Auth identity, IHS account, person profile, linked identity, role template, permission, scoped role assignment, MFA factor, session, invitation and security event. |
| Dependencies and confirmed technology | Supabase Auth and RLS, @supabase/ssr, Next.js OAuth callback and protected actions, Resend authentication/security email. |
| Requirement count | 17 total: 15 Must and 2 Should |

### 4.2.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Self-service registration and linked identities | IAM-001 to IAM-005 | Email/password and Google sign-in, future-provider readiness, safe identity linking and account recovery. |
| Privileged and staff onboarding security | IAM-006 to IAM-007 | MFA for sensitive roles and invitation-based staff/trainer provisioning without shared passwords. |
| Roles, scopes and high-risk authorization | IAM-008 to IAM-011 | Reusable permissions, object scopes, dual application/RLS enforcement and step-up authentication. |
| Sessions, lifecycle, monitoring and secrets | IAM-012 to IAM-017 | Secure cookie sessions, account states, security history, suspicious-activity controls, server-only credentials and default-deny behavior. |

### 4.2.2 Principal workflows

#### Self-service signup and activation

1. The prospect selects verified email/password or Google sign-in.

2. Supabase Auth verifies the identity and the Next.js callback validates the redirect/session.

3. The application links or creates one IHS account/person and free learner profile without creating a paid membership.

4. The user accepts applicable policies and reaches the permitted free-user dashboard.

#### Staff invitation and activation

1. An authorized manager creates the staff/employment profile and proposed role assignments.

2. A server-only Supabase Auth admin client sends a time-limited invitation through the approved email path.

3. The recipient verifies identity, sets credentials, completes required profile/policies and enrolls MFA.

4. Access activates only after onboarding and role approval requirements are satisfied.

### 4.2.3 States and lifecycle

> Required state behavior<br>Pending verification, Invited, Active, Locked, Suspended and Deactivated. Each state defines sign-in, recovery and access behavior; suspension/deactivation never deletes business history.

### 4.2.4 Business rules, permissions and validation

- One external identity subject maps to one IHS account unless an explicit, audited merge/link flow is used.

- A user cannot unlink the last viable sign-in/recovery method.

- All protected server reads and writes enforce authorization even when the UI hides an action.

- Supabase RLS independently denies unauthorized row and Storage access.

- New routes, roles and permissions are inaccessible until explicitly granted.

### 4.2.5 Outputs, notifications and reporting

Verification, invitation, recovery and security emails; role/permission audit events; session/device history; suspicious-activity flags and account-security views.

### 4.2.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| IAM-001 | Must | Prospects and free learners shall be able to register through Supabase Auth with verified email and password. | Supabase verifies the email and applies rate/password controls; the post-verification application service creates or links the account/person/free-learner profile without creating a paid membership. |
| IAM-002 | Must | Prospects, free learners and other permitted portal users shall be able to sign in with Google through Supabase Auth OAuth. | The Next.js callback completes the secure session exchange and explicit account-linking rules prevent duplicate people/learners; redirect destinations are allow-listed and identity changes are audited. |
| IAM-003 | Should | The identity model shall support adding passwordless email, phone OTP, Apple or other providers later. | Authentication identities are stored separately from account and person records; adding a provider does not require a new learner profile. |
| IAM-004 | Must | Users shall be able to link and unlink authentication methods safely. | Linking requires recent authentication and provider verification; unlinking is blocked when it would leave no recovery/sign-in method; all changes are audited. |
| IAM-005 | Must | The platform shall support secure self-service password reset and account recovery. | Reset tokens are single-use, short-lived and rate-limited; security notifications are sent; staff recovery follows stronger policy for privileged roles. |
| IAM-006 | Must | Privileged staff roles shall use Supabase Auth multi-factor authentication with an approved factor such as TOTP. | Admin, COO, Operations, Finance, HR and sensitive permission/export roles cannot activate or execute designated high-risk actions without enrolled and verified MFA; tests cover assurance downgrade and recovery. |
| IAM-007 | Must | Staff and trainer accounts shall be provisioned through a server-side Supabase Auth invitation workflow rather than a permanent administrator-known password. | An authorized application service creates the staff profile and time-limited invitation through the server-only admin client; the recipient verifies identity, sets credentials, accepts policies and enrolls MFA before activation. |
| IAM-008 | Must | The system shall use granular permissions grouped into reusable role templates. | Roles are collections of permissions, not hard-coded route names; administrators can add future roles without schema changes or code duplication for common access rules. |
| IAM-009 | Must | Permission assignments shall support object and scope restrictions. | A trainer sees only assigned course runs/enrolments; a course creator can author assigned catalogues; a CSR sees owned/assigned prospects; finance access is separately granted. |
| IAM-010 | Must | Every Next.js Server Action, Route Handler and protected server read shall enforce application authorization, while Supabase Row Level Security independently protects all exposed rows and Storage objects. | Direct Data API/Storage access and crafted action/API requests cannot bypass role, scope, learner/guardian, assignment or field rules; automated policy tests use multiple accounts and service contexts. |
| IAM-011 | Must | High-risk actions shall require step-up authentication or recent re-authentication. | Permission changes, payroll settlement, manual payment exception approval, refunds, bulk exports, account recovery and sensitive profile changes prompt for MFA/re-authentication within a configured window. |
| IAM-012 | Must | Supabase Auth sessions shall be managed through @supabase/ssr secure cookies and server-side session validation. | Browser/server clients are separated; session refresh is handled by the approved Next.js boundary; users can revoke sessions, risk-based timeouts apply and sensitive operations require recent re-authentication/MFA. |
| IAM-013 | Must | Account states shall include invited, active, suspended, locked, deactivated and pending-verification. | Each state has defined sign-in behavior and permitted recovery actions; suspension/deactivation requires a reason and never removes historical business records. |
| IAM-014 | Must | Administrators shall be able to review an account security history. | Authorized reviewers can see sign-ins, failed attempts, MFA events, identity links, recovery events, permission changes and device/session revocations. |
| IAM-015 | Should | The platform shall support risk-based controls for suspicious activity. | Configurable rate limits, bot protection, breached-password checks, IP/device signals and anomaly flags can challenge or temporarily lock risky requests. |
| IAM-016 | Must | Supabase service-role credentials, Daily.co credentials, Resend credentials and future provider secrets shall be distinct from human identities and usable only in approved server/worker contexts. | Client bundles and logs contain no secret; imports prevent admin modules from entering client code; secrets are environment-scoped, least-privileged where supported, rotated and access-audited. |
| IAM-017 | Must | Authorization decisions shall default to deny. | New roles, routes, APIs and records are inaccessible until an explicit permission and policy are defined; missing scope cannot broaden access. |

## 4.3 Learner Portal Catalogue and Free Users

> FEATURE 03  \|  PORT  \|  9 FUNCTIONAL REQUIREMENTS

Let prospects and registered free learners discover IHS offerings inside the LMS portal, access approved free material, save preview progress, request contact or a trial and enter a membership flow without first becoming a paying client.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Guest prospect, registered free learner, prospective payer/guardian, CSR and catalogue owner. |
| Owned / primary records | Published portal catalogue view, access policy, preview item, free-access grant, preview progress, consent record, lead/callback request, source attribution and selected-offering context. |
| Dependencies and confirmed technology | Next.js App Router authenticated and guest portal routes, Supabase catalogue/free-grant data, Supabase Auth, Resend follow-up/confirmation email. |
| Requirement count | 10 total: 8 Must and 2 Should |

### 4.3.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Catalogue discovery and previews | PORT-001 to PORT-005 | Browse, classify access, create free grants, save preview progress and search/filter offerings. |
| Lead capture, consent and conversion path | PORT-006 to PORT-008 | Request information/trials, record consent and carry the selected offering into membership or enrolment flows. |
| Portal access lifecycle | PORT-009 | Revocable, policy-limited free access without deleting the account. |

### 4.3.2 Principal workflows

#### Discovery to free learning or trial

1. A prospect browses or searches only approved published offerings.

2. Guest-visible items open immediately; account-required previews prompt registration while retaining context.

3. After verification, the system creates a free-access grant and stores preview progress by learner and content version.

4. The user may request information, a callback or a trial; source and consent are retained.

5. The selected offering follows the user into the appropriate membership request or enrolment journey.

### 4.3.3 States and lifecycle

> Required state behavior<br>Catalogue content is Draft/Review/Published/Paused/Archived through the catalogue module. Access is Guest-visible, account-required preview or paid-only. Free grants may be Active, Expired or Revoked.

### 4.3.4 Business rules, permissions and validation

- Draft or unapproved content is never exposed through a portal parent view or direct URL.

- Preview completion cannot mark the paid course as completed.

- Marketing consent is separate from service communications and records the accepted version.

- Abandoned request drafts and trial conversions are reportable without presenting a fake online checkout.

- Revoking a free grant preserves lawful progress and audit history.

### 4.3.5 Outputs, notifications and reporting

Learner-portal catalogue results, free-user dashboard, saved preview position, lead/trial records, consent history, funnel analytics and confirmation/follow-up notifications.

### 4.3.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| PORT-001 | Must | Prospects shall be able to browse a learner-portal catalogue of published offerings before buying a membership. | Learner-portal catalogue views expose approved title, summary, audience, outcomes, delivery model, preview content, pricing visibility and calls to action; drafts remain private. |
| PORT-002 | Must | Published resources and lessons may be designated guest-visible, account-required preview or paid-only inside the LMS portal. | Access is evaluated from publication state plus access policy; changing a preview setting is audited and does not expose unpublished content outside permitted portal views. |
| PORT-003 | Must | Registered free users shall receive a free-access grant rather than a paid membership record. | Free content access and preview progress are available immediately after verification; later purchases reuse the same account and learner profile. |
| PORT-004 | Must | Free users shall be able to save progress and resume eligible preview lessons. | Progress is stored by learner and content version; preview completion does not falsely mark a paid course as completed. |
| PORT-005 | Must | Guest prospects and registered users shall be able to search and filter offerings inside the LMS portal. | Filters include delivery model, programme/subject, age/grade, level, language, price/free status and availability where applicable; results are paginated. |
| PORT-006 | Should | The catalogue shall support lead-capture calls to action without forcing immediate purchase. | Users can request information, a trial or a callback; consent and source attribution are recorded and routed to CRM queues. |
| PORT-007 | Must | All LMS portal forms shall capture consent and privacy acknowledgements appropriate to the data collected. | Consent version, time, source and withdrawal status are stored; marketing consent is separate from service communications. |
| PORT-008 | Must | A user shall be able to move from catalogue, preview or trial directly to the relevant membership request, renewal or enrolment flow. | Context is retained so the selected product/offering and learner are preselected; the manual payment draft is attributable; abandoned drafts and trial conversions are reportable without presenting a non-existent online checkout. |
| PORT-009 | Must | Free access shall be revocable and policy-limited without deleting the learner account. | Expiration or policy change removes only the applicable grant; completed preview history and audit data remain available according to retention rules. |

## 4.4 Catalogue, Content Authoring, Products and Pricing

> FEATURE 04  \|  CAT  \|  15 FUNCTIONAL REQUIREMENTS

Create, review, version, publish and sell structured learning offerings while keeping academic content separate from products, prices and membership terms.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Course Creator, Academic Reviewer, COO, Operational Manager, catalogue administrator, trainer (contributor where permitted) and learner/prospect (published view). |
| Owned / primary records | Programme, course, course version, level, milestone, module/unit, lesson, activity, prerequisite/release rule, preview policy, product, variant, bundle, price and publication decision. |
| Dependencies and confirmed technology | Next.js authoring/review interfaces, Supabase PostgreSQL and Storage, assessment/resource references, Cron for scheduled publication. |
| Requirement count | 15 total: 13 Must and 2 Should |

### 4.4.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Course model, delivery type and lifecycle | CAT-001 to CAT-005 | Separate content from products, choose delivery model, govern lifecycle/version and define metadata. |
| Content hierarchy, rules and review | CAT-006 to CAT-010 | Build structured content, prerequisites, reusable references, previews and review/approval checklists. |
| Products, variants, prices and impact control | CAT-011 to CAT-015 | Create sellable items and bundles, configure live variants, version prices, schedule publication and prevent harmful changes. |

### 4.4.2 Principal workflows

#### Course authoring and publication

1. A creator opens a draft course version and supplies required metadata and delivery-model configuration.

2. The creator builds the applicable hierarchy and links reusable resources and assessments.

3. Preview, prerequisite, release and completion rules are configured and validated.

4. The version is submitted for academic review; reviewers comment, request changes or approve.

5. An authorized catalogue owner publishes immediately or schedules publication; the version then becomes immutable for existing enrolments.

#### Product and price configuration

1. An authorized owner selects the course/access outcome a product grants.

2. Variants define permitted format, duration and audience combinations for live services.

3. Currency-specific, effective-dated prices and membership terms are approved.

4. Impact analysis is shown before pausing or archiving anything already referenced by learners or schedules.

### 4.4.3 States and lifecycle

> Required state behavior<br>Course version: Draft -> In Review -> Approved -> Published, with Paused and Archived paths. Review comments may be Open/Resolved. Prices and variants use effective dates and Active/Inactive states.

### 4.4.4 Business rules, permissions and validation

- Published course versions are immutable; material changes create a new version.

- A bundle grants child entitlements and never becomes a copied composite course.

- A portal parent cannot expose paid-only or unpublished child items.

- Pricing and term snapshots on submitted requests never change when catalogue pricing changes later.

- Archiving cannot orphan active enrolments, schedules, assessments or resource references.

### 4.4.5 Outputs, notifications and reporting

Published learner-portal catalogue views, content-review queues, publication schedules, product/variant/price masters, impact reports and audit history.

### 4.4.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| CAT-001 | Must | The catalogue shall distinguish academic content from sellable products. | A course/course version can be sold by multiple products or bundles; price and membership rules do not live on lesson or learner records. |
| CAT-002 | Must | Every course shall declare an explicit delivery model: live, self-paced milestone, K-12 live tuition, or a future extensible type. | Delivery-model-specific configuration is validated; shared fields are reused without forcing every course into a live-session model. |
| CAT-003 | Must | Courses shall use draft, in-review, approved, published, paused and archived lifecycle states. | Only approved published versions are visible or purchasable; transition permissions and reasons are audited; archival preserves existing enrolments. |
| CAT-004 | Must | Published courses shall be versioned. | New syllabus/content changes create a new version; existing learners remain attached to the version they started unless an authorized migration is performed. |
| CAT-005 | Must | Course creators shall define metadata including title, code, category, description, audience, prerequisites, outcomes, language, estimated effort and completion rules. | Required fields are validated before review; metadata powers catalogue filters, dashboards and reports. |
| CAT-006 | Must | The content hierarchy shall support programme, course version, level, milestone, module/unit, lesson and activity as applicable. | Hierarchy rules depend on delivery model; ordering is explicit and stable; items can be moved in draft without changing published learner history. |
| CAT-007 | Must | Content items shall support prerequisite and release rules. | Rules may be date-based, sequence-based, membership-based, score-based or manual; the platform explains why locked content is unavailable. |
| CAT-008 | Must | Authoring shall support reusable resources and assessment references without duplicating files or questions. | A resource/question can be linked to several lessons while version and usage references preserve integrity. |
| CAT-009 | Must | Preview eligibility shall be configurable at course, module, lesson and resource level. | Authors can preview exactly what a guest prospect/free user sees before publishing; paid-only child content cannot leak through a portal parent. |
| CAT-010 | Should | Course versions shall support review comments and approval checklists. | Reviewers can request changes tied to content nodes; unresolved blocking comments prevent publication; approval records identify reviewer and time. |
| CAT-011 | Must | Products shall support individual offerings, live memberships, self-paced access, K-12 subjects and bundles. | A product references what entitlements it grants; a bundle contains child grants and is not implemented as a copied composite course. |
| CAT-012 | Must | Product variants shall represent configurable live class attributes. | Face-camera/audio-only/screen-sharing, duration, one-to-one/group and other approved dimensions are data-driven values with validation and availability rules. |
| CAT-013 | Must | Prices shall be effective-dated, currency-specific and versioned. | Changing a price never changes historical requests/orders; membership request submission stores the exact price, tax/discount and payment-instruction snapshot used. |
| CAT-014 | Should | Catalogue owners shall be able to schedule publication and unpublication. | Scheduled jobs use organisation timezone, expose status and fail visibly; existing paid access is not removed unless entitlement policy also changes. |
| CAT-015 | Must | The system shall validate referential impact before archiving or changing catalogue objects. | Authorized users see affected products, enrolments, schedules and assessments; destructive changes to published/used objects are prevented. |

## 4.5 Commerce, Manual Payments and Memberships

> FEATURE 05  \|  COM  \|  15 FUNCTIONAL REQUIREMENTS

Manage initial memberships and renewals through a controlled manual payment and receipt-review workflow at launch, while preserving a clean path to future payment processors.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Learner, guardian/payer, authorized assisting staff, CSR reviewer, Operational Manager, COO, Finance and future payment-provider worker. |
| Owned / primary records | Membership request/order, order line snapshot, payer/beneficiary, payment instructions, manual payment submission version, receipt evidence, reviewer claim, payment decision, approved transaction, allocation, official receipt, membership term and access grant. |
| Dependencies and confirmed technology | Next.js authenticated forms/reviewer queue, Supabase PostgreSQL transactions/RLS, private Supabase Storage, Resend notifications and future typed payment adapter. |
| Requirement count | 15 total: 14 Must and 1 Should |

### 4.5.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Request, payer and receipt evidence | COM-001 to COM-005 | Create initial/renewal requests, support payer separation and capture private manual-payment evidence. |
| Review, decision and atomic approval | COM-006 to COM-010 | Use explicit states, reviewer queues, validation, approval posting, rejection and versioned resubmission. |
| Membership terms and renewal experience | COM-011 to COM-013 | Create new terms, support several entitlement models and show approved instructions/confirmation. |
| Future processor readiness and audit | COM-014 to COM-015 | Normalize later online payments into the same internal model and audit every finance-affecting action. |

### 4.5.2 Principal workflows

#### Initial membership or renewal with manual payment

1. The learner, payer or authorized staff selects the beneficiary, product/term and eligible renewal context.

2. The system creates a request/order-line snapshot containing exact price, currency, term rules and payment instructions.

3. The payer enters permitted transfer details and uploads one or more receipts to private Supabase Storage.

4. Validation confirms required fields, allowed file type/signature/size, object finalization and checksum before submission.

5. Submission enters the administrative queue and grants no membership, enrolment activation, credits or commission.

6. A permissioned COO, OM or CSR claims and reviews the evidence against the immutable request snapshot.

7. Rejection records a reason and permits a linked new submission version; the original evidence and decision remain immutable.

8. Approval executes one atomic transaction that creates the confirmed payment, allocation, official receipt and new term/access grant.

9. If operational setup is incomplete, money remains approved while the membership is Pending Activation until assignments are completed.

### 4.5.3 States and lifecycle

> Required state behavior<br>Request/order: Draft -> Awaiting Evidence -> Submitted -> Under Review -> Approved or Rejected/Correction Requested -> Fulfilled/Cancelled. Each submission version receives at most one terminal decision. Membership terms may be Pending Activation, Active, Paused, Expired, Cancelled or Completed.

### 4.5.4 Business rules, permissions and validation

- A receipt upload or submitted payment statement is not confirmed money and cannot activate access.

- The reviewer cannot alter protected price, product, learner or term snapshots during review.

- Duplicate checksum/reference, amount/currency mismatch and concurrent-review conflicts must be detected.

- The system never collects banking passwords, PINs, OTPs, CVV or full card numbers.

- A renewal creates a new term; it never overwrites the previous agreement.

- Future processors post verified transactions through the same transaction/allocation/entitlement model.

### 4.5.5 Outputs, notifications and reporting

Payer confirmation, reviewer work queue, approval/rejection/correction notifications, official receipt, membership/access records, payment audit trail, aging/SLA and reconciliation views.

### 4.5.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| COM-001 | Must | The commerce model shall separate product/price, membership request or order, order line, manual payment submission, receipt evidence, review decision, approved payment transaction, allocation and membership/access records. | A receipt upload is not a payment transaction and cannot create credits or access by itself; every entitlement is traceable to an approved allocation, authorized manual grant or reversal. |
| COM-002 | Must | The learner/payer or authorized staff shall be able to start an initial membership request or renew an eligible existing membership. | The flow identifies buyer/payer, learner beneficiary, selected product/term, currency, expected amount, effective dates and immutable price/term snapshot; renewal starts from the relevant enrolment/membership context. |
| COM-003 | Must | A payer may be different from the learner. | Requests, submissions, approved receipts and transactions identify payer separately; one payer can fund several learners; learner academic access does not expose unrelated payer financial details. |
| COM-004 | Must | At launch, all learner payments shall use a manual, receipt-based submission workflow; no online payment processor is required. | The form captures membership/order, payment channel, payer/sender name, paid amount/currency, payment date/time, transaction/reference identifier, optional account/phone suffix, notes and one or more receipt files; it never requests passwords, PINs, OTPs or full card credentials. |
| COM-005 | Must | Payment receipt evidence shall be uploaded to private Supabase Storage and linked to a versioned manual payment submission. | RLS and short-lived signed URLs restrict access to the submitting learner/payer and permissioned COO/OM/CSR/finance reviewers; type/signature, size, checksum, quarantine/finalization and missing-object checks are enforced. |
| COM-006 | Must | Manual payment submission and transaction states shall be explicit and independent from enrolment state. | Submission states include Draft, Submitted, Under Review, Approved, Rejected, Withdrawn and Superseded; approved transaction states include Confirmed, Reversed, Partially Refunded and Refunded. No access is granted while evidence is only submitted or under review. |
| COM-007 | Must | COO, Operational Manager and permissioned CSR users shall be able to claim, review, approve or reject submitted payments from an administrative queue. | The reviewer sees the expected amount/term, entered details, receipt, prior submissions, duplicate/exception flags and audit context; decision stores actor, role/scope, time and reason, and concurrent reviewers cannot create two decisions. |
| COM-008 | Must | Approval of a valid manual payment shall atomically create the internal payment transaction, allocation, official receipt and the new membership term/access grant required by the approved request. | A Supabase PostgreSQL transaction/RPC locks the submission and writes payment, allocation, term/access, entitlement opening entry and outbox events once; failure rolls back all writes. Incomplete trainer/schedule/rate setup leaves the term Pending Activation and creates an Operations task rather than inventing defaults. |
| COM-009 | Must | The system shall validate the submitted payment against the immutable request/order snapshot and detect likely duplicate or inconsistent evidence. | Amount/currency/channel/reference, receipt checksum and prior submissions are checked; exact duplicate approval is blocked, mismatches require documented override/escalation, and configurable thresholds determine when COO/OM review is required. |
| COM-010 | Must | Rejection and resubmission shall preserve history and shall not create a payment transaction, entitlement or membership activation. | Rejection requires a reason and optional correction instructions; Resend/in-app notification is sent; the learner may create a linked new submission version with replacement evidence while the original decision and files remain auditable. |
| COM-011 | Must | Every approved membership renewal shall create a new term/renewal record rather than overwrite the previous agreement. | Prior dates, allowance, schedule, trainer, class format, rates and price remain explainable; renewal can reuse configuration as a starting template but preserves its own approved request/payment allocation. |
| COM-012 | Must | Live membership terms shall support class-count, time-period, schedule-based or hybrid entitlement rules. | The selected rule and expiry/carry-forward/freeze/cancellation behavior are stored on the term version and validated before activation. |
| COM-013 | Must | The renewal flow shall show approved payment instructions and a complete confirmation summary before submission. | The user sees beneficiary, product/plan, amount, currency, due/expiry dates, configured bank/wallet/channel instructions, entitlement rules and support contact; submitted values are compared with this snapshot and instruction versions are retained. |
| COM-014 | Should | The platform shall be ready to add online payment processors after launch through a typed payment-provider adapter. | Hosted/tokenized checkout, signed webhooks, processor IDs, refunds and disputes map into the same internal request/order, payment transaction, allocation and entitlement records; the manual flow remains available as an authorized fallback and no processor schema leaks into core membership tables. |
| COM-015 | Must | All finance-affecting manual actions and payment-review decisions shall require explicit permission, reason where applicable and immutable audit. | Price/term overrides, rejection, approval, refund/reversal, write-off, manual grant and evidence replacement are attributable and exportable; protected price, trainer wage or schedule fields cannot be silently edited during receipt review. |

## 4.6 Enrolment and Learner Relationships

> FEATURE 06  \|  ENR  \|  12 FUNCTIONAL REQUIREMENTS

Represent each learner-course relationship independently so one learner can participate in many live, milestone and K-12 offerings without identity duplication or cross-course leakage.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Learner, guardian where permitted, COO/Operations, CSR, trainer, course-run manager and support staff. |
| Owned / primary records | Learner profile, enrolment, course version/run, membership/access allocation, trainer assignment, schedule assignment, cohort membership, entitlement ledger, progress summary, source attribution and learner timeline. |
| Dependencies and confirmed technology | Catalogue versions, commerce allocations, live course runs, progress/assessment services, Supabase RLS and dashboards. |
| Requirement count | 12 total: 11 Must and 1 Should |

### 4.6.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Multi-course enrolment core | ENR-001 to ENR-004 | Create independent academic relationships with explicit states and separate commercial access. |
| Assignments, entitlements and cohorts | ENR-005 to ENR-008 | Manage effective-dated trainer/schedule/cohort assignment and course-specific ledgers/progress. |
| Attribution, repeat study and safe operations | ENR-009 to ENR-012 | Preserve source, repeat-course history, consolidated timelines and idempotent conflict-aware creation. |

### 4.6.2 Principal workflows

#### Create and activate enrolment

1. A verified allocation, authorized grant or approved administrative action identifies the learner and target course version/run.

2. The service checks duplicate/repeat-study policy, eligibility, capacity and conflicting active enrolments.

3. The enrolment is created in Pending state with immutable source attribution.

4. Required membership/access grant, trainer, cohort and schedule assignments are linked independently.

5. Once activation conditions are satisfied, the enrolment becomes Active and appears in the learner All Courses view.

#### Pause, transfer or close

1. Authorized staff selects a policy-supported action and effective date.

2. The system shows impact on schedule, access, remaining entitlement, progress and trainer assignment.

3. The action is recorded on the enrolment timeline; historical terms and delivery remain unchanged.

4. Dependent dashboards and notifications update through domain events.

### 4.6.3 States and lifecycle

> Required state behavior<br>Pending, Active, Paused, Completed, Withdrawn, Cancelled and Expired, with policy-controlled transitions and effective dates.

### 4.6.4 Business rules, permissions and validation

- Course/programme is never stored as a single property on the person or account.

- Each enrolment has independent progress and entitlement context.

- The same learner can retake the same course through a distinct enrolment and course-version relationship.

- Trainer and schedule changes are effective-dated and do not rewrite historical classes.

- Creation uses idempotency and uniqueness rules to prevent accidental duplicate active enrolments.

### 4.6.5 Outputs, notifications and reporting

All-courses learner view, course-specific workspace, enrolment rosters, assignment history, entitlement balance, progress summary, consolidated learner timeline and transition notifications.

### 4.6.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| ENR-001 | Must | A learner shall be able to hold any number of enrolments across different delivery models. | One account displays live, self-paced and K-12 enrolments without duplicating identity; each enrolment has its own status, version, progress and access context. |
| ENR-002 | Must | Enrolment shall represent the academic relationship between one learner and one course version or course run. | Enrolment does not store payment totals or staff payroll state; it references associated access grants, terms, assignments and source order allocations. |
| ENR-003 | Must | Enrolment states shall include pending, active, paused, completed, withdrawn, cancelled and expired as applicable. | Transitions are rule-controlled and historical; completion is not overwritten by a later access expiry. |
| ENR-004 | Must | Access grants and membership terms shall be separate from enrolment. | A learner can remain academically enrolled while payment/access is pending or temporarily suspended; staff can see the reason for unavailable access. |
| ENR-005 | Must | Each live enrolment shall support trainer, course-run/cohort and schedule assignments with effective dates. | Changes affect only the configured date range; historical class occurrences retain the assignment snapshot that applied. |
| ENR-006 | Must | Each enrolment shall maintain an independent entitlement ledger and progress record. | Credits or allowances from one membership cannot be consumed by another course; dashboard totals can drill to every grant/debit/reversal. |
| ENR-007 | Must | Authorized staff shall be able to transfer, pause, resume, withdraw or cancel an enrolment under configured policy. | The action evaluates future classes, entitlement, refunds, progress and trainer assignment; a preview of effects is shown before confirmation. |
| ENR-008 | Should | Learners may be assigned to a cohort/section with capacity and eligibility controls. | The platform prevents over-capacity assignment unless authorized override is recorded; waitlist and transfer history are preserved. |
| ENR-009 | Must | An enrolment shall record source and attribution. | Source may include self-purchase, CSR conversion, staff grant, bundle allocation, scholarship or migration; campaign/referral and responsible CSR are stored where applicable. |
| ENR-010 | Must | The system shall support a learner taking the same course more than once. | Separate enrolments/course runs preserve each attempt, trainer, term, version, grades and completion result without colliding. |
| ENR-011 | Must | Staff shall be able to view a consolidated learner timeline across enrolments. | Timeline includes profile, trial, orders, memberships, access events, classes, submissions, grades, communications and authorized support/finance events with filters. |
| ENR-012 | Must | Enrolment creation shall be idempotent and conflict-aware. | Repeated webhooks or staff actions do not create duplicate enrolments for the same allocation; intentional multiple enrolments require distinct source or explicit override. |

## 4.7 Live Classes and Trial Delivery

> FEATURE 07  \|  LIVE  \|  20 FUNCTIONAL REQUIREMENTS

Schedule, conduct, evidence, review and approve true one-to-one, group and trial classes with Daily.co attendance while keeping entitlement and payroll outcomes independent.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Learner, guardian where permitted, trainer/support trainer, CSR for trials, COO/Operations, Daily.co webhook worker and payroll/entitlement services. |
| Owned / primary records | Course run/cohort, availability, recurring schedule rule, occurrence, participant, Daily room/token reference, provider event, attendance interval/outcome, trainer report, delivery review, credit event and earning source. |
| Dependencies and confirmed technology | Catalogue class variants, enrolments/membership terms, Daily.co adapter, Supabase Queues/Cron/PostgreSQL, Resend/in-app notifications, assessment/resource services. |
| Requirement count | 20 total: 18 Must and 2 Should |

### 4.7.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Course runs, schedules and conflicts | LIVE-001 to LIVE-005 | Model multi-participant delivery, configure class dimensions, recur schedules, detect conflicts and localize time. |
| Daily.co rooms, joins and attendance evidence | LIVE-006 to LIVE-010 | Provision private rooms/tokens and reconcile signed provider events into correctable participant evidence. |
| Reports, approval, entitlements and pay | LIVE-011 to LIVE-014 | Capture educational reports, review delivery and emit independent credit/progress/pay events. |
| Cancellations, groups, trials and availability | LIVE-015 to LIVE-018 | Handle reschedule/makeup, real group rosters, trial rules and trainer availability. |
| Recording policy and exceptions | LIVE-019 to LIVE-020 | Keep recording disabled by default and give Operations a provider/delivery exception queue. |

### 4.7.2 Principal workflows

#### Schedule and provision a live occurrence

1. Operations or an authorized trainer selects course run, participants, format, duration, timezone and one-time/recurring rule.

2. The scheduler validates trainer/learner/cohort capacity, availability and other occurrence conflicts.

3. The occurrence is stored in UTC with scheduling timezone and participant records.

4. A durable job creates the private Daily.co room and saves normalized provider references.

5. Participants receive timezone-aware in-app and Resend notifications according to reminder policy.

#### Join, attend, report and approve

1. The join endpoint validates authenticated participant/trainer assignment, occurrence state, entitlement and join window.

2. A short-lived room-scoped Daily token is returned without exposing the provider API key.

3. Signed Daily webhooks are ingested idempotently and reconciled into join/leave intervals and actual durations.

4. The trainer submits topics, syllabus coverage, progress, homework, notes and justified attendance corrections.

5. Operations approves or rejects the delivery record with actor, time and reason.

6. Approval emits separate participant credit, learning progress, payable earning and notification events.

### 4.7.3 States and lifecycle

> Required state behavior<br>Occurrence states include Draft/Planned, Scheduled/Provisioning, Ready, In Progress, Awaiting Report, In Review, Approved/Completed, Rejected for Correction, Cancelled, Rescheduled, No-show and Technical Exception. Participant attendance is independently Present, Late, Absent, Excused, Cancelled or Technical Issue.

### 4.7.4 Business rules, permissions and validation

- One occurrence may have many learners and more than one delivery staff member.

- Provider telemetry is evidence, not automatic academic, credit or payroll approval.

- Credit debits are participant- and membership-specific and support reversal under policy.

- Rescheduling creates linked history and invalidates stale reminders/tokens.

- Recording requires explicit approved policy, consent, retention and access controls.

- Daily.co failure enters an exception/fallback path without silently marking attendance or pay.

### 4.7.5 Outputs, notifications and reporting

Course calendars, trainer/learner join actions, attendance records, delivery reports, approval queues, credit/progress/pay events, trial follow-ups, cancellation/reminder emails and Daily exception dashboards.

### 4.7.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| LIVE-001 | Must | Live delivery shall use course runs/cohorts and scheduled class occurrences rather than a single client field on a session. | An occurrence can be one-to-one or group and has a participant list tied to each learner enrolment/membership context. |
| LIVE-002 | Must | Class format, planned duration and audience type shall be data-driven catalogue/term configuration. | COO/Operations can create approved class formats and duration options; class scheduling validates against the applicable membership term. |
| LIVE-003 | Must | The scheduler shall support one-time and recurring occurrences. | Recurring patterns create individually addressable occurrences; edits can apply to one, this-and-following or entire future series without altering completed history. |
| LIVE-004 | Must | Scheduling shall detect trainer, learner, room/provider and cohort conflicts. | Conflicts are blocked or require a documented authorized override; checks account for timezone and occurrence duration. |
| LIVE-005 | Must | All schedules shall store UTC timestamps plus the scheduling timezone and display in each viewer's selected IANA timezone. | The same class displays correctly for Pakistan, India and international users, including daylight-saving transitions where applicable. |
| LIVE-006 | Must | The system shall integrate Daily.co through a dedicated meeting adapter and shall create a private room for each scheduled live occurrence by default. | Occurrence commit enqueues idempotent create/update/cancel synchronization; Daily room/configuration references and events are stored; provider failure enters an exception queue and authorized manual-link fallback is available. |
| LIVE-007 | Must | Trainer and learner join actions shall issue short-lived, room-scoped Daily.co meeting tokens after server-side eligibility checks. | The Next.js join endpoint validates account, participant/assignment, occurrence state and join window, then creates a token with internal participant identity, room binding, not-before/expiry, permissions and trainer owner role as configured; API keys never reach the browser. |
| LIVE-008 | Must | Daily.co meeting and participant telemetry shall be captured through signed webhooks and reconciled into per-participant attendance intervals. | Raw-body signature and unique event ID are verified; joined/left and meeting events are idempotent, support reconnect intervals and out-of-order delivery, and send unmatched or contradictory evidence to an exception queue. |
| LIVE-009 | Must | Per-participant attendance shall support present, late, absent, excused, cancelled and technical-issue outcomes. | Attendance is not a single occurrence-level flag; each change records source, actor, time and correction reason. |
| LIVE-010 | Must | Actual learner presence and trainer delivery duration shall be derived from reconciled Daily.co evidence with an authorized correction path. | Provider intervals are primary evidence; planned, room duration, trainer presence and each learner presence remain separate; correction requires actor/reason/approval and never silently changes an earning or credit. |
| LIVE-011 | Must | Trainers shall submit a post-class delivery report. | Report captures syllabus/lesson covered, topic, progress, homework, resources, general notes and learner-specific notes allowed by policy; required fields depend on course type. |
| LIVE-012 | Must | Delivery reports shall enter a review/approval workflow when configured. | Approval stores reviewer, timestamp, decision and reason; rejection returns a correctable version while preserving submitted and reviewed snapshots. |
| LIVE-013 | Must | Approval of valid delivery shall emit independent entitlement, payroll, progress and notification events. | No single session status represents credits and compensation; each downstream event is idempotent and traceable to the approved occurrence/participant. |
| LIVE-014 | Must | Class credits shall be debited per participant and per applicable membership term. | Rules account for attendance outcome, cancellation window, makeup policy and group delivery; reversals reference the original debit. |
| LIVE-015 | Must | The platform shall support cancellation, rescheduling and makeup workflows. | Policy determines entitlement impact, trainer compensation, notifications and replacement occurrence; original occurrence is retained with reason and actor. |
| LIVE-016 | Must | True group classes shall support many learners and optional multiple trainers/support staff. | Roster, attendance, notes, credits, grades and learner visibility remain participant-specific; adding/removing a participant is effective-dated. |
| LIVE-017 | Must | Trial classes shall use the same occurrence and participant model with trial-specific rules. | Trial attendance and reporting are captured without creating a paid membership; conversion links the request/trial to resulting order and enrolment. |
| LIVE-018 | Should | The scheduler shall support trainer availability, blackout periods and preferred working hours. | Authorized staff can view availability and propose slots; exceptions/overrides are recorded; availability does not reveal private calendar details to learners. |
| LIVE-019 | Should | Daily.co recording and playback shall remain disabled by default and be enabled only for an approved course/policy with explicit consent and retention. | Recording events create private Supabase resource/file-version records; signed access, guardian rules, access logging, expiry/deletion and provider-storage reconciliation are tested. |
| LIVE-020 | Must | Operations shall have a Daily.co live-delivery exception queue. | Queue includes failed room synchronization, missing/duplicate/out-of-order webhook, unknown participant, short/conflicting duration, absent trainer, recording issue, attendance dispute and overdue report; every item has owner, state and auditable resolution. |

## 4.8 Milestone-Based Self-Paced Learning

> FEATURE 08  \|  MILE  \|  15 FUNCTIONAL REQUIREMENTS

Deliver structured self-paced programmes through levels, milestones, lessons and typed activities with configurable unlock, assessment, progress and intervention rules.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Learner, Course Creator, Academic Reviewer, optional facilitator/trainer, Operations and assessment reviewer. |
| Owned / primary records | Programme, level, milestone, lesson, activity, content release rule, prerequisite, completion rule, attempt policy, progress event/summary, review queue, intervention and certificate eligibility. |
| Dependencies and confirmed technology | Catalogue course versions, resources, assessment/submission services, enrolments/access grants, Supabase Storage/PostgreSQL and dashboards. |
| Requirement count | 15 total: 12 Must and 3 Should |

### 4.8.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Hierarchy and learning activities | MILE-001 to MILE-003 | Build levels, milestones, lessons and text/media/quiz/assignment/voice activity types. |
| Completion, unlock and progress engine | MILE-004 to MILE-008 | Configure completion/prerequisite/retry policies, capture granular progress and resume position. |
| Review queues and learner experience | MILE-009 to MILE-011 | Route manual work, present current/next progress and optionally involve facilitators. |
| Release, completion and interventions | MILE-012 to MILE-015 | Pace content, calculate completion separately from access, support intervention and represent Spoken English Level 1. |

### 4.8.2 Principal workflows

#### Learn and progress through milestones

1. The learner opens an active enrolment and the engine evaluates release, prerequisite and access rules.

2. The dashboard identifies the current level, milestone and next required activity.

3. Opening, completing, submitting, passing and grading events are stored against the enrolment and course version.

4. Auto-gradable work updates immediately; manual activities enter an assigned review queue.

5. Completion rules unlock the next item or explain the unmet requirement.

6. Intervention rules may notify the learner or assigned staff when progress stalls or performance falls below policy.

### 4.8.3 States and lifecycle

> Required state behavior<br>Content is Locked, Available, In Progress, Submitted/Awaiting Review, Completed or Failed/Retry Available per activity. Milestone/level state is derived from published completion rules, not manually overwritten totals.

### 4.8.4 Business rules, permissions and validation

- Progress is scoped to enrolment and immutable course version.

- Access expiry and academic completion/certificate eligibility are calculated separately.

- Retry limits and resets are policy-driven and audited.

- Manual review cannot be bypassed by a client-side completion event.

- The IHS Comprehensive Spoken English Level 1 structure must be achievable using configuration rather than custom code.

### 4.8.5 Outputs, notifications and reporting

Current-level/milestone view, resume location, progress percentage, remaining work, review queues, intervention lists, completion/certificate status and progress reports.

### 4.8.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| MILE-001 | Must | Self-paced milestone courses shall support the hierarchy Programme -> Level -> Milestone -> Lesson -> Activity. | Authors can create, reorder and validate the hierarchy in draft; published learners see the exact version and ordered next activity. |
| MILE-002 | Must | Lessons shall support formatted text, video, audio, downloadable files, embedded media and linked live/support activities. | Each activity type has a specific configuration schema and accessible learner renderer; unsupported file or embed types are rejected. |
| MILE-003 | Must | The platform shall support interactive quizzes, assignments/tasks and speaking/voice-recording activities. | Attempts/submissions are tied to learner, enrolment, activity version and time; upload/recording status and review requirements are visible. |
| MILE-004 | Must | Course creators shall define completion rules for lessons, milestones, levels and the overall programme. | Rules may require viewing, minimum watch/listen percentage, quiz threshold, assignment approval, trainer sign-off or combinations; rules are versioned. |
| MILE-005 | Must | Prerequisites and unlock rules shall be evaluated per enrolment. | Locked activities explain unmet conditions; completing or reversing a prerequisite recalculates downstream accessibility deterministically. |
| MILE-006 | Must | Progress shall be captured as granular events and summarized for fast dashboards. | Opened, started, completed, passed, failed, submitted, graded and unlocked events are retained; derived percentages can be rebuilt and are version-aware. |
| MILE-007 | Must | Learners shall be able to resume from their last meaningful position. | Course workspace opens the current/next activity and preserves media position where supported; completed work is not reset by an ordinary sign-out. |
| MILE-008 | Must | Attempt and retry policies shall be configurable. | Authors set attempts, cooldowns, pass thresholds and whether latest, highest or first result counts; learners see remaining attempts before starting. |
| MILE-009 | Must | Manual-review activities shall enter trainer/reviewer queues. | Assigned reviewers can open the exact submission, rubric and history; status moves through submitted, under review, returned, resubmitted and graded. |
| MILE-010 | Must | The learner dashboard shall show current level, milestone, progress percentage, completed/remaining lessons and next required action. | Values reconcile to the progress event history and course completion rules; course switching does not mix progress between enrolments. |
| MILE-011 | Should | Milestone courses shall support optional facilitator or trainer involvement. | An enrolment may be assigned a reviewer/coach with scoped access without converting the course into a live membership. |
| MILE-012 | Should | Content release may be immediate, paced by enrolment date or scheduled by cohort. | Release calculations store the rule context and timezone; staff can preview learner access for a chosen date. |
| MILE-013 | Must | Completion and certificate eligibility shall be calculated independently from access expiry. | A completed learner remains completed after access ends; certificate eligibility records rule version and evidence. |
| MILE-014 | Should | The platform shall support progress interventions. | Configured inactivity, repeated failure or overdue submission conditions can create notifications, staff tasks or support cases without changing academic results. |
| MILE-015 | Must | Level 1 of the IHS Comprehensive Spoken English Programme shall be representable without custom code. | All specified lessons, activities, quizzes, assignments and speaking tasks can be authored through standard content types and completion rules. |

## 4.9 K-12 Tuition

> FEATURE 09  \|  K12  \|  14 FUNCTIONAL REQUIREMENTS

Support K-12 subject tuition and bundles with curriculum structures, live delivery, guardians, grading periods, report cards and safeguarding.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Minor learner, guardian/payer, K-12 teacher, Course Creator, Academic Reviewer, COO/Operations and safeguarding-authorized staff. |
| Owned / primary records | Academic year, curriculum/board, grade, subject course, syllabus version, unit/chapter, lesson, subject product, bundle, section/cohort, term calendar, grading period/category/scheme, guardian relationship and report card. |
| Dependencies and confirmed technology | Catalogue/products, commerce allocations, enrolments, live delivery, assessments/gradebook, communications and privacy/safeguarding controls. |
| Requirement count | 14 total: 12 Must and 2 Should |

### 4.9.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Academic and commercial structure | K12-001 to K12-005 | Model curriculum/grade/subject content, sell individual subjects/bundles, reuse live delivery and publish syllabus outlines. |
| Grading, guardians and minor onboarding | K12-006 to K12-009 | Configure grading periods and verified, permissioned guardian/minor relationships. |
| Teaching, reporting, calendars and safeguarding | K12-010 to K12-013 | Assign syllabus-aligned work, produce report cards, schedule terms and enforce safeguarding. |
| Promotion and version movement | K12-014 | Move learners to a new grade/subject version while preserving history. |

### 4.9.2 Principal workflows

#### Subject or bundle enrolment

1. A payer selects one subject product or a bundle for an identified learner.

2. After approved payment/allocation, a bundle creates separate child access grants and enrolments for each subject.

3. Operations assigns the learner to eligible subject runs/sections and term schedules.

4. The guardian relationship determines what schedule, attendance, payment, grade and report information is visible.

#### Academic term and report card

1. Teachers deliver syllabus-linked live classes and assign categorized assessments/homework.

2. Published grades roll into the configured grading period and weighting scheme.

3. Authorized staff review completeness and generate a report card/progress report.

4. Promotion or movement creates a new enrolment/version relationship; prior year results remain immutable.

### 4.9.3 States and lifecycle

> Required state behavior<br>Subject enrolments follow the enrolment lifecycle. Academic periods are Planned, Open, Grading/Review, Published and Closed. Guardian relationships are Pending Verification, Active, Limited, Revoked or Expired.

### 4.9.4 Business rules, permissions and validation

- A bundle grants independent subject enrolments rather than one combined course record.

- Guardian access is explicit and does not automatically include private learner chat or notes.

- Age-appropriate consent and safeguarding controls apply before communication or media participation.

- Term calendars and section-wide exceptions must update schedules without losing occurrence history.

- Promotion never overwrites the syllabus/version or report card used in a prior academic year.

### 4.9.5 Outputs, notifications and reporting

Subject catalogues, bundle allocations, sections/rosters, term calendars, guardian dashboard, syllabus progress, homework/assessment queues, report cards and safeguarding alerts.

### 4.9.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| K12-001 | Must | K-12 content shall support academic year, curriculum/board, grade, subject, syllabus version, unit/chapter and lesson structures. | Required dimensions are configurable; a subject course references a published syllabus version and can be offered in one or more live sections. |
| K12-002 | Must | Each subject shall be sellable independently. | Purchasing a subject product creates the subject entitlement and enrolment only for the selected learner, grade/syllabus and term. |
| K12-003 | Must | A bundle product shall grant separate child subject entitlements/enrolments. | The bundle is not a copied course; each subject retains its trainer, schedule, gradebook, progress and renewal/refund allocation. |
| K12-004 | Must | K-12 live tuition shall use the same course-run, occurrence, participant and attendance foundations as other live courses. | Sections support group and one-to-one delivery, per-learner attendance, trainer reporting, resources, homework and entitlement rules. |
| K12-005 | Must | Course creators shall be able to publish the full syllabus outline before or during enrolment. | Learners/guardians see permitted outline detail; version changes do not rewrite past class or assessment references. |
| K12-006 | Must | K-12 courses shall support grading periods, assessment categories and weighted grading schemes. | Scheme version defines categories, weights, scales, rounding and publication rules; calculations are reproducible from grade entries. |
| K12-007 | Must | The system shall support guardians and payer relationships for minors. | Guardian relationship, authority, verification, communication access and financial responsibility are explicit and revocable; one learner may have multiple guardians. |
| K12-008 | Must | Guardian visibility shall be permission-based and configurable. | Attendance, schedules, invoices, reports and grades may be shared; private learner notes/chats are excluded unless policy and safeguarding rules authorize access. |
| K12-009 | Must | Minor accounts shall use age-appropriate onboarding and consent. | Date/age rules determine guardian consent and contact requirements; service access is blocked until required consent is verified. |
| K12-010 | Must | Teachers shall be able to assign syllabus-aligned homework and assessments. | Assignments link to subject, unit/lesson, due date and gradebook category; late and revision rules are enforced consistently. |
| K12-011 | Must | The platform shall generate learner progress reports/report cards. | Reports combine attendance, assessment category results, teacher comments and progress for a selected period; publication and guardian access are logged. |
| K12-012 | Should | K-12 schedules shall support term calendars, holidays and section-wide exceptions. | Recurring classes skip or reschedule configured holidays; changes notify affected learners, guardians and teachers. |
| K12-013 | Must | Safeguarding controls shall apply to communication, media, recordings and staff access. | Approved contact routes, moderation/escalation, restricted exports and retention rules are enforced for minors; violations generate auditable cases. |
| K12-014 | Should | The platform shall support learner promotion or movement to a new grade/subject version. | Promotion creates new enrolments/version associations and preserves prior academic records; mapping of carried results is explicit. |

## 4.10 Assessments, Submissions and Gradebook

> FEATURE 10  \|  ASM  \|  17 FUNCTIONAL REQUIREMENTS

Provide one reusable assessment, submission, grading and gradebook capability for live programmes, milestone learning and K-12 courses.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Course Creator, Academic Reviewer, trainer/teacher, learner, guardian where permitted, accommodations administrator and authorized reporting staff. |
| Owned / primary records | Question bank, versioned question/item, quiz, attempt, response, assignment/task, text/link/file/voice submission, rubric, criterion/level, grade, feedback, gradebook and grade correction. |
| Dependencies and confirmed technology | Catalogue course versions, enrolments, Supabase Storage, resources/media, progress engine, dashboards and notifications. |
| Requirement count | 17 total: 14 Must and 3 Should |

### 4.10.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Reusable assessment and item authoring | ASM-001 to ASM-004 | Share an extensible, versioned question-bank model across all delivery types. |
| Quiz policy and deterministic scoring | ASM-005 to ASM-006 | Configure availability, attempts, randomization and reproducible auto-grading. |
| Assignments, voice submissions and rubrics | ASM-007 to ASM-009 | Accept multiple submission modes and grade using reusable rubric versions. |
| Manual grading and gradebook | ASM-010 to ASM-014 | Control grade publication, calculations, feedback and learner work status. |
| Accommodations, corrections and export | ASM-015 to ASM-017 | Apply authorized accommodations, correct published grades and export controlled results. |

### 4.10.2 Principal workflows

#### Quiz attempt

1. The learner opens an available assessment and the system validates enrolment, window, accommodations and remaining attempts.

2. The attempt snapshots the applicable item versions and randomization result.

3. Responses are autosaved where appropriate; submission closes or times out according to policy.

4. Auto-gradable items are scored deterministically and manual items enter the grading queue.

5. Results and review visibility are released only according to the configured publication policy.

#### Assignment submission and grading

1. The learner submits permitted text, link, file or voice evidence with upload/playback confirmation.

2. The submission is versioned and assigned the appropriate on-time/late and review state.

3. The teacher grades with written/file/rubric feedback and may return it for revision.

4. Publishing writes the gradebook and progress events; later changes require an audited correction workflow.

### 4.10.3 States and lifecycle

> Required state behavior<br>Attempt: Not Started, In Progress, Submitted, Auto-scored, Awaiting Manual Grade, Graded and Void/Reset. Assignment: Draft, Submitted, Returned for Revision, Resubmitted, Graded and Published. Published grades require controlled correction.

### 4.10.4 Business rules, permissions and validation

- Assessment items are versioned so an old attempt remains interpretable after authoring changes.

- Client-submitted scores are never trusted; auto-grades are reproduced from stored responses and rules.

- Voice/file submissions use private Storage and authorized playback/download.

- Grade calculations are course-version specific and deterministic.

- Accommodations are applied only to authorized learners and do not reveal sensitive reasons to unnecessary users.

### 4.10.5 Outputs, notifications and reporting

Question banks, quiz attempts, submission inbox, grading queue, rubric feedback, gradebook, learner assessment timeline, overdue/returned work, controlled exports and grade-change audit.

### 4.10.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| ASM-001 | Must | The assessment domain shall be reusable across live, milestone and K-12 offerings. | Quizzes, assignments, voice activities, attempts, submissions, rubrics, grades and feedback use shared primitives with course-specific configuration. |
| ASM-002 | Must | Question banks shall support categories, tags, difficulty, outcomes, language and versioning. | Published assessment attempts retain the exact question and answer-option version; editing creates a new version rather than changing history. |
| ASM-003 | Must | Supported question types shall include single choice, multiple choice, true/false, short answer, long answer, matching and ordering. | Each type has validated authoring, accessible learner interaction and marking behavior; unsupported responses cannot corrupt an attempt. |
| ASM-004 | Should | Question types shall be extensible to media, fill-in-the-blank and AI-assisted activities. | New type handlers can be registered without widening one database table with type-specific nullable columns. |
| ASM-005 | Must | Quiz policies shall support time limit, availability window, attempt count, randomization, pass mark and review visibility. | The attempt records policy snapshot, start/submit timestamps and outcome; server time is authoritative. |
| ASM-006 | Must | Auto-gradable responses shall be scored deterministically. | Scoring is idempotent and version-aware; manual override requires permission, reason and audit history. |
| ASM-007 | Must | Assignments shall support text, link, file and voice/audio submissions. | Allowed types, size, quantity, deadline and resubmission policy are configured; uploads are scanned and linked to immutable submission versions. |
| ASM-008 | Must | Voice recording activities shall show capture/upload progress and playback confirmation. | A learner can review before submission; failed uploads are recoverable; duration, format and consent/retention rules are validated. |
| ASM-009 | Must | Rubrics shall support criteria, levels, points/weights and reusable versions. | A grade records criterion-level selections and comments; updating a rubric does not change already-graded submissions. |
| ASM-010 | Must | Manual grading shall support draft, returned for revision, graded and published states. | Learners see only published results; grader, timestamps, grade changes, feedback and release history are retained. |
| ASM-011 | Must | The gradebook shall operate per enrolment and course run/version. | It aggregates only applicable assessments and published/manual entries; staff can drill from total to source attempt/submission and calculation. |
| ASM-012 | Must | Grade calculations shall support weighted categories, points, percentage and pass/fail schemes. | The published grading-scheme version governs calculations; rounding and missing/late rules are explicit and testable. |
| ASM-013 | Must | Teachers shall be able to provide written, file and rubric feedback. | Feedback access is scoped to the learner/guardian policy; attachments use the resource security controls and publication is auditable. |
| ASM-014 | Must | Learners shall see due, submitted, returned, graded and overdue work in one course context. | Status is derived from authoritative deadlines and latest submission/grade; cross-course dashboard summarizes without mixing gradebooks. |
| ASM-015 | Should | Assessments shall support accommodations. | Authorized staff can grant extended time, extra attempts or alternative due dates to a learner without changing the base assessment for others; reason is restricted and audited. |
| ASM-016 | Must | Grade changes after publication shall require a controlled correction workflow. | Original value remains in history; correction identifies requester/approver, reason and learner notification as policy requires. |
| ASM-017 | Should | Staff shall be able to export gradebook results in controlled formats. | Exports apply filters, include scheme/version metadata, are permission-checked and create a sensitive-data audit event. |

## 4.11 Resources and Media Assets

> FEATURE 11  \|  RES  \|  12 FUNCTIONAL REQUIREMENTS

Store, version, assign, search, open and recover learning and operational files reliably, replacing the disappearing-resource and download problems of the previous portal.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Course Creator, trainer, learner, Operations, HR/Finance/Media staff within scope, Storage worker and authorized auditor. |
| Owned / primary records | Resource record, file object, version, checksum, type/size/signature, scan/quarantine state, assignment/link, access event, archive state, backup and restore record. |
| Dependencies and confirmed technology | Supabase private Storage and RLS, signed URLs/controlled streaming, Queues/Cron, scanning/media adapter, PostgreSQL metadata and external object backup. |
| Requirement count | 12 total: 11 Must and 1 Should |

### 4.11.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Supported media and secure delivery | RES-001 to RES-002 | Handle approved document/image/audio/video/presentation types through private authorized access. |
| Reliable upload, validation and versioning | RES-003 to RES-005 | Confirm complete uploads, validate/scan content and preserve stable versioned records. |
| Assignment, search and metadata | RES-006 to RES-008 | Link resources to learning/operational contexts and make them searchable within scope. |
| Backup, processing and accessibility | RES-009 to RES-012 | Recover database and object bytes, process media asynchronously, retain accessibility metadata and audit access. |

### 4.11.2 Principal workflows

#### Upload and publish a resource

1. The user selects an allowed context and file; authorization and configured type/size policy are checked.

2. The file uploads through an authorized private flow with visible progress and a resumable/recoverable error path.

3. The system verifies checksum, real file signature, final object presence and scan/quarantine result.

4. Only after object and database metadata reconcile can the resource version become Ready/Published.

5. Authorized assignments determine who can receive a short-lived view/download URL.

#### Recover or archive

1. Authorized staff archive a resource version without deleting references used by historical records.

2. Automated reconciliation detects orphaned database rows, missing objects or backup gaps.

3. A tested restore process recovers both metadata and object bytes and records the result.

### 4.11.3 States and lifecycle

> Required state behavior<br>Upload Initiated -> Uploading -> Uploaded/Finalizing -> Scanning/Quarantined -> Ready/Published, with Failed, Rejected, Archived and Removed-by-approved-retention paths.

### 4.11.4 Business rules, permissions and validation

- A database row alone does not mean the file exists; publication requires object reconciliation.

- Signed URLs are short-lived and generated only after current authorization checks.

- File extension alone is insufficient; signature/type/size and safety validation are required.

- Supabase database backup does not replace independent backup of Storage object bytes.

- Historical assignments retain the exact resource version used at the time.

### 4.11.5 Outputs, notifications and reporting

Upload confirmation/error, resource library and filters, assignment feeds, signed access events, missing/orphan object alerts, media-processing status and backup/restore reports.

### 4.11.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| RES-001 | Must | The resource service shall support PDF, document, image, audio, video, presentation and configured safe file types. | Allowed type/size rules are centrally configurable; MIME/signature validation rejects disguised files; content handling is appropriate to the media. |
| RES-002 | Must | All private resources shall be stored in Supabase Storage private buckets and delivered only through authorized short-lived signed URLs or controlled streaming endpoints. | Storage RLS and application authorization enforce learner enrolment, role assignment, guardian or explicit grant; public object URLs and service-role-generated unrestricted links are prohibited. |
| RES-003 | Must | Supabase Storage uploads shall provide progress, confirmation, checksum and recoverable error handling before a resource is published. | Authorized upload/finalization validates type, signature and size, records scan/quarantine status, verifies object existence/checksum and commits the resource version; abandoned uploads are reconciled/removed. |
| RES-004 | Must | Uploaded files shall be scanned and validated before use. | Malware/quarantine status is recorded; unsafe or failed files cannot be opened by users and enter an operations queue. |
| RES-005 | Must | Resources shall have stable records, versions and archive states. | Replacing a file creates a new version; old course/submission references remain valid; authorized removal follows retention and impact checks. |
| RES-006 | Must | Resources shall be assignable to course version, lesson/activity, milestone, class occurrence, cohort, enrolment or learner as permitted. | Every assignment has scope, visibility, release date and optional expiry; unauthorized cross-learner assignment is prevented. |
| RES-007 | Must | Users shall be able to search and filter resources within their authorized scope. | Filters include course, type, date, author, milestone/lesson, class and archive state; queries are paginated and do not leak inaccessible metadata. |
| RES-008 | Must | The platform shall retain ownership, uploader, checksum, size, type, storage key and lifecycle history. | Support can diagnose missing/broken resources from metadata and audit; duplicate upload detection can use checksum without exposing file contents. |
| RES-009 | Must | Backup and recovery shall cover Supabase PostgreSQL metadata and Supabase Storage object bytes through separate monitored procedures. | Database restore and independent object restore are tested to the approved RPO/RTO; versioned resources are recoverable and regular reconciliation reports missing/orphaned objects. |
| RES-010 | Should | Video/audio processing shall run asynchronously from Supabase Queue jobs through an approved Edge Function or external media adapter. | Original and derived object versions, captions, processing attempt, provider reference, retry and terminal state are stored; web requests do not wait for transcoding. |
| RES-011 | Must | Accessibility metadata shall be supported for media and images. | Authors can provide captions, transcripts, alt text and language; publication checks flag missing required accessibility data. |
| RES-012 | Must | Resource access and sensitive downloads shall be auditable. | The system records user, resource, time, action and context for configured classes of resources without storing unnecessary viewing telemetry. |

## 4.12 Communication, Cases and Notifications

> FEATURE 12  \|  MSG  \|  15 FUNCTIONAL REQUIREMENTS

Centralize course-aware communication, support cases, announcements and reliable in-app/email notifications so operational discussions and complaints are not lost in scattered messaging channels.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Learner, guardian where permitted, trainer, CSR/support, Operations, departmental staff, case owner, announcement publisher and notification worker. |
| Owned / primary records | Conversation, participant, message, attachment, moderation/safeguarding event, case, case category/status/SLA/escalation, in-app notification, email intent/attempt, template version, preference, announcement and audience. |
| Dependencies and confirmed technology | Supabase PostgreSQL/RLS/Realtime/Queues/Cron, private Storage, Resend and React Email, plus future WhatsApp/SMS adapters. |
| Requirement count | 15 total: 12 Must and 3 Should |

### 4.12.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Contextual conversations and safe messages | MSG-001 to MSG-004 | Limit communication to valid course/support/department relationships and apply attachment and minor-safety controls. |
| Cases, status and escalation | MSG-005 to MSG-007 | Capture complaints and issues as owned records with visible state, service target and escalation. |
| Notification channels and preferences | MSG-008 to MSG-010 | Provide durable in-app and Resend email at launch and prepare consent-based future channels. |
| Email reliability, reminders and announcements | MSG-011 to MSG-014 | Queue idempotent email, version templates, schedule timezone-aware reminders and publish scoped announcements. |
| Controlled search and export | MSG-015 | Restrict communication discovery/export and preserve audit evidence. |

### 4.12.2 Principal workflows

#### Contextual conversation

1. A valid learner, trainer, support or departmental relationship creates or exposes a scoped conversation.

2. Participants exchange text and approved attachments; every read/write is checked against current scope and safeguarding policy.

3. Realtime updates improve responsiveness, while PostgreSQL remains the canonical message history.

4. Report, moderation, retention and relationship-revocation rules control continued access.

#### Case intake and resolution

1. A user selects complaint, suggestion, feedback, technical, payment or class-related category and supplies details/evidence.

2. Routing assigns an owner, priority and service target; the submitter receives a reference.

3. The case moves through review and waiting states with comments and escalation history.

4. Resolution records outcome and closes only after policy conditions are met; reopening remains traceable.

#### Transactional notification

1. A business event writes a notification intent/outbox entry in the source transaction.

2. The worker applies preference, essential-message and audience rules and renders the versioned template.

3. In-app delivery is stored and Resend is called with a stable idempotency key.

4. Delivery, bounce, complaint and failure events update attempts without changing the source business state.

### 4.12.3 States and lifecycle

> Required state behavior<br>Case: Open -> In Review -> Waiting on User / Waiting Internally -> Resolved -> Closed, with Reopened and Escalated paths. Notification: Queued, Processing, Sent/Delivered, Failed/Retrying, Suppressed or Dead-letter. Conversation access follows active participant relationships.

### 4.12.4 Business rules, permissions and validation

- Unrestricted global direct messaging is not enabled by default.

- Essential service/security messages cannot be disabled by ordinary notification preferences.

- Reschedule/cancellation invalidates stale reminder jobs instead of sending duplicates.

- Email failure does not roll back the class, payment, enrolment or other source transaction.

- Minor communication, attachments, search and export follow stricter safeguarding and audit rules.

### 4.12.5 Outputs, notifications and reporting

Conversation inboxes, unread counts, case queues and SLA alerts, in-app notifications, Resend delivery history, class/trial reminders, payment/renewal updates, announcements and communication audit/export records.

### 4.12.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| MSG-001 | Must | Communication shall be context-aware rather than unrestricted global direct messaging. | Conversations are linked to course/enrolment/class, support case or department context and include an explicit participant list and allowed roles. |
| MSG-002 | Must | The system shall support learner-trainer, learner-support, trainer-operations and departmental conversations. | Conversation templates/policies define who may start, add participants, attach files and close/archive each conversation type. |
| MSG-003 | Must | Messages shall support text and safe attachments. | Messages store author, time, edit/delete policy and delivery/read state; attachments inherit private-resource scanning and authorization. |
| MSG-004 | Must | Minor learner communication shall follow safeguarding and guardian policies. | Approved contact routes, staff visibility/moderation, escalation and retention are enforced; prohibited private contact paths are unavailable. |
| MSG-005 | Must | Users shall be able to submit complaints, suggestions, feedback, technical issues, payment issues and class-related problems as cases. | Case type, priority, owner, status, related records, messages, attachments and resolution are stored separately from casual chat. |
| MSG-006 | Must | Case workflow shall include Open, In Review, Waiting on User, Waiting Internally, Resolved and Closed. | State transitions, service target, reassignment, escalation and reopen history are visible and auditable. |
| MSG-007 | Should | Cases shall support configurable service-level targets and escalation. | Overdue first response/resolution creates alerts and dashboard items; pausing rules are explicit. |
| MSG-008 | Must | Notifications shall support durable in-app delivery and Resend transactional email at launch; Supabase Auth email shall also be delivered through Resend. | Verification, invitation, recovery, trial, class, resource, homework, feedback, manual payment submitted/approved/rejected/resubmission, membership activation/renewal, entitlement and payroll messages use approved templates and create internal notification/attempt records. |
| MSG-009 | Should | WhatsApp/SMS shall be added through adapters after consent, template and cost policies are approved. | Phone verification, opt-in/opt-out, provider template ID, delivery status and cost are stored; failure falls back according to message policy. |
| MSG-010 | Must | Users shall manage notification preferences without disabling legally or operationally essential service messages. | Preferences are channel- and category-specific; mandatory security/transactional messages are clearly identified; changes are audited. |
| MSG-011 | Must | Resend email delivery shall be queued, idempotent and observable. | Each attempt stores notification source, recipient, template/version, deterministic idempotency key, Resend message ID, retry count and status; signed webhook events update delivery/bounce/complaint state and failures enter Operations. |
| MSG-012 | Must | Transactional email templates shall be version-controlled React Email components with safe variables and preview/render tests. | Templates are accessible and localization-ready; missing/unsafe variables fail before send; notification records retain rendered content or immutable template/version and sanitized variable reference according to retention policy. |
| MSG-013 | Must | Class and trial reminders shall be scheduled through Supabase Cron/Queues and delivered through in-app notification and Resend according to recipient timezone and occurrence state. | Schedule version/idempotency prevents duplicates; reschedule/cancellation invalidates stale jobs; retries never send an obsolete reminder and timing is configurable by offering. |
| MSG-014 | Should | The system shall support announcements to scoped audiences. | Authorized staff target role, course, cohort, department or selected users; recipient count is previewed and delivery/read metrics are available. |
| MSG-015 | Must | Communication search and export shall be restricted and audited. | Ordinary users search only their conversations; privileged compliance/support access requires scope and creates an audit record; exports apply retention/redaction rules. |

## 4.13 Role Dashboards and Analytics

> FEATURE 13  \|  DSH  \|  15 FUNCTIONAL REQUIREMENTS

Give each role a permission-scoped, actionable view of work, learning, risk, finance and system health, with every metric traceable to the records that produced it.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Learner, guardian, trainer, CSR, COO/Operations, Platform Admin, Finance/Payroll, HR, Media, CTO/Development and executive viewer. |
| Owned / primary records | Dashboard view, widget, filter, saved view, read model, KPI definition/version, drill-down query, export request, trend signal, exception and freshness marker. |
| Dependencies and confirmed technology | All product domains, Next.js Server Components, Supabase read models/materialized summaries, RLS and background refresh jobs. |
| Requirement count | 15 total: 13 Must and 2 Should |

### 4.13.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Scoped metrics and learner experience | DSH-001 to DSH-004 | Make metrics drillable and provide multi-course learner summaries and delivery-specific workspaces. |
| Trainer, CSR and Operations workspaces | DSH-005 to DSH-007 | Expose assigned teaching, sales/trial/payment-review and operational exception queues. |
| Admin, Finance and department workspaces | DSH-008 to DSH-010 | Separate platform health, financial lifecycle and HR/Media/Development operational views. |
| Filters, saved views and KPI governance | DSH-011 to DSH-013 | Support timezone-aware filters, permitted exports and defined KPI source logic. |
| Trends, exceptions and read models | DSH-014 to DSH-015 | Prioritize action signals and use performant summaries without replacing authoritative records. |

### 4.13.2 Principal workflows

#### Dashboard to action

1. The system resolves the current account, role assignments and active scopes.

2. Widgets query permission-scoped read models and display their last-refresh state where relevant.

3. The user filters or saves a personal view without changing source records.

4. Clicking any count opens the exact filtered source list, preserving date, course, status and owner criteria.

5. Authorized exports record filters, scope, requester and output metadata.

### 4.13.3 States and lifecycle

> Required state behavior<br>Dashboard read models expose Current, Refreshing, Delayed or Failed freshness. Saved views may be Active or Deleted. Exceptions remain Open/Acknowledged/Resolved according to their source domain.

### 4.13.4 Business rules, permissions and validation

- A dashboard never expands access beyond the source-domain permission and RLS policies.

- Every KPI has an owner, formula, source records and versioned definition.

- Totals must reconcile to drill-down records for the same filters and snapshot time.

- Learner views are enrolment-aware and never mix grades, credits or membership state across courses.

- Read models can be rebuilt from source data and are never the system of record.

### 4.13.5 Outputs, notifications and reporting

All Courses learner home, course workspace, trainer queue, CSR funnel/commission view, COO operational cockpit, Admin health view, Finance lifecycle view, department dashboards, drill-downs, trend signals and controlled exports.

### 4.13.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| DSH-001 | Must | Every dashboard metric shall be permission-scoped and drillable to the filtered records that produced it. | Clicking a count opens the exact filtered list; total and list reconcile; unauthorized underlying records are excluded rather than merely hidden after loading. |
| DSH-002 | Must | The learner home shall provide an All Courses overview plus an enrolment/course switcher. | It shows active, pending and completed courses; selecting one changes schedule, lessons, resources, grades, progress, membership and conversation context. |
| DSH-003 | Must | The learner home shall summarize next classes, current milestone/progress, overdue work, recent feedback, unread messages and renewal/payment notices. | Every card indicates its course and links to the corresponding workspace; free and paid access states, manual payment review status and rejection/resubmission actions are clearly differentiated. |
| DSH-004 | Must | The course workspace shall expose the features relevant to its delivery model. | Live courses emphasize schedule/attendance/resources/homework; milestone courses emphasize content/next activity/progress; K-12 adds syllabus/gradebook/reporting. |
| DSH-005 | Must | The trainer dashboard shall show assigned course runs/enrolments, upcoming classes, reports due, grading queue and learner risks. | Data is limited to effective assignments; trainer can drill to roster, attendance, syllabus context, submissions and permitted communications. |
| DSH-006 | Must | The CSR dashboard shall show leads, trial requests, follow-ups, attributed enrolments, conversions, commission status and any manual payment submissions the CSR is permitted to review. | Metrics filter by date, owner, source and programme; the payment queue shows age, expected/submitted amount, receipt state and exception flags without exposing broader finance data; conversion and commission figures reconcile to approved source records. |
| DSH-007 | Must | The COO/Operations dashboard shall show today and upcoming classes, attendance exceptions, pending reports/approvals, absences, entitlement risks, renewals, payments, trials, cases and payroll. | Each number is drillable, has an as-of time and uses documented definitions; payment widgets distinguish Submitted, Under Review, Rejected/Resubmitted, Approved and Pending Activation; stale or failed aggregates are flagged. |
| DSH-008 | Must | The Admin dashboard shall emphasize system health, access governance, integrations, jobs, audit alerts and configuration changes. | Operational business metrics remain available according to permission, but security and platform exceptions are not buried inside generic analytics. |
| DSH-009 | Must | The Finance dashboard shall separate membership requests, submitted receipt evidence, approved payments, receivables, refunds/reversals, expenses, payroll liabilities and settlements. | Figures are not derived from class status; filters include entity, currency, period, payment channel, reviewer and decision; drill-down preserves source currency and links evidence to the approved transaction without making the file itself the financial truth. |
| DSH-010 | Must | Department dashboards shall be role-specific for Media, Development and HR. | Media shows submissions/revisions/ratings/wages; Development shows tasks/bugs/testing/deployments; HR shows onboarding, documents, letters, payroll adjustments and expiring records. |
| DSH-011 | Must | Dashboard filters shall include date range, timezone-aware period, programme/course, delivery model, status and responsible owner where relevant. | Filter state appears in URL or saved view, can be reset, and is applied consistently to totals and lists. |
| DSH-012 | Should | Users shall be able to save personal dashboard views and export permitted summaries. | Saved views do not grant access beyond current permissions; exports are generated asynchronously for large datasets and are audited. |
| DSH-013 | Must | Management analytics shall define each KPI and its source logic. | A data dictionary specifies numerator, denominator, exclusions, timezone and refresh cadence for revenue, conversion, attendance, completion, payroll and productivity metrics. |
| DSH-014 | Should | Dashboards shall surface trend and exception signals rather than only totals. | Examples include repeated absence, expiring entitlements, inactivity, overdue grading, aging payment review, duplicate/mismatched receipt evidence, rejected submissions, notification failure and unreserved payable work. |
| DSH-015 | Must | Dashboards shall use precomputed read models where needed without becoming the source of truth. | Read models can be rebuilt from transactional records/events; refresh state is visible and eventual consistency tolerances are documented. |

## 4.14 Finance

> FEATURE 14  \|  FIN  \|  14 FUNCTIONAL REQUIREMENTS

Maintain clear, independent and auditable learner finance, operating expense and payroll-settlement records, including reconciliation of approved manual payments.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Finance, COO, authorized Operational Manager, permissioned CSR reviewer for limited payment evidence, payroll operator, auditor and payer/learner for own records. |
| Owned / primary records | Financial transaction, payment allocation, official receipt, receivable/due date, refund, credit note, reversal, adjustment, expense, approval, accounting code mapping, statement import/reconciliation, financial period and export. |
| Dependencies and confirmed technology | Commerce decisions, private Supabase Storage, payroll settlements, Supabase PostgreSQL transactions/RLS and management reporting. |
| Requirement count | 14 total: 12 Must and 2 Should |

### 4.14.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Independent subledgers and exact money | FIN-001 to FIN-003 | Separate learner finance, expenses and payroll postings and retain exact currency-denominated history. |
| Expenses, approvals and receivables | FIN-004 to FIN-007 | Capture complete expense evidence, configurable approval and due-payment information. |
| Corrections, reporting and accounting mappings | FIN-008 to FIN-010 | Use reversals/adjustments, preserve original currency and map to accounting codes. |
| Reconciliation, exports, close and privacy | FIN-011 to FIN-014 | Match approved payments/settlements, generate repeatable exports, lock periods and restrict sensitive fields. |

### 4.14.2 Principal workflows

#### Approved manual payment reconciliation

1. Commerce approval posts the internal payment transaction and allocation with immutable source references.

2. Finance imports or records bank/wallet statement lines under controlled access.

3. The system proposes matches using amount, currency, date, reference and payer indicators.

4. An authorized user confirms, rejects or resolves exceptions without altering the original payment decision.

5. Reconciliation status and differences appear in finance dashboards and period reports.

#### Expense and correction

1. Authorized staff records category, payee, amount, tax, currency, cost centre, date, description and evidence.

2. Approval routing is selected from configured amount/type/channel rules.

3. Approved expense becomes a posted financial record; settled history is not edited.

4. Any correction uses an explicit reversal, credit note or adjustment linked to the source.

### 4.14.3 States and lifecycle

> Required state behavior<br>Financial records commonly move Draft -> Submitted -> Under Review -> Approved/Posted or Rejected/Cancelled. Reconciliation is Unmatched, Suggested, Matched, Exception or Resolved. Periods are Open, Closing and Locked.

### 4.14.4 Business rules, permissions and validation

- Money uses exact decimal/minor units and ISO currency; floating point is prohibited.

- Original currency remains authoritative even when management views show a converted amount.

- An official receipt is linked to a confirmed transaction, not treated as the transaction itself.

- Closed-period changes require controlled reversal/adjustment in an allowed period.

- Finance visibility can hide payer account details, HR data and academic information not needed for reconciliation.

### 4.14.5 Outputs, notifications and reporting

Learner statements/receipts, receivables, expense registers, approval queues, bank/wallet reconciliation, refund/reversal history, original-and-converted reports, accounting exports and period-close evidence.

### 4.14.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| FIN-001 | Must | Learner finance, operating expenses and payroll settlements shall be separate accounting subdomains with linked postings. | A class or payment record cannot double as an expense or payroll state; finance reports reconcile through explicit references. |
| FIN-002 | Must | Money shall be stored as exact decimal minor/major units with ISO currency. | Floating point is never used; source amount/currency are immutable; conversions record rate, provider/source, time and target amount. |
| FIN-003 | Must | The system shall maintain a financial transaction history for payments, refunds, adjustments and expenses. | Every transaction has type, status, effective date, source request/submission/decision, source document, actor/system source and reversal relationship where applicable; a submitted receipt is not booked cash. |
| FIN-004 | Must | Expenses shall support category, amount, tax, currency, payee, cost centre/department, description, date and evidence. | Required fields and approval thresholds are configurable; evidence is private, scanned, versioned and retained. |
| FIN-005 | Must | Financial approvals shall be configurable by amount, type, payment channel, exception and role. | COO, OM and permissioned CSR may approve/reject eligible manual submissions; a learner/payer cannot review their own submission, concurrent decisions are blocked, and amount/duplicate/override exceptions may require COO/OM escalation. Decision and reason are immutable and visible in audit. |
| FIN-006 | Must | The platform shall support receivables and payment due dates independent from access policy. | Outstanding amount is calculated from invoice/payment allocations; access suspension, reminders and collections actions are separate configurable workflows. |
| FIN-007 | Must | Manual payment receipt evidence and expense documents shall be reliably stored and associated with their source and financial records. | Private Supabase Storage objects have checksum, finalization/quarantine, owner and version metadata; missing, quarantined or deleted evidence is visible; document lifecycle cannot silently orphan the submission, decision or transaction. |
| FIN-008 | Must | The system shall support correction through credit note, reversal or adjustment rather than editing settled financial history. | Original and corrective records remain linked; totals and exports include both; reason and approval are required. |
| FIN-009 | Must | Finance reports shall preserve original currency and optionally present converted management views. | Converted views show rate date/source and are not treated as booked accounting values unless an explicit posting policy exists. |
| FIN-010 | Should | The finance module shall support configurable chart-of-account or accounting-code mappings. | Products, payment channels, expense types and payroll lines can map to external accounting codes without changing operational objects. |
| FIN-011 | Should | The system shall support reconciliation of approved manual payment transactions against bank/wallet statements and future provider settlements. | Imported statement/settlement lines match confirmed payment transactions by amount, currency, date, channel and reference; differences, duplicates and unmatched items enter a reconciliation queue. |
| FIN-012 | Must | Finance exports shall be repeatable and traceable. | Each export records filters, generated time, requester and file checksum; rerunning the same closed period produces explainable differences only from authorized adjustments. |
| FIN-013 | Must | Financial periods may be closed or locked by authorized staff. | Closed-period transactions cannot be silently edited; late corrections post as adjustments under configured policy. |
| FIN-014 | Must | Sensitive finance visibility shall be field-level where necessary. | Users may be allowed to submit or confirm payment status without seeing payroll, full bank references, unrelated payer details or other transaction amounts; review roles see only the fields required for their scoped decision. |

## 4.15 Payroll and Compensation

> FEATURE 15  \|  PAY  \|  16 FUNCTIONAL REQUIREMENTS

Calculate and settle trainer, employee, CSR and Media compensation from immutable approved sources without reusing class, task or enrolment status as payroll state.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | COO, Finance/Payroll, HR, Operational Manager with scope, trainer/employee payee, CSR, Media worker, approver and auditor. |
| Owned / primary records | Effective-dated trainer rate agreement, salary agreement, override approval, earning item, earning reservation, pay period, payroll run, line item, adjustment/reversal, settlement, pay statement and exception. |
| Dependencies and confirmed technology | Approved live delivery, verified CSR commission, approved Media work, HR salary agreements, finance posting and Supabase transactional locks. |
| Requirement count | 16 total: 15 Must and 1 Should |

### 4.15.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Rate agreements and earning creation | PAY-001 to PAY-004 | Version trainer/member rates, select overrides and create one immutable earning per approved source independently of class state. |
| Payroll reservation and lifecycle | PAY-005 to PAY-006 | Atomically reserve eligible earnings and move runs through controlled states. |
| Compensation lines, salary and calculations | PAY-007 to PAY-009 | Support all earning/deduction types and deterministic gross-to-net calculation. |
| Settlement, corrections and segregation | PAY-010 to PAY-012 | Post settlement to Finance, correct by reversal and prevent self-approval or unauthorized change. |
| Statements, reconciliation and exceptions | PAY-013 to PAY-016 | Expose scoped statements, reconcile source-to-settlement, apply advanced rate rules and surface exceptions. |

### 4.15.2 Principal workflows

#### Approved work to earning

1. A qualifying approved delivery, verified commission or approved Media item emits a unique source event.

2. The payroll service resolves the effective rate agreement and applicable caps, minimums, multipliers or approved override.

3. One immutable earning item is created with source, payee, rate snapshot, quantity, currency and calculation detail.

4. Duplicate source constraints prevent a second original earning for the same work.

#### Payroll run and settlement

1. A payroll operator opens a pay period and selects eligible unreserved earnings and salary components.

2. The database atomically reserves them for one Draft run.

3. Authorized adjustments, bonuses, commissions, fines, taxes, deductions and advances are added with reasons.

4. The system calculates gross, deductions and net payable and routes the run for approval.

5. An approver other than the preparer approves or rejects; rejection returns the run for controlled correction.

6. Settlement writes a payment record, Finance expense/ledger posting and employee statement, then releases no source for reuse.

### 4.15.3 States and lifecycle

> Required state behavior<br>Payroll run: Draft -> Submitted -> Approved or Rejected -> Settled, with Cancelled before settlement. Earning items are Available, Reserved, Included/Payable, Settled, Reversed or Adjusted.

### 4.15.4 Business rules, permissions and validation

- Class/membership/task status never doubles as payroll status.

- One approved source creates at most one original earning and one active reservation.

- Historic rate, quantity and calculation snapshots are immutable.

- The preparer/payee cannot self-approve protected pay changes or settlement.

- Corrections use linked reversal/adjustment entries and preserve prior statements.

- Pay statements reveal only the recipient’s permitted compensation details.

### 4.15.5 Outputs, notifications and reporting

Earning registers, payroll drafts/runs, approval and exception queues, gross-to-net calculation, settlement record, Finance posting, pay statement, source-to-payment reconciliation and outstanding liability reports.

### 4.15.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| PAY-001 | Must | Trainer compensation shall be governed by effective-dated rate agreements. | A rate agreement can vary by trainer, membership/product, course, class format, duration, one-to-one/group, group size and other approved dimensions. |
| PAY-002 | Must | Membership creation or renewal shall allow authorized Operations/COO staff to select the applicable trainer rate agreement or create an approved override. | The selected rate version is validated, effective-dated and visible before activation; changes affect only qualifying future delivery. |
| PAY-003 | Must | Approved qualifying work shall create one immutable payable earning item. | The source reference is globally unique so concurrent jobs/drafts cannot generate duplicate earnings; item stores rate-rule and delivery snapshots. |
| PAY-004 | Must | Earning items shall be independent from class status. | A class remains delivered/approved while the associated earning moves through payable, reserved, included, settled or reversed states. |
| PAY-005 | Must | Payroll drafts shall atomically reserve eligible earning items. | An earning item cannot be selected into two open payroll runs; releasing/cancelling a draft returns it to eligible state with audit history. |
| PAY-006 | Must | Payroll shall support pay periods and runs with Draft, Submitted, Approved, Rejected, Settled and Cancelled states. | Transitions enforce permissions and segregation of duties; settled runs are immutable except for linked correction runs. |
| PAY-007 | Must | Payroll line items shall support class earnings, salary, bonuses, incentives, commissions, fines, deductions, taxes, advances and adjustments. | Every line records type, amount, currency, reason, source, author, approver and effective period; negative/positive validation is explicit. |
| PAY-008 | Must | Employee salary agreements shall be versioned independently from trainer per-class rate agreements. | Fixed salary and class-based pay can coexist; effective dates prevent changes from rewriting previous periods. |
| PAY-009 | Must | The system shall calculate gross, deductions, adjustments and net payable deterministically. | Payroll run exposes calculation breakdown and validation errors; totals reconcile to included lines and reserved earning items. |
| PAY-010 | Must | Settling payroll shall create a payment/settlement record and finance expense/ledger posting. | Settlement reference, date, channel and proof are stored; partial settlement is modeled explicitly if allowed. |
| PAY-011 | Must | Corrections to paid work shall use reversal or adjustment earning/payroll items. | The settled source remains unchanged; correction appears in a subsequent or dedicated correction run with linked reason. |
| PAY-012 | Must | The payroll module shall prevent self-approval and unauthorized pay changes. | Role and threshold rules ensure proposer, approver and settler are appropriately separated; exceptions require documented privileged override. |
| PAY-013 | Must | Trainers and employees shall see an appropriate pay statement without unrelated confidential finance data. | Statement lists period, earning categories, deductions, net and settlement status; access is limited to the payee and authorized payroll roles. |
| PAY-014 | Must | Payroll reports shall reconcile source work, earning items, payroll lines and settlement. | Authorized users can drill from a pay statement to approved class evidence or other source while respecting learner privacy. |
| PAY-015 | Should | Rate rules shall support caps, minimums, multipliers and exceptions. | Rule evaluation is deterministic and test-covered; the exact rule inputs/result are stored on the earning item. |
| PAY-016 | Must | The system shall expose payroll exception queues. | Missing rate, conflicting rule, unapproved work, duplicate source, invalid currency, negative net and failed finance posting are visible with owner and resolution state. |

## 4.16 HR Profiles, Documents and Letters

> FEATURE 16  \|  HR  \|  12 FUNCTIONAL REQUIREMENTS

Manage staff profiles, onboarding, verified employment documents, official letters/certificates, sensitive events and offboarding independently from login credentials.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | HR, COO, Platform Admin for access actions, manager, employee/staff invitee, authorized document issuer and disciplinary reviewer. |
| Owned / primary records | Staff/employment profile, onboarding checklist, verified field, emergency contact, custom field, private employment document, template version, issued letter/certificate, timeline event, disciplinary case and offboarding action. |
| Dependencies and confirmed technology | IAM invitation/role lifecycle, private Supabase Storage, Resend, payroll salary agreements and audit services. |
| Requirement count | 12 total: 10 Must and 2 Should |

### 4.16.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Employment profile and onboarding | HR-001 to HR-003 | Separate staff from auth, track onboarding and allow verified profile maintenance. |
| Sensitive relationship data policy | HR-004 to HR-005 | Protect emergency contacts and avoid unnecessary family/spouse collection. |
| Letters, templates and timeline | HR-006 to HR-008 | Generate official documents from versions and create linked history events. |
| Documents, discipline, custom data and offboarding | HR-009 to HR-012 | Protect/verify employment files, govern discipline, allow safe extensibility and revoke access on exit. |

### 4.16.2 Principal workflows

#### Staff onboarding

1. HR or an authorized manager creates the employment profile and required onboarding checklist.

2. IAM sends the staff invitation; identity verification, profile completion, required documents and policy acknowledgements are tracked.

3. Role approvals and MFA are completed before the employment/access state becomes Active.

4. Missing, rejected or expiring documents remain visible to authorized HR/management queues.

#### Generate and issue official document

1. An authorized issuer selects the approved template type, recipient and reason/context.

2. The system resolves controlled merge fields and renders a draft for review.

3. After approval, the issued version is stored privately with issuer, date, status and document hash/version.

4. A timeline event links the letter/certificate to the employee, learner or enrolment record as appropriate.

#### Offboarding

1. HR records the effective exit date, reason and required return/settlement steps.

2. IAM revokes or schedules revocation of role assignments and sessions while preserving business history.

3. Open classes, cases, approvals, assets and payroll items are reassigned or surfaced as exceptions.

4. The employment profile becomes inactive/closed without deleting issued documents or audit history.

### 4.16.3 States and lifecycle

> Required state behavior<br>Onboarding: Draft -> Invited -> Verification/Documents Pending -> Approval Pending -> Active or Rejected/Cancelled. Documents: Requested, Uploaded, Under Verification, Verified, Rejected, Expiring/Expired, Archived. Discipline uses Open, Under Review, Response Pending, Decided, Appealed/Closed.

### 4.16.4 Business rules, permissions and validation

- Authentication account, person and staff employment profile remain separate records.

- Emergency/family information is collected only for a documented legitimate purpose and is highly restricted.

- Issued documents are versioned and cannot be silently regenerated with changed template text.

- Disciplinary and sensitive HR fields use least-privilege visibility and immutable action history.

- Offboarding removes access, not lawful employment/payroll/document history.

### 4.16.5 Outputs, notifications and reporting

Onboarding dashboard, staff profile, document verification/expiry queues, offer/joining/experience/completion/termination/suspension/warning/fine letters, certificates, personnel timeline and offboarding checklist.

### 4.16.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| HR-001 | Must | Staff profiles shall be separate from authentication accounts and include employment lifecycle data. | Employment status, department, manager, start/end dates, job title and agreements can change without replacing identity or erasing history. |
| HR-002 | Must | Staff onboarding shall track invitation, identity verification, documents, policy acknowledgements, role approval and activation. | Required steps are configurable by role; incomplete onboarding cannot grant privileged access. |
| HR-003 | Must | Employees and learners shall manage profile details with verification status where needed. | Contact methods, timezone, profile image, education/experience and optional background fields record source, verification and change history. |
| HR-004 | Must | Emergency contacts shall be modeled narrowly and protected as highly sensitive data. | Relationship, name, contact and verification are collected only for documented emergency purpose; access is restricted and logged. |
| HR-005 | Should | Parent, guardian or spouse data for employees shall not be collected by default beyond a legitimate emergency/legal need. | Any expanded collection requires approved purpose, minimum fields, notice/consent, retention period and restricted access configuration. |
| HR-006 | Must | The system shall generate official letters and certificates from controlled templates. | Supported types include offer, joining, employment, experience, completion, termination, suspension, warning/penalty and other approved HR documents. |
| HR-007 | Must | Generated documents shall use versioned templates and merge fields. | The generated PDF/DOCX snapshot records template version, issuer, recipient, issue date, reason and status; unauthorized fields cannot be injected. |
| HR-008 | Must | Each issued letter/certificate shall create a timeline event on the person/employment/enrolment record as appropriate. | Event links the immutable issued document, issuer, reason, approval, delivery and acknowledgement/revocation status. |
| HR-009 | Must | Employment documents shall have private storage, verification and expiry metadata. | Authorized staff receive alerts for expiring documents; access/downloads are audited; archived documents remain available under retention policy. |
| HR-010 | Must | Disciplinary events shall have controlled access and a documented workflow. | Warning, suspension, fine and termination records require reason, evidence, approver and effective date; payroll impacts are separate adjustment lines. |
| HR-011 | Should | The HR module shall support configurable employee custom fields without weakening privacy controls. | Field definitions specify purpose, type, required/optional, visibility, verification and retention; arbitrary sensitive free text is discouraged. |
| HR-012 | Must | Staff offboarding shall revoke access while preserving employment and business history. | Future assignments are resolved, sessions revoked, credentials disabled, ownership transferred and required final settlement tasks generated. |

## 4.17 CSR Enrolments and Commission

> FEATURE 17  \|  CSR  \|  9 FUNCTIONAL REQUIREMENTS

Manage prospects, trials, follow-ups, enrolment attribution and verified sales commissions without conflating leads with authenticated learner identities.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | CSR, CSR manager, COO/Operations, learner/prospect, trainer for trial outcome and payroll/finance for approved commission. |
| Owned / primary records | Prospect/lead, stage/reason, contact attempt, follow-up task, trial request/outcome, source/campaign, CSR attribution, verified enrolment, commission rule, commission source/earning and review workload. |
| Dependencies and confirmed technology | Portal lead/trial capture, IAM account linking, commerce/manual payment review, enrolment, live trials, notifications and payroll. |
| Requirement count | 9 total: 8 Must and 1 Should |

### 4.17.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Prospects and attribution | CSR-001 to CSR-003 | Keep leads separate from accounts and carry CSR/source attribution through trial, order and verified enrolment. |
| Commission rules and payment eligibility | CSR-004 to CSR-006 | Version commission policy, release only after verification and use the shared earning/payroll framework. |
| Follow-up, lead workflow and analytics | CSR-007 to CSR-009 | Create trial follow-up automatically, support configurable stages and report performance/review workload. |

### 4.17.2 Principal workflows

#### Lead to trial and enrolment

1. A portal inquiry or staff-created prospect records source, interest, consent and assigned CSR.

2. The CSR completes contact/follow-up work and moves the lead through configured stages with reasons.

3. A trial request is scheduled as a live trial occurrence and receives reminders/attendance evidence.

4. Trial outcome creates or updates a follow-up and may link the prospect to an authenticated learner account.

5. Approved payment/allocation and enrolment retain CSR attribution for commission evaluation.

#### Commission qualification

1. The system resolves the effective commission rule for the verified enrolment/payment source.

2. Configured conditions such as approved payment, activation and cooling period are checked.

3. A unique commission earning item is created only when all conditions are satisfied.

4. The item flows through the ordinary payroll reservation, approval and settlement process.

### 4.17.3 States and lifecycle

> Required state behavior<br>Lead stages are configurable, with a default New -> Contacted -> Qualified -> Trial Scheduled/Completed -> Converted or Lost. Follow-up is Pending, Due, Completed, No Response or Cancelled. Commission is Pending Verification, Eligible, Payable, Reserved, Paid or Reversed.

### 4.17.4 Business rules, permissions and validation

- Creating an account does not delete or replace prospect history; records are linked explicitly.

- CSR attribution and later reassignment retain history and effective dates.

- Commission becomes payable only from a verified source and is globally unique.

- A CSR’s payment-review permission is separate from commission ownership and may require segregation controls.

- CSR dashboards expose only assigned/scoped prospects and permitted payment-review evidence.

### 4.17.5 Outputs, notifications and reporting

Lead pipeline, follow-up queue, trial conversion funnel, attributed enrolment details, commission eligibility/pay status, CSR performance analytics and scoped manual-payment review workload.

### 4.17.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| CSR-001 | Must | The CRM shall maintain prospect/lead records separately from authenticated accounts and learner profiles. | A lead may later link to an account/person without duplicating history; anonymous inquiries remain usable until conversion or retention expiry. |
| CSR-002 | Must | CSR attribution shall be recorded at lead, trial request, order/enrolment and commission source levels. | Attribution changes require reason and preserve prior owner; self-service acquisitions can be distinguished from CSR-assisted conversions. |
| CSR-003 | Must | Each verified enrolment shall show learner, programme/course, membership/product, approved payment/allocation, assigned CSR and enrolment date. | The record links to the authoritative membership request, manual submission/review decision, approved transaction/allocation and enrolment rather than duplicating amount/status text. |
| CSR-004 | Must | Commission rules shall be effective-dated and versioned. | Rules may depend on product, sales value, received payment, renewal/new sale and staff role; historical commission is not recalculated by later rule edits. |
| CSR-005 | Must | Commission shall become payable only after configured enrolment and payment verification conditions are met. | A unique commission earning item is generated only after the configured manual payment approval/allocation and enrolment conditions are met; rejection creates no commission and refunds/cancellations create linked reversal rules rather than editing the original. |
| CSR-006 | Must | CSR commissions shall flow into the same payroll earning-item and settlement framework. | Commission source is identifiable; it cannot be paid twice in a separate manual spreadsheet and payroll run. |
| CSR-007 | Must | Trial completion shall create or update follow-up work automatically. | Outcome, owner, due date and recommended next action are generated according to rule; duplicate follow-ups are prevented. |
| CSR-008 | Should | Lead workflow shall support configurable stages and reasons. | Stage history, lost reason, next action and expected value are reportable; deleting a converted lead is prevented. |
| CSR-009 | Must | CSR analytics shall show enrolments, sales value, verified conversions, pending/paid commission, conversion performance and permission-scoped payment-review workload. | Metrics use documented attribution windows and approved payment/enrolment definitions; review metrics distinguish queue age, approvals, rejections, resubmissions and exceptions and drill to source records. |

## 4.18 Media Department Operations

> FEATURE 18  \|  MED  \|  13 FUNCTIONAL REQUIREMENTS

Replace Media Department spreadsheets with an assignment, submission, revision, approval, quality-rating and compensation workflow.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Media Head, Editor, Social Media Manager, COO, payroll/finance staff and campaign stakeholder. |
| Owned / primary records | Media project/campaign, work item, brief, source asset, assignee, deliverable/link, submission version, review comment, revision cycle, approval, quality rating, wage/rate and earning source. |
| Dependencies and confirmed technology | Private resource Storage, communication/comments, dashboards, payroll earning items and publication metadata. |
| Requirement count | 13 total: 11 Must and 2 Should |

### 4.18.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Roles, work intake and lifecycle | MED-001 to MED-003 | Define scoped Media roles, complete work-item data and the end-to-end state model. |
| Submission, review and compensation | MED-004 to MED-007 | Submit evidence, review/revise/approve/rate, establish wage and create independent payroll earning. |
| Collaboration, grouping and analytics | MED-008 to MED-010 | Expose revision history, campaign grouping and performance/pay dashboards. |
| Asset control and phase-one boundary | MED-011 to MED-013 | Restrict unpublished assets, store publishing metadata and replace spreadsheet status/wage records. |

### 4.18.2 Principal workflows

#### Media assignment to approval

1. The Media Head creates a work item with title, type, channel, brief, due date, priority, source assets and expected deliverable.

2. The assigned editor accepts/starts work and updates progress within scope.

3. The editor submits a deliverable file/link, work notes and completion metadata as a versioned submission.

4. The reviewer comments, requests revision or approves and records a quality rating.

5. On approval, the configured wage/rate is snapshotted and one payroll earning item is emitted.

6. The work item may later hold publishing metadata; payroll settlement remains independent from the Media state.

### 4.18.3 States and lifecycle

> Required state behavior<br>Assigned -> In Progress -> Submitted -> Under Review -> Revision Required (then resubmission) or Approved -> Paid indicator, plus Cancelled. The Paid label is a derived/reconciled view and must not replace payroll state.

### 4.18.4 Business rules, permissions and validation

- Every revision retains its submission and review history.

- Only assigned/review-authorized roles can access unpublished assets and comments.

- Approval and quality rating identify reviewer and time.

- An approved Media source creates at most one original earning item.

- Phase one tracks publishing metadata but does not attempt to replace a full social publishing suite.

### 4.18.5 Outputs, notifications and reporting

Editor dashboard, assignment queue, submission/revision history, approval/rating, campaign views, total/short/long/productivity analytics, approved wages, paid/unpaid reconciliation and Media exception list.

### 4.18.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| MED-001 | Must | The system shall support Media Head, Editor and Social Media Manager role templates with scoped permissions. | Editors see assigned/submitted work and their pay; reviewers see designated queues; management permissions are separately assignable. |
| MED-002 | Must | Media work items shall record title, content type, platform/channel, brief, assignee, due date, priority, source assets and expected deliverable. | Required metadata is validated before assignment; source and deliverable files use secure resource storage. |
| MED-003 | Must | Media workflow shall include Assigned, In Progress, Submitted, Under Review, Revision Required, Approved, Paid and Cancelled. | Every transition records actor/time/comments; approval and payment are independent records despite linked states. |
| MED-004 | Must | Editors shall submit a deliverable file/link, work notes and completion metadata. | Submission creates an immutable version; later revision creates a new version and retains review history. |
| MED-005 | Must | Media Head/COO shall review, comment, request revision, approve and rate quality. | Review stores criteria/rating, decision and comments; only an approved submission can generate payable work. |
| MED-006 | Must | Media wage/rate shall be defined before or at approval according to policy. | Rate may depend on short/long, platform, complexity or agreement; the approved work snapshot creates a unique earning item. |
| MED-007 | Must | Approved media work shall integrate with payroll without using the media task status as payroll state. | A unique earning item is reserved/settled through payroll; Paid display is derived from settlement linkage. |
| MED-008 | Must | Review comments and revision cycles shall be visible to assigned participants. | The editor sees actionable comments and version comparison; restricted management notes can be separately scoped. |
| MED-009 | Should | Media tasks shall support campaign/project grouping. | Campaign aggregates platform, dates, objectives, assets, tasks and performance references without replacing individual accountability. |
| MED-010 | Must | Media dashboards shall report total, short/long, submitted, approved, revision, productivity, ratings, wages and paid/unpaid amounts. | Metrics filter by period, editor, platform and status and reconcile to source work/review/earning records. |
| MED-011 | Must | Access to unpublished media assets shall be restricted. | Signed links, role scope, download logs and archive/retention rules apply; public sharing requires an explicit publication action. |
| MED-012 | Should | The workflow shall support scheduled publishing metadata without becoming a full social publishing platform in phase one. | Users can record target date, platform, URL and outcome; direct posting integrations remain adapter-based future scope. |
| MED-013 | Must | Media work history shall replace spreadsheet-based wage and status records for in-scope work. | Migration/import produces traceable records; new work must be created in the system to qualify for approval and pay. |

## 4.19 Development Department Operations

> FEATURE 19  \|  DEV  \|  11 FUNCTIONAL REQUIREMENTS

Give the Development Department a lightweight, auditable system for projects, tasks, bugs, testing, releases and deployments without recreating a complete specialist issue tracker.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | CTO, developer, tester/QA, product/department requester, deployment operator and executive viewer. |
| Owned / primary records | Project, release, feature, task, bug, priority, assignment, dependency/blocker, comment, attachment, progress update, test evidence and deployment record. |
| Dependencies and confirmed technology | IAM/scoped roles, Resources/attachments, notifications, dashboards and optional source-control/CI adapter. |
| Requirement count | 11 total: 8 Must and 3 Should |

### 4.19.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Projects, work items and workflow | DEV-001 to DEV-003 | Track project/feature/task/bug objects with state, ownership, updates and history. |
| Bug, testing and deployment evidence | DEV-004 to DEV-006 | Capture reproducibility, quality checks and environment/version deployment results. |
| Dependencies, integrations and dashboard | DEV-007 to DEV-009 | Represent blockers, connect specialist tools through adapters and expose CTO operations. |
| Release planning and scope control | DEV-010 to DEV-011 | Group work into releases while keeping the internal module deliberately lightweight. |

### 4.19.2 Principal workflows

#### Work item to deployment

1. An authorized requester or CTO creates a feature/task/bug with priority, owner, deadline and release context.

2. The developer records progress, comments, evidence and blockers; dependencies can block advancement.

3. Completed implementation enters review/testing with explicit test status and evidence.

4. Successful work is marked Completed and included in a release plan.

5. Deployment records environment, release/version, date, actor and outcome; failures remain visible and can reopen work.

### 4.19.3 States and lifecycle

> Required state behavior<br>Planned -> Assigned -> In Progress, with Blocked and In Review -> Testing -> Completed -> Deployed; Cancelled is available with reason. Failed testing or deployment returns the item to an appropriate active state with history.

### 4.19.4 Business rules, permissions and validation

- Bug records include environment, severity, reproducibility, steps and expected/actual behavior.

- Testing and deployment evidence is retained rather than represented only by a status label.

- Dependencies and blockers prevent misleading completion where configured.

- External source-control/CI data enters through an adapter and does not grant production business-data access.

- Specialist tools may remain authoritative later; the IHS module documents operational visibility and decisions.

### 4.19.5 Outputs, notifications and reporting

Developer work queue, bug register, testing queue, blockers/dependencies, release plan, deployment history, CTO dashboard, overdue alerts and recently deployed updates.

### 4.19.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| DEV-001 | Must | The Development module shall track projects, features, tasks, bugs and technical work items. | Each item has type, title, description, owner, priority, status, deadline, progress and linked parent/project as applicable. |
| DEV-002 | Must | Workflow shall support Planned, Assigned, In Progress, Blocked, In Review, Testing, Completed, Deployed and Cancelled. | Transition rules record actor/time; completion and deployment are separate; blocked items require blocker details. |
| DEV-003 | Must | Work items shall support comments, attachments, progress updates and change history. | Updates are chronological and attributable; sensitive security bugs may use restricted visibility. |
| DEV-004 | Must | Bugs shall record severity, environment, reproducibility, steps, expected/actual result and affected release. | Triage validates required fields; duplicate linkage and resolution code are supported. |
| DEV-005 | Must | Testing status and evidence shall be recorded. | Test assignee, environment, result, notes and evidence are attached; failed testing returns work to an appropriate state. |
| DEV-006 | Must | Deployment records shall identify environment, version/release, date, actor and outcome. | A completed item is not marked deployed without a deployment record or authorized manual evidence. |
| DEV-007 | Should | Work items shall support dependencies and blockers. | A dependency graph prevents impossible closure where configured and surfaces blocked critical-path items. |
| DEV-008 | Should | The module shall integrate with source control/CI tools through adapters. | External commit, pull request, build and deployment references can update status idempotently without storing source-control credentials in task records. |
| DEV-009 | Must | CTO dashboard shall show active, overdue, completed, pending bugs, testing queue, recent deployments, assignments and blocked work. | All metrics drill to filtered work items and can be scoped by project/release/developer. |
| DEV-010 | Must | Development work shall support release planning. | A release groups planned items, target date, status, deployment records and release notes; scope changes are tracked. |
| DEV-011 | Should | The module shall remain deliberately lightweight. | It covers IHS reporting and traceability needs without duplicating every feature of a specialist engineering platform; external integration is preferred for advanced workflows. |


## 4.20 Administration and Platform Operations

> FEATURE 20  \|  ADM  \|  12 FUNCTIONAL REQUIREMENTS

Give authorized administrators controlled tools for reference data, roles, provider configuration, background work, audit, bulk operations, release controls and data lifecycle administration.

| Feature attribute | Specification |
| --- | --- |
| Primary actors | Platform Admin, CTO, security/audit reviewer, data steward, authorized domain administrator and support operator. |
| Owned / primary records | Reference-data value, role/permission assignment, non-secret provider configuration, outbox/queue job, webhook/integration event, payment/Daily/Resend exception, import batch, export request, audit event, feature flag, business-rule configuration, retention policy, privacy request and support-view session. |
| Dependencies and confirmed technology | All domains, Supabase PostgreSQL/RLS/Queues/Cron, Daily.co and Resend adapters, environment/secret management and audit services. |
| Requirement count | 12 total: 10 Must and 2 Should |

### 4.20.1 Functional decomposition

| Subfeature | Requirement IDs | Functions included |
| --- | --- | --- |
| Reference data, roles and provider configuration | ADM-001 to ADM-003 | Manage controlled values, permission assignments and non-secret integration settings. |
| Jobs, exceptions, import and export | ADM-004 to ADM-006 | Operate queue/webhook/payment exceptions and govern staged bulk movement of data. |
| Audit, feature flags and configurable policy | ADM-007 to ADM-009 | Search immutable audit, phase releases safely and configure approved business thresholds. |
| Status, retention and controlled support access | ADM-010 to ADM-012 | Expose freshness, administer lifecycle/privacy and tightly govern any impersonation/support view. |

### 4.20.2 Principal workflows

#### Reference/configuration change

1. An administrator opens the permitted configuration area and sees current effective value, owner and impact.

2. Validation prevents deletion/change of values still required by active products, schedules or records.

3. High-risk changes require step-up authentication and, where configured, approval.

4. The system records old/new value, actor, reason, scope and effective date and refreshes dependent views/jobs.

#### Exception and job recovery

1. The operations console groups failed/stale outbox, queue, Daily, Resend, Storage and payment-review exceptions.

2. An authorized user inspects sanitized context, correlation ID, attempts and owning domain.

3. The user resolves underlying data/configuration or performs a controlled replay/cancel action.

4. The action and outcome are audited; replay remains idempotent.

#### Bulk import/export

1. The user uploads/selects data under an approved template and scope.

2. The system stages, validates and previews proposed creates/updates with errors before commit.

3. Authorized approval commits valid rows transactionally or as a traceable batch.

4. Exports apply field minimization, approval, asynchronous generation, checksum and expiry.

### 4.20.3 States and lifecycle

> Required state behavior<br>Jobs/events: Pending, Processing, Succeeded, Retry Scheduled, Dead-letter, Cancelled or Replayed. Import: Uploaded, Validating, Validation Failed, Ready, Approved, Processing, Completed/Partially Completed. Feature flags: Draft, Enabled by environment/audience, Disabled, Retired.

### 4.20.4 Business rules, permissions and validation

- Secrets are never displayed or stored as ordinary configuration values.

- Role and permission changes are audited and subject to default-deny semantics.

- Bulk operations never bypass row-level authorization, validation or immutable financial/academic controls.

- Support impersonation is disabled unless formally approved and then requires reason, duration, visible banner and full audit.

- Retention, legal hold and privacy actions preserve records that cannot lawfully or operationally be deleted.

### 4.20.5 Outputs, notifications and reporting

Reference-data screens, role/permission administration, integration health, job and exception queues, staged import reports, controlled exports, searchable audit, feature flags, system freshness page, retention/privacy workflows and support-access logs.

### 4.20.6 Complete testable requirements

| ID | Priority | Functional requirement | Required behavior / acceptance evidence |
| --- | --- | --- | --- |
| ADM-001 | Must | Authorized administrators shall manage controlled reference data such as class formats, durations, delivery modes, countries, currencies, statuses and reason codes. | Reference values have active/inactive state, display order and impact validation; used values cannot be hard-deleted. |
| ADM-002 | Must | Role templates and permission assignments shall be manageable through an audited interface. | Changes show affected users/scopes, require step-up authentication and cannot remove the last emergency administrator without safeguard. |
| ADM-003 | Must | Administrators shall manage non-secret Supabase, Daily.co and Resend integration configuration without exposing credentials. | The UI displays environment, provider status, approved sender/domain, webhook health and non-secret identifiers; service-role, API and signing secrets remain in server/worker secret management and changes are audited/validated. |
| ADM-004 | Must | The platform shall expose Supabase outbox/queue jobs, manual payment evidence/review exceptions and Daily.co/Resend webhook/integration health queues. | Authorized support can inspect sanitized metadata, receipt object/finalization state, correlation/provider IDs, attempt history and reconciliation status; eligible work can be replayed or resolved idempotently without editing source business records. |
| ADM-005 | Must | Bulk imports shall use staged validation and preview. | Rows are validated before commit; errors are downloadable; committed imports have batch ID, actor, source checksum and rollback/correction strategy. |
| ADM-006 | Must | Bulk exports shall enforce scope, approval and data minimization. | Sensitive exports require reason and may require approval; generated files expire and access is logged. |
| ADM-007 | Must | Audit records shall be searchable by actor, entity, action, date, origin and correlation ID. | Audit access is restricted; records are tamper-evident/append-only and retained according to policy. |
| ADM-008 | Must | Feature flags and phased release controls shall be supported. | Features can be enabled by environment, role, course or cohort; flag changes are audited and do not bypass authorization. |
| ADM-009 | Should | Business rules such as cancellation windows, reminder timing and approval thresholds shall be configuration-driven where safe. | Changes are versioned, validated and previewable; code remains authoritative for security invariants. |
| ADM-010 | Must | System status pages shall distinguish data, integration and job freshness. | Dashboards show last successful sync/aggregate and active incident; stale figures are not presented as current without warning. |
| ADM-011 | Must | Data retention, legal hold, archive and privacy request workflows shall be administrable by authorized roles. | Policies identify entity/data class and action; execution is logged, reversible where required and blocked by legal/financial obligations. |
| ADM-012 | Should | The system shall provide controlled impersonation or support-view capability only if formally approved. | Support view is time-limited, read-only by default, bannered, reason-based and fully audited; credentials are never shared. |

## 5. Cross-Feature States, Notifications and Reporting Controls

The following shared catalogues prevent modules from inventing incompatible states, notifications or metrics. Domain-specific records remain authoritative, while these tables define the minimum common interpretation.

### 5.1 Core account, request and enrolment states

| Object | States | Important transitions/rules |
| --- | --- | --- |
| Account | Pending verification -> Active -> Suspended/Deactivated/Locked | Verification activates free access; suspension does not delete prospect/trial history. |
| Trial request | Submitted -> Qualified -> Scheduling -> Scheduled -> Attended/No-show/Cancelled -> Converted/Closed | Request remains separate from occurrence; conversion references resulting order/enrolment. |
| Follow-up | Open -> Due -> Contacted -> Waiting -> Completed/No response/Closed | Trial outcome can create follow-up idempotently. |
| Membership purchase/renewal request | Draft -> Submitted -> Under Review -> Approved/Rejected -> Closed or Resubmitted | A new linked submission version is used for correction; the original request, evidence and decision are not overwritten. |
| Manual payment submission | Draft -> Submitted -> Under Review -> Approved/Rejected/Withdrawn/Superseded | Only Approved may create one confirmed payment transaction/allocation; reviewer concurrency and duplicate approval are blocked. |
| Membership term | Pending Activation -> Active -> Paused/Expired/Cancelled -> Renewed | Renewal creates a new term; the previous term and historical entitlement remain immutable and independently reportable. |

### 5.2 Live occurrence states

| Occurrence state | Meaning | Allowed next actions |
| --- | --- | --- |
| Draft | Not yet committed/published to participants. | Validate, assign participants/provider, schedule or cancel. |
| Scheduled | Visible and expected to occur. | Reschedule, cancel, join, record provider events. |
| In progress | Within live window/evidence is arriving. | Join/leave, support exception, close. |
| Awaiting report | Class ended; attendance normalized; trainer report due. | Submit report, correct evidence request. |
| In review | Report/evidence submitted for approval. | Approve, reject/return, request correction. |
| Approved | Delivery accepted as source truth. | Generate idempotent downstream records; later correction via adjustment/reversal. |
| Rejected / returned | Report requires correction; occurrence remains historically delivered/cancelled as evidence shows. | Resubmit version; retain decision history. |
| Cancelled | Will not occur or did not occur under cancellation policy. | Notify, entitlement/pay rules, replacement/makeup. |

### 5.3 Assessment states

| Assessment object | Core states | Control |
| --- | --- | --- |
| Quiz attempt | Not started -> In progress -> Submitted -> Scored -> Reviewed/Final | Server time and immutable item/policy snapshot. |
| Assignment/voice submission | Draft -> Submitted -> Under review -> Returned/Resubmitted -> Graded -> Published | Submission versions and rubric version retained. |
| Grade | Draft -> Moderated/Approved (optional) -> Published -> Corrected | Learner sees published only; correction history immutable. |
| Progress | Not started -> In progress -> Completed/Passed or Failed/Needs action | Derived from published completion-rule version and source events. |

### 5.4 Communication and case states

| Record | States / lifecycle | Rule |
| --- | --- | --- |
| Conversation | Open -> Archived/Closed | Participants and context are explicit; message retention/moderation policy applies. |
| Case | Open -> In Review -> Waiting on User/Internal -> Resolved -> Closed/Reopened | Owner, SLA, escalation, related object and resolution retained. |
| Notification | Scheduled -> Sending -> Delivered/Failed/Suppressed/Expired | Each attempt is durable; stale class reminders are cancelled on schedule change. |

### 5.5 Department and HR workflow states

| Workflow | State model | Pay/release rule |
| --- | --- | --- |
| Media | Assigned -> In Progress -> Submitted -> Under Review -> Revision Required/Approved -> Paid display | Approval creates earning; Paid is derived from payroll settlement, not an editable task status. |
| Development | Planned -> Assigned -> In Progress/Blocked -> In Review -> Testing -> Completed -> Deployed | Completion and deployment evidence are separate; specialist CI/source-control can integrate later. |
| HR letter | Draft -> Review/Approved -> Issued -> Delivered/Acknowledged -> Superseded/Revoked | Issued document and event are immutable; disciplinary/pay effects use separate records. |

### 5.6 Minimum notification event catalogue

| Category | Events |
| --- | --- |
| Identity | Verification, staff invitation, password/MFA/security change, suspicious sign-in. |
| Trial/CRM | Request received, scheduled/rescheduled/cancelled, reminders, attendance outcome, follow-up assignment. |
| Live class | Upcoming, meeting ready, change/cancel, report due, approval/rejection, attendance correction. |
| Learning | Content released, assignment due/overdue, submission received/returned, grade/feedback published, milestone completed. |
| Access/commerce | Membership request/renewal created, manual payment submitted/under review/approved/rejected, resubmission requested, official receipt issued, low entitlement, expiry, access activated/paused/resumed and refund/reversal. |
| Support | Case created/assigned, response, waiting, escalation, resolved/closed. |
| Payroll/HR | Pay statement, run status, settlement, invitation/onboarding task, document/letter issued or expiring. |
| Departments | Media assignment/submission/revision/approval; Development assignment/blocker/testing/deployment. |
| Platform | Integration/job/resource failure to authorized operations staff. |

### 5.7 KPI and reporting catalogue

| Area | KPI | Definition | Cadence / segmentation |
| --- | --- | --- | --- |
| Acquisition | Account-to-trial request conversion | Verified users submitting an eligible trial request / verified users who viewed trial CTA. | Weekly by source/programme. |
| Acquisition | Trial attendance rate | Trial participants present / scheduled eligible trial participants, excluding organization cancellations. | Weekly; by trainer/programme/source. |
| Sales | Trial-to-paid conversion | Paid enrolments linked to attended trial within attribution window / attended trials. | Monthly; rule version recorded. |
| Commerce | Manual payment review turnaround and outcome | Submission-to-decision median/p95, approval/rejection/resubmission rate and value by channel/currency. | Daily/weekly by reviewer role, queue age, channel, currency and exception reason. |
| Learning | Live attendance rate | Present participant records / eligible scheduled participant records. | Weekly by course/cohort. |
| Learning | Milestone completion rate | Learners completing milestone within target period / learners who started it. | Monthly by version. |
| Learning | Assessment completion/pass rate | Submitted or passed attempts / eligible assigned assessments. | By course/version/category. |
| Operations | Report approval cycle time | Median approved time - trainer submitted time. | Weekly; exception percent over SLA. |
| Operations | Resource delivery failure rate | Failed authorized opens/downloads / attempts. | Daily; target near zero. |
| Operations | Notification delivery success | Delivered transactional notifications / attempted terminal notifications. | Daily by channel/template. |
| Finance | Entitlement reconciliation exceptions | Unresolved ledger/balance inconsistencies. | Daily; target zero. |
| Payroll | Duplicate earning items | Duplicate qualifying source references. | Continuous; target zero. |
| Payroll | Payroll reconciliation difference | Settlement total - approved payroll total after authorized adjustments. | Per run; target zero. |
| Support | Case first response / resolution | Median and percentile duration by case type/priority. | Weekly against SLA. |
| Product | Multi-enrolment adoption | Active learners with 2+ enrolments / active learners. | Monthly. |
| Platform | Core journey availability / p95 latency | Synthetic journey success and measured latency. | Continuous against SLO. |

### 5.8 Functional audit minimum

- Authentication, MFA, recovery, session revocation, identity link/unlink and account-state changes.

- Role templates, permissions, scope assignments, sensitive exports and support/impersonation sessions.

- Course version review/publication, price/term/rate changes and catalogue impact decisions.

- Manual payment submission versions, evidence access, reviewer claim, approval/rejection/correction and allocation.

- Enrolment, trainer/cohort/schedule assignment, entitlement ledger entry and class attendance correction.

- Delivery approval, grade publication/correction, certificate issue and guardian/safeguarding decisions.

- Financial posting/reversal, earning generation/reservation, payroll approval/settlement and HR disciplinary/offboarding events.

- Provider webhook/job processing, replay, configuration change, data import/export, retention and privacy actions.

## 6. Requirement Coverage and Traceability

> Coverage result<br>This LMS+OPS-only v2.0 specification includes 273 functional requirements: 236 Must and 37 Should requirements across 20 feature areas. Public website, landing-page, SEO and website-CMS requirements have been removed from this FRS and should be governed by a separate Website PRD if needed.

### 6.1 Requirement inventory

| Code | Feature area | Total | Must | Should | ID range |
| --- | --- | --- | --- | --- | --- |
| FND | Platform Foundation | 10 | 9 | 1 | FND-001 - FND-010 |
| IAM | Identity, Authentication and Authorization | 17 | 15 | 2 | IAM-001 - IAM-017 |
| PORT | Learner Portal Catalogue and Free Users | 9 | 8 | 1 | PORT-001 - PORT-009 |
| CAT | Catalogue, Content Authoring, Products and Pricing | 15 | 13 | 2 | CAT-001 - CAT-015 |
| COM | Commerce, Manual Payments and Memberships | 15 | 14 | 1 | COM-001 - COM-015 |
| ENR | Enrolment and Learner Relationships | 12 | 11 | 1 | ENR-001 - ENR-012 |
| LIVE | Live Classes and Trial Delivery | 20 | 18 | 2 | LIVE-001 - LIVE-020 |
| MILE | Milestone-Based Self-Paced Learning | 15 | 12 | 3 | MILE-001 - MILE-015 |
| K12 | K-12 Tuition | 14 | 12 | 2 | K12-001 - K12-014 |
| ASM | Assessments, Submissions and Gradebook | 17 | 14 | 3 | ASM-001 - ASM-017 |
| RES | Resources and Media Assets | 12 | 11 | 1 | RES-001 - RES-012 |
| MSG | Communication, Cases and Notifications | 15 | 12 | 3 | MSG-001 - MSG-015 |
| DSH | Role Dashboards and Analytics | 15 | 13 | 2 | DSH-001 - DSH-015 |
| FIN | Finance | 14 | 12 | 2 | FIN-001 - FIN-014 |
| PAY | Payroll and Compensation | 16 | 15 | 1 | PAY-001 - PAY-016 |
| HR | HR Profiles, Documents and Letters | 12 | 10 | 2 | HR-001 - HR-012 |
| CSR | CSR Enrolments and Commission | 9 | 8 | 1 | CSR-001 - CSR-009 |
| MED | Media Department Operations | 13 | 11 | 2 | MED-001 - MED-013 |
| DEV | Development Department Operations | 11 | 8 | 3 | DEV-001 - DEV-011 |
| ADM | Administration and Platform Operations | 12 | 10 | 2 | ADM-001 - ADM-012 |

| Total functional requirements | Must | Should |
| --- | --- | --- |
| 273 | 236 | 37 |

### 6.2 Requested-outcome traceability

| Requested outcome | Requirement coverage | Design response |
| --- | --- | --- |
| Secure Google + email/password authentication | IAM-001 to IAM-017; SEC requirements | Verified identities, account linking, staff invite, MFA and scoped authorization. |
| Anyone can register and use free resources/previews | PORT-001 to PORT-009; IAM-001/002 | Free learner profile and access grant, not a fake paid client. |
| Self-service trial request | Trial workflow; LIVE-017; CSR-007 | Request remains distinct from scheduled occurrence and conversion. |
| Separate dashboards for current/future roles | DSH-001 to DSH-015; role model | Permission-scoped, drillable and configurable role assignments. |
| Live class variants/duration/audience managed by upper staff | CAT-012; LIVE-002; PAY-001/002 | Data-driven product/term dimensions; compensation remains separate. |
| Three offering types plus future AI | CAT-002; LIVE; MILE; K12; Section 7 | Shared foundations with explicit delivery model and extension contract. |
| Multiple courses for one learner | ENR-001 to ENR-012; DSH-002/003 | Person/learner with many independent enrolments/terms. |
| Assessments, grading, progress and resources | ASM, MILE, K12, RES requirements | Versioned attempts/submissions/gradebook/progress/resource access. |
| Trainer-student chat and cases | MSG-001 to MSG-015 | Context-aware communication and case workflow, with safeguarding. |
| Independent memberships/classes/payments/payroll | COM, LIVE-013/014, FIN, PAY | Events and ledgers replace shared mutable status/balance. |
| K-12 subjects and bundles | K12-001 to K12-014; CAT-011 | Bundle grants separate child subject enrolments. |
| Staff accounts controlled by management | IAM-006/007/008 | Invitation/onboarding; administrators never distribute permanent known passwords. |
| Resource/document reliability | RES-001 to RES-012; REL-003/010 | Versioned private storage, scanning, confirmation and restore. |
| Notifications and reminders | MSG-008 to MSG-014; notification catalogue | Durable in-app/email first; adapters for WhatsApp/SMS. |
| Employee letters/certificates and salary adjustments | HR-006 to HR-010; PAY-007 to PAY-010 | Versioned document events and explicit payroll lines. |
| CSR commissions | CSR-002 to CSR-009 | Verified source creates earning item and payroll settlement. |
| Media Department | MED-001 to MED-013 | Assignment/review/version/earning workflow and analytics. |
| Development Department | DEV-001 to DEV-011 | Lightweight task/bug/testing/release workflow. |
| Manual membership payments now; processors later | COM-001 to COM-015; FIN; DSH; MSG; Section 14.5 | Learner/payer enters payment details and uploads a private receipt; COO/OM/permissioned CSR approves or rejects; only approval creates payment/allocation/access, and a future processor reuses the same internal model. |

### 6.3 Acceptance and change-control rule

- A feature is not accepted until every Must requirement assigned to its release has a passing test or formally approved exception.

- Every requirement must be traceable to design, implementation unit, test case and release evidence using its stable ID.

- A change to business meaning, state, actor permission or acceptance evidence requires a versioned requirement change, not silent implementation drift.

- Should-requirement deferral must identify owner, impact, workaround, target phase and any schema/API decision needed now to avoid rework.

- Cross-domain acceptance must test the complete workflow, especially payment-to-access, class-to-entitlement/payroll, grade correction, resource recovery and offboarding.

## Appendix A - Glossary

| Term | Definition |
| --- | --- |
| Account | The application-access record. A person may link multiple authentication identities to one account. |
| Access grant | A right to use a course/content/service, usually time- or policy-limited; separate from enrolment. |
| Activity | A typed learner interaction such as text, video, quiz, assignment or voice recording. |
| Course run / cohort | An operational instance of a course version with roster, trainer(s) and schedule. |
| Course version | The immutable published syllabus/content version used by an enrolment. |
| Earning item | An immutable payable amount generated once from approved work or verified commission. |
| Enrolment | A learner's academic relationship to a course version/run; not a payment or credit balance. |
| Entitlement ledger | Append-only grants, debits, reversals, expiries and adjustments for one term/enrolment. |
| Guardian relationship | Verified relationship and permissions between a guardian and minor learner. |
| Manual payment submission | A versioned learner/payer statement of payment details and private receipt evidence awaiting authorized review; it is not yet confirmed money or access. |
| Membership term | Commercial/service agreement that defines live access, allowance and rules for a period. |
| Occurrence | One scheduled live teaching event; participants and attendance are separate records. |
| Outbox | A durable record of an event/job written transactionally with source data for safe asynchronous processing. |
| Payment review decision | The immutable approval or rejection of one manual payment submission version by a permissioned COO, Operational Manager or CSR reviewer. |
| Payment transaction | The confirmed internal financial event created after an approved manual submission or, later, a verified processor event; separate from membership and entitlement. |
| Payer | Person/entity financially responsible for an order; may differ from learner. |
| Person | Real-world individual independent of account, learner, staff, payer or guardian role. |
| Product | Sellable catalogue item whose purchase grants one or more terms/access entitlements. |
| Progress event | Granular evidence such as opened, completed, passed, submitted or graded. |
| Rate agreement | Effective-dated compensation rule applied to qualifying work and snapshotted on an earning item. |
| Role assignment | A permission template granted to an account within a scope and effective period. |
| Version | Immutable published definition or snapshot that preserves historical interpretation. |

## Appendix B - Review and Sign-off Checklist

| Review area | Approval question | Status / owner |
| --- | --- | --- |
| Feature ownership | Each of the 20 LMS+OPS feature areas has an accountable business owner and engineering owner. |  |
| Role and scope | Every action has approved actor roles, scope and segregation-of-duty rules. |  |
| Workflow states | All states, transitions, rejection/correction paths and terminal outcomes are approved. |  |
| Data relationships | Person, account, learner, payer, enrolment, membership, class, payment and payroll relationships remain separate. |  |
| Manual payments | Receipt fields, accepted payment channels, reviewer thresholds, rejection reasons, SLA and reconciliation policy are approved. |  |
| Learning models | Live, milestone and K-12 structures, completion, grading, progress and guardian policies are approved. |  |
| Provider behavior | Daily.co, Resend and Supabase failure/retry/reconciliation behavior is accepted. |  |
| Notifications | Recipients, timing, template owners, essential-message rules and escalation are approved. |  |
| Reports and KPIs | Metric definitions, drill-down source and access restrictions are approved. |  |
| Migration/cutover | Legacy data scope, reconciliation, parallel run, rollback and archive access are approved. |  |
| Test traceability | Every Must requirement has an owner and planned acceptance test. |  |
| Formal approval | COO, Product/Technology, Operations, Academics, Finance/Payroll, HR and safeguarding owners sign the baseline. |  |

> Baseline completion statement<br>When approved, this document becomes the functional baseline for product design and implementation. Detailed screen designs, database schema, API contracts and test cases may add precision, but they may not reduce or change these requirements without controlled revision.


## Appendix C - v2.0 Change Log

| Change | Result |
| --- | --- |
| Removed public website feature area | Removed WEB-001 through WEB-008 and all website/landing-page/SEO/CMS requirement rows. |
| Converted Public Catalogue wording to learner-portal wording | Retained free learner registration, previews, trial requests and membership entry as LMS portal functions, not marketing website functions. |
| Removed website-specific catalogue requirement | Removed the former SEO/shareable public-page requirement; the remaining free-access lifecycle requirement was renumbered so the PORT sequence is continuous. |
| Updated requirement counts | 20 feature areas, 273 functional requirements, 236 Must requirements and 37 Should requirements. |
| Renumbered Administration section | Administration and Platform Operations is now Section 4.20. |

