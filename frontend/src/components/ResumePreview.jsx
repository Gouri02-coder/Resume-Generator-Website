import React from 'react';

export default function ResumePreview({ data, template = 'basic' }) {
  const {
    name,
    email,
    phone,
    address,
    education = [],
    experience = [],
    skills = [],
    projects = []
  } = data;

  return (
    <div className="p-4">
      <div className="text-center mb-2">
        <h2 className="mb-0">{name || 'Your Name'}</h2>
        <small>
          {email || 'email@example.com'} | {phone || '0000000000'} | {address || 'City, Country'}
        </small>
      </div>
      <hr />

      {education.length > 0 && (
        <section className="mb-2">
          <h5 className="text-uppercase">Education</h5>
          <ul className="mb-0">
            {education.map((e, i) => (
              <li key={i}>
                <strong>{e.degree || 'Degree'}</strong>, {e.institution || 'Institution'} ({e.year || 'Year'})
              </li>
            ))}
          </ul>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-2">
          <h5 className="text-uppercase">Experience</h5>
          <ul className="mb-0">
            {experience.map((ex, i) => (
              <li key={i}>
                <strong>{ex.role || 'Role'}</strong> @ {ex.company || 'Company'} — {ex.duration || 'Duration'}
                <div>{ex.description || 'Description...'}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-2">
          <h5 className="text-uppercase">Skills</h5>
          <div>{skills.filter(Boolean).join(' • ')}</div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mb-2">
          <h5 className="text-uppercase">Projects</h5>
          <ul className="mb-0">
            {projects.map((p, i) => (
              <li key={i}>{p || 'Project'}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
