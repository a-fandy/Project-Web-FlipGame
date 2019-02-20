class System {
    emoji =['🐶','🦍','🐒','🐵','🐕',
            '🐩','🐺','🦊','🦝','🐱'];
    SIZE = 10;
    count=[];

    constructor(){
        this.ranEmoji = new Array(this.SIZE*2);
        this.shuffleEmoji();
        this.role = new Role(this.ranEmoji);
        this.flipcard = new FlipCard();
        this.nameMethod ="s.flip";
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
            // this.flipcard.flip(i);
        }
    }

    flip(no){
        this.flipcard.flipOpen(no);
        this.count.push(no);
        if(!this.role.cekSame(this.count)){
            this.count.pop();
        }
        if(this.count.length==2){
                if(this.role.cekAnswer(this.count)){
                    this.removeFlip(this.count);
                    this.count=[];
                }
                else{
                    setTimeout(function(that){ that.flipAll(that.count)}, 500,this);
                }
        }
    }

    flipAll(toFlip){
        for(var i=0;i<toFlip.length;i++){
            this.flipcard.flipClose(toFlip[i]);
        }
        this.count=[];
    }

    removeFlip(toFlip){
        for(var i=0;i<toFlip.length;i++){
            document.getElementById('card'+toFlip[i]).removeAttribute('onclick');
        }
    }


}

const s = new System();

