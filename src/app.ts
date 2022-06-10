import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: '🧌 Server is run on port 4000' })
})

app.listen(4000, () => console.log('🧌 Server is run on port 4000'))