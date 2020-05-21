import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './components/layout/full-layout/full-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContentLayoutComponent, FullLayoutComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,  
    RouterModule  
  ]
})
export class CoreModule { }
