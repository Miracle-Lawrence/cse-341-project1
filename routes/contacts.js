const express = require("express");
const router = express.Router();

const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

// GET ALL CONTACTS
router.get("/", async (req, res) => {
  try {
    const db = getDB();

    const contacts = await db.collection("contacts").find().toArray();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET SINGLE CONTACT BY ID
router.get("/:id", async (req, res) => {
  try {
    const db = getDB();

    const contactId = req.params.id;

    const contact = await db.collection("contacts").findOne({
      _id: new ObjectId(contactId),
    });

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
