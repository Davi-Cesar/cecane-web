interface InformesDates {
    dateNutri: string,
    dateCae: string,
    dateRecursos: string,
}

class Informe {
    moths = [
        {
          moth: "janeiro",
          key: "0",
        },
        {
          moth: "fevereiro",
          key: "1",
        },
        {
          moth: "março",
          key: "2",
        },
        {
          moth: "abril",
          key: "3",
        },
        {
          moth: "maio",
          key: "4",
        },
        {
          moth: "junho",
          key: "5",
        },
        {
          moth: "julho",
          key: "6",
        },
        {
          moth: "agosto",
          key: "7",
        },
        {
          moth: "setembro",
          key: "8",
        },
        {
          moth: "outubro",
          key: "9",
        },
        {
          moth: "novembro",
          key: "10",
        },
        {
          moth: "dezembro",
          key: "11",
        },
    ];

    constructor() {

    }
    
    getLatestDate({dateNutri, dateCae, dateRecursos}: InformesDates) {
        const infNutri = dateNutri.split(" ");
        const infCae = dateCae.split(" ");
        const infRecursos = dateRecursos.split(" ");

        let dateCaeFormat: Date, dateNutriFormat: Date, dateRecursosFormat: Date;

        for (let i = 0; i < this.moths.length; i++) {
            
            if (infNutri[2] === this.moths[i].moth) {
                dateNutriFormat = new Date(+infNutri[4], +this.moths[i].key, +infNutri[0]); // ano mes dia
            }
            if (infCae[2] === this.moths[i].moth) {
                dateCaeFormat = new Date(+infCae[4], +this.moths[i].key, +infCae[0]);
            }
            if (infRecursos[2] === this.moths[i].moth) {
                dateRecursosFormat = new Date(+infRecursos[4], +this.moths[i].key, +infRecursos[0]);
            }
            
        }
        const dateArray = [dateCaeFormat, dateNutriFormat, dateRecursosFormat];
        const latestDate = dateArray.sort().slice(-1)[0];
        if(latestDate === dateCaeFormat) {
            return dateCae;
        } else if(latestDate === dateNutriFormat) {
            return dateNutri;
        } else {
            return dateRecursos;
        }
    }
}
export default new Informe();