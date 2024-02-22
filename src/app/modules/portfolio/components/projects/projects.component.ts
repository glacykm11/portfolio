import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/open-insurance.png',
      alt: 'Projeto Open Insurance',
      title: 'Open Insurance - Bradesco Seguros',
      width: '341px',
      height: '174px',
      description: '<p>O Open Insurance desempenha um papel fundamental na evolução tecnológica do Open Finance, oferecendo comodidade e segurança para aproximar você das proteções que deseja.</p>',
      links: [
        {
          name: 'Conheça um pouco mais sobre o Open Insurance',
          href: 'https://www.bradescoseguros.com.br/clientes/open-insurance'
        }
      ]
    },
    {
      src: 'assets/img/projects/brain.png',
      alt: 'Projeto Brain',
      title: 'Brain - Bradesco Inteligência de Negócios',
      width: '284px',
      height: '141px',
      description: '<p>Em mercados competitivos, quanto melhor for a experiência proporcionada ao consumidor de produtos e serviços, mais chances de ele se tornar fã da marca. Foi o que motivou o Bradesco a criar o projeto Brain – Bradesco Inteligência de Negócios, e o fez vencedor do prêmio 100+ Inovadoras no uso da TI, na categoria Bancos Grandes.</p>',
      links: [
        {
          name: 'Conheça um pouco mais sobre o Brain',
          href: 'https://itforum.com.br/noticias/bradesco-cria-brain-para-surpreender-e-ajudar-o-cliente-no-momento-certo/'
        }
      ]
    }
  ])

  

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  
  }
}
