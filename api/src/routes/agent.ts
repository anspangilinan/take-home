import express from "express";
import { AgentDal } from "../data/agent";

const router = express.Router();

router.post("/", (req, res) => {
  const { firstName, lastName, email, mobileNumber } = req.body;
  if (!firstName || !lastName || !email) {
    return res
      .status(400)
      .json({ error: "firstName, lastName, and email are required" });
  }

  const existingAgent = AgentDal.getByEmail(email);

  console.log({ existingAgent });
  if (existingAgent) {
    const updatedAgent = AgentDal.update(existingAgent.id, {
      firstName,
      lastName,
      mobileNumber,
    });
    return res.status(200).json(updatedAgent);
  }

  // Create new agent
  const agent = AgentDal.create({
    firstName,
    lastName,
    email,
    mobileNumber,
  });
  res.status(201).json(agent);
});

router.get("/", (_, res) => {
  res.json(AgentDal.getAll());
});

router.get("/:id", (req, res) => {
  const agent = AgentDal.getById(req.params.id);
  if (!agent) return res.status(404).json({ error: "Agent not found" });
  res.json(agent);
});

router.put("/:id", (req, res) => {
  const { firstName, lastName, email, mobileNumber } = req.body;
  const agent = AgentDal.update(req.params.id, {
    firstName,
    lastName,
    email,
    mobileNumber,
  });
  if (!agent) return res.status(404).json({ error: "Agent not found" });
  res.json(agent);
});

// --- DELETE Agent ---
router.delete("/:id", (req, res) => {
  try {
    AgentDal.delete(req.params.id);
    res.status(204).send();
  } catch (e) {
    return res.status(404).json({ error: "Agent not found" });
  }
});

export default router;
