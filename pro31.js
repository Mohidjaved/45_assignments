/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
let users = ["admin", "user1", "user2", "user3", "user4"];
users.length = 0;
if (users.length === 0) {
    console.log("We need to find some users!");
}
export {};
