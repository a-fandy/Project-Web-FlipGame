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

    cekSame(answer){
        if(answer == undefined || answer.length == 0) {
            return true;
        }
        else if(answer[0]!=answer[1]){
            return true;
        }
        else{
            return false;
        }
    }

}