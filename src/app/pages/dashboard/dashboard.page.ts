// src/app/pages/dashboard/dashboard.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Live {
  id: number;
  status: 'live' | 'scheduled' | 'finished';
  title: string;
  description: string;
  comments: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  lives: Live[] = [];
  filteredLives: Live[] = [];
  searchTerm = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadLives();
  }

  loadLives() {
    this.lives = [
      {
        id: 1,
        status: 'live',
        title: 'Tutorial de Bootstrap 5',
        description: 'Aprendendo componentes',
        comments: 1200
      },
      {
        id: 2,
        status: 'live',
        title: 'Tutorial de HTML',
        description: 'Tabelas e elementos',
        comments: 1600
      },
      {
        id: 3,
        status: 'live',
        title: 'JavaScript Avançado',
        description: 'Async/Await e Promises',
        comments: 892
      },
      {
        id: 4,
        status: 'scheduled',
        title: 'React Hooks na Prática',
        description: 'useState, useEffect e mais',
        comments: 0
      },
      {
        id: 5,
        status: 'finished',
        title: 'CSS Grid Layout',
        description: 'Layouts modernos',
        comments: 1500
      },
      {
        id: 6,
        status: 'finished',
        title: 'TypeScript para Iniciantes',
        description: 'Tipos e Interfaces',
        comments: 987
      }
    ];
    
    this.filteredLives = [...this.lives];
  }

  filterLives() {
    if (!this.searchTerm.trim()) {
      this.filteredLives = [...this.lives];
      return;
    }

    this.filteredLives = this.lives.filter(live =>
      live.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      live.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'live': return 'danger';
      case 'scheduled': return 'warning';
      case 'finished': return 'medium';
      default: return 'medium';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'live': return 'AO VIVO';
      case 'scheduled': return 'Agendada';
      case 'finished': return 'Finalizada';
      default: return status;
    }
  }

  viewLive(liveId: number) {
    this.router.navigate(['/live', liveId]);
  }

  stopLive(liveId: number) {
    console.log('Parando live:', liveId);
    // Lógica para parar a live
  }

  editLive(liveId: number) {
    console.log('Editando live:', liveId);
    // Lógica para editar a live
  }

  deleteLive(liveId: number) {
    console.log('Deletando live:', liveId);
    // Lógica para deletar a live
  }

  archiveLive(liveId: number) {
    console.log('Arquivando live:', liveId);
    // Lógica para arquivar a live
  }

  viewStats(liveId: number) {
    console.log('Visualizando stats da live:', liveId);
    // Lógica para visualizar estatísticas
  }

  navigateToCadastro() {
    this.router.navigate(['/cadastro-live']);
  }
}
