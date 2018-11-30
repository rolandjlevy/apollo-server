const { ApolloServer, gql } = require("apollo-server");
const db = require("./db");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    hasGraduated: Boolean!
    projects: [Project]
  }

  type Project {
    id: ID!
    name: String!
    studentIds: [ID]!
    students: [Student]!
  }

  type Query {
    students: [Student]
    projects: [Project]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    students: () => db.getAllStudents(),
    projects: () => db.getAllProjects()
  },
  Student: {
    projects: student => db.getProjectsByStudent(student.id)
  },
  Project: {
    students: project =>
      project.studentIds.map(studentId => db.getStudentById(studentId))
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
