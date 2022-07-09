import prisma from "../../../database/prismaClient";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface AuthenticateClientProps {
  username: string;
  password: string;
}


export class AuthenticateClientUseCase{

  async execute({username, password}: AuthenticateClientProps) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error("Invalid username or password")
    }

    const passwordMatch = await compare(password, client.password,)

    if (!passwordMatch) {
      throw new Error("Invalid username or password")
    }

    const token = sign({
      username
    }, "019acc25a4e242bb55ad489832ada12d", {
      subject: client.id,
      expiresIn: "1d"
    } )
  
    return token
  }
}