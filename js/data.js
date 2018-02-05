module.exports.data = {
    joueurs:[
        {id:123456789, metier:"patron", dateARecuSalaire:"04/01/2018", banque:1250, portefeuille:50, inventaire:[], dateInscription:"01/01/2018", notification:[]},
        {id:987654321, metier:"policier", dateARecuSalaire:"03/01/2018", banque:2000, portefeuille:10, inventaire:[], dateInscription:"02/01/2018", notification:[]},
        {id:111111111, metier:"employe", dateARecuSalaire:"04/01/2018", banque:1500, portefeuille:20, inventaire:[], dateInscription:"01/01/2018", notification:[]}
    ],
    metiers:[
        {fonction:"patron", salaireMin:2450, salaireMax:2450},
        {fonction:"employe", salaireMin:1050, salaireMax:1450},
        {fonction:"policier", salaireMin:1150, salaireMax:1500},
        {fonction:"banquier", salaireMin:1250, salaireMax:1500},
        {fonction:"ambulancier", salaireMin:1600, salaireMax:1850},
        {fonction:"pompier", salaireMin:1600, salaireMax:1850},
        {fonction:"chomage", salaireMin:850, salaireMax:850}
    ],
    entreprises:[
        {nom:"Exemple", idPatron:123456789, nombreTravailleurs:1, trvailleurs:[111111111], dateCreation:"02/01/2018", demandesAdhesion:[]}
    ],
    magasin:[
        {nom:"Boule de Noël", prix:20, quantiteRestante:100}
    ]
};