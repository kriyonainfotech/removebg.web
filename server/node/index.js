const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const cors = require("cors");

const app = express();
const upload = multer({ dest: "/tmp" });
app.use(cors());
app.use(bodyParser.json());

app.use(cors({
    origin: "https://removebg-ten-sooty.vercel.app"
}));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Handle background removal request
app.post("/api/remove-background", upload.single("image"), async (req, res) => {
    let imagePath;  // declare here

    try {
        console.log(req.headers);
        console.log(req.body, req.file);
        if (!req.file) {
            console.error("❌ No file received in the request.");
            return res.status(400).send("No image uploaded.");
        }

        const imagePath = req.file.path;
        console.log(`📤 Sending image for background removal: ${imagePath}`);

        const form = new FormData();
        form.append("image", fs.createReadStream(imagePath)); // 💥 this field name MUST be 'image'

        const pythonRes = await axios.post(
            "https://removebg-bpython.onrender.com/remove-bg",
            form,
            {
                headers: form.getHeaders(),
                responseType: "arraybuffer",
                timeout: 240000 // 240 seconds (3 minutes)
            }
        );


        console.log("✅ Background removed successfully.", pythonRes.data);
        // console.log("Python Response", pythonRes);

        res.set("Content-Type", "image/png");
        res.send(pythonRes.data);
    } catch (err) {
        console.error(`⚠️ Error processing image: ${err.message}`);
        res.status(500).send("Error processing image");
    } finally {
        fs.unlink(path, (err) => {
            // console.log('File path to delete:', path);
            if (err) console.error(err);
            else console.log('File deleted');
        });
    }
});

app.post("/api/send-email", async (req, res) => {
    try {
        const { to, subject, message } = req.body;

        if (!to || !subject || !message) {
            return res.status(400).json({ success: false, error: "All fields are required: to, subject, message." });
        }

        // Set up transporter (Use real SMTP creds in prod)
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use SMTP settings
            auth: {
                user: "kriyonainfotech@gmail.com",
                pass: "rxvn hbfh ehhw hneq"
            }
        });

        // Compose email
        const mailOptions = {
            from: 'kriyonainfotech@gmail.com',
            to,
            subject,
            text: `${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        res.status(500).json({ success: false, error: "Email sending failed" });
    }
});

app.listen(5000, () => {
    console.log("🚀 Node server running on http://localhost:5000");
});
