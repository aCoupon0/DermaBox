const replaceData = [
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
        calidad: 'E'
    },
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
        calidad: 'P'
    },

    //HIDRATANTES
    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 13,
        alert: "",
        replace: 3,
        calidad: 'E'
    },
    {
        nombre: 'Neutrogena Hydroboost',
        cantidad: 50,
        valor: 73500,
        categoria: "HIDRATANTE",
        foto: "neutrogena-2",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 2,
        calidad: 'P'
    },

    //BLOQUEADORES
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
        calidad: 'E'
    },
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
        calidad: 'P'
    },

    //POTENCIADORES
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
        calidad: 'E'
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 134100,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 6,
        calidad: 'P'
    },

    //ENTRE TONICO CENTELLA Y FACIAL PM
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE serum nia. bioaqua Y serum nia. the ordinary
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE espuma 4 en 1 Y roche-posay effaclar
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
        calidad: 'E'
    },
    {
        nombre: 'La Roche-Posay Effaclar Puryfing',
        cantidad: 200,
        valor: 140000,
        categoria: "LIMPIADOR",
        foto: "effaclar",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 12,
        calidad: 'P'
    },

    //ENTRE SERUMs DE HIALURONICOS
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
        calidad: 'E'
    },
    {
        nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
        cantidad: 30,
        valor: 63000,
        categoria: "POTENCIADOR",
        foto: "to-hialuronico",
        tiempo: "N",
        turno: 40,
        alert: "",
        replace: 14,
        calidad: 'P'
    },

    //ENTRE SERUMs DE RETINOL
    {
        nombre: 'Sérum Retinol de Vibrant Glamoúr',
        cantidad: 30,
        valor: 36500,
        categoria: "POTENCIADOR",
        foto: "vibrant-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 17,
        calidad: 'E',
    },
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        cantidad: 30,
        valor: 73500,
        categoria: "POTENCIADOR",
        foto: "to-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 16,
        calidad: 'P'
    },

    //ENTRE VITAMINAS Cs
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE ÁCIDOS GLICÓLICOS
    {
        nombre: 'Pads Ácido Glicólico de Elaimei',
        cantidad: 100,
        valor: 24900,
        categoria: "POTENCIADOR",
        foto: "elaimei-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 21,
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        cantidad: 240,
        valor: 122300,
        categoria: "POTENCIADOR",
        foto: "to-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 20,
        calidad: 'P'
    },

    //ENTRE ÁCIDOS GLICÓLICO Y diferrin
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
        calidad: 'E'
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 134100,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 22,
        calidad: 'P'
    },

    //ENTRE retinol y adapaleno
    {
        nombre: 'Sérum Retinol de Vibrant Glamoúr',
        cantidad: 30,
        valor: 36500,
        categoria: "POTENCIADOR",
        foto: "vibrant-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 25,
        calidad: 'E'
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 134100,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 24,
        calidad: 'P'
    },

    //ENTRE retinoles en piel sensible (una vez por semana en cambio de dos)
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
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        cantidad: 30,
        valor: 73500,
        categoria: "POTENCIADOR",
        foto: "to-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO UNA VEZ POR SEMANA",
        replace: 26,
        calidad: 'P'
    },

    //ENTRE limpiadores en piel sensible (solo por la noche)
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
        calidad: 'E'
    },
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
        calidad: 'P'
    },

    //ENTRE TONICO CENTELLA Y FACIAL PM para piel sensible (solo por la noche)
    //ESTE SE REPITE YA EN EL 8 Y 9, ENTONCES POR AHORA SE IGNORA
    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 13,
        alert: "",
        replace: 31,
        calidad: 'E'
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
        replace: 30,
        calidad: 'P'
    },

    //ENTRE TONICO SEA FENNEL Y FACIAL PM 
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE ESPUMA 4 EN 1 Y HYDRATING CLEANSER (Solo por la noche) 
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
        calidad: 'E'
    },
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
        calidad: 'P'
    },

    //ENTRE ESPUMA 4 EN 1 Y HYDRATING CLEANSER (dia y noche) 
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
        calidad: 'E'
    },
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
        calidad: 'P'
    },

    //ENTRE SERUM DE NIACINAMIDA Y ACIDO LACTICO
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE BLOQUEADORES EN PIEL SECA
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
        calidad: 'P'
    },


    //ENTRE TONICO CENTELLA Y CREMA CERAVE
    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 13,
        alert: "",
        replace: 43,
        calidad: 'E'
    },
    {
        nombre: 'Crema Hidratante de Cerave',
        cantidad: 454,
        valor: 91900,
        categoria: "HIDRATANTE",
        foto: "cerave-cream",
        tiempo: "MN",
        turno: 20,
        alert: "",
        replace: 42,
        calidad: 'P'
    },

    //ENTRE LIMPIADOR MILK Y CERAVE HYDRATING
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
        calidad: 'E'
    },
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
        calidad: 'P'
    },

    //ENTRE SEA FENNEL Y MOISTURIZING CREAM DE CERAVE
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
        calidad: 'E'
    },
    {
        nombre: 'Crema Hidratante de Cerave',
        cantidad: 454,
        valor: 91900,
        categoria: "HIDRATANTE",
        foto: "cerave-cream",
        tiempo: "MN",
        turno: 20,
        alert: "",
        replace: 46,
        calidad: 'P'
    },


    //ENTRE SEA FENNEL Y NEUTROGENA HYDROBOOST
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
        calidad: 'E'
    },
    {
        nombre: 'Neutrogena Hydroboost',
        cantidad: 50,
        valor: 73500,
        categoria: "HIDRATANTE",
        foto: "neutrogena-2",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 48,
        calidad: 'P'
    },

    //ENTRE SERUM NIACINAMIDA Y TONICO GLICOLICO
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
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        cantidad: 240,
        valor: 122300,
        categoria: "POTENCIADOR",
        foto: "to-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 50,
        calidad: 'P'
    },
]

export default replaceData;