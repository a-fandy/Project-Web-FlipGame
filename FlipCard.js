class FlipCard{

    constructor(){
        this.container =document.querySelector('.container'); 
    }

    createCard(no,nameMethod){
        var id = 'card'+no;
        var card = document.createElement("div");
        card.setAttribute('class','card');
        card.setAttribute('id',id);
        card.setAttribute('onclick',nameMethod+'('+no+')');
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
        innerCard.appendChild(front);
        return front;
    }

    createBackCard(innerCard,no,emot){
        var id = 'backCard'+no;
        var back = document.createElement("div");
        back.setAttribute('class','back-card');
        back.setAttribute('id',id);
        var span = document.createElement("span");
        span.innerHTML =emot;
        span.setAttribute('style','font-size:100px')
        back.appendChild(span);
        innerCard.appendChild(back);
        return back;
    }

    flipOpen(no){
        var innerCard=  document.querySelector('#innerCard'+no);
        innerCard.setAttribute('style', 'transform: rotateY(180deg);');
    }

    flipClose(no){
        var innerCard=  document.querySelector('#innerCard'+no);
        innerCard.setAttribute('style', 'transform: rotateY(0deg);'); 
    }
  
}