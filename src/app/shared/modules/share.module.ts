import { NgModule } from '@angular/core';
import { IsEmptyPipe } from 'src/app/pipes/is-empty.pipe';




@NgModule({
  declarations: [IsEmptyPipe],
  exports: [IsEmptyPipe]
})
export class SharedModule  { }
