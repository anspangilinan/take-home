import express from "express";
import bodyParser from "body-parser";
import agentRoutes from "./routes/agent";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/agents", agentRoutes);

app.listen(PORT, () => {
  console.log(`Server up on localhost://${PORT}`);
});

export default app;
