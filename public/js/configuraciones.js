const limpiadoresEstandar = [

    //DESTINADO A LAS PIELES NO SENSIBLES, DEBIDO A QUE SE APLICA POR LA MAÑANA Y POR LA NOCHE
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 1,
        calidad: 'E',
        configuraciones: ['G-RA.-N', 'G-TCM.-N', 'G-RA.HS.-N', 'G-RA.A.-N', 'G-RA.TCM.-N', 'G-HS.TCM.-N', 'G-A.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-RA.-N', 'M-TCM.-N',
            'M-RA.HS.-N', 'M-RA.A.-N', 'M-RA.TCM.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.HS.TCM.-N', 'M-RA.A.TCM.-N', 'M-RA.HS.A.TCM.-N']
    },

    //DESTINADO A ALGUNAS PIELES SENSIBLES
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 13,
        calidad: 'E',
        configuraciones: ['G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-HS.A.-N', 'G-HS.A.-S']
    },

    //DESTINADO A ALGUNAS PIELES SENSIBLES
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 29,
        calidad: 'E',
        configuraciones: ['G-RA.-S', 'G-TCM.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S', 'M-RA.-S', 'M-TCM.-S',
            'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-A.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-N']
    },

    //CAMBIA POR EL HYDRATING CLEANSER, SOLO POR LA NOCHE EN ESTE CASO, ALGUNAS SENSIBLES O QUE SOLO QUIEREN HIDRATAR
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 35,
        calidad: 'E',
        configuraciones: ['M-HS.-N', 'M-HS.-S', 'M-A.-S', 'M-HS.A.-S', 'M-HS.TCM.-S', 'M-HS.A.TCM.-S', 'S-RA.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-S', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S', 'S-HS.TCM.-N',
        'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
    },

    //CAMBIA POR EL HYDRATING CLEANSER, AHORA ES DIA Y NOCHE
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 37,
        calidad: 'E',
        configuraciones: ['M-A.-N', 'M-HS.A.-N', 'M-HS.TCM.-N', 'M-HS.A.TCM.-N', 'S-TCM.-N', 'S-RA.HS.-N', 'S-RA.A.-N', 'S-RA.TCM.-N', 'S-RA.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
    },


    //CAMBIA POR EL HYDRATING CLEANSER, SOLO NOCHE
    {
        nombre: 'Limpiador Milk Hidrolizada de Sadoer',
        cantidad: 120,
        valor: 31200,
        categoria: "LIMPIADOR",
        foto: "sadoer-milk",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 45,
        calidad: 'E',
        configuraciones: ['S-HS.-N', 'S-HS.-S']
    },
]




const limpiadoresPremium = [

    //DESTINADO A LAS PIELES NO SENSIBLES, DEBIDO A QUE SE APLICA POR LA MAÑANA Y POR LA NOCHE
    {
        nombre: 'Smoothing SA Cleanser de CeraVe',
        cantidad: 237,
        valor: 81900,
        categoria: "LIMPIADOR",
        foto: "renewing",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 0,
        calidad: 'P',
        configuraciones: ['G-RA.-N', 'G-TCM.-N', 'G-RA.HS.-N', 'G-RA.A.-N', 'G-RA.TCM.-N', 'G-HS.TCM.-N', 'G-A.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-RA.-N', 'M-TCM.-N',
            'M-RA.HS.-N', 'M-RA.A.-N', 'M-RA.TCM.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.HS.TCM.-N', 'M-RA.A.TCM.-N', 'M-RA.HS.A.TCM.-N']
    },

    //DESTINADO A ALGUNAS PIELES SENSIBLES
    {
        nombre: 'La Roche-Posay Effaclar Puryfing',
        cantidad: 200,
        valor: 153900,
        categoria: "LIMPIADOR",
        foto: "effaclar",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 12,
        calidad: 'P',
        configuraciones: ['G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-HS.A.-N', 'G-HS.A.-S']
    },

    //DESTINADO A ALGUNAS PIELES SENSIBLES
    {
        nombre: 'Smoothing SA Cleanser de CeraVe',
        cantidad: 237,
        valor: 81900,
        categoria: "LIMPIADOR",
        foto: "renewing",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 28,
        calidad: 'P',
        configuraciones: ['G-RA.-S', 'G-TCM.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S', 'M-RA.-S', 'M-TCM.-S',
            'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-A.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-N']
    },

    //CAMBIA POR LA ESPUMA 4 EN 1 Y SOLO POR LA NOCHE
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        cantidad: 473,
        valor: 112500,
        categoria: "LIMPIADOR",
        foto: "cerave-hydrating",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 34,
        calidad: 'P',
        configuraciones: ['M-HS.-N', 'M-HS.-S', 'M-A.-S', 'M-HS.A.-S', 'M-HS.TCM.-S', 'M-HS.A.TCM.-S', 'S-RA.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-S', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S', 'S-HS.TCM.-N',
        'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
    },

    //CAMBIA POR LA ESPUMA 4 EN 1 y se aplica dia y noche
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        cantidad: 473,
        valor: 112500,
        categoria: "LIMPIADOR",
        foto: "cerave-hydrating",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 36,
        calidad: 'P',
        configuraciones: ['M-A.-N', 'M-HS.A.-N', 'M-HS.TCM.-N', 'M-HS.A.TCM.-N', 'S-TCM.-N', 'S-RA.HS.-N', 'S-RA.A.-N', 'S-RA.TCM.-N', 'S-RA.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
    },

    //CAMBIA POR LA LECHE HIDROLIZADA DE SADOER
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        cantidad: 473,
        valor: 112500,
        categoria: "LIMPIADOR",
        foto: "cerave-hydrating",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 44,
        calidad: 'P',
        configuraciones: ['S-HS.-N', 'S-HS.-S']
    },
]




