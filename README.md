# Resume Generator (React)

Single-page React application that builds printable, downloadable, and shareable resumes from structured form input and templates. Designed for production-ready export workflows and easy template extension.

---

## Features

- Multi-section resume builder: Contact, Summary, Experience, Education, Projects, Skills, Certifications, Links
- Live preview with multiple responsive templates
- Drag-and-drop reordering for sections and entries
- Export to PDF (client-side) and optional DOCX export
- Save/load resumes to localStorage; import/export JSON
- Theme controls for fonts, colors, spacing; printable layouts for A4/Letter
- Form validation, autosave, undo/redo support

---

## Tech Stack

- React (latest) with TypeScript optional
- State: React Context or Zustand/Redux
- Forms: React Hook Form or controlled components
- Styling: Tailwind CSS (recommended) or CSS Modules
- Drag-and-drop: `react-beautiful-dnd` or `dnd-kit`
- PDF export: client-side `html2canvas` + `jsPDF` or server-side Puppeteer
- DOCX export: `docx` (optional)
- Build: Vite or Create React App
- Tests: Jest + React Testing Library

---

## Repo Structure

