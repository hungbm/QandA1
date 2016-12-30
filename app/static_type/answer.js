System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Answer;
    return {
        setters:[],
        execute: function() {
            Answer = (function () {
                function Answer(userID, upvote, isBest, createdDate, store_ID, content) {
                    this.userID = userID;
                    this.upvote = upvote;
                    this.isBest = isBest;
                    this.createdDate = createdDate;
                    this.store_ID = store_ID;
                    this.content = content;
                }
                return Answer;
            }());
            exports_1("Answer", Answer);
        }
    }
});
//# sourceMappingURL=answer.js.map