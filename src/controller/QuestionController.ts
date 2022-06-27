import { Animal } from "model/Animal";
import  AnimalController  from "./IndexAnimal";

class QuestionController {
    constructor(){
    }
    async mediaType(type:string){
        const animals = await AnimalController().findByType(type);
        const{media} = {media:await AnimalController().calcMedia(animals)}
        return {type: type==="%"?"all":type,media};
        
    }
    async countType(type:string){
        return {type: type==="%"?"all":type,quantity:(await AnimalController().findByType(type)).length};
    }

    async ownersType(type:string){
        return {quantity:(await AnimalController().findOwners(type))};
    }
}
export {QuestionController}