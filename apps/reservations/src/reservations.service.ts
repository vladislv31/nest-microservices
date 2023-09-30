import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservantionsRepository: ReservationsRepository,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservantionsRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.reservantionsRepository.find({});
  }

  findOne(_id: string) {
    return this.reservantionsRepository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservantionsRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservantionsRepository.findOneAndDelete({ _id });
  }
}
