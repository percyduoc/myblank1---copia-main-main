export class UserModel {

    constructor(
        public id: number | undefined,
        public name: string,
        public last_name: string,
        public correo: string,
        public birthday: Date | undefined,
        public type: string,
        public username: string,
        public password: string,
    ) {
    }

    //Metodo dentro de la clase para crear usuario. EJEMPLO solamente.
    static crearUsuario(event: {
        name: string,
        last_name: string,
        correo: string
    }){
        return {
            name: event.correo,
            last_name: event.last_name,
            correo: event.correo
        }
    }
}