// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { HeaderComponent } from './shared/components/header/header.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HeaderComponent, FooterComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent implements OnInit {
//   title = 'titanium-aluminium';
//   deferredPrompt: any;

//   ngOnInit(): void {
//     window.addEventListener('beforeinstallprompt', (e: Event) => {
//       e.preventDefault();
//       this.deferredPrompt = e;

//       const installBtn = document.getElementById('installButton');
//       if (installBtn) {
//         installBtn.style.display = 'block';

//         installBtn.addEventListener('click', () => {
//           this.deferredPrompt.prompt();
//           this.deferredPrompt.userChoice.then((choiceResult: any) => {
//             if (choiceResult.outcome === 'accepted') {
//               console.log('User accepted the A2HS prompt');
//             } else {
//               console.log('User dismissed the A2HS prompt');
//             }
//             this.deferredPrompt = null;
//             installBtn.style.display = 'none';
//           });
//         }, { once: true }); // prevent duplicate listeners
//       }
//     });
//   }
// }


import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'titanium-aluminium';
  deferredPrompt: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('beforeinstallprompt', (e: any) => {
        e.preventDefault();
        this.deferredPrompt = e;

        const installBtn = document.getElementById('installButton');
        if (installBtn) {
          installBtn.style.display = 'block';

          installBtn.addEventListener('click', () => {
            this.deferredPrompt.prompt();
            this.deferredPrompt.userChoice.then((choiceResult: any) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              this.deferredPrompt = null;
              installBtn.style.display = 'none';
            });
          }, { once: true });
        }
      });
    }
  }
}
