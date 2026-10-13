
export interface ReservationResource{
  id: number;
  aquaticCenterId: number;
  activityType: string;
  participantName: string;
  participants:number;
  weatherTemperature: number;
  reservedAt: string;
}

export interface   ReservationResource{

  courses: ReservationResource[];
}
