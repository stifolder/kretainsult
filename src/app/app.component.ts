import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

declare let html2canvas: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  adjectives: Array<string> = [];
  nouns: Array<string> = [];
  currentPhrase = "";
  clipSuccess: boolean;

  get currentPhraseClip() {
    return 'Te ' + this.currentPhrase?.toLowerCase();
  }

  constructor(private http: HttpClient) {
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
    this.http.get('assets/dirtywords.xml', {responseType: 'text'}).subscribe(data => {
      const xmlDoc = (new DOMParser()).parseFromString(data, "text/xml");
      let words = xmlDoc.getElementsByTagName("Word");
      for (let i = 0; i < words.length; i++) {
        let word = words[i] as Element;
        let type = word.getAttribute("type");
        if (type == "m") {
          this.adjectives.push(word.innerHTML);
        }
        if (type == "f") {
          this.nouns.push(word.innerHTML);
        }
      }
      this.generate();
    });
  }

  generate() {
    let generated = "";
    let numOfAdjectives = this.getRandomInt(3) + 1;
    for (let i = 0; i < numOfAdjectives; i++) {
      let randomAdjectiveIndex = this.getRandomInt(this.adjectives.length);
      let adjective = this.adjectives[randomAdjectiveIndex] as string;
      if (i > 0) {
        adjective = adjective.toLowerCase();
      }
      generated += adjective + ", ";
    }
    generated = generated.substring(0, generated.length - 2) + " ";

    let randomNounIndex = this.getRandomInt(this.nouns.length);
    generated += (this.nouns[randomNounIndex] as string).toLowerCase() + "!"
    this.currentPhrase = generated;
  }

  saveImage() {
    html2canvas(this.screen.nativeElement).then((canvas: any) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'inzultus.png';
      this.downloadLink.nativeElement.click();
    });
  }

  clipboardSuccess() {
    this.clipSuccess = true;
    setTimeout(() => this.clipSuccess = false, 1000);
  }
}
