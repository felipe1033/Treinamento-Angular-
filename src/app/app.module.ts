import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PainelSimplesComponent } from 'src/app/painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ResumoService } from 'src/app/resumo/resumo.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';
import { ConsultaService } from 'src/app/consulta/consulta.service';
import { WelcomeComponent } from './barra-navegacao/welcome/welcome.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoService } from 'src/app/faturamento/faturamento.service';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/app/login/auth.service';
import { LogoutComponent } from './logout/logout.component';


let routes = [
  { path : "login", component : LoginComponent },
  { path : "logout", component : LogoutComponent },
  { path : "resumo", component : ResumoComponent },
  { path : "consulta", component : ConsultaComponent },
  { path : "welcome", component : WelcomeComponent },
  { path : "faturamento", component :FaturamentoComponent },
  { path : "tabela-clientes", component :TabelaClientesComponent },
  { path : "**", redirectTo:"/login" }
]


@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ResumoComponent,
    ConsultaComponent,
    ConsultaPorEspecialidadeComponent,
    WelcomeComponent,
    FaturamentoComponent,
    TabelaClientesComponent,
    LoginComponent,
    LogoutComponent,
     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ResumoService, ConsultaService, FaturamentoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