const hidratantesEstandar = [

    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 3,
        calidad: 'E',
        configuraciones: ['G-RA.-N', 'G-HS.-N', 'S-RA.HS.-N', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-RA.HS.TCM.-N']
    },

    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 13,
        alert: "",
        replace: 9,
        calidad: 'E',
        configuraciones: ['G-RA.-S', 'G-HS.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
            'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S',
            'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'S-RA.HS.-S', 'S-RA.HS.TCM.-S']
    },

    {
        nombre: 'Tónico de Hinojo Marino',
        cantidad: 120,
        valor: 22900,
        categoria: "HIDRATANTE",
        foto: "sea-fennel",
        tiempo: "MN",
        turno: 13,
        alert: "",
        replace: 33,
        calidad: 'E',
        configuraciones: ['G-A.TCM.-N', 'G-A.TCM.-S', 'G-A.-N', 'G-A.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N', 'G-RA.HS.A.TCM.-S', 'M-HS.-N', 'M-HS.-S',
            'M-A.-N', 'M-A.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-HS.A.-N', 'M-HS.A.-S', 'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N',
            'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N', 'M-RA.HS.A.TCM.-S', 'S-TCM.-S', 'S-RA.A.-S', 'S-HS.A.-S']
    },

    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 43,
        calidad: 'E',
        configuraciones: ['S-RA.-N', 'S-RA.-S']
    },

    //ESTE SE INTERCAMBIA POR EL CERAVE MOISTURZING, EL GRANDE
    {
        nombre: 'Tónico de Hinojo Marino',
        cantidad: 120,
        valor: 22900,
        categoria: "HIDRATANTE",
        foto: "sea-fennel",
        tiempo: "MN",
        turno: 13,
        alert: "",
        replace: 47,
        calidad: 'E',
        configuraciones: ['S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N', 'S-RA.HS.A.TCM.-S']
    },

    //ESTE SE INTERCAMBIA POR EL NEUTROGENA HYDROBOOST
    {
        nombre: 'Tónico de Hinojo Marino',
        cantidad: 120,
        valor: 22900,
        categoria: "HIDRATANTE",
        foto: "sea-fennel",
        tiempo: "MN",
        turno: 13,
        alert: "",
        replace: 49,
        calidad: 'E',
        configuraciones: ['S-TCM.-N', 'S-RA.A.-N', 'S-HS.A.-N', 'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S']
    },
]




