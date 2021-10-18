const express = require('express');
const Client = require('../models/clients');
const router = express.Router();


// Fetch All Client

router.get('/', (async (req, res) => {
  var perPage = 10
  , page = Math.max(0, req.params.page)
  try {
    Client.find({}, function (err, clients) {
      return res.send(clients).status(200)
    }).populate("providers").sort({createdAt: -1})
  } catch {
    return res.status(400);
  }

})
);


// Create New Client

router.post("/", async (req, res) => {
  const client = new Client(req.body);
  try {
    const clients = await client.save();
    return res.status(200).json(clients);
  } catch {
    return res.status(400);
  }
});

// finding Single Client

router.get('/:id', (async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).populate("providers");
    return res.send(client).status(200);
  } catch {
    return res.status(400);
  }
})
);

// // Deleting  Client

router.delete("/:id", async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    return res.status(200).send(client);
  } catch (err) {
    return res.status(400);
  }
});

// // Updaing Client

router.patch("/:id", async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id);
    await client.updateOne({ $set: req.body });
    return res.status(200).send(client);
  } catch (err) {
    return res.status(400);
  }
});

module.exports = router


