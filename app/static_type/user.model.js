System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, password, email, avatarUrl, summary, name, dateJoin, point) {
                    this.username = username;
                    this.password = password;
                    this.email = email;
                    this.avatarUrl = avatarUrl;
                    this.summary = summary;
                    this.name = name;
                    this.dateJoin = dateJoin;
                    this.point = point;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.model.js.map