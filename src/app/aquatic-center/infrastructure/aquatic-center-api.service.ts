import {BaseApi} from '../../shared/infrastructure/base-api';
import {AquaticCenter} from '../domain/model/aquatic-center.entity';
import {AquaticCenterResource, AquaticCenterResponse} from './aquatic-center.response';
import {AquaticCenterAssembler} from './aquatic-center.assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


export class AquaticCenterEndpoint{

  constructor(http: HttpClient) {

    super(http,${environment.platformProviderApiBaseUrl}${environment.platformProviderApiCentersUrl}`,
      new AquaticCenterAssembler());
  
  }
}

