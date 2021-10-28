import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SeguridadService } from "./seguridad.service";

@Injectable()
export class SeguridadRouter implements CanActivate{

constructor(private segService: SeguridadService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.segService.onSesion()){
      return true;
    }else{
      return this.router.navigate(['login']);
    }
  }
}
