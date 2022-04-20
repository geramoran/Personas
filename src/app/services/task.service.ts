import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Persona } from "../models/Persona";
import { Api } from "../models/Api"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  personas: Persona[];
  public random = 'https://randomapi.com/api/38d801841ed1c43bd19ae8b3e523180b';

  constructor(private http: HttpClient) {
    this.personas = [];
  }

  getPersonas() {
    let lsPersonas = localStorage.getItem('Personas');
    if(lsPersonas === null) {
      this.personas = [];
    } else {
      this.personas = JSON.parse(lsPersonas);
    }
    return this.personas;
  }

  addPersonas(people: Persona) {
    this.personas.push(people);
    let personas: Persona[] = [];
    let lsPersonas = localStorage.getItem('Personas');
    if(lsPersonas === null){
      personas = [];
      personas.push(people);
      localStorage.setItem('Personas', JSON.stringify(personas));
    } else{
      personas = JSON.parse(lsPersonas);
      personas.push(people);
      localStorage.setItem('Personas', JSON.stringify(personas));
    }
  }

  public getResource() {
    return this.http.get<Api>(this.random);
  }

  insert(nombre: String, archivo: String){
    this.getResource().subscribe((data: any) => {
      this.addPersonas({
        nombre: nombre,
        edad: data.results[0].age,
        sexo: data.results[0].sex,
        Documento: archivo
      });
    });
  }
}
