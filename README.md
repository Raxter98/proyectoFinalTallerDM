PokéAPI Integration - Proyecto Ionic

📱 Descripción del Proyecto

Aplicación móvil desarrollada con Ionic y Angular que demuestra la integración con la PokéAPI, mostrando información detallada de Pokémon. Este proyecto cumple con los requisitos de integración de APIs para aplicaciones móviles.

✨ Características

✅ Integración completa con PokéAPI
✅ Lista de Pokémon con paginación
✅ Detalles individuales de cada Pokémon
✅ Mostrado de datos crudos de la API (JSON)
✅ Navegación entre páginas
✅ Diseño responsivo
✅ Manejo de errores y estados de carga

🛠 Tecnologías Utilizadas

Ionic 7 - Framework para aplicaciones híbridas
Angular 16 - Framework frontend
TypeScript - Tipado estático
RxJS - Programación reactiva
PokéAPI - API de Pokémon gratuita
Capacitor - Build para iOS/Android
🚀 Instalación y Ejecución

Prerrequisitos

bash
Node.js 16+ (recomendado 18+)
npm 8+
Ionic CLI: npm install -g @ionic/cli
1. Clonar el Proyecto

bash
git clone [url-del-repositorio]
cd pokeapi-integration
2. Instalar Dependencias

bash
npm install
3. Ejecutar en Navegador

bash
ionic serve
La aplicación estará disponible en: http://localhost:8100

📁 Estructura del Proyecto

text
src/app/
├── services/
│   └── pokemon.service.ts      # Servicio de API
├── home/
│   ├── home.page.ts            # Página principal
│   ├── home.page.html          # Template principal
│   └── home.page.scss          # Estilos
├── detail/
│   ├── detail.page.ts          # Página de detalles
│   ├── detail.page.html        # Template detalles
│   └── detail.page.scss        # Estilos
├── app.module.ts               # Módulo principal
├── app-routing.module.ts       # Configuración de rutas
└── app.component.ts            # Componente raíz
🔧 Configuración de la API

URL Base de la API

typescript
// En pokemon.service.ts
private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
Endpoints Utilizados

GET /pokemon?limit=20 - Lista de Pokémon
GET /pokemon/{id} - Detalles específicos
Ejemplo de Response

json
{
  "id": 25,
  "name": "pikachu",
  "height": 4,
  "weight": 60,
  "sprites": {
    "front_default": "url-imagen"
  },
  "types": [
    {
      "type": {
        "name": "electric"
      }
    }
  ]
}
📋 Funcionalidades Implementadas

1. Servicio Pokémon (pokemon.service.ts)

Métodos GET para consumir la API
Extracción de IDs desde URLs
Formateo de datos (altura, peso)
2. Página Home

Lista de 20 Pokémon iniciales
Navegación a detalles
Mostrado de datos crudos en JSON
Indicadores de carga
3. Página Detail

Información detallada del Pokémon
Altura y peso formateados
Tipos con colores diferenciados
JSON completo del response
✅ Criterios Cumplidos

Criterio	Estado	Observación
Identificación API	✅	PokéAPI especificada
Request/Response	✅	Métodos GET y JSON
Servicio de integración	✅	PokemonService implementado
Importación HTTP	✅	HttpClientModule en app.module
Método GET	✅	getPokemonList() y getPokemonById()
Presentación response	✅	Datos crudos y estructurados
Estructuración información	✅	Interfaces y formateo
