class Trajet {
    _id:string;
    depart: string;
    destination: string;
    date: Date;
    prix: string;
    nbrPlaces: string;


    constructor(

    ){
        this.depart = ""
        this.destination = ""
        this.date = new Date()
        this.prix = ""
        this.nbrPlaces = ""
    }
}

export default Trajet;