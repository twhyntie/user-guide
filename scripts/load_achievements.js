/*

  This should be run with the mongo command:

  $ mongo [database] -u [username] -p [password] scripts/load_achievements.js

  It will populate the Achievements collection with the achievements.

*/


// Clear the database.
db.achievementscollection.drop();

// Define the achievements (hard-coded for now).
achievements = [
  {
    name: "signedup",
    longname: "Signed Up",
    category: "User",
    icon: "fa-user",
    description: "You have signed up."
  },
  {
    name: "loggedin001",
    longname: "Logged In x 1",
    category: "User",
    icon: "fa-user",
    description: "You have logged in once."
  },
  {
    name: "loggedin002",
    longname: "Logged In x 2",
    category: "User",
    icon: "fa-user",
    description: "You have logged in twice."
  }
  ]

// Populate the Achievements collection.
db.achievementscollection.insert(achievements);
