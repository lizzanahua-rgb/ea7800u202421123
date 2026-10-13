
export class Reservation {

    #id: number;
    #aquaticCenterId: number;
    #activityType: string;
    #participantName: string;
    #participants:number;
    #weatherTemperature: number;
    #reservedAt: string;

    constructor(reservation: {id:number;aquaticCenterId:number; activityType:string; participantName: string; participants: number; weatherTemperature: number; reservedAt:string}) {
    this.#id = reservation.id;
    this.#aquaticCenterId=reservation.aquaticCenterId;
    this.#activityType=reservation.activityType;
    this.#participantName =reservation.participantName;
    this.#participants=reservation.participants;
    this.#weatherTemperature=reservation.weatherTemperature;
    this.#reservedAt= reservation.reservedAt;
  }
}
