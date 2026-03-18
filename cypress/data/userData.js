import { faker } from '@faker-js/faker'

export const gerarUsuario = () => {
  return {
    primeiroNome: faker.person.firstName(),
    sobrenome: 'test',
    email: faker.internet.email(),
    senha: 'Testedequalidade123.'
  }
}