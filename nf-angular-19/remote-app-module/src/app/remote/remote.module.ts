import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteComponent } from './remote.component';

@NgModule({
  declarations: [RemoteComponent],
  imports: [
    CommonModule,
    //RouterModule.forChild([{ path: '', component: RemoteComponent }]),
  ],
})
export class RemoteModule {}
