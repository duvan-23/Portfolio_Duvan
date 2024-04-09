import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, IntroductionComponent, ExperienceComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scroll3(pos:string){
    const sectionElement = document.getElementById(pos);
    if (sectionElement) {
      const offset = -75; 
      const elementTop = sectionElement.getBoundingClientRect().top;
      const desiredScrollPosition = window.scrollY + elementTop + offset;
      window.scrollTo({ top:desiredScrollPosition, behavior: 'smooth'});
    }
  }
}
