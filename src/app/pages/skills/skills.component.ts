import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  angularSkill = {
      title: "Angular 11+",
      img: "../../../assets/img/tec-icons/icons8-angular.svg",
      text: "Angular é uma plataforma de desenvolvimento de aplicações web front-end criada pela Google. Ele é um framework open-source baseado em TypeScript. O principal objetivo do Angular é facilitar a criação de aplicações web de forma modular e escalável. Ele oferece uma série de ferramentas e funcionalidades para os desenvolvedores, incluindo:"
  }

  skills: any[] = [
    {
      title: "React.js",
      img: "../../../assets/img/tec-icons/icons8-reagir.svg",
      text: "React.js, comumente conhecido como React, é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook para a criação de interfaces de usuário, especialmente em aplicações de página única (SPAs). Ele se destaca por sua eficiência, flexibilidade e enfoque na construção de componentes reutilizáveis."
    },
    {
      title: "Java 11+",
      img: "../../../assets/img/tec-icons/icons8-logo-java-coffee-cup.svg",
      text: "Java é utilizado em uma ampla variedade de aplicações, desde aplicativos web e móveis até sistemas empresariais e dispositivos embarcados. Sua robustez, segurança e capacidade de escalabilidade fazem do Java uma escolha popular para desenvolvedores de software em todo o mundo."
    },
    {
      title: "Typescript",
      img: "../../../assets/img/tec-icons/icons8-texto-datilografado.svg",
      text: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela é um superconjunto do JavaScript, o que significa que qualquer código JavaScript válido também é código TypeScript válido. No entanto, TypeScript adiciona várias funcionalidades adicionais que não estão presentes no JavaScript padrão, com o objetivo de tornar o desenvolvimento de software mais robusto e eficiente."
    },
    {
      title: "Javascript",
      img: "../../../assets/img/tec-icons/icons8-javascript.svg",
      text: "JavaScript é uma linguagem de programação interpretada, amplamente utilizada para o desenvolvimento de páginas web interativas. Originalmente criada por Brendan Eich na Netscape em 1995, JavaScript é uma das três principais tecnologias da web, juntamente com HTML e CSS."
    },
    {
      title: "HTML5",
      img: "../../../assets/img/tec-icons/icons8-html5.svg",
      text: "HTML5 é a quinta e mais recente versão da HTML (HyperText Markup Language), a linguagem padrão utilizada para criar e estruturar conteúdo na web. Introduzido pelo W3C (World Wide Web Consortium) e WHATWG (Web Hypertext Application Technology Working Group), HTML5 trouxe uma série de melhorias e novas funcionalidades em relação às versões anteriores."
    },
    {
      title: "CSS3",
      img: "../../../assets/img/tec-icons/icons8-css3.svg",
      text: "CSS3, ou Cascading Style Sheets Level 3, é a terceira e mais recente versão da linguagem CSS utilizada para definir a aparência e o layout de páginas web. Desenvolvido pelo W3C (World Wide Web Consortium), CSS3 introduz várias melhorias e novas funcionalidades em relação às versões anteriores, permitindo um maior controle sobre a apresentação visual dos sites."
    },
    {
      title: "SASS",
      img: "../../../assets/img/tec-icons/icons8-atrevimento.svg",
      text: "Sass (Syntactically Awesome Stylesheets) é uma linguagem de extensão do CSS que introduz funcionalidades avançadas para tornar a escrita de estilos mais eficiente e poderosa. Criado por Hampton Catlin e desenvolvido por Natalie Weizenbaum, Sass permite que os desenvolvedores escrevam CSS com uma sintaxe mais limpa e recursos adicionais que não estão presentes no CSS padrão."
    },
    {
      title: "NodeJS",
      img: "../../../assets/img/tec-icons/icons8-node-js.svg",
      text: "Node.js é um ambiente de execução JavaScript baseado no motor V8 da Google, utilizado para desenvolvimento de aplicações server-side. Ele permite que JavaScript, normalmente usado apenas no lado do cliente (browser), seja executado no servidor, proporcionando um ambiente de execução robusto e escalável para construção de aplicações web e APIs."
    },
    {
      title: "Figma",
      img: "../../../assets/img/tec-icons/figma-svgrepo-com.svg",
      text: "Figma é uma poderosa ferramenta de design colaborativo baseada na web, utilizada por designers de interface e UX/UI (User Experience/User Interface) para criar protótipos, interfaces de usuário, e designs interativos. Lançado em 2016, Figma revolucionou o design colaborativo ao permitir que múltiplos usuários trabalhem simultaneamente no mesmo projeto, em tempo real, independentemente da localização geográfica."
    },
  ]

}
