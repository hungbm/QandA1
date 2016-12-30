System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Question;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(upvote, view, createdDate, isAnswered, isClosed, userID, question, tags, answers) {
                    this.upvote = upvote;
                    this.view = view;
                    this.createdDate = createdDate;
                    this.isAnswered = isAnswered;
                    this.isClosed = isClosed;
                    this.userID = userID;
                    this.tags = tags;
                    this.question = {
                        title: question.title,
                        content: question.content
                    };
                    this.answers = answers;
                }
                return Question;
            }());
            exports_1("Question", Question);
        }
    }
});
//# sourceMappingURL=question.js.map