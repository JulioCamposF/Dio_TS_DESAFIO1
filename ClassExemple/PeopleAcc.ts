import {AccountDIO} from './Account'

export class PeopleAcc extends AccountDIO{
    doc_id:number

    constructor(doc_id:number,name:string,accNumber:number){
        super(name,accNumber)
        this.doc_id=doc_id

    }
}