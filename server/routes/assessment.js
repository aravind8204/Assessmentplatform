const express = require('express');
const Assessment = require('../models/Assessment');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Create Assessment (Instructor)
router.post('/create', authMiddleware, async (req, res) => {
    const { title, questions } = req.body;
    try {
      const assessment = new Assessment({
        title,
        questions,
        createdBy: req.user._id,
      });
      await assessment.save();
      res.status(201).json(assessment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

router.get

module.exports = router;
