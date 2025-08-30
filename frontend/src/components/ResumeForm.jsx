import { useState } from 'react';

const emptyEdu = { degree: '', institution: '', year: '' };
const emptyExp = { company: '', role: '', duration: '', description: '' };

export default function ResumeForm({ value, onChange }) {
  const [step, setStep] = useState(1);

  const update = (path, val) => onChange({ ...value, [path]: val });

  const addEdu = () => update('education', [...value.education, { ...emptyEdu }]);
  const addExp = () => update('experience', [...value.experience, { ...emptyExp }]);
  const addSkill = () => update('skills', [...value.skills, '']);
  const addProject = () => update('projects', [...value.projects, '']);

  const removeEdu = (idx) => update('education', value.education.filter((_, i) => i !== idx));
  const removeExp = (idx) => update('experience', value.experience.filter((_, i) => i !== idx));
  const removeSkill = (idx) => update('skills', value.skills.filter((_, i) => i !== idx));
  const removeProject = (idx) => update('projects', value.projects.filter((_, i) => i !== idx));

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Resume Builder (Step {step}/5)</h5>
          <div className="btn-group">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              type="button"
            >
              Prev
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setStep((s) => Math.min(5, s + 1))}
              type="button"
            >
              Next
            </button>
          </div>
        </div>

        {/* STEP 1: Basic Info */}
        {step === 1 && (
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={value.name}
                onChange={(e) => update('name', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                value={value.email}
                onChange={(e) => update('email', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                value={value.phone}
                onChange={(e) => update('phone', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                className="form-control"
                value={value.address}
                onChange={(e) => update('address', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* STEP 2: Education */}
        {step === 2 && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Education</h6>
              <button className="btn btn-sm btn-outline-primary" onClick={addEdu} type="button">
                + Add
              </button>
            </div>
            {value.education.map((ed, idx) => (
              <div className="row g-2 mb-2 align-items-center" key={idx}>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Degree"
                    value={ed.degree}
                    onChange={(e) => {
                      const arr = [...value.education];
                      arr[idx] = { ...arr[idx], degree: e.target.value };
                      update('education', arr);
                    }}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Institution"
                    value={ed.institution}
                    onChange={(e) => {
                      const arr = [...value.education];
                      arr[idx] = { ...arr[idx], institution: e.target.value };
                      update('education', arr);
                    }}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Year"
                    value={ed.year}
                    onChange={(e) => {
                      const arr = [...value.education];
                      arr[idx] = { ...arr[idx], year: e.target.value };
                      update('education', arr);
                    }}
                  />
                </div>
                <div className="col-md-3 d-flex">
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => removeEdu(idx)}
                    type="button"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
            {value.education.length === 0 && (
              <div className="text-muted">Click + Add to insert your education.</div>
            )}
          </div>
        )}

        {/* STEP 3: Experience */}
        {step === 3 && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Experience</h6>
              <button className="btn btn-sm btn-outline-primary" onClick={addExp} type="button">
                + Add
              </button>
            </div>
            {value.experience.map((ex, idx) => (
              <div className="row g-2 mb-2 align-items-center" key={idx}>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    placeholder="Company"
                    value={ex.company}
                    onChange={(e) => {
                      const arr = [...value.experience];
                      arr[idx] = { ...arr[idx], company: e.target.value };
                      update('experience', arr);
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    placeholder="Role"
                    value={ex.role}
                    onChange={(e) => {
                      const arr = [...value.experience];
                      arr[idx] = { ...arr[idx], role: e.target.value };
                      update('experience', arr);
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    className="form-control"
                    placeholder="Duration"
                    value={ex.duration}
                    onChange={(e) => {
                      const arr = [...value.experience];
                      arr[idx] = { ...arr[idx], duration: e.target.value };
                      update('experience', arr);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    placeholder="Description"
                    value={ex.description}
                    onChange={(e) => {
                      const arr = [...value.experience];
                      arr[idx] = { ...arr[idx], description: e.target.value };
                      update('experience', arr);
                    }}
                  />
                </div>
                <div className="col-md-2 d-flex">
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => removeExp(idx)}
                    type="button"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
            {value.experience.length === 0 && (
              <div className="text-muted">Click + Add to insert your experience.</div>
            )}
          </div>
        )}

        {/* STEP 4: Skills & Projects */}
        {step === 4 && (
          <div className="row g-2">
            {/* Skills */}
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h6 className="mb-0">Skills</h6>
              <button className="btn btn-sm btn-outline-primary" onClick={addSkill} type="button">
                + Add
              </button>
            </div>
            {value.skills.map((sk, idx) => (
              <div className="col-md-6 d-flex" key={idx}>
                <input
                  className="form-control"
                  placeholder="Skill"
                  value={sk}
                  onChange={(e) => {
                    const arr = [...value.skills];
                    arr[idx] = e.target.value;
                    update('skills', arr);
                  }}
                />
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => removeSkill(idx)}
                  type="button"
                >
                  🗑️
                </button>
              </div>
            ))}
            {value.skills.length === 0 && (
              <div className="text-muted ps-2">Click + Add to insert skills.</div>
            )}

            {/* Projects */}
            <div className="col-12 d-flex justify-content-between align-items-center mt-3">
              <h6 className="mb-0">Projects (optional)</h6>
              <button className="btn btn-sm btn-outline-primary" onClick={addProject} type="button">
                + Add
              </button>
            </div>
            {value.projects.map((pr, idx) => (
              <div className="col-12 d-flex" key={idx}>
                <input
                  className="form-control"
                  placeholder="Project"
                  value={pr}
                  onChange={(e) => {
                    const arr = [...value.projects];
                    arr[idx] = e.target.value;
                    update('projects', arr);
                  }}
                />
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => removeProject(idx)}
                  type="button"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}

        {/* STEP 5: Review */}
        {step === 5 && (
          <div className="alert alert-info">
            Review your details in the Preview panel and use Save or Download.
          </div>
        )}
      </div>
    </div>
  );
}
