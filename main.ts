import Quill from "quill";
import "quill/dist/quill.snow.css";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import { WebsocketProvider } from "y-websocket";
const quill = new Quill("#app", {
  theme: "snow",
});

const doc = new Y.Doc();
const text = doc.getText("quill");

//连接quill
new QuillBinding(text, quill);

new WebsocketProvider("ws://localhost:1234", "room1", doc);
