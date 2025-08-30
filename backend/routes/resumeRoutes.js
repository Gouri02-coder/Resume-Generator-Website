import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { createResume, listResumes, getResume } from '../controllers/resumeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

// -------------------- VALIDATION --------------------
const validateResume = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('address').trim().notEmpty().withMessage('Address is required'),
  body('education').isArray().withMessage('Education must be an array'),
  body('experience').isArray().withMessage('Experience must be an array'),
  body('skills').isArray().withMessage('Skills must be an array'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
    next();
  }
];

// -------------------- PROTECTED ROUTES --------------------
router.use(protect); // All routes below require authentication

router.get('/', listResumes);           // List all resumes of the logged-in user
router.get('/:id', getResume);          // Get a single resume by ID
router.post('/', validateResume, createResume); // Create a resume

export default router;
