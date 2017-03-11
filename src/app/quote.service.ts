import { Injectable } from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class QuoteService {
    constructor(private http: Http) {

    }

    addQuote(content: string) {
        const body = JSON.stringify({content: content}); // To set body
        const headers = new Headers({'Content-Type': 'application/json'}); // To set headers
        return this.http.post('http://127.0.0.1:8000/api/quote', body, {headers: headers})
    }

    getQuotes(): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/quote')
            .map(
                (response: Response) => {
                    return response.json().quotes;
                }
            );
    }

    updateQuote(id: number, newContent: string) {
        const body = JSON.stringify({content: newContent}); // To set body
        const headers = new Headers({'Content-Type': 'application/json'}); // To set headers
        return this.http.put('http://127.0.0.1:8000/api/quote/' + id, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }

    deleteQuote(id: number) {
        return this.http.delete('http://127.0.0.1:8000/api/quote/' + id);
    }
}