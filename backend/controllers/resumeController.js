import Resume from '../models/Resume.js';

export const createResume = async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    return res.status(201).json(resume);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const listResumes = async (_req, res) => {
  const resumes = await Resume.find().sort({ createdAt: -1 }).limit(50);
  return res.json(resumes);
};

export const getResume = async (req, res) => {
  const { id } = req.params;
  const resume = await Resume.findById(id);
  if (!resume) return res.status(404).json({ error: 'Not found' });
  return res.json(resume);
};
