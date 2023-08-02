//Q6. Print the topics you remember so far exporting it from one file and printing in another

const fs = require("fs");
var topics = require("./topics.json");
console.log(topics);

const topicText = JSON.stringify(topics);

fs.writeFile("./exportedTopics.json", topicText, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
