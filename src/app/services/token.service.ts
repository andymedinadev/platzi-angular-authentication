import { Injectable } from '@angular/core';
import { setCookie, getCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string): void {
    setCookie('token-trello', token, { expires: 365, path: '/' });
  }
  getToken(): string | undefined {
    const token = getCookie('token-trello');
    return token;
  }

  removeToken(): void {
    removeCookie('token-trello');
  }
}
