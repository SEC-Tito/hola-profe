import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';
import { set } from 'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estadococina: boolean | undefined;
  estadodormitorio1: boolean | undefined;
  estadodormitorio2: boolean | undefined;
  estadodormitorio3: boolean | undefined;
  estadosala: boolean | undefined;
  estadoterrasa: boolean | undefined;

  constructor(private database: Database) {
  }

  ngOnInit() {
    const routecocina = ref(this.database, "casa/cocina");
    object(routecocina).subscribe(attributes => {
      this.estadococina = attributes.snapshot.val();
    });

    const routedormitorio1 = ref(this.database, "casa/dormitorio1");
    object(routedormitorio1).subscribe(attributes => {
      this.estadodormitorio1 = attributes.snapshot.val();
    });

    const routedormitorio2 = ref(this.database, "casa/dormitorio2");
    object(routedormitorio2).subscribe(attributes => {
      this.estadodormitorio2 = attributes.snapshot.val();
    });

    const routedormitorio3= ref(this.database, "casa/dormitorio3");
    object(routedormitorio3).subscribe(attributes => {
      this.estadodormitorio3 = attributes.snapshot.val();
    });

    const routesala = ref(this.database, "casa/sala");
    object(routesala).subscribe(attributes => {
      this.estadosala= attributes.snapshot.val();
    });

    const routeterrasa = ref(this.database, "casa/terrasa");
    object(routeterrasa).subscribe(attributes => {
      this.estadoterrasa = attributes.snapshot.val();
    });
  }
  cambiardormitorio1(nuevoEstado: boolean) {
    const routedormitorio1 = ref(this.database, "casa/dormitorio1");
    set(routedormitorio1, nuevoEstado); // Actualiza el valor en la base de datos
    
    // Cambia el color del botón
    this.estadodormitorio1 = nuevoEstado;
  }
  cambiarCocina(nuevoEstado: boolean) {
    const routecocina = ref(this.database, "casa/cocina");
    set(routecocina, nuevoEstado); // Actualiza el valor en la base de datos
    
    // Cambia el color del botón
    this.estadococina = nuevoEstado;
  }
  cambiardormitorio2(nuevoEstado: boolean) {
    const routedormitorio2 = ref(this.database, "casa/dormitorio2");
    set(routedormitorio2, nuevoEstado); // Actualiza el valor en la base de datos
    
    // Cambia el color del botón
    this.estadodormitorio2 = nuevoEstado;
  }
  cambiardormitorio3(nuevoEstado: boolean) {
    const routedormitorio3 = ref(this.database, "casa/dormitorio3");
    set(routedormitorio3, nuevoEstado); // Actualiza el valor en la base de datos
    
    // Cambia el color del botón
    this.estadodormitorio3= nuevoEstado;
  }
  cambiarsala(nuevoEstado: boolean) {
    const routesala = ref(this.database, "casa/sala");
    set(routesala, nuevoEstado); // Actualiza el valor en la base de datos
    
    // Cambia el color del botón
    this.estadosala = nuevoEstado;
  }
  cambiarterrasa(nuevoEstado: boolean) {
    const routeterrasa = ref(this.database, "casa/terrasa");
    set(routeterrasa, nuevoEstado); // Actualiza el valor en la base de datos
    
    // Cambia el color del botón
    this.estadoterrasa = nuevoEstado;
  }
  
}