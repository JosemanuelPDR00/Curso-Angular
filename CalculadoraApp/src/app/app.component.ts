import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora App';

  //VARIABLES CON LAS QUE VAMOS A TRABAJAR
  numero1=0;
  numero2=0;
  resultado=0;

  //FUNCIONES DE LOS DIFERENTES BOTONES DE LA CALCULADORA
  sumar():void{
    this.resultado = this.numero1 + this.numero2;
  }

  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar():void{
    this.resultado = this.numero1 * this.numero2;
  }

  dividir():void{
    this.resultado = this.numero1 / this.numero2;
  }


}
