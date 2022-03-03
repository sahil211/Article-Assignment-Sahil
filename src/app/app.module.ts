import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApproutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { RegisterComponent } from './register/register.component';
import { ArticlesComponent } from './articles/articles.component';
import { OwnArticlesComponent } from './own-articles/own-articles.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import {MatTableModule} from '@angular/material/table';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { UpdateArticleComponent } from './my-articles/update-article/update-article.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { UpdateAdminProfileComponent } from './admin-side/update-admin-profile/update-admin-profile.component';
import { OwnarticlesComponent } from './admin-side/ownarticles/ownarticles.component';
import { AddarticleComponent } from './admin-side/addarticle/addarticle.component';
import { Ng2OrderModule } from 'ng2-order-pipe'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NormalUserComponent,
    RegisterComponent,
    ArticlesComponent,
    OwnArticlesComponent,
    MyArticlesComponent,
    UserProfileComponent,
    UpdateDataComponent,
    UpdateArticleComponent,
    AdminSideComponent,
    UpdateAdminProfileComponent,
    OwnarticlesComponent,
    AddarticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ApproutingModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
