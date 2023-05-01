import { dbService } from "../services/db-service";

const listaTrailers = () => {
    return dbService.getTrailers().then((data) => {
        const trailers = data.map((trailer) => trailer);
        return trailers;
    })
}


export const dbController = {
    listaTrailers,
}
    
