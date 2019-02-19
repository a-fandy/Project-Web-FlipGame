class Role {

    constructor(correct){
        this.correct = correct;
    }

    cekAnswer(answer){
       if(this.correct[answer[0]]==this.correct[answer[1]]){
           return true;
       }
       else{
           return false;
       }
    }

}