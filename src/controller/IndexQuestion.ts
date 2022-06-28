import { QuestionController } from "./QuestionController"

/* Utilizamos o index para criar o controlador só a partir do momento que a rota for chamada */

export default():QuestionController=>{


    const questionController = new QuestionController();

    return questionController;
}