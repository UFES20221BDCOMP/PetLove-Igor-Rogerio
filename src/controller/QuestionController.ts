import  AnimalController  from "./IndexAnimal";

/* Onde os requests são mapeados */
class QuestionController {
    constructor(){
    }
    async mediaType(request){
        const animalName = !request.query.animalName?"%":request.query.animalName;
        const animalType = !request.query.animalType?"%":request.query.animalType;
        const personName = !request.query.personName?"%":request.query.personName;
        const dateBegin = !request.query.dateBegin?"0001/01/01":request.query.dateBegin;
        const dateEnd = !request.query.dateEnd?"9999/12/31":request.query.dateEnd;
        const serviceName = !request.query.serviceName?"%":request.query.serviceName;
        const {avarege} = {avarege: (await AnimalController().calcMedia({animalName ,animalType,personName,dateBegin,dateEnd,serviceName}))[0].media};
        return {type: animalType==="%"?"all":animalType,avarege};
        
    }
    async countType(request){
        const animalName = !request.query.animalName?"%":request.query.animalName;
        const animalType = !request.query.animalType?"%":request.query.animalType;
        const personName = !request.query.personName?"%":request.query.personName;
        const dateBegin = !request.query.dateBegin?"0001/01/01":request.query.dateBegin;
        const dateEnd = !request.query.dateEnd?"9999/12/31":request.query.dateEnd;
        const serviceName = !request.query.serviceName?"%":request.query.serviceName;
        const {quantity} = {quantity: (await AnimalController().findQtt({animalName ,animalType,personName,dateBegin,dateEnd,serviceName}))[0].quantity}
        return {type: animalType==="%"?"all":animalType,quantity};
    }

    async ownersType(type:string){
        return {quantity:(await AnimalController().findOwners(type))};
    }
}
export {QuestionController}