import { Component } from '@angular/core';
import  data from "../../../assets/json/projects.json";
import { Tags } from '../../models/tags';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects= data;
  tags:Tags = {
    angular:{
      name:"Angular Js",
      class:"faAngular",
      icon:`<svg class="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>`
    },
    tailwind:{
      name: "Tailwind",
      class: "ss",
      icon: `<svg class="fill-blue-500  size-3" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>`
    }
  };


}
