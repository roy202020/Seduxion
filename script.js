// ==========================================
// CONFIGURACIÓN PRINCIPAL
// ==========================================
// Tu número real de WhatsApp con código de país (ej. 51 para Perú)
const NUMERO_WHATSAPP = "51900000000"; 

// ==========================================
// LISTA / ARRAY DE PRODUCTOS CON MÚLTIPLES FOTOS
// ==========================================
const productos = [
    {
        id: 1,
        nombre: "Conjunto Sexy Enfermera Seducción",
        precio: 65.00,
        tallas: "S, M",
        descripcion: "Vestido corto de enfermera en tono blanco con vivos y detalles de cruz en rojo pasión. Confeccionado en tela suave y elástica con abotonadura frontal para un ajuste cómodo y seductor.",
        imagenes: [
            "img/enfermera delantera.jpeg",
            "img/enfermera detras.jpeg"
        ],
        masVendido: true
    },
    {
        id: 2,
        nombre: "Conjunto Lencería French Maid Seduction",
        precio: 30.00,
        tallas: "M, L",
        descripcion: "Conjunto estilo sirvienta francesa de 2 piezas. Incluye top halter con lazo elegante en el cuello, falda corta con mini delantal de bobos blancos y liguero a juego. Diseño coquetón con detalles de tul y encaje.",
        imagenes: [
            "img/mucama delantera.jpeg",
            "img/mucama trasera.jpeg"
        ],
        masVendido: false
    },
    {
        id: 3,
        nombre: "Baby-doll / Vestido French Maid Seductor",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Elegante vestido corto estilo sirvienta francesa con detalles de cintas cruzadas tipo corsé en el torso, tirantes con vuelos de encaje blanco y mini delantal integrado. Ideal para una noche especial.",
        imagenes: [
            "img/mucama 2.jpeg",
            "img/mucama 2.2.jpeg"
        ],
        masVendido: true
    },
    {
        id: 4,
        nombre: "Set de Tangas Rib Cotton Comfort (Pack x3)",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Pack de 3 pantys tipo tanga en tejido acanalado de algodón super suave. Diseñadas para brindar máxima comodidad diaria con un toque coqueto de lazo en la cintura.",
        imagenes: [
            "img/tri calzon.jpeg",
            "img/tri calzon 2.jpeg",
            "img/tri calzon 3.jpeg",
            "img/tri calzon 4.jpeg"
        ],
        masVendido: true
    },
    {
        id: 5,
        nombre: "Set Lencería Seducción Satén Rojo Pasión",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Conjunto de 2 piezas elaborado en suave satén color rojo vino con delicados acabados de encaje en el busto. Cuenta con tirantes ajustables en hombros y caderas para un ajuste perfecto.",
        imagenes: [
            "img/lenceria rojo 1.jpeg",
            "img/lenceria rojo 2.jpeg"
        ],
        masVendido: true
    },
    {
        id: 6,
        nombre: "Set Lencería Sensual Lazos Pasión",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Conjunto de lencería sensual en tono rojo con detalles de tiras strappy, moños decorativos y encaje calado. Incluye top halter y tanga ajustable con tiras laterales.",
        imagenes: [
            "img/hilo rojo 1.jpeg",
            "img/hilo rojo 2.jpeg"
        ],
        masVendido: true
    },
    {
        id: 7,
        nombre: "Baby-doll Noir Glamour",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Elegante y cómodo baby-doll corto en tono negro con delicado encaje en el escote y ruedo. Destaca por sus coquetas aberturas laterales ajustables con lazos.",
        imagenes: [
            "img/baby dol 1.jpeg",
            "img/baby dol 2.jpeg",
            "img/baby dol 3.jpeg"
        ],
        masVendido: true
    },
    {
        id: 8,
        nombre: "Body Sensual Espalda Descubierta Seduction",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Irresistible body confeccionado totalmente en encaje negro con diseño halter. Destaca por su profunda espalda descubierta adornada con un elegante dije de corazón y acabados de lujo.",
        imagenes: [
            "img/body 2.1.jpeg",
            "img/body 2.2.jpeg"
        ],
        masVendido: true
    },
    {
        id: 9,
        nombre: "Baby-doll Encaje Blanco Angelic",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Romántico y sensual baby-doll corto en fino encaje blanco transparente con motivos florales. Posee copas con aros para realzar el busto, delicados lazos y ruedo inferior con volados.",
        imagenes: [
            "img/conejita 1.jpeg",
            "img/conejita 2.jpeg"
        ],
        masVendido: true
    },
    {
        id: 10,
        nombre: "Conjunto Seducción Encaje Rose",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Femenino conjunto de lencería fina confeccionado en delicado encaje floral con acabados suaves al tacto.",
        imagenes: [
            "img/encaje 1.jpeg",
            "img/encaje 2.jpeg",
            "img/encaje 3.jpeg"
        ],
        masVendido: true
    },
    {
        id: 11,
        nombre: "Set Lencería White Pure Romance",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Elegante conjunto en fino encaje blanco, diseñado para resaltar la silueta con delicadeza y elegancia.",
        imagenes: [
            "img/encaje blanco 1.jpeg",
            "img/encaje blanco 2.jpeg",
            "img/encaje blanco 3.jpeg",
            "img/encaje blanco 4.jpeg"
        ],
        masVendido: true
    },
    {
        id: 12,
        nombre: "Body Noir Encaje Night Temptation",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Diseño audaz y sofisticado en encaje negro calado, perfecto para una ocasión especial.",
        imagenes: [
            "img/encaje negro 1.jpeg",
            "img/encaje negro 2.jpeg",
            "img/encaje negro 3.jpeg"
        ],
        masVendido: true
    },
    {
        id: 13,
        nombre: "Conjunto Satén Passion Red",
        precio: 28.50,
        tallas: "S, M",
        descripcion: "Conjunto de satén sedoso en color rojo intenso con finos bordados que resaltan el busto.",
        imagenes: [
            "img/lenceria rojo 1.jpeg",
            "img/lenceria rojo 2.jpeg"
        ],
        masVendido: true
    }
];

