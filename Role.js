class Role {

    constructor(correct){
        this.correct = correct;
        this.Finish = 0;
    }

    cekAnswer(answer){
       if(this.correct[answer[0]]==this.correct[answer[1]]){
           this.Finish++;
           return true;
       }
       else{
           return false;
       }
    }

    cekSame(answer){
        if(answer == undefined || answer.length == 0) {
            return false;
        }
        else if(answer[0]!=answer[1]){
            return false;
        }
        else{
            return true;
        }
    }

    cekFinish(SIZE){
        if(this.Finish==SIZE){
            return true;
        }
        else{
            return false;
        }
    }

}