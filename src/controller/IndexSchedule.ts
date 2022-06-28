import { ScheduleController } from "./ScheduleController"
import { ScheduleService } from "../service/ScheduleService" 
import { ScheduleRepository } from "../repositories/ScheduleRepository"

/* Utilizamos o index para criar o controlador só a partir do momento que a rota for chamada */

export default():ScheduleController=>{
    const scheduleRepository = new ScheduleRepository();
    const scheduleService = new ScheduleService(scheduleRepository);
    const scheduleController = new ScheduleController(scheduleService);

    return scheduleController;
}