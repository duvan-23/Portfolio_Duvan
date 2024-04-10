import { Component } from '@angular/core';
import  data from "../../../assets/json/experience.json";
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  dataExperience = data;
}
