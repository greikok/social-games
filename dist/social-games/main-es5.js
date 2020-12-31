(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/hectorhernandez/Documents/repos/social-games/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6GTv":
    /*!***************************************!*\
      !*** ./src/assets/games-mock.json.ts ***!
      \***************************************/

    /*! exports provided: GameData */

    /***/
    function GTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameData", function () {
        return GameData;
      });

      var GameData = [{
        "id": 1,
        "name": "Dusty",
        "img": "../assets/img/bingo.png",
        "level": "easy",
        "lock": true,
        "type": "NUEVO"
      }, {
        "id": 2,
        "name": "Arie",
        "img": "../assets/img/fbi.png",
        "level": "easy",
        "lock": true,
        "type": "ABIERTO A TODOS"
      }, {
        "id": 3,
        "name": "Kelley",
        "img": "../assets/img/granja.png",
        "level": "easy",
        "lock": true,
        "type": "NUEVO"
      }, {
        "id": 4,
        "name": "Minna",
        "img": "../assets/img/java.png",
        "level": "hard",
        "lock": false,
        "type": "ABIERTO A TODOS"
      }, {
        "id": 5,
        "name": "Myer",
        "img": "../assets/img/mundoslots.png",
        "level": "easy",
        "lock": false,
        "type": "NUEVO"
      }, {
        "id": 6,
        "name": "Elly",
        "img": "../assets/img/perla.png",
        "level": "easy",
        "lock": true,
        "type": "NUEVO"
      }, {
        "id": 7,
        "name": "Hamnet",
        "img": "../assets/img/slot.png",
        "level": "easy",
        "lock": true,
        "type": "NUEVO"
      }, {
        "id": 8,
        "name": "Gertrud",
        "img": "../assets/img/granja.png",
        "level": "hard",
        "lock": true,
        "type": "NUEVO"
      }, {
        "id": 9,
        "name": "Clarette",
        "img": "../assets/img/troya.png",
        "level": "medium",
        "lock": false,
        "type": "NUEVO"
      }, {
        "id": 10,
        "name": "Libbey",
        "img": "../assets/img/vikingos.png",
        "level": "easy",
        "lock": false,
        "type": "ABIERTO A TODOS"
      }];
      /***/
    },

    /***/
    "9R8I":
    /*!**********************************************!*\
      !*** ./src/app/details/details.component.ts ***!
      \**********************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function R8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/game.service */
      "VdwR");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var DetailsComponent = /*#__PURE__*/function () {
        function DetailsComponent(activedRoute, gamseService) {
          _classCallCheck(this, DetailsComponent);

          this.activedRoute = activedRoute;
          this.gamseService = gamseService;
        }

        _createClass(DetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.gamseService.getGames().subscribe(function (games) {
              games.forEach(function (game) {
                if (game.id == _this.activedRoute.snapshot.params.id) {
                  _this.game = game;
                }
              });
            });
          }
        }, {
          key: "addCoins",
          value: function addCoins(coins) {
            this.gamseService.setCoins(coins);
          }
        }]);

        return DetailsComponent;
      }();

      DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
        return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
      };

      DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DetailsComponent,
        selectors: [["app-details"]],
        decls: 11,
        vars: 2,
        consts: [[1, "games-card", "All"], [1, "card"], [1, "header-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "card-title"], ["mat-card-image", "", "alt", "Photo of a Game", 1, "card-image", 3, "src"], [1, "button", 3, "click"], [1, "example-button-container"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"]],
        template: function DetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_Template_div_click_7_listener() {
              return ctx.addCoins(250);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " COINS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.game.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".home-container[_ngcontent-%COMP%] {\n  background-color: #260058;\n  color: white;\n}\n.home-container[_ngcontent-%COMP%]   .img-social[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filters_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-bottom: 50px;\n  background-color: #f300d1;\n  color: white;\n}\n.games-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  padding: 0;\n  margin-top: 100px;\n  list-style: none;\n  -webkit-animation-name: stretch;\n          animation-name: stretch;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: none;\n          animation-fill-mode: none;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.header-card[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.title-name[_ngcontent-%COMP%] {\n  color: white;\n}\n.card-image[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbutton-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@-webkit-keyframes stretch {\n  0% {\n    transform: scale(0.1);\n    background-color: #f300d1;\n    border-radius: 100%;\n  }\n  50% {\n    background-color: orange;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #f300d1;\n  }\n}\n@keyframes stretch {\n  0% {\n    transform: scale(0.1);\n    background-color: #f300d1;\n    border-radius: 100%;\n  }\n  50% {\n    background-color: orange;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #f300d1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtBQUFKO0FBSUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUFERjtBQUlBO0VBQ0UsdUJBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFERjtBQU1BO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7RUFIRjtFQUtBO0lBQ0Usd0JBQUE7RUFIRjtFQUtBO0lBQ0UsbUJBQUE7SUFDQSx5QkFBQTtFQUhGO0FBQ0Y7QUFUQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VBSEY7RUFLQTtJQUNFLHdCQUFBO0VBSEY7RUFLQTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ob21lLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LDAsODgpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgLmltZy1zb2NpYWx7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZpbHRlcnNfd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywwLDIwOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdhbWVzLWNhcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHN0cmV0Y2g7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41czsgXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyBcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuXG4uaGVhZGVyLWNhcmR7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtbmFtZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1pbWFnZXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmJ1dHRvbnsgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cblxuQGtleWZyYW1lcyBzdHJldGNoIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsMCwyMDkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLDAsMjA5KTtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _util_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/const */
      "k4eR");
      /* harmony import */


      var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/game.service */
      "VdwR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _pipes_filter_type_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../pipes/filter-type.pipe */
      "X4hv");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../pipes/filter.pipe */
      "BhhM");

      function HomeComponent_div_0_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var difficulty_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", difficulty_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", difficulty_r3.name, "");
        }
      }

      function HomeComponent_div_0_div_13_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_div_13_mat_card_1_Template_img_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var game_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r7.detailsGame(game_r6.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var game_r6 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card ", ctx_r5.selected, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r6.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", game_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HomeComponent_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_0_div_13_mat_card_1_Template, 6, 5, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gamesFiltered_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gamesFiltered_r4);
        }
      }

      function HomeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_0_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.filterGame = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order By");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_div_0_Template_mat_select_valueChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.selected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_0_mat_option_12_Template, 3, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_0_div_13_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "filterType");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.filterGame);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.game_difficulty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, ctx_r0.games, ctx_r0.filterGame), ctx_r0.selected));
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(gamseService, router) {
          _classCallCheck(this, HomeComponent);

          this.gamseService = gamseService;
          this.router = router;
          this.game_difficulty = _util_const__WEBPACK_IMPORTED_MODULE_1__["GAME_DIFFICULTY"];
          this.filterGame = '';
          this.selected = 'All';
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.gamseService.getGames().subscribe(function (games) {
              _this2.games = games;
            });
          }
        }, {
          key: "detailsGame",
          value: function detailsGame(id) {
            this.router.navigate(['details/', id]);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 1,
        vars: 1,
        consts: [["class", "home-container", 4, "ngIf"], [1, "home-container"], [1, "img-header"], ["src", "../../assets/img/social-games.jpg", 1, "img-social"], [1, "filter"], [1, "filters_wrapper"], [1, "search-field"], ["type", "text", "id", "filterGame", "name", "filterGame", "placeholder", "Search", 1, "inputSearch", 3, "ngModel", "ngModelChange"], [1, "order-field"], ["appearance", "fill"], [1, "title-name"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "games-card", "id", "filtro", 4, "ngIf"], [3, "value"], ["id", "filtro", 1, "games-card"], [3, "class", 4, "ngFor", "ngForOf"], [1, "header-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "card-title"], ["mat-card-image", "", "alt", "Photo of a Game", 1, "card-image", 3, "src", "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 16, 10, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"]],
        pipes: [_pipes_filter_type_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterTypePipe"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"]],
        styles: [".home-container[_ngcontent-%COMP%] {\n  background-color: #260058;\n}\n.home-container[_ngcontent-%COMP%]   .img-social[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filters_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-bottom: 50px;\n  background-color: #f300d1;\n  color: white;\n  margin-top: 50px;\n}\n.img-header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 400px;\n}\n.games-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.header-card[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  transition: 1s;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.title-name[_ngcontent-%COMP%] {\n  color: white;\n}\n.card-image[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n  .mat-select-value {\n  color: white;\n}\n  .mat-select-arrow {\n  color: white;\n}\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(91, 30, 30, 0);\n}\n.search-field[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  width: 150px;\n}\n.order-field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.All[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-bottom: 50px;\n  background-color: #f300d1;\n  color: white;\n  margin-top: 50px;\n  -webkit-animation-name: stretch;\n          animation-name: stretch;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: none;\n          animation-fill-mode: none;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes stretch {\n  0% {\n    transform: scale(0.1);\n    background-color: #f300d1;\n    border-radius: 100%;\n  }\n  50% {\n    background-color: orange;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #f300d1;\n  }\n}\n@keyframes stretch {\n  0% {\n    transform: scale(0.1);\n    background-color: #f300d1;\n    border-radius: 100%;\n  }\n  50% {\n    background-color: orange;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #f300d1;\n  }\n}\n.inputSearch[_ngcontent-%COMP%] {\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBREo7QUFJQTtFQUNFLHVCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0UscUNBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VBQUY7RUFFQTtJQUNFLHdCQUFBO0VBQUY7RUFFQTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7RUFBRjtBQUNGO0FBWkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQUFGO0VBRUE7SUFDRSx3QkFBQTtFQUFGO0VBRUE7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsWUFBQTtBQURGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ob21lLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LDAsODgpO1xuXG4gIC5pbWctc29jaWFse1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5maWx0ZXJzX3dyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsMCwyMDkpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5pbWctaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uZ2FtZXMtY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICBcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uaGVhZGVyLWNhcmR7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLW5hbWV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtaW1hZ2V7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsIDMwLCAzMCwgMCk7XG59XG5cbi5zZWFyY2gtZmllbGR7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLm9yZGVyLWZpZWxke1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uQWxse1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLDAsMjA5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBhbmltYXRpb24tbmFtZTogc3RyZXRjaDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzOyBcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IFxuICBhbmltYXRpb24tZGVsYXk6IDA7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG5cbkBrZXlmcmFtZXMgc3RyZXRjaCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLDAsMjA5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywwLDIwOSk7XG4gIH1cbn1cblxuLmlucHV0U2VhcmNoe1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BhhM":
    /*!**************************************!*\
      !*** ./src/app/pipes/filter.pipe.ts ***!
      \**************************************/

    /*! exports provided: FilterPipe */

    /***/
    function BhhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(games, arg) {
            var resultGame = [];
            arg = arg.toLocaleLowerCase();
            games.forEach(function (game) {
              var gamesValue = Object.values(game).toString().toLocaleLowerCase();

              if (gamesValue.includes(arg)) {
                resultGame.push(game);
              }
            });
            return arg == '' ? games : resultGame;
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.ɵfac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "KWBv":
    /*!************************************************!*\
      !*** ./src/app/side-nav/side-nav.component.ts ***!
      \************************************************/

    /*! exports provided: SideNavComponent */

    /***/
    function KWBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
        return SideNavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/game.service */
      "VdwR");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["sidenav"];

      function SideNavComponent_mat_list_item_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_mat_list_item_8_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var link_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.openUrl(link_r2.link);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.name);
        }
      }

      var SideNavComponent = /*#__PURE__*/function () {
        function SideNavComponent(router, gameService) {
          _classCallCheck(this, SideNavComponent);

          this.router = router;
          this.gameService = gameService;
          this.links = [{
            "name": "El nuevo Slot.com",
            "link": "https://www.slot.com/es"
          }, {
            "name": "Ayuda y Contacto",
            "link": "https://support.slot.com/hc/es?p=cD1XZWI="
          }, {
            "name": "Términos y Condiciones",
            "link": "https://www.slot.com/es/terms"
          }, {
            "name": "Privacidad",
            "link": "https://www.slot.com/es/privacy"
          }, {
            "name": "Política de Cookies",
            "link": "https://www.slot.com/es/cookies"
          }, {
            "name": "Blog",
            "link": "https://blog.slot.com"
          }];
        }

        _createClass(SideNavComponent, [{
          key: "home",
          value: function home() {
            this.router.navigate(['home']);
          }
        }, {
          key: "close",
          value: function close() {
            this.sidenav.close();
          }
        }, {
          key: "openUrl",
          value: function openUrl(url) {
            window.open(url, '_blank');
          }
        }]);

        return SideNavComponent;
      }();

      SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
        return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
      };

      SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideNavComponent,
        selectors: [["app-side-nav"]],
        viewQuery: function SideNavComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        decls: 24,
        vars: 2,
        consts: [[1, "mat-sidenav-container", 3, "backdropClick"], ["disableClose", "", "position", "end", 1, "side-size", "sidenav-text", 3, "keydown.escape"], ["sidenav", ""], [1, "sidenav-arrow"], ["mat-icon-button", ""], [3, "click"], [4, "ngFor", "ngForOf"], [1, "sidenav-link", 3, "click"], [1, "mat-sidenav-content"], [1, "toolbar-color"], [1, "header-title", 3, "click"], [1, "coins"], ["for", "Name"], ["matLine", "", 1, "sidenav-link", 3, "click"]],
        template: function SideNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function SideNavComponent_Template_mat_sidenav_container_backdropClick_0_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function SideNavComponent_Template_mat_sidenav_keydown_escape_1_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_mat_icon_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "arrow_forward_ios");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SideNavComponent_mat_list_item_8_Template, 3, 1, "mat-list-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_mat_icon_click_10_listener() {
              return ctx.openUrl("https://www.facebook.com/slotcom/");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-toolbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_div_click_15_listener() {
              return ctx.home();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Social Game ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_mat_icon_click_21_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.gameService.coins, " Coins");
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #260058;\n  min-width: 400px;\n}\n\n.side-size[_ngcontent-%COMP%] {\n  width: 250px;\n  background-color: #5b00bb;\n}\n\n.side-size[_ngcontent-%COMP%]   .sidenav-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  cursor: pointer;\n}\n\n.side-size[_ngcontent-%COMP%]   .language-field[_ngcontent-%COMP%] {\n  display: inline;\n  position: relative;\n}\n\n.sidenav-text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.toolbar-color[_ngcontent-%COMP%] {\n  background-color: #260058;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sidenav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.mat-sidenav-content[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBREU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUU7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDRiw4QkFBQTtBQUNBOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsMCw4OCk7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5zaWRlLXNpemV7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAwLCAxODcpO1xuICAuc2lkZW5hdi1hcnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmxhbmd1YWdlLWZpZWxke1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4uc2lkZW5hdi10ZXh0e1xuICBjb2xvcjogd2hpdGU7IFxufVxuXG4udG9vbGJhci1jb2xvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LDAsODgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaWRlbmF2LWxpbmt7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlOyBcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyLXRpdGxle1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250ZW50e1xuICBtaW4td2lkdGg6IDUwMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-side-nav',
            templateUrl: './side-nav.component.html',
            styleUrls: ['./side-nav.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
          }];
        }, {
          sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./side-nav/side-nav.component */
      "KWBv");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'social-games';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-nav");
          }
        },
        directives: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__["SideNavComponent"]],
        styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "VdwR":
    /*!******************************************!*\
      !*** ./src/app/services/game.service.ts ***!
      \******************************************/

    /*! exports provided: GameService */

    /***/
    function VdwR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameService", function () {
        return GameService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _assets_games_mock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../assets/games-mock.json */
      "6GTv");

      var GameService = /*#__PURE__*/function () {
        function GameService() {
          _classCallCheck(this, GameService);

          this.coins = 1000;
        }

        _createClass(GameService, [{
          key: "getGames",
          value: function getGames() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_assets_games_mock_json__WEBPACK_IMPORTED_MODULE_2__["GameData"]);
          }
        }, {
          key: "setCoins",
          value: function setCoins(coins) {
            this.coins += coins;
          }
        }]);

        return GameService;
      }();

      GameService.ɵfac = function GameService_Factory(t) {
        return new (t || GameService)();
      };

      GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GameService,
        factory: GameService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "X4hv":
    /*!*******************************************!*\
      !*** ./src/app/pipes/filter-type.pipe.ts ***!
      \*******************************************/

    /*! exports provided: FilterTypePipe */

    /***/
    function X4hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTypePipe", function () {
        return FilterTypePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterTypePipe = /*#__PURE__*/function () {
        function FilterTypePipe() {
          _classCallCheck(this, FilterTypePipe);
        }

        _createClass(FilterTypePipe, [{
          key: "transform",
          value: function transform(games, arg) {
            var resultGame = [];
            arg = arg.toLocaleLowerCase();
            games.forEach(function (game) {
              if (game.level == arg) {
                resultGame.push(game);
              }
            });
            return arg == 'all' ? games : resultGame;
          }
        }]);

        return FilterTypePipe;
      }();

      FilterTypePipe.ɵfac = function FilterTypePipe_Factory(t) {
        return new (t || FilterTypePipe)();
      };

      FilterTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filterType",
        type: FilterTypePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTypePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filterType'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./side-nav/side-nav.component */
      "KWBv");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./details/details.component */
      "9R8I");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pipes/filter.pipe */
      "BhhM");
      /* harmony import */


      var _pipes_filter_type_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pipes/filter-type.pipe */
      "X4hv"); //Angular Modules
      //Components
      //Angular Material


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"], _pipes_filter_type_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterTypePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"], _pipes_filter_type_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterTypePipe"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "k4eR":
    /*!*******************************!*\
      !*** ./src/app/util/const.ts ***!
      \*******************************/

    /*! exports provided: GAME_DIFFICULTY */

    /***/
    function k4eR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GAME_DIFFICULTY", function () {
        return GAME_DIFFICULTY;
      });

      var GAME_DIFFICULTY = [{
        "name": "All"
      }, {
        "name": "Easy"
      }, {
        "name": "Medium"
      }, {
        "name": "Hard"
      }];
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details/details.component */
      "9R8I");

      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map