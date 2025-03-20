import {
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpInterceptorFn,
  HttpContextToken,
  HttpContext,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { TokenService } from '@services/token.service';
import { AuthService } from '@services/auth.service';

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const tokenInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);

  const addToken = (
    req: HttpRequest<unknown>,
  ): Observable<HttpEvent<unknown>> => {
    const accessToken = tokenService.getToken();
    if (accessToken) {
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next(authRequest);
    }
    return next(req);
  };

  const updateAccessTokenAndRefreshToken = (
    req: HttpRequest<unknown>,
  ): Observable<HttpEvent<unknown>> => {
    const refreshToken = tokenService.getRefreshToken();
    const isValidRefreshToken = tokenService.isValidRefreshToken();
    if (refreshToken && isValidRefreshToken) {
      return authService
        .refreshToken(refreshToken)
        .pipe(switchMap(() => addToken(req)));
    }
    return next(req);
  };

  if (request.context.get(CHECK_TOKEN)) {
    const isValidToken = tokenService.isValidToken();
    if (isValidToken) {
      return addToken(request);
    } else {
      return updateAccessTokenAndRefreshToken(request);
    }
  }

  return next(request);
};
