import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util {

    static gerarNome(): string{
        const randomName = faker.person.firstName();
        return randomName;
    }
}
console.log(faker.animal.bear());
console.log(faker.color.rgb());
console.log(faker.person.gender());
console.log(faker.person.bio());
console.log(faker.person.jobArea());
console.log(faker.commerce.product());
console.log(faker.commerce.price());



const nomeGerado = Util.gerarNome();
console.log(nomeGerado);
