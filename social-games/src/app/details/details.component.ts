import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  game: Game;
  constructor(private activedRoute: ActivatedRoute, public gamseService: GameService) { }

  ngOnInit(): void {
    this.gamseService.getGames().subscribe(games => {
      games.forEach(game => {
        if (game.id == this.activedRoute.snapshot.params.id) {
          this.game = game;
        }
      })

    })
  }

  addCoins(coins: number) {
    this.gamseService.setCoins(coins);
  }

}
