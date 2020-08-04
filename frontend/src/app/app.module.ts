import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatCardModule
} from '@angular/material';

import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/body/banner/banner.component';
import { MainContentComponent } from './components/body/main-content/main-content.component';
import { FontsSectionComponent } from './components/body/fonts-section/fonts-section.component';
import { PacksSectionComponent } from './components/body/packs-section/packs-section.component';
import { LearnSectionComponent } from './components/body/learn-section/learn-section.component';
import { FoundriesSectionComponent } from './components/body/foundries-section/foundries-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SearchComponent,
    FooterComponent,
    BannerComponent,
    MainContentComponent,
    FontsSectionComponent,
    PacksSectionComponent,
    LearnSectionComponent,
    FoundriesSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
