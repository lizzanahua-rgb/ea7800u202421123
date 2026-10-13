
export interface AquaticCenterResource{

  id: number;
  name: string;
  activityType: string;
  capacity: number;
  latitude: number;
  longitude: number;
}

export interface   AquaticCenterResponse{

  courses: AquaticCenterResource[];
}
