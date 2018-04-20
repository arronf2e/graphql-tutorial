export const typeDefs = `

type Channel {
    id: ID!
    name: String
}

type Query {
    channels: [Channel]
}

`;

// ! 代表 required ,  [] 代表 list