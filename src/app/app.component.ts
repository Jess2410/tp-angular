import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, Observable } from 'rxjs';


@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



constructor (private router: Router, private activatedRoute: ActivatedRoute, private title: Title) {

}

ngOnInit(): void {
const events = this.router.events.pipe(filter(event => event instanceof NavigationEnd)) as Observable<NavigationEnd>;
events.subscribe((e: NavigationEnd) => {
  this.title.setTitle(this.activatedRoute.firstChild?.snapshot.data['title']);
})
}

}
