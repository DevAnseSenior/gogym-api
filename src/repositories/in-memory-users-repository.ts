import { Prisma } from 'generated/prisma'

export class InMemoryUsersRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public users: any[] = []

  async create(data: Prisma.UserCreateInput) {
    this.users.push(data)
  }
}
