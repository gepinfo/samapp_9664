import { Request, Response } from 'express';
import { studentService } from '../service/studentService';
import { CustomLogger } from '../config/Logger'
let student = new studentService();

export class studentController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    student.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    student.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: Update');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    student.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    student.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    student.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GetNounCreatedBy');
    })}


}