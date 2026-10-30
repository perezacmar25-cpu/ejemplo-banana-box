import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { RickListResponse } from '../interfaces/ricky-list-response';
import { RickyDetailResponse } from '../interfaces/ricky-detail-response';

@Service()
export class RickyService {

    http = inject(HttpClient);


    getAll(): Observable<RickListResponse> {
        return this.http.get<RickListResponse>('https://rickandmortyapi.com/api/character')
    }

    getOne(id:string):Observable<RickyDetailResponse>{
        return this.http.get<RickyDetailResponse>(`https://rickandmortyapi.com/api/character/${id}`)
    }
}
