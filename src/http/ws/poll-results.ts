import { FastifyInstance } from "fastify";
import z from "zod";
import { voting } from "../../utils/voting-pub-sub";

export async function pollResults(app: FastifyInstance) {
  app.get("/polls/:pollId/results", { websocket: true }, (connection, request) => {
    const pollResultsParams = z.object({
      pollId: z.string()
    });

    const { pollId } = pollResultsParams.parse(request.params);

    voting.subscribe(pollId, (message) => {
      connection.socket.send(JSON.stringify(message));
    })
  });
}
