/**
 * IHS 2.0 Platform Admin Panel - Client-side Interactive Engine
 * Implements mock database, simulator permissions, dashboard drilldowns,
 * corrective actions, and real-time audit trail logs.
 */

// ============================================================================
// 1. MOCK DATABASE STATE
// ============================================================================

const db = {
  
  // ============================================================================
  // COURSE CREATOR DATASET (CATALOGUE, SYLLABUS, ASSESSMENTS, PREVIEW, REVIEW)
  // ============================================================================
  creatorData: {
    courses: [
      {
        id: "CRS-101",
        code: "TECH-FE-201",
        title: "Modern Full-Stack Web Development",
        programme: "Vocational Skills",
        faculty: "Faculty of Computing & Technology",
        deliveryModel: "Self-paced Milestone",
        activeVersion: "v1.2 (Draft)",
        latestPublished: "v1.0 (Live)",
        stage: "Draft",
        language: "English / Urdu",
        estimatedEffort: "12 Weeks (8 hrs/wk)",
        modulesCount: 6,
        lessonsCount: 28,
        assessmentsCount: 8,
        author: "Dr. Arsalan Khan",
        created: "2026-06-15",
        updated: "2026-08-16 10:45",
        description: "Comprehensive modern JavaScript, React 19, Node.js microservices, and database architecture.",
        learningOutcomes: "Build responsive full-stack applications, deploy production REST APIs, and manage state machines.",
        prerequisites: "Basic Computer Literacy & Logic Foundations",
        completionRule: "100% Milestones + Capstone Project Sign-off",
        priceLocked: "PKR 35,000 (Commercial catalogue managed - Read-only)"
      },
      {
        id: "CRS-102",
        code: "LIT-BAS-101",
        title: "Foundational Urdu & English Basic Literacy",
        programme: "Basic Literacy",
        faculty: "Faculty of Community Foundations",
        deliveryModel: "Live Scheduled",
        activeVersion: "v2.0 (In Review)",
        latestPublished: "v1.0 (Live)",
        stage: "In Review",
        language: "Urdu / English",
        estimatedEffort: "8 Weeks (4 hrs/wk)",
        modulesCount: 4,
        lessonsCount: 16,
        assessmentsCount: 4,
        author: "Dr. Arsalan Khan",
        created: "2026-05-10",
        updated: "2026-08-15 16:30",
        description: "Primary literacy and phonics for non-traditional adult learners.",
        learningOutcomes: "Read daily texts, understand essential vocabulary, and complete basic comprehension quizzes.",
        prerequisites: "Open Intake - No prerequisites",
        completionRule: "80% Live Attendance + Mid-term & Final Verbal Evaluations",
        priceLocked: "PKR 12,000 (Subsidized tier - Read-only)"
      },
      {
        id: "CRS-103",
        code: "ENG-SPK-301",
        title: "Spoken English Fluency & Professional Voice",
        programme: "Spoken English",
        faculty: "Faculty of Languages & Communication",
        deliveryModel: "Self-paced Milestone",
        activeVersion: "v1.0 (Approved)",
        latestPublished: "None (Awaiting Publish)",
        stage: "Approved",
        language: "English",
        estimatedEffort: "6 Weeks (5 hrs/wk)",
        modulesCount: 5,
        lessonsCount: 22,
        assessmentsCount: 12,
        author: "Dr. Arsalan Khan",
        created: "2026-07-01",
        updated: "2026-08-16 09:15",
        description: "Pronunciation, conversational cadence, workplace presentations, and acoustic voice submissions.",
        learningOutcomes: "Communicate clearly in workplace scenarios, pass pronunciation rubrics, and deliver speeches.",
        prerequisites: "Basic English Comprehension",
        completionRule: "All Voice Activities Graded + 70% Pass Mark",
        priceLocked: "PKR 18,000 (Commercial catalogue managed - Read-only)"
      },
      {
        id: "CRS-104",
        code: "K12-MTH-08",
        title: "Grade 8 Mathematics: Algebra & Geometry Mastery",
        programme: "K-12",
        faculty: "Faculty of Secondary Education",
        deliveryModel: "K-12 Live Tuition",
        activeVersion: "v1.1 (Draft)",
        latestPublished: "v1.0 (Live)",
        stage: "Draft",
        language: "English",
        estimatedEffort: "Full Academic Year 2026/27",
        modulesCount: 8,
        lessonsCount: 40,
        assessmentsCount: 14,
        author: "Dr. Arsalan Khan",
        created: "2026-06-20",
        updated: "2026-08-14 11:20",
        description: "FBISE & Cambridge aligned curriculum covering algebraic expressions, linear equations, and geometric proofs.",
        learningOutcomes: "Solve linear equations, understand geometric theorems, and complete board-standard worksheets.",
        prerequisites: "Grade 7 Mathematics Completed",
        completionRule: "Term Quizzes + Monthly Progress Assessments",
        priceLocked: "PKR 6,500/Month (Tuition membership - Read-only)"
      },
      {
        id: "CRS-105",
        code: "TECH-PY-101",
        title: "Python Programming & Data Analytics Foundations",
        programme: "Vocational Skills",
        faculty: "Faculty of Computing & Technology",
        deliveryModel: "Self-paced Milestone",
        activeVersion: "v1.0 (Published)",
        latestPublished: "v1.0 (Live)",
        stage: "Published",
        language: "English",
        estimatedEffort: "10 Weeks (6 hrs/wk)",
        modulesCount: 5,
        lessonsCount: 25,
        assessmentsCount: 6,
        author: "Dr. Arsalan Khan",
        created: "2026-04-12",
        updated: "2026-07-28 14:00",
        description: "Python 3.12 syntax, data structures, pandas analytics, and interactive notebook exercises.",
        learningOutcomes: "Write modular Python code, analyze tabular datasets, and construct visualization dashboards.",
        prerequisites: "Basic Numeracy",
        completionRule: "5 Milestone Quizzes + Data Analysis Capstone",
        priceLocked: "PKR 28,000 (Commercial catalogue managed - Read-only)"
      },
      {
        id: "CRS-106",
        code: "K12-SCI-09",
        title: "Grade 9 General Science: Physics & Chemistry Labs",
        programme: "K-12",
        faculty: "Faculty of Secondary Education",
        deliveryModel: "K-12 Live Tuition",
        activeVersion: "v1.0 (Published)",
        latestPublished: "v1.0 (Live)",
        stage: "Published",
        language: "English / Urdu",
        estimatedEffort: "Full Academic Year 2026/27",
        modulesCount: 6,
        lessonsCount: 36,
        assessmentsCount: 10,
        author: "Dr. Arsalan Khan",
        created: "2026-03-15",
        updated: "2026-06-30 18:00",
        description: "Kinematics, matter properties, atomic structure, and interactive virtual laboratory experiments.",
        learningOutcomes: "Understand core scientific principles, formulate hypotheses, and pass standard board exams.",
        prerequisites: "Grade 8 General Science",
        completionRule: "Term Lab Reports + Board Standard Exam",
        priceLocked: "PKR 7,000/Month (Tuition membership - Read-only)"
      }
    ],

    versions: [
      {
        id: "VER-401",
        courseId: "CRS-101",
        courseTitle: "Modern Full-Stack Web Development",
        versionTag: "v1.2",
        lifecycleState: "Draft",
        deliveryModel: "Self-paced Milestone",
        changesSummary: "Added Next.js 15 App Router module and replaced deprecated state libraries.",
        author: "Dr. Arsalan Khan",
        created: "2026-08-01",
        updated: "2026-08-16 10:45",
        validationStatus: "Warning (Missing 1 Resource Link)",
        reviewer: "Prof. Tariq Siddiqui (Assigned)",
        publishLock: "Immutable once published. Edits allowed in draft."
      },
      {
        id: "VER-402",
        courseId: "CRS-102",
        courseTitle: "Foundational Urdu & English Basic Literacy",
        versionTag: "v2.0",
        lifecycleState: "In Review",
        deliveryModel: "Live Scheduled",
        changesSummary: "Upgraded audio phonics lessons and added bilingual conversational flashcards.",
        author: "Dr. Arsalan Khan",
        created: "2026-07-15",
        updated: "2026-08-15 16:30",
        validationStatus: "Passed (100% Complete)",
        reviewer: "Dr. Maria Santos (Academic Board)",
        publishLock: "Locked during review. Edits frozen."
      },
      {
        id: "VER-403",
        courseId: "CRS-103",
        courseTitle: "Spoken English Fluency & Professional Voice",
        versionTag: "v1.0",
        lifecycleState: "Approved",
        deliveryModel: "Self-paced Milestone",
        changesSummary: "Initial version complete with 12 voice recording activities and pronunciation rubrics.",
        author: "Dr. Arsalan Khan",
        created: "2026-07-01",
        updated: "2026-08-16 09:15",
        validationStatus: "Passed (Sign-off granted)",
        reviewer: "Dr. Maria Santos (Approved 16 Aug)",
        publishLock: "Approved - Awaiting Catalogue Owner Publish."
      },
      {
        id: "VER-404",
        courseId: "CRS-104",
        courseTitle: "Grade 8 Mathematics: Algebra & Geometry Mastery",
        versionTag: "v1.1",
        lifecycleState: "Draft",
        deliveryModel: "K-12 Live Tuition",
        changesSummary: "Updated FBISE board syllabus alignment and added 15 new practice worksheets.",
        author: "Dr. Arsalan Khan",
        created: "2026-08-05",
        updated: "2026-08-14 11:20",
        validationStatus: "Passed",
        reviewer: "Unassigned",
        publishLock: "Draft - Authoring in progress."
      },
      {
        id: "VER-405",
        courseId: "CRS-105",
        courseTitle: "Python Programming & Data Analytics Foundations",
        versionTag: "v1.0",
        lifecycleState: "Published",
        deliveryModel: "Self-paced Milestone",
        changesSummary: "Initial live production release.",
        author: "Dr. Arsalan Khan",
        created: "2026-04-12",
        updated: "2026-07-28 14:00",
        validationStatus: "Certified",
        reviewer: "Academic Review Board",
        publishLock: "Immutable (Live). To update, create Version v2.0."
      }
    ],

    syllabus: [
      {
        id: "SYL-501",
        courseId: "CRS-101",
        versionId: "VER-401",
        level: "Level 1: Foundations",
        milestone: "Milestone 1: Web Architecture & DOM",
        module: "Module 1.1: Modern HTML5 & CSS Layouts",
        lesson: "Lesson 1: Semantic Structure & Accessibility (A11y)",
        activityType: "Formatted Text & Code Walkthrough",
        duration: "45 Mins",
        linkedResource: "RES-101 (HTML5 Semantic Blueprint PDF)",
        linkedAssessment: "QZ-201 (DOM Fundamentals Quiz)",
        completionCondition: "Read 100% + Pass Quiz >= 80%",
        prerequisite: "None (Entry Point)",
        status: "Draft (Editable)"
      },
      {
        id: "SYL-502",
        courseId: "CRS-101",
        versionId: "VER-401",
        level: "Level 1: Foundations",
        milestone: "Milestone 1: Web Architecture & DOM",
        module: "Module 1.2: Advanced CSS Grid & Flexbox",
        lesson: "Lesson 2: Responsive Grid Systems & Modern Tokens",
        activityType: "Interactive Coding Workspace",
        duration: "60 Mins",
        linkedResource: "RES-102 (CSS Grid Reference Sheet)",
        linkedAssessment: "ASN-301 (Responsive Dashboard Task)",
        completionCondition: "Submit Code Repository + Automated Lint Pass",
        prerequisite: "Lesson 1 Completed",
        status: "Draft (Editable)"
      },
      {
        id: "SYL-503",
        courseId: "CRS-101",
        versionId: "VER-401",
        level: "Level 2: Frontend Engineering",
        milestone: "Milestone 2: React 19 & Component Architecture",
        module: "Module 2.1: React State & Server Components",
        lesson: "Lesson 3: State Machines & Custom React Hooks",
        activityType: "Video Lecture & Sandbox Demo",
        duration: "75 Mins",
        linkedResource: "RES-103 (React 19 Architecture Diagram)",
        linkedAssessment: "QZ-202 (React Lifecycle & Hooks Quiz)",
        completionCondition: "Watch 90% Video + Quiz Pass >= 70%",
        prerequisite: "Milestone 1 Completed",
        status: "Draft (Editable)"
      },
      {
        id: "SYL-504",
        courseId: "CRS-103",
        versionId: "VER-403",
        level: "Level 1: Phonics & Articulation",
        milestone: "Milestone 1: Vowel Phonemes & Intonation",
        module: "Module 1.1: English Rhythm & Stress Patterns",
        lesson: "Lesson 1: Sentence Stress in Professional Dialogues",
        activityType: "Speaking / Voice Recording Activity",
        duration: "30 Mins",
        linkedResource: "RES-104 (Phonics Audio Reference MP3)",
        linkedAssessment: "VOC-401 (Voice Recording: Workplace Intro)",
        completionCondition: "Submit Audio Submission + Rubric Score >= 75%",
        prerequisite: "None",
        status: "Approved"
      }
    ],

    questions: [
      {
        id: "QST-801",
        title: "HTTP Status Code for Unauthorized Authentication",
        type: "Single Choice",
        category: "Web Protocols",
        difficulty: "Beginner",
        options: ["200 OK", "401 Unauthorized", "403 Forbidden", "500 Server Error"],
        correctAnswer: "401 Unauthorized",
        tags: ["HTTP", "REST", "Security"],
        version: "v1.1",
        usedInQuizzes: ["QZ-201", "QZ-204"],
        author: "Dr. Arsalan Khan"
      },
      {
        id: "QST-802",
        title: "Which CSS properties trigger hardware GPU acceleration?",
        type: "Multiple Choice",
        category: "Frontend Styling",
        difficulty: "Intermediate",
        options: ["transform", "opacity", "will-change", "margin-top"],
        correctAnswer: "transform, opacity, will-change",
        tags: ["CSS", "Performance", "Animation"],
        version: "v1.0",
        usedInQuizzes: ["QZ-201"],
        author: "Dr. Arsalan Khan"
      },
      {
        id: "QST-803",
        title: "React 19 Server Components can directly read server database connections.",
        type: "True/False",
        category: "React Architecture",
        difficulty: "Intermediate",
        options: ["True", "False"],
        correctAnswer: "True",
        tags: ["React", "RSC", "Fullstack"],
        version: "v1.0",
        usedInQuizzes: ["QZ-202"],
        author: "Dr. Arsalan Khan"
      },
      {
        id: "QST-804",
        title: "Order the standard software delivery lifecycle stages from start to finish.",
        type: "Ordering",
        category: "DevOps Foundations",
        difficulty: "Intermediate",
        options: ["1. Requirements Analysis", "2. Architecture Design", "3. Implementation", "4. QA Testing", "5. Production Deployment"],
        correctAnswer: "1 -> 2 -> 3 -> 4 -> 5",
        tags: ["SDLC", "Engineering"],
        version: "v1.0",
        usedInQuizzes: ["QZ-203"],
        author: "Dr. Arsalan Khan"
      }
    ],

    assessments: [
      {
        id: "QZ-201",
        title: "DOM Fundamentals & Modern HTML5 Mastery",
        type: "Quiz",
        course: "Modern Full-Stack Web Development",
        questionsCount: 15,
        timeLimit: "30 Mins",
        passMark: "80%",
        maxAttempts: 3,
        randomization: "Enabled (Shuffle Questions & Choices)",
        resultVisibility: "Immediate with Explanations",
        status: "Draft",
        linkedLesson: "Lesson 1: Semantic Structure & Accessibility"
      },
      {
        id: "QZ-202",
        title: "React 19 State Management & Hook Patterns",
        type: "Quiz",
        course: "Modern Full-Stack Web Development",
        questionsCount: 20,
        timeLimit: "45 Mins",
        passMark: "70%",
        maxAttempts: 2,
        randomization: "Enabled",
        resultVisibility: "Score Only until Final Submission",
        status: "Draft",
        linkedLesson: "Lesson 3: State Machines & Custom Hooks"
      },
      {
        id: "ASN-301",
        title: "Responsive Multi-Device Operations Dashboard",
        type: "Assignment",
        course: "Modern Full-Stack Web Development",
        submissionType: "GitHub Link & Live URL",
        deadline: "End of Milestone 1",
        rubric: "RUB-101 (Frontend Clean Architecture Rubric)",
        resubmissionPolicy: "Allowed up to 2 revisions",
        status: "Draft",
        linkedLesson: "Lesson 2: Responsive Grid Systems"
      },
      {
        id: "VOC-401",
        title: "Professional Workplace Self-Introduction (Spoken)",
        type: "Voice Activity",
        course: "Spoken English Fluency & Professional Voice",
        submissionType: "Acoustic Voice Recording (.mp3 / .wav)",
        durationRequirement: "90 - 120 Seconds",
        rubric: "RUB-102 (Phonetic Cadence & Pronunciation Rubric)",
        reviewRequirement: "Trainer / AI Speech Evaluation",
        status: "Approved",
        linkedLesson: "Lesson 1: Sentence Stress in Professional Dialogues"
      }
    ],

    resources: [
      {
        id: "RES-101",
        title: "HTML5 Semantic Blueprint & Accessibility Standards",
        format: "PDF Document",
        size: "2.4 MB",
        version: "v1.2",
        sha256: "a94f6e812d09c1482b6e...verified",
        scanStatus: "Clean / Verified",
        accessLevel: "Enrolled & Guest Preview Eligible",
        linkedCoursesCount: 2,
        uploadedAt: "2026-08-10 11:30",
        status: "Uploaded (Verified)"
      },
      {
        id: "RES-102",
        title: "CSS Grid 2026 Cheat Sheet & Token Palette",
        format: "PDF Document",
        size: "1.8 MB",
        version: "v1.0",
        sha256: "e3b0c44298fc1c149afb...verified",
        scanStatus: "Clean / Verified",
        accessLevel: "Enrolled Learners Only",
        linkedCoursesCount: 3,
        uploadedAt: "2026-08-11 14:15",
        status: "Uploaded (Verified)"
      },
      {
        id: "RES-103",
        title: "React 19 Component Architecture Masterclass Video",
        format: "MP4 Video (1080p)",
        size: "184.5 MB",
        version: "v1.0",
        sha256: "f48c082a1d77b81938fe...verified",
        scanStatus: "Clean / Stream Ready",
        accessLevel: "Enrolled Learners (Protected DRM)",
        linkedCoursesCount: 1,
        uploadedAt: "2026-08-12 16:45",
        status: "Uploaded (Verified)"
      },
      {
        id: "RES-104",
        title: "British & American Phonetic Audio Reference Samples",
        format: "Audio MP3 Archive",
        size: "42.0 MB",
        version: "v2.1",
        sha256: "b21a8901ce4829ad4102...verified",
        scanStatus: "Clean / Verified",
        accessLevel: "Free Preview + Enrolled",
        linkedCoursesCount: 2,
        uploadedAt: "2026-08-14 09:30",
        status: "Uploaded (Verified)"
      }
    ],

    rules: [
      {
        id: "RUL-601",
        course: "Modern Full-Stack Web Development",
        type: "Prerequisite",
        targetItem: "Milestone 2: React 19 Engineering",
        condition: "Milestone 1 Completed AND Score on QZ-201 >= 80%",
        evaluationEngine: "Automated (Client & Server State Machine)",
        status: "Draft",
        updated: "2026-08-15"
      },
      {
        id: "RUL-602",
        course: "Modern Full-Stack Web Development",
        type: "Completion Rule",
        targetItem: "Full Course Certificate Generation",
        condition: "100% Lesson Viewings + Capstone Repository Verified",
        evaluationEngine: "Automated + Peer Review Check",
        status: "Draft",
        updated: "2026-08-15"
      },
      {
        id: "RUL-603",
        course: "Spoken English Fluency",
        type: "Attempt / Retry Rule",
        targetItem: "Voice Evaluation VOC-401",
        condition: "Max 3 Attempts · 24-Hour Cooldown between attempts · Highest score retained",
        evaluationEngine: "Server Milestone Engine",
        status: "Approved",
        updated: "2026-08-14"
      }
    ],

    reviewComments: [
      {
        id: "REV-901",
        versionId: "VER-401",
        courseTitle: "Modern Full-Stack Web Development",
        item: "Module 1.2: Lesson 2 (CSS Grid)",
        reviewer: "Prof. Tariq Siddiqui (Academic Reviewer)",
        severity: "Blocking",
        comment: "The attached assignment ASN-301 is missing grading rubric weights for Mobile Responsiveness. Please update before approval.",
        status: "Changes Requested",
        date: "2026-08-15 17:00",
        resolution: "Pending author update"
      },
      {
        id: "REV-902",
        versionId: "VER-401",
        courseTitle: "Modern Full-Stack Web Development",
        item: "Prerequisite Rules: RUL-601",
        reviewer: "Dr. Maria Santos (Pedagogy Lead)",
        severity: "Advisory",
        comment: "Recommended increasing quiz attempts from 2 to 3 for novice learners.",
        status: "Resolved",
        date: "2026-08-14 11:30",
        resolution: "Updated attempt limits to 3."
      },
      {
        id: "REV-903",
        versionId: "VER-402",
        courseTitle: "Foundational Urdu & English Basic Literacy",
        item: "Lesson 4: Audio Phonics",
        reviewer: "Dr. Maria Santos (Pedagogy Lead)",
        severity: "Advisory",
        comment: "Audio volume on sample 4B is slightly low. Re-normalize before live deployment.",
        status: "Open",
        date: "2026-08-15 14:20",
        resolution: "In Review"
      }
    ],

    k12Syllabi: [
      {
        id: "K12-SYL-01",
        grade: "Grade 8",
        subject: "Mathematics",
        curriculumBoard: "Federal Board (FBISE) & Cambridge O-Level aligned",
        academicYear: "2026 / 2027",
        unitsCount: 10,
        chapters: "1. Rational Numbers, 2. Linear Equations, 3. Geometry & Polygons, 4. Algebraic Identities",
        status: "Draft (In Authoring)",
        leadAuthor: "Dr. Arsalan Khan",
        updated: "2026-08-14"
      },
      {
        id: "K12-SYL-02",
        grade: "Grade 9",
        subject: "General Science",
        curriculumBoard: "Federal Board (FBISE) Standard",
        academicYear: "2026 / 2027",
        unitsCount: 8,
        chapters: "1. Motion & Forces, 2. Matter & Energy, 3. Chemical Reactions, 4. Ecosystems",
        status: "Published (Live)",
        leadAuthor: "Dr. Arsalan Khan",
        updated: "2026-06-30"
      }
    ],

    auditLogs: [
      {
        timestamp: "2026-08-16 10:45",
        actor: "Dr. Arsalan Khan",
        action: "CREATOR_SYLLABUS_UPDATED",
        details: "Modified lesson 3 hierarchy and linked assessment QZ-202 in course CRS-101.",
        severity: "Low"
      },
      {
        timestamp: "2026-08-15 16:30",
        actor: "Dr. Arsalan Khan",
        action: "CREATOR_SUBMITTED_FOR_REVIEW",
        details: "Submitted version VER-402 (Foundational Literacy v2.0) for academic peer review.",
        severity: "Medium"
      },
      {
        timestamp: "2026-08-14 09:30",
        actor: "Dr. Arsalan Khan",
        action: "CREATOR_RESOURCE_UPLOADED",
        details: "Uploaded and verified SHA-256 for phonetic audio samples RES-104.",
        severity: "Low"
      }
    ]
  },

  csrData: {
    leads: [
      { id: "LD-101", name: "Zubair Hashmi", contact: "+92 300 4567890", email: "zubair.h@gmail.com", source: "Facebook Ads", programme: "Basic Literacy", stage: "New", reason: "Inbound Trial Request", nextAction: "Introductory Call & Consent", expectedValue: "PKR 18,000", consent: "Pending", csr: "Sarah Jenkins", created: "2026-08-16 09:30" },
      { id: "LD-102", name: "Mariam Tariq", contact: "+92 321 8899770", email: "mariam.t@yahoo.com", source: "Google Search", programme: "Applied Numeracy", stage: "Contacted", reason: "Initial Placement Discussed", nextAction: "Send Placement Assessment Link", expectedValue: "PKR 24,000", consent: "Verified", csr: "Sarah Jenkins", created: "2026-08-15 14:15" },
      { id: "LD-103", name: "Kamran Siddiqui", contact: "+92 333 1122334", email: "k.siddiqui@outlook.com", source: "Direct Referral", programme: "Vocational Technology", stage: "Qualified", reason: "Placement 82% & Time Agreed", nextAction: "Schedule Trial Consultation", expectedValue: "PKR 35,000", consent: "Verified", csr: "Sarah Jenkins", created: "2026-08-14 11:00" },
      { id: "LD-104", name: "Areeba Farooq", contact: "+92 345 9988776", email: "areeba.f@hotmail.com", source: "Web Portal", programme: "K-12 Grade 8 Math", stage: "Qualified", reason: "Parent Consent Submitted", nextAction: "Confirm Trial Slot", expectedValue: "PKR 32,000", consent: "Verified", csr: "Sarah Jenkins", created: "2026-08-14 16:40" },
      { id: "LD-105", name: "Danish Qureshi", contact: "+92 301 2233445", email: "danish.q@gmail.com", source: "Facebook Ads", programme: "Basic Literacy", stage: "Converted", reason: "Enrolled in Cohort N4", nextAction: "Enrolment Activated", expectedValue: "PKR 18,000", consent: "Verified", csr: "Sarah Jenkins", created: "2026-08-10 10:20" },
      { id: "LD-106", name: "Hina Altaf", contact: "+92 312 6677889", email: "hina.a@live.com", source: "Google Search", programme: "Applied Numeracy", stage: "Lost", reason: "Price sensitivity / shifted to Q4", nextAction: "Archive & Re-engage Nov 2026", expectedValue: "PKR 24,000", consent: "Declined", csr: "Sarah Jenkins", created: "2026-08-08 12:00" },
      { id: "LD-107", name: "Usman Raza", contact: "+92 300 7788991", email: "usman.raza@gmail.com", source: "Direct Referral", programme: "Vocational Technology", stage: "New", reason: "Web Inquiry Form", nextAction: "Initial Contact", expectedValue: "PKR 35,000", consent: "Pending", csr: "Amna Saleem", created: "2026-08-16 11:15" },
      { id: "LD-108", name: "Saima Bano", contact: "+92 322 4455667", email: "saima.b@yahoo.com", source: "Facebook Ads", programme: "Basic Literacy", stage: "Contacted", reason: "WhatsApp Inquiry Sent", nextAction: "Follow-up Call", expectedValue: "PKR 18,000", consent: "Pending", csr: "Amna Saleem", created: "2026-08-15 17:30" }
    ],
    followups: [
      { id: "FLP-301", leadId: "LD-101", leadName: "Zubair Hashmi", contact: "+92 300 4567890", programme: "Basic Literacy", csr: "Sarah Jenkins", dueDate: "Today 14:00 PKT", type: "Phone Call", status: "Due", history: "Inquiry submitted 2h ago. Needs 1:1 adult literacy details.", nextAction: "Call to confirm availability and placement test." },
      { id: "FLP-302", leadId: "LD-102", leadName: "Mariam Tariq", contact: "+92 321 8899770", programme: "Applied Numeracy", csr: "Sarah Jenkins", dueDate: "Today 15:30 PKT", type: "WhatsApp / Email", status: "Due", history: "Placement test link sent yesterday. No score logged yet.", nextAction: "Send reminder prompt with direct assessment link." },
      { id: "FLP-303", leadId: "LD-103", leadName: "Kamran Siddiqui", contact: "+92 333 1122334", programme: "Vocational Tech", csr: "Sarah Jenkins", dueDate: "Today 16:45 PKT", type: "Trial Confirmation", status: "Due", history: "Qualified score 82%. Preferred slot: Sat 16:00.", nextAction: "Confirm trainer availability with OM & send Daily.co link." },
      { id: "FLP-304", leadId: "LD-104", leadName: "Areeba Farooq", contact: "+92 345 9988776", programme: "K-12 Grade 8 Math", csr: "Sarah Jenkins", dueDate: "Today 18:00 PKT", type: "Parent Consultation", status: "Due", history: "Parent inquired about weekend section schedule.", nextAction: "Discuss Section A timings and fee structure." },
      { id: "FLP-305", leadId: "LD-107", leadName: "Usman Raza", contact: "+92 300 7788991", programme: "Vocational Tech", csr: "Sarah Jenkins", dueDate: "Tomorrow 11:00 PKT", type: "Introductory Call", status: "Upcoming", history: "Inquiry via web form.", nextAction: "Call to introduce Vocational Web Track." },
      { id: "FLP-306", leadId: "LD-108", leadName: "Saima Bano", contact: "+92 322 4455667", programme: "Basic Literacy", csr: "Sarah Jenkins", dueDate: "Tomorrow 15:00 PKT", type: "Phone Call", status: "Upcoming", history: "Initial message sent.", nextAction: "Follow-up on WhatsApp reply." },
      { id: "FLP-307", leadId: "LD-105", leadName: "Danish Qureshi", contact: "+92 301 2233445", programme: "Basic Literacy", csr: "Sarah Jenkins", dueDate: "2026-08-11", type: "Post-Trial Conversion", status: "Completed", history: "Trial completed successfully. Enrolment verified.", nextAction: "Enrolment confirmed." },
      { id: "FLP-308", leadId: "LD-106", leadName: "Hina Altaf", contact: "+92 312 6677889", programme: "Applied Numeracy", csr: "Sarah Jenkins", dueDate: "2026-08-09", type: "Phone Call", status: "No Response", history: "3 contact attempts made over 5 days.", nextAction: "Marked lost / re-engage later." }
    ],
    trials: [
      { id: "TRL-501", leadId: "LD-103", prospect: "Kamran Siddiqui", course: "Vocational Technology", placementScore: "82%", consent: "Verified", csr: "Sarah Jenkins", slot: "Today 16:00 - 16:45", trainer: "Sara Javed", room: "https://ihs.daily.co/trial-501", attendance: "Pending Join", status: "Scheduled", outcome: "Pending Delivery" },
      { id: "TRL-502", leadId: "LD-104", prospect: "Areeba Farooq", course: "K-12 Grade 8 Math", placementScore: "78%", consent: "Verified (Parent)", csr: "Sarah Jenkins", slot: "Tomorrow 11:00 - 11:45", trainer: "Imran Qureshi", room: "https://ihs.daily.co/trial-502", attendance: "Scheduled", status: "Scheduled", outcome: "Pending Delivery" },
      { id: "TRL-503", leadId: "LD-101", prospect: "Zubair Hashmi", course: "Basic Literacy", placementScore: "74%", consent: "Pending", csr: "Sarah Jenkins", slot: "Unassigned", trainer: "Unassigned", room: "", attendance: "Not Scheduled", status: "Ready for Scheduling", outcome: "Awaiting Schedule" },
      { id: "TRL-504", leadId: "LD-102", prospect: "Mariam Tariq", course: "Applied Numeracy", placementScore: "Pending", consent: "Verified", csr: "Sarah Jenkins", slot: "Unassigned", trainer: "Unassigned", room: "", attendance: "Not Scheduled", status: "Qualification", outcome: "Needs Placement" },
      { id: "TRL-505", leadId: "LD-105", prospect: "Danish Qureshi", course: "Basic Literacy", placementScore: "85%", consent: "Verified", csr: "Sarah Jenkins", slot: "2026-08-10 14:00", trainer: "Nadia Rahman", room: "https://ihs.daily.co/trial-505", attendance: "Completed (45m/45m)", status: "Completed", outcome: "High Interest -> Converted" },
      { id: "TRL-506", leadId: "LD-106", prospect: "Hina Altaf", course: "Applied Numeracy", placementScore: "68%", consent: "Verified", csr: "Sarah Jenkins", slot: "2026-08-08 15:00", trainer: "Nadia Rahman", room: "https://ihs.daily.co/trial-506", attendance: "No-Show (Learner)", status: "No-Show", outcome: "Did not attend" }
    ],
    enrolments: [
      { id: "AEN-701", leadId: "LD-103", prospect: "Kamran Siddiqui", programme: "Vocational Technology", membership: "Standard Cohort (3 Months)", amount: "PKR 35,000", paymentStatus: "Awaiting Submission", csr: "Sarah Jenkins", attribution: "Sarah Jenkins (100%)", status: "Conversion Opportunity" },
      { id: "AEN-702", leadId: "LD-104", prospect: "Areeba Farooq", programme: "K-12 Grade 8 Math", membership: "Full Academic Term", amount: "PKR 32,000", paymentStatus: "Order Initiated", csr: "Sarah Jenkins", attribution: "Sarah Jenkins (100%)", status: "Membership Request" },
      { id: "AEN-703", leadId: "LD-105", prospect: "Danish Qureshi", programme: "Basic Literacy", membership: "Foundations 1:1 Plan", amount: "PKR 18,000", paymentStatus: "Verified & Approved", csr: "Sarah Jenkins", attribution: "Sarah Jenkins (100%)", status: "Active Enrolment" },
      { id: "AEN-704", leadId: "LD-109", prospect: "Zaid Khan", programme: "Basic Literacy", membership: "Foundations 1:1 Plan", amount: "PKR 18,000", paymentStatus: "Payment Under Review", csr: "Sarah Jenkins", attribution: "Sarah Jenkins (100%)", status: "Pending Activation" },
      { id: "AEN-705", leadId: "LD-110", prospect: "Areeba Siddiqui", programme: "Applied Numeracy", membership: "Group Cohort Plan", amount: "PKR 24,000", paymentStatus: "Payment Under Review", csr: "Sarah Jenkins", attribution: "Sarah Jenkins (100%)", status: "Pending Activation" },
      { id: "AEN-706", leadId: "LD-111", prospect: "Bilal Ahmed", programme: "Basic Literacy", membership: "One-to-One Plan", amount: "PKR 18,000", paymentStatus: "Verified & Approved", csr: "Sarah Jenkins", attribution: "Sarah Jenkins (100%)", status: "Active Enrolment" }
    ],
    payments: [
      { id: "PAY-801", learner: "Zaid Khan", payer: "Muhammad Khan (Guardian)", course: "Basic Literacy Foundations", submittedAmount: "PKR 18,000", expectedAmount: "PKR 18,000", channel: "Bank Transfer (Meezan Bank)", reference: "TRX-9823104", receiptChecksum: "sha256:7f3a88019...", receiptFile: "meezan_slip_801.pdf", age: "1h ago", status: "Awaiting Review", csr: "Sarah Jenkins" },
      { id: "PAY-802", learner: "Areeba Siddiqui", payer: "Areeba Siddiqui (Self)", course: "Applied Numeracy Cohort N4", submittedAmount: "PKR 24,000", expectedAmount: "PKR 24,000", channel: "Bank Transfer (HBL Direct)", reference: "HBL-449102", receiptChecksum: "sha256:3a1b8890c...", receiptFile: "hbl_transfer_802.pdf", age: "3h ago", status: "Under Review", csr: "Sarah Jenkins" },
      { id: "PAY-803", learner: "Hassan Ali", payer: "Tariq Ali (Guardian)", course: "K-12 Grade 8 Math Section A", submittedAmount: "PKR 32,000", expectedAmount: "PKR 32,000", channel: "Easypaisa Direct", reference: "EP-883011", receiptChecksum: "sha256:e4190822c...", receiptFile: "easypaisa_803.jpg", age: "5h ago", status: "Awaiting Review", csr: "Sarah Jenkins" },
      { id: "PAY-804", learner: "Danish Qureshi", payer: "Danish Qureshi", course: "Basic Literacy Foundations", submittedAmount: "PKR 18,000", expectedAmount: "PKR 18,000", channel: "Bank Transfer (Allied Bank)", reference: "ABL-772109", receiptChecksum: "sha256:c9918231a...", receiptFile: "abl_receipt_804.pdf", age: "4d ago", status: "Approved", csr: "Sarah Jenkins" },
      { id: "PAY-805", learner: "Farhan Malik", payer: "Farhan Malik", course: "Vocational Technology", submittedAmount: "PKR 25,000", expectedAmount: "PKR 35,000", channel: "JazzCash", reference: "JC-112290", receiptChecksum: "sha256:b1129988e...", receiptFile: "jazzcash_805.jpg", age: "1d ago", status: "Rejected / Correction", csr: "Sarah Jenkins" }
    ],
    commissions: [
      { id: "COM-901", enrolmentId: "AEN-703", learner: "Danish Qureshi", product: "Basic Literacy 1:1", salesValue: "PKR 18,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 1,800", status: "Payable", payrollPeriod: "Aug 2026", date: "2026-08-11" },
      { id: "COM-902", enrolmentId: "AEN-706", learner: "Bilal Ahmed", product: "Basic Literacy 1:1", salesValue: "PKR 18,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 1,800", status: "Payable", payrollPeriod: "Aug 2026", date: "2026-08-09" },
      { id: "COM-903", enrolmentId: "AEN-704", learner: "Zaid Khan", product: "Basic Literacy 1:1", salesValue: "PKR 18,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 1,800", status: "Pending Verification", payrollPeriod: "Aug 2026", date: "2026-08-16" },
      { id: "COM-904", enrolmentId: "AEN-705", learner: "Areeba Siddiqui", product: "Applied Numeracy Group", salesValue: "PKR 24,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 2,400", status: "Pending Verification", payrollPeriod: "Aug 2026", date: "2026-08-16" },
      { id: "COM-905", enrolmentId: "AEN-690", learner: "Sana Mir", product: "Dual Course Bundle", salesValue: "PKR 38,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 3,800", status: "Paid", payrollPeriod: "Jul 2026", date: "2026-07-28" },
      { id: "COM-906", enrolmentId: "AEN-691", learner: "Omar Khalid", product: "Applied Numeracy Group", salesValue: "PKR 24,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 2,400", status: "Paid", payrollPeriod: "Jul 2026", date: "2026-07-25" },
      { id: "COM-907", enrolmentId: "AEN-680", learner: "Tariq Mahmood", product: "Vocational Technology", salesValue: "PKR 35,000", plan: "Standard CSR Sales Plan (10%)", commissionAmount: "PKR 3,500", status: "Reserved", payrollPeriod: "Aug 2026", date: "2026-08-02" }
    ],
    cases: [
      { id: "CAS-401", subject: "Prospect inquiring about evening 1:1 slot availability", category: "Prospect Inquiry", priority: "Medium", sla: "1h 45m remaining", prospect: "Zubair Hashmi", owner: "Sarah Jenkins", status: "In Review" },
      { id: "CAS-402", subject: "Trial placement score discrepancy clarification", category: "Trial Issue", priority: "High", sla: "35m remaining", prospect: "Mariam Tariq", owner: "Sarah Jenkins", status: "In Review" },
      { id: "CAS-403", subject: "Parent requesting fee instalment breakdown for K-12", category: "Payment Inquiry", priority: "Medium", sla: "4h 20m remaining", prospect: "Areeba Farooq", owner: "Sarah Jenkins", status: "Open" },
      { id: "CAS-404", subject: "Assisted checkout bank transfer slip confirmation", category: "Enrolment Support", priority: "Low", sla: "Met", prospect: "Danish Qureshi", owner: "Sarah Jenkins", status: "Resolved" },
      { id: "CAS-405", subject: "Learner rescheduling trial consultation due to power outage", category: "Trial Reschedule", priority: "Low", sla: "Met", prospect: "Kamran Siddiqui", owner: "Sarah Jenkins", status: "Resolved" }
    ]
  },

  // Current session information
  currentUser: {
    name: "Admin User",
    role: "Platform Admin",
    roleKey: "platform_admin"
  },
  
  impersonationSession: {
    active: false,
    user: null,
    reason: "",
    ticketId: "",
    approval: "",
    mode: "Read-only",
    expiresAt: null
  },

  // Active platform incidents
  incidents: [
    {
      id: "INC-991",
      title: "Resend Mailer Outbound Failure Rate Spike",
      severity: "Warning",
      status: "Active",
      description: "Webhook deliveries to Resend are experiencing 12% timeout rates. Latency spike detected."
    }
  ],

  // Users Accounts (IAM)
  users: [
    { id: "usr_101", personId: "per_4101", name: "Huzsam Ahmed", email: "huzsam@innovator.edu", role: "Trainer", scope: "Course assignments", userType: "Staff / Trainer", identities: ["Email and password", "Google"], mfa: "Enabled", securityEvents: 2, status: "Active", lastLogin: "2026-08-16 11:20:45" },
    { id: "usr_102", personId: "per_4102", name: "Sarah Connor", email: "s.connor@cyberdyne.org", role: "Operations", scope: "Organization", userType: "Staff", identities: ["Email and password"], mfa: "Enabled", securityEvents: 1, status: "Active", lastLogin: "2026-08-16 12:45:10" },
    { id: "usr_103", personId: "per_4103", name: "John Doe", email: "johndoe@learner.com", role: "Learner", scope: "Own enrolments", userType: "Learner", identities: ["Google"], mfa: "Not required", securityEvents: 3, status: "Active", lastLogin: "2026-08-16 09:15:30" },
    { id: "usr_104", personId: "per_4104", name: "Miles Dyson", email: "dyson@creator.net", role: "Trainer", scope: "Pending assignment", userType: "Staff / Trainer", identities: ["Invitation pending"], mfa: "Pending", securityEvents: 0, status: "Pending Verification", lastLogin: "Never" },
    { id: "usr_105", personId: "per_4105", name: "T-800 Cyber", email: "terminator@future.mil", role: "Platform Admin", scope: "Organization", userType: "Staff", identities: ["Email and password"], mfa: "Enabled", securityEvents: 7, status: "Deactivated", lastLogin: "2026-08-15 23:12:00" },
    { id: "usr_106", personId: "per_4106", name: "Clara Oswald", email: "clara.o@timelord.net", role: "Learner", scope: "Own enrolments", userType: "Learner", identities: ["Email and password", "Google"], mfa: "Not required", securityEvents: 1, status: "Active", lastLogin: "2026-08-16 10:04:12" }
  ],

  // Invitations (IAM)
  invitations: [
    { id: "inv_201", email: "marcus.wright@project.org", role: "Trainer", scope: "Course", onboarding: "Pending identity verification", mfa: "Required", createdBy: "Sarah Connor", sentDate: "2026-08-15 14:22:00", status: "Sent" },
    { id: "inv_202", email: "kyle.reese@resistance.net", role: "Learner", scope: "Assigned record", onboarding: "Profile complete", mfa: "Not required", createdBy: "Admin User", sentDate: "2026-08-16 08:30:00", status: "Accepted" },
    { id: "inv_203", email: "dr.silberman@clinical.com", role: "Trainer", scope: "Course", onboarding: "Not started", mfa: "Required", createdBy: "Sarah Connor", sentDate: "2026-08-10 11:00:00", status: "Expired" }
  ],

  // Active Security Sessions (IAM)
  sessions: [
    { id: "sess_301", userName: "Admin User", userEmail: "admin@ihs.org", ipAddress: "192.168.1.55", location: "Detroit, MI", device: "Chrome 122 / Windows 11", loginTime: "2026-08-16 13:02:11", status: "Active" },
    { id: "sess_302", userName: "Sarah Connor", userEmail: "s.connor@cyberdyne.org", ipAddress: "172.56.21.90", location: "Los Angeles, CA", device: "Safari Mobile / iOS 17", loginTime: "2026-08-16 12:45:10", status: "Active" },
    { id: "sess_303", userName: "Huzsam Ahmed", userEmail: "huzsam@innovator.edu", ipAddress: "109.112.5.4", location: "London, UK", device: "Firefox 123 / macOS Sonoma", loginTime: "2026-08-16 11:20:45", status: "Active" },
    { id: "sess_304", userName: "John Doe", userEmail: "johndoe@learner.com", ipAddress: "89.207.12.54", location: "Berlin, DE", device: "Edge 121 / Windows 10", loginTime: "2026-08-16 09:15:30", status: "Active" }
  ],

  // Role Mappings & Permissions Matrix (IAM)
  rolesPermissions: {
    "Platform Admin": ["view_dashboard", "manage_users", "manage_invites", "manage_security", "configure_settings", "manage_integrations", "manage_jobs", "data_operations", "toggle_flags", "view_audit", "system_status", "data_lifecycle", "impersonate_support"],
    "Operations": ["view_dashboard", "manage_users", "manage_invites", "data_operations", "impersonate_support"],
    "Trainer": ["view_dashboard"],
    "Learner": ["view_dashboard"]
  },
  roleMetadata: {
    "Platform Admin": { status: "Active", scope: "Organization", protected: true },
    "Operations": { status: "Active", scope: "Organization", protected: false },
    "Trainer": { status: "Active", scope: "Course", protected: false },
    "Learner": { status: "Active", scope: "Assigned record", protected: false }
  },

  // Reference Data Category Entries (ADM)
  referenceData: {
    courses: [
      { code: "CAT-LIT", value: "Basic Literacy", description: "Elementary educational reading & writing tracks", restricted: true },
      { code: "CAT-NUM", value: "Applied Numeracy", description: "Practical calculation metrics and basic arithmetic", restricted: false },
      { code: "CAT-TEC", value: "Vocational Technology", description: "Software tools, server setup and industrial frameworks", restricted: false }
    ],
    locations: [
      { code: "HUB-DET", value: "Detroit Central Hub", description: "Michigan Operational Office and Live Classroom space", restricted: false },
      { code: "HUB-LON", value: "London East Facility", description: "Secondary European learning facility", restricted: false }
    ],
    rejections: [
      { code: "REJ-MISS-ID", value: "Missing Identification ID", description: "Profile photos or legal names do not match government evidence", restricted: true },
      { code: "REJ-BAD-PAY", value: "Payment Authentication Failure", description: "Gateway card rejected or chargeback threshold met", restricted: false }
    ]
  },

  // System Configuration Settings (ADM)
  systemSettings: [
    { category: "Global Platform", key: "platform_title", value: "Innovator Huzsam LMS (IHS 2.0)", description: "The title loaded in user browser tabs.", owner: "Platform Operations", scope: "Production", lifecycle: "Active", version: 4 },
    { category: "Global Platform", key: "support_email_routing", value: "escalations@innovator.edu", description: "Target address for approved support escalations.", owner: "Platform Operations", scope: "Production", lifecycle: "Active", version: 2 },
    { category: "Security Policies", key: "session_timeout_mins", value: "60", description: "Minutes of inactivity before logging out a browser session.", owner: "Security", scope: "Organization", lifecycle: "Active", version: 7 },
    { category: "Security Policies", key: "mandatory_mfa_roles", value: "Platform Admin, Operations", description: "Roles that require authenticator verification.", owner: "Security", scope: "Organization", lifecycle: "Active", version: 5 },
    { category: "Data Retention Limits", key: "audit_preservation_days", value: "365", description: "Audit trail partition preservation window.", owner: "Compliance", scope: "Audit records", lifecycle: "Active", version: 3 }
  ],

  // Rules (ADM)
  businessRules: [
    { id: "rule_1", name: "Privileged Session Duration", rule: "Administrative support sessions must expire within 60 minutes.", module: "IAM/Security" },
    { id: "rule_2", name: "Automatic Attendance Threshold", rule: "Classes must register attendance marks within 15 minutes of scheduled trigger.", module: "Class Delivery" },
    { id: "rule_3", name: "Course Entitlement Refund Period", rule: "Payer refunds are limited to 14 days post-enrolment if progress is <10%.", module: "Finance/Payment" }
  ],

  // Integration Providers (ADM)
  providers: [
    { key: "supabase", name: "Supabase DB Core", status: "Connected", url: "https://ops-ihs-db.supabase.co", keySnippet: "Managed by secret vault (not viewable)", lastChecked: "2026-08-16 13:07:00" },
    { key: "dailyco", name: "Daily.co Video Rooms", status: "Connected", url: "https://api.daily.co/v1", keySnippet: "Managed by secret vault (not viewable)", lastChecked: "2026-08-16 13:06:50" },
    { key: "resend", name: "Resend Mailer API", status: "Degraded", url: "https://api.resend.com/emails", keySnippet: "Managed by secret vault (not viewable)", lastChecked: "2026-08-16 13:07:15" }
  ],

  // Webhook Delivery Logs (ADM / MSG)
  webhooks: [
    { id: "wh_log_401", event: "learner.enrolled", target: "https://analytics.ihs-partner.org/ingest", payload: '{"learner_id":"usr_103","course_id":"crs_lit_101"}', timestamp: "2026-08-16 12:59:00", attempts: 1, status: "SUCCESS", httpCode: 200 },
    { id: "wh_log_402", event: "provider.sync.completed", target: "https://partner.example.org/api/v2/sync", payload: '{"object_ref":"obj_redacted","record_count":24}', timestamp: "2026-08-16 13:02:15", attempts: 2, status: "SUCCESS", httpCode: 201 },
    { id: "wh_log_403", event: "invitation.sent", target: "https://marketing.ihs-stats.com/webhook", payload: '{"email":"marcus.wright@project.org","invited_role":"Trainer"}', timestamp: "2026-08-16 13:05:00", attempts: 3, status: "FAILED", httpCode: 504 },
    { id: "wh_log_404", event: "payment.confirmed", target: "https://accounting.innovator.edu/api/v2/payments", payload: '{"payment_id":"pay_902a","amount":1500.00}', timestamp: "2026-08-16 13:06:12", attempts: 1, status: "FAILED", httpCode: 500 }
  ],

  // Integration exceptions
  integrationExceptions: [
    { id: "ex_501", provider: "Resend Mailer API", action: "Send E-mail (invitation)", date: "2026-08-16 13:05:00", snippet: "Timeout error (504 Gateway Timeout) on endpoint /emails after 5000ms retry sequence." },
    { id: "ex_502", provider: "Supabase DB Core", action: "RLS Session Validate", date: "2026-08-16 12:44:00", snippet: "Max connection pool client warning. DB response delayed by 230ms." }
  ],

  // Background Job Queues (ADM / FND)
  jobs: [
    { id: "job_601", queue: "notifications", taskName: "Dispatch Welcome Notification", domain: "IAM", targetEntity: "Account: usr_103", queuedAt: "2026-08-16 12:59:01", nextRun: "Not scheduled", status: "Succeeded", attempts: 1, provider: "Resend", correlationId: "corr_job_601", errorMsg: null },
    { id: "job_602", queue: "aggregations", taskName: "Refresh Operational Aggregates", domain: "FND", targetEntity: "Session: cls_802", queuedAt: "2026-08-16 13:00:00", nextRun: "Running now", status: "Running", attempts: 1, provider: "Internal", correlationId: "corr_job_602", errorMsg: null },
    { id: "job_603", queue: "integrations", taskName: "Synchronize Provider Records", domain: "INT", targetEntity: "Batch: batch_4921", queuedAt: "2026-08-16 12:55:00", nextRun: "2026-08-16 13:12:00", status: "Failed", attempts: 2, provider: "External API", correlationId: "corr_job_603", errorMsg: "SocketException: provider connection refused." },
    { id: "job_604", queue: "maintenance", taskName: "Rebuild Reporting Index", domain: "FND", targetEntity: "Partition: 2026-08", queuedAt: "2026-08-16 12:00:00", nextRun: "Manual recovery", status: "Dead-letter", attempts: 5, provider: "Internal", correlationId: "corr_job_604", errorMsg: "Index rebuild exceeded retry policy." },
    { id: "job_605", queue: "security", taskName: "Enforce Device Lockout Checks", domain: "IAM", targetEntity: "Security scans", queuedAt: "2026-08-16 13:06:00", nextRun: "2026-08-16 13:10:00", status: "Queued", attempts: 0, provider: "Internal", correlationId: "corr_job_605", errorMsg: null }
  ],

  // Staged File Imports (ADM / Data Operations)
  imports: [
    { batchId: "imp_701", checksum: "sha256:9bf1…2c8a", importType: "Bulk Account Roster CSV", rowsCount: 140, mode: "Approved run", status: "Completed", errors: "No validation errors", uploadedAt: "2026-08-16 08:12:00" },
    { batchId: "imp_702", checksum: "sha256:41de…7f03", importType: "Reference Locations JSON", rowsCount: 22, mode: "Dry-run only", status: "Dry-run Failed", errors: "Schema mismatch: required region_code missing in 3 rows.", uploadedAt: "2026-08-16 11:40:00" }
  ],

  // Data Export Logs & Action approvals (ADM / Data Operations / FLOW-035)
  exports: [
    { requestId: "exp_801", scope: "Trainer Billing Ledgers (FY26)", requestedBy: "Sarah Connor (Operations)", format: "CSV", status: "Pending Approval", dateRequested: "2026-08-16 12:15:30" },
    { requestId: "exp_802", scope: "Learner Contact Details (GDPR Audit)", requestedBy: "Sarah Connor (Operations)", format: "JSON", status: "Ready", dateRequested: "2026-08-16 10:20:00" }
  ],

  // Active Release Feature Flags (ADM)
  featureFlags: [
    { key: "guided-onboarding-v2", description: "Enables the revised account onboarding sequence for selected cohorts.", module: "IAM", lifecycle: "Disabled", globalStatus: false, targetAudiences: "Beta Testers" },
    { key: "bulk-invitations-ops", description: "Enables CSV uploading interface for Invitation queue.", module: "IAM", lifecycle: "Enabled", globalStatus: true, targetAudiences: "All Operations Staff" },
    { key: "impersonation-access-logs", description: "Forces real-time logging of Support access events to AUD system.", module: "AUD", lifecycle: "Enabled", globalStatus: true, targetAudiences: "Global Configuration" }
  ],

  // Data Retention Policies (ADM / Data Lifecycle)
  retentionPolicies: [
    { module: "IAM Security Access Logs", period: "90 Days", action: "Purge", legalHolds: "0 active", enabled: true },
    { module: "AUD Governance Trails", period: "7 Years", action: "Archive & Partition Move", legalHolds: "2 active", enabled: true },
    { module: "CSR Support Impersonations", period: "180 Days", action: "Purge", legalHolds: "0 active", enabled: true }
  ],

  // Archived Partitions (ADM / Data Lifecycle)
  archive: [
    { id: "arc_1001", sourceTable: "Audit Logs Q4-25", rows: 14209, size: "1450 KB", archivedDate: "2026-01-01 02:00:00", purgeDate: "2033-01-01 00:00:00" },
    { id: "arc_1002", sourceTable: "Email Outbox Logs 2025", rows: 84311, size: "9120 KB", archivedDate: "2026-02-15 04:00:00", purgeDate: "2027-02-15 00:00:00" }
  ],

  // Active Litigation Holds (ADM / Data Lifecycle)
  legalHolds: [
    { holdCode: "HOLD-PAY-DISP", name: "Litigation Hold - Trainer Payment Disputes", targets: "Trainer usr_101 & Earning records", createdBy: "Admin User", placedDate: "2026-08-14 10:00:00", status: "Active" }
  ],

  // Privacy Access Requests (ADM / GDPR Data Lifecycle)
  privacyRequests: [
    { requestId: "pr_901", requester: "John Doe", requestType: "Access Request (All Personal Logs)", verificationCode: "GDPR-992a", dateInitiated: "2026-08-15 16:30:00", status: "Pending Verification" }
  ],


  // ============================================================================
  // OPERATIONAL MANAGER (OM) - SOURCE-BACKED DEMONSTRATION DATA
  // ============================================================================
  omData: {
    trials: [
      { id: "TRL-201", learner: "Ali Raza", age: "14 yrs", guardian: "Tariq Raza (0300-1234567)", course: "Basic Literacy", programme: "Literacy", placementScore: "78%", consent: "Verified (Form + ID)", csr: "Sarah Connor", status: "Ready for Scheduling", created: "Today 09:30", preferredSlot: "Morning (10:00-12:00)", notes: "Eligible; placement assessment completed; guardian signed digital consent", owner: "Sarah Connor", signal: "Ready to schedule" },
      { id: "TRL-202", learner: "Fatima Noor", age: "11 yrs", guardian: "Zubair Noor (0321-7654321)", course: "Applied Numeracy", programme: "Numeracy", placementScore: "85%", consent: "Verified (Form + ID)", csr: "Bilal Ahmed", status: "Ready for Scheduling", created: "Today 10:15", preferredSlot: "Afternoon (14:00-16:00)", notes: "Fast-track numeracy candidate; ready for slot selection", owner: "Bilal Ahmed", signal: "Ready to schedule" },
      { id: "TRL-203", learner: "Zainab Malik", age: "16 yrs", guardian: "Amir Malik (0333-9988776)", course: "Vocational Technology", programme: "Technology", placementScore: "Pending", consent: "Awaiting ID Evidence", csr: "Amna Saleem", status: "Waiting for Info", created: "Yesterday", preferredSlot: "Evening (17:00-19:00)", notes: "Placement answers received; guardian identification document missing", owner: "Amna Saleem", signal: "Guardian contact required" },
      { id: "TRL-204", learner: "Hamza Tariq", age: "15 yrs", guardian: "Tariq Mehmood", course: "Vocational Technology", programme: "Technology", placementScore: "92%", consent: "Verified", csr: "Sarah Connor", status: "Scheduled", trainer: "Sara Javed", time: "Today 16:00 PKT", room: "https://ihs.daily.co/trial-hamza-204", reminder: "Delivered", created: "14 Aug", notes: "Daily.co room provisioned; reminder sent to guardian via SMS/Email", owner: "Sara Javed", signal: "Join window opens 15:45" },
      { id: "TRL-205", learner: "Bilal Sheikh", age: "12 yrs", guardian: "Farooq Sheikh", course: "Applied Numeracy", programme: "Numeracy", placementScore: "80%", consent: "Verified", csr: "Bilal Ahmed", status: "Scheduled", trainer: "Usman Tariq", time: "Tomorrow 11:00 PKT", room: "https://ihs.daily.co/trial-bilal-205", reminder: "Queued", created: "15 Aug", notes: "Slot confirmed; Daily.co room ready", owner: "Usman Tariq", signal: "Reminder queued" },
      { id: "TRL-206", learner: "Amina Yousaf", age: "13 yrs", guardian: "Yousaf Khan", course: "Basic Literacy", programme: "Literacy", placementScore: "74%", consent: "Verified", csr: "Amna Saleem", status: "Completed", trainer: "Huzsam Ahmed", time: "Yesterday 15:00", attendance: "45m / 45m", outcome: "Highly Recommended for Cohort L2", followUp: "CSR Contacted for Membership Purchase", created: "13 Aug", notes: "Trainer report submitted; conversion follow-up active", owner: "Amna Saleem", signal: "Conversion follow-up active" },
      { id: "TRL-207", learner: "Danish Farooq", age: "17 yrs", guardian: "Farooq Ahmed", course: "Vocational Technology", programme: "Technology", placementScore: "65%", consent: "Verified", csr: "Sarah Connor", status: "No-Show", trainer: "Miles Dyson", time: "Yesterday 11:00", attendance: "0m / 45m", outcome: "No-Show (Power outage reported)", followUp: "Replacement slot offered", created: "12 Aug", notes: "Guardian requested reschedule; reason verified", owner: "Sarah Connor", signal: "Reschedule offered" },
      { id: "TRL-208", learner: "Khadija Bibi", age: "10 yrs", guardian: "Rashid Bibi", course: "Applied Numeracy", programme: "Numeracy", placementScore: "88%", consent: "Verified", csr: "Bilal Ahmed", status: "Technical Exception", trainer: "Nadia Rahman", time: "14 Aug 14:00", attendance: "12m (disconnected)", outcome: "Daily Room Token Error", followUp: "Room reprovisioned; makeup scheduled", created: "11 Aug", notes: "Provider reconnection error log captured", owner: "Nadia Rahman", signal: "Makeup scheduled" }
    ],

    enrolments: [
      { id: "ENR-4101", learner: "Zaid Khan", email: "zaid.k@learner.com", course: "Applied Numeracy", version: "v4.2 (Active)", mode: "Group / Cohort", paymentRef: "PAY-8012 (Approved)", grantRef: "AG-901", cohort: "Unassigned", trainer: "Unassigned", schedule: "Pending", status: "Pending Setup", created: "Today 10:45", notes: "Manual payment verified; needs cohort selection and trainer assignment", owner: "Enrolment Ops", signal: "Awaiting cohort assignment" },
      { id: "ENR-4102", learner: "Areeba Siddiqui", email: "areeba.s@learner.com", course: "Basic Literacy", version: "v7.0 (Active)", mode: "One-to-One", paymentRef: "PAY-8015 (Approved)", grantRef: "AG-904", cohort: "N/A (1:1)", trainer: "Unassigned", schedule: "Pending", status: "Pending Setup", created: "Today 11:30", notes: "Payer payment approved; trainer & schedule plan pending", owner: "Enrolment Ops", signal: "Awaiting trainer assignment" },
      { id: "ENR-4103", learner: "Hassan Ali", email: "hassan.ali@learner.com", course: "Vocational Technology", version: "v3.1 (Active)", mode: "Group / Cohort", paymentRef: "PAY-8018 (Approved)", grantRef: "AG-907", cohort: "Unassigned", trainer: "Unassigned", schedule: "Pending", status: "Pending Setup", created: "Today 12:15", notes: "Payment verified; assign to Bootcamp T2", owner: "Enrolment Ops", signal: "Awaiting cohort assignment" },
      { id: "ENR-4104", learner: "Maryam Nawaz", email: "maryam.n@learner.com", course: "K-12 Grade 8 Mathematics", version: "v2.0", mode: "K-12 Section", paymentRef: "SPONSORED-991", grantRef: "AG-910", cohort: "CRUN-104 (Section A)", trainer: "Imran Qureshi", schedule: "Pending Confirmation", status: "Pending Setup", created: "Yesterday", notes: "Section allocated; schedule plan confirmation required", owner: "Enrolment Ops", signal: "Schedule confirmation" },
      { id: "ENR-4088", learner: "John Doe", email: "johndoe@learner.com", course: "Basic Literacy", version: "v7.0", mode: "One-to-One", paymentRef: "PAY-7801", grantRef: "AG-812", cohort: "N/A", trainer: "Huzsam Ahmed", schedule: "Tue/Thu 11:00 PKT", status: "Active", credits: "14 / 16", created: "01 Aug", notes: "Active 1:1 delivery; high engagement", owner: "Huzsam Ahmed", signal: "Active delivery" },
      { id: "ENR-4089", learner: "Clara Oswald", email: "clara.o@timelord.net", course: "Vocational Technology", version: "v3.1", mode: "Group / Cohort", paymentRef: "PAY-7822", grantRef: "AG-815", cohort: "CRUN-103 (Bootcamp T2)", trainer: "Miles Dyson", schedule: "Wed/Fri 16:00 PKT", status: "Active", credits: "10 / 12", created: "05 Aug", notes: "Active cohort participant; multi-course learner", owner: "Miles Dyson", signal: "Active cohort" },
      { id: "ENR-4090", learner: "Omar Khalid", email: "omar.k@learner.com", course: "Applied Numeracy", version: "v4.2", mode: "Group / Cohort", paymentRef: "PAY-7840", grantRef: "AG-820", cohort: "CRUN-102 (Cohort N4)", trainer: "Nadia Rahman", schedule: "Mon/Wed 13:30 PKT", status: "Active", credits: "8 / 10", created: "08 Aug", notes: "Cohort N4 active", owner: "Nadia Rahman", signal: "Active cohort" },
      { id: "ENR-4091", learner: "Sana Mir", email: "sana.mir@learner.com", course: "Basic Literacy & Numeracy", version: "v7.0 & v4.2", mode: "Multi-Course", paymentRef: "PAY-7890", grantRef: "AG-830", cohort: "CRUN-101 / CRUN-102", trainer: "Huzsam Ahmed & Nadia Rahman", schedule: "Mon/Wed/Thu", status: "Active", credits: "22 / 24", created: "10 Aug", notes: "Dual-enrolment independent records maintained", owner: "Sarah Connor", signal: "Multi-course active" },
      { id: "ENR-4075", learner: "Bilal Tariq", email: "bilal.t@learner.com", course: "Applied Numeracy", version: "v4.2", mode: "One-to-One", paymentRef: "PAY-7710", grantRef: "AG-780", cohort: "N/A", trainer: "Nadia Rahman", schedule: "Paused", status: "Paused", credits: "6 / 10", created: "15 Jul", notes: "Medical leave paused by OM; resumes Sep 01", owner: "Sarah Connor", signal: "Paused until 01 Sep" }
    ],

    cohorts: [
      { id: "CRUN-101", name: "Literacy Foundations 2026-Q3", course: "Basic Literacy", version: "v7.0", mode: "Group", enrolled: 12, capacity: 15, trainer: "Huzsam Ahmed", schedule: "Tue / Thu 14:00 PKT", room: "https://ihs.daily.co/crun-101-lit", status: "Active", startDate: "2026-08-01", endDate: "2026-10-31", owner: "Huzsam Ahmed", signal: "3 seats available" },
      { id: "CRUN-102", name: "Applied Numeracy Cohort N4", course: "Applied Numeracy", version: "v4.2", mode: "Group", enrolled: 10, capacity: 10, trainer: "Nadia Rahman", schedule: "Mon / Wed 13:30 PKT", room: "https://ihs.daily.co/crun-102-num", status: "Active (Full)", startDate: "2026-08-05", endDate: "2026-11-05", owner: "Nadia Rahman", signal: "At max capacity (10/10)" },
      { id: "CRUN-103", name: "Vocational Tech Bootcamp T2", course: "Vocational Technology", version: "v3.1", mode: "Group", enrolled: 6, capacity: 12, trainer: "Miles Dyson", schedule: "Wed / Fri 16:00 PKT", room: "https://ihs.daily.co/crun-103-tec", status: "Active", startDate: "2026-08-10", endDate: "2026-11-10", owner: "Miles Dyson", signal: "6 seats available" },
      { id: "CRUN-104", name: "K-12 Grade 8 Math Section A", course: "K-12 Mathematics", version: "v2.0", mode: "K-12 Section", enrolled: 18, capacity: 20, trainer: "Imran Qureshi", schedule: "Mon-Fri 09:00 PKT", room: "https://ihs.daily.co/k12-g8-sec-a", status: "Active", startDate: "2026-08-15", endDate: "2027-05-30", owner: "Imran Qureshi", signal: "2 seats available" },
      { id: "CRUN-105", name: "Literacy Accelerated Cohort L8", course: "Basic Literacy", version: "v7.0", mode: "Group", enrolled: 0, capacity: 15, trainer: "Unassigned", schedule: "Tue / Thu 17:00 PKT", room: "Pending", status: "Draft", startDate: "2026-09-01", endDate: "2026-11-30", owner: "Sarah Connor", signal: "Draft run; starts Sep" }
    ],

    rosters: [
      { id: "ROST-101", cohortId: "CRUN-101", learner: "John Doe", status: "Active", joined: "2026-08-01", attendanceRate: "100%", owner: "Huzsam Ahmed" },
      { id: "ROST-102", cohortId: "CRUN-101", learner: "Amina Yousaf", status: "Active", joined: "2026-08-01", attendanceRate: "95%", owner: "Huzsam Ahmed" },
      { id: "ROST-103", cohortId: "CRUN-102", learner: "Omar Khalid", status: "Active", joined: "2026-08-05", attendanceRate: "100%", owner: "Nadia Rahman" },
      { id: "ROST-104", cohortId: "CRUN-102", learner: "Sana Mir", status: "Active", joined: "2026-08-05", attendanceRate: "90%", owner: "Nadia Rahman" },
      { id: "ROST-105", cohortId: "CRUN-103", learner: "Clara Oswald", status: "Active", joined: "2026-08-10", attendanceRate: "100%", owner: "Miles Dyson" },
      { id: "ROST-106", cohortId: "CRUN-103", learner: "Danish Farooq", status: "Active", joined: "2026-08-10", attendanceRate: "85%", owner: "Miles Dyson" },
      { id: "ROST-107", cohortId: "CRUN-102", learner: "Tariq Mahmood", status: "Transferred", joined: "2026-08-05", transferTo: "CRUN-101", attendanceRate: "N/A", owner: "Sarah Connor" }
    ],

    trainers: [
      { id: "TRN-01", name: "Huzsam Ahmed", email: "huzsam@innovator.edu", programmes: "Literacy, K-12", weeklyLoad: "18h / 25h", activeCohorts: 2, oneToOneCount: 4, availability: "Mon-Thu 10:00-18:00 PKT", conflictStatus: "Clear", effectiveDate: "2026-01-01", owner: "Academic Office", status: "Active" },
      { id: "TRN-02", name: "Nadia Rahman", email: "nadia.r@innovator.edu", programmes: "Numeracy", weeklyLoad: "22h / 25h", activeCohorts: 2, oneToOneCount: 6, availability: "Mon-Fri 12:00-19:00 PKT", conflictStatus: "Clear", effectiveDate: "2026-02-01", owner: "Academic Office", status: "Active" },
      { id: "TRN-03", name: "Imran Qureshi", email: "imran.q@innovator.edu", programmes: "K-12, Literacy", weeklyLoad: "20h / 25h", activeCohorts: 1, oneToOneCount: 5, availability: "Mon-Fri 08:30-16:30 PKT", conflictStatus: "Conflict on Fri 15:00", effectiveDate: "2026-03-15", owner: "Academic Office", status: "Conflict Alert" },
      { id: "TRN-04", name: "Sara Javed", email: "sara.j@innovator.edu", programmes: "Technology, Trials", weeklyLoad: "15h / 20h", activeCohorts: 1, oneToOneCount: 3, availability: "Tue-Sat 11:00-18:00 PKT", conflictStatus: "Clear", effectiveDate: "2026-04-01", owner: "Academic Office", status: "Active" },
      { id: "TRN-05", name: "Miles Dyson", email: "dyson@creator.net", programmes: "Vocational Tech", weeklyLoad: "12h / 20h", activeCohorts: 1, oneToOneCount: 2, availability: "Wed-Sun 13:00-20:00 PKT", conflictStatus: "Clear", effectiveDate: "2026-05-10", owner: "Academic Office", status: "Active" },
      { id: "TRN-06", name: "Usman Tariq", email: "usman.t@innovator.edu", programmes: "Numeracy, Trials", weeklyLoad: "14h / 20h", activeCohorts: 1, oneToOneCount: 3, availability: "Mon-Sat 10:00-17:00 PKT", conflictStatus: "Clear", effectiveDate: "2026-06-01", owner: "Academic Office", status: "Active" }
    ],

    classes: [
      { id: "CLS-9901", title: "Applied Numeracy, Cohort N4", type: "Group", trainer: "Nadia Rahman", timing: "Today 13:30 - 14:30", participants: 10, roomState: "Room Provisioned", liveState: "Live Now", attendanceStatus: "Reconciled (10/10)", reportStatus: "Due after class", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/crun-102-w4", owner: "Nadia Rahman", status: "Live" },
      { id: "CLS-9902", title: "Basic Literacy Foundations 1:1", type: "One-to-One", trainer: "Huzsam Ahmed", learner: "John Doe", timing: "Today 11:00 - 11:45", participants: 1, roomState: "Closed", liveState: "Completed", attendanceStatus: "Reconciled (48m / 45m)", reportStatus: "Submitted (REV-501)", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/cls-9902", owner: "Huzsam Ahmed", status: "Completed" },
      { id: "CLS-9903", title: "Vocational Tech Trial Session", type: "Trial", trainer: "Sara Javed", learner: "Hamza Tariq", timing: "Today 16:00 - 16:45", participants: 1, roomState: "Provisioned", liveState: "Upcoming", attendanceStatus: "Pending Join", reportStatus: "Pending", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/trial-hamza-204", owner: "Sara Javed", status: "Upcoming" },
      { id: "CLS-9904", title: "Literacy Foundations 1:1", type: "One-to-One", trainer: "Imran Qureshi", learner: "Bilal Ahmed", timing: "Today 14:15 - 15:00", participants: 1, roomState: "Closed", liveState: "Ended", attendanceStatus: "Reconciled (44m)", reportStatus: "Overdue (52m late)", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/cls-9904", owner: "Imran Qureshi", status: "Report Overdue" },
      { id: "CLS-9905", title: "Applied Numeracy 1:1", type: "One-to-One", trainer: "Nadia Rahman", learner: "Clara Oswald", timing: "Today 10:00 - 10:45", participants: 1, roomState: "Closed", liveState: "Completed", attendanceStatus: "Reconciled (45m)", reportStatus: "Submitted (REV-502)", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/cls-9905", owner: "Nadia Rahman", status: "Completed" },
      { id: "CLS-9906", title: "K-12 Grade 8 Mathematics Section A", type: "K-12 Section", trainer: "Imran Qureshi", timing: "Today 09:00 - 09:50", participants: 18, roomState: "Closed", liveState: "Completed", attendanceStatus: "17 Present, 1 Excused", reportStatus: "Submitted (REV-503)", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/k12-g8-sec-a", owner: "Imran Qureshi", status: "Completed" },
      { id: "CLS-9911", title: "Vocational Tech Bootcamp T2", type: "Group", trainer: "Miles Dyson", timing: "Tomorrow 16:00 - 17:00", participants: 6, roomState: "Provisioned", liveState: "Scheduled", attendanceStatus: "Eligible (6)", reportStatus: "Pending", technicalStatus: "Normal", roomUrl: "https://ihs.daily.co/crun-103-w5", owner: "Miles Dyson", status: "Upcoming" },
      { id: "CLS-9912", title: "Applied Numeracy Makeup Class", type: "Makeup (1:1)", trainer: "Nadia Rahman", learner: "Ali Raza", timing: "Tomorrow 16:30 - 17:15", participants: 1, roomState: "Provisioned", liveState: "Scheduled", attendanceStatus: "Eligible (1)", reportStatus: "Pending", technicalStatus: "Linked to CLS-9844", roomUrl: "https://ihs.daily.co/cls-9912-mu", owner: "Nadia Rahman", status: "Upcoming" },
      { id: "CLS-9844", title: "Applied Numeracy 1:1", type: "One-to-One", trainer: "Nadia Rahman", learner: "Ali Raza", timing: "14 Aug 14:00", participants: 1, roomState: "Cancelled", liveState: "Cancelled", attendanceStatus: "N/A", reportStatus: "N/A", technicalStatus: "Entitlement Released; Makeup CLS-9912 Created", roomUrl: "Cancelled", owner: "Sarah Connor", status: "Cancelled" },
      { id: "CLS-9850", title: "Vocational Tech 1:1", type: "One-to-One", trainer: "Miles Dyson", learner: "Khadija Bibi", timing: "13 Aug 16:00", participants: 1, roomState: "Exception", liveState: "Technical Exception", attendanceStatus: "Mismatch (12m join)", reportStatus: "In Review", technicalStatus: "Daily token expired during reconnect; manual investigation", roomUrl: "https://ihs.daily.co/cls-9850", owner: "Sarah Connor", status: "Technical Exception" }
    ],

    classReviews: [
      { id: "REV-501", classId: "CLS-9902", title: "Basic Literacy Foundations 1:1", trainer: "Huzsam Ahmed", learner: "John Doe", course: "Basic Literacy v7.0", duration: "48m (Scheduled 45m)", syllabus: "Chapter 4: Reading Comprehension, Phonics & Text Fluency", progress: "Learner demonstrated 90% mastery on vocabulary words; reads fluently", homework: "Workbook exercise 4.2 (Pages 24-27)", notes: "Learner attended promptly and actively participated", reconciledAttendance: "Daily.co log: Joined 10:59, Left 11:47 (48 mins total duration). Reconciled with zero disconnects.", status: "Pending Review", submittedAt: "Today 12:05", age: "1h 3m", owner: "Huzsam Ahmed", signal: "Ready for delivery approval" },
      { id: "REV-502", classId: "CLS-9905", title: "Applied Numeracy 1:1", trainer: "Nadia Rahman", learner: "Clara Oswald", course: "Applied Numeracy v4.2", duration: "45m (Scheduled 45m)", syllabus: "Module 3: Fractions, Decimal Percentages & Practical Word Problems", progress: "Completed 18 calculation questions with only 1 correction needed", homework: "Worksheet 3B attached in student portal", notes: "Ready for advanced problem set next week", reconciledAttendance: "Daily.co log: Joined 10:01, Left 10:46 (45 mins). Verified.", status: "Pending Review", submittedAt: "Today 11:15", age: "1h 53m", owner: "Nadia Rahman", signal: "Ready for delivery approval" },
      { id: "REV-503", classId: "CLS-9906", title: "K-12 Grade 8 Math Section A", trainer: "Imran Qureshi", learner: "Cohort Section A (18 students)", course: "K-12 Math v2.0", duration: "50m (Scheduled 50m)", syllabus: "Unit 5: Linear Equations with One Variable & Graphing", progress: "16 of 18 students demonstrated full understanding; 2 will receive TA assistance", homework: "Exercises 5.1 through 5.4", notes: "1 student excused due to school event", reconciledAttendance: "Daily.co roster log: 17 connected within join window, 1 absent (excused).", status: "Pending Review", submittedAt: "Today 10:10", age: "2h 58m", owner: "Imran Qureshi", signal: "Ready for delivery approval" },
      { id: "REV-504", classId: "CLS-9889", title: "Applied Numeracy Cohort N4", trainer: "Usman Tariq", learner: "Cohort N4 (10 students)", course: "Applied Numeracy v4.2", duration: "55m (Scheduled 60m)", syllabus: "Ratio, Proportions & Percentages", progress: "Class covered core exercises", homework: "Problem set 2", notes: "Report returned by OM for attendance correction", reconciledAttendance: "Daily.co log shows student Tariq participated 42m, but report marked Absent.", status: "Correction Requested", returnReason: "Attendance mismatch: student Tariq was marked Absent in report, but Daily log recorded 42 minutes continuous participation.", submittedAt: "Yesterday 16:30", age: "20h", owner: "Usman Tariq", signal: "Awaiting trainer correction" },
      { id: "REV-505", classId: "CLS-9870", title: "Vocational Tech Bootcamp T2", trainer: "Sara Javed", learner: "Cohort T2", course: "Vocational Tech v3.1", duration: "60m", syllabus: "Introduction to Git version control & GitHub pull requests", progress: "All students created repository and committed code", homework: "Fork repository and submit PR", notes: "Approved delivery", reconciledAttendance: "6/6 participants joined. Duration 60m.", status: "Approved", decidedBy: "Sarah Connor (OM)", decidedAt: "Yesterday 18:00", downstream: "Entitlement debited (1 credit each); progress recorded; payable earning ERN-8821 generated for trainer (payroll settlement remains separate).", owner: "Sara Javed", signal: "Approved & debited" }
    ],

    payments: [
      { id: "PAY-8012", learner: "Zaid Khan", payer: "Muhammad Khan (Guardian)", course: "Applied Numeracy v4.2 (3-Month Term)", expectedAmount: "PKR 18,000", submittedAmount: "PKR 18,000", currency: "PKR", channel: "Bank Transfer (Meezan Bank)", reference: "TRX-982144", receiptFile: "receipt_zk_8012.png", receiptChecksum: "sha256:7f3a88019b22e1a4…", status: "Awaiting Review", duplicateFlag: "Clean (0 matches)", queueAge: "1h 15m", submittedAt: "Today 11:53", reviewer: null, notes: "Private receipt attached; amount matches expected order snapshot exactly", owner: "Enrolment Ops", signal: "Ready to review" },
      { id: "PAY-8015", learner: "Areeba Siddiqui", payer: "Areeba Siddiqui (Self)", course: "Basic Literacy v7.0 (4-Month Term)", expectedAmount: "PKR 24,000", submittedAmount: "PKR 24,000", currency: "PKR", channel: "Bank Transfer (HBL Direct)", reference: "HBL-449102", receiptFile: "receipt_as_8015.png", receiptChecksum: "sha256:3a1b8890cf21e902…", status: "Awaiting Review", duplicateFlag: "Clean (0 matches)", queueAge: "2h 40m", submittedAt: "Today 10:28", reviewer: null, notes: "Transfer receipt legible; account title matches payer name", owner: "Enrolment Ops", signal: "Ready to review" },
      { id: "PAY-8018", learner: "Hassan Ali", payer: "Tariq Ali (Guardian)", course: "Vocational Technology v3.1 (Full Track)", expectedAmount: "PKR 32,000", submittedAmount: "PKR 32,000", currency: "PKR", channel: "Easypaisa Direct", reference: "EP-883011", receiptFile: "receipt_ha_8018.png", receiptChecksum: "sha256:e4190822cb55102a…", status: "Under Review", duplicateFlag: "Clean (0 matches)", queueAge: "3h 10m", submittedAt: "Today 09:58", reviewer: "Sarah Connor", notes: "Claimed by Sarah Connor; verifying Easypaisa transaction ID", owner: "Sarah Connor", signal: "Claimed by Sarah Connor" },
      { id: "PAY-8009", learner: "Clara Oswald", payer: "Clara Oswald", course: "Vocational Technology", expectedAmount: "GBP 180", submittedAmount: "GBP 180", currency: "GBP", channel: "Wise International", reference: "WISE-771204", receiptFile: "receipt_co_8009.pdf", receiptChecksum: "sha256:11982a00cdef1290…", status: "Approved", duplicateFlag: "Clean", queueAge: "Yesterday", submittedAt: "Yesterday 14:20", reviewer: "Sarah Connor", txId: "TX-5510", receiptId: "RCP-1049", accessGrant: "AG-881", notes: "Approved: created payment tx, official receipt, access grant, and membership allocation", owner: "Sarah Connor", signal: "Access grant created" },
      { id: "PAY-8004", learner: "Rashid Minhas", payer: "Rashid Minhas", course: "Basic Literacy", expectedAmount: "PKR 18,000", submittedAmount: "PKR 18,000", currency: "PKR", channel: "Bank Transfer", reference: "TRX-UNKNOWN", receiptFile: "receipt_rm_partial.jpg", receiptChecksum: "sha256:9981aa77215501bc…", status: "Correction Requested", duplicateFlag: "Clean", queueAge: "Yesterday", submittedAt: "Yesterday 11:00", reviewer: "Sarah Connor", returnReason: "Uploaded screenshot cropped the transaction ID and date. Please upload full bank slip.", notes: "Learner notified; awaiting re-upload", owner: "Sarah Connor", signal: "Awaiting payer re-upload" },
      { id: "PAY-7998", learner: "Sohail Ahmed", payer: "Sohail Ahmed", course: "Applied Numeracy", expectedAmount: "PKR 50,000", submittedAmount: "PKR 50,000", currency: "PKR", channel: "Bank Transfer", reference: "TRX-789012", receiptFile: "receipt_sa_dupe.png", receiptChecksum: "sha256:7f3a88019b22e1a4…", status: "Exception", duplicateFlag: "Duplicate Reference Detected (matches PAY-7890)", queueAge: "2d", submittedAt: "14 Aug 16:45", reviewer: "Sarah Connor", notes: "Flagged duplicate reference and checksum match against prior processed payment", owner: "Sarah Connor", signal: "Duplicate transaction match" }
    ],

    entitlements: [
      { id: "ENT-101", learner: "John Doe", course: "Basic Literacy v7.0", totalGranted: 16, debited: 14, reserved: 0, balance: 2, status: "Active", expiry: "2026-08-31", riskLevel: "High (Low Balance: 2 credits)", lastDebit: "Today (CLS-9902)", renewalNotice: "Sent", owner: "Renewals Team", signal: "2 credits remaining" },
      { id: "ENT-102", learner: "Clara Oswald", course: "Vocational Tech v3.1", totalGranted: 12, debited: 2, reserved: 1, balance: 9, status: "Active", expiry: "2026-10-31", riskLevel: "Normal", lastDebit: "10 Aug (CLS-9870)", renewalNotice: "Not Due", owner: "Renewals Team", signal: "Healthy (9 credits)" },
      { id: "ENT-103", learner: "Ali Raza", course: "Applied Numeracy v4.2", totalGranted: 10, debited: 9, reserved: 1, balance: 0, status: "Active", expiry: "2026-08-22", riskLevel: "High (Expiring in 6 Days)", lastDebit: "12 Aug (CLS-9810)", renewalNotice: "Sent", owner: "Sarah Connor", signal: "Expires 22 Aug" },
      { id: "ENT-104", learner: "Danish Farooq", course: "Vocational Tech v3.1", totalGranted: 8, debited: 8, reserved: 0, balance: 0, status: "Expired", expiry: "2026-08-14", riskLevel: "High (Exhausted / Expired)", lastDebit: "14 Aug", renewalNotice: "Awaiting Payment", owner: "Renewals Team", signal: "Membership expired" }
    ],

    renewals: [
      { id: "REN-301", learner: "Ali Raza", plan: "Applied Numeracy 3-Month Plan", expectedAmount: "PKR 18,000", renewalDate: "2026-08-22", status: "Awaiting Payment", contactAttempt: "2 attempts (SMS + Phone)", owner: "Sarah Connor", signal: "Follow-up due" },
      { id: "REN-302", learner: "John Doe", plan: "Basic Literacy Monthly", expectedAmount: "PKR 6,500", renewalDate: "2026-08-31", status: "Due Soon (15 days)", contactAttempt: "1 attempt (Email)", owner: "Enrolment Ops", signal: "Renewal notice sent" }
    ],

    resources: [
      { id: "RES-101", title: "Literacy Foundations Student Workbook", version: "v3.2", format: "PDF", size: "4.2 MB", course: "Basic Literacy v7.0", cohort: "CRUN-101", status: "Active", downloads: 48, checksum: "sha256:91a82200…", uploadedBy: "Huzsam Ahmed", date: "2026-08-01", owner: "Huzsam Ahmed", signal: "Published" },
      { id: "RES-102", title: "Applied Numeracy Problem Set Pack", version: "v2.0", format: "PDF", size: "2.8 MB", course: "Applied Numeracy v4.2", cohort: "CRUN-102", status: "Active", downloads: 62, checksum: "sha256:332c8811…", uploadedBy: "Nadia Rahman", date: "2026-08-05", owner: "Nadia Rahman", signal: "Published" },
      { id: "RES-103", title: "Python Starter Setup Guide", version: "v1.4", format: "PDF", size: "1.1 MB", course: "Vocational Technology v3.1", cohort: "CRUN-103", status: "Active", downloads: 35, checksum: "sha256:5501aa44…", uploadedBy: "Miles Dyson", date: "2026-08-10", owner: "Miles Dyson", signal: "Published" },
      { id: "RES-104", title: "K-12 Grade 8 Math Practice Exam Pack", version: "v1.0", format: "PDF", size: "3.4 MB", course: "K-12 Mathematics", cohort: "CRUN-104", status: "In Review", downloads: 0, checksum: "sha256:aa903311…", uploadedBy: "Imran Qureshi", date: "Today 08:30", owner: "Imran Qureshi", signal: "Review pending" },
      { id: "RES-105", title: "Unverified Macros Sheet", version: "v1.0", format: "XLSM", size: "850 KB", course: "Vocational Tech", cohort: "Unassigned", status: "Quarantined", downloads: 0, checksum: "sha256:ee1199aa…", uploadedBy: "External Submission", date: "Yesterday", quarantineReason: "Failed antivirus validation: macro payload detected", owner: "Security Daemon", signal: "Quarantined file" }
    ],

    cases: [
      { id: "CASE-6101", subject: "Learner unable to connect to Daily video room for CLS-9904", category: "Class Technical Issue", priority: "High", sla: "38m remaining", owner: "Sarah Connor", status: "In Review", learner: "Bilal Ahmed", created: "Today 14:18", notes: "Token refreshed; testing room connectivity", signal: "SLA due in 38m" },
      { id: "CASE-6102", subject: "Payer transfer reference mismatch on Easypaisa submission", category: "Payment Issue", priority: "Medium", sla: "1h 45m remaining", owner: "Sarah Connor", status: "Open", learner: "Hassan Ali", created: "Today 10:30", notes: "Contacted payer Tariq Ali to verify transaction SMS screenshot", signal: "Pending payer response" },
      { id: "CASE-6103", subject: "Parent requesting shift from morning to evening cohort", category: "Schedule Change", priority: "Low", sla: "5h 20m remaining", owner: "Scheduling Team", status: "Waiting on Guardian", learner: "Fatima Noor", created: "Today 09:15", notes: "Offered Tuesday 17:00 slot; awaiting confirmation", signal: "Waiting on parent" },
      { id: "CASE-6098", subject: "Attendance duration dispute for 1:1 Numeracy session", category: "Attendance Dispute", priority: "High", sla: "Breached (SLA Overdue)", owner: "Sarah Connor", status: "Escalated", learner: "Ali Raza", created: "Yesterday 15:00", notes: "Daily log verified 42m duration; trainer report corrected; credit preserved", signal: "SLA breached" },
      { id: "CASE-6085", subject: "Guardian portal password reset & 2FA assistance", category: "Access / Identity", priority: "Low", sla: "Met", owner: "Support Team", status: "Resolved", learner: "John Doe", created: "14 Aug", notes: "Guardian verified via OTP; access restored", signal: "Resolved" }
    ],

    k12: [
      { id: "K12-SEC-6A", grade: "Grade 6", section: "Section A", academicYear: "2026-2027", students: 22, leadTeacher: "Ayesha Noor", subjects: ["Mathematics", "General Science", "English Literacy", "Urdu Language"], schedule: "Daily 08:30 - 13:30 PKT", status: "Active", owner: "Ayesha Noor", signal: "Full capacity" },
      { id: "K12-SEC-7A", grade: "Grade 7", section: "Section A", academicYear: "2026-2027", students: 20, leadTeacher: "Huzsam Ahmed", subjects: ["Mathematics", "Physics / Chemistry Intro", "English", "Social Studies"], schedule: "Daily 08:30 - 13:30 PKT", status: "Active", owner: "Huzsam Ahmed", signal: "Active section" },
      { id: "K12-SEC-8A", grade: "Grade 8", section: "Section A", academicYear: "2026-2027", students: 18, leadTeacher: "Imran Qureshi", subjects: ["Algebra & Geometry", "Integrated Science", "English Literature", "Computer Science"], schedule: "Daily 09:00 - 14:00 PKT", status: "Active", owner: "Imran Qureshi", signal: "2 seats open" },
      { id: "K12-SEC-9A", grade: "Grade 9", section: "Section A", academicYear: "2026-2027", students: 16, leadTeacher: "Nadia Rahman", subjects: ["Advanced Math", "Physics", "Chemistry", "Computer Science"], schedule: "Daily 09:00 - 14:30 PKT", status: "Active", owner: "Nadia Rahman", signal: "Active section" }
    ],

    catalogue: [
      { code: "CAT-LIT", title: "Basic Literacy", activeVersion: "v7.0", deliveryModes: ["1:1 Delivery", "Group Cohorts", "Trial Consultation"], duration: "45 mins / session", activePrices: "PKR 6,500/mo (Group), PKR 14,000/mo (1:1)", status: "Active Catalogue", owner: "Academic Office", signal: "Published" },
      { code: "CAT-NUM", title: "Applied Numeracy", activeVersion: "v4.2", deliveryModes: ["1:1 Delivery", "Group Cohorts", "Trial Consultation"], duration: "45 mins / session", activePrices: "PKR 7,500/mo (Group), PKR 16,000/mo (1:1)", status: "Active Catalogue", owner: "Academic Office", signal: "Published" },
      { code: "CAT-TEC", title: "Vocational Technology", activeVersion: "v3.1", deliveryModes: ["Group Bootcamps", "Trial Consultation"], duration: "60 mins / session", activePrices: "PKR 10,000/mo (Bootcamp)", status: "Active Catalogue", owner: "Academic Office", signal: "Published" },
      { code: "CAT-K12", title: "K-12 Full Academic Curriculum", activeVersion: "v2.0", deliveryModes: ["Grade Cohort Sections"], duration: "50 mins / subject", activePrices: "PKR 25,000/term (All Subjects)", status: "Active Catalogue", owner: "Academic Office", signal: "Published" }
    ],

    analytics: [
      { metric: "Class Delivery Success", value: "97.2%", target: "95.0%", status: "Healthy", detail: "48 of 49 scheduled classes delivered without disruption" },
      { metric: "Attendance Exception Rate", value: "4.1%", target: "< 5.0%", status: "Healthy", detail: "2 duration mismatches across 49 participant instances" },
      { metric: "Class Review Turnaround", value: "1h 14m", target: "< 2h 00m", status: "Healthy", detail: "Median time between report submission and OM approval" },
      { metric: "Payment Review Turnaround", value: "1h 45m", target: "< 3h 00m", status: "Healthy", detail: "Median time between receipt upload and verification" },
      { metric: "Trial-to-Paid Conversion", value: "43.5%", target: "40.0%", status: "Healthy", detail: "20 paid enrolments resulting from 46 completed trials" },
      { metric: "Operational Case SLA Compliance", value: "96.8%", target: "95.0%", status: "Healthy", detail: "30 of 31 operational tickets resolved within SLA" }
    ]
  },

  // Support Impersonation Log entries (CSR / Support View)
  supportAuditLogs: [
    { timestamp: "2026-08-16 10:45:00", operator: "Admin User", impersonatedUser: "John Doe (Learner)", reason: "Debug verification page loader issue", guardrails: "Read-only / 30 min / approved", status: "Completed" }
  ],

  // COO decision inbox. References stay linked to authoritative source domains.
  cooApprovals: [
    { id: "APR-1042", type: "Class Delivery", requester: "Nadia Rahman", source: "CLS-8821", value: "8 participants", created: "12:08", age: "1h", risk: "Attendance mismatch", evidence: "Daily.co + trainer report", status: "Pending", proposer: "Nadia Rahman" },
    { id: "APR-1041", type: "Class Delivery", requester: "Imran Qureshi", source: "CLS-8814", value: "1:1 delivery", created: "10:54", age: "2h 14m", risk: "Report overdue", evidence: "Join log + correction", status: "Pending", proposer: "Imran Qureshi" },
    { id: "APR-1040", type: "Class Delivery", requester: "Sara Javed", source: "CLS-8811", value: "Trial delivery", created: "10:32", age: "2h 36m", risk: "Participant no-show", evidence: "Join log + outcome", status: "Pending", proposer: "Sara Javed" },
    { id: "APR-1038", type: "Class Delivery", requester: "Nadia Rahman", source: "CLS-8808", value: "10 participants", created: "09:45", age: "3h 23m", risk: "Duration variance", evidence: "Provider timeline", status: "Pending", proposer: "Nadia Rahman" },
    { id: "APR-1036", type: "Class Delivery", requester: "Usman Tariq", source: "CLS-8802", value: "Group delivery", created: "09:20", age: "3h 48m", risk: "Correction submitted", evidence: "Revised trainer report", status: "Pending", proposer: "Usman Tariq" },
    { id: "APR-1033", type: "Class Delivery", requester: "Ayesha Noor", source: "CLS-8799", value: "6 participants", created: "Yesterday", age: "18h", risk: "Two absence disputes", evidence: "Participant evidence", status: "Pending", proposer: "Ayesha Noor" },
    { id: "APR-1032", type: "Class Delivery", requester: "Imran Qureshi", source: "CLS-8795", value: "1:1 delivery", created: "Yesterday", age: "20h", risk: "Learning outcome missing", evidence: "Report incomplete", status: "Pending", proposer: "Imran Qureshi" },
    { id: "APR-1039", type: "Payment", requester: "Areeba Malik", source: "PAY-7294", value: "PKR 84,500", created: "10:11", age: "2h 57m", risk: "Reference mismatch", evidence: "Private receipt", status: "Pending", proposer: "Areeba Malik" },
    { id: "APR-1030", type: "Payment", requester: "Bilal Ahmed", source: "PAY-7288", value: "PKR 42,000", created: "Yesterday", age: "17h", risk: "Duplicate indicator", evidence: "Private receipt + history", status: "Pending", proposer: "Bilal Ahmed" },
    { id: "APR-1029", type: "Payment", requester: "Amna Saleem", source: "PAY-7284", value: "GBP 240", created: "Yesterday", age: "21h", risk: "Currency verification", evidence: "Transfer evidence", status: "Pending", proposer: "Amna Saleem" },
    { id: "APR-1037", type: "Finance", requester: "Omar Farooq", source: "EXP-3018", value: "PKR 126,800", created: "Yesterday", age: "19h", risk: "Above threshold", evidence: "Invoice + policy route", status: "Pending", proposer: "Omar Farooq" },
    { id: "APR-1035", type: "Payroll", requester: "Payroll Operations", source: "RUN-2026-08", value: "184 earning lines", created: "Yesterday", age: "22h", risk: "2 exception lines", evidence: "Validation report", status: "Pending", proposer: "Payroll Operations" },
    { id: "APR-1027", type: "Payroll", requester: "Payroll Operations", source: "ADJ-2026-118", value: "3 adjustment lines", created: "14 Aug", age: "2d", risk: "Reversal linkage", evidence: "Adjustment evidence", status: "Pending", proposer: "Payroll Operations" },
    { id: "APR-1034", type: "Catalogue", requester: "Academic Office", source: "CRS-NUM-V4", value: "Version 4", created: "Yesterday", age: "1d", risk: "Price impact", evidence: "Review + impact report", status: "Pending", proposer: "Academic Office" },
    { id: "APR-1031", type: "Commission", requester: "Sales Operations", source: "COM-4412", value: "PKR 18,000", created: "14 Aug", age: "2d", risk: "Cooling period", evidence: "Payment + enrolment", status: "Pending", proposer: "Sales Operations" },
    { id: "APR-1028", type: "HR", requester: "People Operations", source: "ONB-921", value: "Staff activation", created: "14 Aug", age: "2d", risk: "Document expires soon", evidence: "Checklist + verification", status: "Pending", proposer: "People Operations" },
    { id: "APR-1026", type: "Department", requester: "Media Head", source: "MED-552", value: "5 deliverables", created: "13 Aug", age: "3d", risk: "1 revision unresolved", evidence: "Submission history", status: "Pending", proposer: "Media Head" }
  ],

  cooRecords: [
    { category: "classes", ref: "CLS-8840", title: "Applied Numeracy, Cohort N4", detail: "Group class · 8 participants", owner: "Nadia Rahman", status: "Ready", age: "Starts 13:30", signal: "Room provisioned" },
    { category: "classes", ref: "CLS-8838", title: "Literacy Foundations", detail: "One-to-one · provider evidence received", owner: "Imran Qureshi", status: "In Review", age: "Ended 46m ago", signal: "Report overdue" },
    { category: "classes", ref: "CLS-8844", title: "Technology Skills Trial", detail: "Trial class · prospect confirmed", owner: "Sara Javed", status: "Upcoming", age: "Starts 16:00", signal: "Reminder delivered" },
    { category: "attendance", ref: "ATT-6612", title: "Join duration mismatch", detail: "Daily.co reports 41m, trainer reports 55m", owner: "Operations", status: "Exception", age: "38m", signal: "Evidence review" },
    { category: "attendance", ref: "RPT-4481", title: "Trainer report pending", detail: "Syllabus and participant outcome missing", owner: "Imran Qureshi", status: "Overdue", age: "46m", signal: "Correction required" },
    { category: "enrolments", ref: "ENR-5928", title: "Numeracy N4 activation", detail: "Payment approved, schedule assignment pending", owner: "Enrolment Ops", status: "Pending", age: "3h", signal: "No access yet" },
    { category: "entitlements", ref: "ENT-3011", title: "Low lesson balance", detail: "2 credits remain across active membership", owner: "Renewals Team", status: "At Risk", age: "14 days", signal: "Contact payer" },
    { category: "renewals", ref: "REN-2149", title: "Membership renewal due", detail: "Technology Skills monthly plan", owner: "Amna Saleem", status: "Due Soon", age: "6 days", signal: "No payment request" },
    { category: "trials", ref: "TRL-1884", title: "Numeracy consultation", detail: "Qualified prospect · guardian consent recorded", owner: "Sara Javed", status: "Scheduled", age: "Tomorrow", signal: "Trainer assigned" },
    { category: "leads", ref: "LEAD-7721", title: "Website inquiry", detail: "Literacy programme · consent captured", owner: "Bilal Ahmed", status: "Follow-up Due", age: "2h", signal: "First response pending" },
    { category: "conversions", ref: "CNV-1028", title: "Trial to membership", detail: "Payment approved · enrolment active", owner: "Sara Javed", status: "Converted", age: "Today", signal: "Commission evaluation" },
    { category: "commissions", ref: "COM-4412", title: "CSR attribution review", detail: "Verified payment and active enrolment", owner: "Sales Operations", status: "Pending Verification", age: "2d", signal: "Cooling period" },
    { category: "payments", ref: "PAY-7294", title: "Manual transfer review", detail: "Expected PKR 84,500 · reference mismatch", owner: "Areeba Malik", status: "Under Review", age: "2h 57m", signal: "Claim available" },
    { category: "catalogue", ref: "CRS-NUM-V4", title: "Applied Numeracy version 4", detail: "Academic review complete · commercial impact attached", owner: "Academic Office", status: "Approved", age: "1d", signal: "Publication decision" },
    { category: "finance", ref: "REC-881", title: "Unmatched incoming transfer", detail: "PKR 126,800 · bank reference partial match", owner: "Finance", status: "Exception", age: "19h", signal: "Reconciliation needed" },
    { category: "payroll", ref: "RUN-2026-08", title: "August payroll run", detail: "184 reserved earnings · segregation check passed", owner: "Payroll Operations", status: "Submitted", age: "22h", signal: "2 exception lines" },
    { category: "hr", ref: "ONB-921", title: "Staff onboarding approval", detail: "Identity and policies verified", owner: "People Operations", status: "Approval Pending", age: "2d", signal: "Document expires soon" },
    { category: "media", ref: "MED-552", title: "Campaign asset review", detail: "5 deliverables · one revision unresolved", owner: "Media Head", status: "In Review", age: "3d", signal: "Quality decision" },
    { category: "development", ref: "DEV-1482", title: "Membership renewal release", detail: "Testing evidence attached", owner: "CTO Office", status: "Blocked", age: "6h", signal: "Provider sandbox issue" },
    { category: "cases", ref: "CASE-4192", title: "Payment access escalation", detail: "Payment approved, schedule assignment incomplete", owner: "Customer Operations", status: "Escalated", age: "5h", signal: "SLA due in 1h" },
    { category: "governance", ref: "DEC-9041", title: "Payroll approval submitted", detail: "Actor, reason, scope, and evidence preserved", owner: "COO Office", status: "Recorded", age: "Yesterday", signal: "Immutable event" }
  ],

  // Audit Logs (AUD Module - System Governance Events)
  auditLogs: [
    { timestamp: "2026-08-16 13:06:12", actor: "System Daemon", module: "MSG", actionCode: "WEBHOOK_FAILED", details: "Webhook target accounting.innovator.edu timed out on payment.confirmed.", level: "High", changes: "Status -> Failed", origin: "Worker / 10.0.4.18", correlationId: "corr_wh_403" },
    { timestamp: "2026-08-16 13:05:00", actor: "System Daemon", module: "FND", actionCode: "JOB_MOVED_DEADLETTER", details: "Background reporting-index job hit retry limits.", level: "Medium", changes: "Status -> Dead-letter", origin: "Queue worker", correlationId: "corr_job_604" },
    { timestamp: "2026-08-16 12:15:30", actor: "Sarah Connor (Ops)", module: "ADM", actionCode: "EXPORT_REQUESTED", details: "Trainer Billing Ledgers (FY26) exported in CSV mode.", level: "Low", changes: "Status -> Pending Approval", origin: "Admin console", correlationId: "corr_exp_801" },
    { timestamp: "2026-08-16 11:45:00", actor: "Admin User", module: "IAM", actionCode: "FLAG_TOGGLED", details: "Feature flag bulk-invitations-ops enabled globally.", level: "Medium", changes: "bulk-invitations-ops: false -> true", origin: "Admin console", correlationId: "corr_flag_8b1" },
    { timestamp: "2026-08-16 10:45:00", actor: "Admin User", module: "CSR", actionCode: "SUPPORT_IMPERSONATION_STARTED", details: "Began support view session for John Doe (Learner) under ticket #2931.", level: "Medium", changes: "Impersonation session initialized", origin: "Support console", correlationId: "corr_sup_2931" }
  ]
};

// Additional COO source records. Dashboard totals and route metrics are derived
// from this single collection so every drill-down resolves to the same data.
db.cooRecords.push(
  { category: "classes", ref: "CLS-8834", title: "Digital Confidence, Cohort D2", detail: "Group class, 7 participants", owner: "Usman Tariq", status: "Live", age: "Started 13:05", signal: "All participants joined" },
  { category: "classes", ref: "CLS-8829", title: "Workplace Literacy, Cohort L7", detail: "One-to-one delivery, room verified", owner: "Ayesha Noor", status: "Ready", age: "Starts 17:30", signal: "No action required" },
  { category: "attendance", ref: "ATT-6608", title: "Participant identity conflict", detail: "Provider display name does not match enrolment", owner: "Attendance Operations", status: "Exception", age: "1h 12m", signal: "Identity evidence required" },
  { category: "attendance", ref: "RPT-4476", title: "Outcome evidence incomplete", detail: "Trainer submitted attendance without learning outcome", owner: "Nadia Rahman", status: "Overdue", age: "2h 08m", signal: "Return report" },
  { category: "enrolments", ref: "ENR-5924", title: "Literacy L7 activation", detail: "Schedule assigned, learner agreement outstanding", owner: "Enrolment Ops", status: "Pending", age: "5h", signal: "Agreement required" },
  { category: "enrolments", ref: "ENR-5918", title: "Technology T3 enrolment", detail: "Payment and trainer assignment verified", owner: "Enrolment Ops", status: "Active", age: "Today", signal: "Access granted" },
  { category: "entitlements", ref: "ENT-3008", title: "Credit grant expires soon", detail: "Four credits expire at the end of August", owner: "Renewals Team", status: "At Risk", age: "12 days", signal: "Confirm renewal" },
  { category: "entitlements", ref: "ENT-3002", title: "Delivery debit reversal", detail: "Cancelled class debit linked to correction event", owner: "Operations", status: "Reversed", age: "Yesterday", signal: "Audit link verified" },
  { category: "renewals", ref: "REN-2145", title: "Guardian renewal awaiting reply", detail: "Applied Numeracy quarterly membership", owner: "Bilal Ahmed", status: "At Risk", age: "9 days", signal: "Second contact due" },
  { category: "renewals", ref: "REN-2141", title: "Renewal payment requested", detail: "Literacy Foundations monthly membership", owner: "Amna Saleem", status: "In Progress", age: "13 days", signal: "Payment pending" },
  { category: "trials", ref: "TRL-1881", title: "Workplace literacy trial", detail: "Qualified prospect, availability confirmed", owner: "Areeba Malik", status: "Qualified", age: "Today", signal: "Schedule class" },
  { category: "trials", ref: "TRL-1877", title: "Technology consultation", detail: "Trainer outcome submitted after consultation", owner: "Sara Javed", status: "Completed", age: "Yesterday", signal: "Follow-up due" },
  { category: "leads", ref: "LEAD-7718", title: "Employer referral", detail: "Numeracy programme, contact consent verified", owner: "Areeba Malik", status: "Contacted", age: "4h", signal: "Consultation offered" },
  { category: "leads", ref: "LEAD-7712", title: "Community partner referral", detail: "Technology programme, preferred time recorded", owner: "Bilal Ahmed", status: "SLA Risk", age: "7h", signal: "Response overdue" },
  { category: "conversions", ref: "CNV-1024", title: "Trial follow-up converted", detail: "Payment approved, enrolment setup pending", owner: "Areeba Malik", status: "Activation Pending", age: "Yesterday", signal: "Assign schedule" },
  { category: "conversions", ref: "CNV-1019", title: "Consultation did not convert", detail: "Prospect deferred due to schedule availability", owner: "Bilal Ahmed", status: "Lost", age: "2d", signal: "Reason captured" },
  { category: "commissions", ref: "COM-4409", title: "Trial conversion attribution", detail: "Approved payment linked to CSR follow-up", owner: "Sales Operations", status: "Eligible", age: "Yesterday", signal: "Create payable earning" },
  { category: "commissions", ref: "COM-4404", title: "Duplicate attribution check", detail: "Two lead owners linked to the same enrolment", owner: "Sales Operations", status: "Exception", age: "3d", signal: "Ownership decision" },
  { category: "payments", ref: "PAY-7288", title: "Possible duplicate transfer", detail: "PKR 42,000, matching amount received twice", owner: "Bilal Ahmed", status: "Under Review", age: "17h", signal: "Duplicate check" },
  { category: "payments", ref: "PAY-7284", title: "Foreign currency transfer", detail: "GBP 240, settlement currency not confirmed", owner: "Amna Saleem", status: "Under Review", age: "21h", signal: "Currency verification" },
  { category: "catalogue", ref: "CRS-LIT-V7", title: "Literacy Foundations version 7", detail: "Learning outcomes revised, price unchanged", owner: "Academic Office", status: "In Review", age: "2d", signal: "Academic sign-off" },
  { category: "catalogue", ref: "PRD-TECH-Q3", title: "Technology quarterly plan", detail: "New term and effective price attached", owner: "Commercial Office", status: "Blocked", age: "3d", signal: "Term conflict" },
  { category: "finance", ref: "EXP-3018", title: "Provider equipment expense", detail: "PKR 126,800, threshold approval required", owner: "Finance", status: "Approval Pending", age: "19h", signal: "COO decision" },
  { category: "finance", ref: "REC-876", title: "Receipt allocation variance", detail: "PKR 42,000, allocation does not match invoice", owner: "Finance", status: "Exception", age: "1d", signal: "Allocation correction" },
  { category: "payroll", ref: "ADJ-2026-118", title: "August earning adjustment", detail: "Three lines linked to prior run reversals", owner: "Payroll Operations", status: "Submitted", age: "2d", signal: "Approval required" },
  { category: "payroll", ref: "EARN-8841", title: "Trainer earning exception", detail: "Approved delivery has a rate-version mismatch", owner: "Payroll Operations", status: "Exception", age: "1d", signal: "Rate evidence" },
  { category: "hr", ref: "DOC-1182", title: "Right-to-work document renewal", detail: "Verified document expires within 21 days", owner: "People Operations", status: "Due Soon", age: "21 days", signal: "Renewal required" },
  { category: "hr", ref: "ONB-918", title: "Trainer onboarding checklist", detail: "Identity verified, policy acknowledgement missing", owner: "People Operations", status: "Blocked", age: "1d", signal: "Policy signature" },
  { category: "hr", ref: "OFF-204", title: "Staff offboarding controls", detail: "Final date confirmed, access removal scheduled", owner: "People Operations", status: "In Progress", age: "Tomorrow", signal: "Manager handover" },
  { category: "hr", ref: "HR-CASE-332", title: "Restricted people case", detail: "Authorized case review with limited evidence scope", owner: "Head of People", status: "Escalated", age: "4h", signal: "COO review" },
  { category: "media", ref: "MED-548", title: "Learner campaign edit", detail: "Three deliverables returned after quality review", owner: "Media Team", status: "Revision", age: "2d", signal: "Revision overdue" },
  { category: "media", ref: "MED-541", title: "Programme launch assets", detail: "Final files and usage rights attached", owner: "Media Head", status: "Approved", age: "Yesterday", signal: "Earning source ready" },
  { category: "development", ref: "DEV-1478", title: "Payment allocation correction", detail: "Release candidate passed integration testing", owner: "CTO Office", status: "In Testing", age: "1d", signal: "Release approval" },
  { category: "development", ref: "DEV-1471", title: "Attendance evidence sync", detail: "Provider retry logic awaiting sandbox access", owner: "CTO Office", status: "Blocked", age: "2d", signal: "Vendor response" },
  { category: "cases", ref: "CASE-4189", title: "Trainer report dispute", detail: "Participant evidence conflicts with submitted report", owner: "Customer Operations", status: "Escalated", age: "7h", signal: "SLA due in 2h" },
  { category: "cases", ref: "CASE-4184", title: "Renewal access complaint", detail: "Payment received, membership request incomplete", owner: "Customer Operations", status: "Waiting", age: "1d", signal: "Finance response" },
  { category: "cases", ref: "CASE-4177", title: "Commission attribution appeal", detail: "CSR disputes ownership recorded at conversion", owner: "Sales Operations", status: "Reopened", age: "2d", signal: "Decision required" },
  { category: "governance", ref: "DEC-9038", title: "Payment correction requested", detail: "Reason, evidence scope, and requester preserved", owner: "COO Office", status: "Recorded", age: "Yesterday", signal: "Source workflow active" },
  { category: "governance", ref: "DEC-9031", title: "Catalogue publication held", detail: "Price impact concern linked to version decision", owner: "COO Office", status: "Recorded", age: "2d", signal: "No silent edit" }
);

// ============================================================================
// 2. CLIENT-SIDE ROUTER / SCREEN CONTROLLERS
// ============================================================================

const moduleViews = {
  "users": { group: "User and access", title: "Account directory", description: "Manage identities, platform roles, account status, and access recovery from one governed directory.", context: "Identity governance", family: "records" },
  "invitations": { group: "User and access", title: "Invitation workspace", description: "Create, track, resend, and revoke invitations before new members enter the platform.", context: "Membership onboarding", family: "records" },
  "security-sessions": { group: "User and access", title: "Session security", description: "Review active devices and terminate sessions when access appears compromised or no longer required.", context: "Live security", family: "records" },
  "roles-permissions": { group: "User and access", title: "Permission architecture", description: "Define what each operational role can view, change, approve, and administer across the platform.", context: "Role-based access", family: "matrix" },
  "reference-data": { group: "Configuration", title: "Reference catalogue", description: "Maintain controlled values used by courses, locations, rejection workflows, and system automation.", context: "Controlled vocabulary", family: "records" },
  "system-settings": { group: "Configuration", title: "Platform configuration", description: "Manage global platform, security, routing, and retention settings with clear field-level ownership.", context: "Environment settings", family: "configuration" },
  "business-rules": { group: "Configuration", title: "Business rule library", description: "Review and version approved operational thresholds without overriding fixed security invariants.", context: "Policy logic", family: "configuration" },
  "providers": { group: "Integrations", title: "Connected providers", description: "Inspect service connectivity, endpoint configuration, credentials, and the latest health verification.", context: "External services", family: "integrations" },
  "webhooks": { group: "Integrations", title: "Webhook delivery log", description: "Trace outbound events, response codes, retry attempts, and delivery payloads across connected systems.", context: "Event delivery", family: "records" },
  "integration-health": { group: "Integrations", title: "Integration observability", description: "Compare provider latency, availability, deliverability, and recent endpoint exceptions.", context: "Service health", family: "observability" },
  "queue-jobs": { group: "Jobs and exceptions", title: "Background queue", description: "Monitor scheduled and asynchronous work from queue entry through processing and completion.", context: "Job orchestration", family: "records" },
  "failed-jobs": { group: "Jobs and exceptions", title: "Failed job recovery", description: "Investigate execution failures that remain within retry policy and safely return them to processing.", context: "Recoverable failures", family: "records" },
  "dead-letters": { group: "Jobs and exceptions", title: "Dead-letter recovery", description: "Review jobs that exhausted retry limits before re-queuing or permanently clearing them.", context: "Manual intervention", family: "records" },
  "integration-exceptions": { group: "Jobs and exceptions", title: "Integration exceptions", description: "Inspect external service errors with enough context to diagnose provider and API failures.", context: "Exception triage", family: "records" },
  "imports": { group: "Data operations", title: "Import staging", description: "Validate inbound files, inspect row-level errors, and control when staged data reaches production records.", context: "Inbound data", family: "records" },
  "exports": { group: "Data operations", title: "Controlled exports", description: "Approve and track sensitive data exports with clear scope, ownership, format, and auditability.", context: "Outbound data", family: "records" },
  "feature-flags": { group: "Controls", title: "Feature release controls", description: "Manage rollout state and target audiences without changing deployed application code.", context: "Release governance", family: "records" },
  "audit-logs": { group: "Controls", title: "Governance audit trail", description: "Search security and configuration events by actor, module, action, severity, and recorded change.", context: "Immutable history", family: "records" },
  "system-status": { group: "Controls", title: "Infrastructure status", description: "Monitor platform resources, current workloads, database connectivity, and daemon activity.", context: "Runtime health", family: "observability" },
  "retention-policies": { group: "Data lifecycle", title: "Retention policies", description: "Control how long operational records remain active before archive or secure deletion.", context: "Lifecycle governance", family: "records" },
  "archive": { group: "Data lifecycle", title: "Archived partitions", description: "Inspect preserved data partitions, storage size, archive date, purge schedule, and recovery options.", context: "Long-term storage", family: "records" },
  "legal-holds": { group: "Data lifecycle", title: "Legal holds", description: "Protect records from standard retention actions while investigations or litigation remain active.", context: "Preservation control", family: "records" },
  "privacy-requests": { group: "Data lifecycle", title: "Privacy request queue", description: "Verify and process personal data access requests with explicit approval and rejection controls.", context: "Privacy operations", family: "records" },
  "support-access": { group: "Support", title: "Governed impersonation", description: "Enter a user context for troubleshooting with required justification, ticket reference, and a complete audit trail.", context: "Elevated access", family: "support" }
};


// ============================================================================
// OPERATIONAL MANAGER (OM) ROUTE DEFINITIONS & ACCESS MODEL
// ============================================================================
const omRouteDefinitions = {
  "om-dashboard": { group: "Command Center", title: "Operations command", headerTitle: "Operations Command Center", description: "Operational command center for trials, enrolments, live class operations, trainer schedules, and manual payments.", context: "Operational Management", family: "dashboard" },
  
  // Trials
  "om-trial-requests": { group: "Trials", title: "Trial requests & intake", headerTitle: "Trial Requests Queue", description: "Review and qualify inbound trial requests, placement test answers, guardian consent, and availability preferences.", context: "Trial intake", family: "table", dataType: "trials", filterFn: t => t.status === "Ready for Scheduling" || t.status === "Waiting for Info" },
  "om-ready-scheduling": { group: "Trials", title: "Ready for scheduling", headerTitle: "Ready for Scheduling", description: "Assign qualified trial learners to available trainers, select time slots, and provision Daily.co rooms.", context: "Scheduling queue", family: "table", dataType: "trials", filterFn: t => t.status === "Ready for Scheduling" },
  "om-scheduled-trials": { group: "Trials", title: "Scheduled trials", headerTitle: "Scheduled Trials", description: "Track upcoming trial occurrences, room provisioning status, reminder notifications, and join windows.", context: "Upcoming trials", family: "table", dataType: "trials", filterFn: t => t.status === "Scheduled" },
  "om-trial-outcomes": { group: "Trials", title: "Trial outcomes & follow-up", headerTitle: "Trial Outcomes", description: "Review attendance, trainer trial notes, conversion status, no-shows, and technical exception recovery.", context: "Outcome review", family: "table", dataType: "trials", filterFn: t => ["Completed", "No-Show", "Technical Exception"].includes(t.status) },

  // Learners & Enrolments
  "om-pending-setup": { group: "Learners & Enrolments", title: "Pending enrolment setup", headerTitle: "Pending Enrolment Setup", description: "Configure independent enrolments following verified payment: assign course version, trainer, cohort run, and schedule plan.", context: "Setup queue", family: "table", dataType: "enrolments", filterFn: e => e.status === "Pending Setup" },
  "om-active-enrolments": { group: "Learners & Enrolments", title: "Active enrolments directory", headerTitle: "Active Enrolments", description: "Monitor active, paused, and completed learning enrolments with trainer and cohort links.", context: "Active learning", family: "table", dataType: "enrolments", filterFn: e => e.status === "Active" || e.status === "Paused" },
  "om-course-assignments": { group: "Learners & Enrolments", title: "Course version assignments", headerTitle: "Course Assignments", description: "Track assigned curriculum versions and delivery models across all active enrolments.", context: "Version governance", family: "table", dataType: "enrolments" },
  "om-multi-course": { group: "Learners & Enrolments", title: "Multi-course learners", headerTitle: "Multi-Course Learners", description: "Manage learners with independent concurrent enrolments across multiple subject tracks.", context: "Multi-enrolment", family: "table", dataType: "enrolments", filterFn: e => e.mode.includes("Multi") || e.course.includes("&") },

  // Cohorts & Rosters
  "om-course-runs": { group: "Cohorts & Rosters", title: "Course runs management", headerTitle: "Course Runs", description: "Manage group course run lifecycles from draft and active delivery through completion.", context: "Course runs", family: "table", dataType: "cohorts" },
  "om-cohorts-sections": { group: "Cohorts & Rosters", title: "Live cohorts & sections", headerTitle: "Cohorts & Sections", description: "Monitor cohort capacity rules, schedule plans, assigned trainers, and section enrollment caps.", context: "Cohort capacity", family: "table", dataType: "cohorts" },
  "om-rosters": { group: "Cohorts & Rosters", title: "Roster memberships", headerTitle: "Roster Memberships", description: "Inspect active, pending, transferred, and historical roster memberships per cohort.", context: "Roster integrity", family: "table", dataType: "rosters" },
  "om-capacity-transfers": { group: "Cohorts & Rosters", title: "Capacity & learner transfers", headerTitle: "Learner Transfers", description: "Transfer learners between live cohorts with preserved historical records and capacity validation.", context: "Cohort transfers", family: "table", dataType: "rosters", filterFn: r => r.status === "Transferred" || r.cohortId === "CRUN-102" },

  // Trainers & Scheduling
  "om-trainer-assignments": { group: "Trainers & Scheduling", title: "Trainer assignments", headerTitle: "Trainer Assignments", description: "Maintain effective-dated trainer assignments to courses, cohorts, and 1:1 deliveries without rewriting history.", context: "Trainer allocation", family: "table", dataType: "trainers" },
  "om-schedule-plans": { group: "Trainers & Scheduling", title: "Schedule plans & cadence", headerTitle: "Schedule Plans", description: "Manage recurring class timing, timezone offsets, and lesson cadence across all delivery models.", context: "Schedule cadence", family: "table", dataType: "cohorts" },
  "om-availability": { group: "Trainers & Scheduling", title: "Trainer availability", headerTitle: "Trainer Availability", description: "Track trainer working windows, capacity limits, and leave schedules for conflict-free scheduling.", context: "Availability windows", family: "table", dataType: "trainers" },
  "om-schedule-conflicts": { group: "Trainers & Scheduling", title: "Schedule conflicts & reassignments", headerTitle: "Schedule Conflicts", description: "Resolve trainer time collisions, overlapping occurrences, and reassign replacement trainers.", context: "Conflict triage", family: "table", dataType: "trainers", filterFn: t => t.conflictStatus.includes("Conflict") },

  // Live Classes
  "om-classes-today": { group: "Live Classes", title: "Today's live class schedule", headerTitle: "Today's Live Classes", description: "Monitor real-time class occurrences, Daily.co room readiness, join windows, and live attendance.", context: "Today's operations", family: "table", dataType: "classes", filterFn: c => c.timing.includes("Today") },
  "om-classes-upcoming": { group: "Live Classes", title: "Upcoming class schedule", headerTitle: "Upcoming Classes", description: "Inspect scheduled future class occurrences, participant eligibility, and room provisioning jobs.", context: "Upcoming delivery", family: "table", dataType: "classes", filterFn: c => c.timing.includes("Tomorrow") || c.status === "Upcoming" },
  "om-attendance": { group: "Live Classes", title: "Attendance tracking & duration", headerTitle: "Attendance Reconciliation", description: "Reconcile Daily.co join/leave event logs with trainer reports and detect duration variances.", context: "Attendance reconciliation", family: "table", dataType: "classes" },
  "om-reports-due": { group: "Live Classes", title: "Trainer reports due & overdue", headerTitle: "Trainer Reports Due", description: "Track pending and overdue post-class delivery reports required from trainers.", context: "Overdue reports", family: "table", dataType: "classes", filterFn: c => c.status === "Report Overdue" || c.reportStatus.includes("Overdue") },
  "om-reports-in-review": { group: "Live Classes", title: "Submitted reports in review", headerTitle: "Reports in Review", description: "Examine submitted trainer reports awaiting OM delivery review and syllabus validation.", context: "Under review", family: "table", dataType: "classReviews", filterFn: r => r.status === "Pending Review" },
  "om-technical-exceptions": { group: "Live Classes", title: "Technical & room exceptions", headerTitle: "Technical Exceptions", description: "Manage Daily.co video room errors, reconnect timeouts, and manual attendance fallback paths.", context: "Provider exceptions", family: "table", dataType: "classes", filterFn: c => c.status === "Technical Exception" || c.technicalStatus.includes("Exception") },
  "om-cancelled-rescheduled": { group: "Live Classes", title: "Cancelled, rescheduled & makeup classes", headerTitle: "Class Changes & Makeups", description: "Process cancellations, apply entitlement ledger consequences (release/debit/adjust), and schedule makeups.", context: "Class changes", family: "table", dataType: "classes", filterFn: c => ["Cancelled", "Makeup (1:1)"].includes(c.type) || c.status === "Cancelled" },

  // Class Review
  "om-trainer-reports": { group: "Class Review", title: "Submitted trainer reports", headerTitle: "Trainer Delivery Reports", description: "Review covered syllabus, student progress, homework, and trainer notes for every completed class.", context: "Report details", family: "table", dataType: "classReviews" },
  "om-attendance-exceptions": { group: "Class Review", title: "Attendance exception queue", headerTitle: "Attendance Exceptions", description: "Investigate duration mismatches and participant identity disputes before approving delivery.", context: "Exception queue", family: "table", dataType: "classes", filterFn: c => c.attendanceStatus.includes("Mismatch") || c.attendanceStatus.includes("Exception") || c.status === "Report Overdue" },
  "om-approval-queue": { group: "Class Review", title: "Delivery review & approval queue", headerTitle: "Class Approval Queue", description: "Approve class delivery to create entitlement debits, progress events, and payable earning sources.", context: "Approval queue", family: "table", dataType: "classReviews", filterFn: r => r.status === "Pending Review" },
  "om-correction-requests": { group: "Class Review", title: "Report correction requests", headerTitle: "Correction Requests", description: "Track reports returned to trainers with explicit correction notes and resubmission history.", context: "Corrections", family: "table", dataType: "classReviews", filterFn: r => r.status === "Correction Requested" },

  // Entitlements & Renewals
  "om-entitlements-renewals": { group: "Entitlements & Renewals", title: "Entitlement ledger & renewals", headerTitle: "Entitlements & Renewals", description: "Maintain credit ledger integrity (grants, reservations, debits, releases, adjustments) and renewal alerts.", context: "Credit ledger", family: "table", dataType: "entitlements" },

  // Payments
  "om-payment-review": { group: "Payments", title: "Payment review queue", headerTitle: "Payment Review Queue", description: "Claim and review manual bank transfer receipts against expected order snapshots before approving access.", context: "Payment review", family: "table", dataType: "payments", filterFn: p => p.status === "Awaiting Review" || p.status === "Under Review" },
  "om-payments-under-review": { group: "Payments", title: "Claimed payments under review", headerTitle: "Payments Under Review", description: "Active payment review sessions protected by concurrent reviewer locks.", context: "Claimed reviews", family: "table", dataType: "payments", filterFn: p => p.status === "Under Review" },
  "om-payments-approved": { group: "Payments", title: "Approved payment records", headerTitle: "Approved Payments", description: "Inspect approved payment transactions with official receipts, allocations, and access grants.", context: "Approved payments", family: "table", dataType: "payments", filterFn: p => p.status === "Approved" },
  "om-payments-rejected-correction": { group: "Payments", title: "Rejected & corrected payments", headerTitle: "Rejected / Corrections", description: "Review rejected payment submissions and payer correction requests with audited reasons.", context: "Rejected & corrections", family: "table", dataType: "payments", filterFn: p => ["Rejected", "Correction Requested"].includes(p.status) },
  "om-payment-exceptions": { group: "Payments", title: "Payment duplicate & currency exceptions", headerTitle: "Payment Exceptions", description: "Investigate flagged duplicate references, checksum collisions, and currency mismatches.", context: "Payment exceptions", family: "table", dataType: "payments", filterFn: p => p.status === "Exception" || p.duplicateFlag.includes("Duplicate") },

  // Resources
  "om-resources": { group: "Resources", title: "Educational resource library", headerTitle: "Resources Library", description: "Govern learning materials, versioning, course assignments, download access, and quarantine controls.", context: "Resource repository", family: "table", dataType: "resources" },

  // Cases & Communications
  "om-cases-communications": { group: "Cases & Communications", title: "Operational cases & issues", headerTitle: "Operational Cases", description: "Investigate and resolve class technical issues, payment inquiries, schedule change requests, and SLA escalations.", context: "Case resolution", family: "table", dataType: "cases" },

  // K-12 Operations
  "om-k12-operations": { group: "K-12 Operations", title: "K-12 academic year & section management", headerTitle: "K-12 Operations", description: "Manage academic terms, grade section allocations, subject enrollments, and teacher assignments.", context: "K-12 school structure", family: "table", dataType: "k12" },

  // Scoped Catalogue
  "om-catalogue-operations": { group: "Catalogue (Scoped)", title: "Scoped product & catalogue operations", headerTitle: "Product Operations (Scoped)", description: "Permission-scoped operational view of active programmes, course versions, delivery formats, and pricing rules.", context: "Scoped catalogue view", family: "table", dataType: "catalogue" },

  // Reports / Analytics
  "om-reports-analytics": { group: "Reports & Analytics", title: "Operational analytics & KPIs", headerTitle: "Operational Analytics", description: "Real-time delivery KPIs, attendance exception rates, review turnarounds, SLA compliance, and conversion metrics.", context: "Performance metrics", family: "analytics", dataType: "analytics" }
};

Object.entries(omRouteDefinitions).forEach(([route, config]) => {
  moduleViews[route] = {
    group: config.group,
    title: config.title,
    description: config.description,
    context: config.context,
    family: config.family
  };
});

function getOmRecordsForConfig(config) {
  if (!config.dataType || !db.omData || !db.omData[config.dataType]) return [];
  const list = db.omData[config.dataType];
  if (typeof config.filterFn === "function") {
    return list.filter(config.filterFn);
  }
  return list;
}

function getOmRouteMetrics(config) {
  const records = getOmRecordsForConfig(config);
  const total = records.length;
  
  if (config.dataType === "trials") {
    const ready = records.filter(r => r.status === "Ready for Scheduling").length;
    const scheduled = records.filter(r => r.status === "Scheduled").length;
    return [
      ["In View", String(total), "Trial records"],
      ["Ready for Slot", String(ready), "Qualified prospects"],
      ["Scheduled", String(scheduled), "Confirmed occurrences"]
    ];
  }
  if (config.dataType === "enrolments") {
    const pending = records.filter(r => r.status === "Pending Setup").length;
    const active = records.filter(r => r.status === "Active").length;
    return [
      ["Enrolments", String(total), "Current scope"],
      ["Pending Setup", String(pending), "Awaiting trainer/schedule"],
      ["Active Delivery", String(active), "Active learners"]
    ];
  }
  if (config.dataType === "classes" || config.dataType === "classReviews") {
    const due = db.omData.classes.filter(c => c.status === "Report Overdue" || c.reportStatus.includes("Overdue")).length;
    const pendingReview = db.omData.classReviews.filter(r => r.status === "Pending Review").length;
    return [
      ["Class Records", String(total), "Current query"],
      ["Reports Due", String(due), "Overdue submissions"],
      ["Approval Queue", String(pendingReview), "Awaiting OM sign-off"]
    ];
  }
  if (config.dataType === "payments") {
    const pending = db.omData.payments.filter(p => p.status === "Awaiting Review" || p.status === "Under Review").length;
    const approved = db.omData.payments.filter(p => p.status === "Approved").length;
    return [
      ["Submissions", String(total), "Current scope"],
      ["Pending Review", String(pending), "Manual transfer receipts"],
      ["Approved Today", String(approved), "Access grants issued"]
    ];
  }
  if (config.dataType === "cases") {
    const open = records.filter(c => c.status === "Open" || c.status === "In Review").length;
    const escalated = records.filter(c => c.status === "Escalated").length;
    return [
      ["Cases", String(total), "Operational tickets"],
      ["Active SLA", String(open), "In progress"],
      ["Escalated", String(escalated), "High priority attention"]
    ];
  }
  return [
    ["Records in View", String(total), "Source-backed dataset"],
    ["Active Status", String(records.filter(r => r.status === "Active" || r.status === "Normal" || r.status === "Healthy").length), "Operational healthy"],
    ["Attention Signals", String(records.filter(r => r.signal && !r.signal.includes("Healthy") && !r.signal.includes("Published")).length), "Require action"]
  ];
}

function updateOmBadges() {
  if (!db.omData) return;
  const setBadge = (selector, count) => {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = String(count);
      el.classList.toggle("hidden", count === 0);
    });
  };
  setBadge(".count-om-trial-requests", db.omData.trials.filter(t => t.status === "Ready for Scheduling" || t.status === "Waiting for Info").length);
  setBadge(".count-om-ready-scheduling", db.omData.trials.filter(t => t.status === "Ready for Scheduling").length);
  setBadge(".count-om-pending-setup", db.omData.enrolments.filter(e => e.status === "Pending Setup").length);
  setBadge(".count-om-conflicts", db.omData.trainers.filter(t => t.conflictStatus.includes("Conflict")).length);
  setBadge(".count-om-classes-today", db.omData.classes.filter(c => c.timing.includes("Today")).length);
  setBadge(".count-om-reports-due", db.omData.classes.filter(c => c.status === "Report Overdue" || c.reportStatus.includes("Overdue")).length);
  setBadge(".count-om-tech-exceptions", db.omData.classes.filter(c => c.status === "Technical Exception" || c.technicalStatus.includes("Exception")).length);
  setBadge(".count-om-att-exceptions", db.omData.classes.filter(c => c.attendanceStatus.includes("Mismatch") || c.attendanceStatus.includes("Exception")).length);
  setBadge(".count-om-approvals", db.omData.classReviews.filter(r => r.status === "Pending Review").length);
  setBadge(".count-om-entitlement-risks", db.omData.entitlements.filter(e => e.riskLevel.includes("High")).length);
  setBadge(".count-om-payments-pending", db.omData.payments.filter(p => p.status === "Awaiting Review" || p.status === "Under Review").length);
  setBadge(".count-om-pay-exceptions", db.omData.payments.filter(p => p.status === "Exception").length);
  setBadge(".count-om-open-cases", db.omData.cases.filter(c => c.status !== "Resolved" && c.status !== "Closed").length);
}

const cooRouteDefinitions = {
  "coo-approvals": { group: "Approvals", title: "Decision inbox", headerTitle: "COO Decision Inbox", description: "Review every pending business decision from its authoritative source record without merging domain states.", context: "17 pending decisions", family: "approvals", approvalType: "All", metrics: [["Outside target", "3", "Review age exceeded"], ["High impact", "12", "Delivery, payment, payroll"], ["Claimed", "2", "Concurrent review protected"]] },
  "coo-class-approvals": { group: "Approvals", title: "Class delivery approvals", headerTitle: "Class Delivery Decisions", description: "Review attendance evidence, trainer reports, duration, and participant outcomes before delivery approval.", context: "Delivery evidence", family: "approvals", approvalType: "Class Delivery", metrics: [["Pending", "7", "Two aging"], ["Evidence conflicts", "2", "Participant level"], ["Returned today", "1", "Correction requested"]] },
  "coo-payment-approvals": { group: "Approvals", title: "Payment approvals", headerTitle: "Payment Approval Queue", description: "Claim and review private payment submissions. Evidence alone never grants membership access.", context: "Controlled payment review", family: "approvals", approvalType: "Payment", metrics: [["Pending", "3", "One mismatch"], ["Median age", "2h 18m", "Today"], ["Unclaimed", "2", "Available to review"]] },
  "coo-finance-approvals": { group: "Approvals", title: "Finance decisions", headerTitle: "Finance & Expense Decisions", description: "Approve routed expenses, refunds, and adjustments while preserving immutable financial history.", context: "Independent finance domain", family: "approvals", approvalType: "Finance", metrics: [["Pending", "4", "Within COO scope"], ["Above threshold", "1", "Evidence attached"], ["Corrections", "2", "Awaiting requester"]] },
  "coo-payroll-approvals": { group: "Approvals", title: "Payroll decisions", headerTitle: "Payroll Approval Queue", description: "Review submitted payroll runs under segregation-of-duty rules. Proposers cannot approve their own run.", context: "Segregated approval", family: "approvals", approvalType: "Payroll", metrics: [["Submitted runs", "1", "August period"], ["Exception lines", "2", "Must resolve"], ["Reserved earnings", "184", "Not settled"]] },
  "coo-catalogue-approvals": { group: "Approvals", title: "Catalogue decisions", headerTitle: "Catalogue & Product Decisions", description: "Review publication, price, term, and product-impact evidence before activation.", context: "Versioned publication", family: "approvals", approvalType: "Catalogue", metrics: [["Publication", "2", "Approved versions"], ["Price reviews", "3", "Effective dates"], ["Blocking issues", "1", "Must resolve"]] },
  "coo-people-approvals": { group: "Approvals", title: "People & department decisions", headerTitle: "People & Department Approvals", description: "Review authorized HR, commission, media, and department decisions with least-privilege evidence access.", context: "Scoped management", family: "approvals", approvalType: "People", metrics: [["People", "3", "Onboarding and HR"], ["Commissions", "2", "Verification"], ["Department", "4", "Media and operations"]] },

  "coo-live-classes": { group: "Operations", title: "Live class command", headerTitle: "Live Classes", description: "Track scheduled delivery, room readiness, participant status, no-shows, reschedules, and technical exceptions.", context: "Today's delivery", family: "oversight", category: "classes", metrics: [["Today", "24", "21 confirmed"], ["Live now", "3", "No active incident"], ["Technical exceptions", "1", "Provider follow-up"]] },
  "coo-attendance": { group: "Operations", title: "Attendance & reports", headerTitle: "Attendance & Reports", description: "Reconcile participant-level attendance with provider evidence and review trainer delivery reports.", context: "Evidence reconciliation", family: "oversight", category: "attendance", metrics: [["Exceptions", "6", "Require review"], ["Reports due", "7", "Two overdue"], ["Reconciled", "31", "Today"]] },
  "coo-enrolments": { group: "Operations", title: "Enrolment activity", headerTitle: "Enrolments", description: "Monitor pending, active, paused, completed, and withdrawn enrolments with course and trainer assignments.", context: "Learning access", family: "oversight", category: "enrolments", metrics: [["Pending", "8", "Setup incomplete"], ["Activated today", "14", "Payment verified"], ["Paused", "5", "Reason recorded"]] },
  "coo-entitlements": { group: "Operations", title: "Entitlement control", headerTitle: "Entitlements", description: "Review balances, debit events, reversals, low-credit learners, and expiring access grants.", context: "Credit integrity", family: "oversight", category: "entitlements", metrics: [["Low credits", "23", "Active learners"], ["Debits today", "42", "Approved delivery"], ["Reversals", "2", "Correction events"]] },
  "coo-renewals": { group: "Operations", title: "Renewal risk", headerTitle: "Renewals", description: "Prioritize expiring memberships, renewal requests, payer follow-up, and activation risk.", context: "Retention operations", family: "oversight", category: "renewals", metrics: [["Due in 14 days", "18", "Contact queue"], ["Requests", "9", "Awaiting payment"], ["At risk", "6", "No response"]] },

  "coo-trials": { group: "Trials & sales", title: "Trial pipeline", headerTitle: "Trials", description: "Track requested, qualified, scheduled, completed, and no-show trials with trainer outcomes.", context: "Acquisition pipeline", family: "oversight", category: "trials", metrics: [["New requests", "11", "Today"], ["Scheduled", "17", "Next seven days"], ["No-shows", "3", "Follow-up created"]] },
  "coo-leads": { group: "Trials & sales", title: "Lead follow-up", headerTitle: "Leads & Follow-ups", description: "Monitor consented prospects, programme interest, CSR ownership, response time, and follow-up activity.", context: "CSR performance", family: "oversight", category: "leads", metrics: [["New", "21", "Uncontacted"], ["Follow-ups due", "13", "Today"], ["SLA risk", "4", "Response overdue"]] },
  "coo-conversions": { group: "Trials & sales", title: "Conversion performance", headerTitle: "Conversions", description: "Trace qualified trials through approved payment and active enrolment while preserving CSR attribution.", context: "Verified conversion", family: "oversight", category: "conversions", metrics: [["Conversion", "41.7%", "48 qualified trials"], ["Activated", "20", "This month"], ["Lost", "9", "Reason captured"]] },
  "coo-commissions": { group: "Trials & sales", title: "CSR commissions", headerTitle: "CSR Commissions", description: "Review attribution and commission eligibility across verification, payable, reserved, paid, and reversed states.", context: "Source-linked earnings", family: "oversight", category: "commissions", metrics: [["Pending verification", "6", "Source checks"], ["Eligible", "11", "Unique earnings"], ["Reserved", "8", "Current payroll"]] },

  "coo-payments": { group: "Business oversight", title: "Payments & memberships", headerTitle: "Payments & Memberships", description: "Review payment submissions, evidence, membership requests, renewals, activation gaps, and payment exceptions.", context: "Payment does not equal access", family: "oversight", category: "payments", metrics: [["Under review", "9", "Three unclaimed"], ["Approved today", "14", "Receipts issued"], ["Activation gaps", "3", "Setup incomplete"]] },
  "coo-catalogue": { group: "Business oversight", title: "Catalogue & products", headerTitle: "Catalogue & Products", description: "Govern course versions, publication reviews, products, variants, effective prices, terms, and bundles.", context: "Versioned commercial setup", family: "oversight", category: "catalogue", metrics: [["In review", "5", "Course versions"], ["Price decisions", "3", "Effective dates"], ["Blocking issues", "2", "Publication held"]] },
  "coo-finance": { group: "Business oversight", title: "Finance oversight", headerTitle: "Finance", description: "Monitor approved payments, receivables, expenses, reconciliation, refunds, adjustments, and period controls.", context: "Independent finance records", family: "oversight", category: "finance", metrics: [["Unmatched", "6", "Transactions"], ["Expenses pending", "4", "COO route"], ["Open period", "Aug 2026", "Not locked"]] },
  "coo-payroll": { group: "Business oversight", title: "Payroll oversight", headerTitle: "Payroll", description: "Track earning items, reserved lines, submitted runs, settlements, adjustments, and exceptions.", context: "Propose, approve, settle", family: "oversight", category: "payroll", metrics: [["Current run", "Submitted", "August 2026"], ["Gross lines", "184", "Reserved"], ["Exceptions", "2", "Approval blocked"]] },
  "coo-hr": { group: "Business oversight", title: "HR & people", headerTitle: "HR & People", description: "Review headcount, onboarding, documents, authorized HR cases, offboarding, and final-settlement exceptions.", context: "Least-privilege people data", family: "oversight", category: "hr", metrics: [["Onboarding", "8", "Three approvals"], ["Documents due", "5", "Within 30 days"], ["HR cases", "3", "Scoped access"]] },

  "coo-media": { group: "Departments", title: "Media performance", headerTitle: "Media Department", description: "Review projects, submissions, revisions, quality decisions, approved work, and earning-source readiness.", context: "Department oversight", family: "oversight", category: "media", metrics: [["In review", "3", "Deliverables"], ["Revisions", "4", "One overdue"], ["Approved work", "12", "This month"]] },
  "coo-development": { group: "Departments", title: "Development status", headerTitle: "Development Department", description: "See active projects, assigned work, blockers, testing, completed items, deployments, and deadlines.", context: "CTO owns execution", family: "oversight", category: "development", metrics: [["Active work", "18", "Across projects"], ["Blockers", "4", "Owner assigned"], ["In testing", "7", "Two releases"]] },
  "coo-cases": { group: "Cases", title: "Cases & escalations", headerTitle: "Cases & Escalations", description: "Prioritize high-risk cases, SLA breaches, waiting states, escalations, resolutions, and reopened issues.", context: "Append-only timeline", family: "oversight", category: "cases", metrics: [["Escalated", "4", "Executive attention"], ["SLA risk", "2", "Due within 2h"], ["Reopened", "3", "This week"]] },
  "coo-reports": { group: "Reports", title: "Reports & analytics", headerTitle: "Reports & Analytics", description: "Use permission-scoped KPIs with definitions, source logic, exclusions, timezone, and refresh cadence.", context: "Defined management KPIs", family: "analytics", category: "reports", metrics: [["Trial conversion", "41.7%", "Definition available"], ["Class approval", "1h 42m", "Median turnaround"], ["Payment review", "2h 18m", "Median turnaround"]] },
  "coo-governance": { group: "Governance", title: "Decision audit", headerTitle: "Governance & Audit", description: "Review immutable approval, financial, payroll, publication, HR, export, and policy decision history.", context: "No silent edits", family: "oversight", category: "governance", metrics: [["High-risk decisions", "7", "This week"], ["Corrections", "2", "Source workflow"], ["Audit coverage", "100%", "Required fields"]] }
};

const cooAttentionStates = new Set(["Exception", "Overdue", "Pending", "At Risk", "Due Soon", "Follow-up Due", "SLA Risk", "Under Review", "In Review", "Blocked", "Approval Pending", "Revision", "Escalated", "Reopened", "Waiting", "Activation Pending"]);

function getCooApprovalsForConfig(config) {
  const peopleTypes = ["Commission", "HR", "Department"];
  return db.cooApprovals.filter(item => {
    if (item.status !== "Pending") return false;
    if (config.approvalType === "All") return true;
    if (config.approvalType === "People") return peopleTypes.includes(item.type);
    return item.type === config.approvalType;
  });
}

function getCooRecordsForConfig(config) {
  if (config.category === "reports") {
    return db.cooRecords.filter(item => ["conversions", "attendance", "payments", "finance", "payroll", "cases"].includes(item.category));
  }
  return db.cooRecords.filter(item => item.category === config.category);
}

function getCooRouteMetrics(config) {
  if (config.family === "approvals") {
    const approvals = getCooApprovalsForConfig(config);
    const aged = approvals.filter(item => /(^|\s)(\d+d|1[89]h|2\dh)/i.test(item.age)).length;
    const claimed = approvals.filter(item => item.claimedBy).length;
    return [["Pending decisions", String(approvals.length), "Exact queue total"], ["Aged 18h or more", String(aged), "Prioritize review"], ["Claimed", String(claimed), "Concurrent review protected"]];
  }

  const records = getCooRecordsForConfig(config);
  const attention = records.filter(item => cooAttentionStates.has(item.status)).length;
  const owners = new Set(records.map(item => item.owner)).size;
  return [["Records in view", String(records.length), "Current source scope"], ["Need attention", String(attention), "Derived from state"], ["Responsible owners", String(owners), "Permission-scoped"]];
}

const cooDecisionFlows = {
  "Class Delivery": {
    slug: "delivery", icon: "presentation", action: "Review delivery", title: "Delivery evidence review", principle: "Approve the delivered class only after attendance, duration, and learning outcomes reconcile.", decisionLabel: "Delivery decision", reasonLabel: "Delivery decision reason", submitLabel: "Record delivery decision",
    outcomes: [["Approved", "Approve delivery"], ["Correction Requested", "Return for correction"], ["Rejected", "Reject delivery"]],
    checks: ["Participant attendance reconciles with provider evidence", "Delivered duration meets the scheduled threshold", "Trainer report includes syllabus and learning outcomes"],
    fields: item => [["Class occurrence", item.source, "Authoritative delivery record"], ["Delivery scope", item.value, "Participant-level review"], ["Provider evidence", item.evidence, "Join and duration evidence"], ["Exception", item.risk, `Submitted by ${item.requester}`]],
    impacts: { "Approved": "Creates entitlement debits, learning-progress events, and payable earning sources. It does not settle payroll.", "Correction Requested": "Returns the source record to the trainer with the decision reason and preserves the submitted evidence.", "Rejected": "Closes this delivery claim without creating entitlement or earning events." }
  },
  "Payment": {
    slug: "payment", icon: "receipt-text", action: "Review payment", title: "Private payment review", principle: "Verify the transaction independently. Uploaded evidence never grants learner access by itself.", decisionLabel: "Payment decision", reasonLabel: "Payment review note", submitLabel: "Record payment decision",
    outcomes: [["Approved", "Approve payment"], ["Correction Requested", "Request evidence correction"], ["Rejected", "Reject submission"]],
    checks: ["Amount and currency match the expected receivable", "Bank or transfer reference passes the duplicate check", "Payer and membership request are correctly linked"],
    fields: item => [["Payment submission", item.source, "Private evidence scope"], ["Submitted amount", item.value, "Compared with expected receivable"], ["Verification evidence", item.evidence, "Restricted financial attachment"], ["Control signal", item.risk, `Submitted by ${item.requester}`]],
    impacts: { "Approved": "Creates the payment transaction, allocation, and official receipt. Membership stays pending if setup is incomplete.", "Correction Requested": "Returns the payment submission for corrected reference or evidence without changing access.", "Rejected": "Rejects the submission and creates no receipt, allocation, or membership access." }
  },
  "Finance": {
    slug: "finance", icon: "landmark", action: "Review finance", title: "Finance approval review", principle: "Post only policy-routed financial records. Later corrections use reversals, credit notes, or adjustments.", decisionLabel: "Finance decision", reasonLabel: "Finance decision rationale", submitLabel: "Record finance decision",
    outcomes: [["Approved", "Approve posting"], ["Correction Requested", "Return for correction"], ["Rejected", "Reject request"]],
    checks: ["Amount, payee, tax, and cost centre are supported", "Approval threshold and policy route are correct", "Invoice evidence is complete and not duplicated"],
    fields: item => [["Expense source", item.source, "Finance-owned record"], ["Requested amount", item.value, "Threshold-controlled"], ["Policy evidence", item.evidence, "Invoice and routing context"], ["Control signal", item.risk, `Requested by ${item.requester}`]],
    impacts: { "Approved": "Posts an immutable financial approval event. Settlement remains a separate finance action.", "Correction Requested": "Returns the expense to its source workflow and preserves this review snapshot.", "Rejected": "Rejects the routed request without altering prior financial history." }
  },
  "Payroll": {
    slug: "payroll", icon: "wallet-cards", action: "Review run", title: "Payroll segregation review", principle: "Approval moves a submitted run to Approved. It does not settle or mark earnings as paid.", decisionLabel: "Payroll decision", reasonLabel: "Payroll decision rationale", submitLabel: "Record payroll decision",
    outcomes: [["Approved", "Approve submitted run"], ["Correction Requested", "Return run for correction"], ["Rejected", "Reject run"]],
    checks: ["Proposer and approver are different users", "Reserved earning lines reconcile with the validation report", "All exception and reversal links are explained"],
    fields: item => [["Payroll source", item.source, "Submitted run or adjustment"], ["Run scope", item.value, "Reserved, not settled"], ["Validation evidence", item.evidence, "Segregation-controlled"], ["Exception summary", item.risk, `Proposer: ${item.proposer}`]],
    impacts: { "Approved": "Moves the run from Submitted to Approved. A separate settlement step is still required.", "Correction Requested": "Returns the run to Payroll Operations and releases no payment.", "Rejected": "Rejects the submitted run. Reserved earnings remain traceable and unpaid." }
  },
  "Catalogue": {
    slug: "catalogue", icon: "book-open-check", action: "Review publication", title: "Catalogue publication review", principle: "Publish only a reviewed version with explicit commercial impact and effective dates.", decisionLabel: "Publication decision", reasonLabel: "Publication decision note", submitLabel: "Record publication decision",
    outcomes: [["Approved", "Approve publication"], ["Correction Requested", "Request changes"], ["Held", "Hold publication"]],
    checks: ["Academic review is complete for this version", "Price, term, and effective-date impacts are attached", "No unresolved blocker affects active learners"],
    fields: item => [["Version record", item.source, "Versioned catalogue source"], ["Proposed version", item.value, "No in-place overwrite"], ["Review pack", item.evidence, "Academic and commercial evidence"], ["Publication risk", item.risk, `Requested by ${item.requester}`]],
    impacts: { "Approved": "Publishes this approved version on its effective date while preserving prior versions.", "Correction Requested": "Returns the version to Academic Office with required changes.", "Held": "Keeps the version unpublished until a new decision is recorded." }
  },
  "Commission": {
    slug: "commission", icon: "badge-dollar-sign", action: "Verify commission", title: "Commission eligibility review", principle: "Eligibility requires verified payment, active enrolment, valid attribution, and an elapsed cooling period.", decisionLabel: "Eligibility decision", reasonLabel: "Eligibility rationale", submitLabel: "Record eligibility decision",
    outcomes: [["Approved", "Verify as eligible"], ["Correction Requested", "Keep pending verification"], ["Rejected", "Reject attribution"]],
    checks: ["Approved payment and active enrolment are linked", "CSR attribution is unique and source-backed", "Cooling period and commission rule are satisfied"],
    fields: item => [["Commission source", item.source, "Unique attribution record"], ["Proposed earning", item.value, "Not yet payable"], ["Eligibility evidence", item.evidence, "Payment and enrolment linkage"], ["Verification signal", item.risk, `Requested by ${item.requester}`]],
    impacts: { "Approved": "Creates one payable commission earning. Payroll reservation and settlement remain separate.", "Correction Requested": "Keeps the item pending until missing eligibility evidence is supplied.", "Rejected": "Rejects the attribution and creates no commission earning." }
  },
  "HR": {
    slug: "people", icon: "user-check", action: "Review onboarding", title: "People activation review", principle: "Activate only when identity, employment, policy, MFA, and least-privilege role conditions are complete.", decisionLabel: "People decision", reasonLabel: "People decision note", submitLabel: "Record people decision",
    outcomes: [["Approved", "Approve activation"], ["Correction Requested", "Return for documents"], ["Rejected", "Reject activation"]],
    checks: ["Identity and employment status are verified", "Required policies and documents are current", "MFA and least-privilege role approval are complete"],
    fields: item => [["Onboarding source", item.source, "Restricted people record"], ["Requested change", item.value, "Activation scope"], ["Verification pack", item.evidence, "Least-privilege evidence"], ["People risk", item.risk, `Requested by ${item.requester}`]],
    impacts: { "Approved": "Activates the staff profile and refreshes approved access only after all conditions pass.", "Correction Requested": "Returns onboarding to People Operations without activating access.", "Rejected": "Rejects activation and grants no staff access." }
  },
  "Department": {
    slug: "department", icon: "clapperboard", action: "Review work", title: "Department work approval", principle: "Approve completed work only when deliverables, revisions, quality evidence, and ownership are clear.", decisionLabel: "Work decision", reasonLabel: "Quality decision note", submitLabel: "Record work decision",
    outcomes: [["Approved", "Approve work"], ["Correction Requested", "Request revision"], ["Escalated", "Escalate quality review"]],
    checks: ["All expected deliverables are attached", "Required revisions are resolved or explicitly accepted", "Quality reviewer and source owner are recorded"],
    fields: item => [["Work source", item.source, "Department-owned record"], ["Deliverable scope", item.value, "Completion snapshot"], ["Submission history", item.evidence, "Revision evidence"], ["Quality signal", item.risk, `Submitted by ${item.requester}`]],
    impacts: { "Approved": "Creates an approved work event and an earning source if the department rule applies. It does not settle payroll.", "Correction Requested": "Returns the work to the department with a new revision requirement.", "Escalated": "Preserves the review and routes the quality decision to the authorized escalation path." }
  }
};

Object.entries(cooRouteDefinitions).forEach(([route, config]) => {
  moduleViews[route] = {
    group: config.group,
    title: config.title,
    description: config.description,
    context: config.context,
    family: config.family
  };
});

function prepareModuleView(route, view) {
  const meta = moduleViews[route];
  if (!meta || !view) return;

  view.dataset.family = meta.family;
  if (!view.querySelector(":scope > .module-heading")) {
    const heading = document.createElement("div");
    heading.className = "module-heading";
    heading.innerHTML = `
      <div class="module-heading-copy">
        <span class="module-path">${meta.group}</span>
        <h2>${meta.title}</h2>
        <p>${meta.description}</p>
      </div>
      <div class="module-heading-context">
        <span>Secure workspace</span>
        <strong>${meta.context}</strong>
      </div>
    `;
    view.prepend(heading);
  }

  view.querySelectorAll(":scope > .view-header-bar").forEach(toolbar => toolbar.classList.add("module-toolbar"));
}

function ensureTableEmptyStates(view, route) {
  if (!view) return;
  view.querySelectorAll("tbody:empty").forEach(tableBody => {
    const columnCount = tableBody.closest("table")?.querySelectorAll("thead th").length || 1;
    const label = moduleViews[route]?.title || "records";
    const row = document.createElement("tr");
    row.className = "table-empty-row";
    row.innerHTML = `
      <td colspan="${columnCount}">
        <div class="table-empty-state">
          <strong>No ${label.toLowerCase()} found</strong>
          <span>There are no records matching the current view or filters.</span>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });
}


// ============================================================================
// COURSE CREATOR (CC) - ROUTE DEFINITIONS & METRICS ENGINE (28 SUB-ROUTES)
// ============================================================================

const creatorRouteDefinitions = {
  "creator-courses-my": {
    title: "My Authored Courses",
    group: "Programmes & Courses",
    desc: "Complete catalog of courses assigned to your authoring portfolio.",
    scopeNotice: "Authoring Scope: Define course metadata, learning outcomes, estimated effort, and audience. Product pricing is managed separately by the commercial catalogue team.",
    dataType: "courses",
    metrics: () => [
      { label: "My Portfolio", value: db.creatorData.courses.length, hint: "Total assigned courses" },
      { label: "Active Drafts", value: db.creatorData.courses.filter(c => c.stage === "Draft").length, hint: "In authoring" },
      { label: "In Review", value: db.creatorData.courses.filter(c => c.stage === "In Review").length, hint: "Academic board" },
      { label: "Published Live", value: db.creatorData.courses.filter(c => c.stage === "Published").length, hint: "Live in LMS" }
    ],
    filter: (items) => items
  },
  "creator-courses-draft": {
    title: "Draft Courses",
    group: "Programmes & Courses",
    desc: "Courses currently undergoing syllabus authoring, lesson creation, and assessment linkage.",
    scopeNotice: "Draft courses remain completely isolated from live learners until approved and published by the catalogue owner.",
    dataType: "courses",
    metrics: () => [
      { label: "Draft Courses", value: db.creatorData.courses.filter(c => c.stage === "Draft").length, hint: "Editable versions" },
      { label: "Total Modules", value: 14, hint: "Across draft courses" },
      { label: "Total Lessons", value: 68, hint: "Content units" },
      { label: "Validation State", value: "1 Advisory Note", hint: "Review ready" }
    ],
    filter: (items) => items.filter(c => c.stage === "Draft")
  },
  "creator-courses-review": {
    title: "Courses In Peer Review",
    group: "Programmes & Courses",
    desc: "Course versions submitted to the Academic Review Board for pedagogical verification.",
    scopeNotice: "Versions in review are locked to prevent content drift while reviewers inspect rubrics and syllabi.",
    dataType: "courses",
    metrics: () => [
      { label: "Under Review", value: db.creatorData.courses.filter(c => c.stage === "In Review").length, hint: "Locked drafts" },
      { label: "Assigned Reviewers", value: 2, hint: "Academic leads" },
      { label: "Open Comments", value: 1, hint: "Reviewer feedback" },
      { label: "Avg Review SLA", value: "48 Hours", hint: "Standard turn-around" }
    ],
    filter: (items) => items.filter(c => c.stage === "In Review")
  },
  "creator-courses-approved": {
    title: "Approved Courses",
    group: "Programmes & Courses",
    desc: "Courses that have cleared all academic validation checks and await publication.",
    scopeNotice: "Approved courses require an authorized catalogue manager or COO to schedule and execute live release.",
    dataType: "courses",
    metrics: () => [
      { label: "Approved Courses", value: db.creatorData.courses.filter(c => c.stage === "Approved").length, hint: "Ready for launch" },
      { label: "Readiness Score", value: "100%", hint: "Pre-flight certified" },
      { label: "Publish Authority", value: "Catalogue Owner", hint: "Segregation of duties" },
      { label: "Scheduled Runs", value: 2, hint: "Upcoming cohorts" }
    ],
    filter: (items) => items.filter(c => c.stage === "Approved")
  },
  "creator-courses-published": {
    title: "Published & Live Courses",
    group: "Programmes & Courses",
    desc: "Read-only view of live course versions actively serving registered learners.",
    scopeNotice: "Published versions are immutable. To make content or syllabus modifications, create a new Draft Version.",
    dataType: "courses",
    metrics: () => [
      { label: "Live Courses", value: db.creatorData.courses.filter(c => c.stage === "Published").length, hint: "Serving learners" },
      { label: "Active Learners", value: "340+", hint: "Enrolled in versions" },
      { label: "Version State", value: "Immutable", hint: "Protected against drift" },
      { label: "Next Revision", value: "v2.0 Draft", hint: "In development" }
    ],
    filter: (items) => items.filter(c => c.stage === "Published")
  },

  "creator-versions-draft": {
    title: "Draft Course Versions",
    group: "Course Versions",
    desc: "Manage editable version branches (e.g. v1.1, v2.0) before peer review sign-off.",
    scopeNotice: "Every course version maintains its own discrete syllabus hierarchy, resource attachments, and learning rules.",
    dataType: "versions",
    metrics: () => [
      { label: "Draft Versions", value: db.creatorData.versions.filter(v => v.lifecycleState === "Draft").length, hint: "Active revisions" },
      { label: "Delivery Models", value: 3, hint: "Self-paced / Live / K-12" },
      { label: "Checklist Pass", value: "4 / 5", hint: "Pre-flight checks" },
      { label: "Target Release", value: "Fall 2026", hint: "Academic cycle" }
    ],
    filter: (items) => items.filter(v => v.lifecycleState === "Draft")
  },
  "creator-versions-history": {
    title: "Version History & Lineage",
    group: "Course Versions",
    desc: "Complete chronological audit of course versions from initial draft to archived releases.",
    scopeNotice: "Historical course versions preserve immutable syllabus snapshots for past cohort integrity.",
    dataType: "versions",
    metrics: () => [
      { label: "Total Versions", value: db.creatorData.versions.length, hint: "Across all courses" },
      { label: "Published Live", value: db.creatorData.versions.filter(v => v.lifecycleState === "Published").length, hint: "Immutable" },
      { label: "In Review", value: db.creatorData.versions.filter(v => v.lifecycleState === "In Review").length, hint: "Peer review" },
      { label: "Draft Branches", value: db.creatorData.versions.filter(v => v.lifecycleState === "Draft").length, hint: "Editable" }
    ],
    filter: (items) => items
  },
  "creator-versions-create": {
    title: "Create New Course Version",
    group: "Course Versions",
    desc: "Branch a new draft version from an existing published release or start a fresh version.",
    scopeNotice: "Branching creates an isolated working copy. Existing learners remain attached to their original version.",
    dataType: "versions",
    metrics: () => [
      { label: "Available Courses", value: db.creatorData.courses.length, hint: "Eligible for versioning" },
      { label: "Published Bases", value: 2, hint: "Eligible to branch" },
      { label: "Branch Strategy", value: "Semantic (vX.Y)", hint: "Major / Minor" },
      { label: "Active Author", value: "Dr. Arsalan Khan", hint: "Lead author" }
    ],
    filter: (items) => items
  },

  "creator-syllabus-levels": {
    title: "Syllabus Levels",
    group: "Syllabus Builder",
    desc: "Define high-level milestone proficiency levels and macro learning stages.",
    scopeNotice: "Proficiency levels establish the prerequisite ladder for self-paced and cohort-based progression.",
    dataType: "syllabus",
    metrics: () => [
      { label: "Configured Levels", value: 3, hint: "Foundations / Inter / Adv" },
      { label: "Total Milestones", value: 8, hint: "Across all levels" },
      { label: "Total Modules", value: 16, hint: "Topic groupings" },
      { label: "Active Track", value: "Vocational & Spoken", hint: "STEM Track" }
    ],
    filter: (items) => items
  },
  "creator-syllabus-milestones": {
    title: "Syllabus Milestones (MILE-001)",
    group: "Syllabus Builder",
    desc: "Milestone checkpoints requiring verified learner completion before subsequent unlock.",
    scopeNotice: "Milestones contain sequential lessons, activities, and gatekeeper assessments.",
    dataType: "syllabus",
    metrics: () => [
      { label: "Active Milestones", value: 4, hint: "In draft syllabus" },
      { label: "Gatekeeper Quizzes", value: 4, hint: "Pass mark enforced" },
      { label: "Voice Tasks", value: 2, hint: "Acoustic submissions" },
      { label: "Avg Duration", value: "2 Weeks / Milestone", hint: "Learner pace" }
    ],
    filter: (items) => items
  },
  "creator-syllabus-modules": {
    title: "Modules & Units",
    group: "Syllabus Builder",
    desc: "Thematic lesson groupings and topic units within course milestones.",
    scopeNotice: "Modules group related technical and conceptual lessons with shared reference resources.",
    dataType: "syllabus",
    metrics: () => [
      { label: "Active Modules", value: 6, hint: "Authored units" },
      { label: "Total Lessons", value: 28, hint: "Structured units" },
      { label: "Linked Resources", value: 12, hint: "PDF / Video assets" },
      { label: "Order Mode", value: "Drag & Sequence", hint: "Draft hierarchy" }
    ],
    filter: (items) => items
  },
  "creator-syllabus-lessons": {
    title: "Lessons & Content Units",
    group: "Syllabus Builder",
    desc: "Core instructional units featuring formatted text, interactive sandboxes, and video delivery.",
    scopeNotice: "Lessons declare granular completion conditions and reference reusable question bank items.",
    dataType: "syllabus",
    metrics: () => [
      { label: "Authored Lessons", value: db.creatorData.syllabus.length, hint: "In active courses" },
      { label: "Interactive Code", value: 2, hint: "Sandbox lessons" },
      { label: "Video Lectures", value: 1, hint: "Stream ready" },
      { label: "Voice Lessons", value: 1, hint: "Spoken audio" }
    ],
    filter: (items) => items
  },
  "creator-syllabus-activities": {
    title: "Activities & Practical Exercises",
    group: "Syllabus Builder",
    desc: "Hands-on coding sandboxes, speaking prompts, and downloadable problem sets.",
    scopeNotice: "Activities support instant automated validation and optional trainer rubric reviews.",
    dataType: "syllabus",
    metrics: () => [
      { label: "Activities", value: db.creatorData.syllabus.length, hint: "Interactive units" },
      { label: "Code Workspaces", value: 2, hint: "Browser IDE" },
      { label: "Voice Prompts", value: 1, hint: "Audio submission" },
      { label: "Download Sheets", value: 4, hint: "Attached PDFs" }
    ],
    filter: (items) => items
  },

  "creator-assessments-bank": {
    title: "Reusable Question Bank",
    group: "Assessments",
    desc: "Centralized pool of categorized and tagged assessment questions reusable across courses.",
    scopeNotice: "Questions in the question bank can be linked to multiple quizzes without duplicating data.",
    dataType: "questions",
    metrics: () => [
      { label: "Bank Items", value: db.creatorData.questions.length, hint: "Reusable questions" },
      { label: "Single Choice", value: db.creatorData.questions.filter(q => q.type === "Single Choice").length, hint: "Standard MCQs" },
      { label: "Multiple Choice", value: db.creatorData.questions.filter(q => q.type === "Multiple Choice").length, hint: "Multi-select" },
      { label: "Ordering / True-False", value: 2, hint: "Advanced item types" }
    ],
    filter: (items) => items
  },
  "creator-assessments-quizzes": {
    title: "Quizzes & Knowledge Checks",
    group: "Assessments",
    desc: "Automated scoring quizzes with attempt controls, pass marks, and question randomization.",
    scopeNotice: "Quizzes evaluate immediately against question bank keys to trigger automatic milestone progression.",
    dataType: "assessments",
    metrics: () => [
      { label: "Active Quizzes", value: db.creatorData.assessments.filter(a => a.type === "Quiz").length, hint: "Auto-graded" },
      { label: "Avg Pass Mark", value: "75%", hint: "Standard threshold" },
      { label: "Max Attempts", value: "2 - 3", hint: "Retry policies" },
      { label: "Randomization", value: "100% Enabled", hint: "Anti-cheat order" }
    ],
    filter: (items) => items.filter(a => a.type === "Quiz")
  },
  "creator-assessments-assignments": {
    title: "Assignments & Project Tasks",
    group: "Assessments",
    desc: "Complex project submissions accepting repository links, PDF reports, and live demo URLs.",
    scopeNotice: "Assignments link to defined Rubric matrices for objective peer and trainer evaluation.",
    dataType: "assessments",
    metrics: () => [
      { label: "Assignments", value: db.creatorData.assessments.filter(a => a.type === "Assignment").length, hint: "Project tasks" },
      { label: "Submission Types", value: "Link & Files", hint: "Flexible upload" },
      { label: "Linked Rubrics", value: "RUB-101", hint: "Clean architecture" },
      { label: "Revisions Allowed", value: "Up to 2", hint: "Feedback cycle" }
    ],
    filter: (items) => items.filter(a => a.type === "Assignment")
  },
  "creator-assessments-voice": {
    title: "Voice Activities (Spoken English)",
    group: "Assessments",
    desc: "Audio recording exercises capturing learner pronunciation, intonation, and fluency.",
    scopeNotice: "Voice activities integrate with phonetic rubrics for Spoken English programme certifications.",
    dataType: "assessments",
    metrics: () => [
      { label: "Voice Tasks", value: db.creatorData.assessments.filter(a => a.type === "Voice Activity").length, hint: "Acoustic units" },
      { label: "Required Duration", value: "90 - 120s", hint: "Per submission" },
      { label: "Evaluation Mode", value: "Trainer + AI", hint: "Dual sign-off" },
      { label: "Phonetic Rubric", value: "RUB-102", hint: "Pronunciation standard" }
    ],
    filter: (items) => items.filter(a => a.type === "Voice Activity")
  },
  "creator-assessments-rubrics": {
    title: "Assessment Rubrics",
    group: "Assessments",
    desc: "Multi-criteria evaluation matrices with weighted scoring bands for objective grading.",
    scopeNotice: "Course Creators author and version rubrics; actual learner grading is performed by assigned trainers.",
    dataType: "assessments",
    metrics: () => [
      { label: "Active Rubrics", value: 2, hint: "Frontend & Spoken" },
      { label: "Criteria Bands", value: "4 Levels", hint: "Exemplary to Developing" },
      { label: "Weight Total", value: "100%", hint: "Normalized score" },
      { label: "Role Authority", value: "Authoring Only", hint: "No grading results" }
    ],
    filter: (items) => items
  },

  "creator-resources-library": {
    title: "Resource Library",
    group: "Resources",
    desc: "Private media vault storing PDF reference sheets, video assets, and downloadable datasets.",
    scopeNotice: "All uploaded objects undergo automated malware scanning and SHA-256 integrity verification.",
    dataType: "resources",
    metrics: () => [
      { label: "Total Assets", value: db.creatorData.resources.length, hint: "In private storage" },
      { label: "Verified Clean", value: "100%", hint: "Malware scanned" },
      { label: "Total Storage", value: "230.7 MB", hint: "Cloud assets" },
      { label: "Linked Usages", value: 8, hint: "Across lessons" }
    ],
    filter: (items) => items
  },
  "creator-resources-upload": {
    title: "Upload & Verify Resource",
    group: "Resources",
    desc: "Upload new media objects, generate checksums, and set preview eligibility.",
    scopeNotice: "Uploaded objects remain private until explicitly linked to a lesson or made preview-eligible.",
    dataType: "resources",
    metrics: () => [
      { label: "Supported Formats", value: "PDF, MP4, MP3, ZIP", hint: "Standard media" },
      { label: "Max File Size", value: "500 MB", hint: "Per resource" },
      { label: "DRM Protection", value: "Enabled", hint: "Stream protection" },
      { label: "Scan Engine", value: "SHA-256 + AV", hint: "Automated checks" }
    ],
    filter: (items) => items
  },
  "creator-resources-linked": {
    title: "Linked Resource References",
    group: "Resources",
    desc: "Audit of resources actively attached to syllabus lessons and milestone checkpoints.",
    scopeNotice: "Reusable resource linking prevents duplicate file uploads and maintains version consistency.",
    dataType: "resources",
    metrics: () => [
      { label: "Linked Resources", value: db.creatorData.resources.filter(r => r.linkedCoursesCount > 0).length, hint: "In active courses" },
      { label: "Total References", value: 8, hint: "Lesson attachments" },
      { label: "Preview Eligible", value: 2, hint: "Guest visible" },
      { label: "Protected DRM", value: 2, hint: "Enrolled only" }
    ],
    filter: (items) => items.filter(r => r.linkedCoursesCount > 0)
  },
  "creator-resources-versions": {
    title: "Resource Versions & Checksums",
    group: "Resources",
    desc: "Version lineage for updated reference sheets, revised diagrams, and audio re-recordings.",
    scopeNotice: "Updating a resource version automatically updates linked lessons in draft courses.",
    dataType: "resources",
    metrics: () => [
      { label: "Resource Versions", value: db.creatorData.resources.length, hint: "Tracked objects" },
      { label: "Integrity Checks", value: "Passed", hint: "SHA-256 match" },
      { label: "Storage Health", value: "Optimal", hint: "CDN cached" },
      { label: "Security Status", value: "Zero Exceptions", hint: "Quarantine clean" }
    ],
    filter: (items) => items
  },

  "creator-rules-prerequisites": {
    title: "Prerequisite Rules",
    group: "Learning Rules",
    desc: "Define structural unlock conditions based on prior milestone completion and quiz scores.",
    scopeNotice: "Prerequisites prevent learners from jumping ahead into complex modules without demonstrated mastery.",
    dataType: "rules",
    metrics: () => [
      { label: "Prerequisite Rules", value: db.creatorData.rules.filter(r => r.type === "Prerequisite").length, hint: "In active drafts" },
      { label: "Evaluation Mode", value: "State Machine", hint: "Real-time checks" },
      { label: "Score Threshold", value: ">= 80%", hint: "Passing standard" },
      { label: "Rule State", value: "Draft Configured", hint: "Preview ready" }
    ],
    filter: (items) => items.filter(r => r.type === "Prerequisite")
  },
  "creator-rules-release": {
    title: "Content Release Rules",
    group: "Learning Rules",
    desc: "Configure scheduled release, drip cadence, and membership tier unlock conditions.",
    scopeNotice: "Drip and scheduled release rules adapt automatically to cohort start dates or individual enrolment time.",
    dataType: "rules",
    metrics: () => [
      { label: "Release Rules", value: 2, hint: "Milestone paced" },
      { label: "Drip Cadence", value: "Weekly", hint: "Cohort mode" },
      { label: "Instant Unlock", value: "Self-Paced", hint: "Milestone mode" },
      { label: "Tier Gating", value: "Standard / Premium", hint: "Membership access" }
    ],
    filter: (items) => items
  },
  "creator-rules-completion": {
    title: "Completion Rules (MILE-004)",
    group: "Learning Rules",
    desc: "Define conditions required for lesson, milestone, and full course graduation.",
    scopeNotice: "Completion rules freeze permanently upon course version publication to preserve credential integrity.",
    dataType: "rules",
    metrics: () => [
      { label: "Completion Rules", value: db.creatorData.rules.filter(r => r.type === "Completion Rule").length, hint: "Configured rules" },
      { label: "Verification Engine", value: "Automated", hint: "Milestone tracker" },
      { label: "Certificate Grant", value: "Automated on 100%", hint: "Digital credential" },
      { label: "Audited State", value: "Compliant", hint: "Academic standard" }
    ],
    filter: (items) => items.filter(r => r.type === "Completion Rule")
  },
  "creator-rules-attempts": {
    title: "Attempt & Retry Rules (MILE-008)",
    group: "Learning Rules",
    desc: "Configure maximum assessment attempts, cooldown timers, and retained score policies.",
    scopeNotice: "Attempt rules protect question integrity while ensuring fair recovery opportunities for learners.",
    dataType: "rules",
    metrics: () => [
      { label: "Attempt Policies", value: db.creatorData.rules.filter(r => r.type.includes("Attempt")).length, hint: "Active rules" },
      { label: "Max Attempts", value: "3 Tries", hint: "Per assessment" },
      { label: "Cooldown Period", value: "24 Hours", hint: "Between retries" },
      { label: "Scoring Strategy", value: "Highest Score", hint: "Retained grade" }
    ],
    filter: (items) => items.filter(r => r.type.includes("Attempt"))
  },

  "creator-preview": {
    title: "Learner & Guest Experience Preview (CAT-009)",
    group: "Preview & Simulation",
    desc: "Interactive preview sandbox evaluating course structure as Guest vs Registered Free Learner.",
    scopeNotice: "Preview parents cannot accidentally expose paid-only or unpublished child activities.",
    dataType: "courses",
    metrics: () => [
      { label: "Preview Mode", value: "Guest & Free", hint: "Dual simulation" },
      { label: "Active Version", value: "v1.2 (Draft)", hint: "Testing sandbox" },
      { label: "Locked Gating", value: "100% Verified", hint: "Paid protection" },
      { label: "Hierarchy Check", value: "Passed", hint: "No broken links" }
    ],
    filter: (items) => items
  },

  "creator-review-validation": {
    title: "Pre-Flight Validation Engine",
    group: "Review & Submission",
    desc: "Automated structural audit verifying metadata completeness, resource attachments, and learning rules.",
    scopeNotice: "Pre-flight validation must achieve 100% pass rate before a version can be submitted for academic peer review.",
    dataType: "versions",
    metrics: () => [
      { label: "Validation Status", value: "Ready to Submit", hint: "All checks passed" },
      { label: "Metadata Check", value: "100% Complete", hint: "Titles, Effort, Lang" },
      { label: "Resource Links", value: "100% Verified", hint: "Zero broken links" },
      { label: "Assessment Keys", value: "100% Valid", hint: "All items linked" }
    ],
    filter: (items) => items
  },
  "creator-review-submit": {
    title: "Submit for Academic Review",
    group: "Review & Submission",
    desc: "Formal submission gateway transmitting draft version to the Academic Review Board.",
    scopeNotice: "Submitting a version locks draft modifications until reviewers grant approval or request specific revisions.",
    dataType: "versions",
    metrics: () => [
      { label: "Ready to Submit", value: db.creatorData.versions.filter(v => v.lifecycleState === "Draft").length, hint: "Validated versions" },
      { label: "Assigned Board", value: "Faculty Reviewers", hint: "Pedagogy leads" },
      { label: "Review Window", value: "48 Hours", hint: "Standard turn-around" },
      { label: "Target Version", value: "v1.2 (Web Dev)", hint: "Current draft" }
    ],
    filter: (items) => items.filter(v => v.lifecycleState === "Draft")
  },
  "creator-review-comments": {
    title: "Reviewer Feedback & Comments (CAT-010)",
    group: "Review & Submission",
    desc: "Inspect academic reviewer notes, advisory guidance, and required curriculum adjustments.",
    scopeNotice: "Unresolved blocking comments prevent course version approval and subsequent publication.",
    dataType: "reviewComments",
    metrics: () => [
      { label: "Total Feedback", value: db.creatorData.reviewComments.length, hint: "All comments" },
      { label: "Open Comments", value: db.creatorData.reviewComments.filter(c => c.status !== "Resolved").length, hint: "Require action" },
      { label: "Blocking Items", value: db.creatorData.reviewComments.filter(c => c.severity === "Blocking" && c.status !== "Resolved").length, hint: "Must be resolved" },
      { label: "Resolved", value: db.creatorData.reviewComments.filter(c => c.status === "Resolved").length, hint: "Cleared by author" }
    ],
    filter: (items) => items
  },
  "creator-review-changes": {
    title: "Changes Requested & Revisions",
    group: "Review & Submission",
    desc: "Action queue of draft course units returned by reviewers with mandatory revision tasks.",
    scopeNotice: "Address requested changes, document resolution rationale, and resubmit the revised version for final sign-off.",
    dataType: "reviewComments",
    metrics: () => [
      { label: "Revision Tasks", value: db.creatorData.reviewComments.filter(c => c.status === "Changes Requested").length, hint: "Active revisions" },
      { label: "Target Course", value: "Full-Stack Web", hint: "CRS-101 (v1.2)" },
      { label: "Severity", value: "Blocking", hint: "Prevents approval" },
      { label: "SLA Deadline", value: "18 Aug 2026", hint: "Revision window" }
    ],
    filter: (items) => items.filter(c => c.status === "Changes Requested")
  },

  "creator-k12-curriculum": {
    title: "K-12 Curriculum Standards (K12-001)",
    group: "K-12 Authoring",
    desc: "Manage grade-level standards, curriculum board alignments (FBISE / Cambridge), and academic terms.",
    scopeNotice: "K-12 curriculum structures enforce standard subject syllabus outlines accessible before student enrolment.",
    dataType: "k12Syllabi",
    metrics: () => [
      { label: "K-12 Tracks", value: db.creatorData.k12Syllabi.length, hint: "Grade 8 & 9" },
      { label: "Curriculum Boards", value: "FBISE & Cambridge", hint: "Standard aligned" },
      { label: "Academic Year", value: "2026 / 2027", hint: "Active cycle" },
      { label: "Total Units", value: 18, hint: "Subject chapters" }
    ],
    filter: (items) => items
  },
  "creator-k12-syllabi": {
    title: "K-12 Subject Syllabi & Outlines",
    group: "K-12 Authoring",
    desc: "Structured chapter outlines, lesson objectives, and board-standard worksheet attachments.",
    scopeNotice: "K12-005 supports making full syllabus outlines publicly visible to parents and learners prior to admission.",
    dataType: "k12Syllabi",
    metrics: () => [
      { label: "Active Syllabi", value: db.creatorData.k12Syllabi.length, hint: "Authored outlines" },
      { label: "Grade 8 Math", value: "10 Units (Draft)", hint: "Algebra & Geom" },
      { label: "Grade 9 Science", value: "8 Units (Live)", hint: "Physics & Chem" },
      { label: "Worksheets", value: "35 PDF Attachments", hint: "Practice sets" }
    ],
    filter: (items) => items
  },

  "creator-audit-history": {
    title: "Authoring Audit & Lifecycle History",
    group: "History / Audit",
    desc: "Immutable system audit logging all syllabus updates, version branch creations, and review submissions.",
    scopeNotice: "All lifecycle transitions record actor ID, timestamp, prior state, and justification for academic governance.",
    dataType: "auditLogs",
    metrics: () => [
      { label: "Audit Entries", value: db.creatorData.auditLogs.length, hint: "Contextual log" },
      { label: "Author", value: "Dr. Arsalan Khan", hint: "Lead author" },
      { label: "Integrity", value: "Immutable Log", hint: "FLOW-009 compliant" },
      { label: "Latest Event", value: "Syllabus Updated", hint: "10:45 PKT" }
    ],
    filter: (items) => items
  }
};

const Router = {
  currentRoute: "dashboard",
  filters: {}, // Route-specific filter presets (e.g. from drilldown clicks)

  init() {
    // Nav menu items clicks
    document.querySelectorAll(".nav-item").forEach(item => {
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.addEventListener("click", () => {
        const route = item.getAttribute("data-route");
        this.navigate(route);
      });
      item.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.navigate(item.getAttribute("data-route"));
        }
      });
    });

    // Sidebar Collapse button
    const toggleSidebarBtn = document.getElementById("toggle-sidebar");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebarScrim = document.getElementById("sidebar-scrim");
    const sidebar = document.getElementById("sidebar");
    const container = document.querySelector(".admin-container");
    
    toggleSidebarBtn.addEventListener("click", () => {
      container.classList.toggle("sidebar-collapsed");
      const icon = toggleSidebarBtn.querySelector("i");
      if (container.classList.contains("sidebar-collapsed")) {
        icon.setAttribute("data-lucide", "chevron-right");
      } else {
        icon.setAttribute("data-lucide", "chevron-left");
      }
      window.lucide?.createIcons();
    });

    const setMobileNavigation = (open) => {
      container.classList.toggle("mobile-nav-open", open);
      mobileMenuBtn?.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    };

    mobileMenuBtn?.addEventListener("click", () => {
      setMobileNavigation(!container.classList.contains("mobile-nav-open"));
    });

    sidebarScrim?.addEventListener("click", () => setMobileNavigation(false));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMobileNavigation(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setMobileNavigation(false);
    });

    // Fast module finder in the navigation rail.
    const navSearchInput = document.getElementById("nav-search-input");
    const filterNavigation = () => {
      const query = navSearchInput.value.trim().toLowerCase();
      document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
        item.classList.toggle("nav-filtered", Boolean(query) && !item.textContent.toLowerCase().includes(query));
      });
      document.querySelectorAll(".sidebar-nav .nav-group").forEach(group => {
        const hasVisibleItem = group.querySelector(".nav-item:not(.nav-filtered)");
        group.classList.toggle("nav-group-filtered", Boolean(query) && !hasVisibleItem);
      });
    };

    navSearchInput?.addEventListener("input", filterNavigation);
    document.addEventListener("keydown", event => {
      if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) {
        event.preventDefault();
        navSearchInput?.focus();
      }
    });

    document.querySelectorAll("[data-route-shortcut]").forEach(button => {
      button.addEventListener("click", () => this.navigate(button.dataset.routeShortcut));
    });

    // Clickable counts on Dashboard for drill-down redirection
    document.querySelectorAll(".dash-card[data-drilldown]").forEach(card => {
      card.addEventListener("click", () => {
        const route = card.getAttribute("data-drilldown");
        this.navigate(route);
      });
    });

    // Specific Drill-down Clickable metrics
    document.getElementById("drill-failed-jobs").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("failed-jobs");
    });
    
    document.getElementById("drill-dead-letters").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("dead-letters");
    });

    document.getElementById("drill-webhook-exceptions").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("webhooks", { status: "FAILED" });
    });

    document.getElementById("drill-failed-imports").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("imports", { status: "Dry-run Failed" });
    });

    document.getElementById("drill-pending-exports").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("exports", { status: "Pending Approval" });
    });

    document.getElementById("drill-active-impersonations").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("support-access");
    });

    document.getElementById("drill-security-sessions").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("security-sessions");
    });

    document.getElementById("drill-security-alerts").addEventListener("click", (e) => {
      e.stopPropagation();
      this.navigate("audit-logs");
    });
  },

  navigate(route, filterPresets = null) {
    this.currentRoute = route;
    this.filters = filterPresets || {};
    document.querySelector(".admin-container")?.classList.remove("mobile-nav-open");
    document.getElementById("mobile-menu-btn")?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    
    // Toggle active sidebar indicator
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.remove("active");
    });
    let activeNavItem = null;
    if (route === "dashboard" || route === "creator-dashboard") {
      if (Simulator.activeRole === "course_creator") activeNavItem = document.getElementById("nav-creator-dashboard");
      else if (Simulator.activeRole === "csr") activeNavItem = document.getElementById("csr-nav-dashboard");
      else if (Simulator.activeRole === "coo") activeNavItem = document.getElementById("coo-nav-dashboard");
      else if (Simulator.activeRole === "operational_manager") activeNavItem = document.getElementById("om-nav-dashboard");
      else activeNavItem = document.getElementById("nav-dashboard");
    } else {
      activeNavItem = document.getElementById(`nav-${route}`);
    }
    if (activeNavItem) {
      activeNavItem.classList.add("active");
    }

    // Toggle visible content views
    document.querySelectorAll(".content-view").forEach(view => {
      view.classList.remove("active");
    });
    const isCreatorDashboard = route === "creator-dashboard" || (route === "dashboard" && Simulator.activeRole === "course_creator");
    const isCreatorWorkspace = route.startsWith("creator-") && !isCreatorDashboard;
    const isCooWorkspace = route.startsWith("coo-");
    const isOmWorkspace = route.startsWith("om-");
    const isCsrWorkspace = route.startsWith("csr-");
    let activeView = null;
    if (isCreatorDashboard) activeView = document.getElementById("view-dashboard");
    else if (isCreatorWorkspace) activeView = document.getElementById("view-creator-workspace");
    else if (isCsrWorkspace) activeView = document.getElementById("view-csr-workspace");
    else if (isCooWorkspace) activeView = document.getElementById("view-coo-workspace");
    else if (isOmWorkspace) activeView = document.getElementById("view-om-workspace");
    else activeView = document.getElementById(`view-${route}`);
    
    if (activeView) {
      activeView.classList.remove("hidden");
      activeView.classList.add("active");
      if (!isCooWorkspace && !isOmWorkspace && !isCsrWorkspace && !isCreatorWorkspace) prepareModuleView(route, activeView);
    }

    // Update Header title
    const viewTitle = document.getElementById("view-title");
    const routeTitleMap = {
      "dashboard": "Dashboard Overview",
      "users": "Users & Account Governance",
      "invitations": "Outbound Member Invitations",
      "security-sessions": "Security & Live User Sessions",
      "roles-permissions": "Access Control Policies & Matrix",
      "reference-data": "ADM System Reference Data",
      "system-settings": "System Settings Configuration",
      "business-rules": "Active Business Logic Rules",
      "providers": "Integration Infrastructure Providers",
      "webhooks": "Webhook Endpoints & Logs",
      "integration-health": "Provider Latency Logs & Health",
      "queue-jobs": "Background Queue Job Logs",
      "failed-jobs": "Failed Job Restarts",
      "dead-letters": "Dead-Letter Jobs",
      "integration-exceptions": "Logged Integration Exceptions",
      "imports": "Staged File Imports & Validation",
      "exports": "Controlled Data Exports & Approvals",
      "feature-flags": "Release Controls & Feature Flags",
      "audit-logs": "AUD System Searchable Audit Logs",
      "system-status": "System Freshness & Resource Status",
      "retention-policies": "Data Retention Mapping Policies",
      "archive": "Archived Partitions & Files",
      "legal-holds": "Active Litigation Holds",
      "privacy-requests": "Privacy GDPR Erasure/Access Requests",
      "support-access": "Impersonation Support Access Logs"
    };
    
    const roleDashboardTitles = {
      platform_admin: "Dashboard Overview",
      operational_manager: "Operations Command Center",
      coo: "COO Operating Overview",
      csr: "CSR Command Center",
      course_creator: "Authoring Command Center",
      cto_developer: "Technical Operations Overview",
      compliance_officer: "Compliance Overview",
      support_agent: "Support Operations Overview"
    };
    viewTitle.textContent = route === "dashboard"
      ? (roleDashboardTitles[Simulator.activeRole] || "Authoring Command Center")
      : (creatorRouteDefinitions[route]?.title || csrRouteDefinitions[route]?.title || omRouteDefinitions[route]?.headerTitle || cooRouteDefinitions[route]?.headerTitle || routeTitleMap[route] || "Platform Operations");
    
    // Trigger specific rendering controller for the view
    this.renderView(route);
    
    // Reset Data Freshness indicator
    freshnessSeconds = 0;
    updateFreshnessText();
  },

  renderView(route) {
    switch (route) {
      case "dashboard":
        RenderEngine.dashboard();
        break;
      case "users":
        RenderEngine.users();
        break;
      case "invitations":
        RenderEngine.invitations();
        break;
      case "security-sessions":
        RenderEngine.sessions();
        break;
      case "roles-permissions":
        RenderEngine.rolesMatrix();
        break;
      case "reference-data":
        RenderEngine.referenceData();
        break;
      case "system-settings":
        RenderEngine.systemSettings();
        break;
      case "business-rules":
        RenderEngine.businessRules();
        break;
      case "providers":
        RenderEngine.providers();
        break;
      case "webhooks":
        RenderEngine.webhooks();
        break;
      case "integration-health":
        RenderEngine.integrationHealth();
        break;
      case "queue-jobs":
        RenderEngine.queueJobs();
        break;
      case "failed-jobs":
        RenderEngine.failedJobs();
        break;
      case "dead-letters":
        RenderEngine.deadLetters();
        break;
      case "integration-exceptions":
        RenderEngine.integrationExceptions();
        break;
      case "imports":
        RenderEngine.imports();
        break;
      case "exports":
        RenderEngine.exports();
        break;
      case "feature-flags":
        RenderEngine.featureFlags();
        break;
      case "audit-logs":
        RenderEngine.auditLogs();
        break;
      case "system-status":
        RenderEngine.systemStatus();
        break;
      case "retention-policies":
        RenderEngine.retentionPolicies();
        break;
      case "archive":
        RenderEngine.archive();
        break;
      case "legal-holds":
        RenderEngine.legalHolds();
        break;
      case "privacy-requests":
        RenderEngine.privacyRequests();
        break;
      case "support-access":
        RenderEngine.supportAccess();
        break;
      default:
        if (route.startsWith("creator-")) RenderEngine.creatorWorkspace(route);
        else if (route.startsWith("csr-")) RenderEngine.csrWorkspace(route);
        else if (route.startsWith("coo-")) RenderEngine.cooWorkspace(route);
        else if (route.startsWith("om-")) RenderEngine.omWorkspace(route);
        break;
    }
    ensureTableEmptyStates(document.getElementById(route.startsWith("creator-") ? "view-creator-workspace" : (route.startsWith("csr-") ? "view-csr-workspace" : (route.startsWith("coo-") ? "view-coo-workspace" : (route.startsWith("om-") ? "view-om-workspace" : `view-${route}`)))), route);
  }
};

// ============================================================================
// 3. UI RENDERING ENGINE (High density data grids)
// ============================================================================

const RenderEngine = {
  creatorWorkspace(route) {
    if (route === "creator-dashboard") {
      this.creatorDashboard();
      return;
    }

    const config = creatorRouteDefinitions[route];
    if (!config) return;

    const container = document.getElementById("creator-workspace-content");
    if (!container) return;

    const metrics = config.metrics ? config.metrics() : [];
    const rawItems = db.creatorData[config.dataType] || [];
    const records = config.filter ? config.filter(rawItems) : rawItems;

    let metricsHtml = "";
    if (metrics.length) {
      metricsHtml = `
        <div class="coo-workspace-metrics-strip creator-workspace-metrics-strip">
          ${metrics.map(m => `
            <div class="coo-workspace-metric creator-workspace-metric">
              <span>${m.label}</span>
              <strong>${m.value}</strong>
              <small>${m.hint}</small>
            </div>
          `).join("")}
        </div>
      `;
    }

    let scopeHtml = "";
    if (config.scopeNotice) {
      scopeHtml = `
        <div class="coo-scope-notice creator-scope-notice">
          <i data-lucide="shield-check"></i>
          <div>
            <strong>COURSE CREATOR AUTHORING BOUNDARY</strong>
            <p>${config.scopeNotice}</p>
          </div>
        </div>
      `;
    }

    // Dynamic clean & connected bespoke view switcher
    let customContentHtml = "";

    if (route === "creator-preview") {
      customContentHtml = this.renderCreatorLmsPreview();
    } else if (route === "creator-syllabus-milestones") {
      customContentHtml = this.renderCreatorMilestonesRoadmap();
    } else if (route === "creator-syllabus-levels") {
      customContentHtml = this.renderCreatorLevelsLadder();
    } else if (route === "creator-syllabus-modules") {
      customContentHtml = this.renderCreatorModulesStudio();
    } else if (route === "creator-syllabus-lessons") {
      customContentHtml = this.renderCreatorLessonsStudio();
    } else if (route === "creator-syllabus-activities") {
      customContentHtml = this.renderCreatorActivitiesMatrix();
    } else if (config.dataType === "courses") {
      customContentHtml = this.renderCreatorCoursesStudio(records);
    } else if (config.dataType === "questions") {
      customContentHtml = this.renderCreatorQuestionBankStudio(records);
    } else if (config.dataType === "assessments" && route === "creator-assessments-voice") {
      customContentHtml = this.renderCreatorVoiceStudio(records);
    } else if (config.dataType === "assessments" && route === "creator-assessments-rubrics") {
      customContentHtml = this.renderCreatorRubricsStudio(records);
    } else if (config.dataType === "assessments" && route === "creator-assessments-quizzes") {
      customContentHtml = this.renderCreatorQuizzesStudio(records);
    } else {
      customContentHtml = `
        <div class="table-container">
          <table>
            <thead>
              ${this.creatorTableHeaders(config.dataType)}
            </thead>
            <tbody id="creator-workspace-table-body">
              ${this.creatorTableRows(config.dataType, records)}
            </tbody>
          </table>
        </div>
      `;
    }

    // Course Context Bar for Syllabus views
    const isSyllabusView = route.startsWith("creator-syllabus-");
    const courseContextBarHtml = isSyllabusView ? `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 18px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 10px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--slate); text-transform: uppercase; letter-spacing: 0.05em;">Active Course Scope:</span>
          <select id="creator-course-scope-select" class="form-control" style="width: auto; min-width: 320px; font-weight: 600; font-size: 13px;" onchange="Actions.filterCreatorByCourse(this.value)">
            <option value="all">All Courses (Multi-track Portfolio)</option>
            <option value="TECH-FE-201" selected>Modern Full-Stack Web Development (Self-Paced Milestone)</option>
            <option value="ENG-SPK-301">Spoken English Fluency (Live Scheduled Cohort)</option>
            <option value="K12-MTH-801">Grade 8 Mathematics (K-12 Board Aligned)</option>
          </select>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-xs" onclick="Router.navigate('creator-courses-my')"><i data-lucide="book-open"></i> Course Catalog</button>
          <button class="btn btn-primary btn-xs" onclick="Router.navigate('creator-preview')"><i data-lucide="eye"></i> Preview Learner View</button>
        </div>
      </div>
    ` : "";

    container.innerHTML = `
      <div class="coo-workspace-view creator-workspace-view">
        <div class="coo-workspace-header">
          <div class="coo-workspace-heading">
            <span class="coo-workspace-group">${config.group}</span>
            <h2>${config.title}</h2>
            <p>${config.desc}</p>
          </div>
          ${metricsHtml}
          ${scopeHtml}
        </div>

        ${courseContextBarHtml}

        <div class="module-toolbar">
          <div class="search-filter-row">
            <input type="text" id="creator-workspace-search" class="form-control" placeholder="Search by title, code, tag, or keyword...">
            <select id="creator-workspace-status" class="form-control" style="width: auto; min-width: 170px;">
              <option value="">All Statuses</option>
              <option value="Draft">Draft</option>
              <option value="In Review">In Review</option>
              <option value="Approved">Approved</option>
              <option value="Published">Published / Live</option>
            </select>
            <button class="btn btn-secondary btn-sm" onclick="Notifications.push('View Saved', 'Authoring filters saved to your session.', 'info')">
              <i data-lucide="bookmark"></i> Save view
            </button>
          </div>
          <div class="button-row">
            ${config.dataType === 'courses' ? `
              <button class="btn btn-primary btn-sm" onclick="Actions.openCreatorNewCourseModal()">
                <i data-lucide="plus"></i> New Course
              </button>
            ` : config.dataType === 'versions' ? `
              <button class="btn btn-primary btn-sm" onclick="Actions.openCreatorNewVersionModal()">
                <i data-lucide="git-branch"></i> Create Version
              </button>
            ` : config.dataType === 'questions' ? `
              <button class="btn btn-primary btn-sm" onclick="Actions.openCreatorAddQuestionModal()">
                <i data-lucide="plus"></i> New Question
              </button>
            ` : config.dataType === 'assessments' ? `
              <button class="btn btn-primary btn-sm" onclick="Actions.openCreatorAddQuizModal()">
                <i data-lucide="help-circle"></i> New Assessment
              </button>
            ` : config.dataType === 'resources' ? `
              <button class="btn btn-primary btn-sm" onclick="Actions.openCreatorUploadResourceModal()">
                <i data-lucide="upload-cloud"></i> Upload Resource
              </button>
            ` : `
              <button class="btn btn-secondary btn-sm" onclick="Router.navigate('creator-preview')">
                <i data-lucide="eye"></i> Preview Learner View
              </button>
            `}
          </div>
        </div>

        <div id="creator-dynamic-view-canvas">
          ${customContentHtml}
        </div>
      </div>
    `;

    const applyFilters = () => {
      const query = document.getElementById("creator-workspace-search")?.value.toLowerCase() || "";
      const statusFilter = document.getElementById("creator-workspace-status")?.value || "";
      const filtered = records.filter(item => {
        const rowText = Object.values(item).join(" ").toLowerCase();
        const matchesQuery = !query || rowText.includes(query);
        const matchesStatus = !statusFilter
          || (item.stage === statusFilter)
          || (item.lifecycleState === statusFilter)
          || (item.status === statusFilter);
        return matchesQuery && matchesStatus;
      });

      const tbody = document.getElementById("creator-workspace-table-body");
      if (tbody) tbody.innerHTML = this.creatorTableRows(config.dataType, filtered);
      window.lucide?.createIcons();
    };

    document.getElementById("creator-workspace-search")?.addEventListener("input", applyFilters);
    document.getElementById("creator-workspace-status")?.addEventListener("change", applyFilters);

    window.lucide?.createIcons();
  },

  // 1. Bespoke Milestone Progression Roadmap (MILE-001/004/008)
  renderCreatorMilestonesRoadmap() {
    const milestones = [
      {
        id: "MILE-001",
        code: "M1",
        title: "Milestone 1: Web Architecture & DOM Foundations",
        course: "Modern Full-Stack Web Development",
        deliveryModel: "Self-Paced Milestone",
        level: "Level 1: Foundations",
        duration: "2 Weeks (16 Hours)",
        unitsCount: 4,
        lessons: [
          { name: "Lesson 1: Semantic Structure & Accessibility (A11y)", format: "Guide", time: "45m" },
          { name: "Lesson 2: Advanced CSS Grid & Flexbox Systems", format: "Sandbox IDE", time: "60m" }
        ],
        gatekeeper: "QZ-201 (DOM Fundamentals Quiz) >= 80% Required to Unlock M2",
        reward: "Milestone 1 Verification Badge",
        status: "Draft (In Authoring)"
      },
      {
        id: "MILE-002",
        code: "M2",
        title: "Milestone 2: React 19 & Component Architecture",
        course: "Modern Full-Stack Web Development",
        deliveryModel: "Self-Paced Milestone",
        level: "Level 2: Frontend Engineering",
        duration: "3 Weeks (24 Hours)",
        unitsCount: 6,
        lessons: [
          { name: "Lesson 3: State Machines & Custom React Hooks", format: "Video Lecture", time: "75m" },
          { name: "Lesson 4: React Server Components & Streaming", format: "Sandbox IDE", time: "90m" }
        ],
        gatekeeper: "QZ-202 (React 19 State Quiz) >= 70% + ASN-301 Task",
        reward: "Frontend Specialist Certificate",
        status: "Draft (In Authoring)"
      },
      {
        id: "MILE-003",
        code: "M3",
        title: "Milestone 3: Node.js Microservices & PostgreSQL Engine",
        course: "Modern Full-Stack Web Development",
        deliveryModel: "Self-Paced Milestone",
        level: "Level 2: Backend Architecture",
        duration: "4 Weeks (32 Hours)",
        unitsCount: 8,
        lessons: [
          { name: "Lesson 5: REST & GraphQL API Gateways", format: "Guide", time: "60m" },
          { name: "Lesson 6: PostgreSQL Indexing & Query Optimizations", format: "Sandbox IDE", time: "90m" }
        ],
        gatekeeper: "API Benchmark Test + Capstone Database Schema Sign-off",
        reward: "Backend Architecture Badge",
        status: "Draft (In Authoring)"
      },
      {
        id: "MILE-004",
        code: "M4",
        title: "Milestone 4: Cloud CI/CD & Production Capstone",
        course: "Modern Full-Stack Web Development",
        deliveryModel: "Self-Paced Milestone",
        level: "Level 3: Advanced Architect",
        duration: "3 Weeks (24 Hours)",
        unitsCount: 4,
        lessons: [
          { name: "Lesson 7: Docker Containers & Cloud Deployment", format: "Video Lecture", time: "60m" },
          { name: "Lesson 8: Full-Stack Production Capstone Defense", format: "Live Project Defense", time: "120m" }
        ],
        gatekeeper: "Peer Review Sign-off + 100% Milestone Completion",
        reward: "Full-Stack Software Engineer Credential",
        status: "Draft (In Authoring)"
      }
    ];

    return `
      <div class="creator-milestones-container">
        ${milestones.map((m, idx) => `
          <div class="creator-milestone-card">
            <div class="creator-milestone-header">
              <div>
                <div class="creator-milestone-tagline">
                  <span class="badge badge-primary">${m.code}</span>
                  <span class="badge badge-secondary">${m.level}</span>
                  <span class="badge badge-warning">${m.status}</span>
                </div>
                <h3 class="creator-milestone-title">${m.title}</h3>
                <p class="creator-milestone-desc">${m.course} · Delivery: <strong>${m.deliveryModel}</strong> · Duration: ${m.duration}</p>
              </div>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddLessonModal()">+ Add Lesson</button>
                <button class="btn btn-primary btn-xs" onclick="Actions.openCreatorEditRulesModal('RUL-601')">Configure Gatekeeper</button>
              </div>
            </div>

            <div class="creator-milestone-body">
              <div class="creator-milestone-units-preview">
                <strong style="font-size: 11px; text-transform: uppercase; color: var(--slate); letter-spacing: 0.05em;">Curriculum Units (${m.unitsCount} Total)</strong>
                <div class="creator-unit-pill-row">
                  ${m.lessons.map(l => `
                    <span class="creator-unit-mini-chip">
                      <i data-lucide="${l.format.includes('Video') ? 'video' : l.format.includes('Sandbox') ? 'code-2' : 'file-text'}"></i>
                      <strong>${l.name}</strong> (${l.time})
                    </span>
                  `).join("")}
                </div>
              </div>

              <div class="creator-milestone-gate">
                <strong><i data-lucide="lock" style="width:12px; height:12px;"></i> Unlock Gatekeeper</strong>
                <span>${m.gatekeeper}</span>
              </div>

              <div class="creator-milestone-gate" style="border-left-color: #166534; background: #f4faf6;">
                <strong style="color: #166534;"><i data-lucide="award" style="width:12px; height:12px;"></i> Milestone Credential</strong>
                <span>${m.reward}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 2. Bespoke Proficiency Levels Ladder
  renderCreatorLevelsLadder() {
    const levels = [
      {
        level: "Level 1: Foundations & Core Logic",
        course: "Modern Full-Stack Web Development",
        desc: "Essential computational thinking, HTML5 semantics, CSS token systems, and syntax basics.",
        milestonesCount: 2,
        lessonsCount: 8,
        quizzesCount: 3,
        targetAudience: "Beginner & Transitioning Learners",
        prerequisite: "None (Open Intake Baseline)"
      },
      {
        level: "Level 2: Professional Component Architecture",
        course: "Modern Full-Stack Web Development",
        desc: "React 19, custom hook design patterns, state machines, and relational database schema design.",
        milestonesCount: 3,
        lessonsCount: 14,
        quizzesCount: 4,
        targetAudience: "Intermediate Developers",
        prerequisite: "Level 1 Certified (Pass mark >= 80%)"
      },
      {
        level: "Level 3: Distributed Systems & Capstone",
        course: "Modern Full-Stack Web Development",
        desc: "Production microservices, CI/CD automated deployments, performance telemetry, and Capstone defense.",
        milestonesCount: 3,
        lessonsCount: 12,
        quizzesCount: 2,
        targetAudience: "Senior & Industry-Ready Engineers",
        prerequisite: "Level 2 Certified + Project Defense Approval"
      }
    ];

    return `
      <div style="display: flex; flex-direction: column; gap: 18px; width: 100%;">
        ${levels.map((lvl, idx) => `
          <div style="padding: 22px 26px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 12px; box-shadow: 0 4px 14px rgba(70, 55, 28, 0.035); display: flex; justify-content: space-between; align-items: center; gap: 20px;">
            <div style="flex: 1;">
              <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 6px;">
                <span class="badge badge-primary">TIER 0${idx + 1}</span>
                <h3 style="font: 700 16px 'Manrope', sans-serif; color: var(--navy-medium); margin: 0;">${lvl.level}</h3>
              </div>
              <p style="font-size: 12.5px; color: #5a687c; margin: 0 0 10px 0;">${lvl.desc}</p>
              <div style="display: flex; gap: 14px; font-size: 11.5px; color: var(--navy-medium); flex-wrap: wrap;">
                <span><i data-lucide="flag" style="width:13px; color:var(--primary);"></i> <strong>${lvl.milestonesCount}</strong> Milestones</span>
                <span><i data-lucide="file-text" style="width:13px; color:var(--primary);"></i> <strong>${lvl.lessonsCount}</strong> Lessons</span>
                <span><i data-lucide="help-circle" style="width:13px; color:var(--primary);"></i> <strong>${lvl.quizzesCount}</strong> Quizzes</span>
                <span><i data-lucide="shield" style="width:13px; color:var(--primary);"></i> Prereq: <strong>${lvl.prerequisite}</strong></span>
              </div>
            </div>
            <div class="button-row">
              <button class="btn btn-secondary btn-sm" onclick="Router.navigate('creator-syllabus-milestones')">View Milestones</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 3. Bespoke Modules & Accordion Studio
  renderCreatorModulesStudio() {
    const modules = [
      {
        id: "MOD-101",
        code: "Module 1.1",
        title: "Modern HTML5 & Responsive Semantic Tokens",
        course: "Modern Full-Stack Web Development (Self-Paced)",
        lessonsCount: 3,
        duration: "4.5 Hours",
        resources: ["RES-101 (Semantic HTML PDF)", "RES-102 (Token CSS)"],
        activities: ["Interactive DOM Guide", "Sandbox Code Test"]
      },
      {
        id: "MOD-102",
        code: "Module 1.2",
        title: "Advanced CSS Grid, Flexbox & Fluid Responsive Layouts",
        course: "Modern Full-Stack Web Development (Self-Paced)",
        lessonsCount: 4,
        duration: "6.0 Hours",
        resources: ["RES-102 (CSS Grid Cheat Sheet)"],
        activities: ["Dashboard Layout Sandbox", "ASN-301 Responsive Task"]
      },
      {
        id: "MOD-201",
        code: "Module 2.1",
        title: "React 19 Server Components, State & Streaming",
        course: "Modern Full-Stack Web Development (Self-Paced)",
        lessonsCount: 5,
        duration: "8.0 Hours",
        resources: ["RES-103 (React 19 Video Lecture)"],
        activities: ["State Sandbox", "QZ-202 React Quiz"]
      }
    ];

    return `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        ${modules.map(mod => `
          <div style="padding: 20px 24px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 12px; box-shadow: 0 4px 14px rgba(70, 55, 28, 0.035);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(124, 119, 102, 0.12); padding-bottom: 12px; margin-bottom: 12px;">
              <div>
                <span class="badge badge-secondary" style="margin-bottom: 4px;">${mod.code} · ${mod.id}</span>
                <h3 style="font: 700 15.5px 'Manrope', sans-serif; color: var(--navy-medium); margin: 0;">${mod.title}</h3>
                <span class="table-subline" style="margin-top: 2px;">${mod.course}</span>
              </div>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddLessonModal()">+ Add Lesson Unit</button>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #5a687c; flex-wrap: wrap; gap: 10px;">
              <span><strong>${mod.lessonsCount} Lessons</strong> · Total Duration: <strong>${mod.duration}</strong></span>
              <div style="display: flex; gap: 8px;">
                ${mod.resources.map(r => `<span class="badge badge-secondary">${r}</span>`).join("")}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 4. Bespoke Two-Pane Lesson Builder Studio
  renderCreatorLessonsStudio() {
    const lessons = db.creatorData.syllabus;
    return `
      <div class="creator-lessons-studio-grid">
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${lessons.map((s, idx) => `
            <div style="padding: 16px 20px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 10px; box-shadow: 0 3px 12px rgba(70, 55, 28, 0.03); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
                  <span class="badge badge-primary">Unit 0${idx + 1}</span>
                  <span class="badge badge-secondary">${s.activityType}</span>
                </div>
                <strong style="font-size: 13.5px; color: var(--navy-medium);">${s.lesson}</strong>
                <div style="font-size: 11.5px; color: var(--slate); margin-top: 2px;">${s.module} · Duration: ${s.duration}</div>
              </div>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddLessonModal('${s.id}')">Edit</button>
                <button class="btn btn-primary btn-xs" onclick="Router.navigate('creator-preview')">Preview</button>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="creator-lesson-inspector-card">
          <div style="border-bottom: 1px solid rgba(124, 119, 102, 0.12); padding-bottom: 12px;">
            <span class="badge badge-success">ACTIVE UNIT INSPECTOR</span>
            <h3 style="font: 700 15px 'Manrope', sans-serif; color: var(--navy-medium); margin: 6px 0 0 0;">Lesson 1: Semantic Structure & A11y</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px; font-size: 12px;">
            <div><label style="color: var(--slate); font-weight: 700; text-transform: uppercase; font-size: 10px;">Format Mode</label><div style="font-weight: 600; color: var(--navy-medium);">Interactive Formatted Guide + Sandbox</div></div>
            <div><label style="color: var(--slate); font-weight: 700; text-transform: uppercase; font-size: 10px;">Linked Media Asset</label><div style="color: #1e60aa;">RES-101 (HTML5 Blueprint PDF) · Verified SHA-256</div></div>
            <div><label style="color: var(--slate); font-weight: 700; text-transform: uppercase; font-size: 10px;">Gatekeeper Quiz Key</label><div style="color: var(--navy-medium);">QZ-201 (DOM Fundamentals) · 15 Items · Pass: 80%</div></div>
            <div><label style="color: var(--slate); font-weight: 700; text-transform: uppercase; font-size: 10px;">Completion Criteria</label><div style="color: var(--navy-medium);">100% Reading Scroll + Quiz Score >= 80%</div></div>
          </div>
          <div style="margin-top: 10px; display: flex; gap: 10px;">
            <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="Actions.openCreatorAddLessonModal('SYL-501')">Edit Unit Properties</button>
          </div>
        </div>
      </div>
    `;
  },

  // 5. Bespoke Activity Matrix
  renderCreatorActivitiesMatrix() {
    const activities = [
      { title: "Browser Monaco IDE Sandbox", type: "Interactive Code", desc: "Live code editor testing HTML5, CSS Grid, and React state in a sandbox.", units: "2 Lessons Attached", icon: "code-2" },
      { title: "Spoken Acoustic Voice Recorder", type: "Speaking Activity", desc: "Captures 90-120s spoken audio prompts evaluated against phonetic pronunciation rubrics.", units: "1 Lesson Attached", icon: "mic" },
      { title: "Automated Knowledge Check Quiz", type: "Multiple-Choice Assessment", desc: "Shuffle-enabled question bank quizzes with attempt limits and instant grading.", units: "4 Lessons Attached", icon: "help-circle" },
      { title: "Downloadable Practice Worksheets", type: "PDF Reference", desc: "Structured problem sets and board-standard worksheet attachments.", units: "4 Lessons Attached", icon: "file-text" }
    ];

    return `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; width: 100%;">
        ${activities.map(act => `
          <div style="padding: 22px 24px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 12px; box-shadow: 0 4px 14px rgba(70, 55, 28, 0.035); display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="display: inline-flex; padding: 8px; background: #fdfbf7; border: 1px solid #e7dfd3; border-radius: 8px; color: var(--primary);"><i data-lucide="${act.icon}"></i></span>
                <div>
                  <h4 style="font: 700 15px 'Manrope', sans-serif; color: var(--navy-medium); margin: 0;">${act.title}</h4>
                  <span class="badge badge-secondary" style="margin-top: 3px;">${act.type}</span>
                </div>
              </div>
            </div>
            <p style="font-size: 12px; color: #5a687c; margin: 0; line-height: 1.45;">${act.desc}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid rgba(124, 119, 102, 0.12); font-size: 11.5px; color: var(--navy-medium);">
              <span><strong>${act.units}</strong></span>
              <button class="btn btn-secondary btn-xs" onclick="Router.navigate('creator-syllabus-lessons')">View Lessons</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 6. Bespoke Courses Studio by Delivery Model (Self-Paced, Live Scheduled, K-12)
  renderCreatorCoursesStudio(courses) {
    return `
      <div class="creator-courses-grid">
        ${courses.map(c => {
          let badgeModelClass = "creator-badge-selfpaced";
          let modelIcon = "layers";
          if (c.deliveryModel.includes("Live Scheduled")) {
            badgeModelClass = "creator-badge-live";
            modelIcon = "video";
          } else if (c.deliveryModel.includes("K-12")) {
            badgeModelClass = "creator-badge-k12";
            modelIcon = "graduation-cap";
          }

          let stageBadge = "badge-secondary";
          if (c.stage === "Draft") stageBadge = "badge-warning";
          if (c.stage === "In Review") stageBadge = "badge-warning";
          if (c.stage === "Approved" || c.stage === "Published") stageBadge = "badge-success";

          return `
            <article class="creator-course-card">
              <div class="creator-course-top">
                <span class="creator-course-badge-model ${badgeModelClass}">
                  <i data-lucide="${modelIcon}"></i> ${c.deliveryModel}
                </span>
                <span class="badge ${stageBadge}">${c.stage}</span>
              </div>

              <div>
                <h3>${c.title}</h3>
                <span class="table-subline" style="margin-top: 3px; display: block;">Code: ${c.code} · Faculty: ${c.faculty}</span>
              </div>

              <div class="creator-course-meta-pills">
                <span><i data-lucide="clock"></i> ${c.estimatedEffort}</span>
                <span><i data-lucide="folder-tree"></i> ${c.modulesCount} Modules</span>
                <span><i data-lucide="file-text"></i> ${c.lessonsCount} Lessons</span>
                <span><i data-lucide="git-branch"></i> ${c.activeVersion}</span>
              </div>

              <div class="creator-course-delivery-box">
                ${c.deliveryModel.includes("Self-paced") ? `
                  <strong><i data-lucide="flag"></i> Milestone Self-Paced Track:</strong>
                  <p style="margin: 3px 0 0 0; font-size: 11.5px; color: #5a687c;">Automated milestone progression state machine. Quiz gatekeepers unlock consecutive modules.</p>
                ` : c.deliveryModel.includes("Live Scheduled") ? `
                  <strong><i data-lucide="video"></i> Live Interactive Cohort:</strong>
                  <p style="margin: 3px 0 0 0; font-size: 11.5px; color: #5a687c;">Daily.co room attachments with 80% live attendance threshold and acoustic voice submissions.</p>
                ` : `
                  <strong><i data-lucide="award"></i> K-12 Academic Board Alignment:</strong>
                  <p style="margin: 3px 0 0 0; font-size: 11.5px; color: #5a687c;">FBISE standard & Cambridge O-Level aligned. Public parent syllabus preview enabled (K12-005).</p>
                `}
              </div>

              <div class="creator-course-footer">
                <span style="font-size: 11.5px; color: var(--slate);">Author: <strong>${c.author}</strong></span>
                <div class="button-row">
                  <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorCourseDetails('${c.id}')">Inspect</button>
                  <button class="btn btn-primary btn-xs" onclick="Router.navigate('creator-syllabus-lessons')">Build Syllabus</button>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  },

  // 7. Bespoke Question Bank Studio Cards
  renderCreatorQuestionBankStudio(questions) {
    return `
      <div class="creator-question-cards-grid">
        ${questions.map(q => `
          <div class="creator-question-card">
            <div class="creator-question-header">
              <span class="badge badge-primary">${q.type}</span>
              <span class="badge badge-secondary">${q.difficulty}</span>
            </div>
            <h4 class="creator-question-stem">${q.title}</h4>
            
            <div class="creator-question-choices">
              <span style="font-size: 10.5px; text-transform: uppercase; color: var(--slate); font-weight: 700;">Answer Key & Options:</span>
              <div class="creator-choice-item correct">
                <i data-lucide="check-circle" style="width: 14px; height: 14px;"></i>
                <strong>Correct Key: ${q.correctAnswer}</strong>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid rgba(124, 119, 102, 0.12); font-size: 11.5px; color: var(--slate);">
              <span>Tags: <strong>${q.tags.join(", ")}</strong></span>
              <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddQuestionModal('${q.id}')">Edit Item</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 8. Bespoke Quiz Engine Studio
  renderCreatorQuizzesStudio(assessments) {
    const quizzes = assessments.filter(a => a.type === "Quiz");
    return `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%;">
        ${quizzes.map(qz => `
          <div style="padding: 22px 24px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 12px; box-shadow: 0 4px 14px rgba(70, 55, 28, 0.035); display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="badge badge-primary">QUIZ ENGINE</span>
              <span class="badge badge-warning">${qz.status}</span>
            </div>
            <h3 style="font: 700 15.5px 'Manrope', sans-serif; color: var(--navy-medium); margin: 0;">${qz.title}</h3>
            <span class="table-subline">${qz.course}</span>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: #fbf9f5; padding: 12px; border-radius: 8px; font-size: 12px;">
              <div><span>Pass Mark:</span> <strong>${qz.passMark}</strong></div>
              <div><span>Time Limit:</span> <strong>${qz.timeLimit}</strong></div>
              <div><span>Max Attempts:</span> <strong>${qz.maxAttempts}</strong></div>
              <div><span>Randomization:</span> <strong>Enabled</strong></div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid rgba(124, 119, 102, 0.12);">
              <span style="font-size: 11.5px; color: var(--slate);">Questions: <strong>${qz.questionsCount} items</strong></span>
              <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddQuizModal('${qz.id}')">Configure Rules</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 9. Bespoke Spoken English Voice Activity Studio
  renderCreatorVoiceStudio(assessments) {
    const voiceTasks = assessments.filter(a => a.type === "Voice Activity");
    return `
      <div style="display: flex; flex-direction: column; gap: 18px; width: 100%;">
        ${voiceTasks.map(v => `
          <div style="padding: 24px 28px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 14px; box-shadow: 0 4px 16px rgba(70, 55, 28, 0.04); display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <span class="badge badge-primary"><i data-lucide="mic"></i> ACOUSTIC VOICE ACTIVITY</span>
                <h3 style="font: 700 16px 'Manrope', sans-serif; color: var(--navy-medium); margin: 6px 0 2px 0;">${v.title}</h3>
                <span class="table-subline">${v.course} · Linked: ${v.linkedLesson}</span>
              </div>
              <span class="badge badge-success">${v.status}</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; background: #fdfbf7; padding: 14px 18px; border-radius: 8px; border: 1px solid rgba(124, 119, 102, 0.15);">
              <div><strong style="font-size: 11px; color: var(--slate); text-transform: uppercase;">Duration Requirement</strong><div style="font-size: 13px; font-weight: 700; color: var(--navy-medium);">${v.durationRequirement}</div></div>
              <div><strong style="font-size: 11px; color: var(--slate); text-transform: uppercase;">Format</strong><div style="font-size: 13px; font-weight: 700; color: var(--navy-medium);">.MP3 / .WAV (128kbps)</div></div>
              <div><strong style="font-size: 11px; color: var(--slate); text-transform: uppercase;">Phonetic Rubric</strong><div style="font-size: 13px; font-weight: 700; color: #1e60aa;">${v.rubric}</div></div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid rgba(124, 119, 102, 0.12);">
              <span style="font-size: 12px; color: #5a687c;">Evaluation Mode: <strong>Trainer & AI Speech Evaluation</strong></span>
              <button class="btn btn-primary btn-xs" onclick="Router.navigate('creator-preview')">Test Recording Flow</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // 10. Bespoke Assessment Rubric Criteria Matrix
  renderCreatorRubricsStudio() {
    return `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
        <div style="padding: 24px 28px; background: #ffffff; border: 1px solid rgba(124, 119, 102, 0.22); border-radius: 14px; box-shadow: 0 4px 16px rgba(70, 55, 28, 0.04);">
          <div style="border-bottom: 1px solid rgba(124, 119, 102, 0.12); padding-bottom: 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span class="badge badge-primary">RUBRIC MATRIX: RUB-101</span>
              <h3 style="font: 700 16px 'Manrope', sans-serif; color: var(--navy-medium); margin: 4px 0 0 0;">Frontend Clean Architecture & Component Design</h3>
            </div>
            <button class="btn btn-secondary btn-xs">+ Add Criteria</button>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
            <thead>
              <tr style="background: #fdfbf7; text-align: left;">
                <th style="padding: 10px;">Criteria & Weight</th>
                <th style="padding: 10px;">Exemplary (100%)</th>
                <th style="padding: 10px;">Proficient (75%)</th>
                <th style="padding: 10px;">Developing (50%)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-top: 1px solid #eee8dc;">
                <td style="padding: 12px 10px;"><strong>Component Modularity</strong><br><span class="table-subline">Weight: 35%</span></td>
                <td style="padding: 12px 10px;">Zero coupled side-effects; pure components and state machines.</td>
                <td style="padding: 12px 10px;">Clean components with minor redundant re-renders.</td>
                <td style="padding: 12px 10px;">Monolithic files with tight prop drilling.</td>
              </tr>
              <tr style="border-top: 1px solid #eee8dc;">
                <td style="padding: 12px 10px;"><strong>Mobile Responsiveness</strong><br><span class="table-subline">Weight: 35%</span></td>
                <td style="padding: 12px 10px;">Flawless layout adaptation across 390px, 820px, and 1440px.</td>
                <td style="padding: 12px 10px;">Minor padding truncation on small screens.</td>
                <td style="padding: 12px 10px;">Horizontal overflow and broken flex layouts.</td>
              </tr>
              <tr style="border-top: 1px solid #eee8dc;">
                <td style="padding: 12px 10px;"><strong>Accessibility (A11y)</strong><br><span class="table-subline">Weight: 30%</span></td>
                <td style="padding: 12px 10px;">Full keyboard navigation, semantic ARIA attributes, 4.5:1 contrast.</td>
                <td style="padding: 12px 10px;">Keyboard navigable with minor missing aria-labels.</td>
                <td style="padding: 12px 10px;">Missing semantic landmarks and focus outlines.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 11. Bespoke In-Depth Learner Experience Simulator View
  renderCreatorLmsPreview() {
    return `
      <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; background: linear-gradient(135deg, #182232, #253852); border-radius: 10px; color: #ffffff;">
          <div>
            <strong style="font-size: 13.5px; color: #ffffff;">LMS Learner Viewport Simulator (CAT-009)</strong>
            <span style="font-size: 12px; color: #c9d6e4; display: block;">Testing: Modern Full-Stack Web Development (v1.2 Draft)</span>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 12px; color: #b0c2d8;">Mode:</span>
            <button class="btn btn-primary btn-xs" id="lms-sim-guest" onclick="Actions.switchLmsSimMode('guest')">Guest Visitor</button>
            <button class="btn btn-secondary btn-xs" id="lms-sim-free" onclick="Actions.switchLmsSimMode('free')">Registered Free Learner</button>
          </div>
        </div>

        <div class="creator-preview-viewport-box">
          <div class="creator-preview-player-pane">
            <div class="creator-player-screen-mock">
              <i data-lucide="play-circle"></i>
              <strong style="font-size: 15px;">Interactive Video Lecture & Coding Demo</strong>
              <span style="font-size: 12px; opacity: 0.85;">Lesson 1: Semantic Structure & Accessibility (45:00)</span>
            </div>

            <div style="display: flex; gap: 12px; border-bottom: 1px solid rgba(124, 119, 102, 0.15); padding-bottom: 8px; flex-wrap: wrap;">
              <button class="btn btn-primary btn-xs">Lesson Guide</button>
              <button class="btn btn-secondary btn-xs" onclick="Notifications.push('Practice Sandbox', 'Loaded interactive code sandbox environment.', 'info')">Coding Sandbox</button>
              <button class="btn btn-secondary btn-xs" onclick="Notifications.push('Resource Attached', 'Downloaded RES-101 HTML5 Semantic PDF.', 'success')">Download Notes</button>
              <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddQuizModal('QZ-201')">Take Quiz</button>
            </div>

            <div>
              <h3 style="font: 700 16px 'Manrope', sans-serif; color: var(--navy-medium); margin: 0 0 8px 0;">Lesson 1: Semantic Structure & Modern Layout Tokens</h3>
              <p style="font-size: 12.5px; line-height: 1.6; color: #4a586e; margin: 0;">
                In this unit, learners master semantic HTML elements (<code style="color:var(--primary);">&lt;main&gt;</code>, <code style="color:var(--primary);">&lt;header&gt;</code>, <code style="color:var(--primary);">&lt;section&gt;</code>) and establish accessible color contrast ratios adhering to WCAG AAA standards.
              </p>
            </div>
          </div>

          <div class="creator-preview-drawer-pane">
            <strong style="font-size: 13px; color: var(--navy-medium); text-transform: uppercase; letter-spacing: 0.05em;">Curriculum Outline</strong>
            
            <div class="creator-drawer-item active">
              <div>
                <span class="badge badge-success" style="font-size: 9px; margin-bottom: 2px;">FREE PREVIEW</span>
                <strong style="display: block; font-size: 12px; color: var(--navy-medium);">1. Semantic Structure & A11y</strong>
                <small style="color: #6a788e;">45 Mins · Formatted Guide</small>
              </div>
              <i data-lucide="play" style="width: 14px; height: 14px; color: var(--primary);"></i>
            </div>

            <div class="creator-drawer-item" id="sim-drawer-item-2">
              <div>
                <span class="badge badge-warning" style="font-size: 9px; margin-bottom: 2px;" id="sim-lock-badge-2"><i data-lucide="lock" style="width:9px; height:9px;"></i> PAID ENROLMENT</span>
                <strong style="display: block; font-size: 12px; color: var(--navy-medium);">2. Advanced CSS Grid Systems</strong>
                <small style="color: #6a788e;">60 Mins · Interactive Sandbox</small>
              </div>
              <i data-lucide="lock" style="width: 14px; height: 14px; color: var(--slate);" id="sim-lock-icon-2"></i>
            </div>

            <div class="creator-drawer-item locked">
              <div>
                <span class="badge badge-secondary" style="font-size: 9px; margin-bottom: 2px;"><i data-lucide="lock" style="width:9px; height:9px;"></i> PREREQUISITE GATED</span>
                <strong style="display: block; font-size: 12px; color: var(--navy-medium);">3. React 19 State Machines</strong>
                <small style="color: #6a788e;">Requires Milestone 1 Pass</small>
              </div>
              <i data-lucide="lock" style="width: 14px; height: 14px; color: var(--slate);"></i>
            </div>

            <div class="creator-drawer-item locked">
              <div>
                <span class="badge badge-secondary" style="font-size: 9px; margin-bottom: 2px;"><i data-lucide="lock" style="width:9px; height:9px;"></i> CAPSTONE DEFENSE</span>
                <strong style="display: block; font-size: 12px; color: var(--navy-medium);">4. Production Deployment</strong>
                <small style="color: #6a788e;">Requires 100% Progress</small>
              </div>
              <i data-lucide="lock" style="width: 14px; height: 14px; color: var(--slate);"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  creatorTableHeaders(dataType) {
    if (dataType === "courses") {
      return `<tr><th>Course / Code</th><th>Programme & Faculty</th><th>Delivery Model</th><th>Active Version</th><th>Hierarchy Units</th><th>Stage</th><th>Actions</th></tr>`;
    }
    if (dataType === "versions") {
      return `<tr><th>Version / Course</th><th>Delivery Model</th><th>Changes Summary</th><th>Author</th><th>Validation Check</th><th>State</th><th>Actions</th></tr>`;
    }
    if (dataType === "syllabus") {
      return `<tr><th>Level / Milestone</th><th>Module & Lesson</th><th>Activity Format</th><th>Duration</th><th>Linked Assets</th><th>Status</th><th>Actions</th></tr>`;
    }
    if (dataType === "questions") {
      return `<tr><th>Question Prompt</th><th>Type & Category</th><th>Difficulty</th><th>Correct Answer Key</th><th>Quizzes Linked</th><th>Version</th><th>Actions</th></tr>`;
    }
    if (dataType === "assessments") {
      return `<tr><th>Assessment Title</th><th>Format / Course</th><th>Questions / Submission</th><th>Pass Mark & Attempts</th><th>Randomization</th><th>State</th><th>Actions</th></tr>`;
    }
    if (dataType === "resources") {
      return `<tr><th>Resource Name / ID</th><th>Format & Size</th><th>Version</th><th>Integrity Checksum</th><th>Access Gating</th><th>Status</th><th>Actions</th></tr>`;
    }
    if (dataType === "rules") {
      return `<tr><th>Rule Target / Course</th><th>Rule Type</th><th>Condition Expression</th><th>Evaluation Engine</th><th>Updated</th><th>State</th><th>Actions</th></tr>`;
    }
    if (dataType === "reviewComments") {
      return `<tr><th>Course / Item</th><th>Academic Reviewer</th><th>Severity</th><th>Feedback Notes</th><th>Date</th><th>Status</th><th>Actions</th></tr>`;
    }
    if (dataType === "k12Syllabi") {
      return `<tr><th>Grade & Subject</th><th>Curriculum Board</th><th>Academic Year</th><th>Units & Chapters</th><th>Lead Author</th><th>Status</th><th>Actions</th></tr>`;
    }
    if (dataType === "auditLogs") {
      return `<tr><th>Timestamp</th><th>Actor</th><th>Action Code</th><th>Governance Details</th><th>Severity</th></tr>`;
    }
    return `<tr><th>Record ID</th><th>Title</th><th>Category</th><th>Details</th><th>Status</th><th>Actions</th></tr>`;
  },

  creatorTableRows(dataType, items) {
    if (!items.length) {
      return `<tr class="table-empty-row"><td colspan="7"><div class="table-empty-state"><strong>No matching authoring records found</strong><span>Adjust search keywords or status filters.</span></div></td></tr>`;
    }

    return items.map(item => {
      let badgeClass = "badge-secondary";
      const statusVal = item.stage || item.lifecycleState || item.status || "Draft";
      if (["Published", "Approved", "Passed", "Clean / Verified", "Resolved", "Certified"].includes(statusVal)) badgeClass = "badge-success";
      if (["Draft", "In Review", "Warning", "Advisory", "Uploaded (Verified)"].includes(statusVal)) badgeClass = "badge-warning";
      if (["Changes Requested", "Blocking", "Quarantined", "Failed"].includes(statusVal)) badgeClass = "badge-error";

      if (dataType === "courses") {
        return `
          <tr>
            <td><strong>${item.title}</strong><br><span class="table-subline">${item.code} · ${item.id}</span></td>
            <td><strong>${item.programme}</strong><br><span class="table-subline">${item.faculty}</span></td>
            <td><span class="badge badge-secondary">${item.deliveryModel}</span></td>
            <td><strong>${item.activeVersion}</strong><br><span class="table-subline">Live: ${item.latestPublished}</span></td>
            <td>${item.modulesCount} Modules · ${item.lessonsCount} Lessons</td>
            <td><span class="badge ${badgeClass}">${item.stage}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorCourseDetails('${item.id}')">Inspect</button>
                ${item.stage === 'Draft' ? `
                  <button class="btn btn-primary btn-xs" onclick="Router.navigate('creator-syllabus-lessons')">Edit Syllabus</button>
                ` : item.stage === 'Approved' ? `
                  <span class="badge badge-success">Awaiting Publish</span>
                ` : `
                  <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorNewVersionModal('${item.id}')">Create v2.0</button>
                `}
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "versions") {
        return `
          <tr>
            <td><strong>${item.versionTag}</strong> — ${item.courseTitle}<br><span class="table-subline">${item.id} · ${item.courseId}</span></td>
            <td><span class="badge badge-secondary">${item.deliveryModel}</span></td>
            <td>${item.changesSummary}</td>
            <td>${item.author}<br><span class="table-subline">Updated: ${item.updated}</span></td>
            <td><span class="badge ${item.validationStatus.includes('Warning') ? 'badge-warning' : 'badge-success'}">${item.validationStatus}</span></td>
            <td><span class="badge ${badgeClass}">${item.lifecycleState}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorValidationModal('${item.id}')">Validate</button>
                ${item.lifecycleState === 'Draft' ? `
                  <button class="btn btn-primary btn-xs" onclick="Actions.openCreatorSubmitReviewModal('${item.id}')">Submit for Review</button>
                ` : `
                  <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorPreviewModal('${item.courseId}')">Preview</button>
                `}
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "syllabus") {
        return `
          <tr>
            <td><strong>${item.level}</strong><br><span class="table-subline">${item.milestone}</span></td>
            <td><strong>${item.lesson}</strong><br><span class="table-subline">${item.module}</span></td>
            <td>${item.activityType}</td>
            <td>${item.duration}</td>
            <td><span style="font-size: 11.5px; color: var(--navy-medium);">${item.linkedResource}</span><br><span class="table-subline">${item.linkedAssessment}</span></td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddLessonModal('${item.id}')">Edit Unit</button>
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorEditRulesModal('${item.id}')">Rules</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "questions") {
        return `
          <tr>
            <td><strong>${item.title}</strong><br><span class="table-subline">${item.id} · Tags: ${item.tags.join(", ")}</span></td>
            <td>${item.type}<br><span class="table-subline">${item.category}</span></td>
            <td><span class="badge badge-secondary">${item.difficulty}</span></td>
            <td><strong style="color: var(--success);">${item.correctAnswer}</strong></td>
            <td>${item.usedInQuizzes.join(", ")}</td>
            <td>${item.version}</td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddQuestionModal('${item.id}')">Edit Item</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "assessments") {
        return `
          <tr>
            <td><strong>${item.title}</strong><br><span class="table-subline">${item.id}</span></td>
            <td><strong>${item.type}</strong><br><span class="table-subline">${item.course}</span></td>
            <td>${item.questionsCount ? item.questionsCount + ' Questions' : item.submissionType}</td>
            <td>Pass: <strong>${item.passMark || 'Rubric Evaluated'}</strong><br><span class="table-subline">Attempts: ${item.maxAttempts || '2 Revisions'}</span></td>
            <td>${item.randomization || 'Rubric Matrix'}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorAddQuizModal('${item.id}')">Configure</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "resources") {
        return `
          <tr>
            <td><strong>${item.title}</strong><br><span class="table-subline">${item.id} · Uploaded: ${item.uploadedAt}</span></td>
            <td>${item.format} · ${item.size}</td>
            <td>${item.version}</td>
            <td><span class="om-checksum-tag" style="font-size: 10px;">SHA: ${item.sha256.slice(0, 14)}...</span></td>
            <td>${item.accessLevel}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Notifications.push('Resource Inspected', 'Integrity SHA-256 verified against private storage ledger.', 'success')">Verify Checksum</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "rules") {
        return `
          <tr>
            <td><strong>${item.targetItem}</strong><br><span class="table-subline">${item.course} · ${item.id}</span></td>
            <td><span class="badge badge-primary">${item.type}</span></td>
            <td>${item.condition}</td>
            <td>${item.evaluationEngine}</td>
            <td>${item.updated}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCreatorEditRulesModal('${item.id}')">Edit Expression</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "reviewComments") {
        return `
          <tr>
            <td><strong>${item.courseTitle}</strong><br><span class="table-subline">${item.item} · ${item.id}</span></td>
            <td>${item.reviewer}</td>
            <td><span class="badge ${item.severity === 'Blocking' ? 'badge-error' : 'badge-warning'}">${item.severity}</span></td>
            <td>${item.comment}</td>
            <td>${item.date}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                ${item.status !== 'Resolved' ? `
                  <button class="btn btn-primary btn-xs" onclick="Actions.openCreatorReviewComment('${item.id}')">Resolve</button>
                ` : `
                  <span class="badge badge-success">Resolved</span>
                `}
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "k12Syllabi") {
        return `
          <tr>
            <td><strong>${item.grade} — ${item.subject}</strong><br><span class="table-subline">${item.id}</span></td>
            <td>${item.curriculumBoard}</td>
            <td>${item.academicYear}</td>
            <td><strong>${item.unitsCount} Units</strong><br><span class="table-subline">${item.chapters}</span></td>
            <td>${item.leadAuthor}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Notifications.push('Syllabus Outline', 'K-12 full syllabus outline generated for student & parent enrollment preview (K12-005).', 'info')">Preview Outline</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "auditLogs") {
        return `
          <tr>
            <td>${item.timestamp}</td>
            <td><strong>${item.actor}</strong></td>
            <td><span class="om-checksum-tag">${item.action}</span></td>
            <td>${item.details}</td>
            <td><span class="badge ${item.severity === 'High' ? 'badge-error' : 'badge-secondary'}">${item.severity}</span></td>
          </tr>
        `;
      }

      return `
        <tr>
          <td><strong>${item.id || 'REC'}</strong></td>
          <td>${item.title || item.name || 'Untitled'}</td>
          <td>${item.category || '-'}</td>
          <td>${item.details || ''}</td>
          <td><span class="badge ${badgeClass}">${item.status || 'Active'}</span></td>
          <td><button class="btn btn-secondary btn-xs">View</button></td>
        </tr>
      `;
    }).join("");
  },

  // CSR Dashboard Renderer
  csrDashboard() {
    const el = (id, text) => {
      const e = document.getElementById(id);
      if (e) e.textContent = String(text);
    };

    const myLeads = db.csrData.leads.filter(l => l.csr === "Sarah Jenkins");
    const newLeads = db.csrData.leads.filter(l => l.stage === "New");
    const dueFollowups = db.csrData.followups.filter(f => f.status === "Due");
    const scheduledTrials = db.csrData.trials.filter(t => t.status === "Scheduled");
    const convOpps = db.csrData.enrolments.filter(e => e.status === "Conversion Opportunity");
    const reviewPayments = db.csrData.payments.filter(p => p.status === "Awaiting Review" || p.status === "Under Review");

    el("csr-flight-followups-count", dueFollowups.length);
    el("csr-pipe-leads-count", myLeads.length);
    el("csr-pipe-followups-count", dueFollowups.length);
    el("csr-pipe-opps-count", convOpps.length);
    el("csr-pipe-comm-count", "PKR 3,600");

    el("csr-followups-sub-count", dueFollowups.length);
    el("csr-opps-sub-count", convOpps.length + reviewPayments.length);

    // Populate Left Queue: Priority Follow-ups
    const followupsContainer = document.getElementById("csr-followups-list");
    if (followupsContainer) {
      followupsContainer.innerHTML = dueFollowups.slice(0, 4).map(f => `
        <div class="csr-action-row">
          <div class="csr-action-info">
            <div class="csr-action-title">
              <span class="badge badge-error">${f.status}</span>
              <span>${f.leadName} (${f.programme})</span>
            </div>
            <div class="csr-action-sub">${f.type} · ${f.dueDate} · ${f.nextAction}</div>
          </div>
          <div class="button-row">
            <button class="btn btn-primary btn-xs" onclick="Actions.openCsrFollowup('${f.id}')">Contact Lead</button>
            <button class="btn btn-secondary btn-xs" onclick="Actions.openCsrLead('${f.leadId}')">Lead File</button>
          </div>
        </div>
      `).join("");
    }

    // Populate Right Queue: Conversion Opportunities & Payment Reviews
    const convContainer = document.getElementById("csr-conversion-list");
    if (convContainer) {
      const oppItems = convOpps.map(o => `
        <div class="csr-action-row">
          <div class="csr-action-info">
            <div class="csr-action-title">
              <span class="badge badge-primary">Conversion Opp</span>
              <span>${o.prospect} — ${o.amount}</span>
            </div>
            <div class="csr-action-sub">${o.programme} · ${o.membership} · Attributed to ${o.csr}</div>
          </div>
          <div class="button-row">
            <button class="btn btn-primary btn-xs" onclick="Actions.openCsrAssistedEnrolment('${o.id}')">Assist Checkout</button>
          </div>
        </div>
      `);

      const payItems = reviewPayments.slice(0, 2).map(p => `
        <div class="csr-action-row">
          <div class="csr-action-info">
            <div class="csr-action-title">
              <span class="badge badge-warning">${p.status}</span>
              <span>${p.learner} — ${p.submittedAmount}</span>
            </div>
            <div class="csr-action-sub">${p.channel} · ${p.reference} · ${p.receiptChecksum}</div>
          </div>
          <div class="button-row">
            <button class="btn btn-primary btn-xs" onclick="Actions.openCsrPaymentReview('${p.id}')">Review Slip</button>
          </div>
        </div>
      `);

      convContainer.innerHTML = [...oppItems, ...payItems].join("");
    }

    // Update Sidebar Badge Counts
    document.querySelectorAll(".count-csr-my-leads").forEach(e => e.textContent = myLeads.length);
    document.querySelectorAll(".count-csr-new-leads").forEach(e => e.textContent = newLeads.length);
    document.querySelectorAll(".count-csr-followups-due").forEach(e => e.textContent = dueFollowups.length);
    document.querySelectorAll(".count-csr-trial-reqs").forEach(e => e.textContent = db.csrData.trials.length);
    document.querySelectorAll(".count-csr-conv-opps").forEach(e => e.textContent = convOpps.length);
    document.querySelectorAll(".count-csr-payment-queue").forEach(e => e.textContent = reviewPayments.length);
    document.querySelectorAll(".count-csr-comm-payable").forEach(e => e.textContent = db.csrData.commissions.filter(c => c.status === "Payable").length);
    document.querySelectorAll(".count-csr-open-cases").forEach(e => e.textContent = db.csrData.cases.filter(c => c.status !== "Resolved").length);

    // Event listener for CSR shortcuts
    document.querySelectorAll("#csr-dashboard-shell [data-route-shortcut]").forEach(btn => {
      btn.onclick = () => Router.navigate(btn.getAttribute("data-route-shortcut"));
    });

    window.lucide?.createIcons();
  },

  // CSR Sub-views Workspace Renderer
  csrWorkspace(route) {
    const config = csrRouteDefinitions[route];
    const container = document.getElementById("csr-workspace-content");
    if (!config || !container) return;

    let items = (db.csrData[config.dataType] || []);
    if (config.filterFn) {
      items = items.filter(config.filterFn);
    }

    const metricMarkup = config.metrics.map(([label, valueFn, note]) => {
      const val = typeof valueFn === "function" ? valueFn() : valueFn;
      return `
        <article class="coo-workspace-metric">
          <span>${label}</span>
          <strong>${val}</strong>
          <small>${note}</small>
        </article>
      `;
    }).join("");

    container.innerHTML = `
      <div class="coo-workspace-view">
        <header class="coo-workspace-header">
          <div class="coo-workspace-heading">
            <span class="coo-workspace-group">${config.group}</span>
            <h2>${config.title}</h2>
            <p>${config.description}</p>
          </div>
          <div class="coo-workspace-metrics-strip">
            ${metricMarkup}
          </div>
        </header>

        <section class="coo-scope-notice" aria-label="CSR Authority">
          <i data-lucide="shield-check"></i>
          <div>
            <strong>CSR SCOPE & COMPLIANCE AUTHORITY</strong>
            <p>${config.scopeAuthority}</p>
          </div>
        </section>

        <section class="module-toolbar">
          <div class="search-filter-row">
            <input type="text" id="csr-workspace-search" class="form-control" placeholder="Search by prospect name, ID, status, or keyword...">
            <select id="csr-workspace-status" class="form-control">
              <option value="">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Due">Due Today</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Approved">Approved / Converted</option>
              <option value="Payable">Payable</option>
            </select>
          </div>
          <div class="button-row">
            <button class="btn btn-secondary btn-xs" onclick="Notifications.push('View Saved', 'Filter criteria saved to CSR preset.', 'info')"><i data-lucide="bookmark"></i> Save view</button>
          </div>
        </section>

        <div class="table-container">
          <table class="coo-table">
            <thead>
              ${this.csrTableHeaders(config.dataType)}
            </thead>
            <tbody id="csr-table-body">
              ${this.csrTableRows(config.dataType, items)}
            </tbody>
          </table>
        </div>
      </div>
    `;

    // Bind Live Search and Filter
    const searchInput = document.getElementById("csr-workspace-search");
    const statusSelect = document.getElementById("csr-workspace-status");

    const applyFilters = () => {
      const q = (searchInput?.value || "").toLowerCase().trim();
      const st = statusSelect?.value || "";

      const filtered = items.filter(item => {
        const text = JSON.stringify(item).toLowerCase();
        const matchesQuery = !q || text.includes(q);
        const matchesStatus = !st || (item.status === st || item.stage === st);
        return matchesQuery && matchesStatus;
      });

      const tbody = document.getElementById("csr-table-body");
      if (tbody) {
        tbody.innerHTML = this.csrTableRows(config.dataType, filtered);
        window.lucide?.createIcons();
      }
    };

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (statusSelect) statusSelect.addEventListener("change", applyFilters);

    window.lucide?.createIcons();
  },

  csrTableHeaders(dataType) {
    if (dataType === "leads") {
      return `<tr><th>Prospect / ID</th><th>Programme / Interest</th><th>Source / Campaign</th><th>Expected Value</th><th>Consent</th><th>Stage</th><th>Actions</th></tr>`;
    }
    if (dataType === "followups") {
      return `<tr><th>Lead / Contact</th><th>Programme</th><th>Due Date & Time</th><th>Task Type</th><th>History & Next Step</th><th>Status</th><th>Actions</th></tr>`;
    }
    if (dataType === "trials") {
      return `<tr><th>Prospect / Request ID</th><th>Programme</th><th>Score & Consent</th><th>Slot & Trainer</th><th>Daily.co Room</th><th>Outcome & State</th><th>Actions</th></tr>`;
    }
    if (dataType === "enrolments") {
      return `<tr><th>Prospect / Enrolment ID</th><th>Programme</th><th>Membership / Product</th><th>Order Amount</th><th>CSR Attribution</th><th>Status</th><th>Actions</th></tr>`;
    }
    if (dataType === "payments") {
      return `<tr><th>Submission / Learner</th><th>Payer / Course</th><th>Submitted vs Expected</th><th>Channel & Reference</th><th>Checksum / Receipt</th><th>State</th><th>Actions</th></tr>`;
    }
    if (dataType === "commissions") {
      return `<tr><th>Commission ID / Enrolment</th><th>Learner / Product</th><th>Sales Value</th><th>Commission Plan</th><th>Calculated Commission</th><th>Payroll State</th><th>Actions</th></tr>`;
    }
    if (dataType === "cases") {
      return `<tr><th>Inquiry ID / Subject</th><th>Category</th><th>Priority</th><th>SLA Window</th><th>Prospect / Owner</th><th>Status</th><th>Actions</th></tr>`;
    }
    return `<tr><th>Record ID</th><th>Title</th><th>Owner</th><th>Detail</th><th>Timing</th><th>State</th><th>Actions</th></tr>`;
  },

  csrTableRows(dataType, items) {
    if (!items.length) {
      return `<tr class="table-empty-row"><td colspan="7"><div class="table-empty-state"><strong>No matching records found</strong><span>Adjust search keywords or scope filters.</span></div></td></tr>`;
    }

    return items.map(item => {
      let badgeClass = "badge-secondary";
      if (item.status === "Approved" || item.status === "Converted" || item.status === "Active Enrolment" || item.status === "Paid" || item.status === "Payable" || item.stage === "Converted") badgeClass = "badge-success";
      if (item.status === "Due" || item.status === "Awaiting Review" || item.status === "Under Review" || item.status === "Ready for Scheduling" || item.stage === "New" || item.stage === "Contacted" || item.stage === "Qualified") badgeClass = "badge-warning";
      if (item.status === "Rejected / Correction" || item.status === "No-Show" || item.status === "Reversed" || item.stage === "Lost" || (item.priority === "High")) badgeClass = "badge-error";

      if (dataType === "leads") {
        return `
          <tr>
            <td><strong>${item.name}</strong><span class="table-subline">${item.id} · ${item.contact}</span></td>
            <td><strong>${item.programme}</strong><span class="table-subline">${item.email}</span></td>
            <td>${item.source}<span class="table-subline">${item.created}</span></td>
            <td><strong>${item.expectedValue}</strong></td>
            <td><span class="badge ${item.consent.includes('Verified') ? 'badge-success' : 'badge-warning'}">${item.consent.includes('Verified') ? 'Verified' : 'Pending'}</span></td>
            <td><span class="badge ${badgeClass}">${item.stage}</span></td>
            <td>
              <div class="button-row">
                ${item.stage === 'New' || item.stage === 'Contacted' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrContactLead('${item.id}')">Log Contact</button>` : ''}
                ${item.stage === 'Qualified' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrScheduleTrialModal('${item.id}')">Schedule Trial</button>` : ''}
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCsrLead('${item.id}')">View</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "followups") {
        return `
          <tr>
            <td><strong>${item.leadName}</strong><span class="table-subline">${item.id} · ${item.contact}</span></td>
            <td>${item.programme}</td>
            <td><strong class="${item.status === 'Due' ? 'error-text' : ''}">${item.dueDate}</strong></td>
            <td><span class="badge badge-primary">${item.type}</span></td>
            <td><strong>${item.nextAction}</strong><span class="table-subline">${item.history}</span></td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                ${item.status === 'Due' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrFollowup('${item.id}')">Execute Task</button>` : ''}
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCsrLead('${item.leadId}')">Lead File</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "trials") {
        return `
          <tr>
            <td><strong>${item.prospect}</strong><span class="table-subline">${item.id} · ${item.leadId}</span></td>
            <td><strong>${item.course}</strong></td>
            <td>Placement: ${item.placementScore}<span class="table-subline">Consent: ${item.consent}</span></td>
            <td>${item.slot}<span class="table-subline">Trainer: ${item.trainer}</span></td>
            <td>${item.room ? `<span class="badge badge-success">Provisioned</span>` : `<span class="badge badge-secondary">Pending</span>`}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span><span class="table-subline">${item.outcome}</span></td>
            <td>
              <div class="button-row">
                ${item.status === 'Ready for Scheduling' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrScheduleTrialModal('${item.id}')">Book Slot</button>` : ''}
                ${item.status === 'Scheduled' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrTrialOutcome('${item.id}')">Record Outcome</button>` : ''}
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCsrTrial('${item.id}')">Details</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "enrolments") {
        return `
          <tr>
            <td><strong>${item.prospect}</strong><span class="table-subline">${item.id} · ${item.leadId}</span></td>
            <td><strong>${item.programme}</strong></td>
            <td>${item.membership}</td>
            <td><strong>${item.amount}</strong><span class="table-subline">${item.paymentStatus}</span></td>
            <td><span class="badge badge-success">${item.attribution}</span></td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                ${item.status === 'Conversion Opportunity' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrAssistedEnrolment('${item.id}')">Assist Order</button>` : ''}
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCsrLead('${item.leadId}')">View</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "payments") {
        return `
          <tr>
            <td><strong>${item.learner}</strong><span class="table-subline">${item.id} · ${item.age}</span></td>
            <td>${item.payer}<span class="table-subline">${item.course}</span></td>
            <td><strong>${item.submittedAmount}</strong><span class="table-subline">Exp: ${item.expectedAmount}</span></td>
            <td>${item.channel}<span class="table-subline">${item.reference}</span></td>
            <td><span class="om-checksum-tag">${item.receiptChecksum}</span><span class="table-subline">${item.receiptFile}</span></td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                ${item.status === 'Awaiting Review' || item.status === 'Under Review' ? `<button class="btn btn-primary btn-xs" onclick="Actions.openCsrPaymentReview('${item.id}')">Review Slip</button>` : ''}
                <button class="btn btn-secondary btn-xs" onclick="Actions.openOmRecord('${item.id}')">View</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "commissions") {
        return `
          <tr>
            <td><strong>${item.id}</strong><span class="table-subline">Enrolment: ${item.enrolmentId}</span></td>
            <td>${item.learner}<span class="table-subline">${item.product}</span></td>
            <td><strong>${item.salesValue}</strong><span class="table-subline">${item.date}</span></td>
            <td>${item.plan}</td>
            <td><strong class="success-text">${item.commissionAmount}</strong></td>
            <td><span class="badge ${badgeClass}">${item.status}</span><span class="table-subline">${item.payrollPeriod}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-secondary btn-xs" onclick="Actions.openCsrCommission('${item.id}')">Inspect</button>
              </div>
            </td>
          </tr>
        `;
      }

      if (dataType === "cases") {
        return `
          <tr>
            <td><strong>${item.subject}</strong><span class="table-subline">${item.id}</span></td>
            <td>${item.category}</td>
            <td><span class="badge ${item.priority === 'High' ? 'badge-error' : 'badge-secondary'}">${item.priority}</span></td>
            <td><strong>${item.sla}</strong></td>
            <td>${item.prospect}<span class="table-subline">Owner: ${item.owner}</span></td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
              <div class="button-row">
                <button class="btn btn-primary btn-xs" onclick="Actions.openCsrCase('${item.id}')">Reply</button>
              </div>
            </td>
          </tr>
        `;
      }

      return `
        <tr>
          <td><strong>${item.id}</strong></td>
          <td>${item.name || item.title || 'Record'}</td>
          <td>${item.csr || item.owner || '-'}</td>
          <td>${item.status || 'Active'}</td>
          <td><button class="btn btn-secondary btn-xs">View</button></td>
        </tr>
      `;
    }).join("");
  },

    cooWorkspace(route) {
    const config = cooRouteDefinitions[route];
    const container = document.getElementById("coo-workspace-content");
    if (!config || !container) return;

    const liveMetrics = getCooRouteMetrics(config);
    const metricMarkup = liveMetrics.map(([label, value, note]) => `
      <article class="coo-workspace-metric">
        <span>${label}</span>
        <strong>${value}</strong>
        <small>${note}</small>
      </article>
    `).join("");

    const liveContext = route === "coo-approvals" ? `${db.cooApprovals.filter(item => item.status === "Pending").length} pending decisions` : config.context;
    const headingMarkup = `
      <div class="module-heading coo-module-heading">
        <div class="module-heading-copy">
          <span class="module-path">${config.group}</span>
          <h2>${config.title}</h2>
          <p>${config.description}</p>
        </div>
        <div class="module-heading-context"><span>Operating principle</span><strong>${liveContext}</strong></div>
      </div>
      <div class="coo-authority-note"><i data-lucide="shield-check"></i><span>Scope and current state are checked server-side. Decisions remain separate from settlement, access activation, and downstream completion.</span></div>
      <section class="coo-workspace-metrics">${metricMarkup}</section>
    `;

    if (config.family === "approvals") {
      const approvals = getCooApprovalsForConfig(config);

      container.innerHTML = `${headingMarkup}
        <div class="view-header-bar module-toolbar coo-record-toolbar">
          <div class="search-filter-row">
            <input type="search" id="coo-workspace-search" class="form-control inline" placeholder="Search source, requester, or risk">
            <select id="coo-workspace-status" class="form-control inline"><option value="">All pending states</option><option value="High">High risk</option><option value="Aging">Outside target</option></select>
          </div>
          <span class="coo-toolbar-count">${approvals.length} source-linked decisions</span>
        </div>
        <div class="table-container coo-decision-table">
          <table>
            <thead><tr><th>Decision / Source</th><th>Requester</th><th>Value</th><th>Age</th><th>Risk / Evidence</th><th>State</th><th>Action</th></tr></thead>
            <tbody id="coo-workspace-table-body">${this.cooApprovalRows(approvals)}</tbody>
          </table>
        </div>`;
      const applyDecisionFilters = () => {
        const query = document.getElementById("coo-workspace-search")?.value.toLowerCase() || "";
        const state = document.getElementById("coo-workspace-status")?.value || "";
        const filtered = approvals.filter(item => {
          const matchesQuery = [item.id, item.source, item.requester, item.risk, item.type].some(value => value.toLowerCase().includes(query));
          const matchesState = !state
            || (state === "High" && /mismatch|exception|duplicate|threshold|expires|unresolved|no-show/i.test(item.risk))
            || (state === "Aging" && /(^|\s)(\d+d|1[89]h|2\dh)/i.test(item.age));
          return matchesQuery && matchesState;
        });
        document.getElementById("coo-workspace-table-body").innerHTML = this.cooApprovalRows(filtered);
      };
      document.getElementById("coo-workspace-search")?.addEventListener("input", applyDecisionFilters);
      document.getElementById("coo-workspace-status")?.addEventListener("change", applyDecisionFilters);
    } else {
      const records = getCooRecordsForConfig(config);

      container.innerHTML = `${headingMarkup}
        <div class="view-header-bar module-toolbar coo-record-toolbar">
          <div class="search-filter-row"><input type="search" id="coo-workspace-search" class="form-control inline" placeholder="Search records, owners, or signals"></div>
          <div class="button-row"><button class="btn btn-secondary" onclick="Notifications.push('View Saved', 'Your permission-scoped operating view was saved.', 'success')"><i data-lucide="bookmark"></i> Save view</button>${route === 'coo-reports' ? '<button class="btn btn-primary" onclick="Actions.requestCooReportExport()"><i data-lucide="download"></i> Request export</button>' : ''}</div>
        </div>
        <div class="coo-record-board" id="coo-workspace-table-body">${this.cooRecordCards(records)}</div>`;
      document.getElementById("coo-workspace-search")?.addEventListener("input", event => {
        const query = event.target.value.toLowerCase();
        const filtered = records.filter(item => [item.ref, item.title, item.detail, item.owner, item.status, item.signal].some(value => value.toLowerCase().includes(query)));
        document.getElementById("coo-workspace-table-body").innerHTML = this.cooRecordCards(filtered);
      });
    }

    window.lucide?.createIcons();
  },

  cooApprovalRows(items) {
    if (!items.length) return `<tr class="table-empty-row"><td colspan="7"><div class="table-empty-state"><strong>No pending decisions</strong><span>This queue is clear for the current scope.</span></div></td></tr>`;
    return items.map(item => {
      const flow = cooDecisionFlows[item.type];
      return `
      <tr>
        <td><strong>${item.type}</strong><br><span class="table-subline">${item.id} / ${item.source}</span></td>
        <td>${item.requester}<br><span class="table-subline">Created ${item.created}</span></td>
        <td><strong>${item.value}</strong></td>
        <td>${item.age}</td>
        <td><strong class="${item.risk.includes('mismatch') || item.risk.includes('exception') ? 'error-text' : ''}">${item.risk}</strong><br><span class="table-subline">${item.evidence}</span></td>
        <td><span class="badge badge-warning">${item.status}</span></td>
        <td><button class="btn btn-primary btn-xs" onclick="Actions.openCooDecision('${item.id}')">${flow?.action || "Review"}</button></td>
      </tr>`;
    }).join("");
  },

  cooRecordCards(items) {
    if (!items.length) return `<div class="table-empty-state"><strong>No source records found</strong><span>Change the search or scope filters.</span></div>`;
    return items.map(item => `
      <button class="coo-record-card" onclick="Actions.openCooRecord('${item.ref}')">
        <div class="coo-record-main"><span>${item.ref}</span><h3>${item.title}</h3><p>${item.detail}</p></div>
        <div class="coo-record-meta"><span>Owner<strong>${item.owner}</strong></span><span>State<strong>${item.status}</strong></span><span>Age / timing<strong>${item.age}</strong></span><span>Attention<strong>${item.signal}</strong></span></div>
        <i data-lucide="arrow-up-right"></i>
      </button>`).join("");
  },

  // USERS GRID
  users() {
    const tableBody = document.getElementById("users-table-body");
    tableBody.innerHTML = "";
    
    const searchVal = document.getElementById("users-search").value.toLowerCase();
    const roleVal = document.getElementById("users-role-filter").value;
    const statusVal = document.getElementById("users-status-filter").value;

    const filtered = db.users.filter(u => {
      const matchSearch = u.name.toLowerCase().includes(searchVal) || u.email.toLowerCase().includes(searchVal) || u.id.toLowerCase().includes(searchVal) || u.personId.toLowerCase().includes(searchVal);
      const matchRole = roleVal === "" || u.role === roleVal;
      const matchStatus = statusVal === "" || u.status === statusVal;
      return matchSearch && matchRole && matchStatus;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" class="text-muted text-center" style="text-align: center; padding: 24px;">No matching accounts.</td></tr>`;
      return;
    }

    filtered.forEach(u => {
      const tr = document.createElement("tr");
      
      let statusBadge = "badge-secondary";
      if (u.status === "Active") statusBadge = "badge-success";
      if (u.status === "Pending Verification") statusBadge = "badge-warning";
      if (["Suspended", "Locked", "Deactivated"].includes(u.status)) statusBadge = "badge-error";

      tr.innerHTML = `
        <td><strong>${u.name}</strong><br><span class="table-subline">${u.personId} / ${u.id}</span></td>
        <td>${u.email}</td>
        <td><strong>${u.role}</strong><br><span class="table-subline">${u.scope}</span></td>
        <td><span class="badge ${u.mfa === 'Enabled' ? 'badge-success' : u.mfa === 'Pending' ? 'badge-warning' : 'badge-secondary'}">${u.mfa}</span></td>
        <td><span class="badge ${statusBadge}">${u.status}</span></td>
        <td>${u.lastLogin}</td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-xs" onclick="Actions.viewUserAccount('${u.id}')">View</button>
            <button class="btn btn-secondary btn-xs" onclick="Actions.editUserRole('${u.id}')">Role</button>
            ${u.status === "Active" ? 
              `<button class="btn btn-error btn-xs" onclick="Actions.requestUserStatusChange('${u.id}', 'Suspended')">Suspend</button>` :
              `<button class="btn btn-primary btn-xs" onclick="Actions.requestUserStatusChange('${u.id}', 'Active')">Reactivate</button>`
            }
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // INVITATIONS
  invitations() {
    const tableBody = document.getElementById("invitations-table-body");
    tableBody.innerHTML = "";
    
    const searchVal = document.getElementById("invitations-search").value.toLowerCase();
    const filtered = db.invitations.filter(i => i.email.toLowerCase().includes(searchVal) || i.role.toLowerCase().includes(searchVal));

    filtered.forEach(i => {
      let badgeClass = "badge-secondary";
      if (i.status === "Accepted") badgeClass = "badge-success";
      if (i.status === "Sent" || i.status === "Draft") badgeClass = "badge-warning";
      if (i.status === "Expired" || i.status === "Revoked") badgeClass = "badge-error";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${i.email}</strong></td>
        <td><strong>${i.role}</strong><br><span class="table-subline">${i.scope}; MFA ${i.mfa.toLowerCase()}</span></td>
        <td>${i.createdBy}</td>
        <td>${i.sentDate}</td>
        <td><span class="badge ${badgeClass}">${i.status}</span><br><span class="table-subline">${i.onboarding}</span></td>
        <td>
          <div style="display:flex; gap:8px;">
            ${i.status !== "Accepted" ? `<button class="btn btn-secondary btn-xs" onclick="Actions.resendInvite('${i.id}')">Resend</button>` : ""}
            ${i.status === "Sent" ? `<button class="btn btn-error btn-xs" onclick="Actions.revokeInvite('${i.id}')">Revoke</button>` : ""}
            ${i.status === "Accepted" ? `<span class="text-muted">Complete</span>` : ""}
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // SECURITY SESSIONS
  sessions() {
    const tableBody = document.getElementById("security-sessions-table-body");
    tableBody.innerHTML = "";

    db.sessions.forEach(s => {
      const tr = document.createElement("tr");
      const badge = s.status === "Active" ? "badge-success" : "badge-secondary";
      
      tr.innerHTML = `
        <td>
          <strong>${s.userName}</strong><br>
          <span style="font-size: 11px; color: var(--slate);">${s.userEmail}</span>
        </td>
        <td><span style="font-family: monospace;">${s.ipAddress}</span></td>
        <td>${s.location}</td>
        <td><span style="font-size: 12px; color: var(--on-surface-variant);">${s.device}</span></td>
        <td>${s.loginTime}</td>
        <td><span class="badge ${badge}">${s.status}</span></td>
        <td>
          ${s.status === "Active" ? `<button class="btn btn-error btn-xs" onclick="Actions.terminateSession('${s.id}')">Terminate Session</button>` : `<span class="text-muted">Revoked</span>`}
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // ROLES & PERMISSIONS MATRIX
  activeRoleMatrix: "Platform Admin",
  rolesMatrix() {
    // Sidebar list
    const matrixList = document.getElementById("role-matrix-list");
    matrixList.innerHTML = "";
    Object.keys(db.rolesPermissions).forEach(role => {
      const activeClass = role === this.activeRoleMatrix ? "active" : "";
      const div = document.createElement("div");
      div.className = `role-item ${activeClass}`;
      const meta = db.roleMetadata[role] || { status: "Active", scope: "Organization" };
      div.innerHTML = `<span>${role}</span><small>${meta.status} / ${meta.scope}</small>`;
      div.addEventListener("click", () => {
        this.activeRoleMatrix = role;
        this.rolesMatrix();
      });
      matrixList.appendChild(div);
    });

    // Detail Panel Permissions Grid
    document.getElementById("role-panel-title").textContent = `Permissions mapped to: ${this.activeRoleMatrix}`;
    
    // Core capabilities to display in grid
    const allScopes = [
      { key: "view_dashboard", label: "Access Dashboard Screen" },
      { key: "manage_users", label: "Administer User Profiles" },
      { key: "manage_invites", label: "Send & Revoke Platform Invites" },
      { key: "manage_security", label: "Revoke User Security Sessions" },
      { key: "configure_settings", label: "Modify ADM System Settings" },
      { key: "manage_integrations", label: "Edit Providers & Webhook APIs" },
      { key: "manage_jobs", label: "Retry Failed Jobs & Flush Dead-Letters" },
      { key: "data_operations", label: "Approve Sensitive Exports & Imports" },
      { key: "toggle_flags", label: "Modify Global Feature Release Flags" },
      { key: "view_audit", label: "Access Complete Governance Audit Logs" },
      { key: "system_status", label: "Monitor CPU Infrastructure Status" },
      { key: "data_lifecycle", label: "Manage Retention & Legal Holds" },
      { key: "impersonate_support", label: "Launch Support View/Impersonation" }
    ];

    const currentMapping = db.rolesPermissions[this.activeRoleMatrix] || [];
    const grid = document.getElementById("role-panel-permissions-grid");
    grid.innerHTML = "";

    allScopes.forEach(scope => {
      const isChecked = currentMapping.includes(scope.key) ? "checked" : "";
      const isRestricted = this.activeRoleMatrix === "Platform Admin" ? "disabled" : ""; // Platform Admin can't be downgraded
      
      const div = document.createElement("div");
      div.className = "permission-check-item";
      div.innerHTML = `
        <label>
          <input type="checkbox" data-scope="${scope.key}" ${isChecked} ${isRestricted}>
          <span>${scope.label}</span>
        </label>
      `;
      grid.appendChild(div);
    });

    // Show actions panel
    const actionsPanel = document.getElementById("role-panel-actions");
    if (this.activeRoleMatrix !== "Platform Admin") {
      actionsPanel.classList.remove("hidden");
    } else {
      actionsPanel.classList.add("hidden");
    }
  },

  // REFERENCE DATA
  referenceData() {
    const tableBody = document.getElementById("ref-data-table-body");
    tableBody.innerHTML = "";
    
    const category = document.getElementById("ref-data-category-select").value;
    const entries = db.referenceData[category] || [];

    entries.forEach(e => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-family: monospace; font-weight:600;">${e.code}</span></td>
        <td><strong>${e.value}</strong></td>
        <td>${e.description}</td>
        <td>
          <span class="badge ${e.active === false ? 'badge-secondary' : 'badge-success'}">${e.active === false ? 'Inactive' : 'Active'}</span><br>
          <span class="table-subline">${e.restricted ? 'Protected value' : 'Controlled value'}</span>
        </td>
        <td>
          <button class="btn btn-secondary btn-xs" ${e.restricted ? 'disabled' : ''} onclick="Actions.deleteReferenceEntry('${category}', '${e.code}')">${e.active === false ? 'Activate' : 'Deactivate'}</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // SYSTEM CONFIGURATION SETTINGS
  systemSettings() {
    const form = document.getElementById("system-settings-form");
    form.innerHTML = "";

    // Group settings by category
    const categories = {};
    db.systemSettings.forEach(s => {
      if (!categories[s.category]) {
        categories[s.category] = [];
      }
      categories[s.category].push(s);
    });

    Object.keys(categories).forEach(cat => {
      const section = document.createElement("div");
      section.className = "settings-category-group";
      section.innerHTML = `<h3 class="settings-section-title">${cat}</h3>`;
      
      categories[cat].forEach(s => {
        const group = document.createElement("div");
        group.className = "form-group";
        group.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label for="settings-${s.key}">${s.key} - <span style="font-weight:normal; color:var(--slate);">${s.description}</span></label>
            <span class="table-subline">v${s.version} · ${s.lifecycle} · ${s.owner} · ${s.scope}</span>
          </div>
          <div style="display:flex; gap:12px; align-items:center;">
            <input type="text" id="settings-${s.key}" class="form-control" value="${s.value}">
            <button class="btn btn-secondary btn-sm" onclick="Actions.saveSetting('${s.key}')">Propose</button>
          </div>
        `;
        section.appendChild(group);
      });
      form.appendChild(section);
    });
  },

  // BUSINESS RULES
  businessRules() {
    const grid = document.getElementById("business-rules-grid");
    grid.innerHTML = "";

    db.businessRules.forEach(r => {
      const card = document.createElement("div");
      card.className = "rule-card";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <h4>${r.name}</h4>
          <span class="badge badge-secondary">${r.module}</span>
        </div>
        <p>${r.rule}</p>
        <div style="margin-top:12px; text-align:right;">
          <button class="btn btn-secondary btn-xs" onclick="Actions.editBusinessRule('${r.id}')">Modify Threshold</button>
        </div>
      `;
      grid.appendChild(card);
    });
  },

  // PROVIDERS
  providers() {
    const container = document.getElementById("providers-container");
    container.innerHTML = "";

    db.providers.forEach(p => {
      let icon = "database";
      if (p.key === "dailyco") icon = "video";
      if (p.key === "resend") icon = "mail";

      const card = document.createElement("div");
      card.className = "provider-card";
      card.innerHTML = `
        <div class="provider-brand">
          <i data-lucide="${icon}" class="provider-brand-logo"></i>
          <strong>${p.name}</strong>
        </div>
        <div class="provider-info">
          <div class="provider-info-header">
            <span class="status-indicator ${p.status === 'Connected' ? 'success' : 'warning'}">
              <span class="dot"></span> ${p.status}
            </span>
            <span style="font-size:11px; color:var(--slate);">Last Check: ${p.lastChecked}</span>
          </div>
          <div class="provider-fields">
            <div class="form-group">
              <label>API Endpoint Host</label>
              <input type="text" class="form-control" value="${p.url}" readonly>
            </div>
            <div class="form-group">
              <label>Credential reference (masked)</label>
              <input type="text" class="form-control" value="${p.keySnippet}" readonly>
            </div>
          </div>
          <div style="text-align:right; display:flex; justify-content:flex-end; gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="Actions.pingProvider('${p.key}')">Test API Connection</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
    window.lucide?.createIcons();
  },

  // WEBHOOKS
  webhooks() {
    const tableBody = document.getElementById("webhooks-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("webhook-logs-search").value.toLowerCase();
    const statusVal = Router.filters.status || document.getElementById("webhook-logs-status").value;

    // Update filter dropdown state in UI
    if (Router.filters.status) {
      document.getElementById("webhook-logs-status").value = Router.filters.status;
    }

    const filtered = db.webhooks.filter(w => {
      const matchSearch = w.event.toLowerCase().includes(searchVal) || w.target.toLowerCase().includes(searchVal);
      const matchStatus = statusVal === "" || w.status === statusVal;
      return matchSearch && matchStatus;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" class="text-muted" style="text-align:center; padding:24px;">No matching webhook deliveries found.</td></tr>`;
      return;
    }

    filtered.forEach(w => {
      const tr = document.createElement("tr");
      const badgeClass = w.status === "SUCCESS" ? "badge-success" : "badge-error";
      
      tr.innerHTML = `
        <td><strong>${w.event}</strong></td>
        <td><span style="font-size: 12px; font-family:monospace; color:var(--slate);">${w.target}</span></td>
        <td><strong class="audit-origin">Signature ${w.status === 'SUCCESS' ? 'verified' : 'check failed'}</strong><br><span class="table-subline">Idempotency: ${w.id}; schema ${w.status === 'SUCCESS' ? 'valid' : 'rejected'}</span></td>
        <td>${w.timestamp}</td>
        <td>Attempt #${w.attempts}</td>
        <td><span class="badge ${badgeClass}">${w.httpCode} ${w.status}</span></td>
        <td>
          <button class="btn btn-secondary btn-xs" onclick="Actions.retryWebhook('${w.id}')">Retry Delivery</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // INTEGRATION HEALTH Snapshot
  integrationHealth() {
    const tableBody = document.getElementById("integration-health-table-body");
    tableBody.innerHTML = "";

    db.integrationExceptions.forEach(e => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${e.provider}</strong></td>
        <td><span style="font-family: monospace; font-size:12px;">${e.action}</span></td>
        <td><span style="font-family: monospace; font-size:11px;">req_id_${Math.floor(Math.random() * 9000 + 1000)}</span></td>
        <td><span class="badge badge-secondary">POST</span></td>
        <td>890ms</td>
        <td><code style="font-family:'Fira Code',monospace; font-size:12px; color:var(--error);">${e.snippet}</code></td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // QUEUE JOBS
  queueJobs() {
    const tableBody = document.getElementById("queue-jobs-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("queue-jobs-search").value.toLowerCase();
    const statusVal = document.getElementById("queue-jobs-status").value;

    const filtered = db.jobs.filter(j => {
      const matchSearch = j.taskName.toLowerCase().includes(searchVal) || j.targetEntity.toLowerCase().includes(searchVal);
      const matchStatus = statusVal === "" || j.status === statusVal;
      return matchSearch && matchStatus;
    });

    filtered.forEach(j => {
      const tr = document.createElement("tr");
      
      let badge = "badge-secondary";
      if (j.status === "Succeeded") badge = "badge-success";
      if (j.status === "Running" || j.status === "Retrying") badge = "badge-warning";
      if (j.status === "Queued") badge = "badge-primary";
      if (j.status === "Failed") badge = "badge-error";
      if (j.status === "Dead-letter") badge = "badge-danger-soft";

      tr.innerHTML = `
        <td><strong style="font-family:monospace; font-size:12px;">${j.id}</strong><br><span class="table-subline">${j.queue}</span></td>
        <td><strong>${j.taskName}</strong></td>
        <td><span class="badge badge-secondary">${j.domain}</span><br><span class="table-subline">${j.targetEntity}</span></td>
        <td>${j.queuedAt}<br><span class="table-subline">Next: ${j.nextRun}</span></td>
        <td><span class="badge ${badge}">${j.status}</span></td>
        <td>${j.attempts} / 5<br><span class="table-subline">${j.errorMsg || "No error"}</span></td>
        <td><strong>${j.provider}</strong><br><span class="table-subline">${j.correlationId}</span></td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // FAILED JOBS
  failedJobs() {
    const tableBody = document.getElementById("failed-jobs-table-body");
    tableBody.innerHTML = "";

    const failed = db.jobs.filter(j => j.status === "Failed");

    if (failed.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" class="text-muted" style="text-align:center; padding:24px;">All background jobs operational. No failed runs logged.</td></tr>`;
      return;
    }

    failed.forEach(j => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px;">${j.id}</span></td>
        <td><strong>${j.taskName}</strong></td>
        <td>${j.queuedAt}</td>
        <td>${j.attempts} / 5</td>
        <td><code style="color:var(--error); font-size:12px; font-family:'Fira Code';">${j.errorMsg}</code></td>
        <td>
          <button class="btn btn-secondary btn-xs" onclick="Actions.retryJob('${j.id}')">Retry Now</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // DEAD LETTERS
  deadLetters() {
    const tableBody = document.getElementById("dead-letters-table-body");
    tableBody.innerHTML = "";

    const dead = db.jobs.filter(j => j.status === "Dead-letter");

    if (dead.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" class="text-muted" style="text-align:center; padding:24px;">Queue clean. Zero dead-letter records found.</td></tr>`;
      return;
    }

    dead.forEach(j => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px;">${j.id}</span></td>
        <td><strong>${j.taskName}</strong></td>
        <td>${j.queuedAt}</td>
        <td>Queue: background-high-priority</td>
        <td><code style="color:var(--error); font-size:11px; font-family:'Fira Code';">${j.errorMsg}</code></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-primary btn-xs" onclick="Actions.retryJob('${j.id}')">Retry/Re-queue</button>
            <button class="btn btn-error btn-xs" onclick="Actions.discardJob('${j.id}')">Discard</button>
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // INTEGRATION EXCEPTIONS VIEW
  integrationExceptions() {
    const tableBody = document.getElementById("integration-exceptions-table-body");
    tableBody.innerHTML = "";

    db.integrationExceptions.forEach(e => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px;">${e.id}</span></td>
        <td><strong>${e.provider}</strong></td>
        <td>${e.action}</td>
        <td>${e.date}</td>
        <td><code style="color:var(--error); font-size:12px; font-family:'Fira Code';">${e.snippet}</code></td>
        <td>
          <button class="btn btn-secondary btn-xs" onclick="Actions.dismissException('${e.id}')">Clear Log</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // IMPORTS
  imports() {
    const tableBody = document.getElementById("imports-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("imports-search").value.toLowerCase();
    const statusVal = Router.filters.status || "";

    const filtered = db.imports.filter(i => {
      const matchSearch = i.importType.toLowerCase().includes(searchVal) || i.batchId.toLowerCase().includes(searchVal);
      const matchStatus = statusVal === "" || i.status === statusVal;
      return matchSearch && matchStatus;
    });

    filtered.forEach(i => {
      const tr = document.createElement("tr");
      const badge = i.status === "Completed" ? "badge-success" : i.status === "Dry-run Passed" ? "badge-warning" : "badge-error";
      
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-weight:600;">${i.batchId}</span><br><span class="table-subline">${i.checksum}</span></td>
        <td><strong>${i.importType}</strong></td>
        <td>${i.rowsCount} rows<br><span class="table-subline">${i.mode}</span></td>
        <td><span class="badge ${badge}">${i.status}</span></td>
        <td><span class="${i.errors !== 'None' ? 'text-muted' : 'text-success'}">${i.errors}</span></td>
        <td>${i.uploadedAt}</td>
        <td>
          ${i.status === "Dry-run Failed" ? 
            `<div style="display:flex; gap:8px;">
              <button class="btn btn-primary btn-xs" onclick="Actions.correctImportData('${i.batchId}')">Review Mapping</button>
              <button class="btn btn-secondary btn-xs" onclick="Actions.retryImport('${i.batchId}')">Re-run Dry-run</button>
             </div>` : 
            i.status === "Dry-run Passed" ? `<button class="btn btn-primary btn-xs" onclick="Actions.approveImport('${i.batchId}')">Approve & Run</button>` : `<span class="text-muted">-</span>`
          }
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // EXPORTS
  exports() {
    const tableBody = document.getElementById("exports-table-body");
    tableBody.innerHTML = "";

    const statusVal = Router.filters.status || "";

    const filtered = db.exports.filter(e => {
      return statusVal === "" || e.status === statusVal;
    });

    filtered.forEach(e => {
      const tr = document.createElement("tr");
      
      let badge = "badge-secondary";
      if (e.status === "Ready") badge = "badge-success";
      if (e.status === "Pending Approval") badge = "badge-warning";
      if (e.status === "Revoked") badge = "badge-error";

      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px;">${e.requestId}</span></td>
        <td><strong>${e.scope}</strong></td>
        <td>${e.requestedBy}</td>
        <td><span class="badge badge-secondary">${e.format}</span></td>
        <td><span class="badge ${badge}">${e.status}</span></td>
        <td>${e.dateRequested}</td>
        <td>
          <div style="display:flex; gap:8px;">
            ${e.status === "Pending Approval" ? `
              <button class="btn btn-primary btn-xs" onclick="Actions.approveExport('${e.requestId}')">Approve</button>
              <button class="btn btn-error btn-xs" onclick="Actions.rejectExport('${e.requestId}')">Reject</button>
            ` : ""}
            ${e.status === "Ready" ? `
              <button class="btn btn-secondary btn-xs" onclick="Actions.downloadExportFile('${e.requestId}')"><i data-lucide="download" style="width:12px;height:12px;"></i> Download</button>
            ` : ""}
            ${e.status !== "Pending Approval" && e.status !== "Ready" ? `<span class="text-muted">-</span>` : ""}
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
    window.lucide?.createIcons();
  },

  // FEATURE FLAGS
  featureFlags() {
    const tableBody = document.getElementById("flags-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("flags-search").value.toLowerCase();
    const filtered = db.featureFlags.filter(f => f.key.toLowerCase().includes(searchVal) || f.description.toLowerCase().includes(searchVal));

    filtered.forEach(f => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-weight:600;">${f.key}</span></td>
        <td>${f.description}</td>
        <td><span class="badge badge-secondary">${f.module}</span></td>
        <td><span class="badge ${f.lifecycle === 'Enabled' ? 'badge-success' : f.lifecycle === 'Retired' ? 'badge-secondary' : 'badge-warning'}">${f.lifecycle || (f.globalStatus ? 'Enabled' : 'Disabled')}</span></td>
        <td>
          <label class="switch">
            <input type="checkbox" ${f.globalStatus ? 'checked' : ''} ${f.lifecycle === 'Retired' ? 'disabled' : ''} onchange="Actions.toggleFeatureFlag('${f.key}', this.checked)">
            <span class="slider"></span>
          </label>
        </td>
        <td><span style="font-size: 12px; color:var(--slate);">${f.targetAudiences}</span></td>
        <td>
          <button class="btn btn-secondary btn-xs" ${f.lifecycle === 'Retired' ? 'disabled' : ''} onclick="Actions.deleteFeatureFlag('${f.key}')">${f.lifecycle === 'Retired' ? 'Retired' : 'Retire'}</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // SEARCHABLE AUDIT LOGS
  auditLogs() {
    const tableBody = document.getElementById("audit-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("audit-logs-search").value.toLowerCase();
    const moduleVal = document.getElementById("audit-logs-module").value;

    const filtered = db.auditLogs.filter(a => {
      const matchSearch = a.actor.toLowerCase().includes(searchVal) || 
                          a.details.toLowerCase().includes(searchVal) || 
                          a.actionCode.toLowerCase().includes(searchVal) ||
                          (a.correlationId || "").toLowerCase().includes(searchVal);
      const matchModule = moduleVal === "" || a.module === moduleVal;
      return matchSearch && matchModule;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="8" class="text-muted" style="text-align:center; padding:24px;">No governance audit events found matching filters.</td></tr>`;
      return;
    }

    filtered.forEach(a => {
      const tr = document.createElement("tr");
      
      let levelBadge = "badge-secondary";
      if (a.level === "High") levelBadge = "badge-error";
      if (a.level === "Medium") levelBadge = "badge-warning";
      
      tr.innerHTML = `
        <td><span style="font-size:12px; color:var(--slate);">${a.timestamp}</span></td>
        <td><strong>${a.actor}</strong></td>
        <td><span class="badge badge-secondary">${a.module}</span></td>
        <td><span style="font-family:monospace; font-weight:600;">${a.actionCode}</span></td>
        <td>${a.details}</td>
        <td><span class="badge ${levelBadge}">${a.level}</span></td>
        <td><code style="font-size:11px; font-family:'Fira Code';">${a.changes}</code></td>
        <td><strong class="audit-origin">${a.origin || "Admin console"}</strong><br><span class="table-subline">${a.correlationId || "Not supplied"}</span></td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // SYSTEM Freshness & Status stream
  systemStatus() {
    // Generate some mock console log text
    const term = document.getElementById("system-terminal-logs");
    const actions = [
      "DB Connection Pool validated (14 clients active).",
      "Gateway health check completed: 200 OK.",
      "Cron Engine heartbeat: scanned 5 active intervals.",
      "Redis memory footprint optimized (2.1 MB in use).",
      "RLS policies evaluated in 4ms for domain scope.",
      "Resend Mailer API timeout retry logged."
    ];
    
    let html = "";
    for (let i = 0; i < 15; i++) {
      const offsetMinutes = i * 4;
      const timestamp = new Date(Date.now() - offsetMinutes * 60 * 1000).toISOString().replace("T", " ").slice(0, 19);
      const action = actions[i % actions.length];
      html += `[${timestamp}] [INFO] [SYS-DAEMON] ${action}\n`;
    }
    term.textContent = html;
  },

  // DATA RETENTION POLICIES
  retentionPolicies() {
    const tableBody = document.getElementById("retention-table-body");
    tableBody.innerHTML = "";

    db.retentionPolicies.forEach(p => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${p.module}</strong></td>
        <td>${p.period}</td>
        <td><span class="badge badge-secondary">${p.action}</span></td>
        <td><span style="color:var(--error); font-weight:500;">${p.legalHolds}</span></td>
        <td>
          <label class="switch">
            <input type="checkbox" ${p.enabled ? 'checked' : ''} onchange="Actions.toggleRetentionPolicy('${p.module}', this.checked)">
            <span class="slider"></span>
          </label>
        </td>
        <td>
          <button class="btn btn-secondary btn-xs" onclick="Actions.editRetention('${p.module}')">Edit Period</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // ARCHIVED PARTITIONS
  archive() {
    const tableBody = document.getElementById("archive-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("archive-search").value.toLowerCase();
    const filtered = db.archive.filter(a => a.sourceTable.toLowerCase().includes(searchVal));

    filtered.forEach(a => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px;">${a.id}</span></td>
        <td><strong>${a.sourceTable}</strong></td>
        <td>${a.rows.toLocaleString()} rows</td>
        <td>${a.size}</td>
        <td>${a.archivedDate}</td>
        <td><span class="text-muted">${a.purgeDate}</span></td>
        <td>
          <button class="btn btn-secondary btn-xs" onclick="Actions.restoreArchive('${a.id}')">Restore Table</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // LEGAL HOLDS
  legalHolds() {
    const tableBody = document.getElementById("holds-table-body");
    tableBody.innerHTML = "";

    db.legalHolds.forEach(h => {
      const tr = document.createElement("tr");
      const badge = h.status === "Active" ? "badge-error" : "badge-secondary";
      
      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px; font-weight:600;">${h.holdCode}</span></td>
        <td><strong>${h.name}</strong></td>
        <td>${h.targets}</td>
        <td>${h.createdBy}</td>
        <td>${h.placedDate}</td>
        <td><span class="badge ${badge}">${h.status}</span></td>
        <td>
          ${h.status === "Active" ? 
            `<button class="btn btn-secondary btn-xs" onclick="Actions.releaseLegalHold('${h.holdCode}')">Release Hold</button>` : 
            `<span class="text-muted">-</span>`
          }
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // GDPR DATA PRIVACY REQUESTS
  privacyRequests() {
    const tableBody = document.getElementById("privacy-table-body");
    tableBody.innerHTML = "";

    db.privacyRequests.forEach(p => {
      const tr = document.createElement("tr");
      
      let badge = "badge-secondary";
      if (p.status === "Completed") badge = "badge-success";
      if (p.status === "Pending Verification") badge = "badge-warning";
      if (p.status === "Under Review") badge = "badge-primary";
      if (p.status === "Rejected") badge = "badge-error";

      tr.innerHTML = `
        <td><span style="font-family:monospace; font-size:12px;">${p.requestId}</span></td>
        <td><strong>${p.requester}</strong></td>
        <td>${p.requestType}</td>
        <td><span style="font-family:monospace;">${p.verificationCode}</span></td>
        <td>${p.dateInitiated}</td>
        <td><span class="badge ${badge}">${p.status}</span></td>
        <td>
          ${p.status === "Pending Verification" || p.status === "Under Review" ? `
            <div style="display:flex; gap:8px;">
              <button class="btn btn-primary btn-xs" onclick="Actions.approvePrivacyRequest('${p.requestId}')">Verify & Approve</button>
              <button class="btn btn-error btn-xs" onclick="Actions.rejectPrivacyRequest('${p.requestId}')">Reject</button>
            </div>
          ` : `<span class="text-muted">-</span>`}
        </td>
      `;
      tableBody.appendChild(tr);
    });
  },

  // IMPERSONATION SUPPORT VIEWS
  supportAccess() {
    // Dropdown options populator
    const select = document.getElementById("impersonate-user-select");
    select.innerHTML = "";
    
    db.users.filter(u => u.status === "Active" && u.role !== "Platform Admin").forEach(u => {
      const opt = document.createElement("option");
      opt.value = u.id;
      opt.textContent = `${u.name} (${u.role})`;
      select.appendChild(opt);
    });

    // Impersonation active banner checks
    const activePanel = document.getElementById("impersonation-active-panel");
    const launchPanel = document.getElementById("impersonation-launch-panel");

    if (db.impersonationSession.active) {
      activePanel.classList.remove("hidden");
      launchPanel.classList.add("hidden");
      
      document.getElementById("impersonated-user-fullname").textContent = db.impersonationSession.user.name;
      document.getElementById("impersonated-user-role").textContent = db.impersonationSession.user.role;
      document.getElementById("impersonation-expiry").textContent = `Expires ${db.impersonationSession.expiresAt}`;
    } else {
      activePanel.classList.add("hidden");
      launchPanel.classList.remove("hidden");
    }

    // Render support access audit log table
    const tableBody = document.getElementById("support-audit-table-body");
    tableBody.innerHTML = "";

    db.supportAuditLogs.forEach(log => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span style="font-size:12px; color:var(--slate);">${log.timestamp}</span></td>
        <td><strong>${log.operator}</strong></td>
        <td>${log.impersonatedUser}</td>
        <td><span style="font-family:monospace; font-size:12px;">${log.reason}</span></td>
        <td><span class="table-subline">${log.guardrails || "Read-only / approved"}</span></td>
        <td><span class="badge badge-success">${log.status}</span></td>
      `;
      tableBody.appendChild(tr);
    });
  }
};

// ============================================================================
// 4. ACTION CONTROLLERS & GOVERNANCE AUDITING
// ============================================================================

const Actions = {
  
  // Audits governance actions in real-time
  audit(actionCode, details, level = "Low", changes = "N/A") {
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
    const newLog = {
      timestamp,
      actor: db.currentUser.name,
      module: Simulator.activeRole === "coo" ? "COO" : "ADM",
      actionCode,
      details,
      level,
      changes,
      origin: "Admin console",
      correlationId: `corr_${Date.now().toString(36)}`
    };
    db.auditLogs.unshift(newLog); // prepend to logs
    
    // Auto-create notification for dashboard
    if (level === "High" || level === "Medium") {
      Notifications.push(`Action Audited: ${actionCode}`, `${details} by ${db.currentUser.name}`, "info");
    }
  },

  
  // ============================================================================
  // OPERATIONAL MANAGER (OM) - DOMAIN-SPECIFIC WORKFLOW MODALS & ACTIONS
  // ============================================================================

  // FLOW-007: Trial Scheduling
  openOmTrialSchedule(trialId) {
    const trial = db.omData.trials.find(t => t.id === trialId);
    if (!trial) return;

    const modal = document.getElementById("generic-modal");
    const dialog = modal.querySelector(".modal");
    dialog.className = "modal om-flow-dialog";
    document.getElementById("modal-title").textContent = `Schedule Trial Class: ${trial.learner}`;
    
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="calendar-plus"></i></span>
        <div><span>Trial Scheduling (FLOW-007)</span><strong>Assign verified trial prospect to trainer & provision Daily.co room</strong></div>
        <span class="badge badge-warning">${trial.status}</span>
      </div>
      <div class="account-summary-bar">
        <div><span>Prospect</span><strong>${trial.learner} (${trial.age})</strong></div>
        <div><span>Course</span><strong>${trial.course}</strong></div>
        <div><span>Placement Score</span><strong>${trial.placementScore}</strong></div>
        <div><span>Guardian Consent</span><strong>${trial.consent}</strong></div>
      </div>
      <div class="form-group">
        <label for="trial-trainer-select">Select Trainer</label>
        <select id="trial-trainer-select" class="form-control">
          ${db.omData.trainers.map(trn => `<option value="${trn.name}">${trn.name} (${trn.programmes}) - Load: ${trn.weeklyLoad}</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label for="trial-slot-select">Schedule Time Slot</label>
        <select id="trial-slot-select" class="form-control">
          <option value="Today 16:00 - 16:45 PKT">Today 16:00 - 16:45 PKT (Recommended)</option>
          <option value="Tomorrow 11:00 - 11:45 PKT">Tomorrow 11:00 - 11:45 PKT</option>
          <option value="Tomorrow 15:00 - 15:45 PKT">Tomorrow 15:00 - 15:45 PKT</option>
        </select>
      </div>
      <div class="form-group">
        <label for="trial-daily-room">Daily.co Video Room Endpoint</label>
        <input id="trial-daily-room" class="form-control" value="https://ihs.daily.co/trial-${trial.learner.toLowerCase().replace(/\s+/g, '-')}-${trial.id.toLowerCase()}" readonly>
      </div>
      <label class="confirmation-check">
        <input id="trial-conflict-check" type="checkbox" checked>
        <span>Validated trainer schedule conflict & learner availability.</span>
      </label>
      <div id="trial-schedule-error" class="form-error hidden">Trainer conflict validation is required.</div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmTrialSchedule('${trial.id}')">Confirm & Provision Room</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  },

  confirmOmTrialSchedule(trialId) {
    const trial = db.omData.trials.find(t => t.id === trialId);
    const trainer = document.getElementById("trial-trainer-select")?.value;
    const time = document.getElementById("trial-slot-select")?.value;
    const room = document.getElementById("trial-daily-room")?.value;
    const conflictChecked = document.getElementById("trial-conflict-check")?.checked;

    if (!trial || !trainer || !time || !conflictChecked) {
      document.getElementById("trial-schedule-error")?.classList.remove("hidden");
      return;
    }

    trial.status = "Scheduled";
    trial.trainer = trainer;
    trial.time = time;
    trial.room = room;
    trial.reminder = "Delivered";
    trial.signal = "Room provisioned; reminder sent";

    // Add to classes table
    const newClass = {
      id: "CLS-" + Math.floor(Math.random() * 900 + 9100),
      title: `${trial.course} Trial Consultation`,
      type: "Trial",
      trainer,
      learner: trial.learner,
      timing: time,
      participants: 1,
      roomState: "Provisioned",
      liveState: "Upcoming",
      attendanceStatus: "Pending Join",
      reportStatus: "Pending",
      technicalStatus: "Normal",
      roomUrl: room,
      owner: trainer,
      status: "Upcoming"
    };
    db.omData.classes.unshift(newClass);

    this.audit("OM_TRIAL_SCHEDULED", `Scheduled trial ${trial.id} for ${trial.learner} with trainer ${trainer} at ${time}`, "Medium", "Ready for Scheduling -> Scheduled");
    Notifications.push("Trial Scheduled", `Trial for ${trial.learner} scheduled. Daily.co room provisioned.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // FLOW-008: Trial Outcomes
  openOmTrialOutcome(trialId) {
    const trial = db.omData.trials.find(t => t.id === trialId);
    if (!trial) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Record Trial Outcome: ${trial.learner}`;
    
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="calendar-check-2"></i></span>
        <div><span>Trial Completion & Outcome (FLOW-008)</span><strong>Record attendance, trainer report notes, and CSR follow-up</strong></div>
      </div>
      <div class="form-group">
        <label for="trial-outcome-status">Trial Outcome</label>
        <select id="trial-outcome-status" class="form-control">
          <option value="Completed">Completed (Attended & Assessed)</option>
          <option value="No-Show">No-Show (Learner did not connect)</option>
          <option value="Technical Exception">Technical Exception (Room failure / Disconnect)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="trial-trainer-feedback">Trainer Assessment & Recommendations</label>
        <textarea id="trial-trainer-feedback" class="form-control" rows="3" placeholder="Enter syllabus covered, student engagement, and recommended enrolment tier..."></textarea>
      </div>
      <div class="form-group">
        <label for="trial-csr-action">CSR Follow-up Task</label>
        <select id="trial-csr-action" class="form-control">
          <option value="Offer Membership Purchase">Contact Payer: Offer Monthly/Quarterly Plan</option>
          <option value="Offer Reschedule">Offer Replacement Trial Slot</option>
          <option value="Close Lead">Close Lead (Not Interested)</option>
        </select>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmTrialOutcome('${trial.id}')">Save Outcome & Trigger CSR Task</button>
    `;

    modal.classList.remove("hidden");
  },

  confirmOmTrialOutcome(trialId) {
    const trial = db.omData.trials.find(t => t.id === trialId);
    const outcome = document.getElementById("trial-outcome-status")?.value;
    const feedback = document.getElementById("trial-trainer-feedback")?.value.trim() || "Completed satisfactorily";
    const csrAction = document.getElementById("trial-csr-action")?.value;

    if (!trial) return;

    trial.status = outcome;
    trial.outcome = feedback;
    trial.followUp = csrAction;
    trial.signal = `Outcome recorded: ${outcome}`;

    this.audit("OM_TRIAL_OUTCOME_RECORDED", `Recorded outcome ${outcome} for trial ${trial.id}. CSR task: ${csrAction}`, "Medium", `Scheduled -> ${outcome}`);
    Notifications.push("Trial Outcome Recorded", `Trial ${trial.id} updated to ${outcome}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // FLOW-013: Enrolment Activation & Setup
  openOmEnrolmentSetup(enrolmentId) {
    const enr = db.omData.enrolments.find(e => e.id === enrolmentId);
    if (!enr) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Configure Enrolment: ${enr.learner}`;
    
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="user-plus"></i></span>
        <div><span>Enrolment Setup (FLOW-013)</span><strong>Verified payment exists. Assign course version, trainer, cohort, & schedule.</strong></div>
      </div>
      <div class="account-summary-bar">
        <div><span>Learner</span><strong>${enr.learner}</strong></div>
        <div><span>Course Track</span><strong>${enr.course}</strong></div>
        <div><span>Payment Reference</span><strong>${enr.paymentRef}</strong></div>
        <div><span>Access Grant</span><strong>${enr.grantRef}</strong></div>
      </div>
      <div class="form-group">
        <label for="enr-version-select">Curriculum Version</label>
        <select id="enr-version-select" class="form-control">
          <option value="${enr.version}">${enr.version} (Active Production Standard)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="enr-trainer-select">Assign Trainer</label>
        <select id="enr-trainer-select" class="form-control">
          ${db.omData.trainers.map(trn => `<option value="${trn.name}">${trn.name} (${trn.programmes})</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label for="enr-cohort-select">Assign Course Run / Cohort</label>
        <select id="enr-cohort-select" class="form-control">
          ${db.omData.cohorts.map(coh => `<option value="${coh.name}">${coh.name} (${coh.enrolled}/${coh.capacity} seats)</option>`).join("")}
          <option value="N/A (1:1 Delivery)">N/A (Dedicated 1:1 Delivery)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="enr-schedule-input">Schedule Plan Cadence</label>
        <input id="enr-schedule-input" class="form-control" value="Mon / Wed 13:30 PKT">
      </div>
      <label class="confirmation-check">
        <input id="enr-entitlement-check" type="checkbox" checked>
        <span>Initialize entitlement ledger (16 lesson credits) & allocate membership.</span>
      </label>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmEnrolmentSetup('${enr.id}')">Activate Enrolment & Grant Access</button>
    `;

    modal.classList.remove("hidden");
  },

  confirmOmEnrolmentSetup(enrolmentId) {
    const enr = db.omData.enrolments.find(e => e.id === enrolmentId);
    const trainer = document.getElementById("enr-trainer-select")?.value;
    const cohort = document.getElementById("enr-cohort-select")?.value;
    const schedule = document.getElementById("enr-schedule-input")?.value;

    if (!enr) return;

    enr.status = "Active";
    enr.trainer = trainer;
    enr.cohort = cohort;
    enr.schedule = schedule;
    enr.credits = "16 / 16";
    enr.signal = "Active learning access";

    // Add to entitlements
    db.omData.entitlements.push({
      id: "ENT-" + Math.floor(Math.random() * 900 + 100),
      learner: enr.learner,
      course: `${enr.course} ${enr.version}`,
      totalGranted: 16,
      debited: 0,
      reserved: 0,
      balance: 16,
      status: "Active",
      expiry: "2026-11-30",
      riskLevel: "Normal",
      lastDebit: "None",
      renewalNotice: "Not Due",
      owner: "Sarah Connor",
      signal: "16 credits active"
    });

    this.audit("OM_ENROLMENT_ACTIVATED", `Activated enrolment ${enr.id} for ${enr.learner}. Trainer: ${trainer}, Cohort: ${cohort}`, "High", "Pending Setup -> Active");
    Notifications.push("Enrolment Activated", `${enr.learner} is now active in ${enr.course}. Access grant allocated.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // FLOW-016: Class Delivery Review & Approval
  openOmClassReview(reviewId) {
    const rev = db.omData.classReviews.find(r => r.id === reviewId);
    if (!rev) return;

    const modal = document.getElementById("generic-modal");
    const dialog = modal.querySelector(".modal");
    dialog.className = "modal om-flow-dialog";
    document.getElementById("modal-title").textContent = `Class Delivery Approval: ${rev.id}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="check-circle-2"></i></span>
        <div><span>Class Delivery Review (FLOW-016)</span><strong>Review attendance evidence, duration, and trainer report before delivery sign-off</strong></div>
        <span class="badge badge-warning">${rev.status}</span>
      </div>
      <div class="account-summary-bar">
        <div><span>Class Occurrence</span><strong>${rev.classId}</strong></div>
        <div><span>Trainer</span><strong>${rev.trainer}</strong></div>
        <div><span>Learner / Cohort</span><strong>${rev.learner}</strong></div>
        <div><span>Delivered Duration</span><strong>${rev.duration}</strong></div>
      </div>
      <div class="om-flow-evidence-box">
        <h4>1. Syllabus & Progress Evidence</h4>
        <p><strong>Covered Syllabus:</strong> ${rev.syllabus}</p>
        <p><strong>Learning Progress:</strong> ${rev.progress}</p>
        <p><strong>Assigned Homework:</strong> ${rev.homework}</p>
        <p><strong>Trainer Notes:</strong> ${rev.notes}</p>
      </div>
      <div class="om-flow-evidence-box">
        <h4>2. Daily.co Reconciled Attendance Evidence</h4>
        <p>${rev.reconciledAttendance}</p>
      </div>
      <div class="form-group">
        <label for="review-decision-outcome">Delivery Decision</label>
        <select id="review-decision-outcome" class="form-control">
          <option value="Approved">Approve Delivery (Debits 1 credit, records progress, creates payable earning source)</option>
          <option value="Correction Requested">Return for Correction (Request trainer edit)</option>
          <option value="Rejected">Reject Delivery (No entitlement debit, no earning created)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="review-decision-notes">Decision / Correction Note</label>
        <textarea id="review-decision-notes" class="form-control" rows="3" placeholder="Explain the decision basis. Required for approvals and corrections..."></textarea>
      </div>
      <div class="om-downstream-notice">
        <i data-lucide="info"></i>
        <span><strong>Segregation of Duties:</strong> Delivery approval creates a payable earning record ('ERN-xxx'), but <strong>does not settle or pay payroll</strong>. Payroll settlement is an independent financial control.</span>
      </div>
      <label class="confirmation-check">
        <input id="review-mfa-check" type="checkbox" checked>
        <span>I confirmed delivery evidence against Daily.co telemetry and curriculum progress standard.</span>
      </label>
      <div id="review-decision-error" class="form-error hidden">A decision note and verification confirmation are required.</div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmClassReview('${rev.id}')">Submit Decision</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  },

  confirmOmClassReview(reviewId) {
    const rev = db.omData.classReviews.find(r => r.id === reviewId);
    const outcome = document.getElementById("review-decision-outcome")?.value;
    const notes = document.getElementById("review-decision-notes")?.value.trim();
    const verified = document.getElementById("review-mfa-check")?.checked;

    if (!rev || !outcome || !verified) {
      document.getElementById("review-decision-error")?.classList.remove("hidden");
      return;
    }

    const prevStatus = rev.status;
    rev.status = outcome;
    rev.decidedBy = "Sarah Connor (OM)";
    rev.decidedAt = new Date().toISOString();
    rev.notes = notes || rev.notes;

    // If approved, debit credit and create earning
    if (outcome === "Approved") {
      rev.downstream = "Entitlement debited; progress event created; payable earning ERN-" + Math.floor(Math.random() * 9000 + 1000) + " generated.";
      rev.signal = "Approved & debited";
      
      const targetClass = db.omData.classes.find(c => c.id === rev.classId);
      if (targetClass) {
        targetClass.status = "Completed";
        targetClass.reportStatus = "Approved";
      }
    } else if (outcome === "Correction Requested") {
      rev.returnReason = notes;
      rev.signal = "Awaiting trainer correction";
    }

    this.audit("OM_CLASS_DELIVERY_DECISION", `Delivery review ${rev.id} marked ${outcome}. Class: ${rev.classId}. Note: ${notes}`, "High", `${prevStatus} -> ${outcome}`);
    Notifications.push("Delivery Decision Recorded", `${rev.id} is now ${outcome}.`, outcome === "Approved" ? "success" : "warning");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // FLOW-011 / FLOW-012: Manual Payment Review & Approval
  openOmPaymentReview(paymentId) {
    const pay = db.omData.payments.find(p => p.id === paymentId);
    if (!pay) return;

    pay.status = "Under Review";
    pay.reviewer = "Sarah Connor";

    const modal = document.getElementById("generic-modal");
    const dialog = modal.querySelector(".modal");
    dialog.className = "modal om-flow-dialog";
    document.getElementById("modal-title").textContent = `Manual Payment Review: ${pay.id}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="receipt"></i></span>
        <div><span>Manual Payment Verification (FLOW-012)</span><strong>Private evidence review: Receipt is only evidence until explicit OM approval</strong></div>
        <span class="badge badge-warning">${pay.status}</span>
      </div>
      <div class="account-summary-bar">
        <div><span>Learner</span><strong>${pay.learner}</strong></div>
        <div><span>Payer</span><strong>${pay.payer}</strong></div>
        <div><span>Submitted Amount</span><strong>${pay.submittedAmount} (${pay.currency})</strong></div>
        <div><span>Expected Amount</span><strong>${pay.expectedAmount}</strong></div>
      </div>
      <div class="om-flow-evidence-box">
        <h4>Payment Receipt & Transmission Details</h4>
        <p><strong>Payment Channel:</strong> ${pay.channel}</p>
        <p><strong>Bank / Transfer Reference:</strong> ${pay.reference}</p>
        <p><strong>Receipt File:</strong> ${pay.receiptFile}</p>
        <p><strong>Receipt Checksum:</strong> <span class="om-checksum-tag">${pay.receiptChecksum}</span></p>
        <p><strong>Duplicate Detection Check:</strong> <span class="success-text">${pay.duplicateFlag}</span></p>
      </div>
      <div class="form-group">
        <label for="pay-decision-outcome">Verification Decision</label>
        <select id="pay-decision-outcome" class="form-control">
          <option value="Approved">Approve Payment (Creates payment transaction, allocation, official receipt, & access grant)</option>
          <option value="Correction Requested">Request Payer Correction (Legibility or reference missing)</option>
          <option value="Rejected">Reject Submission (Invalid transaction / no funds received)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="pay-decision-notes">Verification Notes</label>
        <textarea id="pay-decision-notes" class="form-control" rows="3" placeholder="Enter bank verification reference or correction details..."></textarea>
      </div>
      <label class="confirmation-check">
        <input id="pay-mfa-check" type="checkbox" checked>
        <span>I verified the private transfer evidence against the bank settlement snapshot.</span>
      </label>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmPaymentReview('${pay.id}')">Submit Payment Decision</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  },

  confirmOmPaymentReview(paymentId) {
    const pay = db.omData.payments.find(p => p.id === paymentId);
    const outcome = document.getElementById("pay-decision-outcome")?.value;
    const notes = document.getElementById("pay-decision-notes")?.value.trim();
    const verified = document.getElementById("pay-mfa-check")?.checked;

    if (!pay || !outcome || !verified) return;

    const prevStatus = pay.status;
    pay.status = outcome;
    pay.notes = notes || pay.notes;

    if (outcome === "Approved") {
      pay.txId = "TX-" + Math.floor(Math.random() * 9000 + 1000);
      pay.receiptId = "RCP-" + Math.floor(Math.random() * 9000 + 1000);
      pay.accessGrant = "AG-" + Math.floor(Math.random() * 900 + 100);
      pay.signal = "Payment approved & access granted";

      // If pending enrolment exists, link it
      const enr = db.omData.enrolments.find(e => e.learner === pay.learner);
      if (enr) {
        enr.paymentRef = `${pay.id} (Approved)`;
        enr.grantRef = pay.accessGrant;
      }
    } else if (outcome === "Correction Requested") {
      pay.returnReason = notes;
      pay.signal = "Awaiting payer correction";
    }

    this.audit("OM_PAYMENT_DECISION", `Payment ${pay.id} marked ${outcome}. Amount: ${pay.submittedAmount}. Note: ${notes}`, "High", `${prevStatus} -> ${outcome}`);
    Notifications.push("Payment Decision Recorded", `Payment ${pay.id} is now ${outcome}.`, outcome === "Approved" ? "success" : "warning");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // FLOW-017: Cancel / Reschedule / Makeup Class
  openOmClassCancelReschedule(classId) {
    const cls = db.omData.classes.find(c => c.id === classId);
    if (!cls) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Modify Class Occurrence: ${cls.id}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="calendar-x"></i></span>
        <div><span>Class Modification & Makeup (FLOW-017)</span><strong>Cancel, reschedule, or generate replacement makeup occurrence</strong></div>
      </div>
      <div class="account-summary-bar">
        <div><span>Occurrence</span><strong>${cls.id}</strong></div>
        <div><span>Title</span><strong>${cls.title}</strong></div>
        <div><span>Trainer</span><strong>${cls.trainer}</strong></div>
        <div><span>Timing</span><strong>${cls.timing}</strong></div>
      </div>
      <div class="form-group">
        <label for="class-action-type">Operational Action</label>
        <select id="class-action-type" class="form-control">
          <option value="Reschedule">Reschedule Occurrence (Keep same entitlement)</option>
          <option value="Cancel & Release Credit">Cancel Class & Release Entitlement Credit</option>
          <option value="Schedule Makeup">Create Linked Makeup Class Occurrence</option>
        </select>
      </div>
      <div class="form-group">
        <label for="class-action-reason">Reason for Modification</label>
        <textarea id="class-action-reason" class="form-control" rows="3" placeholder="Enter reason (e.g. Trainer emergency, learner illness, technical disruption)..."></textarea>
      </div>
      <label class="confirmation-check">
        <input id="class-notify-check" type="checkbox" checked>
        <span>Send automated reschedule / cancellation notice to learner and trainer.</span>
      </label>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmClassCancelReschedule('${cls.id}')">Apply Changes</button>
    `;

    modal.classList.remove("hidden");
  },

  confirmOmClassCancelReschedule(classId) {
    const cls = db.omData.classes.find(c => c.id === classId);
    const action = document.getElementById("class-action-type")?.value;
    const reason = document.getElementById("class-action-reason")?.value.trim() || "Operational modification";

    if (!cls) return;

    cls.status = action.includes("Cancel") ? "Cancelled" : "Rescheduled";
    cls.technicalStatus = `${action}: ${reason}`;

    if (action === "Schedule Makeup") {
      db.omData.classes.push({
        id: "CLS-" + Math.floor(Math.random() * 900 + 9200),
        title: cls.title + " (Makeup)",
        type: "Makeup (1:1)",
        trainer: cls.trainer,
        learner: cls.learner,
        timing: "Tomorrow 17:00 - 17:45 PKT",
        participants: 1,
        roomState: "Provisioned",
        liveState: "Scheduled",
        attendanceStatus: "Eligible (1)",
        reportStatus: "Pending",
        technicalStatus: `Linked to original occurrence ${cls.id}`,
        roomUrl: "https://ihs.daily.co/makeup-" + cls.id.toLowerCase(),
        owner: cls.trainer,
        status: "Upcoming"
      });
    }

    this.audit("OM_CLASS_MODIFIED", `Class ${cls.id} updated: ${action}. Reason: ${reason}`, "High", `Scheduled -> ${cls.status}`);
    Notifications.push("Class Modified", `Class ${cls.id} has been ${cls.status.toLowerCase()}.`, "warning");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // FLOW-039: Create Cohort Run & Learner Transfer
  openOmCohortCreate() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create New Course Run / Cohort (FLOW-039)";

    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-cohort-name">Cohort / Run Name</label>
        <input id="new-cohort-name" class="form-control" placeholder="e.g. Literacy Foundations 2026-Q4">
      </div>
      <div class="form-group">
        <label for="new-cohort-course">Course & Version</label>
        <select id="new-cohort-course" class="form-control">
          <option value="Basic Literacy (v7.0)">Basic Literacy (v7.0)</option>
          <option value="Applied Numeracy (v4.2)">Applied Numeracy (v4.2)</option>
          <option value="Vocational Technology (v3.1)">Vocational Technology (v3.1)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="new-cohort-capacity">Max Student Capacity</label>
        <input id="new-cohort-capacity" type="number" class="form-control" value="15" min="1" max="50">
      </div>
      <div class="form-group">
        <label for="new-cohort-trainer">Assigned Trainer</label>
        <select id="new-cohort-trainer" class="form-control">
          ${db.omData.trainers.map(trn => `<option value="${trn.name}">${trn.name} (${trn.programmes})</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label for="new-cohort-schedule">Weekly Schedule Cadence</label>
        <input id="new-cohort-schedule" class="form-control" value="Tue / Thu 15:00 PKT">
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveOmCohort()">Create Course Run</button>
    `;

    modal.classList.remove("hidden");
  },

  saveOmCohort() {
    const name = document.getElementById("new-cohort-name")?.value.trim();
    const course = document.getElementById("new-cohort-course")?.value;
    const capacity = Number(document.getElementById("new-cohort-capacity")?.value) || 15;
    const trainer = document.getElementById("new-cohort-trainer")?.value;
    const schedule = document.getElementById("new-cohort-schedule")?.value;

    if (!name) return;

    const newCrun = {
      id: "CRUN-" + Math.floor(Math.random() * 900 + 100),
      name,
      course: course.split(" (")[0],
      version: course.split(" (")[1]?.replace(")", "") || "v1.0",
      mode: "Group",
      enrolled: 0,
      capacity,
      trainer,
      schedule,
      room: "https://ihs.daily.co/crun-" + Math.floor(Math.random() * 900 + 100),
      status: "Active",
      startDate: "2026-09-01",
      endDate: "2026-11-30",
      owner: trainer,
      signal: `${capacity} seats available`
    };

    db.omData.cohorts.unshift(newCrun);

    this.audit("OM_COHORT_CREATED", `Created new course run ${newCrun.id}: ${name} with capacity ${capacity}`, "Medium", "Draft -> Active");
    Notifications.push("Cohort Created", `${name} is now active.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    RenderEngine.omWorkspace("om-course-runs");
  },

  openOmLearnerTransfer(rosterId) {
    const rost = db.omData.rosters.find(r => r.id === rosterId);
    if (!rost) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Transfer Learner: ${rost.learner}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="account-summary-bar">
        <div><span>Learner</span><strong>${rost.learner}</strong></div>
        <div><span>Current Cohort</span><strong>${rost.cohortId}</strong></div>
        <div><span>Attendance Rate</span><strong>${rost.attendanceRate}</strong></div>
      </div>
      <div class="form-group">
        <label for="transfer-target-cohort">Select Destination Cohort</label>
        <select id="transfer-target-cohort" class="form-control">
          ${db.omData.cohorts.filter(c => c.id !== rost.cohortId).map(c => `<option value="${c.id}">${c.name} (${c.enrolled}/${c.capacity} seats)</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label for="transfer-reason">Reason for Transfer</label>
        <textarea id="transfer-reason" class="form-control" rows="2" placeholder="e.g. Learner schedule clash, level adjustment"></textarea>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmLearnerTransfer('${rost.id}')">Confirm Transfer</button>
    `;

    modal.classList.remove("hidden");
  },

  confirmOmLearnerTransfer(rosterId) {
    const rost = db.omData.rosters.find(r => r.id === rosterId);
    const target = document.getElementById("transfer-target-cohort")?.value;
    const reason = document.getElementById("transfer-reason")?.value.trim() || "Operational transfer";

    if (!rost || !target) return;

    rost.status = "Transferred";
    rost.transferTo = target;

    // Add new active roster record for target
    db.omData.rosters.push({
      id: "ROST-" + Math.floor(Math.random() * 900 + 100),
      cohortId: target,
      learner: rost.learner,
      status: "Active",
      joined: new Date().toISOString().slice(0, 10),
      attendanceRate: "100%",
      owner: "Sarah Connor"
    });

    this.audit("OM_LEARNER_TRANSFERRED", `Transferred ${rost.learner} from ${rost.cohortId} to ${target}. Reason: ${reason}`, "Medium", `${rost.cohortId} -> ${target}`);
    Notifications.push("Learner Transferred", `${rost.learner} transferred to ${target}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    RenderEngine.omWorkspace("om-capacity-transfers");
  },

  // Trainer Reassignment
  openOmTrainerReassign(trnId) {
    const trn = db.omData.trainers.find(t => t.id === trnId);
    if (!trn) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Reassign / Manage Trainer: ${trn.name}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="account-summary-bar">
        <div><span>Trainer</span><strong>${trn.name}</strong></div>
        <div><span>Programmes</span><strong>${trn.programmes}</strong></div>
        <div><span>Weekly Load</span><strong>${trn.weeklyLoad}</strong></div>
        <div><span>Conflict Status</span><strong>${trn.conflictStatus}</strong></div>
      </div>
      <div class="form-group">
        <label for="trn-new-cohort">Assign to Cohort Run</label>
        <select id="trn-new-cohort" class="form-control">
          ${db.omData.cohorts.map(c => `<option value="${c.id}">${c.name} (${c.schedule})</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label for="trn-effective-date">Effective Date</label>
        <input id="trn-effective-date" type="date" class="form-control" value="2026-08-16">
      </div>
      <div class="form-group">
        <label for="trn-reassign-reason">Reassignment Justification</label>
        <textarea id="trn-reassign-reason" class="form-control" rows="2" placeholder="Operational rationale for schedule or cohort change"></textarea>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmTrainerReassign('${trn.id}')">Save Assignment</button>
    `;

    modal.classList.remove("hidden");
  },

  confirmOmTrainerReassign(trnId) {
    const trn = db.omData.trainers.find(t => t.id === trnId);
    const cohortId = document.getElementById("trn-new-cohort")?.value;
    const effectiveDate = document.getElementById("trn-effective-date")?.value;
    const reason = document.getElementById("trn-reassign-reason")?.value.trim() || "Standard operational allocation";

    if (!trn) return;

    trn.conflictStatus = "Clear";
    trn.status = "Active";

    this.audit("OM_TRAINER_REASSIGNED", `Reassigned trainer ${trn.name} to cohort ${cohortId} effective ${effectiveDate}. Reason: ${reason}`, "Medium", "Conflict Alert -> Active");
    Notifications.push("Trainer Reassigned", `Updated assignments for ${trn.name}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    RenderEngine.omWorkspace("om-trainer-assignments");
  },

  // Resource Quarantine
  openOmResourceQuarantine(resId) {
    const res = db.omData.resources.find(r => r.id === resId);
    if (!res) return;

    res.status = "Quarantined";
    res.quarantineReason = "Administrative override: unverified macro scripts";
    this.audit("OM_RESOURCE_QUARANTINED", `Quarantined resource ${res.id} (${res.title}) for security validation.`, "High", "Active -> Quarantined");
    Notifications.push("Resource Quarantined", `Resource ${res.title} is now quarantined and inaccessible to learners.`, "warning");
    RenderEngine.omWorkspace("om-resources");
  },

  openOmResourceAssign() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Upload & Assign Course Resource";

    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-res-title">Resource Title</label>
        <input id="new-res-title" class="form-control" placeholder="e.g. Basic Literacy Supplementary Reader">
      </div>
      <div class="form-group">
        <label for="new-res-course">Target Course / Cohort</label>
        <select id="new-res-course" class="form-control">
          <option value="Basic Literacy v7.0">Basic Literacy v7.0 (Cohort LIT-C1)</option>
          <option value="Applied Numeracy v4.2">Applied Numeracy v4.2 (Cohort N4)</option>
          <option value="Vocational Technology v3.1">Vocational Technology v3.1</option>
        </select>
      </div>
      <div class="form-group">
        <label for="new-res-file">Select File</label>
        <input type="file" id="new-res-file" class="form-control">
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveOmResource()">Upload & Publish</button>
    `;

    modal.classList.remove("hidden");
  },

  saveOmResource() {
    const title = document.getElementById("new-res-title")?.value.trim();
    const course = document.getElementById("new-res-course")?.value;
    if (!title) return;

    db.omData.resources.unshift({
      id: "RES-" + Math.floor(Math.random() * 900 + 100),
      title,
      version: "v1.0",
      format: "PDF",
      size: "2.4 MB",
      course,
      cohort: "All Active",
      status: "Active",
      downloads: 0,
      checksum: "sha256:" + Math.random().toString(16).slice(2, 10) + "…",
      uploadedBy: "Sarah Connor (OM)",
      date: new Date().toISOString().slice(0, 10),
      owner: "Sarah Connor",
      signal: "Published"
    });

    this.audit("OM_RESOURCE_UPLOADED", `Uploaded and published resource: ${title} to ${course}`, "Medium", "Draft -> Published");
    Notifications.push("Resource Published", `Resource ${title} is now available.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    RenderEngine.omWorkspace("om-resources");
  },

  // Case Investigation & Resolution
  openOmCaseInvestigate(caseId) {
    const c = db.omData.cases.find(item => item.id === caseId);
    if (!c) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Investigate Case: ${c.id}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="account-summary-bar">
        <div><span>Subject</span><strong>${c.subject}</strong></div>
        <div><span>Category</span><strong>${c.category}</strong></div>
        <div><span>Priority</span><strong>${c.priority}</strong></div>
        <div><span>SLA Status</span><strong>${c.sla}</strong></div>
      </div>
      <div class="om-flow-evidence-box">
        <h4>Case Investigation Notes</h4>
        <p>${c.notes}</p>
      </div>
      <div class="form-group">
        <label for="case-resolution-action">Resolution Action</label>
        <select id="case-resolution-action" class="form-control">
          <option value="Resolved">Resolve Case (Action taken & learner notified)</option>
          <option value="In Review">Keep In Review (Investigation underway)</option>
          <option value="Escalated">Escalate to Head of Operations</option>
        </select>
      </div>
      <div class="form-group">
        <label for="case-resolution-note">Resolution Note</label>
        <textarea id="case-resolution-note" class="form-control" rows="3" placeholder="Enter findings and action taken..."></textarea>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmOmCaseResolution('${c.id}')">Submit Resolution</button>
    `;

    modal.classList.remove("hidden");
  },

  confirmOmCaseResolution(caseId) {
    const c = db.omData.cases.find(item => item.id === caseId);
    const action = document.getElementById("case-resolution-action")?.value;
    const note = document.getElementById("case-resolution-note")?.value.trim() || "Resolution recorded";

    if (!c) return;

    c.status = action;
    c.notes += " | " + note;
    c.signal = `Status: ${action}`;

    this.audit("OM_CASE_RESOLVED", `Case ${c.id} updated to ${action}. Note: ${note}`, "Medium", `Status -> ${action}`);
    Notifications.push("Case Updated", `Case ${c.id} is now ${action}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "dashboard") RenderEngine.omDashboard();
    else RenderEngine.omWorkspace(Router.currentRoute);
  },

  // Generic Source Record Inspector for OM
  openOmRecord(ref) {
    let target = null;
    let category = "Operational Record";

    if (db.omData) {
      for (const [cat, list] of Object.entries(db.omData)) {
        if (Array.isArray(list)) {
          const found = list.find(item => item.id === ref || item.code === ref || item.ref === ref);
          if (found) {
            target = found;
            category = cat;
            break;
          }
        }
      }
    }

    if (!target) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Record Inspection: ${ref}`;

    const entries = Object.entries(target).filter(([k]) => k !== "notes" && k !== "syllabus" && k !== "downstream");

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-banner">
        <span class="om-flow-icon"><i data-lucide="file-search"></i></span>
        <div><span>Authoritative Source Record</span><strong>Category: ${category.toUpperCase()} · ${ref}</strong></div>
        <span class="badge badge-success">${target.status || 'Active'}</span>
      </div>
      <div class="account-summary-bar">
        ${entries.slice(0, 4).map(([k, v]) => `<div><span>${k.toUpperCase()}</span><strong>${v}</strong></div>`).join("")}
      </div>
      <div class="om-flow-evidence-box">
        <h4>Detailed Field Metadata</h4>
        <dl class="om-record-dl">
          ${Object.entries(target).map(([k, v]) => `<div><dt>${k}</dt><dd>${typeof v === 'object' ? JSON.stringify(v) : v}</dd></div>`).join("")}
        </dl>
      </div>
      <div class="om-authority-note"><i data-lucide="shield-check"></i><span>All decisions and modifications must be executed through governed operational workflows. No silent database overwrites.</span></div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-primary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close Inspector</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  },

  openCooDecision(approvalId) {
    const item = db.cooApprovals.find(approval => approval.id === approvalId);
    if (!item) return;
    const flow = cooDecisionFlows[item.type];
    if (!flow) return;
    if (item.claimedBy && item.claimedBy !== db.currentUser.name) {
      Notifications.push("Decision already claimed", `${item.source} is being reviewed by ${item.claimedBy}.`, "warning");
      return;
    }
    item.claimedBy = db.currentUser.name;
    const modal = document.getElementById("generic-modal");
    const dialog = modal.querySelector(".modal");
    dialog.className = `modal coo-flow-dialog coo-flow-${flow.slug}`;
    document.getElementById("modal-title").textContent = flow.title;
    const evidenceMarkup = flow.fields(item).map(([label, value, note]) => `
      <section class="coo-flow-evidence-item"><span>${label}</span><strong>${value}</strong><small>${note}</small></section>
    `).join("");
    const checkMarkup = flow.checks.map((check, index) => `
      <label class="coo-flow-check"><input class="coo-review-check" type="checkbox" value="${index}"><span>${check}</span></label>
    `).join("");
    const outcomeMarkup = flow.outcomes.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    document.getElementById("modal-body").innerHTML = `
      <div class="coo-flow-banner">
        <span class="coo-flow-icon"><i data-lucide="${flow.icon}"></i></span>
        <div><span>${item.type} workflow</span><strong>${flow.principle}</strong></div>
        <span class="badge badge-warning">${item.status}</span>
      </div>
      <div class="coo-flow-sourcebar">
        <div><span>Decision</span><strong>${item.id}</strong></div>
        <div><span>Source</span><strong>${item.source}</strong></div>
        <div><span>Requester</span><strong>${item.requester}</strong></div>
        <div><span>Queue age</span><strong>${item.age}</strong></div>
      </div>
      <div class="coo-flow-layout">
        <div class="coo-flow-main">
          <section class="coo-flow-section"><div class="coo-flow-section-head"><h4>Source evidence</h4><span>Read-only snapshot</span></div><div class="coo-flow-evidence">${evidenceMarkup}</div></section>
          <section class="coo-flow-section coo-flow-decision-panel">
            <div class="coo-flow-section-head"><h4>${flow.decisionLabel}</h4><span>Reason required</span></div>
            <div class="form-group"><label for="coo-decision-outcome">Outcome</label><select id="coo-decision-outcome" class="form-control" onchange="Actions.updateCooDecisionImpact('${approvalId}')">${outcomeMarkup}</select><small class="form-help">Only outcomes valid for this workflow are available.</small></div>
            <div class="form-group"><label for="coo-decision-reason">${flow.reasonLabel}</label><textarea id="coo-decision-reason" class="form-control" rows="4" placeholder="Reference the evidence and explain the decision"></textarea><small class="form-help">This note becomes part of the immutable decision event.</small></div>
            <div class="coo-flow-impact"><span>Downstream effect</span><strong id="coo-decision-impact">${flow.impacts[flow.outcomes[0][0]]}</strong></div>
          </section>
        </div>
        <aside class="coo-flow-aside">
          <div class="coo-flow-section-head"><h4>Required checks</h4><span>${flow.checks.length} controls</span></div>
          <div class="coo-flow-checks">${checkMarkup}</div>
          <div class="coo-flow-separation"><i data-lucide="shield-check"></i><div><strong>Separation preserved</strong><span>Approval does not silently complete settlement, access, or downstream work.</span></div></div>
        </aside>
      </div>
      <label class="confirmation-check coo-mfa-check"><input id="coo-decision-mfa" type="checkbox"><span>Recent MFA authentication confirmed for this high-impact decision.</span></label>
      <div id="coo-decision-error" class="form-error hidden" role="alert">Complete every control, confirm MFA, and record a reason.</div>`;
    document.getElementById("modal-footer").innerHTML = `<span class="coo-modal-claim"><i data-lucide="lock-keyhole"></i> Claimed by ${db.currentUser.name}</span><div><button class="btn btn-secondary" onclick="Actions.closeCooDecision('${approvalId}')">Cancel</button><button class="btn btn-primary" onclick="Actions.confirmCooDecision('${approvalId}')">${flow.submitLabel}</button></div>`;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  },

  updateCooDecisionImpact(approvalId) {
    const item = db.cooApprovals.find(approval => approval.id === approvalId);
    const flow = item && cooDecisionFlows[item.type];
    const outcome = document.getElementById("coo-decision-outcome")?.value;
    const impact = document.getElementById("coo-decision-impact");
    if (flow && outcome && impact) impact.textContent = flow.impacts[outcome];
  },

  closeCooDecision(approvalId) {
    const item = db.cooApprovals.find(approval => approval.id === approvalId);
    if (item?.claimedBy === db.currentUser.name) delete item.claimedBy;
    document.getElementById("generic-modal").classList.add("hidden");
  },

  confirmCooDecision(approvalId) {
    const item = db.cooApprovals.find(approval => approval.id === approvalId);
    const flow = item && cooDecisionFlows[item.type];
    const outcome = document.getElementById("coo-decision-outcome")?.value;
    const reason = document.getElementById("coo-decision-reason")?.value.trim();
    const mfa = document.getElementById("coo-decision-mfa")?.checked;
    const completedChecks = [...document.querySelectorAll(".coo-review-check")].filter(check => check.checked).length;
    if (!item || !flow || !reason || !mfa || completedChecks !== flow.checks.length) {
      document.getElementById("coo-decision-error")?.classList.remove("hidden");
      return;
    }
    if (item.proposer === db.currentUser.name) {
      document.getElementById("coo-decision-error").textContent = "Segregation of duty blocks the proposer from approving this record.";
      document.getElementById("coo-decision-error").classList.remove("hidden");
      return;
    }
    const previous = item.status;
    item.status = outcome;
    item.decisionReason = reason;
    item.decidedBy = db.currentUser.name;
    item.decidedAt = new Date().toISOString();
    item.downstreamEffect = flow.impacts[outcome];
    delete item.claimedBy;
    const sourceRecord = db.cooRecords.find(record => record.ref === item.source);
    if (sourceRecord) {
      sourceRecord.status = outcome;
      sourceRecord.signal = "Decision recorded";
    }
    this.audit(`COO_${flow.slug.toUpperCase()}_DECISION`, `${outcome} ${item.type} source ${item.source}. Reason: ${reason}. Effect: ${flow.impacts[outcome]}`, "High", `${previous} -> ${outcome}`);
    Notifications.push("Decision recorded", `${item.source} is now ${outcome}. ${flow.impacts[outcome]}`, outcome === "Approved" ? "success" : "warning");
    document.getElementById("generic-modal").classList.add("hidden");
    RenderEngine.cooWorkspace(Router.currentRoute);
    RenderEngine.dashboard();
  },

  openCooRecord(reference) {
    const record = db.cooRecords.find(item => item.ref === reference);
    if (!record) return;
    document.querySelector("#generic-modal .modal").className = "modal";
    document.getElementById("modal-title").textContent = `Source record: ${record.ref}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="account-summary-bar"><div><span>State</span><strong>${record.status}</strong></div><div><span>Owner</span><strong>${record.owner}</strong></div><div><span>Age / timing</span><strong>${record.age}</strong></div></div>
      <section class="detail-panel"><h4>${record.title}</h4><p>${record.detail}</p><dl><div><dt>Attention signal</dt><dd>${record.signal}</dd></div><div><dt>Authority</dt><dd>Permission-scoped source view</dd></div><div><dt>Correction policy</dt><dd>Use the source workflow</dd></div></dl></section>
      <div class="step-up-notice"><strong>Record integrity</strong><span>COO oversight does not permit silent edits. Approvals, reversals, and corrections create new auditable events.</span></div>`;
    document.getElementById("modal-footer").innerHTML = `<button class="btn btn-primary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Done</button>`;
    document.getElementById("generic-modal").classList.remove("hidden");
  },

  requestCooReportExport() {
    this.audit("COO_REPORT_EXPORT_REQUESTED", "Requested a permission-scoped management report export.", "Medium", "Draft -> Pending Approval");
    Notifications.push("Export Requested", "The report will be generated asynchronously after scope validation.", "success");
  },

  // Webhook Delivery Retry
  retryWebhook(whId) {
    const webhook = db.webhooks.find(w => w.id === whId);
    if (!webhook) return;
    
    webhook.attempts++;
    
    // Simulate API return success on retry
    webhook.status = "SUCCESS";
    webhook.httpCode = 200;
    
    this.audit("WEBHOOK_RETRY", `Manual retry of webhook event ${webhook.event} to ${webhook.target}`, "Low", "Attempts -> " + webhook.attempts);
    
    // Show user notification toast
    Notifications.push("Webhook Retry Triggered", `Event ${webhook.event} successfully delivered. Response 200 OK.`, "success");
    
    // Reload active view
    Router.renderView("webhooks");
    RenderEngine.dashboard();
  },

  // Background Job Retry
  retryJob(jobId) {
    const job = db.jobs.find(j => j.id === jobId);
    if (!job) return;

    job.status = "Queued";
    job.attempts = 0;
    job.errorMsg = null;

    this.audit("JOB_QUEUED_RETRY", `Background job ${job.taskName} re-inserted in active task runner queue.`, "Medium", "Status -> Queued");
    Notifications.push("Background Job Requeued", `Job ${job.taskName} is queued.`, "success");

    // Reload failed/dead-letter views if active
    Router.renderView(Router.currentRoute);
    RenderEngine.dashboard();
  },

  // Discard dead letter job
  discardJob(jobId) {
    const index = db.jobs.findIndex(j => j.id === jobId);
    if (index !== -1) {
      const job = db.jobs[index];
      db.jobs.splice(index, 1);
      
      this.audit("JOB_DISCARDED", `Permanently dropped dead-letter job: ${job.taskName}`, "High", "Deleted from Database");
      Notifications.push("Job Discarded", `Job ${job.taskName} removed.`, "warning");
      
      Router.renderView("dead-letters");
      RenderEngine.dashboard();
    }
  },

  // Dismiss exception log
  dismissException(exId) {
    const index = db.integrationExceptions.findIndex(e => e.id === exId);
    if (index !== -1) {
      db.integrationExceptions.splice(index, 1);
      Router.renderView("integration-exceptions");
      RenderEngine.dashboard();
    }
  },

  // Flush Dead Letters (Quick Action / Bulk Action)
  flushDeadLetters() {
    const deadJobs = db.jobs.filter(j => j.status === "Dead-letter");
    if (deadJobs.length === 0) {
      Notifications.push("Dead Letter Clean", "No dead letters found to flush.", "warning");
      return;
    }

    deadJobs.forEach(j => {
      j.status = "Queued";
      j.attempts = 0;
      j.errorMsg = null;
    });

    this.audit("DEAD_LETTERS_FLUSHED", `Flushed ${deadJobs.length} dead-letter jobs to the queue.`, "High", "Dead-letter -> Queued");
    Notifications.push("Dead Letters Flushed", `Successfully re-queued ${deadJobs.length} jobs.`, "success");

    Router.renderView(Router.currentRoute);
    RenderEngine.dashboard();
  },

  // Export Request Approval
  approveExport(reqId) {
    const exp = db.exports.find(e => e.requestId === reqId);
    if (!exp) return;
    this.openExportDecision(reqId, "approve");
  },

  // Export Request Rejection
  rejectExport(reqId) {
    const exp = db.exports.find(e => e.requestId === reqId);
    if (!exp) return;
    this.openExportDecision(reqId, "reject");
  },

  openExportDecision(reqId, decision) {
    const exp = db.exports.find(e => e.requestId === reqId);
    if (!exp) return;
    const approving = decision === "approve";
    document.getElementById("modal-title").textContent = `${approving ? "Approve" : "Reject"} export request`;
    document.getElementById("modal-body").innerHTML = `
      <div class="step-up-notice"><strong>Sensitive export control</strong><span>${exp.scope}; ${exp.format}. Every decision is independently audited.</span></div>
      <div class="form-group"><label for="export-decision-reason">Decision reason</label><textarea id="export-decision-reason" class="form-control" rows="3" placeholder="Reference the approved operational need or rejection basis"></textarea></div>
      <label class="confirmation-check"><input id="export-decision-mfa" type="checkbox"> Recent MFA authentication confirmed.</label>
      <div id="export-decision-error" class="form-error hidden">A reason and MFA confirmation are required.</div>`;
    document.getElementById("modal-footer").innerHTML = `<button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button><button class="btn ${approving ? 'btn-primary' : 'btn-error'}" onclick="Actions.confirmExportDecision('${reqId}', '${decision}')">${approving ? 'Approve & issue link' : 'Reject request'}</button>`;
    document.getElementById("generic-modal").classList.remove("hidden");
  },

  confirmExportDecision(reqId, decision) {
    const exp = db.exports.find(e => e.requestId === reqId);
    const reason = document.getElementById("export-decision-reason")?.value.trim();
    const mfa = document.getElementById("export-decision-mfa")?.checked;
    if (!exp || !reason || !mfa) {
      document.getElementById("export-decision-error")?.classList.remove("hidden");
      return;
    }

    const approved = decision === "approve";
    exp.status = approved ? "Ready" : "Revoked";
    exp.expiresAt = approved ? "2026-08-16 14:30:00" : null;
    this.audit(approved ? "EXPORT_APPROVED" : "EXPORT_REJECTED", `${approved ? "Approved" : "Rejected"} export ${exp.requestId}. Reason: ${reason}`, "High", `Pending Approval -> ${exp.status}`);
    Notifications.push(approved ? "Export Approved" : "Export Rejected", approved ? `A time-limited link was issued for ${exp.scope}.` : `Rejected download for ${exp.scope}.`, approved ? "success" : "warning");
    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("exports");
    RenderEngine.dashboard();
  },

  // Simulate file download
  downloadExportFile(reqId) {
    const exp = db.exports.find(e => e.requestId === reqId);
    if (!exp) return;

    Notifications.push("Download Started", `Using the expiring approved link for ${exp.scope}.${exp.format.toLowerCase()}`, "success");
    this.audit("EXPORT_DOWNLOADED", `Downloaded approved export ${exp.requestId}; link expires ${exp.expiresAt || "after use"}.`, "Medium");
  },

  // Feature Flag Toggle
  toggleFeatureFlag(key, isChecked) {
    const flag = db.featureFlags.find(f => f.key === key);
    if (!flag) return;

    const oldState = flag.globalStatus;
    flag.globalStatus = isChecked;
    flag.lifecycle = isChecked ? "Enabled" : "Disabled";

    this.audit("FLAG_TOGGLED", `Feature Flag '${flag.key}' toggled to ${isChecked ? 'ENABLED' : 'DISABLED'}`, "Medium", `${flag.key}: ${oldState} -> ${isChecked}`);
    Notifications.push("Feature Flag Updated", `${flag.key} is now ${isChecked ? 'Enabled' : 'Disabled'}`, "info");

    RenderEngine.dashboard();
  },

  // Retire Feature Flag; history remains available for governance review.
  deleteFeatureFlag(key) {
    const flag = db.featureFlags.find(f => f.key === key);
    if (flag) {
      flag.lifecycle = "Retired";
      flag.globalStatus = false;
      this.audit("FLAG_RETIRED", `Retired feature flag key: ${key}`, "High", "Lifecycle -> Retired");
      Router.renderView("feature-flags");
      RenderEngine.dashboard();
    }
  },

  // Edit User Account Role mapping
  createRoleTemplate() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create role template";
    document.getElementById("modal-body").innerHTML = `
      <div class="step-up-notice"><strong>New roles begin as Draft</strong><span>Permissions remain unenforced until the template is reviewed and activated.</span></div>
      <div class="form-group"><label for="new-role-name">Role name</label><input id="new-role-name" class="form-control" placeholder="Example: Course Coordinator"></div>
      <div class="form-group"><label for="new-role-description">Description</label><textarea id="new-role-description" class="form-control" rows="2" placeholder="Intended responsibilities and boundaries"></textarea></div>
      <div class="form-group"><label for="new-role-scope">Intended scope</label><select id="new-role-scope" class="form-control"><option>Organization</option><option>Department</option><option>Course</option><option>Cohort</option><option>Assigned record</option></select></div>
      <label class="confirmation-check"><input id="new-role-mfa" type="checkbox"> Recent MFA authentication confirmed.</label>
      <div id="new-role-error" class="form-error hidden">A unique name, description, and MFA confirmation are required.</div>
    `;
    document.getElementById("modal-footer").innerHTML = `<button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button><button class="btn btn-primary" onclick="Actions.saveRoleTemplate()">Create Draft</button>`;
    modal.classList.remove("hidden");
  },

  saveRoleTemplate() {
    const name = document.getElementById("new-role-name")?.value.trim();
    const description = document.getElementById("new-role-description")?.value.trim();
    const scope = document.getElementById("new-role-scope")?.value;
    const mfa = document.getElementById("new-role-mfa")?.checked;
    if (!name || !description || !mfa || db.rolesPermissions[name]) {
      document.getElementById("new-role-error")?.classList.remove("hidden");
      return;
    }
    db.rolesPermissions[name] = [];
    db.roleMetadata[name] = { status: "Draft", scope, protected: false, description };
    RenderEngine.activeRoleMatrix = name;
    this.audit("ROLE_TEMPLATE_CREATED", `Draft role template created: ${name}`, "High", `Scope: ${scope}; permissions: 0`);
    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("roles-permissions");
  },

  openRoleAssignment() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Assign scoped role";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group"><label for="assignment-user">Target account</label><select id="assignment-user" class="form-control">${db.users.map(user => `<option value="${user.id}">${user.name} / ${user.email}</option>`).join("")}</select></div>
      <p class="text-sm">The assignment will begin as Pending until scope, conflict, and step-up checks are completed.</p>
    `;
    document.getElementById("modal-footer").innerHTML = `<button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button><button class="btn btn-primary" onclick="Actions.continueRoleAssignment()">Continue</button>`;
    modal.classList.remove("hidden");
  },

  continueRoleAssignment() {
    const userId = document.getElementById("assignment-user")?.value;
    document.getElementById("generic-modal").classList.add("hidden");
    this.editUserRole(userId);
  },

  viewUserAccount(userId) {
    const user = db.users.find(u => u.id === userId);
    if (!user) return;

    const userSessions = db.sessions.filter(session => session.userEmail === user.email);
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Account security: ${user.name}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="account-summary-bar">
        <div><span>Person</span><strong>${user.personId}</strong></div>
        <div><span>Account</span><strong>${user.id}</strong></div>
        <div><span>Status</span><strong>${user.status}</strong></div>
      </div>
      <div class="account-detail-grid">
        <section class="detail-panel">
          <h4>Identity and relationships</h4>
          <dl>
            <div><dt>User type</dt><dd>${user.userType}</dd></div>
            <div><dt>Email</dt><dd>${user.email}</dd></div>
            <div><dt>Authentication</dt><dd>${user.identities.join(", ")}</dd></div>
          </dl>
        </section>
        <section class="detail-panel">
          <h4>Authorization</h4>
          <dl>
            <div><dt>Active role</dt><dd>${user.role}</dd></div>
            <div><dt>Permission scope</dt><dd>${user.scope}</dd></div>
            <div><dt>Policy</dt><dd>Default deny</dd></div>
          </dl>
        </section>
        <section class="detail-panel">
          <h4>Security posture</h4>
          <dl>
            <div><dt>MFA</dt><dd>${user.mfa}</dd></div>
            <div><dt>Sessions</dt><dd>${userSessions.filter(s => s.status === "Active").length} active</dd></div>
            <div><dt>Security history</dt><dd>${user.securityEvents} recorded events</dd></div>
          </dl>
        </section>
        <section class="detail-panel boundary-panel">
          <h4>Administrative boundary</h4>
          <p>Platform Admin access does not grant payroll, disciplinary, private-chat, or unrestricted learner-content access.</p>
        </section>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close</button>
      <button class="btn btn-primary" onclick="Actions.editUserRole('${user.id}')">Manage scoped role</button>
    `;
    modal.classList.remove("hidden");
  },

  requestUserStatusChange(userId, status) {
    const user = db.users.find(u => u.id === userId);
    if (!user) return;
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `${status === "Active" ? "Reactivate" : "Suspend"} ${user.name}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="step-up-notice"><strong>Step-up authorization required</strong><span>This sensitive account action is independently audited.</span></div>
      <div class="form-group">
        <label for="account-action-reason">Administrative reason</label>
        <textarea id="account-action-reason" class="form-control" rows="3" placeholder="Enter the support, security, or policy reason"></textarea>
      </div>
      <label class="confirmation-check"><input id="account-action-mfa" type="checkbox"> I confirmed this action using recent MFA authentication.</label>
      <div id="account-action-error" class="form-error hidden">A reason and MFA confirmation are required.</div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn ${status === 'Active' ? 'btn-primary' : 'btn-error'}" onclick="Actions.confirmUserStatusChange('${user.id}', '${status}')">Confirm ${status === 'Active' ? 'reactivation' : 'suspension'}</button>
    `;
    modal.classList.remove("hidden");
  },

  confirmUserStatusChange(userId, status) {
    const reason = document.getElementById("account-action-reason")?.value.trim();
    const mfaConfirmed = document.getElementById("account-action-mfa")?.checked;
    if (!reason || !mfaConfirmed) {
      document.getElementById("account-action-error")?.classList.remove("hidden");
      return;
    }
    this.toggleUserStatus(userId, status, reason);
    document.getElementById("generic-modal").classList.add("hidden");
  },

  editUserRole(userId) {
    const user = db.users.find(u => u.id === userId);
    if (!user) return;

    const modal = document.getElementById("generic-modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");
    const footer = document.getElementById("modal-footer");

    title.textContent = `Manage Role: ${user.name}`;
    body.innerHTML = `
      <div class="form-group">
        <label for="modal-role-select">Select New Role Target</label>
        <select id="modal-role-select" class="form-control">
          <option value="Trainer" ${user.role === 'Trainer' ? 'selected' : ''}>Trainer</option>
          <option value="Learner" ${user.role === 'Learner' ? 'selected' : ''}>Learner</option>
          <option value="Operations" ${user.role === 'Operations' ? 'selected' : ''}>Operations</option>
          <option value="Platform Admin" ${user.role === 'Platform Admin' ? 'selected' : ''}>Platform Admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="modal-role-scope">Assignment Scope</label>
        <select id="modal-role-scope" class="form-control">
          <option value="Organization">Organization</option>
          <option value="Department">Department</option>
          <option value="Course assignments">Course</option>
          <option value="Cohort">Cohort</option>
          <option value="Own enrolments">Assigned record</option>
        </select>
      </div>
      <div class="form-group">
        <label for="modal-role-reason">Assignment reason</label>
        <textarea id="modal-role-reason" class="form-control" rows="2" placeholder="Why is this scoped access required?"></textarea>
      </div>
      <label class="confirmation-check"><input id="modal-role-mfa" type="checkbox"> Recent MFA authentication confirmed.</label>
      <div id="role-change-error" class="form-error hidden">Scope, reason, and MFA confirmation are required.</div>
    `;

    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveUserRole('${user.id}')">Save Changes</button>
    `;

    modal.classList.remove("hidden");
  },

  saveUserRole(userId) {
    const user = db.users.find(u => u.id === userId);
    const select = document.getElementById("modal-role-select");
    const scope = document.getElementById("modal-role-scope")?.value;
    const reason = document.getElementById("modal-role-reason")?.value.trim();
    const mfaConfirmed = document.getElementById("modal-role-mfa")?.checked;
    if (!user || !select) return;
    if (!scope || !reason || !mfaConfirmed) {
      document.getElementById("role-change-error")?.classList.remove("hidden");
      return;
    }

    const oldRole = user.role;
    const oldScope = user.scope;
    user.role = select.value;
    user.scope = scope;

    this.audit("USER_ROLE_CHANGED", `Changed scoped role for ${user.email}. Reason: ${reason}`, "High", `${oldRole} (${oldScope}) -> ${user.role} (${user.scope})`);
    Notifications.push("Scoped Role Updated", `Role for ${user.name} is now ${user.role} within ${user.scope}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("users");
  },

  // Toggle user account status
  toggleUserStatus(userId, status, reason = "Administrative account state change") {
    const user = db.users.find(u => u.id === userId);
    if (!user) return;

    const oldStatus = user.status;
    user.status = status;

    this.audit("USER_STATUS_TOGGLED", `User status changed for ${user.email}. Reason: ${reason}`, "High", `Status: ${oldStatus} -> ${status}`);
    Notifications.push("User Account Updated", `${user.name} status is now ${status}.`, "warning");

    Router.renderView("users");
  },

  // Terminate compromise security session
  terminateSession(sessId) {
    const session = db.sessions.find(s => s.id === sessId);
    if (!session) return;

    session.status = "Revoked";
    this.audit("SECURITY_SESSION_REVOKED", `Forced revocation of active login session for ${session.userName} at IP ${session.ipAddress}`, "High", "Session status -> Revoked");
    Notifications.push("Session Terminated", `Revoked login for ${session.userName}.`, "warning");

    Router.renderView("security-sessions");
    RenderEngine.dashboard();
  },

  // Start Impersonation Support Session
  startImpersonation() {
    const select = document.getElementById("impersonate-user-select");
    const reasonInput = document.getElementById("impersonate-reason");
    const durationInput = document.getElementById("impersonate-duration");
    const approvalInput = document.getElementById("impersonate-approval");
    if (!select) return;

    const userId = select.value;
    const reason = reasonInput.value.trim();
    const approval = approvalInput.value.trim();
    const duration = Number(durationInput.value);
    if (!reason || !approval) {
      Notifications.push("Support Access Blocked", "A reason and approval reference are required.", "error");
      return;
    }
    
    const user = db.users.find(u => u.id === userId);
    if (!user) return;

    // Trigger state
    db.impersonationSession.active = true;
    db.impersonationSession.user = user;
    db.impersonationSession.reason = reason;
    db.impersonationSession.approval = approval;
    db.impersonationSession.mode = "Read-only";
    db.impersonationSession.expiresAt = new Date(Date.now() + duration * 60 * 1000).toISOString().replace("T", " ").slice(0, 19);
    
    // Add Impersonation log
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
    db.supportAuditLogs.unshift({
      timestamp,
      operator: db.currentUser.name,
      impersonatedUser: `${user.name} (${user.role})`,
      reason,
      guardrails: `Read-only / ${duration} min / ${approval}`,
      status: "Active"
    });

    this.audit("SUPPORT_IMPERSONATION_STARTED", `Began approved read-only support view session for ${user.name}. Reason: ${reason}`, "High", `Operator: ${db.currentUser.name}; approval: ${approval}; duration: ${duration} minutes`);
    Notifications.push("Impersonation Active", `Viewing system as ${user.name}.`, "success");

    // Toggle banners in UI
    const banner = document.getElementById("impersonation-sidebar-banner");
    const sidebarUser = document.getElementById("impersonated-user-sidebar");
    banner.classList.remove("hidden");
    sidebarUser.textContent = user.name;

    // Re-route/refresh
    Router.renderView("support-access");
    RenderEngine.dashboard();
  },

  stopImpersonation() {
    if (!db.impersonationSession.active) return;

    const user = db.impersonationSession.user;
    
    db.impersonationSession.active = false;
    db.impersonationSession.user = null;

    // Close in log
    if (db.supportAuditLogs.length > 0 && db.supportAuditLogs[0].status === "Active") {
      db.supportAuditLogs[0].status = "Completed";
    }

    this.audit("SUPPORT_IMPERSONATION_ENDED", `Terminated support impersonation view of user ${user.name}`, "Medium");
    Notifications.push("Impersonation Terminated", `Returned to Platform Admin standard dashboard view.`, "info");

    const banner = document.getElementById("impersonation-sidebar-banner");
    banner.classList.add("hidden");

    Router.renderView("support-access");
    RenderEngine.dashboard();
  },

  // Save specific System Setting
  saveSetting(key) {
    const input = document.getElementById(`settings-${key}`);
    if (!input) return;

    const setting = db.systemSettings.find(s => s.key === key);
    if (!setting) return;

    const proposedValue = input.value.trim();
    if (!proposedValue || proposedValue === setting.value) {
      Notifications.push("No Change", `Enter a new value for ${key}.`, "warning");
      return;
    }

    document.getElementById("modal-title").textContent = `Review setting change: ${key}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="step-up-notice"><strong>Versioned configuration change</strong><span>Current v${setting.version} remains active until this proposal is authorized.</span></div>
      <div class="account-summary-bar"><div><span>Owner</span><strong>${setting.owner}</strong></div><div><span>Scope</span><strong>${setting.scope}</strong></div><div><span>Impact</span><strong>${setting.category}</strong></div></div>
      <div class="form-group"><label>Current value</label><input class="form-control" value="${setting.value}" readonly></div>
      <div class="form-group"><label>Proposed value</label><input id="setting-proposed-value" class="form-control" value="${proposedValue}" readonly></div>
      <div class="form-group"><label for="setting-change-reason">Change reason</label><textarea id="setting-change-reason" class="form-control" rows="3" placeholder="Explain the operational need and expected impact"></textarea></div>
      <label class="confirmation-check"><input id="setting-change-mfa" type="checkbox"> Recent MFA authentication confirmed.</label>
      <div id="setting-change-error" class="form-error hidden">A reason and MFA confirmation are required.</div>`;
    document.getElementById("modal-footer").innerHTML = `<button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button><button class="btn btn-primary" onclick="Actions.confirmSettingChange('${key}')">Approve new version</button>`;
    document.getElementById("generic-modal").classList.remove("hidden");
  },

  confirmSettingChange(key) {
    const setting = db.systemSettings.find(s => s.key === key);
    const proposedValue = document.getElementById("setting-proposed-value")?.value.trim();
    const reason = document.getElementById("setting-change-reason")?.value.trim();
    const mfa = document.getElementById("setting-change-mfa")?.checked;
    if (!setting || !proposedValue || !reason || !mfa) {
      document.getElementById("setting-change-error")?.classList.remove("hidden");
      return;
    }
    const oldVal = setting.value;
    const oldVersion = setting.version;
    setting.value = proposedValue;
    setting.version += 1;
    this.audit("SYSTEM_SETTING_VERSION_ACTIVATED", `Activated ${key} v${setting.version}. Reason: ${reason}`, "High", `v${oldVersion} ${oldVal} -> v${setting.version} ${setting.value}`);
    Notifications.push("Setting Activated", `${key} v${setting.version} is now active.`, "success");
    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("system-settings");
  },

  // Ping connection verification for Integrations
  pingProvider(key) {
    const prov = db.providers.find(p => p.key === key);
    if (!prov) return;

    prov.status = "Connected";
    prov.lastChecked = new Date().toISOString().replace("T", " ").slice(0, 19);

    // If Resend was degraded and got connected, maybe clear active incident!
    if (key === "resend") {
      const banner = document.getElementById("active-incident-banner");
      if (banner && !banner.classList.contains("hidden")) {
        // Incident resolved!
        banner.classList.add("hidden");
        this.audit("INCIDENT_RESOLVED", "Incident with Resend mailer latency marked as Resolved via API ping loop.", "Medium");
      }
    }

    this.audit("PROVIDER_HEALTH_PING", `Triggered automated integration health connection request to ${prov.name}.`, "Low");
    Notifications.push("Integration Check Passed", `Successfully connected to endpoint: ${prov.url}`, "success");

    Router.renderView("providers");
  },

  // Run data retention checks (Simulates database records cleanup!)
  runRetentionChecks() {
    Notifications.push("Retention Run Started", "Scanning system partitions for expired records...", "info");
    
    setTimeout(() => {
      // Simulate archiving database rows
      const targetRows = 2309;
      
      // Append row to Archive DB
      const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
      const purgeDate = new Date(Date.now() + 7 * 365 * 24 * 60 * 60 * 1000).toISOString().replace("T", " ").slice(0, 10) + " 00:00:00";
      
      const newArchive = {
        id: "arc_" + Math.floor(Math.random() * 9000 + 1000),
        sourceTable: "Security Logs Partition_" + new Date().toISOString().slice(2, 7).replace("-", ""),
        rows: targetRows,
        size: "244 KB",
        archivedDate: timestamp,
        purgeDate: purgeDate
      };
      
      db.archive.unshift(newArchive);
      
      this.audit("RETENTION_CLEANUP_RUN", `Retention daemon cleaned up ${targetRows} expired rows. Archived database partition created.`, "High", `Expired rows purged: ${targetRows}`);
      Notifications.push("Retention Check Completed", `Purged & archived ${targetRows} records successfully.`, "success");
      
      if (Router.currentRoute === "archive" || Router.currentRoute === "retention-policies") {
        Router.renderView(Router.currentRoute);
      }
      RenderEngine.dashboard();
    }, 1000);
  },

  // Correct Import Data (simulates validating file upload errors)
  correctImportData(batchId) {
    const imp = db.imports.find(i => i.batchId === batchId);
    if (!imp) return;

    const modal = document.getElementById("generic-modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");
    const footer = document.getElementById("modal-footer");

    title.textContent = `Review import mapping: ${batchId}`;
    body.innerHTML = `
      <div style="background:var(--error-container); color:var(--on-error-container); padding:12px; border-radius:6px; margin-bottom:16px; font-size:12px;">
        <strong>Validation Error:</strong> ${imp.errors}
      </div>
      <div class="form-group">
        <label for="import-data-payload">Field mapping correction</label>
        <textarea id="import-data-payload" class="form-control" rows="6" style="font-family:'Fira Code', monospace; font-size:11px;">source.region -> region_code
source.location_name -> display_name
source.external_id -> external_reference</textarea>
      </div>
    `;

    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveImportCorrection('${batchId}')">Save & Re-run Dry-run</button>
    `;

    modal.classList.remove("hidden");
  },

  saveImportCorrection(batchId) {
    const imp = db.imports.find(i => i.batchId === batchId);
    if (!imp) return;

    imp.status = "Dry-run Passed";
    imp.mode = "Dry-run only";
    imp.errors = "Schema, duplicate, and reference checks passed";

    this.audit("IMPORT_DRY_RUN_PASSED", `Mapping corrected and dry-run passed for ${batchId}.`, "Medium", "Dry-run Failed -> Dry-run Passed");
    Notifications.push("Dry-run Passed", `Batch ${batchId} is ready for approval; no records were written.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("imports");
    RenderEngine.dashboard();
  },

  retryImport(batchId) {
    Notifications.push("Dry-run Started", `Re-running non-writing validation for staged batch ${batchId}.`, "info");
  },

  approveImport(batchId) {
    const imp = db.imports.find(i => i.batchId === batchId);
    if (!imp || imp.status !== "Dry-run Passed") return;
    imp.status = "Completed";
    imp.mode = "Approved run";
    this.audit("IMPORT_APPROVED_AND_RUN", `Approved validated import batch ${batchId}.`, "High", "Dry-run Passed -> Completed");
    Notifications.push("Import Completed", `Approved batch ${batchId} was applied and audited.`, "success");
    Router.renderView("imports");
  },

  // Save custom role matrix permissions checklist
  saveRolePermissions() {
    const currentRole = RenderEngine.activeRoleMatrix;
    if (currentRole === "Platform Admin") return;

    const checkedScopes = [];
    document.querySelectorAll("#role-panel-permissions-grid input[type='checkbox']:checked").forEach(checkbox => {
      checkedScopes.push(checkbox.getAttribute("data-scope"));
    });

    const oldMapping = db.rolesPermissions[currentRole] || [];
    db.rolesPermissions[currentRole] = checkedScopes;
    const roleMeta = db.roleMetadata[currentRole];
    const activatedDraft = roleMeta?.status === "Draft" && checkedScopes.length > 0;
    if (activatedDraft) roleMeta.status = "Active";

    this.audit(activatedDraft ? "ROLE_TEMPLATE_ACTIVATED" : "ROLE_PERMISSIONS_UPDATED", `Modified permission mappings for role profile: ${currentRole}`, "High", `Permissions: ${oldMapping.length} -> ${checkedScopes.length}; state: ${activatedDraft ? 'Draft -> Active' : roleMeta?.status || 'Active'}`);
    Notifications.push(activatedDraft ? "Role Activated" : "Permissions Saved", `Role matrix for ${currentRole} successfully updated.`, "success");

    Router.renderView("roles-permissions");
  },

  // Resolve incident banner
  resolveIncident() {
    const banner = document.getElementById("active-incident-banner");
    if (banner) {
      banner.classList.add("hidden");
      this.audit("INCIDENT_RESOLVED", "Platform Admin marked Resend API latency incident resolved manually.", "Medium");
      Notifications.push("Incident Resolved", "Systems marked operational.", "success");
    }
  }
};

function oldRolePermissionsCount(role) {
  return db.rolesPermissions[role] ? db.rolesPermissions[role].length : 0;
}

// ============================================================================
// 5. SIMULATOR ACCESS RESOLUTION ENGINE
// ============================================================================

const Simulator = {
  activeRole: "platform_admin",

  init() {
    const selector = document.getElementById("role-simulator-select");
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get("role");
    const viewParam = urlParams.get("view");
    if (roleParam && selector) {
      selector.value = roleParam;
      this.setRole(roleParam, viewParam);
    } else if (viewParam) {
      Router.navigate(viewParam);
    }
    selector.addEventListener("change", () => {
      this.setRole(selector.value);
    });
    
    // Stop impersonating sidebar footer button
    document.getElementById("sidebar-stop-impersonate").addEventListener("click", () => {
      Actions.stopImpersonation();
    });
  },

  setRole(roleKey, targetRoute) {
    this.activeRole = roleKey;
    
    // Update active profile layout
    const adminName = document.getElementById("admin-display-name");
    const adminRoleLabel = document.getElementById("admin-display-role");
    
    const roleConfig = {
      platform_admin: { name: "Admin User", role: "Platform Admin" },
      operational_manager: { name: "Sarah Connor", role: "Operational Manager" },
      coo: { name: "Mara Khan", role: "Chief Operating Officer" },
      csr: { name: "Sarah Jenkins", role: "Customer Service & Sales Representative" },
      course_creator: { name: "Dr. Arsalan Khan", role: "Course Creator" },
      cto_developer: { name: "CTO / Developer", role: "Technical Director" },
      compliance_officer: { name: "Auditor Profile", role: "Compliance Officer" },
      support_agent: { name: "CSR Operator", role: "Support Representative" }
    };

    const details = roleConfig[roleKey] || roleConfig.platform_admin;
    const roleShellConfig = {
      platform_admin: { workspace: "Platform operations", shell: "PLATFORM OPERATIONS", title: "Dashboard Overview", greeting: "Good afternoon, Admin.", description: "Monitor platform reliability, governance, and access from one operational workspace.", action: "Review audit trail", actionRoute: "audit-logs", notifications: "System Notifications" },
      operational_manager: { workspace: "Operational management", shell: "OPERATIONAL MANAGEMENT", title: "Operations Command Center", greeting: "Good afternoon, Sarah.", description: "Coordinate trials, enrolments, live class delivery, trainer schedules, and manual payment verification.", action: "Review class delivery", actionRoute: "om-approval-queue", notifications: "Operations Notifications" },
      coo: { workspace: "Executive operations", shell: "EXECUTIVE OPERATIONS", title: "COO Operating Overview", greeting: "Good afternoon, Mara.", description: "Prioritize decisions, protect service delivery, and keep every business workflow moving.", action: "Open decision inbox", actionRoute: "coo-approvals", notifications: "Operating Notifications" },
      csr: { workspace: "Customer service & sales", shell: "SALES & CUSTOMER SERVICE", title: "CSR Command Center", greeting: "Good afternoon, Sarah.", description: "Assigned prospect management, trial qualification, follow-ups, and assisted conversion pipeline.", action: "View follow-ups due", actionRoute: "csr-followups-due", notifications: "Sales Notifications" },
      course_creator: { workspace: "Curriculum & course authoring", shell: "CURRICULUM & COURSE AUTHORING", title: "Authoring Command Center", greeting: "Good afternoon, Dr. Arsalan.", description: "Construct syllabus hierarchy, manage reusable question banks, learning rules, and submit versions for academic review.", action: "Review open feedback", actionRoute: "creator-review-comments", notifications: "Authoring Notifications" },
      cto_developer: { workspace: "Technical operations", shell: "TECHNICAL OPERATIONS", title: "Technical Operations Overview", greeting: "Good afternoon, Technical Director.", description: "Monitor integration health, queues, runtime status, releases, and recoverable technical exceptions.", action: "Open system status", actionRoute: "system-status", notifications: "Technical Notifications" },
      compliance_officer: { workspace: "Compliance oversight", shell: "COMPLIANCE OVERSIGHT", title: "Compliance Overview", greeting: "Good afternoon, Compliance Officer.", description: "Review high-risk governance events, retention controls, legal holds, and immutable audit history.", action: "Review audit trail", actionRoute: "audit-logs", notifications: "Governance Notifications" },
      support_agent: { workspace: "Support operations", shell: "SUPPORT OPERATIONS", title: "Support Operations Overview", greeting: "Good afternoon, Support Representative.", description: "Resolve account and onboarding issues through approved, time-limited support workflows.", action: "Open support access", actionRoute: "support-access", notifications: "Support Notifications" }
    };
    const shell = roleShellConfig[roleKey] || roleShellConfig.platform_admin;
    if (adminName) adminName.textContent = details.name;
    if (adminRoleLabel) adminRoleLabel.textContent = details.role;

    // Save state
    db.currentUser.name = details.name;
    db.currentUser.role = details.role;
    db.currentUser.roleKey = roleKey;

    const isCoo = roleKey === "coo";
    const isOm = roleKey === "operational_manager";
    const isCsr = roleKey === "csr";
    const isCreator = roleKey === "course_creator";
    const appShell = document.querySelector(".admin-container");
    if (appShell) {
      appShell.classList.toggle("role-coo", isCoo);
      appShell.classList.toggle("role-om", isOm);
      appShell.classList.toggle("role-csr", isCsr);
      appShell.classList.toggle("role-course_creator", isCreator);
      appShell.dataset.activeRole = roleKey;
    }

    document.getElementById("platform-admin-nav")?.classList.toggle("hidden", isCoo || isOm || isCsr || isCreator);
    document.getElementById("coo-nav")?.classList.toggle("hidden", !isCoo);
    document.getElementById("om-nav")?.classList.toggle("hidden", !isOm);
    document.getElementById("csr-nav")?.classList.toggle("hidden", !isCsr);
    document.getElementById("creator-nav")?.classList.toggle("hidden", !isCreator);

    document.getElementById("platform-dashboard-shell")?.classList.toggle("hidden", isCoo || isOm || isCsr || isCreator);
    document.getElementById("coo-dashboard-shell")?.classList.toggle("hidden", !isCoo);
    document.getElementById("om-dashboard-shell")?.classList.toggle("hidden", !isOm);
    document.getElementById("csr-dashboard-shell")?.classList.toggle("hidden", !isCsr);
    document.getElementById("creator-dashboard-shell")?.classList.toggle("hidden", !isCreator);

    const shellLabel = document.getElementById("shell-label");
    if (shellLabel) shellLabel.textContent = shell.shell;
    const wsLabel = document.getElementById("workspace-label");
    if (wsLabel) wsLabel.textContent = shell.workspace;
    const notifTitle = document.getElementById("notification-title");
    if (notifTitle) notifTitle.textContent = shell.notifications;
    const platGreeting = document.getElementById("platform-dashboard-greeting");
    if (platGreeting) platGreeting.textContent = shell.greeting;
    const platDesc = document.getElementById("platform-dashboard-description");
    if (platDesc) platDesc.textContent = shell.description;
    const platAction = document.getElementById("platform-dashboard-action-label");
    if (platAction) platAction.textContent = shell.action;
    const auditBtn = document.getElementById("dashboard-review-audit");
    if (auditBtn) auditBtn.dataset.routeShortcut = shell.actionRoute;
    
    const searchInput = document.getElementById("nav-search-input");
    if (searchInput) {
      searchInput.placeholder = isCreator ? "Find course / syllabus module" : (isCsr ? "Find sales / lead module" : (isOm ? "Find operations module" : (isCoo ? "Find an operating area" : "Find a module")));
    }
    
    const avatar = document.getElementById("admin-avatar");
    if (avatar) {
      avatar.textContent = isCreator ? "AK" : (isCsr ? "SJ" : (isOm ? "SC" : (isCoo ? "MK" : details.name.split(/\s+/).map(part => part[0]).join("").slice(0, 2).toUpperCase())));
    }
    document.title = `IHS 2.0 ${details.role} Console`;

    if (isOm) updateOmBadges();
    if (isCsr) RenderEngine.csrDashboard();
    if (isCreator) RenderEngine.creatorDashboard();

    // Apply security limits on sidebar & dashboard
    this.applySecurityLocks(roleKey);
    
    // Redirect to target route or dashboard on role swap to refresh layout
    Router.navigate(targetRoute || "dashboard");
    
    // Notify
    Notifications.push("Simulator Session Swapped", `Logged in user context resolved to ${details.role}. Permissions updated.`, "info");
  },

    applySecurityLocks(roleKey) {
    // Hide or disable sidebar items based on role keys
    // Platform Admin -> sees everything
    // COO -> receives a separate business operations shell and never inherits this admin navigation.
    // CTO -> Sees Configuration, Integrations, Jobs, Status, Release Controls. User/Access & Data Lifecycle are blocked.
    // Auditor -> Sees Configuration, Audit Logs, Data Lifecycle. Jobs, Integrations, Support Access are blocked.
    // Support -> Sees Users, Invitations, Support Access. Settings, Jobs, Integrations, Lifecycle are blocked.

    const sidebarSections = {
      // User & Access
      "users": ["platform_admin", "support_agent"],
      "invitations": ["platform_admin", "support_agent"],
      "security-sessions": ["platform_admin"],
      "roles-permissions": ["platform_admin"],
      // Configuration
      "reference-data": ["platform_admin", "cto_developer", "compliance_officer"],
      "system-settings": ["platform_admin", "cto_developer"],
      "business-rules": ["platform_admin", "cto_developer"],
      // Integrations
      "providers": ["platform_admin", "cto_developer"],
      "webhooks": ["platform_admin", "cto_developer"],
      "integration-health": ["platform_admin", "cto_developer"],
      // Jobs & Exceptions
      "queue-jobs": ["platform_admin", "cto_developer"],
      "failed-jobs": ["platform_admin", "cto_developer"],
      "dead-letters": ["platform_admin", "cto_developer"],
      "integration-exceptions": ["platform_admin", "cto_developer"],
      // Data Operations
      "imports": ["platform_admin", "cto_developer", "support_agent"],
      "exports": ["platform_admin", "support_agent"],
      // Controls
      "feature-flags": ["platform_admin", "cto_developer"],
      "audit-logs": ["platform_admin", "compliance_officer"],
      "system-status": ["platform_admin", "cto_developer"],
      // Data Lifecycle
      "retention-policies": ["platform_admin", "compliance_officer"],
      "archive": ["platform_admin", "compliance_officer"],
      "legal-holds": ["platform_admin", "compliance_officer"],
      "privacy-requests": ["platform_admin", "compliance_officer"],
      // Support
      "support-access": ["platform_admin", "support_agent"]
    };

    // Evaluate sidebar items
    Object.keys(sidebarSections).forEach(route => {
      const el = document.getElementById(`nav-${route}`);
      if (el) {
        const allowedRoles = sidebarSections[route];
        if (allowedRoles.includes(roleKey)) {
          el.style.removeProperty("display");
        } else {
          el.style.display = "none";
        }
      }
    });

    document.querySelectorAll("#platform-admin-nav .nav-group").forEach(group => {
      const hasAllowedItem = Array.from(group.querySelectorAll(".nav-item")).some(item => item.style.display !== "none");
      group.style.display = hasAllowedItem ? "" : "none";
    });

    // Evaluate dashboard cards visibility
    // System Health -> visible to Platform Admin, CTO, Auditor
    // Queue Health -> visible to Platform Admin, CTO
    // Webhooks -> visible to Platform Admin, CTO
    // Data operations -> visible to Platform Admin, Support, CTO
    // Security -> visible to Platform Admin, Auditor
    // Feature flags -> visible to Platform Admin, CTO
    // Recent Audits -> visible to Platform Admin, Auditor
    
    const dashboardCards = {
      "widget-system-health": ["platform_admin", "cto_developer", "compliance_officer"],
      "widget-queue-health": ["platform_admin", "cto_developer"],
      "widget-webhooks": ["platform_admin", "cto_developer"],
      "widget-data-freshness": ["platform_admin", "cto_developer", "support_agent"],
      "widget-security": ["platform_admin", "compliance_officer"],
      "widget-release-controls": ["platform_admin", "cto_developer"],
      "widget-recent-audits": ["platform_admin", "compliance_officer"],
      "widget-quick-actions": ["platform_admin"],
      "active-incident-banner": ["platform_admin", "cto_developer"]
    };

    Object.keys(dashboardCards).forEach(cardId => {
      const el = document.getElementById(cardId);
      if (el) {
        const allowedRoles = dashboardCards[cardId];
        if (allowedRoles.includes(roleKey)) {
          el.style.removeProperty("display");
        } else {
          el.style.display = "none";
        }
      }
    });
  }
};

// ============================================================================
// 6. SYSTEM ALERTS & TOAST NOTIFICATION ENGINE
// ============================================================================

const Notifications = {
  list: [],

  init() {
    const btn = document.getElementById("notification-btn");
    const dropdown = document.getElementById("notification-dropdown");
    const clearBtn = document.getElementById("clear-notifications");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
      
      // Hide red pulse count when opened
      document.getElementById("notification-count").classList.add("hidden");
    });

    document.addEventListener("click", () => {
      dropdown.classList.add("hidden");
    });

    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    clearBtn.addEventListener("click", () => {
      this.list = [];
      this.render();
    });
  },

  push(title, description, type = "info") {
    const timestamp = new Date().toLocaleTimeString();
    this.list.unshift({ title, description, type, time: timestamp, unread: true });
    
    // Flash badge
    const badge = document.getElementById("notification-count");
    const unreadCount = this.list.filter(n => n.unread).length;
    
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.classList.remove("hidden");
    }

    this.render();
  },

  render() {
    const container = document.getElementById("notification-list");
    container.innerHTML = "";

    if (this.list.length === 0) {
      container.innerHTML = `<div class="no-notifications">No active alerts.</div>`;
      return;
    }

    this.list.forEach(n => {
      const item = document.createElement("div");
      item.className = `notification-item ${n.unread ? 'unread' : ''}`;
      item.innerHTML = `
        <div class="notification-item-title">${n.title}</div>
        <div class="notification-item-desc" style="color:var(--slate); margin-bottom:2px;">${n.description}</div>
        <div class="notification-item-time">${n.time}</div>
      `;
      item.addEventListener("click", () => {
        n.unread = false;
        this.render();
      });
      container.appendChild(item);
    });
  }
};

// ============================================================================
// 7. TIME FRESHNESS CONTROLLER
// ============================================================================

let freshnessSeconds = 0;

function startFreshnessCounter() {
  setInterval(() => {
    freshnessSeconds++;
    updateFreshnessText();
  }, 1000);
}

function updateFreshnessText() {
  const el = document.getElementById("freshness-text");
  if (freshnessSeconds === 0) {
    el.textContent = "Data fresh (Just now)";
  } else {
    el.textContent = `Data fresh (${freshnessSeconds}s ago)`;
  }
}

// ============================================================================
// 8. EVENT LISTENER ATTACHMENTS (BOOTSTRAP)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Init core components
  Router.init();
  Simulator.init();
  Notifications.init();

  const requestedRole = new URLSearchParams(window.location.search).get("role");
  const roleSelector = document.getElementById("role-simulator-select");
  const hasRequestedRole = Array.from(roleSelector?.options || []).some(option => option.value === requestedRole);
  if (requestedRole && hasRequestedRole) {
    roleSelector.value = requestedRole;
    Simulator.setRole(requestedRole);
  }
  
  // Render the requested workspace when a view query is present; otherwise open Dashboard.
  const requestedView = new URLSearchParams(window.location.search).get("view");
  const validRequestedView = requestedView && (document.getElementById(`view-${requestedView}`) || (Simulator.activeRole === "coo" && cooRouteDefinitions[requestedView]) || (Simulator.activeRole === "operational_manager" && omRouteDefinitions[requestedView]) || (Simulator.activeRole === "csr" && csrRouteDefinitions[requestedView]) || (Simulator.activeRole === "course_creator" && creatorRouteDefinitions[requestedView]));
  Router.navigate(validRequestedView ? requestedView : "dashboard");

  // Start freshness time tracking
  startFreshnessCounter();

  // Attach search filters listeners dynamically
  document.getElementById("users-search").addEventListener("input", () => RenderEngine.users());
  document.getElementById("users-role-filter").addEventListener("change", () => RenderEngine.users());
  document.getElementById("users-status-filter").addEventListener("change", () => RenderEngine.users());
  
  document.getElementById("invitations-search").addEventListener("input", () => RenderEngine.invitations());
  
  document.getElementById("ref-data-category-select").addEventListener("change", () => RenderEngine.referenceData());
  
  document.getElementById("webhook-logs-search").addEventListener("input", () => RenderEngine.webhooks());
  document.getElementById("webhook-logs-status").addEventListener("change", () => {
    // Reset router filters and render
    Router.filters.status = "";
    RenderEngine.webhooks();
  });

  document.getElementById("queue-jobs-search").addEventListener("input", () => RenderEngine.queueJobs());
  document.getElementById("queue-jobs-status").addEventListener("change", () => RenderEngine.queueJobs());

  document.getElementById("imports-search").addEventListener("input", () => RenderEngine.imports());
  
  document.getElementById("archive-search").addEventListener("input", () => RenderEngine.archive());

  document.getElementById("audit-logs-search").addEventListener("input", () => RenderEngine.auditLogs());
  document.getElementById("audit-logs-module").addEventListener("change", () => RenderEngine.auditLogs());

  // Incident resolution action
  document.getElementById("resolve-incident-btn").addEventListener("click", () => Actions.resolveIncident());

  // Save Matrix Permissions button
  document.getElementById("btn-save-role-permissions").addEventListener("click", () => Actions.saveRolePermissions());
  document.getElementById("btn-create-role").addEventListener("click", () => Actions.createRoleTemplate());
  document.getElementById("btn-assign-role").addEventListener("click", () => Actions.openRoleAssignment());

  // Quick Action triggers
  document.getElementById("qa-flush-deadletters").addEventListener("click", () => Actions.flushDeadLetters());
  document.getElementById("qa-trigger-backup").addEventListener("click", () => {
    Notifications.push("Ledger Backup Run", "Supabase DB Core operational backup synchronized successfully.", "success");
    Actions.audit("BACKUP_COMPLETED", "Manual backup replication run finished.", "Medium");
    freshnessSeconds = 0;
    updateFreshnessText();
  });
  document.getElementById("qa-force-retention").addEventListener("click", () => Actions.runRetentionChecks());
  document.getElementById("qa-clear-cache").addEventListener("click", () => {
    Notifications.push("Cache Evicted", "Successfully flushed Edge Node translation caches (12 objects).", "success");
    Actions.audit("CACHE_EVICTED", "Platform edge cache cleared manually.", "Low");
  });
  document.getElementById("qa-impersonate-toggle").addEventListener("click", () => Router.navigate("support-access"));

  // Support page launch controls
  document.getElementById("btn-start-impersonation").addEventListener("click", () => Actions.startImpersonation());
  document.getElementById("btn-stop-impersonation").addEventListener("click", () => Actions.stopImpersonation());
  document.getElementById("sidebar-stop-impersonate").addEventListener("click", () => Actions.stopImpersonation());

  // Bulk buttons
  document.getElementById("btn-flush-deadletters").addEventListener("click", () => Actions.flushDeadLetters());
  document.getElementById("btn-retry-all-failed").addEventListener("click", () => {
    const failed = db.jobs.filter(j => j.status === "Failed");
    failed.forEach(j => {
      j.status = "Queued";
      j.attempts = 0;
      j.errorMsg = null;
    });
    Actions.audit("JOBS_FAILED_FLUSHED", `Re-queued ${failed.length} failed jobs.`, "Medium", "Failed -> Queued");
    Notifications.push("Jobs Flushed", `Re-queued ${failed.length} background jobs.`, "success");
    Router.renderView("failed-jobs");
    RenderEngine.dashboard();
  });
  document.getElementById("btn-clear-deadletters").addEventListener("click", () => {
    const count = db.jobs.filter(j => j.status === "Dead-letter").length;
    db.jobs = db.jobs.filter(j => j.status !== "Dead-letter");
    Actions.audit("DEAD_LETTERS_CLEARED", `Permanently dropped ${count} dead-letter queue records.`, "High");
    Notifications.push("Dead Letters Emptied", `Removed ${count} failed jobs from schema logs.`, "warning");
    Router.renderView("dead-letters");
    RenderEngine.dashboard();
  });

  // Modal controls
  document.getElementById("modal-close").addEventListener("click", () => {
    db.cooApprovals.filter(item => item.claimedBy === db.currentUser.name && item.status === "Pending").forEach(item => delete item.claimedBy);
    document.getElementById("generic-modal").classList.add("hidden");
  });

  // Add Item Modals placeholder triggers
  document.getElementById("btn-add-user").addEventListener("click", () => {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create New Account Profile";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-user-name">Full Name</label>
        <input type="text" id="new-user-name" class="form-control" placeholder="e.g. John Connor">
      </div>
      <div class="form-group">
        <label for="new-user-email">Email Address</label>
        <input type="email" id="new-user-email" class="form-control" placeholder="e.g. john@resistance.net">
      </div>
      <div class="form-group">
        <label for="new-user-role">Assigned Platform Role</label>
        <select id="new-user-role" class="form-control">
          <option value="Trainer">Trainer</option>
          <option value="Learner">Learner</option>
          <option value="Operations">Operations</option>
          <option value="Platform Admin">Platform Admin</option>
        </select>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createUser()">Create Account</button>
    `;
    modal.classList.remove("hidden");
  });

  document.getElementById("btn-create-invite").addEventListener("click", () => {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create Outbound Platform Invitation";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-invite-email">Recipient Email Address</label>
        <input type="email" id="new-invite-email" class="form-control" placeholder="e.g. recruit@resistance.net">
      </div>
      <div class="form-group">
        <label for="new-invite-role">Invited Role Access</label>
        <select id="new-invite-role" class="form-control">
          <option value="Trainer">Trainer</option>
          <option value="Learner">Learner</option>
          <option value="Operations">Operations</option>
        </select>
      </div>
      <div class="form-group">
        <label for="new-invite-scope">Proposed Permission Scope</label>
        <select id="new-invite-scope" class="form-control"><option>Course</option><option>Department</option><option>Organization</option><option>Assigned record</option></select>
      </div>
      <label class="confirmation-check"><input id="new-invite-mfa" type="checkbox" checked> Require MFA before scoped permissions activate.</label>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createInvite()">Send Invitation Link</button>
    `;
    modal.classList.remove("hidden");
  });

  // Actions implementations for modals
  Actions.createUser = function() {
    const name = document.getElementById("new-user-name").value.trim();
    const email = document.getElementById("new-user-email").value.trim();
    const role = document.getElementById("new-user-role").value;

    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const newUser = {
      id: "usr_" + (100 + db.users.length + 1),
      personId: "per_" + (4100 + db.users.length + 1),
      name,
      email,
      role,
      scope: role === "Learner" ? "Own enrolments" : "Pending assignment",
      userType: role === "Learner" ? "Learner" : "Staff",
      identities: ["Email verification pending"],
      mfa: role === "Learner" ? "Not required" : "Pending",
      securityEvents: 0,
      status: "Pending Verification",
      lastLogin: "Never"
    };

    db.users.push(newUser);
    this.audit("USER_ACCOUNT_CREATED", `Created new profile for ${email} with role ${role}`, "Medium", `User: ${name}`);
    Notifications.push("Account Created", `Account for ${name} has been added.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("users");
  };

  Actions.createInvite = function() {
    const email = document.getElementById("new-invite-email").value.trim();
    const role = document.getElementById("new-invite-role").value;
    const scope = document.getElementById("new-invite-scope").value;
    const mfaRequired = document.getElementById("new-invite-mfa").checked;

    if (!email) {
      alert("Please fill in email.");
      return;
    }

    const newInvite = {
      id: "inv_" + (200 + db.invitations.length + 1),
      email,
      role,
      scope,
      onboarding: "Pending identity verification",
      mfa: mfaRequired ? "Required" : "Not required",
      createdBy: db.currentUser.name,
      sentDate: new Date().toISOString().replace("T", " ").slice(0, 19),
      status: "Sent"
    };

    db.invitations.push(newInvite);
    this.audit("INVITATION_SENT", `Sent outbound invitation link to ${email} for role ${role}`, "Low", `Recipient: ${email}`);
    Notifications.push("Invitation Dispatched", `Sent invitation to ${email}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("invitations");
  };

  Actions.resendInvite = function(inviteId) {
    const invite = db.invitations.find(item => item.id === inviteId);
    if (!invite || invite.status === "Accepted") return;
    const previous = invite.status;
    invite.status = "Sent";
    invite.sentDate = new Date().toISOString().replace("T", " ").slice(0, 19);
    invite.onboarding = "Pending identity verification";
    this.audit("INVITATION_REISSUED", `Invitation reissued to ${invite.email}`, "Medium", `${previous} -> Sent`);
    Notifications.push("Invitation Reissued", `A new invitation was sent to ${invite.email}.`, "success");
    Router.renderView("invitations");
  };

  Actions.revokeInvite = function(inviteId) {
    const invite = db.invitations.find(item => item.id === inviteId);
    if (!invite || invite.status !== "Sent") return;
    invite.status = "Revoked";
    invite.onboarding = "Access proposal withdrawn";
    this.audit("INVITATION_REVOKED", `Invitation revoked for ${invite.email}`, "High", "Sent -> Revoked");
    Notifications.push("Invitation Revoked", `Pending access for ${invite.email} was withdrawn.`, "warning");
    Router.renderView("invitations");
  };

  // Add reference data entry modal
  document.getElementById("btn-add-ref-data").addEventListener("click", () => {
    const category = document.getElementById("ref-data-category-select").value;
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Add Reference Entry: ${category}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-ref-code">Entry Code / Key</label>
        <input type="text" id="new-ref-code" class="form-control" placeholder="e.g. HUB-SFO">
      </div>
      <div class="form-group">
        <label for="new-ref-value">Value / Label</label>
        <input type="text" id="new-ref-value" class="form-control" placeholder="e.g. San Francisco Area Hub">
      </div>
      <div class="form-group">
        <label for="new-ref-desc">Description</label>
        <input type="text" id="new-ref-desc" class="form-control" placeholder="Operational bounds description">
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createReferenceEntry('${category}')">Save Entry</button>
    `;
    modal.classList.remove("hidden");
  });

  Actions.createReferenceEntry = function(category) {
    const code = document.getElementById("new-ref-code").value.trim().toUpperCase();
    const value = document.getElementById("new-ref-value").value.trim();
    const description = document.getElementById("new-ref-desc").value.trim();

    if (!code || !value) return;

    const newEntry = { code, value, description, restricted: false, active: true };
    db.referenceData[category].push(newEntry);

    this.audit("REF_DATA_ADDED", `Added key ${code} to category ${category}`, "Low", `Entry: ${value}`);
    Notifications.push("Entry Saved", `Saved ${value} to ${category}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("reference-data");
  };

  Actions.deleteReferenceEntry = function(category, code) {
    const index = db.referenceData[category].findIndex(e => e.code === code);
    if (index !== -1) {
      const entry = db.referenceData[category][index];
      const oldState = entry.active === false ? "Inactive" : "Active";
      entry.active = entry.active === false;
      this.audit("REF_DATA_STATE_CHANGED", `${entry.active ? 'Activated' : 'Deactivated'} key ${code} in category ${category}; historical references remain intact.`, "Medium", `${oldState} -> ${entry.active ? 'Active' : 'Inactive'}`);
      Router.renderView("reference-data");
    }
  };

  // Add custom Feature Flag modal
  document.getElementById("btn-add-flag").addEventListener("click", () => {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Add Feature Flag Controller";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-flag-key">Flag Identifier Key</label>
        <input type="text" id="new-flag-key" class="form-control" placeholder="e.g. guided-onboarding-v3">
      </div>
      <div class="form-group">
        <label for="new-flag-desc">Flag Description & Purpose</label>
        <input type="text" id="new-flag-desc" class="form-control" placeholder="Description of code branches controlled">
      </div>
      <div class="form-group">
        <label for="new-flag-module">Module Owner</label>
        <select id="new-flag-module" class="form-control">
          <option value="ADM">ADM (Admin)</option>
          <option value="IAM">IAM (Identity)</option>
          <option value="FIN">FIN (Finance)</option>
          <option value="LIVE">LIVE (Class Delivery)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="new-flag-audience">Target Audiences</label>
        <input type="text" id="new-flag-audience" class="form-control" value="Internal Development & QA">
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createFeatureFlag()">Save Flag</button>
    `;
    modal.classList.remove("hidden");
  });

  Actions.createFeatureFlag = function() {
    const key = document.getElementById("new-flag-key").value.trim().toLowerCase();
    const description = document.getElementById("new-flag-desc").value.trim();
    const module = document.getElementById("new-flag-module").value;
    const targetAudiences = document.getElementById("new-flag-audience").value.trim();

    if (!key || !description) return;

    const newFlag = { key, description, module, lifecycle: "Draft", globalStatus: false, targetAudiences };
    db.featureFlags.push(newFlag);

    this.audit("FLAG_CREATED", `Added feature flag key: ${key}`, "Medium", `Flag: ${key}`);
    Notifications.push("Flag Saved", `Feature Flag ${key} successfully registered.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("feature-flags");
    RenderEngine.dashboard();
  };

  // Add GDPR Retention Policy modal
  document.getElementById("btn-add-retention").addEventListener("click", () => {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Add Data Retention Policy Mapping";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-ret-module">Database Table / Module Category</label>
        <input type="text" id="new-ret-module" class="form-control" placeholder="e.g. HR Paystub Records">
      </div>
      <div class="form-group">
        <label for="new-ret-period">Retention Period Limit</label>
        <input type="text" id="new-ret-period" class="form-control" placeholder="e.g. 5 Years">
      </div>
      <div class="form-group">
        <label for="new-ret-action">Exceed Limit Action</label>
        <select id="new-ret-action" class="form-control">
          <option value="Purge">Purge (Permanent Delete)</option>
          <option value="Archive & Partition Move">Archive & Partition Move</option>
          <option value="Anonymize Profile">Anonymize Profile Fields</option>
        </select>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createRetentionPolicy()">Save Policy</button>
    `;
    modal.classList.remove("hidden");
  });

  Actions.createRetentionPolicy = function() {
    const module = document.getElementById("new-ret-module").value.trim();
    const period = document.getElementById("new-ret-period").value.trim();
    const action = document.getElementById("new-ret-action").value;

    if (!module || !period) return;

    const newPol = { module, period, action, legalHolds: "0 active", enabled: true };
    db.retentionPolicies.push(newPol);

    this.audit("RETENTION_POLICY_ADDED", `Created retention policy for ${module}`, "Medium", `Retention: ${period} -> ${action}`);
    Notifications.push("Policy Saved", `Saved retention policy mapping for ${module}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("retention-policies");
  };

  Actions.toggleRetentionPolicy = function(module, isEnabled) {
    const pol = db.retentionPolicies.find(p => p.module === module);
    if (!pol) return;

    const oldVal = pol.enabled;
    pol.enabled = isEnabled;

    this.audit("RETENTION_POLICY_TOGGLED", `Toggled retention policy for ${pol.module}`, "Medium", `Enabled: ${oldVal} -> ${isEnabled}`);
    Notifications.push("Retention Updated", `Policy for ${pol.module} is now ${isEnabled ? 'Enabled' : 'Disabled'}.`, "info");
  };

  // Add Legal Hold modal
  document.getElementById("btn-new-hold").addEventListener("click", () => {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create Litigation/Legal Hold Override";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-hold-code">Hold Identifier Code</label>
        <input type="text" id="new-hold-code" class="form-control" placeholder="e.g. HOLD-SEC-DISP">
      </div>
      <div class="form-group">
        <label for="new-hold-name">Litigation Description & Reason</label>
        <input type="text" id="new-hold-name" class="form-control" placeholder="Description of legal hold reason">
      </div>
      <div class="form-group">
        <label for="new-hold-targets">Target Database Rows / Profiles</label>
        <input type="text" id="new-hold-targets" class="form-control" placeholder="e.g. Trainer usr_104 & timesheets">
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createLegalHold()">Place Hold</button>
    `;
    modal.classList.remove("hidden");
  });

  Actions.createLegalHold = function() {
    const code = document.getElementById("new-hold-code").value.trim().toUpperCase();
    const name = document.getElementById("new-hold-name").value.trim();
    const targets = document.getElementById("new-hold-targets").value.trim();

    if (!code || !name || !targets) return;

    const newHold = {
      holdCode: code,
      name,
      targets,
      createdBy: db.currentUser.name,
      placedDate: new Date().toISOString().replace("T", " ").slice(0, 19),
      status: "Active"
    };

    db.legalHolds.push(newHold);

    // Increment active hold count in audit policy
    db.retentionPolicies.forEach(p => {
      if (p.module.includes("IAM") || p.module.includes("Security")) {
        p.legalHolds = parseInt(p.legalHolds) + 1 + " active";
      }
    });

    this.audit("LEGAL_HOLD_PLACED", `Placed legal hold override: ${code}`, "High", `Reason: ${name}`);
    Notifications.push("Legal Hold Placed", `Litigation hold override ${code} is now active. Automatic purge processes bypassed.`, "error");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("legal-holds");
  };

  Actions.releaseLegalHold = function(code) {
    const hold = db.legalHolds.find(h => h.holdCode === code);
    if (!hold) return;

    hold.status = "Released";
    
    // Decrement active hold count in audit policy
    db.retentionPolicies.forEach(p => {
      if (p.module.includes("IAM") || p.module.includes("Security")) {
        const val = Math.max(0, parseInt(p.legalHolds) - 1);
        p.legalHolds = val + " active";
      }
    });

    this.audit("LEGAL_HOLD_RELEASED", `Released litigation hold override: ${code}`, "High", "Status: Active -> Released");
    Notifications.push("Legal Hold Released", `Override ${code} has been cleared. Tables returned to standard retention cycles.`, "success");

    Router.renderView("legal-holds");
  };

  // GDPR privacy requests approval
  Actions.approvePrivacyRequest = function(reqId) {
    const req = db.privacyRequests.find(p => p.requestId === reqId);
    if (!req) return;

    req.status = "Completed";
    this.audit("PRIVACY_REQUEST_COMPLETED", `GDPR request approved and executed: ${req.requestType} for ${req.requester}`, "High", "Status: Pending -> Completed");
    Notifications.push("Privacy Request Executed", `Erasure/Access request completed for ${req.requester}.`, "success");

    Router.renderView("privacy-requests");
  };

  Actions.rejectPrivacyRequest = function(reqId) {
    const req = db.privacyRequests.find(p => p.requestId === reqId);
    if (!req) return;

    req.status = "Rejected";
    this.audit("PRIVACY_REQUEST_REJECTED", `GDPR request rejected for validation failure: ${req.requester}`, "Medium", "Status: Pending -> Rejected");
    Notifications.push("Privacy Request Rejected", `Rejected privacy claim for ${req.requester}.`, "warning");

    Router.renderView("privacy-requests");
  };

  // Restore table from partition archive
  Actions.restoreArchive = function(arcId) {
    const arc = db.archive.find(a => a.id === arcId);
    if (!arc) return;

    this.audit("ARCHIVE_RESTORED", `Restored archived database partition table: ${arc.sourceTable}`, "High");
    Notifications.push("Partition Restored", `Table ${arc.sourceTable} is now active in database schema.`, "success");
  };

  // Add item triggers
  document.getElementById("btn-new-import").addEventListener("click", () => {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Staging Import Upload";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="new-imp-type">Upload File Schema Type</label>
        <select id="new-imp-type" class="form-control">
          <option value="Bulk Account Roster CSV">Bulk Account Roster CSV</option>
          <option value="Role Assignment CSV">Role Assignment CSV</option>
          <option value="Reference Hub Locations JSON">Reference Hub Locations JSON</option>
        </select>
      </div>
      <div class="form-group">
        <label for="new-imp-file">Select File</label>
        <input type="file" id="new-imp-file" class="form-control">
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createImportBatch()">Stage File Upload</button>
    `;
    modal.classList.remove("hidden");
  });

  Actions.createImportBatch = function() {
    const type = document.getElementById("new-imp-type").value;
    const file = document.getElementById("new-imp-file").files[0];
    
    const filename = file ? file.name : "staged_dataset.csv";
    
    const status = "Dry-run Passed";
    const errors = "Schema, duplicate, and reference checks passed";

    const newImp = {
      batchId: "imp_" + (700 + db.imports.length + 1),
      checksum: `sha256:${Math.random().toString(16).slice(2, 6)}…${Math.random().toString(16).slice(2, 6)}`,
      importType: type + ` (${filename})`,
      rowsCount: Math.floor(Math.random() * 100 + 10),
      mode: "Dry-run only",
      status,
      errors,
      uploadedAt: new Date().toISOString().replace("T", " ").slice(0, 19)
    };

    db.imports.unshift(newImp);
    
    this.audit("IMPORT_DRY_RUN_PASSED", `Non-writing validation passed for ${filename}.`, "Medium", `Validated rows: ${newImp.rowsCount}`);
    Notifications.push("Dry-run Passed", `Schema checks passed. Approve the batch before any records are written.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("imports");
    RenderEngine.dashboard();
  };

  // Modify rule threshold modal
  Actions.editBusinessRule = function(ruleId) {
    const rule = db.businessRules.find(r => r.id === ruleId);
    if (!rule) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Configure Threshold: ${rule.name}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="rule-val-input">Rule Definition / Threshold Expression</label>
        <textarea id="rule-val-input" class="form-control" rows="4">${rule.rule}</textarea>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveBusinessRule('${rule.id}')">Save Changes</button>
    `;
    modal.classList.remove("hidden");
  };

  Actions.saveBusinessRule = function(ruleId) {
    const rule = db.businessRules.find(r => r.id === ruleId);
    const text = document.getElementById("rule-val-input").value.trim();
    if (!rule || !text) return;

    const oldText = rule.rule;
    rule.rule = text;

    this.audit("BUSINESS_RULE_MODIFIED", `Business rule '${rule.name}' threshold logic edited.`, "Medium", `${oldText} -> ${text}`);
    Notifications.push("Rule Threshold Saved", `Updated rule constraints for ${rule.name}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("business-rules");
  };

  // Cron trigger ping
  document.getElementById("btn-trigger-cron").addEventListener("click", () => {
    Notifications.push("Cron Runner Triggered", "Executing scheduled checks (Data Retention, Active Invites, System Heartbeats)...", "info");
    
    // Simulate finding a job and running it!
    setTimeout(() => {
      const queuedJobs = db.jobs.filter(j => j.status === "Queued");
      if (queuedJobs.length > 0) {
        queuedJobs.forEach(j => {
          j.status = "Succeeded";
        });
        Actions.audit("CRON_EXECUTION_COMPLETED", `Cron runner triggered execution of ${queuedJobs.length} active background tasks.`, "Medium", "Queued -> Succeeded");
        Notifications.push("Cron Runner Successful", `Completed background tasks: ${queuedJobs.map(j => j.taskName).join(', ')}`, "success");
      } else {
        Actions.audit("CRON_EXECUTION_IDLE", "Cron run idle. Zero queued tasks scheduled.", "Low");
        Notifications.push("Cron Idle", "All scheduled tasks are up-to-date.", "info");
      }
      
      Router.renderView(Router.currentRoute);
      RenderEngine.dashboard();
    }, 800);
  });

  // Edit Retention period modal
  Actions.editRetention = function(module) {
    const pol = db.retentionPolicies.find(p => p.module === module);
    if (!pol) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Edit Retention: ${pol.module}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label for="ret-period-input">Retention Limit Duration</label>
        <input type="text" id="ret-period-input" class="form-control" value="${pol.period}">
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveRetention('${pol.module}')">Save Policy</button>
    `;
    modal.classList.remove("hidden");
  };

  Actions.saveRetention = function(module) {
    const pol = db.retentionPolicies.find(p => p.module === module);
    const input = document.getElementById("ret-period-input").value.trim();
    if (!pol || !input) return;

    const oldPeriod = pol.period;
    pol.period = input;

    this.audit("RETENTION_LIMIT_CHANGED", `Retention period changed for ${pol.module}`, "Medium", `Retention: ${oldPeriod} -> ${input}`);
    Notifications.push("Policy Period Updated", `Successfully adjusted retention limit to ${input}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView("retention-policies");
  };


  // ==========================================================================
  // CSR (CUSTOMER SERVICE & SALES) INTERACTIVE WORKFLOW ACTIONS
  // ==========================================================================

  Actions.openCsrLead = function(id) {
    const lead = db.csrData.leads.find(l => l.id === id);
    if (!lead) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Prospect Record: ${lead.name} (${lead.id})`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="user-check"></i>
          <div>
            <strong>LEAD PROFILE & INTAKE STATE</strong>
            <p>Lead ≠ Learner Account. Contact history and qualification audit remain permanently preserved.</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Prospect Name</span><strong>${lead.name}</strong><small>${lead.email}</small></div>
          <div class="om-flow-metric"><span>Contact Number</span><strong>${lead.contact}</strong><small>WhatsApp active</small></div>
          <div class="om-flow-metric"><span>Programme Interest</span><strong>${lead.programme}</strong><small>Expected: ${lead.expectedValue}</small></div>
          <div class="om-flow-metric"><span>Inbound Source</span><strong>${lead.source}</strong><small>${lead.created}</small></div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="history"></i> Interaction & Contact History</h5>
          <p><strong>Current Stage:</strong> <span class="badge badge-warning">${lead.stage}</span> · <strong>Stage Reason:</strong> ${lead.reason}</p>
          <p><strong>Next Recommended Action:</strong> ${lead.nextAction}</p>
          <p><strong>Consent Status:</strong> <span class="badge ${lead.consent.includes('Verified') ? 'badge-success' : 'badge-warning'}">${lead.consent}</span></p>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close</button>
      <button class="btn btn-primary" onclick="document.getElementById('generic-modal').classList.add('hidden'); Actions.openCsrContactLead('${lead.id}')">Log Contact Activity</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.openCsrNewLeadModal = function() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create New Inbound Prospect";
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label>Prospect Full Name</label>
        <input type="text" id="csr-new-lead-name" class="form-control" placeholder="e.g. Tariq Mehmood">
      </div>
      <div class="form-group">
        <label>Contact Phone / WhatsApp</label>
        <input type="text" id="csr-new-lead-phone" class="form-control" placeholder="+92 300 1234567">
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="csr-new-lead-email" class="form-control" placeholder="prospect@domain.com">
      </div>
      <div class="form-group">
        <label>Programme Interest</label>
        <select id="csr-new-lead-prog" class="form-control">
          <option value="Basic Literacy">Basic Literacy</option>
          <option value="Applied Numeracy">Applied Numeracy</option>
          <option value="Vocational Technology">Vocational Technology</option>
          <option value="K-12 Academic">K-12 Academic</option>
        </select>
      </div>
      <div class="form-group">
        <label>Inbound Source / Campaign</label>
        <select id="csr-new-lead-source" class="form-control">
          <option value="Direct Referral">Direct Referral</option>
          <option value="Facebook Ads">Facebook / Meta Ads</option>
          <option value="Google Search">Google Search</option>
          <option value="Web Portal">Web Portal Inquiry</option>
        </select>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveNewCsrLead()">Create Prospect</button>
    `;
    modal.classList.remove("hidden");
  };

  Actions.saveNewCsrLead = function() {
    const name = document.getElementById("csr-new-lead-name").value.trim();
    const phone = document.getElementById("csr-new-lead-phone").value.trim();
    const email = document.getElementById("csr-new-lead-email").value.trim();
    const prog = document.getElementById("csr-new-lead-prog").value;
    const source = document.getElementById("csr-new-lead-source").value;

    if (!name || !phone) {
      Notifications.push("Validation Error", "Name and contact number are mandatory.", "error");
      return;
    }

    const newId = "LD-" + (100 + db.csrData.leads.length + 1);
    const newLead = {
      id: newId,
      name,
      contact: phone,
      email: email || "pending@learner.ihs",
      source,
      programme: prog,
      stage: "New",
      reason: "Direct CSR Intake",
      nextAction: "Introductory Call & Consent",
      expectedValue: prog.includes("Vocational") ? "PKR 35,000" : "PKR 18,000",
      consent: "Pending",
      csr: "Sarah Jenkins",
      created: new Date().toISOString().replace("T", " ").slice(0, 16)
    };

    db.csrData.leads.unshift(newLead);
    
    // Auto create follow-up task
    const newFlp = {
      id: "FLP-" + (300 + db.csrData.followups.length + 1),
      leadId: newId,
      leadName: name,
      contact: phone,
      programme: prog,
      csr: "Sarah Jenkins",
      dueDate: "Today 16:30 PKT",
      type: "Introductory Call",
      status: "Due",
      history: "New lead created via CSR intake.",
      nextAction: "Initial consultation call."
    };
    db.csrData.followups.unshift(newFlp);

    Actions.audit("CSR_LEAD_CREATED", `Created new prospect ${name} (${newId}) with attributed follow-up.`, "Low");
    Notifications.push("Lead Created", `Prospect ${name} registered and assigned to your portfolio.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    RenderEngine.csrDashboard();
  };

  Actions.openCsrContactLead = function(id) {
    const lead = db.csrData.leads.find(l => l.id === id);
    if (!lead) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Log Contact Activity: ${lead.name}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="form-group">
        <label>Contact Method</label>
        <select id="csr-contact-method" class="form-control">
          <option value="Phone Call (Answered)">Phone Call (Answered)</option>
          <option value="WhatsApp Conversation">WhatsApp Conversation</option>
          <option value="Email Sent">Email Sent</option>
          <option value="Call Not Answered">Call Not Answered</option>
        </select>
      </div>
      <div class="form-group">
        <label>Interaction Notes & Placement Assessment</label>
        <textarea id="csr-contact-notes" class="form-control" rows="3" placeholder="Prospect confirmed interest in 1:1 format. Assessment score 82%..."></textarea>
      </div>
      <div class="form-group">
        <label>Update Prospect Stage</label>
        <select id="csr-contact-stage" class="form-control">
          <option value="Contacted">Contacted (In Progress)</option>
          <option value="Qualified" selected>Qualified (Ready for Trial)</option>
          <option value="Lost">Lost / Not Interested</option>
        </select>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCsrContact('${lead.id}')">Save Activity Log</button>
    `;
    modal.classList.remove("hidden");
  };

  Actions.saveCsrContact = function(id) {
    const lead = db.csrData.leads.find(l => l.id === id);
    if (!lead) return;

    const stage = document.getElementById("csr-contact-stage").value;
    const notes = document.getElementById("csr-contact-notes").value.trim();

    lead.stage = stage;
    if (notes) lead.reason = notes;
    if (stage === "Qualified") {
      lead.consent = "Verified";
      lead.nextAction = "Schedule Trial Consultation";
    }

    Actions.audit("CSR_LEAD_STAGE_UPDATED", `Lead ${lead.id} stage moved to ${stage}.`, "Low");
    Notifications.push("Contact Logged", `Prospect stage updated to ${stage}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };

  Actions.openCsrScheduleTrialModal = function(id) {
    const lead = db.csrData.leads.find(l => l.id === id) || db.csrData.leads[0];
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Schedule Trial Session (FLOW-007): ${lead.name}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="calendar"></i>
          <div>
            <strong>FLOW-007 TRIAL SCHEDULING ENGINE</strong>
            <p>Assigns qualified prospect to trainer, creates Daily.co room, and schedules reminder notifications.</p>
          </div>
        </div>

        <div class="form-group">
          <label>Select Preferred Time Slot</label>
          <select id="csr-trial-slot" class="form-control">
            <option value="Today 16:00 - 16:45">Today 16:00 - 16:45 PKT</option>
            <option value="Tomorrow 11:00 - 11:45">Tomorrow 11:00 - 11:45 PKT</option>
            <option value="Tomorrow 15:00 - 15:45">Tomorrow 15:00 - 15:45 PKT</option>
            <option value="Saturday 10:00 - 10:45">Saturday 10:00 - 10:45 PKT</option>
          </select>
        </div>

        <div class="form-group">
          <label>Assign Subject Trainer</label>
          <select id="csr-trial-trainer" class="form-control">
            <option value="Sara Javed">Sara Javed (Vocational Technology)</option>
            <option value="Nadia Rahman">Nadia Rahman (Applied Numeracy)</option>
            <option value="Huzsam Ahmed">Huzsam Ahmed (Basic Literacy)</option>
            <option value="Imran Qureshi">Imran Qureshi (K-12 Mathematics)</option>
          </select>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="video"></i> WebRTC Daily.co Room Auto-Provisioning</h5>
          <p>Upon confirmation, a private tokenized room (<code class="font-mono">https://ihs.daily.co/trial-...</code>) will be generated and dispatched to the learner's WhatsApp and email.</p>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmCsrTrialSchedule('${lead.id}')">Confirm Booking & Room</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.confirmCsrTrialSchedule = function(leadId) {
    const lead = db.csrData.leads.find(l => l.id === leadId) || db.csrData.leads[0];
    const slot = document.getElementById("csr-trial-slot").value;
    const trainer = document.getElementById("csr-trial-trainer").value;

    const newTrialId = "TRL-" + (500 + db.csrData.trials.length + 1);
    const newTrial = {
      id: newTrialId,
      leadId: lead.id,
      prospect: lead.name,
      course: lead.programme,
      placementScore: "82%",
      consent: "Verified",
      csr: "Sarah Jenkins",
      slot,
      trainer,
      room: `https://ihs.daily.co/trial-${500 + db.csrData.trials.length + 1}`,
      attendance: "Provisioned",
      status: "Scheduled",
      outcome: "Pending Delivery"
    };

    db.csrData.trials.unshift(newTrial);
    lead.stage = "Qualified";
    lead.nextAction = `Trial Scheduled for ${slot}`;

    Actions.audit("CSR_TRIAL_SCHEDULED", `Scheduled trial ${newTrialId} for ${lead.name} with ${trainer}.`, "Medium");
    Notifications.push("Trial Confirmed", `Trial session booked for ${slot}. Daily.co room provisioned.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };

  Actions.openCsrFollowup = function(id) {
    const flp = db.csrData.followups.find(f => f.id === id);
    if (!flp) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Execute Follow-up Task: ${flp.leadName} (${flp.id})`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="phone-outgoing"></i>
          <div>
            <strong>SCHEDULED PROSPECT TOUCHPOINT</strong>
            <p>Task Type: ${flp.type} · Due: ${flp.dueDate}</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Prospect</span><strong>${flp.leadName}</strong><small>${flp.contact}</small></div>
          <div class="om-flow-metric"><span>Programme</span><strong>${flp.programme}</strong></div>
          <div class="om-flow-metric"><span>Task Type</span><strong>${flp.type}</strong></div>
          <div class="om-flow-metric"><span>Assigned CSR</span><strong>${flp.csr}</strong></div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="file-text"></i> Task History & Instructions</h5>
          <p>${flp.history}</p>
          <p><strong>Action Objective:</strong> ${flp.nextAction}</p>
        </div>

        <div class="form-group">
          <label>Record Interaction Outcome</label>
          <textarea id="csr-flp-outcome" class="form-control" rows="2" placeholder="Called prospect. Answered questions on curriculum..."></textarea>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.completeCsrFollowup('${flp.id}')">Mark Completed</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.completeCsrFollowup = function(id) {
    const flp = db.csrData.followups.find(f => f.id === id);
    if (!flp) return;

    flp.status = "Completed";
    Actions.audit("CSR_FOLLOWUP_COMPLETED", `Completed follow-up task ${flp.id} for ${flp.leadName}.`, "Low");
    Notifications.push("Task Completed", `Follow-up ${flp.id} marked as completed.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };

  Actions.openCsrAssistedEnrolment = function(id) {
    const enr = db.csrData.enrolments.find(e => e.id === id);
    if (!enr) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Assisted Enrolment Checkout: ${enr.prospect}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="sparkles"></i>
          <div>
            <strong>ASSISTED CONVERSION & ORDER CHECKOUT</strong>
            <p>Links prospect to learner account and generates membership order with persistent CSR sales attribution.</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Prospect</span><strong>${enr.prospect}</strong></div>
          <div class="om-flow-metric"><span>Programme</span><strong>${enr.programme}</strong></div>
          <div class="om-flow-metric"><span>Selected Plan</span><strong>${enr.membership}</strong></div>
          <div class="om-flow-metric"><span>Payable Amount</span><strong>${enr.amount}</strong></div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="badge-percent"></i> Sales Attribution Rule (FLOW-031)</h5>
          <p>CSR Attribution is locked at <strong>100% to Sarah Jenkins</strong>. Upon payment clearance and activation, commission candidate of 10% (<strong>PKR 3,500</strong>) will enter Pending Verification.</p>
        </div>

        <div class="form-group">
          <label>Payment Submission Method</label>
          <select id="csr-assist-pay-method" class="form-control">
            <option value="Bank Transfer (Meezan Bank)">Bank Transfer (Meezan Bank)</option>
            <option value="Bank Transfer (HBL Direct)">Bank Transfer (HBL Direct)</option>
            <option value="Easypaisa / JazzCash">Easypaisa / JazzCash</option>
          </select>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.confirmCsrAssistedOrder('${enr.id}')">Initiate Order & Send Bank Details</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.confirmCsrAssistedOrder = function(id) {
    const enr = db.csrData.enrolments.find(e => e.id === id);
    if (!enr) return;

    enr.status = "Membership Request";
    enr.paymentStatus = "Awaiting Bank Slip Upload";

    Actions.audit("CSR_ASSISTED_ORDER_INITIATED", `Initiated membership order ${enr.id} for ${enr.prospect} with locked attribution.`, "Medium");
    Notifications.push("Order Initiated", `Assisted order created. Bank instructions dispatched to learner.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };

  Actions.openCsrPaymentReview = function(id) {
    const pay = db.csrData.payments.find(p => p.id === id);
    if (!pay) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Permissioned Payment Review (FLOW-012): ${pay.learner}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="receipt"></i>
          <div>
            <strong>PERMISSION-SCOPED RECEIPT VERIFICATION</strong>
            <p>Verify bank transfer slip and SHA-256 checksum match expected course fee before granting access.</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Learner</span><strong>${pay.learner}</strong><small>${pay.payer}</small></div>
          <div class="om-flow-metric"><span>Submitted Amount</span><strong>${pay.submittedAmount}</strong><small>Expected: ${pay.expectedAmount}</small></div>
          <div class="om-flow-metric"><span>Channel & Ref</span><strong>${pay.channel}</strong><small>${pay.reference}</small></div>
          <div class="om-flow-metric"><span>Queue Age</span><strong>${pay.age}</strong><small>SLA: Normal</small></div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="file-check"></i> Bank Receipt Verification</h5>
          <p><strong>Uploaded File:</strong> <code>${pay.receiptFile}</code></p>
          <p><strong>SHA-256 Checksum:</strong> <code class="om-checksum-tag">${pay.receiptChecksum}</code> (Match Verified)</p>
        </div>

        <div class="form-group">
          <label>Review Decision Note</label>
          <textarea id="csr-pay-decision-notes" class="form-control" rows="2" placeholder="Bank ledger reference confirmed. Amount matches full term tuition."></textarea>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-error" onclick="Actions.rejectCsrPayment('${pay.id}')">Request Correction</button>
      <button class="btn btn-primary" onclick="Actions.approveCsrPayment('${pay.id}')">Approve & Grant Access</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.approveCsrPayment = function(id) {
    const pay = db.csrData.payments.find(p => p.id === id);
    if (!pay) return;

    pay.status = "Approved";
    Actions.audit("CSR_PAYMENT_APPROVED", `Approved manual payment ${pay.id} for ${pay.learner} (${pay.submittedAmount}). Created Access Grant.`, "High");
    Notifications.push("Payment Approved", `Payment ${pay.id} cleared. Access grant created.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };

  Actions.rejectCsrPayment = function(id) {
    const pay = db.csrData.payments.find(p => p.id === id);
    if (!pay) return;

    pay.status = "Rejected / Correction";
    Actions.audit("CSR_PAYMENT_CORRECTION_REQUESTED", `Requested correction for payment ${pay.id}.`, "Medium");
    Notifications.push("Correction Requested", `Learner alerted to provide updated transfer slip.`, "warning");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };

  Actions.openCsrCommission = function(id) {
    const com = db.csrData.commissions.find(c => c.id === id);
    if (!com) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Commission Record: ${com.id}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="badge-percent"></i>
          <div>
            <strong>FLOW-031 COMMISSION CALCULATION LEDGER</strong>
            <p>Attributed to Sarah Jenkins · Sales Plan: ${com.plan}</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Enrolment Ref</span><strong>${com.enrolmentId}</strong><small>${com.learner}</small></div>
          <div class="om-flow-metric"><span>Sales Value</span><strong>${com.salesValue}</strong><small>${com.product}</small></div>
          <div class="om-flow-metric"><span>Commission Rate</span><strong>10.0%</strong><small>Standard CSR Tier</small></div>
          <div class="om-flow-metric"><span>Commission Amount</span><strong class="success-text">${com.commissionAmount}</strong><small>Status: ${com.status}</small></div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="shield"></i> Governance & Anti-Self Approval Rule</h5>
          <p>CSR Commission ownership is distinct from payroll settlement. Commission disbursements are batched into monthly institutional payroll (<strong>${com.payrollPeriod}</strong>) and approved by Executive Management.</p>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.openCsrCase = function(id) {
    const c = db.csrData.cases.find(item => item.id === id);
    if (!c) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Customer Inquiry: ${c.id}`;
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="message-square"></i>
          <div>
            <strong>CUSTOMER INQUIRY & SERVICE DESK</strong>
            <p>${c.subject}</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Prospect / Learner</span><strong>${c.prospect}</strong></div>
          <div class="om-flow-metric"><span>Category</span><strong>${c.category}</strong></div>
          <div class="om-flow-metric"><span>Priority</span><strong>${c.priority}</strong></div>
          <div class="om-flow-metric"><span>SLA Remaining</span><strong>${c.sla}</strong></div>
        </div>

        <div class="form-group">
          <label>Response to Customer</label>
          <textarea id="csr-case-reply-text" class="form-control" rows="3" placeholder="Thank you for reaching out. We have confirmed your session..."></textarea>
        </div>
      </div>
    `;
    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.resolveCsrCase('${c.id}')">Send Reply & Resolve</button>
    `;
    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.resolveCsrCase = function(id) {
    const c = db.csrData.cases.find(item => item.id === id);
    if (!c) return;

    c.status = "Resolved";
    Actions.audit("CSR_CASE_RESOLVED", `Resolved inquiry ${c.id} for ${c.prospect}.`, "Low");
    Notifications.push("Inquiry Resolved", `Response dispatched to ${c.prospect}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    Router.renderView(Router.currentRoute);
    RenderEngine.csrDashboard();
  };


  // ============================================================================
  // COURSE CREATOR (CC) - ACTION CONTROLLERS & LIFECYCLE DIALOGS
  // ============================================================================

  Actions.openCreatorNewCourseModal = function() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Create New Course & Initial Version (FLOW-009)";
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="book-open"></i>
          <div>
            <strong>NEW COURSE AUTHORING & METADATA INTAKE (CAT-005)</strong>
            <p>Creates course entity and initializes Version 1.0 in Draft state. Pricing and publication remain restricted.</p>
          </div>
        </div>

        <div class="form-group">
          <label>Course Title</label>
          <input type="text" id="cc-course-title" class="form-control" placeholder="e.g. Next-Gen Cloud & Microservices Architecture">
        </div>

        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>Course Code (Identifier)</label>
            <input type="text" id="cc-course-code" class="form-control" placeholder="e.g. TECH-CLD-301">
          </div>
          <div class="form-group">
            <label>Programme Track</label>
            <select id="cc-course-prog" class="form-control">
              <option value="Vocational Skills">Vocational Skills (Computing & Tech)</option>
              <option value="Basic Literacy">Basic Literacy & Community</option>
              <option value="Spoken English">Spoken English Mastery</option>
              <option value="K-12">K-12 Secondary Education</option>
            </select>
          </div>
        </div>

        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>Delivery Model (CAT-002)</label>
            <select id="cc-course-delivery" class="form-control">
              <option value="Self-paced Milestone">Self-paced Milestone (MILE-001)</option>
              <option value="Live Scheduled">Live Scheduled Classes (CAT-002)</option>
              <option value="K-12 Live Tuition">K-12 Live Tuition (K12-001)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Estimated Effort</label>
            <input type="text" id="cc-course-effort" class="form-control" placeholder="e.g. 10 Weeks (6 hrs/week)">
          </div>
        </div>

        <div class="form-group">
          <label>Learning Outcomes</label>
          <textarea id="cc-course-outcomes" class="form-control" rows="2" placeholder="List core competencies and skills learners will acquire..."></textarea>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="shield-alert"></i> Segregation of Duties Notice</h5>
          <p>Upon saving, initial <strong>Version v1.0 (Draft)</strong> is initialized. Base Course Creator role cannot publish or set commercial pricing.</p>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCreatorCourse()">Create Course & Draft Version</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.saveCreatorCourse = function() {
    const title = document.getElementById("cc-course-title")?.value.trim();
    const code = document.getElementById("cc-course-code")?.value.trim();
    const prog = document.getElementById("cc-course-prog")?.value;
    const delivery = document.getElementById("cc-course-delivery")?.value;
    const effort = document.getElementById("cc-course-effort")?.value.trim() || "8 Weeks";
    const outcomes = document.getElementById("cc-course-outcomes")?.value.trim() || "Demonstrate core mastery.";

    if (!title || !code) {
      Notifications.push("Validation Error", "Course title and course code are mandatory.", "error");
      return;
    }

    const newId = "CRS-" + (100 + db.creatorData.courses.length + 1);
    const newVerId = "VER-" + (400 + db.creatorData.versions.length + 1);

    const newCourse = {
      id: newId,
      code,
      title,
      programme: prog,
      faculty: prog === "K-12" ? "Faculty of Secondary Education" : "Faculty of Computing & Technology",
      deliveryModel: delivery,
      activeVersion: "v1.0 (Draft)",
      latestPublished: "None (Draft)",
      stage: "Draft",
      language: "English",
      estimatedEffort: effort,
      modulesCount: 1,
      lessonsCount: 4,
      assessmentsCount: 1,
      author: "Dr. Arsalan Khan",
      created: new Date().toISOString().slice(0, 10),
      updated: new Date().toISOString().replace("T", " ").slice(0, 16),
      description: outcomes,
      learningOutcomes: outcomes,
      prerequisites: "Standard Programme Intake",
      completionRule: "100% Modules Completed",
      priceLocked: "Commercial catalogue managed (Read-only)"
    };

    const newVersion = {
      id: newVerId,
      courseId: newId,
      courseTitle: title,
      versionTag: "v1.0",
      lifecycleState: "Draft",
      deliveryModel: delivery,
      changesSummary: "Initial version authoring.",
      author: "Dr. Arsalan Khan",
      created: new Date().toISOString().slice(0, 10),
      updated: new Date().toISOString().replace("T", " ").slice(0, 16),
      validationStatus: "Passed (100% Complete)",
      reviewer: "Unassigned",
      publishLock: "Draft - Authoring in progress."
    };

    db.creatorData.courses.unshift(newCourse);
    db.creatorData.versions.unshift(newVersion);

    Actions.audit("CREATOR_COURSE_INITIALIZED", `Created new course ${code} (${title}) with draft version ${newVersion.versionTag}.`, "Low");
    Notifications.push("Course Created", `${title} initialized as draft version ${newVersion.versionTag}.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorNewVersionModal = function(courseId) {
    const course = courseId ? db.creatorData.courses.find(c => c.id === courseId) : db.creatorData.courses[0];
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Create New Version: ${course ? course.title : 'Select Course'}`;
    
    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="git-branch"></i>
          <div>
            <strong>IMMUTABLE VERSIONING LIFECYCLE (CAT-004)</strong>
            <p>Published versions are immutable. Creating a new version branches a working draft copy without disrupting active learners.</p>
          </div>
        </div>

        <div class="form-group">
          <label>Target Course</label>
          <select id="cc-ver-course-select" class="form-control">
            ${db.creatorData.courses.map(c => `
              <option value="${c.id}" ${course && c.id === course.id ? 'selected' : ''}>${c.code} — ${c.title} (${c.activeVersion})</option>
            `).join("")}
          </select>
        </div>

        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>New Semantic Version Tag</label>
            <input type="text" id="cc-ver-tag" class="form-control" value="v2.0" placeholder="e.g. v1.3 or v2.0">
          </div>
          <div class="form-group">
            <label>Version Type</label>
            <select id="cc-ver-type" class="form-control">
              <option value="Major Revision">Major Syllabus Overhaul (vX.0)</option>
              <option value="Minor Update">Minor Content & Assessment Update (vX.Y)</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>Revision & Changes Justification</label>
          <textarea id="cc-ver-notes" class="form-control" rows="2" placeholder="Document technical and pedagogical updates in this revision..."></textarea>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="lock"></i> Historical Learner Protection</h5>
          <p>Learners currently in live cohorts remain attached to their registered version. Only new cohort intakes or authorized migrations enroll in the new version.</p>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.createCreatorVersion()">Branch & Initialize Draft Version</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.createCreatorVersion = function() {
    const courseId = document.getElementById("cc-ver-course-select")?.value;
    const tag = document.getElementById("cc-ver-tag")?.value.trim() || "v2.0";
    const notes = document.getElementById("cc-ver-notes")?.value.trim() || "Updated syllabus modules and assessment keys.";
    const course = db.creatorData.courses.find(c => c.id === courseId);

    if (!course) return;

    const newVerId = "VER-" + (400 + db.creatorData.versions.length + 1);
    const newVer = {
      id: newVerId,
      courseId: course.id,
      courseTitle: course.title,
      versionTag: tag,
      lifecycleState: "Draft",
      deliveryModel: course.deliveryModel,
      changesSummary: notes,
      author: "Dr. Arsalan Khan",
      created: new Date().toISOString().slice(0, 10),
      updated: new Date().toISOString().replace("T", " ").slice(0, 16),
      validationStatus: "Draft Initialized",
      reviewer: "Unassigned",
      publishLock: "Draft - Authoring in progress."
    };

    course.activeVersion = `${tag} (Draft)`;
    course.stage = "Draft";
    db.creatorData.versions.unshift(newVer);

    Actions.audit("CREATOR_VERSION_BRANCHED", `Branched new version ${tag} for course ${course.code} (${course.title}).`, "Low");
    Notifications.push("Version Created", `Branched ${tag} for ${course.title}. Ready for authoring.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorAddLessonModal = function(unitId) {
    const item = unitId ? db.creatorData.syllabus.find(s => s.id === unitId) : db.creatorData.syllabus[0];
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = item ? `Edit Syllabus Unit: ${item.lesson}` : "Add Lesson Unit";

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="form-group">
          <label>Lesson Title</label>
          <input type="text" id="cc-lesson-title" class="form-control" value="${item ? item.lesson : ''}">
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>Module / Milestone</label>
            <input type="text" id="cc-lesson-mod" class="form-control" value="${item ? item.module : 'Module 1.1: Core Concepts'}">
          </div>
          <div class="form-group">
            <label>Activity Delivery Format</label>
            <select id="cc-lesson-format" class="form-control">
              <option value="Interactive Coding Workspace">Interactive Coding Workspace</option>
              <option value="Video Lecture & Sandbox">Video Lecture & Sandbox</option>
              <option value="Formatted Text & Guide">Formatted Text & Guide</option>
              <option value="Speaking / Voice Recording">Speaking / Voice Recording</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Estimated Duration</label>
          <input type="text" id="cc-lesson-duration" class="form-control" value="${item ? item.duration : '45 Mins'}">
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCreatorLesson('${unitId || ''}')">Save Unit Changes</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.saveCreatorLesson = function(unitId) {
    const title = document.getElementById("cc-lesson-title")?.value.trim();
    if (!title) return;

    const item = db.creatorData.syllabus.find(s => s.id === unitId);
    if (item) {
      item.lesson = title;
      item.duration = document.getElementById("cc-lesson-duration")?.value.trim() || item.duration;
    }

    Actions.audit("CREATOR_LESSON_SAVED", `Saved syllabus unit updates for ${title}.`, "Low");
    Notifications.push("Lesson Saved", `Syllabus unit ${title} updated.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorAddQuestionModal = function(qid) {
    const q = qid ? db.creatorData.questions.find(item => item.id === qid) : null;
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = q ? `Edit Question: ${q.id}` : "Create Reusable Question";

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="form-group">
          <label>Question Prompt / Stem</label>
          <textarea id="cc-q-prompt" class="form-control" rows="2" placeholder="Enter question stem...">${q ? q.title : ''}</textarea>
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>Question Type</label>
            <select id="cc-q-type" class="form-control">
              <option value="Single Choice">Single Choice (MCQ)</option>
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="True/False">True / False</option>
              <option value="Ordering">Ordering / Sequence</option>
              <option value="Matching">Matching Pairs</option>
            </select>
          </div>
          <div class="form-group">
            <label>Difficulty</label>
            <select id="cc-q-diff" class="form-control">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Correct Answer Key</label>
          <input type="text" id="cc-q-answer" class="form-control" value="${q ? q.correctAnswer : ''}" placeholder="e.g. 401 Unauthorized">
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCreatorQuestion('${qid || ''}')">Save Question to Bank</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.saveCreatorQuestion = function(qid) {
    const prompt = document.getElementById("cc-q-prompt")?.value.trim();
    const ans = document.getElementById("cc-q-answer")?.value.trim();
    if (!prompt || !ans) {
      Notifications.push("Validation Error", "Prompt and answer key are required.", "error");
      return;
    }

    if (qid) {
      const q = db.creatorData.questions.find(item => item.id === qid);
      if (q) {
        q.title = prompt;
        q.correctAnswer = ans;
      }
    } else {
      const newId = "QST-" + (800 + db.creatorData.questions.length + 1);
      db.creatorData.questions.unshift({
        id: newId,
        title: prompt,
        type: document.getElementById("cc-q-type")?.value || "Single Choice",
        category: "Authoring Pool",
        difficulty: document.getElementById("cc-q-diff")?.value || "Intermediate",
        options: [ans, "Alternative Distractor A", "Alternative Distractor B"],
        correctAnswer: ans,
        tags: ["Core", "Syllabus"],
        version: "v1.0",
        usedInQuizzes: ["QZ-201"],
        author: "Dr. Arsalan Khan"
      });
    }

    Actions.audit("CREATOR_QUESTION_SAVED", `Saved question to centralized question bank.`, "Low");
    Notifications.push("Question Saved", "Question pool updated successfully.", "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorAddQuizModal = function(quizId) {
    const quiz = quizId ? db.creatorData.assessments.find(a => a.id === quizId) : null;
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = quiz ? `Configure Assessment: ${quiz.title}` : "New Quiz Configuration";

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="form-group">
          <label>Quiz Title</label>
          <input type="text" id="cc-quiz-title" class="form-control" value="${quiz ? quiz.title : ''}" placeholder="e.g. Advanced JavaScript State Quiz">
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>Pass Mark Threshold</label>
            <input type="text" id="cc-quiz-pass" class="form-control" value="${quiz ? quiz.passMark : '80%'}">
          </div>
          <div class="form-group">
            <label>Max Attempts Allowed</label>
            <input type="number" id="cc-quiz-attempts" class="form-control" value="${quiz ? quiz.maxAttempts : 3}">
          </div>
        </div>
        <div class="form-group">
          <label>Randomization & Anti-Cheat</label>
          <select id="cc-quiz-rand" class="form-control">
            <option value="Enabled">Enabled (Shuffle Questions & Answer Choices)</option>
            <option value="Disabled">Fixed Order</option>
          </select>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCreatorQuiz('${quizId || ''}')">Save Quiz Settings</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.saveCreatorQuiz = function(quizId) {
    const title = document.getElementById("cc-quiz-title")?.value.trim();
    if (!title) return;

    if (quizId) {
      const q = db.creatorData.assessments.find(a => a.id === quizId);
      if (q) {
        q.title = title;
        q.passMark = document.getElementById("cc-quiz-pass")?.value.trim() || q.passMark;
      }
    }

    Actions.audit("CREATOR_ASSESSMENT_SAVED", `Updated assessment configuration for ${title}.`, "Low");
    Notifications.push("Assessment Saved", `Configuration for ${title} updated.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorUploadResourceModal = function() {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Upload & Verify Educational Resource (FLOW-022)";

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="upload-cloud"></i>
          <div>
            <strong>RESOURCE INTEGRITY & MALWARE SCAN (FLOW-022)</strong>
            <p>Upload private media objects. Calculates SHA-256 hash and sets access gating policy.</p>
          </div>
        </div>
        <div class="form-group">
          <label>Resource Title</label>
          <input type="text" id="cc-res-title" class="form-control" placeholder="e.g. Next.js 15 Server Components Blueprint PDF">
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div class="form-group">
            <label>Format</label>
            <select id="cc-res-format" class="form-control">
              <option value="PDF Document">PDF Document</option>
              <option value="MP4 Video (1080p)">MP4 Video (1080p)</option>
              <option value="Audio MP3">Audio MP3</option>
              <option value="ZIP Archive">ZIP Code Archive</option>
            </select>
          </div>
          <div class="form-group">
            <label>Access Gating Level</label>
            <select id="cc-res-access" class="form-control">
              <option value="Enrolled & Guest Preview Eligible">Free Preview + Enrolled</option>
              <option value="Enrolled Learners Only">Enrolled Learners Only</option>
              <option value="Protected DRM Stream">Protected DRM Stream</option>
            </select>
          </div>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCreatorResource()">Upload & Verify Checksum</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.saveCreatorResource = function() {
    const title = document.getElementById("cc-res-title")?.value.trim();
    if (!title) return;

    const newId = "RES-" + (100 + db.creatorData.resources.length + 1);
    db.creatorData.resources.unshift({
      id: newId,
      title,
      format: document.getElementById("cc-res-format")?.value || "PDF Document",
      size: "3.2 MB",
      version: "v1.0",
      sha256: "c89f71a0b33291..." + Math.random().toString(36).substring(7),
      scanStatus: "Clean / Verified",
      accessLevel: document.getElementById("cc-res-access")?.value || "Enrolled Learners Only",
      linkedCoursesCount: 1,
      uploadedAt: new Date().toISOString().replace("T", " ").slice(0, 16),
      status: "Uploaded (Verified)"
    });

    Actions.audit("CREATOR_RESOURCE_UPLOADED", `Uploaded and verified resource ${newId} (${title}).`, "Low");
    Notifications.push("Resource Uploaded", `${title} scanned and ready for syllabus linkage.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorEditRulesModal = function(id) {
    const rule = db.creatorData.rules.find(r => r.id === id) || db.creatorData.rules[0];
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Configure Rule: ${rule.type}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="form-group">
          <label>Target Scope / Milestone</label>
          <input type="text" class="form-control" value="${rule.targetItem}" readonly>
        </div>
        <div class="form-group">
          <label>Condition Expression</label>
          <textarea id="cc-rule-cond" class="form-control" rows="3">${rule.condition}</textarea>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.saveCreatorRules('${rule.id}')">Save Rule Condition</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.saveCreatorRules = function(id) {
    const cond = document.getElementById("cc-rule-cond")?.value.trim();
    const rule = db.creatorData.rules.find(r => r.id === id);
    if (rule && cond) rule.condition = cond;

    Actions.audit("CREATOR_RULE_UPDATED", `Updated rule condition for ${id}.`, "Low");
    Notifications.push("Rule Saved", "Learning progression rules updated.", "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorPreviewModal = function(courseId) {
    const course = courseId ? db.creatorData.courses.find(c => c.id === courseId) : db.creatorData.courses[0];
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Learner Experience Preview (CAT-009): ${course ? course.title : 'Course'}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner" style="background: linear-gradient(135deg, #182232, #253852); color: #ffffff;">
          <i data-lucide="eye" style="color: #70b8ff;"></i>
          <div>
            <strong style="color: #ffffff;">LIVE SYLLABUS SIMULATION & GATING AUDIT</strong>
            <p style="color: #c9d6e4;">Simulates learner viewport. Verifies that preview parent units never accidentally expose paid/unpublished children.</p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #ffffff; border: 1px solid #e7dfd3; border-radius: 8px;">
          <div>
            <strong style="font-size: 13px; color: var(--navy-medium);">Simulation Viewport Mode:</strong>
            <span style="font-size: 12px; color: var(--slate); display: block;">Toggle user credential state to inspect locked gating</span>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-primary btn-xs" id="preview-mode-guest" onclick="Actions.switchPreviewMode('guest')">Guest Visitor</button>
            <button class="btn btn-secondary btn-xs" id="preview-mode-free" onclick="Actions.switchPreviewMode('free')">Registered Free User</button>
          </div>
        </div>

        <div id="preview-simulator-canvas" style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
          <div style="padding: 14px 18px; border: 1px solid #70b8ff; background: #f0f7ff; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span class="badge badge-success" style="margin-bottom: 4px;">FREE PREVIEW UNLOCKED</span>
              <strong style="display: block; font-size: 13.5px; color: #12233f;">Module 1.1: Modern HTML5 & CSS Layouts</strong>
              <small style="color: #5a687c;">Lesson 1: Semantic Structure & Accessibility · 45 Mins · Formatted Guide</small>
            </div>
            <button class="btn btn-primary btn-xs" onclick="Notifications.push('Preview Player', 'Rendering interactive sandbox lesson in preview mode.', 'info')">Play Lesson</button>
          </div>

          <div style="padding: 14px 18px; border: 1px solid #e7dfd3; background: #faf8f5; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; opacity: 0.85;">
            <div>
              <span class="badge badge-warning" style="margin-bottom: 4px;"><i data-lucide="lock" style="width:10px; height:10px;"></i> PAID ENROLMENT REQUIRED</span>
              <strong style="display: block; font-size: 13.5px; color: #12233f;">Module 1.2: Advanced CSS Grid & Modern Tokens</strong>
              <small style="color: #5a687c;">Lesson 2: Responsive Grid Systems · 60 Mins · Interactive Sandbox</small>
            </div>
            <button class="btn btn-secondary btn-xs" disabled style="cursor: not-allowed;"><i data-lucide="lock"></i> Locked</button>
          </div>

          <div style="padding: 14px 18px; border: 1px solid #e7dfd3; background: #faf8f5; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; opacity: 0.85;">
            <div>
              <span class="badge badge-warning" style="margin-bottom: 4px;"><i data-lucide="lock" style="width:10px; height:10px;"></i> PREREQUISITE GATED</span>
              <strong style="display: block; font-size: 13.5px; color: #12233f;">Milestone 2: React 19 State Management</strong>
              <small style="color: #5a687c;">Requires 100% Milestone 1 Completion + DOM Fundamentals Quiz Pass</small>
            </div>
            <button class="btn btn-secondary btn-xs" disabled style="cursor: not-allowed;"><i data-lucide="lock"></i> Gated</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close Simulator</button>
      <button class="btn btn-primary" onclick="document.getElementById('generic-modal').classList.add('hidden'); Actions.openCreatorValidationModal('${course ? course.id : 'CRS-101'}')">Run Pre-Flight Check</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.switchPreviewMode = function(mode) {
    const guestBtn = document.getElementById("preview-mode-guest");
    const freeBtn = document.getElementById("preview-mode-free");
    if (!guestBtn || !freeBtn) return;
    if (mode === "guest") {
      guestBtn.className = "btn btn-primary btn-xs";
      freeBtn.className = "btn btn-secondary btn-xs";
      Notifications.push("Simulation View", "Rendering unauthenticated guest preview state.", "info");
    } else {
      guestBtn.className = "btn btn-secondary btn-xs";
      freeBtn.className = "btn btn-primary btn-xs";
      Notifications.push("Simulation View", "Rendering registered free learner tier state.", "info");
    }
  };

  Actions.openCreatorValidationModal = function(versionId) {
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = "Course Version Pre-Flight Validation (FLOW-009)";

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="check-square"></i>
          <div>
            <strong>PRE-FLIGHT VALIDATION CHECKLIST</strong>
            <p>Automated verification of metadata, syllabus hierarchy, resource attachments, and learning rule consistency.</p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="padding: 10px 14px; background: #edf8f0; border-left: 4px solid #166534; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span><i data-lucide="check" style="width:14px; color:#166534;"></i> <strong>Catalogue Metadata:</strong> Title, Code, Effort, Language</span>
            <span class="badge badge-success">Passed</span>
          </div>

          <div style="padding: 10px 14px; background: #edf8f0; border-left: 4px solid #166534; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span><i data-lucide="check" style="width:14px; color:#166534;"></i> <strong>Syllabus Structure:</strong> Levels, Milestones, 28 Lessons</span>
            <span class="badge badge-success">Passed</span>
          </div>

          <div style="padding: 10px 14px; background: #edf8f0; border-left: 4px solid #166534; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span><i data-lucide="check" style="width:14px; color:#166534;"></i> <strong>Resource Integrity:</strong> SHA-256 hashes clean & malware-free</span>
            <span class="badge badge-success">Passed</span>
          </div>

          <div style="padding: 10px 14px; background: #edf8f0; border-left: 4px solid #166534; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span><i data-lucide="check" style="width:14px; color:#166534;"></i> <strong>Learning Rules:</strong> Progression state machines valid</span>
            <span class="badge badge-success">Passed</span>
          </div>
        </div>

        <div class="om-flow-evidence-box" style="margin-top: 14px;">
          <h5><i data-lucide="shield-check"></i> Ready for Academic Peer Review</h5>
          <p>Zero blocking errors detected. You may proceed to submit this version to the Academic Review Board.</p>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close</button>
      <button class="btn btn-primary" onclick="document.getElementById('generic-modal').classList.add('hidden'); Actions.openCreatorSubmitReviewModal('${versionId || 'VER-401'}')">Submit for Academic Review</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.openCreatorSubmitReviewModal = function(versionId) {
    const ver = db.creatorData.versions.find(v => v.id === versionId) || db.creatorData.versions[0];
    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Submit for Review: ${ver.courseTitle} (${ver.versionTag})`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="send"></i>
          <div>
            <strong>SUBMIT FOR ACADEMIC PEER REVIEW (FLOW-009)</strong>
            <p>Transmits draft version to Faculty Reviewers. Content edits will freeze until reviewers approve or request revisions.</p>
          </div>
        </div>

        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Course</span><strong>${ver.courseTitle}</strong></div>
          <div class="om-flow-metric"><span>Version Tag</span><strong>${ver.versionTag}</strong></div>
          <div class="om-flow-metric"><span>Delivery Model</span><strong>${ver.deliveryModel}</strong></div>
          <div class="om-flow-metric"><span>Author</span><strong>${ver.author}</strong></div>
        </div>

        <div class="form-group">
          <label>Submission Note for Academic Reviewers</label>
          <textarea id="cc-submit-notes" class="form-control" rows="3" placeholder="Highlight key syllabus updates, new assessment questions, and board alignments..."></textarea>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="lock"></i> Review State Lock</h5>
          <p>Status will transition from <strong>Draft → In Review</strong>. Once approved, the authorized catalogue owner will publish the live release.</p>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.submitCreatorForReview('${ver.id}')">Confirm Submission to Review Board</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.submitCreatorForReview = function(versionId) {
    const ver = db.creatorData.versions.find(v => v.id === versionId);
    if (!ver) return;

    ver.lifecycleState = "In Review";
    const course = db.creatorData.courses.find(c => c.id === ver.courseId);
    if (course) {
      course.stage = "In Review";
      course.activeVersion = `${ver.versionTag} (In Review)`;
    }

    Actions.audit("CREATOR_SUBMITTED_FOR_REVIEW", `Submitted ${ver.courseTitle} (${ver.versionTag}) for academic review.`, "Medium");
    Notifications.push("Submitted for Review", `${ver.courseTitle} ${ver.versionTag} submitted to Academic Review Board.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorReviewComment = function(commentId) {
    const comm = db.creatorData.reviewComments.find(c => c.id === commentId);
    if (!comm) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Reviewer Feedback: ${comm.id}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-banner">
          <i data-lucide="message-square"></i>
          <div>
            <strong>ACADEMIC REVIEWER COMMENT (CAT-010)</strong>
            <p>Reviewer: <strong>${comm.reviewer}</strong> · Item: ${comm.item}</p>
          </div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="alert-circle"></i> Reviewer Guidance</h5>
          <p><strong>Severity:</strong> <span class="badge ${comm.severity === 'Blocking' ? 'badge-error' : 'badge-warning'}">${comm.severity}</span></p>
          <p>${comm.comment}</p>
        </div>

        <div class="form-group">
          <label>Author Resolution Rationale</label>
          <textarea id="cc-comment-response" class="form-control" rows="3" placeholder="Describe the updates made to resolve this feedback..."></textarea>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Cancel</button>
      <button class="btn btn-primary" onclick="Actions.resolveCreatorComment('${comm.id}')">Mark Feedback as Resolved</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };

  Actions.resolveCreatorComment = function(commentId) {
    const comm = db.creatorData.reviewComments.find(c => c.id === commentId);
    if (!comm) return;

    const resp = document.getElementById("cc-comment-response")?.value.trim() || "Addressed and updated in draft syllabus.";
    comm.status = "Resolved";
    comm.resolution = resp;

    Actions.audit("CREATOR_COMMENT_RESOLVED", `Resolved reviewer comment ${comm.id} for ${comm.courseTitle}.`, "Low");
    Notifications.push("Comment Resolved", `Feedback on ${comm.item} marked as resolved.`, "success");

    document.getElementById("generic-modal").classList.add("hidden");
    if (Router.currentRoute === "creator-dashboard") RenderEngine.creatorDashboard();
    else RenderEngine.creatorWorkspace(Router.currentRoute);
  };

  Actions.openCreatorCourseDetails = function(courseId) {
    const c = db.creatorData.courses.find(item => item.id === courseId);
    if (!c) return;

    const modal = document.getElementById("generic-modal");
    document.getElementById("modal-title").textContent = `Course Specification: ${c.title}`;

    document.getElementById("modal-body").innerHTML = `
      <div class="om-flow-dialog">
        <div class="om-flow-grid">
          <div class="om-flow-metric"><span>Course Code</span><strong>${c.code}</strong><small>${c.id}</small></div>
          <div class="om-flow-metric"><span>Programme</span><strong>${c.programme}</strong><small>${c.faculty}</small></div>
          <div class="om-flow-metric"><span>Delivery Model</span><strong>${c.deliveryModel}</strong></div>
          <div class="om-flow-metric"><span>Active Version</span><strong>${c.activeVersion}</strong><small>Live: ${c.latestPublished}</small></div>
        </div>

        <div class="om-flow-evidence-box">
          <h5><i data-lucide="book-open"></i> Learning Outcomes & Syllabus</h5>
          <p>${c.learningOutcomes}</p>
          <p><strong>Prerequisites:</strong> ${c.prerequisites}</p>
          <p><strong>Completion Rule:</strong> ${c.completionRule}</p>
          <p><strong>Commercial Pricing:</strong> ${c.priceLocked}</p>
        </div>
      </div>
    `;

    document.getElementById("modal-footer").innerHTML = `
      <button class="btn btn-secondary" onclick="document.getElementById('generic-modal').classList.add('hidden')">Close</button>
      <button class="btn btn-primary" onclick="document.getElementById('generic-modal').classList.add('hidden'); Router.navigate('creator-syllabus-lessons')">Open Syllabus Builder</button>
    `;

    modal.classList.remove("hidden");
    window.lucide?.createIcons();
  };


  Actions.switchLmsSimMode = function(mode) {
    const guestBtn = document.getElementById("lms-sim-guest");
    const freeBtn = document.getElementById("lms-sim-free");
    const lockBadge = document.getElementById("sim-lock-badge-2");
    if (!guestBtn || !freeBtn) return;

    if (mode === "guest") {
      guestBtn.className = "btn btn-primary btn-xs";
      freeBtn.className = "btn btn-secondary btn-xs";
      if (lockBadge) lockBadge.innerHTML = '<i data-lucide="lock" style="width:9px; height:9px;"></i> PAID ENROLMENT';
      Notifications.push("Simulation Mode", "Viewing as unauthenticated Guest. Paid lessons locked.", "info");
    } else {
      guestBtn.className = "btn btn-secondary btn-xs";
      freeBtn.className = "btn btn-primary btn-xs";
      if (lockBadge) lockBadge.innerHTML = '<i data-lucide="check" style="width:9px; height:9px;"></i> FREE PREVIEW GRANTED';
      Notifications.push("Simulation Mode", "Viewing as Registered Free Learner. Trial lessons unlocked.", "success");
    }
    window.lucide?.createIcons();
  };


  Actions.filterCreatorByCourse = function(courseCode) {
    Notifications.push("Course Scope Updated", `Filtered authoring hierarchy to course ${courseCode}.`, "info");
  };

});
