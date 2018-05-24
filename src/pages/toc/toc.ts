import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C1Page } from '../c1/c1';
import { C2Page } from '../c2/c2';

export class Chapter {
    id: number;
    name: string;
  }
  
  const CHAPTERS: Chapter[] = [
    { id: 1, name: 'The Start' },
    { id: 2, name: 'The End' }
  ]

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html'
})

export class TOCPage {
    chapters;
    nav;

    constructor(public navCtrl: NavController) {
        this.chapters = CHAPTERS;
        this.nav = navCtrl;
    }

    onSelect(chapter: Chapter): void {
        let selectedChapter = chapter.id;
        if(selectedChapter === 1) {
            this.nav.push(C1Page)
        } else if(selectedChapter === 2) {
            this.nav.push(C2Page)
        }
    }

}