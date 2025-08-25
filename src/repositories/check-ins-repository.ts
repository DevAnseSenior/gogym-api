import { CheckIn, Prisma } from 'generated/prisma'

export interface CheckInsRespository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
}
