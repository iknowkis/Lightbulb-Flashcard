import { Component, Output } from '@angular/core';
import { DbService } from 'src/app/shared/services/db/db.service';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-main-explore',
  templateUrl: './main-explore.page.html',
  styleUrls: ['./main-explore.page.scss'],
})
export class MainExplorePage {

  @Output() dbPosts: any;

  constructor(
    private util: UtilService,
    private dbService: DbService,
    ) {
      this.getDbPosts();
  }

  getDbPosts() {
    this.dbService.getPosts().subscribe(watch => {
      this.util.getPosts()
        .then(posts=> this.dbPosts = posts);
    })
  }
}