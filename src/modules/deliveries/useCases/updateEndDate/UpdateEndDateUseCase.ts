import prisma from "../../../../database/prismaClient";


interface UpdateEndDaterops {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {

  async execute({id_delivery, id_deliveryman}: UpdateEndDaterops) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        end_at: new Date()
      }
    })

    return result;
  }
}