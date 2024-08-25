const express = require("express");
const { v4: uuidv4, v4 } = require("uuid");
const router = express.Router();

const messages = [
  {
    id: v4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: v4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

router.post("/new", (req, res) => {
  const newMessage = {
    id: v4(),
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  };
  messages.push(newMessage);
  console.log(
    `Adding new message, the user is ${req.body.messageUser} and their message says: ${req.body.messageText} and id ${newMessage.id}`
  );

  res.redirect("/");
});
//USE debugger to look at varibles, in the .find i had the id inside a parseint initally, i want to see the variables
router.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const foundMessage = messages.find((msg) => msg.id === id);
  console.log(id);
  console.log(messages);
  if (foundMessage) {
    res.render("details", { foundMessage });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
