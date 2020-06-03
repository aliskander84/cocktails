import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AppComponent} from './app.component'
import {HeaderComponent} from './header/header.component'
import {FilterComponent} from './filter/filter.component'
import {ContentComponent} from './content/content.component'
import {IconComponent} from './header/icon/icon.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ContentComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
