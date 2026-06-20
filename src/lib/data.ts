import { Project } from '@/types';

export const projects: Project[] = [
    {
        slug: 'agroscan',
        title: 'AgroScan',
        tagline: 'Inteligencia Artificial para la Salud Agrícola',
        description:
            'Solución móvil nativa para la detección temprana de fitopatologías mediante Visión Artificial y Georreferenciación.',
        longDescription:
            'AgroScan es una aplicación Android diseñada para transformar la gestión agrícola tradicional en Agricultura 4.0. La app permite a los agricultores monitorear sus cultivos en tiempo real, utilizando un motor de IA que identifica enfermedades foliares con solo una fotografía. Integra datos meteorológicos y geolocalización para ofrecer un diagnóstico contextualizado que ayuda a reducir el uso indiscriminado de pesticidas y optimizar la cosecha.',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'MVVM',
            'Retrofit 2',
            'OkHttp',
            'GSON',
            'YOLOv8',
            'Roboflow',
            'CameraX',
            'Google Maps SDK',
            'OSMDroid',
            'FastAPI',
            'PostgreSQL',
            'Coroutines',
            'StateFlow',
        ],
        features: [
            {
                title: 'Detección IA (Edge-to-Cloud)',
                description:
                    'Integración con modelos YOLO para la detección de plagas (Roya, Mancha Foliar, Tizón) con +90% de confianza.',
            },
            {
                title: 'Geo-Gestión de Parcelas',
                description:
                    'Registro y visualización de zonas de cultivo mediante Google Maps y polígonos georreferenciados.',
            },
            {
                title: 'Dashboard Meteorológico',
                description:
                    'Sincronización con APIs climáticas para monitorear temperatura, humedad y riesgo de plagas por clima.',
            },
            {
                title: 'Historial de Diagnóstico',
                description:
                    'Almacenamiento persistente de análisis para el seguimiento evolutivo de la salud del campo.',
            },
            {
                title: 'Control de Hardware',
                description:
                    'Manejo avanzado de la cámara y control de iluminación (linterna) para entornos rurales de baja visibilidad.',
            },
        ],
        challenges: [
            {
                problem: 'Ambigüedad en tipos de datos al integrar múltiples librerías (Retrofit vs Models).',
                solution:
                    'Implementación de Type Aliasing en Kotlin para garantizar la integridad de las peticiones.',
            },
            {
                problem: 'Sincronización de hardware de cámara en ciclos de vida complejos de Android.',
                solution:
                    'Uso de Lifecycle-aware components para gestionar la sesión de cámara y el control de linterna sin fugas de memoria.',
            },
            {
                problem: 'Consumo de datos eficiente en zonas rurales.',
                solution:
                    'Implementación de una capa de Caché Local que permite visualizar el historial de análisis sin conexión a internet.',
            },
        ],
        role: 'Arquitecto y Desarrollador Principal: Responsable del diseño de la arquitectura móvil, integración de APIs de IA y desarrollo de la interfaz de usuario.',
        githubUrl: 'https://github.com/Cramess78',
        featured: true,
    },
    {
        slug: 'bodeapp',
        title: 'BodeApp',
        tagline: 'Gestión Inteligente para Bodegas',
        description:
            'Aplicación Android nativa para digitalizar la gestión de pequeñas y medianas bodegas con control de inventario, ventas y reportes financieros automáticos.',
        longDescription:
            'BodeApp es una aplicación Android nativa diseñada para digitalizar la gestión de pequeñas y medianas bodegas. Permite a los dueños de negocios controlar su inventario en tiempo real, registrar ventas y compras detalladas, y obtener reportes financieros automáticos (utilidad neta, margen de ganancia) con la capacidad de exportar datos en formatos profesionales como PDF y Excel.',
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2069&auto=format&fit=crop',
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'MVVM',
            'Clean Architecture',
            'Room (SQLite)',
            'StateFlow & Flow',
            'Jetpack Navigation',
            'PdfDocument',
            'CSV/UTF-8',
            'ViewModelProvider.Factory',
            'Material Design 3',
        ],
        features: [
            {
                title: 'Gestión de Inventario Dinámico',
                description:
                    'Control de stock automático que se actualiza con cada venta y compra registrada.',
            },
            {
                title: 'Registro Multimodal de Pagos',
                description:
                    'Soporte para Efectivo, Yape, Plin, Tarjeta y Transferencia, permitiendo un arqueo de caja preciso.',
            },
            {
                title: 'Dashboard de Reportes',
                description:
                    'Visualización de utilidad neta, productos más vendidos y estadísticas por periodos (Día, Semana, Mes).',
            },
            {
                title: 'Exportación Profesional',
                description:
                    'PDF con facturas y reportes de cierre de caja listos para imprimir, y Excel para análisis y contabilidad.',
            },
            {
                title: 'UX/UI Moderna',
                description:
                    'Diseño basado en Material Design 3 con modo oscuro/claro y navegación intuitiva.',
            },
        ],
        challenges: [
            {
                problem: 'Sincronización de stock: asegurar que el inventario se reduzca solo si la venta se confirma correctamente.',
                solution:
                    'Implementación de lógica transaccional en Room para garantizar la atomicidad de las operaciones de venta.',
            },
            {
                problem: 'Compatibilidad de Excel: codificación incorrecta de caracteres especiales (S/, tildes) en dispositivos móviles.',
                solution:
                    'Implementación de Byte Order Mark (BOM) en los archivos CSV para compatibilidad total con Microsoft Excel.',
            },
            {
                problem: 'Persistencia de tipos complejos: mapear Enums de métodos de pago a tipos compatibles con SQLite.',
                solution:
                    'Uso de TypeConverters de Room para transformar los Enums a tipos primitivos y viceversa de forma transparente.',
            },
        ],
        role: 'Desarrollador Principal: Diseño de la arquitectura MVVM + Clean Architecture, implementación de la base de datos Room y generación de reportes PDF/Excel.',
        githubUrl: 'https://github.com/Cramess78',
        featured: true,
    },
];

export const personalInfo = {
    name: 'Cristian Rufino',
    title: 'Full Stack Developer',
    description: 'Desarrollador apasionado por crear experiencias web excepcionales',
    email: 'cristian.garcia.c@tecsup.edu.pe',
    github: 'https://github.com/Cramess78',
    linkedin: 'https://www.linkedin.com/in/cristian-rufino-garcia-ccencho-125a82328/',
    siteUrl: 'https://tuportafolio.com',
    avatar: 'https://cdn.prod.website-files.com/61e6c06a23cb13bf76051194/64651d4210fe51fac70c009b_Pixel%20-%208.jpg',
};
