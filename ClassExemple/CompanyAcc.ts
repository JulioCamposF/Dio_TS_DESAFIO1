import { AccountDIO } from "./Account";

export class CompanyAccount extends AccountDIO{
    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }


    //Metodos da classe
    getLoan =(loan:number):void=>{
        if(this.validateStatus()){
            this.deposit(loan)
            console.log('Voce Realizou um Emprestimo no valor de R$',loan)
        }else{
            console.log("Não foi possivel pegar Emprestimo")
        }
       
    }


    //aqui eu sobreescrevi o metodo herdado deposit e alterei a mensagem
    //poderia alterar tambem o modelo exemplo
    /*
    deposit=():number=>{
    return 2
    }
    
   
    deposit =():void=>{
        console.log('A empresa Depositou')
    }
*/
}