import { CompanyAccount } from "./ClassExemple/CompanyAcc";
import { PeopleAcc } from './ClassExemple/PeopleAcc'
import { NewAcc } from './ClassExemple/newAcc'


const peopleAccount: PeopleAcc = new PeopleAcc(1, 'Julio', 10)

peopleAccount.getName()

peopleAccount.getBalance()

peopleAccount.deposit(100)
console.log(peopleAccount)

peopleAccount.withdraw(110)
console.log(peopleAccount)

peopleAccount.withdraw(100)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

companyAccount.getLoan(500)
console.log(companyAccount)

const newAccount: NewAcc = new NewAcc('Nova_Conta', 30)

newAccount.deposit(100)
console.log(newAccount)