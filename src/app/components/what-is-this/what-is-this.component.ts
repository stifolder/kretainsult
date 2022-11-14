import {Component} from '@angular/core';

export class ArticleModel {
  title: string;
  url: string;

}

@Component({
  selector: 'app-what-is-this',
  templateUrl: './what-is-this.component.html',
  styleUrls: ['./what-is-this.component.scss']
})
export class WhatIsThisComponent {

  articles: Array<ArticleModel> = [
    {
      title: 'Telex: Feltörhették a KRÉTA-t, a diákok adatai is kiszivároghattak',
      url: 'https://telex.hu/tech/2022/11/07/kreta-rendszer-e-naplo-kozoktatas-adathalasz-tamadas-adatszivargas-ekreta-informatikai-zrt'
    },
    {
      title: 'Telex: A fejlesztőcég megpróbálta elhallgatni a KRÉTA feltörését',
      url: 'https://telex.hu/tech/2022/11/09/kreta-rendszer-ekreta-zrt-adathalasz-tamadas-adatszivargas-elhallgatas-naih-vizsgalat-eljaras'
    },
    {
      title: 'Telex: KRÉTA-ügy: Aggasztó a kiszivárgott forráskód, de arra utal, hogy a hekkerek nem mindenhez fértek hozzá',
      url: 'https://telex.hu/tech/2022/11/11/kreta-adatszivargas-forraskod-ekreta-zrt-fejlesztok-elvandorlas'
    },
    {
      title: 'Forbes: A világ egyik legjobb hekkere a KRÉTA feltöréséről: sokkal rosszabb ennél már nem lehet',
      url: 'https://forbes.hu/uzlet/silur-etikus-hekker-kreta-feltores-oktatas/'
    }
  ]

}
