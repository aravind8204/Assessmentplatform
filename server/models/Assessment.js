const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctOption: { type: String, required: true },
    },
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment;
