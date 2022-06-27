import { ServiceController } from "./ServiceController"
import { ServiceService } from "../service/ServiceService" 
import { ServiceRepository } from "../repositories/ServiceRepository"

export default():ServiceController=>{
    const serviceRepository = new ServiceRepository();
    const serviceService = new ServiceService(serviceRepository);
    const createServiceController = new ServiceController(serviceService);

    return createServiceController;
}