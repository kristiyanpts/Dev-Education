import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [CreateComponent, CurrentThemeComponent],
  imports: [CommonModule, ThemeRoutingModule],
})
export class ThemeModule {}
