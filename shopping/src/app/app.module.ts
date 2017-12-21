import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import {DIRECTIVES} from './directives';
import {PIPES} from './pipes';
import { SERVICES } from './services';
import { ACTIONS } from './store/actions';
import { reducers, metaReducers } from './store/reducers';
import { AllEffects } from './store/effects';


@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    DIRECTIVES,
    PIPES,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule ,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers,
      // { metaReducers }
    ),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    AllEffects,
  ],
  providers: [SERVICES, ACTIONS, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
