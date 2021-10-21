const express = require('express');
const Client = require('../models/clients');
const router = express.Router();


// Fetch All Client

router.get('/', (async (req, res) => {
  try {
    Client.find({}, function (err, clients) {
      return res.send(clients).status(200)
    }).populate("providers").sort({ createdAt: "DESC" })
  } catch (err) {
    return res.status(400).send(err);
  }

})
);


// Create New Client

router.post("/", async (req, res) => {
  const client = new Client(req.body);
  try {
    const clients = await client.save();
    return res.send(clients).status(200);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// finding Single Client by ID

router.get('/:id', (async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).populate("providers");

    return res.send(client).status(200);
  } catch (err) {
    return res.status(400).send(err);
  }
})
);

// // Deleting  Client  by ID

router.delete("/:id", async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    return res.status(200).send(client);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// // Updaing Client by ID

router.patch("/:id", async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id);
    await client.updateOne({ $set: req.body });
    return res.status(200).send(client);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router


