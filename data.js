// data.js
	
const paises = [
	
    {
	
        id: 'ar',
	
        nombre: "Argentina",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 43,
	
    },
	
    {
	
        id: 'bo',
	
        nombre: "Bolivia",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 10.5,
	
    },
	
    {
	
        id: 'br',
	
        nombre: "Brasil",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 204.5,
	
    },
	
    {
	
        id: 'ch',
	
        nombre: "Chile",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 18,
	
    },
	
    {
	
        id: 'cr',
	
        nombre: "Costa Rica",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 4.8,
	
    },
	
    {
	
        id: 'cu',
	
        nombre: "Cuba",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 11.2,
	
    },
	
    {
	
        id: 'sv',
	
        nombre: "El Salvador",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 6.5,
	
    },
	
    {
	
        id: 'pa',
	
        nombre: "Paraguay",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 7,
	
    },
	
    {
	
        id: 'uy',
	
        nombre: "Uruguay",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 3.3,
	
    },
	
    {
	
        id: 've',
	
        nombre: "Venezuela",
	
        tipo: 'PAIS_SOBERANO',
	
        poblacion: 30.6,
	
    },
	
    {
	
        id: 'gf',
	
        nombre: "Guayana Francesa",
	
        tipo: 'TERRITORIO_DEPENDIENTE',
	
        poblacion: 0.2,
	
    },
	
    {
	
        id: 'pr',
	
        nombre: "Puerto Rico",
	
        tipo: 'TERRITORIO_DEPENDIENTE',
	
        poblacion: 3.5,
	
    },
	
];
	
 
	
const deptosEstadosProvincias = [
	
    { id: 01, paisId: 'ar', descripcion: "Buenos Aires" },
	
    { id: 02, paisId: 'ar', descripcion: "Catamarca" },
	
    { id: 03, paisId: 'ar', descripcion: "Chaco" },
	
    { id: 04, paisId: 'ar', descripcion: "Chubut" },
	
    { id: 05, paisId: 'ar', descripcion: "Córdoba" },
	
    { id: 06, paisId: 'ar', descripcion: "Corrientes" },
	
    { id: 07, paisId: 'ar', descripcion: "Entre Ríos" },
	
    { id: 08, paisId: 'ar', descripcion: "Formosa" },
	
    { id: 09, paisId: 'ar', descripcion: "Jujuy" },
	
    { id: 10, paisId: 'ar', descripcion: "La Pampa" },
	
    { id: 11, paisId: 'ar', descripcion: "La Rioja" },
	
    { id: 12, paisId: 'ar', descripcion: "Mendoza" },
	
    { id: 13, paisId: 'ar', descripcion: "Misiones" },
	
    { id: 14, paisId: 'ar', descripcion: "Neuquén" },
	
    { id: 15, paisId: 'ar', descripcion: "Río Negro" },
	
    { id: 16, paisId: 'ar', descripcion: "Salta" },
	
    { id: 17, paisId: 'ar', descripcion: "San Juan" },
	
    { id: 18, paisId: 'ar', descripcion: "San Luis" },
	
    { id: 19, paisId: 'ar', descripcion: "Santa Cruz" },
	
    { id: 20, paisId: 'ar', descripcion: "Santa Fe" },
	
    { id: 21, paisId: 'ar', descripcion: "Santiago del Estero" },
	
    { id: 22, paisId: 'ar', descripcion: "Tierra del Fuego, Antártida e Islas del Atlántico Sur" },
	
    { id: 23, paisId: 'ar', descripcion: "Tucumán" },
	
    { id: 24, paisId: 'bo', descripcion: "Beni capital Trinidad" },
	
    { id: 25, paisId: 'bo', descripcion: "Chuquisaca capital Sucre" },
	
    { id: 26, paisId: 'bo', descripcion: "Cochabamba capital Cochabamba" },
	
    { id: 27, paisId: 'bo', descripcion: "La Paz capital La Paz" },
	
    { id: 28, paisId: 'bo', descripcion: "Oruro capital Oruro" },
	
    { id: 29, paisId: 'bo', descripcion: "Pando capital Cobija" },
	
    { id: 30, paisId: 'bo', descripcion: "Potosí capital Potosí" },
	
    { id: 31, paisId: 'bo', descripcion: "Santa Cruz capital Santa Cruz de la Sierra" },
	
    { id: 32, paisId: 'bo', descripcion: "Tarija capital Tarija" },
	
    { id: 33, paisId: 'br', descripcion: "Acre (AC)" },
	
    { id: 34, paisId: 'br', descripcion: "Alagoas (AL)" },
	
    { id: 35, paisId: 'br', descripcion: "Brasao amapa.jpg 	Amapá (AP)" },
	
    { id: 36, paisId: 'br', descripcion: "Amazonas (AM)" },
	
    { id: 37, paisId: 'br', descripcion: "Bahía (BA)" },
	
    { id: 38, paisId: 'br', descripcion: "Ceará (CE)" },
	
    { id: 39, paisId: 'br', descripcion: "Espírito Santo (ES)" },
	
    { id: 40, paisId: 'br', descripcion: "Goiás (GO)" },
	
    { id: 41, paisId: 'br', descripcion: "Brasão do Maranhão.png 	Maranhão (MA)" },
	
    { id: 42, paisId: 'br', descripcion: "Brasão de Mato Grosso.png 	Mato Grosso (MT)" },
	
    { id: 43, paisId: 'br', descripcion: "Mato Grosso del Sur (MS)" },
	
    { id: 44, paisId: 'br', descripcion: "Minas Gerais (MG)" },
	
    { id: 45, paisId: 'br', descripcion: "Pará (PA)" },
	
    { id: 46, paisId: 'br', descripcion: "Paraíba (PB)" },
	
    { id: 47, paisId: 'br', descripcion: "Paraná (PR)" },
	
    { id: 48, paisId: 'br', descripcion: "Pernambuco (PE)" },
	
    { id: 49, paisId: 'br', descripcion: "Piauí (PI)" },
	
    { id: 50, paisId: 'br', descripcion: "Río de Janeiro (RJ)" },
	
    { id: 51, paisId: 'br', descripcion: "Río Grande del Norte (RN)" },
	
    { id: 52, paisId: 'br', descripcion: "Río Grande del Sur (RS)" },
	
    { id: 53, paisId: 'br', descripcion: "BrasaoRondonia.jpg 	Rondônia (RO)" },
	
    { id: 54, paisId: 'br', descripcion: "Roraima (RR)" },
	
    { id: 55, paisId: 'br', descripcion: "Santa Catarina (SC)" },
	
    { id: 56, paisId: 'br', descripcion: "São Paulo (SP)" },
	
    { id: 57, paisId: 'br', descripcion: "Sergipe (SE)" },
	
    { id: 58, paisId: 'br', descripcion: "Tocantins (TO)" },
	
    { id: 59, paisId: 'br', descripcion: "Distrito Federal (DF)" },
	
]
	
 
	
module.exports = {
    paises,
    deptosEstadosProvincias,
}
 