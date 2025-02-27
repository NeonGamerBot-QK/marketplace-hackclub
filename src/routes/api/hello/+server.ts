export function GET(req: Request) {
return new Response(JSON.stringify({ message: "hello world :3"}), {
    headers: {
      "content-type": "application/json",
    },
});
}