// ==========================================
// RENDERIZADO DINÁMICO DEL CATÁLOGO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('catalogo-productos');
    
    productos.forEach(p => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'producto-card';

        const badgeHtml = p.masVendido ? '<span class="badge">Más vendido</span>' : '';

        // Generamos la tira de miniaturas si el producto tiene más de una foto
        let miniaturasHtml = '';
        if (p.imagenes && p.imagenes.length > 1) {
            miniaturasHtml = `<div class="galeria-miniaturas">`;
            p.imagenes.forEach((imgUrl, index) => {
                const activeClass = index === 0 ? 'activa' : '';
                miniaturasHtml += `
                    <img src="${imgUrl}" 
                         class="miniatura ${activeClass}" 
                         alt="Vista ${index + 1}" 
                         onclick="cambiarImagenPrincipal(this, 'img-principal-${p.id}')">
                `;
            });
            miniaturasHtml += `</div>`;
        }

        tarjeta.innerHTML = `
            <div class="img-wrapper">
                <img id="img-principal-${p.id}" src="${p.imagenes[0]}" alt="${p.nombre}">
                ${badgeHtml}
            </div>
            ${miniaturasHtml}
            <div class="info-producto">
                <h3>${p.nombre}</h3>
                <p class="precio">$${p.precio.toFixed(2)}</p>
                <p class="descripcion">Tallas: ${p.tallas}<br>${p.descripcion}</p>
                <button class="btn-whatsapp" onclick="enviarWhatsApp('${p.nombre}', '$${p.precio.toFixed(2)}')">
                    💬 Pedir por WhatsApp
                </button>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
});

// ==========================================
// INTERACCIÓN: CAMBIAR IMAGEN PRINCIPAL
// ==========================================
function cambiarImagenPrincipal(miniaturaElemento, idImagenPrincipal) {
    const imgPrincipal = document.getElementById(idImagenPrincipal);
    imgPrincipal.src = miniaturaElemento.src;

    // Quitar borde activo a todas las miniaturas del producto
    const contenedorGaleria = miniaturaElemento.parentElement;
    const miniaturas = contenedorGaleria.querySelectorAll('.miniatura');
    miniaturas.forEach(img => img.classList.remove('activa'));

    // Activar miniatura seleccionada
    miniaturaElemento.classList.add('activa');
}

// ==========================================
// REDIRECCIÓN A WHATSAPP
// ==========================================
function enviarWhatsApp(nombreProducto, precio) {
    const mensaje = `¡Hola *Seda & Encaje*! 🌹\nMe interesa consultar disponibilidad para la prenda:\n\n📌 *Producto:* ${nombreProducto}\n💰 *Precio:* ${precio}\n\n¿Tienen disponibilidad en stock?`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}