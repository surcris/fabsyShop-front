import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {

  email : string = "toto@gmail.com"
}
