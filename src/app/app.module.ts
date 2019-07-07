import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AbstractRentCompany} from './services/abstract-rent-company';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RentCompanyService} from './services/rent-company.service';
import {HttpClientModule} from '@angular/common/http';
import {ClearComponent} from './components/clear/clear.component';
import {RemoveCarComponent} from './components/remove-car/remove-car.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {Check18YearDirective} from './directives/check-18-year.directive';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCardModule, MatListModule, MatPaginatorModule, MatSidenavModule, MatSortModule} from '@angular/material';
import {HomeComponent} from './components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {AuthFirebaseService} from './services/auth-firebase.service';
import {AbstractAuthService} from './services/abstract-auth-service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {AbstractRegistration} from './services/abstract-registration';
import {RegistrationService} from './services/registration.service';
import {FormModelComponent} from './components/form-components/form-model/form-model.component';
import {FormCarComponent} from './components/form-components/form-car/form-car.component';
import {FormDriverComponent} from './components/form-components/form-driver/form-driver.component';
import {FormOpenRecordComponent} from './components/form-components/form-record-open/form-open-record.component';
import {FormCloseRecordComponent} from './components/form-components/form-record-close/form-close-record.component';
import {ListAllModelsComponent} from './components/list-components/list-all-models/list-all-models.component';
import {ListAllCarsComponent} from './components/list-components/list-all-cars/list-all-cars.component';
import {ListAllDriversComponent} from './components/list-components/list-all-drivers/list-all-drivers.component';
import {ListAllRecordsComponent} from './components/list-components/list-all-records/list-all-records.component';
import {ListMostPopularModelsComponent} from './components/list-components/list-most-popular-models/list-most-popular-models.component';
import {ListMostProfitModelsComponent} from './components/list-components/list-most-profit-models/list-most-profit-models.component';
import {ItemGetProfitModelComponent} from './components/item-components/item-get-profit-model/item-get-profit-model.component';
import {ItemGetModelComponent} from './components/item-components/item-get-model/item-get-model.component';
import {ItemGetCarComponent} from './components/item-components/item-get-car/item-get-car.component';
import {ItemGetDriverComponent} from './components/item-components/item-get-driver/item-get-driver.component';
import {ListGetCarDriversComponent} from './components/list-components/list-get-car-drivers/list-get-car-drivers.component';
import {ListGetDriverCarsComponent} from './components/list-components/list-get-driver-cars/list-get-driver-cars.component';
import {LabelRoutes} from './models/constants/label-routes';
import {PathRoutes} from './models/constants/path-routes';
import {GuardAdmin} from './guards/guard-admin';
import {GuardManager} from './guards/guard-manager';
import {GuardClerk} from './guards/guard-clerk';
import {GuardAuth} from './guards/guard-auth';
import {GuardTechnician} from './guards/guard-technician';
import {GuardStatist} from './guards/guard-statist';
import {GuardDriver} from './guards/guard-driver';


