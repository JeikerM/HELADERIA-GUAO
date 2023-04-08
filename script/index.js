const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'Hello Vue!',
        distribuidoras: [{ciudad:'Caracas', direccion:'Av. Lecuna Esquina el conde frente al campo de Beisbol "El Capu"',   ws:'https://api.whatsapp.com/send?phone=584122091837&text=¡Hola buenas tardes!', imagen:'./image/image carrousel 3.jpg'}, 
                        {ciudad:'Caracas', direccion:'Catia Calle Bolivia 2da avenida Nueva Caracas', ws:'https://api.whatsapp.com/send?phone=584241505167&text=¡Hola buenas tardes!', imagen:'./image/image carrousel 3.jpg'},
                        {ciudad:'Caracas', direccion:'Caricuao Redoma de Ruiz Pineda, frente al supremo.', ws:'https://api.whatsapp.com/send?phone=584125931370&text=¡Hola buenas tardes!', imagen:'./image/image carrousel 3.jpg'},
                        {ciudad:'Miranda', direccion:'Guatire Calle sucre y Anzoátegui, Res. Belén Blanco, local B, PB. Guatire.', ws:'https://api.whatsapp.com/send?phone=584124221688&text=¡Hola buenas tardes!', imagen:'./image/image carrousel 3.jpg'},
                        {ciudad:'Miranda', direccion:'Los Teques Bajada El Tambor frente a la urbanización Simón Bolívar , Centro Comercial San José.', ws:'https://api.whatsapp.com/send?phone=584120195058&text=¡Hola buenas tardes!', imagen:'./image/image carrousel 3.jpg'}
                        ],
        heladerias: [{ciudad:'Caracas', direccion:'CC Propatria Calle sucre y Anzoátegui, Res. Belén Blanco, local B, PB. Guatire.', ws:'#', imagen:'./image/guatire.jpg'}, 
                    {ciudad:'Caracas', direccion:'Centro Av. José Vicente Rangel Norte 4, esquina el conde.', ws:'#', imagen:'./image/guatire.jpg'},
                    ],
    }
    }
}).mount('#app')