const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there! I am using this message board. And I love it. It is awesome. You should try it out.",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World! Hello everyone. This is a message board. Wow! Hello World. Hello Hello Hello.",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "You dumbass!! You should be more careful with your words. Eric, you are being rude. Your mother would be disappointed. This is a message board, not a place for insults.",
    user: "Red",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

// Show index page
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Andreas' Message Board", messages: messages });
});

// Post new message
indexRouter.post('/new', (req, res) => {
  const messageText = req.body.text;
  const messageUser = req.body.user;
  const messageId = crypto.randomUUID();
  messages.push({ text: messageText, user: messageUser, added: new Date(), id: messageId });

  res.redirect('/');
});

// Route to display a single message by ID
indexRouter.get('/messages/:id', (req, res) => {
  const messageId = req.params.id;
  const message = messages.find(m => m.id === messageId);
  if (!message) {
    return res.status(404).send('Message not found');
  }
  res.render('messages', { message });
});

module.exports = indexRouter;
