import { AccountDIO } from "./Account";

export class NewAcc extends AccountDIO{
  constructor(name: string, accountNumber: number){
      super(name, accountNumber)
  }
  
  depositAcc = (deposit: number): void => {
      if(this.validateStatus()){
        deposit += 10
        this.deposit(deposit)
        console.log('Voce depositou', deposit)
      }
      else{
        console.log("Erro ao realizar deposito!")
      }
    }
}