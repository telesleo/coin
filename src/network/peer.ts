import net from "net";
import { DEFAULT_PORT } from "../constants";

export default class Peer {
  private readonly host: string;
  private readonly port: number;

  private server!: net.Server;
  private otherPeers: net.Socket[];

  constructor(host: string = "localhost", port: number = DEFAULT_PORT) {
    this.host = host;
    this.port = port;
    this.otherPeers = [];
    this.startServer();
  }

  private addOtherPeer(socket: net.Socket) {
    socket.on("data", (data) => {});

    this.otherPeers.push(socket);
  }

  private startServer() {
    this.server = net.createServer((socket) => {
      this.addOtherPeer(socket);
    });
    this.server.listen(this.port, this.host, () => {});
  }

  public connectToPeer(
    host: string,
    port: number,
    callback: () => void = () => {},
  ) {
    const client = net.createConnection({ host, port }, () => {
      this.addOtherPeer(client);
      callback();
    });
  }

  public sendData(data: string) {
    this.otherPeers.forEach((peer) => {
      peer.write(data);
    });
  }
}
