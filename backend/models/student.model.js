import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  university: { type: String, required: true },
  college: { type: String, required: true },
  specialization: { type: String, required: true },
  degree: { type: String, required: true },
  age: { type: Number },
  address: { type: String },
  enrollmentYear: { type: Number },
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
