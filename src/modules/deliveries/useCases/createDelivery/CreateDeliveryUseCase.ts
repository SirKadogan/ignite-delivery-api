import prisma from "../../../../database/prismaClient";

interface CreateDeliveryProps {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {

  async execute({ id_client,item_name }: CreateDeliveryProps) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      }
    })

    return delivery;
  }
}