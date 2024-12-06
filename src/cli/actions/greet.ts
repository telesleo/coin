import peer from "../../network";

export default function greetAction(host: string, port: number) {
  peer.sendData("Hello!");
}
