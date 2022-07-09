import prisma from "../../../database/prismaClient";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface AuthenticateDeliverymanProps {
  username: string;
  password: string;
}


export class AuthenticateDeliverymanUseCase{

  async execute({username, password}: AuthenticateDeliverymanProps) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if (!deliveryman) {
      throw new Error("Invalid username or password")
    }

    const passwordMatch = await compare(password, deliveryman.password,)

    if (!passwordMatch) {
      throw new Error("Invalid username or password")
    }

    const token = sign({
      username
    }, "019acc25a4e242bb55ad489832ada12d", {
      subject: deliveryman.id,
      expiresIn: "1d"
    } )
  
    return token
  }
}