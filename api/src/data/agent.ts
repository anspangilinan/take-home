import { randomUUID } from "crypto";
import type { Agent } from "../types/agent.js";

const agents: Agent[] = [];

export const AgentDal = {
  getAll(): Agent[] {
    return [...agents];
  },

  getById(id: string): Agent | undefined {
    return agents.find((a) => a.id.toLowerCase() === id);
  },

  getByEmail(email: string): Agent | undefined {
    return agents.find((a) => a.email.toLowerCase() === email.toLowerCase());
  },

  create: (data: {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber?: string;
  }) => {
    const now = new Date().toISOString();
    const agent = {
      id: randomUUID(),
      ...data,
      createdAt: now,
      updatedAt: now,
    };
    agents.push(agent);
    return agent;
  },

  update(
    id: string,
    data: Partial<Omit<Agent, "id" | "createdAt" | "updatedAt">>,
  ): Agent {
    const agent = this.getById(id);
    if (!agent) throw new Error("PropertyAgent not found");

    // Check email uniqueness
    if (data.email && data.email.toLowerCase() !== agent.email.toLowerCase()) {
      if (this.getByEmail(data.email.toLowerCase())) {
        throw new Error("Email already exists");
      }
      agent.email = data.email;
    }

    if (data.firstName) agent.firstName = data.firstName;
    if (data.lastName) agent.lastName = data.lastName;
    if (data.mobileNumber !== undefined) agent.mobileNumber = data.mobileNumber;
    agent.updatedAt = new Date().toISOString();

    return agent;
  },

  delete(id: string) {
    const agent = this.getById(id);
    if (!agent) throw new Error("PropertyAgent not found");

    const idx = agents.findIndex((a) => a.id === id);
    if (idx >= 0) agents.splice(idx, 1);
  },
};
