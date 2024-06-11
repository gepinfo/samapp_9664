
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const studentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   age: { type: Number },
   Enter_Name: { type: String }
})

const studentModel = mongoose.model('student', studentSchema, 'student');
export default studentModel;
