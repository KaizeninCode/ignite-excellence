import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz1dLOp0Hv-N_eesii8y7tf2LaczIg6Kha-oBbahLO3GewHGLr6NrRrx9Exri-l2mJI/exec";

// simple POST route that relays the data
app.post("/submit", async (req, res) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Prxy Error:", error);
    res.status(500).json({ error: "Failed to forward request" });
  }
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Proxy running on http://0.0.0.0:${PORT}`)
);
