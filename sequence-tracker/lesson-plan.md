# Course Lesson Plan

**Last updated:** 2026-07-10

## Legend
- ✅ Completed — lesson is done and the learner has worked through it
- 🔄 In Progress — currently working on this lesson
- ⏳ Pending — planned but not started

---

## Phase 1: Pundasyon at Pagsisimula

| # | Lesson | Status | Topics | Prerequisites |
|---|--------|--------|--------|---------------|
| 0001 | Welcome to Design Patterns | 🔄 | Duck simulation, Encapsulation vs inheritance, OO basics | — |
| 0002 | Observer Pattern | ⏳ | Weather station, Subject/Observer interface, Loose coupling | 0001 |

## Phase 2: Decorator at Factory

| # | Lesson | Status | Topics | Prerequisites |
|---|--------|--------|--------|---------------|
| 0003 | Decorator Pattern | ⏳ | Starbuzz coffee, Wrapping objects, Open/closed principle | 0001 |
| 0004 | Factory Patterns | ⏳ | Pizza store, Simple Factory, Factory Method, Abstract Factory | 0001 |

## Phase 3: Singleton at Command

| # | Lesson | Status | Topics | Prerequisites |
|---|--------|--------|--------|---------------|
| 0005 | Singleton Pattern | ⏳ | Chocolate factory, Private constructor, Static instance | 0001 |
| 0006 | Command Pattern | ⏳ | Remote control, Undo operations, Macro commands | 0001 |

## Phase 4: Adapter, Facade, Template

| # | Lesson | Status | Topics | Prerequisites |
|---|--------|--------|--------|---------------|
| 0007 | Adapter & Facade | ⏳ | Home theater, Interface conversion, Simplifying subsystems | 0001 |
| 0008 | Template Method | ⏳ | Data exporter, Hook methods, Hollywood principle | 0001 |

## Phase 5: Iterator, Composite, State

| # | Lesson | Status | Topics | Prerequisites |
|---|--------|--------|--------|---------------|
| 0009 | Iterator & Composite | ⏳ | Menu iterator, Tree traversal, Uniform interface | 0001 |
| 0010 | State Pattern | ⏳ | Gumball machine, State transitions, Eliminating conditionals | 0001 |

## Phase 6: Proxy, Compound, Real-World

| # | Lesson | Status | Topics | Prerequisites |
|---|--------|--------|--------|---------------|
| 0011 | Proxy Pattern | ⏳ | Virtual proxy, Remote proxy, Protection proxy | 0001 |
| 0012 | Compound Patterns | ⏳ | MVC, Model/View/Controller, Combining patterns | 0001 |
| 0013 | Real-World Patterns | ⏳ | Pattern matcher, 9 principles recap, Final project | All |

---

## Adding a New Lesson

1. Copy `lessons/lesson-template.html` → `lessons/000X-your-lesson-name.html`
2. Edit `assets/lessons-data.js` — add the entry in the correct position
3. Edit `sequence-tracker/overview.json` — add the entry with status
4. Update this lesson plan file