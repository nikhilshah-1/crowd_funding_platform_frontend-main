const express = require("express");
const Campaign = require("../models/Campaign");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get All Campaigns
router.get("/", async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

// Get Campaign by ID
router.get("/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ error: "Campaign not found" });
    res.json(campaign);
  } catch {
    res.status(500).json({ error: "Error fetching campaign" });
  }
});

// Create Campaign (Admin Only)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(500).json({ error: "Error creating campaign" });
  }
});

// Edit Campaign (Admin Only)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCampaign);
  } catch {
    res.status(500).json({ error: "Error updating campaign" });
  }
});

// Delete Campaign (Admin Only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Campaign.findByIdAndDelete(req.params.id);
    res.json({ message: "Campaign deleted" });
  } catch {
    res.status(500).json({ error: "Error deleting campaign" });
  }
});

module.exports = router;
