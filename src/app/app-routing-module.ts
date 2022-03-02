import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ArticlesComponent } from "./articles/articles.component";

import { NormalUserComponent } from "./normal-user/normal-user.component";
import { RegisterComponent } from "./register/register.component";
import { OwnArticlesComponent } from "./own-articles/own-articles.component";
import { MyArticlesComponent } from "./my-articles/my-articles.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UpdateDataComponent } from "./update-data/update-data.component";
import { UpdateArticleComponent } from "./my-articles/update-article/update-article.component";
import { AdminSideComponent } from "./admin-side/admin-side.component";
import { UpdateAdminProfileComponent } from "./admin-side/update-admin-profile/update-admin-profile.component";
import { OwnarticlesComponent } from "./admin-side/ownarticles/ownarticles.component";
import { AddarticleComponent } from "./admin-side/addarticle/addarticle.component";

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },{ path: 'login', component: NormalUserComponent},
    { path: 'articles', component: ArticlesComponent},{ path: '', component:NormalUserComponent},
    { path: 'ownarticles', component: OwnArticlesComponent},{ path: 'myarticle', component:MyArticlesComponent},
    { path: 'userprofile', component: UserProfileComponent},{ path:'updatedata', component:UpdateDataComponent},
    { path: 'addarticle', component: UpdateArticleComponent},{ path: 'admin-side', component: AdminSideComponent},
    { path: 'update-admin', component: UpdateAdminProfileComponent},{ path: 'ownarticles-admin', component: OwnarticlesComponent},
    { path: 'addarticle-admin', component: AddarticleComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class ApproutingModule{

}