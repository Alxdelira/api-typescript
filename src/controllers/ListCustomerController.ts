import { ListCustomerService } from '../services/ListCustomerService';
import { FastifyReply, FastifyRequest } from 'fastify';



class ListCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomerService();

        const customers = await listCustomerService.execute();

        reply.send(customers);
    }
}

export { ListCustomerController }