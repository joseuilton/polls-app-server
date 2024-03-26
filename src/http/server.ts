import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import cors from "@fastify/cors";

import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import { pollResults } from "./ws/poll-results";

const app = fastify();

app.register(cors, {
  credentials: true,
  origin: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "*"
});
app.register(cookie, {
  secret: "polls-app",
  hook: "onRequest",
  parseOptions: {
    httpOnly: true,
  }
});

app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({ port: Number(process.env.PORT) || 3333 }).then(() => {
  console.log("HTTP server running!");
})
