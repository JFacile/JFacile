const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

export const run = (port: number) => {
  app.listen(port, () => {
    console.log(`\x1B[31mServer started :\x1B[34m http://localhost:${port}`);
  });
};

export const routeGet = (
  nameOfRoute: string,
  title: string,
  render: string
) => {
  app.get(nameOfRoute, (req: any, res: any) => {
    res.render(render, {
      title: title,
    });
  });
};

export const routePost = (
  nameOfRoute: string,
  title: string,
  render: string
) => {
  app.post(nameOfRoute, (req: any, res: any) => {
    res.send(render, {
      title: title,
    });
  });
};

export const routePut = (
  nameOfRoute: string,
  title: string,
  render: string
) => {
  app.put(nameOfRoute, (req: any, res: any) => {
    res.send(render, {
      title: title,
    });
  });
};

export const routeDelete = (
  nameOfRoute: string,
  title: string,
  render: string
) => {
  app.post(nameOfRoute, (req: any, res: any) => {
    res.send(render, {
      title: title,
    });
  });
};
