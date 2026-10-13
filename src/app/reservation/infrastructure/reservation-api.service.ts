import {BaseApi} from '../../shared/infrastructure/base-api';
import {Reservation} from '../domain/model/reservation.entity';
import {ReservationResource, ReservationResponse} from './reservation.response';
import {ReservationAssembler} from './reservation.assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


export class ReservationEndPoint extends BaseApi {

  constructor(http: HttpClient) {
    super(http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderApiReservationUrl}`,
      new ReservationAssembler());
  }
}
