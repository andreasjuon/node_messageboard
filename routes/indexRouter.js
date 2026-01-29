const { Router } = require("express");
const indexRouter = Router();
const controller = require("../controllers/controller");

/*
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
*/

// Show index page
indexRouter.get("/", controller.logMessages);

// New message form
indexRouter.get('/new', controller.createMessageGet);

// Post new message
indexRouter.post('/new', controller.createMessagePost);

// Detail view of specific message
indexRouter.get("/messages/:id", controller.showMessageDetail);



/*
showMessageDetail
indexRouter.get("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages.find((m) => m.id === messageId);
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("messages", { message });
});
*/




/*
  const messageText = req.body.text;
  const messageUser = req.body.user;
  const messageId = crypto.randomUUID();
  messages.push({ text: messageText, user: messageUser, added: new Date(), id: messageId });

  res.redirect('/');
});
*/


module.exports = indexRouter;



/*

router.get("/", controller.logUsers);

router.get("/new", controller.createUsernameGet);

router.post("/new", controller.createUsernamePost);

router.get("/search", controller.findUsers);

router.get("/deleteall", controller.deleteAllUsernames);

module.exports = router;

*/