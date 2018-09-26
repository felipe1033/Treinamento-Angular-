import { Component, OnInit, OnDestroy} from '@angular/core';
import { FaturamentoService } from 'src/app/faturamento/faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit,OnDestroy {
 
  faturamentoInscricao;
  faturamento;

  constructor(private faturamentoService:FaturamentoService) { }

  ngOnInit() {
   this.faturamentoInscricao = this.faturamentoService.getFaturamento()
    .subscribe( dados => this.faturamento = dados )
  }

ngOnDestroy(){
  this.faturamentoInscricao.unsubscribe();
}

}
