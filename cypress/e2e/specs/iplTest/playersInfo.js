class playersInfo{

    players = [];
    reqIds = [];
    n1 = 1;
    n2 = 2;
    nextItem=0;
    addPlyers( playerInfo ){
        this.players.push( playerInfo );
    }
    getCompletePlayersInfo(){
        return {
            "teamName": "AI_Machina",
            "category": "BOWLERS",
            "players": this.players
        };
    }

    getReqPlayerId(){    
        let reqPlayerPos = [];    
        this.reqIds.push( this.n1 );
        this.reqIds.push( this.n2 );
        for(let i=2; i<40; i++){
            this.nextItem = this.n1+ this.n2;
            if(this.nextItem >40) break;
            this.reqIds.push( this.nextItem );
            this.n1= this.n2;
            this.n2= this.nextItem;
        }
        this.reqIds.forEach( (fib_nums) =>{
            if( !this.isPrime( fib_nums)) reqPlayerPos.push( fib_nums );
        } );
        return reqPlayerPos;
    }

    isPrime(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num >= 1;
      }
}

module.exports = new playersInfo();