import * as mongoose from 'mongoose';
import studentModel from '../models/daomodels/student';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class studentDao {
    private student = studentModel;

    

    constructor() { }
    
    public async Delete(studentId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: Delete');

    

    
    
    
    this.student.findByIdAndRemove(studentId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(studentData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: Update');

    

    
    
    
    this.student.findOneAndUpdate({ _id: studentData._id }, studentData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GetAllValues');

    

    
    
    
    this.student.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(studentData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: Create');

    let temp = new studentModel(studentData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(studentData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GetNounCreatedBy');

    

    
    
    
    this.student.aggregate(([
                        { $match: { $and: [{ created_by: studentData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}