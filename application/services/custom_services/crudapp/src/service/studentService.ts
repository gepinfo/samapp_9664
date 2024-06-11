import { Request, Response } from 'express';
import {studentDao} from '../dao/studentDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';











let student = new studentDao();

export class studentService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: Delete')
     let  studentId = req.params.id;
     student.Delete(studentId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: Update')
     let  studentData = req.body;
     student.Update(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GetAllValues')
     
     student.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: Create')
     let  studentData = req.body;
     student.Create(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GetNounCreatedBy')
     let  studentData = { created_by: req.query.createdby };
     student.GetNounCreatedBy(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}