import {AquaticCenterResource, AquaticCenterResponse} from './aquatic-center.response';
import {AquaticCenter} from '../domain/model/aquatic-center.entity';



export class AquaticCenterAssembler implements <AquaticCenter, AquaticCenterResource, AquaticCenterResponse> {

  toEntitiesFromResponse = (response: AquaticCenterResponse): AquaticCenter[] => {
    console.log(response);
    return response.AquaticCenter.map(resource => this.toEntityFromResource(resource as AquaticCenterResource));
  },


  toEntityFromResource = (resource: AquaticCenterResource): AquaticCenter=>
    new AquaticCenter({
      id: resource.id,
      name: resource.string,
      activityType: resource.string,
      capacity: resource.number,
      latitude: resource.number,
      longitude: resource.number,
    }),



  toResourceFromEntity = (entity: AquaticCenter): AquaticCenterResource =>
    ({
      id: entity.id,
      name: entity.string,
      activityType:entity.string,
      capacity: entity.number,
      latitude: entity.number,
      longitude: entity.number,
    } as AquaticCenterResource),

}
