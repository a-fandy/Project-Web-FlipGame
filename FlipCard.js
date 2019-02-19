class FlipCard{

    constructor(){
        this.container =document.querySelector('.container');
        var innerCard = this.createInnercard(this.createCard(1),1);
        this.createFrontCard(innerCard,1);
        this.createBackCard(innerCard,1);

        var innerCard = this.createInnercard(this.createCard(2),2);
        this.createFrontCard(innerCard,2);
        this.createBackCard(innerCard,2);
    }

    createCard(no){
        var id = 'card'+no;
        var card = document.createElement("div");
        card.setAttribute('class','card');
        card.setAttribute('id',id);
        card.setAttribute('onclick','f.flip('+no+')');
        this.container.appendChild(card);
        return card;
    }

    createInnercard(card,no){
        var id = 'innerCard'+no;
        var innerCard = document.createElement("div");
        innerCard.setAttribute('class','inner-card');
        innerCard.setAttribute('id',id);
        card.appendChild(innerCard);
        return innerCard;
    }

    createFrontCard(innerCard,no){
        var id = 'frontCard'+no;
        var front = document.createElement("div");
        front.setAttribute('class','front-card');
        front.setAttribute('id',id);
        var t = document.createTextNode("FRONT"+no);
        front.appendChild(t);
        innerCard.appendChild(front);
        return front;
    }

    createBackCard(innerCard,no){
        var id = 'backCard'+no;
        var back = document.createElement("div");
        back.setAttribute('class','back-card');
        back.setAttribute('id',id);
        var t = document.createTextNode("BACK"+no);
        back.appendChild(t);
        innerCard.appendChild(back);
        return back;
    }

    flip(no){
        var innerCard=  document.querySelector('#innerCard'+no);
        if(innerCard.style.transform!="rotateY(180deg)"){
            innerCard.setAttribute('style', 'transform: rotateY(180deg);');
        }
        else{
            innerCard.setAttribute('style', 'transform: rotateY(0deg);');
        }
        
    }
  
}

const f = new FlipCard();