const routes: Route[] = [
  // ******************* General **********************************
  {path: PathRoutes.HOME_ROUTE, component: HomeComponent},
  {path: PathRoutes.LOGIN_ROUTE, component: LoginComponent},
  // ******************Admin*****************************************
  {path: PathRoutes.REGISTRATION_ROUTE, component: RegistrationComponent, canActivate: [GuardAdmin]},
  // **********************************************************
  {path: PathRoutes.ADD_MODEL_ROUTE, component: FormModelComponent, canActivate: [GuardManager]},
  {path: PathRoutes.ADD_CAR_ROUTE, component: FormCarComponent, canActivate: [GuardManager]},
  {path: PathRoutes.ADD_DRIVER_ROUTE, component: FormDriverComponent, canActivate: [GuardClerk]},
  // **********************************************************
  {path: PathRoutes.RENT_CAR_ROUTE, component: FormOpenRecordComponent, canActivate: [GuardClerk]},
  {path: PathRoutes.RETURN_CAR_ROUTE, component: FormCloseRecordComponent, canActivate: [GuardClerk]},
  // *************************************************************
  {path: PathRoutes.GET_ALL_MODELS_ROUTE, component: ListAllModelsComponent},
  {path: PathRoutes.GET_ALL_CARS_ROUTE, component: ListAllCarsComponent, canActivate: [GuardAuth]},
  {path: PathRoutes.GET_ALL_DRIVERS_FOR_CLERK_ROUTE, component: ListAllDriversComponent, canActivate: [GuardClerk]},
  {path: PathRoutes.GET_ALL_DRIVERS_FOR_MANAGER_ROUTE, component: ListAllDriversComponent, canActivate: [GuardManager]},
  {path: PathRoutes.GET_ALL_RECORDS_ROUTE, component: ListAllRecordsComponent, canActivate: [GuardTechnician]},
  // **************************************************************
  {path: PathRoutes.MOST_POPULAR_MODELS_ROUTE, component: ListMostPopularModelsComponent, canActivate: [GuardStatist]},
  {path: PathRoutes.MOST_PROFIT_MODELS_ROUTE, component: ListMostProfitModelsComponent, canActivate: [GuardStatist]},
  // **************************************************************
  {path: PathRoutes.GET_PROFIT_MODEL_FOR_MANAGER_ROUTE, component: ItemGetProfitModelComponent, canActivate: [GuardManager]},
  {path: PathRoutes.GET_PROFIT_MODEL_FOR_STATIST_ROUTE, component: ItemGetProfitModelComponent, canActivate: [ GuardStatist]},
  {path: PathRoutes.GET_MODEL_ROUTE, component: ItemGetModelComponent},
  {path: PathRoutes.GET_CAR_ROUTE, component: ItemGetCarComponent, canActivate: [GuardAuth]},
  {path: PathRoutes.GET_DRIVER_FOR_CLERK_ROUTE, component: ItemGetDriverComponent, canActivate: [GuardClerk]},
  {path: PathRoutes.GET_DRIVER_FOR_MANAGER_ROUTE, component: ItemGetDriverComponent, canActivate: [ GuardManager]},
  // ***************************************************************
  {path: PathRoutes.CLEAR_CARS_ROUTE, component: ClearComponent, canActivate: [GuardManager]},
  {path: PathRoutes.REMOVE_CAR_ROUTE, component: RemoveCarComponent, canActivate: [GuardManager]},
  // ****************************************************
  {path: PathRoutes.GET_CAR_DRIVERS_ROUTE, component: ListGetCarDriversComponent, canActivate: [GuardDriver]},
  {path: PathRoutes.GET_DRIVER_CARS_ROUTE, component: ListGetDriverCarsComponent, canActivate: [GuardDriver]},
  {path: '**', redirectTo: PathRoutes.HOME_ROUTE}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegistrationComponent,
    ListAllDriversComponent,
    ListAllCarsComponent,
    FormModelComponent,
    FormCarComponent,
    FormDriverComponent,
    FormOpenRecordComponent,
    FormCloseRecordComponent,
    RegistrationComponent,
    LoginComponent,
    ListAllModelsComponent,
    ListAllRecordsComponent,
    ListMostPopularModelsComponent,
    ListMostProfitModelsComponent,
    ItemGetProfitModelComponent,
    ItemGetModelComponent,
    ItemGetCarComponent,
    ItemGetDriverComponent,
    ClearComponent,
    RemoveCarComponent,
    ListGetDriverCarsComponent,
    ListGetCarDriversComponent,
    Check18YearDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSidenavModule,
    MatListModule,
    AngularFireAuthModule
  ],
  providers: [
    {provide: AbstractRentCompany, useExisting: RentCompanyService},
    {provide: AbstractAuthService, useExisting: AuthFirebaseService},
    {provide: AbstractRegistration, useExisting: RegistrationService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
