// ============================================================
// SINGLE SOURCE OF TRUTH — All lessons in order
//
// Edit this file to add, remove, or reorder lessons.
// The sidebar, prev/next nav, and sequence tracker
// all derive from this list automatically.
//
// Each entry:
//   id     — unique prefix (used as the filename prefix and ID)
//   title  — display name in sidebar / nav
//   file   — filename of the lesson HTML (no directory prefix)
//   phase  — phase number for grouping
//   phaseName — display name of the phase
//   icon   — icon name from ICONS object
//   status — "completed" | "in-progress" | "pending"
//
// IMPORTANT: Do NOT include a "lessons/" directory prefix in `file`.
// The sidebar.js and lesson-nav.js scripts derive the correct path
// automatically from the current page location.
// ============================================================
window.LESSONS = [
  // Phase 1 — Pundasyon at Pagsisimula
  { id: '0001', title: 'Welcome to Design Patterns', file: '0001-welcome-to-design-patterns.html', phase: 1, phaseName: 'Pundasyon at Pagsisimula', icon: 'book', status: 'in-progress' },
  { id: '0002', title: 'Observer Pattern', file: '0002-observer-pattern.html', phase: 1, phaseName: 'Pundasyon at Pagsisimula', icon: 'eye', status: 'pending' },

  // Phase 2 — Decorator at Factory
  { id: '0003', title: 'Decorator Pattern', file: '0003-decorator-pattern.html', phase: 2, phaseName: 'Decorator at Factory', icon: 'layers', status: 'pending' },
  { id: '0004', title: 'Factory Patterns', file: '0004-factory-patterns.html', phase: 2, phaseName: 'Decorator at Factory', icon: 'package', status: 'pending' },

  // Phase 3 — Singleton at Command
  { id: '0005', title: 'Singleton Pattern', file: '0005-singleton-pattern.html', phase: 3, phaseName: 'Singleton at Command', icon: 'box', status: 'pending' },
  { id: '0006', title: 'Command Pattern', file: '0006-command-pattern.html', phase: 3, phaseName: 'Singleton at Command', icon: 'zap', status: 'pending' },

  // Phase 4 — Adapter, Facade, Template Method
  { id: '0007', title: 'Adapter & Facade', file: '0007-adapter-and-facade.html', phase: 4, phaseName: 'Adapter, Facade, Template', icon: 'cog', status: 'pending' },
  { id: '0008', title: 'Template Method', file: '0008-template-method.html', phase: 4, phaseName: 'Adapter, Facade, Template', icon: 'gitBranch', status: 'pending' },

  // Phase 5 — Iterator, Composite, State
  { id: '0009', title: 'Iterator & Composite', file: '0009-iterator-and-composite.html', phase: 5, phaseName: 'Iterator, Composite, State', icon: 'shuffle', status: 'pending' },
  { id: '0010', title: 'State Pattern', file: '0010-state-pattern.html', phase: 5, phaseName: 'Iterator, Composite, State', icon: 'cog', status: 'pending' },

  // Phase 6 — Proxy, Compound, Real-World
  { id: '0011', title: 'Proxy Pattern', file: '0011-proxy-pattern.html', phase: 6, phaseName: 'Proxy, Compound, Real-World', icon: 'shield', status: 'pending' },
  { id: '0012', title: 'Compound Patterns', file: '0012-compound-patterns.html', phase: 6, phaseName: 'Proxy, Compound, Real-World', icon: 'layers', status: 'pending' },
  { id: '0013', title: 'Real-World Patterns', file: '0013-real-world-patterns.html', phase: 6, phaseName: 'Proxy, Compound, Real-World', icon: 'compass', status: 'pending' }
];
