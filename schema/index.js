const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = require('graphql')

let todoList = [
  { text: "Breakfast" },
  { text: "Lunch" },
  { text: "Meeting at 47th floor" },
]

const TodosType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    text: { type: GraphQLString },
    status: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todos: {
      type: new GraphQLList(TodosType),
      resolve(parent, args) {
        return todoList
      }
    }
  }
})

const MutationQuery = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addTodo: {
      type: TodosType,
      args: {
        text: { type: new GraphQLNonNull (GraphQLString) }
      },
      resolve(parent, args) {
        const addTodoArray = todoList.push({ text: args.text })
        let status = "(300) Not Added"

        if(addTodoArray) {
          status = "(200) Success"
        }

        return { text: args.text, status }
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery
})