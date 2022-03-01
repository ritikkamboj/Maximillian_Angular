import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//yeh importing isliye kar rahe hai taki typescript ko pata chal jae .


// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'   // yeh automaticaaly aa gaya , jab CLI se servrer add kia 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
