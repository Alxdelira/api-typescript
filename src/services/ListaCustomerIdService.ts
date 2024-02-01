import prismaClient from "../prisma"

interface ListarIdProps {
    id: string
}


class ListaCustomerIdService {
    async execute({ id }: ListarIdProps) {
        if (!id) {
            throw new Error("Solicitação invalida!")
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não existe!")
        }

        await prismaClient.customer.findFirst({
            where: {
                id: findCustomer.id
            }
        })

        return findCustomer
    }
}

export { ListaCustomerIdService }