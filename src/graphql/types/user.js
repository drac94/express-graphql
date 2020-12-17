const user = `
  type User {
    id: Int
    name: String
    email: String
    mobile: String
    role: String
    isActive: String
  }`;

const userInput = `
input userInput {
    name: String!
}`;

module.exports = `${user} ${userInput}`;
