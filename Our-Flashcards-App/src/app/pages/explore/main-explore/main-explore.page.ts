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
  search: any;

  constructor(
    private util: UtilService,
    private dbService: DbService,
    ) {
      this.getDbPosts();
  }

  getDbPosts() {
    this.dbService.getPosts().subscribe(async watch => {
      let arr = [];
      await this.util.getPosts()
        .then(posts=> this.dbPosts = posts);
      arr = await this.dbPosts.filter(post => post.title.match(new RegExp(this.search, "i")));
      await this.dbPosts.map(post => {
        if (post.tags.map(tag => tag.match(new RegExp(this.search, "i")) ? arr.push(post): 0))
        return arr;
      });
      this.dbPosts = [...new Set(arr)];
    });
  }

  searchPosts() {
    this.getDbPosts();
  }
}