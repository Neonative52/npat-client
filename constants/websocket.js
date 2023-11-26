// Shared web socket
import io from "socket.io-client";

//const ENDPOINT = 'https://localhost:5000'
const ENDPOINT = 'https://npat-server.onrender.com/'
const socket = io(ENDPOINT);

export { socket };
