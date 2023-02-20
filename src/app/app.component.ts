import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: { name: string; image: string }[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getList().subscribe((list) => this.list = list);
  }
}
