import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = process.cwd();
const publicDir = join(root, process.argv[2] || ".");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function resolvePath(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const requested = normalize(join(publicDir, pathname));

  if (!requested.startsWith(publicDir)) {
    return null;
  }

  if (existsSync(requested) && statSync(requested).isFile()) {
    return requested;
  }

  const indexPath = join(requested, "index.html");
  if (existsSync(indexPath) && statSync(indexPath).isFile()) {
    return indexPath;
  }

  return join(publicDir, "index.html");
}

const server = createServer((req, res) => {
  const filePath = resolvePath(req.url || "/");

  if (!filePath || !existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "Content-Type": types[extname(filePath)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });

  createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  const mode = fileURLToPath(import.meta.url).includes("dev-server") ? "frontend" : "static";
  console.log(`${mode} server running at http://${host}:${port}/`);
});
