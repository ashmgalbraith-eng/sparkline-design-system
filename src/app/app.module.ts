{
  "import { NgModule } from '@angular/core';

  import { MatSlideToggleModule } from '@angular/material/slide-toggle';

  @NgModule({
    declarations: [
      SwitchComponent,
    ],
    imports: [
      MatSlideToggleModule,
    ],
    exports: [SwitchComponent]
  })
  export class AppModule {}
}