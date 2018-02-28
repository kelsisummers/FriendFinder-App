var friends = [
  {
  name: "Ahmed",
  photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  }
];

console.log(userData);

// Get All Reservations
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

  // Create New Reso - takes in JSON input
app.post("/api/:new", function(req, res) {
  // req.body Hosts Is Equal To The JSON Post Sent From The User
  // This Works Because Of The Body-Parser Middleware
  var newFriend = req.body;

  newFriend.push(friends);
});