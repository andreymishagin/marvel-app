import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule],
exports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule]
})
export class MaterialAppModule { }