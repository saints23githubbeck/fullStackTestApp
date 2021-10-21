const express = require('express');
const Provider = require('../models/providers');
const router = express.Router();

// Creating New Provider

router.post("/", async (req, res) => {
  const provider = new Provider(req.body);
  try {
    const providers = await provider.save();
    return res.send(providers).status(200);
  } catch (err) {
    return res.status(400).send(err);
  }
});


// // Fetching Providers

router.get('/', async (req, res) => {
  try {
    Provider.find({}, function (err, providers) {
      return res.send(providers).status(200)
    }).sort({ createdAt: "DESC" })
  } catch (err) {
    return res.status(400).send(err);
  }

}
);

// finding Single provider by ID

router.get('/:id', (async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    return res.send(provider).status(200);
  } catch (err) {
    return res.status(400).send(err);
  }
})
);

// // Deleting  Provider by ID

router.delete("/:id", async (req, res) => {
  try {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    return res.status(200).send(provider);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// // Updaing Provider by ID

router.patch("/:id", async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(req.params.id);
    await provider.updateOne({ $set: req.body });
    return res.status(200).send(provider);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
