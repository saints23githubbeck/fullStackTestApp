const express = require('express');
const Provider = require('../models/providers');
const router = express.Router();

// Creating New Provider

router.post("/", async (req, res) => {
  const provider = new Provider(req.body);
  try {
    const providers = await provider.save();
    return res.status(200).json(providers);
  } catch {
    return res.status(400);
  }
});


// // Fetching Providers

router.get('/', async (req, res) => {
  try {
    Provider.find({}, function (err, providers) {
      return res.send(providers).status(200)
    })
  } catch {
    return res.status(400);
  }

}
);

// finding Single provider

router.get('/:id', (async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    return res.send(provider).status(200);
  } catch {
    return res.status(400);
  }
})
);

// // Deleting  Provider

router.delete("/:id", async (req, res) => {
  try {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    return res.status(200).send(provider);
  } catch (err) {
    returnres.status(400);
  }
});

// // Updaing Provider

router.patch("/:id", async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(req.params.id);
    await provider.updateOne({ $set: req.body });
    return res.status(200).send(provider);
  } catch (err) {
    return res.status(400);
  }
});

module.exports = router;
