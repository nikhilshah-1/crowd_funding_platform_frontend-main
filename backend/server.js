import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Donation Schema
const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  message: String,
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);

// Save Donation Data (Without Payment)
app.post("/donate", async (req, res) => {
  try {
    const { name, email, amount, message } = req.body;

    if (!name || !email || !amount) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newDonation = new Donation({ name, email, amount, message });
    await newDonation.save();
    
    res.json({ success: true, message: "Donation recorded successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get All Donations (For Admin)
app.get("/donations", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
