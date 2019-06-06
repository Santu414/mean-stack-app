import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule
} from "@angular/material";
@NgModule({
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule,MatButtonModule,MatExpansionModule]
})
export class MaterialModule {}
