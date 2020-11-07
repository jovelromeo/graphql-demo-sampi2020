const { ApolloServer, gql } = require('apollo-server');
const { paises, deptosEstadosProvincias } = require('./data');

const typeDefs = gql`
type Pais {
    id: String
    nombre: String
    tipo: String
    poblacion: Float
    provincias: [Provincia]
}

type Provincia {
    id: Int
    paisId: String
    descripcion: String
    pais: Pais
}

type Query{
    paises(tipo: String, minPoblacion:Int): [Pais]
    pais(id:String!): Pais
}

type Mutation{
    agragarPais(pais: PaisInput): Boolean
}

input PaisInput{
    nombre: String
    tipo: String
    poblacion: Float
}
`;

const resolvers = {
    Query: {
        paises: (root, args) => {
         return args.tipo ? paises.filter(x=> x.tipo === args.tipo) : paises;
        },
        pais: (root, args, context) => {
            return paises.find(x=> x.id === args.id);
        }
    },
    Pais: {
        provincias: (root, args, context) => {
            return deptosEstadosProvincias.filter(x=> x.paisId === root.id);
        }    
    },
    Provincia: {
        pais: (root, args, context) => paises.find(x=> x.id === root.paisId),
    },
    Mutation: {
        agragarPais: (root, args, context) => {
            try {
                paises.push(args.pais);
                return true;
            } catch (error) {
                return false;
            }
        }
    }
}

const server = new ApolloServer( {typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`corriendo en ${url}`);
})