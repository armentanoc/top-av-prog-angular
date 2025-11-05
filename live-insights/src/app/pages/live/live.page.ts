// src/app/pages/live/live.page.ts
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface Comment {
  text: string;
  sentiment: 'POSITIVO' | 'NEGATIVO' | 'NEUTRO';
  classification: 'SUGESTÃO' | 'MEME' | 'OFENSIVO';
  user: string;
  time: string;
}

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  liveId: string = '';
  isAnalyzing = false;
  chart: Chart | null = null;
  
  comments: Comment[] = [
    {
      text: 'Ótimo conteúdo! Parabéns! 👍',
      sentiment: 'POSITIVO',
      classification: 'SUGESTÃO',
      user: 'Maria123',
      time: '10:01'
    },
    {
      text: 'Não estou conseguindo entender essa parte',
      sentiment: 'NEGATIVO',
      classification: 'SUGESTÃO',
      user: 'Pedro_Dev',
      time: '10:03'
    },
    {
      text: 'kkkkkk muito bom! 😂',
      sentiment: 'POSITIVO',
      classification: 'MEME',
      user: 'Beatriz_Dev',
      time: '10:05'
    },
    {
      text: 'Isso é uma porcaria',
      sentiment: 'NEGATIVO',
      classification: 'OFENSIVO',
      user: 'Rafael_JS',
      time: '10:08'
    },
    {
      text: 'Excelente explicação! 🔥',
      sentiment: 'POSITIVO',
      classification: 'SUGESTÃO',
      user: 'Ana_Silva',
      time: '10:12'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.liveId = this.route.snapshot.paramMap.get('id') || '1';
  }

  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['10:00', '10:02', '10:04', '10:06', '10:08', '10:10', '10:12'],
          datasets: [
            {
              label: 'Positivos',
              data: [1, 2, 3, 3, 4, 4, 4],
              borderColor: '#198754',
              backgroundColor: 'rgba(25, 135, 84, 0.1)',
              tension: 0.3
            },
            {
              label: 'Negativos',
              data: [0, 1, 1, 2, 2, 2, 2],
              borderColor: '#dc3545',
              backgroundColor: 'rgba(220, 53, 69, 0.1)',
              tension: 0.3
            },
            {
              label: 'Neutros',
              data: [0, 0, 1, 1, 1, 1, 1],
              borderColor: '#6c757d',
              backgroundColor: 'rgba(108, 117, 125, 0.1)',
              tension: 0.3
            },
            {
              label: 'Ofensivos',
              data: [0, 0, 0, 1, 1, 1, 1],
              borderColor: '#ffc107',
              backgroundColor: 'rgba(255, 193, 7, 0.1)',
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Tempo'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantidade'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      });
    }
  }

  startAnalysis() {
    this.isAnalyzing = true;
    console.log('Análise iniciada');
  }

  stopAnalysis() {
    this.isAnalyzing = false;
    console.log('Análise parada');
  }

  getSentimentColor(sentiment: string): string {
    switch (sentiment) {
      case 'POSITIVO': return 'success';
      case 'NEGATIVO': return 'danger';
      case 'NEUTRO': return 'medium';
      default: return 'medium';
    }
  }

  getClassificationColor(classification: string): string {
    switch (classification) {
      case 'SUGESTÃO': return 'primary';
      case 'MEME': return 'tertiary';
      case 'OFENSIVO': return 'warning';
      default: return 'medium';
    }
  }
}