import * as express from "express";
import { createPost, deleteItemById, getPostById, getPosts, savePostById } from './routePosts';

const bodyParser = require("body-parser");
const cors = require("cors");
const requestsTimeout = require("connect-timeout");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(requestsTimeout("2s"));

app.route("/api/posts").get(getPosts);
app.route("/api/posts/:id").get(getPostById);
app.route("/api/posts").post(createPost);
app.route("/api/posts/:id").put(savePostById);
app.route("/api/posts/:id").delete(deleteItemById);



/* app */
const httpServer = app.listen(9001, () => {
  console.log("Mock Server is running on http://localhost:9001")
});

httpServer.setTimeout(500000);
