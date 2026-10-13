
export class AquaticCenter {

  #id: number;
  #name: string;
  #activityType: string;
  #capacity: number;
  #latitude: number;
  #longitude: number;

  constructor(aquaticCenter: {id:number; name: string; activityType:string; capacity:number; latitude: number; longitude: number}) {
    this.#id =aquaticCenter.id;
    this.#name =aquaticCenter.name;
    this.#activityType =aquaticCenter.activityType;
    this.#capacity =aquaticCenter.capacity;
    this.#latitude =aquaticCenter.latitude;
    this.#longitude =aquaticCenter.longitude;

  }
}
