import { GoogleLoginProvider, SocialAuthService ,SocialUser} from 'angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loginOptions={
  scope:'profile email'
 }
 constructor(private router:Router,private socialAuthService:SocialAuthService){}

 loginWithGoogle(): void {
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, this.loginOptions)
    .then((socialUser: SocialUser) => {
              this.router.navigate(['/home']);
              console.log('Logged in user:', socialUser);
            })
    
  }
}


