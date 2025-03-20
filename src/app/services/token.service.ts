import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
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

  isValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const decodeToken = jwtDecode<JwtPayload>(token);
    const exp = decodeToken?.exp;

    if (!exp) return false;

    return exp * 1000 > Date.now();
  }

  saveRefreshToken(token: string): void {
    setCookie('refresh-token-trello', token, { expires: 365, path: '/' });
  }

  getRefreshToken(): string | undefined {
    const token = getCookie('refresh-token-trello');
    return token;
  }

  removeRefreshToken(): void {
    removeCookie('refresh-token-trello');
  }

  isValidRefreshToken(): boolean {
    const token = this.getRefreshToken();
    if (!token) return false;

    const decodeToken = jwtDecode<JwtPayload>(token);
    const exp = decodeToken?.exp;

    if (!exp) return false;

    return exp * 1000 > Date.now();
  }
}
