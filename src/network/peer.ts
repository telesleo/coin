import net from "net";
import { DEFAULT_PORT } from "../constants";

export default class Peer {
  private readonly port: number = 7000;
  private server!: net.Server;
  private otherPeers: net.Socket[];

  constructor(port: number = DEFAULT_PORT) {
    this.port = port;
    this.otherPeers = [];
    this.startServer();
  }

  private startServer() {
    this.server = net.createServer((socket) => {
      console.log(`Peer Connected ${socket.remoteAddress}`);
      this.otherPeers.push(socket);
    });
    this.server.listen(this.port, "localhost", () => {
      console.log(`Listening on port ${this.port}`);
    });
  }

  public connectToPeer(host: string, port: number) {
    const client = net.createConnection({ host, port }, () => {
      this.otherPeers.push(client);
      console.log(`Peer Connected ${client.remoteAddress}`);
    });
  }
}
