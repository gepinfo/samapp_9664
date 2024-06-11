import { Request, Response, NextFunction } from "express";
import { studentController } from '../controller/studentController';


export class Routes {
    private student: studentController = new studentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/student/:id').delete(this.student.Delete);
app.route('/student').put(this.student.Update);
app.route('/student').get(this.student.GetAllValues);
app.route('/student').post(this.student.Create);
app.route('/student/userid/created_by').get(this.student.GetNounCreatedBy);
     }

}