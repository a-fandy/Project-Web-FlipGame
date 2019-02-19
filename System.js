class System {
    emoji =['🐶','🦍','🐒','🐵','🐕',
            '🐩','🐺','🦊','🦝','🐱'];
    SIZE = 10;

    constructor(){
        this.ranEmoji = new Array(this.SIZE*2);
        this.shuffleEmoji();

        this.flipcard = new FlipCard();
        this.nameMethod ="s.flipcard.flip";
        this.generateCard();
     
    } 

    shuffleEmoji(){
        var cek=[],end=false, index=0;
        for(var i=0;i<this.SIZE;i++){cek.push([i,0])};
        while(end==false){
           var ran = Math.floor(Math.random() * this.SIZE); 
           if(cek[ran][1]<2){
                this.ranEmoji[index] = ran;
                cek[ran][1]++;
                index++;
           }
           else if(index>=this.SIZE*2){
                end = true;
           }
        }
    }

    generateCard(){
        for(var i=0;i<this.SIZE*2;i++){
            var innerCard = this.flipcard.createInnercard(this.flipcard.createCard(i,this.nameMethod),i);
            this.flipcard.createFrontCard(innerCard,i);
            this.flipcard.createBackCard(innerCard,i,this.emoji[this.ranEmoji[i]]);
            this.flipcard.flip(i);
        }
    }  


}

const s = new System();

