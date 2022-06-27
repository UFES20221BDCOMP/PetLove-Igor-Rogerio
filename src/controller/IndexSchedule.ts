import { ScheduleController } from "./ScheduleController"
import { ScheduleService } from "../service/ScheduleService" 
import { ScheduleRepository } from "../repositories/ScheduleRepository"

export default():ScheduleController=>{
    const scheduleRepository = new ScheduleRepository();
    const scheduleService = new ScheduleService(scheduleRepository);
    const scheduleController = new ScheduleController(scheduleService);

    return scheduleController;
}