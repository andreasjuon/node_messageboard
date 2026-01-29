const db = require("../db/queries");

async function logMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log("Messages: ", messages);

  return res.render("index", {
    title: "Andreas' Message Board",
    messages: messages,
  });
}

async function showMessageDetail(req, res) {
    const messageId = req.params.id;
    const message = await db.getMessageById(messageId);

    if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("messages", { message });
};

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


async function createMessageGet(req, res) {
  return res.render("new", {
    title: "new message form",
  });
}

async function createMessagePost(req, res) {
  const { username, message } = req.body;
  await db.insertMessage(username, message);
  res.redirect("/");
}

module.exports = {
  logMessages,
  createMessageGet,
  createMessagePost,
  showMessageDetail,
};