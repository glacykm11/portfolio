import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedora Frontend | Angular, Typescript, HTML, CSS, Javascript",
        p: "CI&T | Mai 2022 - Present"
      },
      text: "<p>Sou uma desenvolvedora frontend e trabalho em um projeto do setor de seguros. Sou responsável pelo desenvolvimento de uma nova jornada de alto impacto chamada de Open Insurance (Sistema de Seguros Aberto) para uma aplicação mobile.</p><p>A principal stack é uma aplicação utilizando framework híbrido Ionic, juntamente com o Angular que são executadas no client-side. Para acessar itens nativos do dispositivo, foi usado o Capacitor. A rotina de implementação consiste em desenvolvimento de acordo com os critérios de aceite das histórias de negócio e design system existente. Também são feitas revisões de código e pair programming, sendo utilizado o Jest para testes unitários. Com isso, todas as novas implementações eram testadas e validadas por QAs e homologadas pela PO, antes de subirem para produção.</p><p>Além das implementações das novas histórias, foi implementado também, o tagueamento através de tags do google analytics para coleta de dados por toda a nova jornada para futuros insights. Implementei os estados da aplicação pelo NgRx, que oferece conceitos de gerenciamento de estado reativo através da store, actions, selectors e effects. Também utilizo os conceitos do RxJs para consumir serviços da API REST.</p><p>Uso o git para o versionamento de código e o bitbucket para armazenar os códigos. Um critério bastante importante no projeto, é a implementação da responsividade para que o frontend consiga atender todos os tamanhos de dispositivos possíveis em ambos sistemas operacionais, iOS e Android. Um dos meus pontos de destaque é a facilidade em me adaptar no contexto do projeto em que fui inserida. Outro ponto de destaque foi a rápida absorção de conhecimento em relação a utilização de variáveis no css/scss para manter uma folha de estilo mais organizada e padronizada.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedora Frontend | Angular, Typescript, HTML, CSS, Javascript",
        p: "Capgemini | Jun 2021 - Mai 2022"
      },
      text: "<p>Participei da Academia Técnica Capgemini 2021, com aulas ministradas pela Proway sobre as tecnologias mais utilizadas pela empresa. Durante 2 meses, foram formadas equipes para a realizaçãode um projeto para aprofundar os aprendizados técnicos sobre HTML, CSS, Javascript e Angular.</p><p>Ao final da academia técnica, desenvolvemos e apresentamos em equipe, o projeto que foi implementado durante os 2 meses: um projeto de instituição financeira que havia as funcionalidades de empréstimo, cadastro, login, financiamento, previdência e investimento, incluindo conceitos como mobile first e responsividade.</p><p>Posteriormente, fui selecionada para atuar no projeto do setor financeiro em um squad de arquitetura, sendo responsável por atuar como desenvolvedora frontend para construir e/ou implementar novas necessidades para componentes globais utilizado por desenvolvedores das jornadas de novos produtos utilizando conhecimentos de Javascript/Typescript e Angular.</p><p>Fui responsável por implementar uma melhoria de acessibilidade para deficientes auditivos e visuais, em um componente que já existia. Como solução, me guiei pela documentação da WAI-ARIA para tornar o componente acessível.</p><p>Nesse projeto, implementei testes unitários no frontend, utilizando o framework Jest. Usei também o RxJs, responsável por conceitos de programação reativa, através do consumo de APIs REST do projeto.</p><p>Um ponto de destaque, foi uma apresentação feita por mim e outros colegas de equipe, de novas modificações de um componente global para um fórum de aproximadamente 150 pessoas. Ao final dessa apresentação, recebi vários feedbacks positivos a respeito da forma clara e objetiva que foram repassadas as informações.</p><p>Realizei também a documentação de bibliotecas frontend usando frameworks como Storybook e Compodoc. Por fim, vivenciei a transição da arquitetura monolítica do frontend para microfrontends, reconhecendo os benefícios que essa arquitetura consegue proporcionar para o time de desenvolvedores.</p>"
    }
  ])
}
