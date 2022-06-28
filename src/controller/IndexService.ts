import { ServiceController } from "./ServiceController"
import { ServiceService } from "../service/ServiceService" 
import { ServiceRepository } from "../repositories/ServiceRepository"

/* Utilizamos o index para criar o controlador só a partir do momento que a rota for chamada */

export default():ServiceController=>{
    const serviceRepository = new ServiceRepository();
    const serviceService = new ServiceService(serviceRepository);
    const createServiceController = new ServiceController(serviceService);

    return createServiceController;
}