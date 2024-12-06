import Peer from "./peer";
import "dotenv/config";

const { HOST } = process.env;
const PORT = process.env.PORT as number | undefined;

const peer = new Peer(HOST, PORT);

export default peer;
