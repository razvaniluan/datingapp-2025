import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected readonly title = 'Dating app'; // class property
  protected members = signal<any>([]); // inițial un array gol

  async ngOnInit() {
    this.members.set(await this.getMembers()); // actualizează semnalul cu datele obținute
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get('http://localhost:5000/api/members')); 
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}
