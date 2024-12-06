import peer from "../../network";

export default function connectToPeerAction(host: string, port: number) {
  peer.connectToPeer(host, port);
}
