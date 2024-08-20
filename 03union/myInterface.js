var newUser;
newUser = { name: "Ashish", isLoggedIn: false };
var yeNewUser; // we can do this using interface also
// yeNewUser = {id: 29,name: "Ashish", age: 21, isLoggedId: false}  here we've to pass method as well
yeNewUser = {
    id: 29,
    name: "Ashish",
    age: 21,
    isLoggedId: false,
    startTrial: function () {
        return "Hello";
    },
};
// we've used above to define structure of the object, how our object look like with strong typed, 
var firstUser;
firstUser = {
    name: "Ashish",
    age: 21,
    email: "a@a.com",
    userId: 25,
    googleToken: false,
    startTrial: function () {
        return "Trial has been started";
    },
    getDiscount: function (username, off) {
        if (username === void 0) { username = "Ashish"; }
        if (off === void 0) { off = 10; }
        // console.log(username);
        // console.log(off);
        if (off == 10)
            console.log("You've got default discount.\n");
        else
            console.log("You've got special offer\n");
        return off;
    },
};
// why is it not giving me an error: because it is taking it as reassign, in first because I made getGithubToken as optional, so it doesn't bother to take github id
firstUser = {
    name: "Ashish",
    age: 21,
    email: "a@a.com",
    userId: 25,
    googleToken: false,
    getGithubToken: "tempGithub.com",
    startTrial: function () {
        return "Trial has been started";
    },
    getDiscount: function (username, off) {
        if (username === void 0) { username = "Ashish"; }
        if (off === void 0) { off = 10; }
        // console.log(username);
        // console.log(off);
        if (off == 10)
            console.log("You've got default discountfdsds.\n");
        else
            console.log("You've got special offer\n");
        return off;
    },
};
console.log(firstUser.startTrial());
console.log("You've got " + firstUser.getDiscount("Abhay", 30) + ", discount");
console.log("You've got " + firstUser.getDiscount("Ashish") + ", discount");
var firstGamer;
firstGamer = {
    name: "ayush",
    age: 21,
    isOnline: false,
    increaseScreenTime: function () {
        return 100;
    },
    displayPlaytime: function (user, totaltime) {
        console.log(user);
        return 100;
    }
    // it doesn't mean if your function strucutre is containing parameter then you've to pass it, but if there is return type then you should return same type
};
// console.log(firstGamer.displayPlaytime("Ashish", 343))
