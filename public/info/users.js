const users = [
    {
        datosCliente: ["Gabriel Paris", "51903632", "Calle 144 #13 - 84", "Conjunto La Reforma II Casa 9", "Bogotá", "3102200658", "c"],
        casoParticular: ["G", ["RA.", "HS."], "S"],
        pedidos: [
            {
                activo: false,
                codigo: 1905,
                estado: "pendiente",
                pago: "n",
                contenido: ["Limpiador Milk Hidrolizada de Sadoer", "Sérum Hialurónico 2% + B5 The Ordinary"],
                envio: 6000,
                total: 139000,
                entregaEstimada: "17 de Dic.",
                fechaPedido: "24 de Diciembre, 2024"
            },
            {
                activo: true,
                codigo: 1905,
                estado: "enviado",
                pago: "c",
                contenido: ["Limpiador Milk Hidrolizada de Sadoer"],
                envio: 6000,
                total: 39000,
                entregaEstimada: "17 de Dic.",
                fechaPedido: "6 de Agosto, 2024"
            },
            {
                activo: true,
                codigo: 1905,
                estado: "enviado",
                pago: "c",
                contenido: ["Limpiador Milk Hidrolizada de Sadoer", "Sérum Hialurónico 2% + B5 The Ordinary"],
                envio: 6000,
                total: 139000,
                entregaEstimada: "17 de Dic.",
                fechaPedido: "17 de Mayo, 2024"
            }
        ],
        rutinaActual: [
            {
                categoria: "Limpiador",
                render: false,
                included: false,
                primero: {
                    nombre: 'Limpiador Milk Hidrolizada de Sadoer',
                    cantidad: 120,
                    valor: 31200,
                    categoria: "LIMPIADOR",
                    foto: "sadoer-milk",
                    tiempo: "MN",
                    turno: 10,
                    alert: "",
                    replace: 45,
                    calidad: 'E'
                },
                segundo: {
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
                }
            },
            {
                categoria: "Hidratante",
                render: true,
                included: false,
                primero: {
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
                segundo: {
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
                }
            },
            {
                categoria: "Bloqueador",
                render: true,
                included: false,
                primero: {
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
                segundo: {
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
                }
            },
            {
                categoria: "Potenciador",
                render: false,
                included: false,
                primero: {
                    nombre: 'Sérum Hialurónico de Bioaqua',
                    cantidad: 30,
                    valor: 21900,
                    categoria: "POTENCIADOR",
                    foto: "bio-hialuronico",
                    tiempo: "MN",
                    turno: 40,
                    alert: "",
                    replace: 15,
                    calidad: 'E'
                },
                segundo: {
                    nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
                    cantidad: 30,
                    valor: 63000,
                    categoria: "POTENCIADOR",
                    foto: "to-hialuronico",
                    tiempo: "MN",
                    turno: 40,
                    alert: "SOLO DÍA DE POR MEDIO",
                    replace: 14,
                    calidad: 'P'
                }
            },
        ],
    },
]