import { Injector } from '@angular/core';
import { TranslateService  } from '@ngx-translate/core';

export abstract class  AppComponentBase  {
    translate: TranslateService;
    constructor(injector: Injector) {
        this.translate = injector.get(TranslateService);
    }
}
