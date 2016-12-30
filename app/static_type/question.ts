export class Question {
	upvote: number;
    view: number;
    createdDate: string;
    isAnswered:boolean;
    isClosed: boolean;
    userID : string;
    tags?: [string];
	question: {
		title: string;
		content: string;
	};
    answers?: [string] ; 
    constructor(
    	upvote: number, 
		view: number,
		createdDate: string,
		isAnswered: boolean,
		isClosed: boolean,
		userID: string,
		question: {
			title: string,
			content: string
		},
		tags?:[string],
		answers?:[string]
  	) { 
		  	this.upvote= upvote;
			this.view= view;
			this.createdDate= createdDate;
			this.isAnswered=isAnswered;
			this.isClosed=isClosed;
			this.userID = userID;
			this.tags= tags;
			this.question = {
				title:  question.title,
				content: question.content
			};
			
			this.answers= answers ; 
	  }
}