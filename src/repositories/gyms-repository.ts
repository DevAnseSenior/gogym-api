import { Gym } from 'generated/prisma'

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>
}
