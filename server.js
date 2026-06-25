/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("node:http");
const next = require("next");

const dev = process.env.NODE_ENV === "development";
const port = Number.parseInt(process.env.PORT || "3000", 10);

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res);
    }).listen(port, () => {
      console.log(`Rank It Globally ready on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Rank It Globally:", error);
    process.exit(1);
  });
