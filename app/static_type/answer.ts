export class Answer {
    userID : string;
	upvote: number;
    isBest: boolean;
    createdDate: string;
    store_ID: string;
    content: string;
    constructor(
    	userID : string,
        upvote: number,
        isBest: boolean,
        createdDate: string,
        store_ID: string,
        content: string,
  	) { 
		    this.userID = userID;
            this.upvote= upvote;
            this.isBest= isBest;
            this.createdDate= createdDate;
            this.store_ID= store_ID;
            this.content= content;
	  }
}