const hidratantesPremium = [

    {
        nombre: 'Neutrogena Hydroboost',
        cantidad: 50,
        valor: 80000,
        categoria: "HIDRATANTE",
        foto: "neutrogena-2",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 2,
        calidad: 'P',
        configuraciones: ['G-RA.-N', 'G-HS.-N', 'S-RA.HS.-N', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-RA.HS.TCM.-N']
    },

    {
        nombre: 'Facial Moisturising Lotion PM',
        cantidad: 52,
        valor: 87900,
        categoria: "HIDRATANTE",
        foto: "pm-lotion",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 8,
        calidad: 'P',
        configuraciones: ['G-RA.-S', 'G-HS.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
            'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S',
            'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'S-RA.HS.-S', 'S-RA.HS.TCM.-S']
    },

    {
        nombre: 'Facial Moisturising Lotion PM',
        cantidad: 52,
        valor: 87900,
        categoria: "HIDRATANTE",
        foto: "pm-lotion",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 32,
        calidad: 'P',
        configuraciones: ['G-A.TCM.-N', 'G-A.TCM.-S', 'G-A.-N', 'G-A.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N', 'G-RA.HS.A.TCM.-S', 'M-HS.-N', 'M-HS.-S',
            'M-A.-N', 'M-A.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-HS.A.-N', 'M-HS.A.-S', 'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N',
            'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N', 'M-RA.HS.A.TCM.-S', 'S-TCM.-S', 'S-RA.A.-S', 'S-HS.A.-S']
    },

    //ESTA SE INTERCAMBIA POR EL TONICO DE CENTELLA ASIATICA
    {
        nombre: 'Crema Hidratante de Cerave',
        cantidad: 454,
        valor: 117900,
        categoria: "HIDRATANTE",
        foto: "cerave-cream",
        tiempo: "MN",
        turno: 20,
        alert: "",
        replace: 42,
        calidad: 'P',
        configuraciones: ['S-RA.-N', 'S-RA.-S']
    },

    //ESTE SE INTERCAMBIA POR EL SEA FENNEL
    {
        nombre: 'Crema Hidratante de Cerave',
        cantidad: 454,
        valor: 117900,
        categoria: "HIDRATANTE",
        foto: "cerave-cream",
        tiempo: "MN",
        turno: 20,
        alert: "",
        replace: 42,
        calidad: 'P',
        configuraciones: ['S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N', 'S-RA.HS.A.TCM.-S']
    },

    //ESTE SE INTERCAMBIA POR EL SEA FENNEL
    {
        nombre: 'Neutrogena Hydroboost',
        cantidad: 50,
        valor: 80000,
        categoria: "HIDRATANTE",
        foto: "neutrogena-2",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 48,
        calidad: 'P',
        configuraciones: ['S-TCM.-N', 'S-RA.A.-N', 'S-HS.A.-N', 'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S']
    },
]




const protectoresEstandar = [
    {
        nombre: 'Aloe Vera Sunscreen FPS+60 de Bioaqua',
        cantidad: 150,
        valor: 27500,
        categoria: "BLOQUEADOR",
        foto: "aloe",
        tiempo: "M",
        turno: 30,
        alert: "",
        replace: 5,
        calidad: 'E',
        configuraciones: ['G-RA.-N', 'G-RA.-S', 'G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
            'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-A.TCM.-N', 'G-A.TCM.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N',
            'G-RA.HS.A.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-HS.-N', 'M-HS.-S', 'M-A.-N', 'M-A.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S', 'M-HS.A.-N', 'M-HS.A.-S',
            'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N', 'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N',
            'M-RA.HS.A.TCM.-S']
    },

    {
        nombre: 'Aloe Vera Sunscreen FPS+60 de Bioaqua',
        cantidad: 150,
        valor: 27500,
        categoria: "BLOQUEADOR",
        foto: "aloe",
        tiempo: "M",
        turno: 30,
        alert: "",
        replace: 41,
        calidad: 'E',
        configuraciones: ['S-RA.-N', 'S-RA.-S', 'S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-N', 'S-RA.A.-S', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S',
        'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N',
        'S-RA.HS.A.TCM.-S']
    }
]




const protectoresPremium = [
    {
        nombre: 'Eucerin Oil Control FPS+50',
        cantidad: 50,
        valor: 134000,
        categoria: "BLOQUEADOR",
        foto: "eucerin",
        tiempo: "M",
        turno: 30,
        alert: "",
        replace: 4,
        calidad: 'P',
        configuraciones: ['G-RA.-N', 'G-RA.-S', 'G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
            'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-A.TCM.-N', 'G-A.TCM.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N',
            'G-RA.HS.A.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-HS.-N', 'M-HS.-S', 'M-A.-N', 'M-A.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S', 'M-HS.A.-N', 'M-HS.A.-S',
            'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N', 'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N',
            'M-RA.HS.A.TCM.-S']
    },

    {
        nombre: 'ISDIN Fusion Water Magic SPF 50',
        cantidad: 50,
        valor: 109900,
        categoria: "BLOQUEADOR",
        foto: "isdin",
        tiempo: "M",
        turno: 30,
        alert: "",
        replace: 40,
        calidad: 'P',
        configuraciones: ['S-RA.-N', 'S-RA.-S', 'S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-N', 'S-RA.A.-S', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S',
        'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N',
        'S-RA.HS.A.TCM.-S']
    }
]




const potenciadoresEstandar = [
    //Su pareja es el differin 
    {
        nombre: 'Serum Niacinamida de Bioaqua',
        cantidad: 30,
        valor: 23900,
        categoria: "POTENCIADOR",
        foto: "niacinamida",
        tiempo: "N",
        turno: 15,
        alert: "",
        replace: 7,
        calidad: 'E',
        configuraciones: ['G-RA.-N', 'G-RA.HS.-N', 'M-RA.-N', 'S-RA.-N']
    },

    //Su pareja es el the ordinary niacinaimda & zinc
    {
        nombre: 'Serum Niacinamida de Bioaqua',
        cantidad: 30,
        valor: 23900,
        categoria: "POTENCIADOR",
        foto: "niacinamida",
        tiempo: "N",
        turno: 15,
        alert: "",
        replace: 11,
        calidad: 'E',
        configuraciones: ['G-RA.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'M-RA.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-S',
        'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.TCM.-S']
    },
    {
        nombre: 'Sérum Hialurónico de Bioaqua',
        cantidad: 30,
        valor: 21900,
        categoria: "POTENCIADOR",
        foto: "bio-hialuronico",
        tiempo: "N",
        turno: 40,
        alert: "",
        replace: 15,
        calidad: 'E',
        configuraciones: ['G-HS.-N', 'G-HS.-S', 'M-HS.-N', 'M-HS.-S', 'S-HS.-N', 'S-HS.-S']
    },

    //Su pareja es el the ordinary retinol, este es el que es usa dos veces por semana
    {
        nombre: 'Sérum Retinol de Vibrant Glamoúr',
        cantidad: 30,
        valor: 36500,
        categoria: "POTENCIADOR",
        foto: "vibrant-retinol",
        tiempo: "N",
        turno: 40,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 17,
        calidad: 'E',
        configuraciones: ['G-A.-N', 'G-RA.A.-N', 'G-HS.A.-N', 'G-A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-A.-N', 'M-HS.A.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.A.TCM.-N', 'M-HS.A.TCM.-N', 'M-RA.HS.A.TCM.-N', 'S-A.-N',
        'S-RA.A.-N', 'S-HS.A.-N', 'S-A.TCM.-N', 'S-RA.HS.A.-N', 'S-RA.A.TCM.-N', 'S-HS.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
    },
    {
        nombre: 'Sérum de Vitamina C Bioaqua',
        cantidad: 30,
        valor: 24500,
        categoria: "POTENCIADOR",
        foto: "bio-vit-c",
        tiempo: "N",
        turno: 15,
        alert: "",
        replace: 19,
        calidad: 'E',
        configuraciones: ['G-A.-S', 'G-TCM.-S', 'G-HS.A.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'M-A.-S', 'M-TCM.-S', 'M-HS.A.-S', 'M-A.TCM.-S', 'M-HS.A.TCM.-S', 'S-A.-S', 'S-HS.A.-S']
    },

    //Su pareja es el acido glicolico de the ordinary
    {
        nombre: 'Pads Ácido Glólico de Elaimei',
        cantidad: 100,
        valor: 24900,
        categoria: "POTENCIADOR",
        foto: "elaimei-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 21,
        calidad: 'E',
        configuraciones: ['G-TCM.-N', 'G-HS.TCM.-N', 'M-TCM.-N', 'M-RA.TCM.-N', 'M-HS.TCM.-N', 'M-RA.HS.TCM.-N']
    },

    //Su pareja es el differin
    {
        nombre: 'Pads Ácido Glicólico de Elaimei',
        cantidad: 100,
        valor: 24900,
        categoria: "POTENCIADOR",
        foto: "elaimei-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 23,
        calidad: 'E',
        configuraciones: []
    },

    //Su pareja es el differin
    {
        nombre: 'Sérum Retinol de Vibrant Glamoúr',
        cantidad: 30,
        valor: 36500,
        categoria: "POTENCIADOR",
        foto: "vibrant-retinol",
        tiempo: "N",
        turno: 40,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 25,
        calidad: 'E',
        configuraciones: ['G-RA.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'M-RA.A.-N']
    },

    //Su pareja es el otro retinol, pero estos son una vez por semana
    {
        nombre: 'Sérum Retinol de Vibrant Glamoúr',
        cantidad: 30,
        valor: 36500,
        categoria: "POTENCIADOR",
        foto: "vibrant-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO UNA VEZ POR SEMANA",
        replace: 27,
        calidad: 'E',
        configuraciones: ['G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S']
    },

    //Su pareja es el ácido láctico
    {
        nombre: 'Serum Niacinamida de Bioaqua',
        cantidad: 30,
        valor: 23900,
        categoria: "POTENCIADOR",
        foto: "niacinamida",
        tiempo: "N",
        turno: 15,
        alert: "",
        replace: 39,
        calidad: 'E',
        configuraciones: ['M-HS.TCM.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-HS.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
    },

    //Su pareja es el ácido glicolico de the ordinary
    {
        nombre: 'Serum Niacinamida de Bioaqua',
        cantidad: 30,
        valor: 23900,
        categoria: "POTENCIADOR",
        foto: "niacinamida",
        tiempo: "N",
        turno: 15,
        alert: "",
        replace: 51,
        calidad: 'E',
        configuraciones: ['S-RA.TCM.-N']
    },
]




const potenciadoresPremium = [
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 120900,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 6,
        calidad: 'P',
        configuraciones: ['G-RA.-N', 'G-RA.HS.-N', 'M-RA.-N', 'S-RA.-N']
    },
    {
        nombre: 'The Ordinary Niacinamida 10% + Zinc 1%',
        cantidad: 30,
        valor: 77900,
        categoria: "POTENCIADOR",
        foto: "to-niacinamida",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 10,
        calidad: 'P',
        configuraciones: ['G-RA.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'M-RA.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-S',
        'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.TCM.-S']
    },
    {
        nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
        cantidad: 30,
        valor: 83900,
        categoria: "POTENCIADOR",
        foto: "to-hialuronico",
        tiempo: "N",
        turno: 40,
        alert: "",
        replace: 14,
        calidad: 'P',
        configuraciones: ['G-HS.-N', 'G-HS.-S', 'M-HS.-N', 'M-HS.-S', 'S-HS.-N', 'S-HS.-S']
    },
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        cantidad: 30,
        valor: 73100,
        categoria: "POTENCIADOR",
        foto: "to-retinol",
        tiempo: "N",
        turno: 40,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 16,
        calidad: 'P',
        configuraciones: ['G-A.-N', 'G-RA.A.-N', 'G-HS.A.-N', 'G-A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-A.-N', 'M-HS.A.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.A.TCM.-N', 'M-HS.A.TCM.-N', 'M-RA.HS.A.TCM.-N', 'S-A.-N',
        'S-RA.A.-N', 'S-HS.A.-N', 'S-A.TCM.-N', 'S-RA.HS.A.-N', 'S-RA.A.TCM.-N', 'S-HS.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
    },
    {
        nombre: 'CeraVe Skin Renewing Vitamin C Serum',
        cantidad: 30,
        valor: 138900,
        categoria: "POTENCIADOR",
        foto: "cerave-vit-c",
        tiempo: "N",
        turno: 15,
        alert: "",
        replace: 18,
        calidad: 'P',
        configuraciones: ['G-A.-S', 'G-TCM.-S', 'G-HS.A.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'M-A.-S', 'M-TCM.-S', 'M-HS.A.-S', 'M-A.TCM.-S', 'M-HS.A.TCM.-S', 'S-A.-S', 'S-HS.A.-S']
    },
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        cantidad: 240,
        valor: 103700,
        categoria: "POTENCIADOR",
        foto: "to-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 20,
        calidad: 'P',
        configuraciones: ['G-TCM.-N', 'G-HS.TCM.-N', 'M-TCM.-N', 'M-RA.TCM.-N', 'M-HS.TCM.-N', 'M-RA.HS.TCM.-N']
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 120900,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 22,
        calidad: 'P',
        configuraciones: []
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 120900,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 40,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 24,
        calidad: 'P',
        configuraciones: ['G-RA.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'M-RA.A.-N']
    },
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        cantidad: 30,
        valor: 73100,
        categoria: "POTENCIADOR",
        foto: "to-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO UNA VEZ POR SEMANA",
        replace: 26,
        calidad: 'P',
        configuraciones: ['G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S']
    },
    {
        nombre: 'Ácido Láctico 10% de The Ordinary',
        cantidad: 30,
        valor: 93000,
        categoria: "POTENCIADOR",
        foto: "to-lactic",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 38,
        calidad: 'P',
        configuraciones: ['M-HS.TCM.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-HS.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
    },
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        cantidad: 240,
        valor: 103700,
        categoria: "POTENCIADOR",
        foto: "to-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 50,
        calidad: 'P',
        configuraciones: ['S-RA.TCM.-N']
    },
]
















































// Función para verificar duplicados
function hayDuplicados(array) {
    const conjuntoUnico = new Set(array);  // Elimina duplicados
    return conjuntoUnico.size !== array.length;  // Si el tamaño difiere, había duplicados
}

// Función para verificar si las configuraciones son las mismas entre Estandar y Premium
function sonTodosIguales(standardArray, premiumArray) {
    if (standardArray.length !== premiumArray.length) return false;  // Si los arrays no tienen la misma longitud, no son iguales

    for (let i = 0; i < standardArray.length; i++) {
        if (JSON.stringify(standardArray[i].configuraciones) !== JSON.stringify(premiumArray[i].configuraciones)) {
            return false;  // Si cualquier objeto en las configuraciones es diferente, no son iguales
        }
    }

    return true;  // Si pasa todos los chequeos, son iguales
}

// Función para obtener strings únicos de todas las configuraciones
function obtenerStringsUnicos() {
    const todosLosStrings = [];

    // Función interna para agregar strings únicos a la lista
    function agregarStringsUnicos(array) {
        array.forEach(objeto => {
            objeto.configuraciones.forEach(config => {
                if (!todosLosStrings.includes(config)) {
                    todosLosStrings.push(config);  // Solo agrega si no está ya en la lista
                }
            });
        });
    }

    // Recorrer todas las categorías (Estandar y Premium)
    agregarStringsUnicos(limpiadoresEstandar);
    agregarStringsUnicos(limpiadoresPremium);
    agregarStringsUnicos(hidratantesEstandar);
    agregarStringsUnicos(hidratantesPremium);
    agregarStringsUnicos(protectoresEstandar);
    agregarStringsUnicos(protectoresPremium);
    agregarStringsUnicos(potenciadoresEstandar);
    agregarStringsUnicos(potenciadoresPremium);

    // Ordenar alfabéticamente
    return todosLosStrings.sort();
}

// Función para generar la tabla con los strings únicos
function generarTablaStringsUnicos() {
    const stringsUnicos = obtenerStringsUnicos();
    const tabla = document.getElementById('tablaStringsUnicos');
    const cuerpoTabla = document.createElement('tbody');  // Crear cuerpo de la tabla

    // Limpiar el contenido anterior de la tabla
    tabla.innerHTML = '';

    // Añadir encabezado de la tabla
    const encabezado = document.createElement('thead');
    encabezado.innerHTML = '<tr><th>String Único</th></tr>';
    tabla.appendChild(encabezado);

    // Añadir filas con los strings únicos
    stringsUnicos.forEach(string => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${string}</td>`;
        cuerpoTabla.appendChild(fila);
    });

    tabla.appendChild(cuerpoTabla);  // Añadir cuerpo a la tabla
}

// Función para sumar las configuraciones, verificar duplicados, y mostrar resultados
function mostrarResultadosConfiguraciones() {

    // Limpiadores
    let sumaLimpiadoresEstandar = 0;
    let hayDuplicadosLimpiadoresEstandar = false;
    limpiadoresEstandar.forEach(objeto => {
        sumaLimpiadoresEstandar += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosLimpiadoresEstandar = true;
        }
    });
    let sonIgualesLimpiadores = sonTodosIguales(limpiadoresEstandar, limpiadoresPremium);
    document.getElementById('limpiadoresEstandar').innerHTML = `${sumaLimpiadoresEstandar} - Duplicados: ${hayDuplicadosLimpiadoresEstandar ? 'Sí' : 'No'} - ${sonIgualesLimpiadores ? 'Son todos lo mismo' : 'No son lo mismo'}`;

    // Limpiadores Premium
    let sumaLimpiadoresPremium = 0;
    let hayDuplicadosLimpiadoresPremium = false;
    limpiadoresPremium.forEach(objeto => {
        sumaLimpiadoresPremium += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosLimpiadoresPremium = true;
        }
    });
    document.getElementById('limpiadoresPremium').innerHTML = `${sumaLimpiadoresPremium} - Duplicados: ${hayDuplicadosLimpiadoresPremium ? 'Sí' : 'No'}`;

    // Hidratantes
    let sumaHidratantesEstandar = 0;
    let hayDuplicadosHidratantesEstandar = false;
    hidratantesEstandar.forEach(objeto => {
        sumaHidratantesEstandar += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosHidratantesEstandar = true;
        }
    });
    let sonIgualesHidratantes = sonTodosIguales(hidratantesEstandar, hidratantesPremium);
    document.getElementById('hidratantesEstandar').innerHTML = `${sumaHidratantesEstandar} - Duplicados: ${hayDuplicadosHidratantesEstandar ? 'Sí' : 'No'} - ${sonIgualesHidratantes ? 'Son todos lo mismo' : 'No son lo mismo'}`;

    let sumaHidratantesPremium = 0;
    let hayDuplicadosHidratantesPremium = false;
    hidratantesPremium.forEach(objeto => {
        sumaHidratantesPremium += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosHidratantesPremium = true;
        }
    });
    document.getElementById('hidratantesPremium').innerHTML = `${sumaHidratantesPremium} - Duplicados: ${hayDuplicadosHidratantesPremium ? 'Sí' : 'No'}`;

    // Protectores
    let sumaProtectoresEstandar = 0;
    let hayDuplicadosProtectoresEstandar = false;
    protectoresEstandar.forEach(objeto => {
        sumaProtectoresEstandar += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosProtectoresEstandar = true;
        }
    });
    let sonIgualesProtectores = sonTodosIguales(protectoresEstandar, protectoresPremium);
    document.getElementById('protectoresEstandar').innerHTML = `${sumaProtectoresEstandar} - Duplicados: ${hayDuplicadosProtectoresEstandar ? 'Sí' : 'No'} - ${sonIgualesProtectores ? 'Son todos lo mismo' : 'No son lo mismo'}`;

    let sumaProtectoresPremium = 0;
    let hayDuplicadosProtectoresPremium = false;
    protectoresPremium.forEach(objeto => {
        sumaProtectoresPremium += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosProtectoresPremium = true;
        }
    });
    document.getElementById('protectoresPremium').innerHTML = `${sumaProtectoresPremium} - Duplicados: ${hayDuplicadosProtectoresPremium ? 'Sí' : 'No'}`;

    // Potenciadores
    let sumaPotenciadoresEstandar = 0;
    let hayDuplicadosPotenciadoresEstandar = false;
    potenciadoresEstandar.forEach(objeto => {
        sumaPotenciadoresEstandar += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosPotenciadoresEstandar = true;
        }
    });
    let sonIgualesPotenciadores = sonTodosIguales(potenciadoresEstandar, potenciadoresPremium);
    document.getElementById('potenciadoresEstandar').innerHTML = `${sumaPotenciadoresEstandar} - Duplicados: ${hayDuplicadosPotenciadoresEstandar ? 'Sí' : 'No'} - ${sonIgualesPotenciadores ? 'Son todos lo mismo' : 'No son lo mismo'}`;

    let sumaPotenciadoresPremium = 0;
    let hayDuplicadosPotenciadoresPremium = false;
    potenciadoresPremium.forEach(objeto => {
        sumaPotenciadoresPremium += objeto.configuraciones.length;
        if (hayDuplicados(objeto.configuraciones)) {
            hayDuplicadosPotenciadoresPremium = true;
        }
    });
    document.getElementById('potenciadoresPremium').innerHTML = `${sumaPotenciadoresPremium} - Duplicados: ${hayDuplicadosPotenciadoresPremium ? 'Sí' : 'No'}`;

    // Generar la tabla con strings únicos
    generarTablaStringsUnicos();
}

// Ejecutar la función automáticamente al cargar la página
window.onload = mostrarResultadosConfiguraciones;


