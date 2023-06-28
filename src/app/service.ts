import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Passenger {
  airline: any[];
  name: string;
  trips: number;
  __v: number;
  _id: string;
}

export const fetchPassenger = (
  http: HttpClient,
  page: number
): Observable<{
  data: Passenger[];
  totalPassengers: number;
  totalPages: number;
}> => {
  return http
    .get<{
      data: Passenger[];
      totalPassengers: number;
      totalPages: number;
    }>(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
    .pipe(tap((res) => console.log(res)));
};
