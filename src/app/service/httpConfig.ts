import { HttpHeaders } from '@angular/common/http';

export const baseUrl = "http://localhost:8091/";

export const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
}