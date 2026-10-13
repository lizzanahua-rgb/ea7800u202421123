import {ReservationResource, ReservationResponse} from './reservation.response';
import {Reservation} from '../domain/model/reservation.entity';



export class ReservationAssembler implements <Reservation, ReservationResource, ReservationResponse> {

  toEntitiesFromResponse = (response: ReservationResponse): Reservation[] => {
    console.log(response);
    return response.Reservation.map(resource => this.toEntityFromResource(resource as ReservationResource));
  },


  toEntityFromResource = (resource: ReservationResource): Reservation=>
    new Reservation({
      id: resource.id,
      aquaticCenterId: resource.aquaticCenterId,
      activityType: resource.activityType,
      participantName: resource.participantName,
      participants:resource.participants,
      weatherTemperature: resource.weatherTemperature,
      reservedAt: resource.reservedAt,
    }),



  toResourceFromEntity = (entity: Reservation): ReservationResource =>
    ({
      id: number,
      aquaticCenterId: number,
      activityType: string,
      participantName: string,
      participants:number,
      weatherTemperature: number,
      reservedAt: string,
    } as ReservationResource),

}
