import { FastifyReply, FastifyRequest } from "fastify";
import { ListaCustomerIdService } from "../services/ListaCustomerIdService";


class ListCustomerIdController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const customerService = new ListaCustomerIdService();

        const customer = await customerService.execute({ id })

        reply.send(customer)

    }
}

export { ListCustomerIdController }