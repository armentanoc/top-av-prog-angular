// src/app/pages/cadastro-live/cadastro-live.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-live',
  templateUrl: './cadastro-live.page.html',
  styleUrls: ['./cadastro-live.page.scss'],
})
export class CadastroLivePage implements OnInit {
  liveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.liveForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(10)]],
      idLive: [''],
      tags: ['']
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.liveForm.valid) {
      console.log('Formulário válido:', this.liveForm.value);
      
      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: 'Live criada com sucesso! Sua live foi agendada e estará disponível no horário programado.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/dashboard']);
            }
          }
        ]
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos obrigatórios.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}