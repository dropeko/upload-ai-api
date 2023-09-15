import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts";

const app = fastify();

// Registra a rota por meio de uma função importada
app.register(getAllPromptsRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!');
  
})
