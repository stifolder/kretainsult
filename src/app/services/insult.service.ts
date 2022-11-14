import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class InsultService {
  private adjectives: Array<string> = [];
  private nouns: Array<string> = [];

  currentPhrase = "";

  get currentPhraseClip() {
    return 'Te ' + this.currentPhrase?.toLowerCase();
  }

  constructor(private http: HttpClient) {
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  initialize(): void {
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

}
