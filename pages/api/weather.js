export default async function handler(req, res) {
    const city = req.query.city || "Malang";
    const apiKey = "ac1fadb2a2aca547b795f7a12a9cdfa2"; // Ganti dengan API Key yang valid
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(weatherUrl);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ error: data.message });
      }
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
  