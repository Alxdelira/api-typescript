import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerController } from "./controllers/CreateCustomerController"
import { ListCustomerController } from "./controllers/ListCustomerController"
import { DeleteCustomerController } from "./controllers/DeleteCustomerController"
import { ListCustomerIdController } from "./controllers/ListCustomerIdController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: "Bem Vindo a minha Api !" }
    })
    // Rota para enviar dados 
    fastify.post("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })
    // Rota para Listar todos 
    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply)
    })
    // Rota para deletar 
    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })
    // Rota de Listar por ID
    fastify.get("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerIdController().handle(request, reply)
    })

}