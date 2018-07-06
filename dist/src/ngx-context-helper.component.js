"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NgxContextHelperComponent = /** @class */ (function () {
    function NgxContextHelperComponent() {
        this.test = new core_1.EventEmitter();
        if (this.dataSource == undefined) {
            this.dataSource = {
                title: "帮助测试",
                content: "帮助的内容"
            };
        }
    }
    NgxContextHelperComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgxContextHelperComponent.prototype, "dataSource", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgxContextHelperComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NgxContextHelperComponent.prototype, "test", void 0);
    NgxContextHelperComponent = __decorate([
        core_1.Component({
            selector: 'app-ngx-context-helper',
            // templateUrl: './ngx-context-helper.component.html',
            template: "\n    <p>\n        ngx-context-helper works!\n    </p>\n    <div>\n        {{dataSource.title}}\n    </div>\n    <div>\n        {{dataSource.content}}\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], NgxContextHelperComponent);
    return NgxContextHelperComponent;
}());
exports.NgxContextHelperComponent = NgxContextHelperComponent;
//# sourceMappingURL=ngx-context-helper.component.js.map