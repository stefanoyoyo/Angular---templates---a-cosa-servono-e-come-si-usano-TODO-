**-----02/02/2023-----**


**CONTESTO**
credo che la creazione di un template serva a poter 
inserire dinamicamente codice html all'interno di un
componente, cioè renderlo personalizzabile. 

Potrei ad esempio realizzare un componente angular 
con funzionlità basilari che possa poi essere arricchito 
da chi lo usa con il proprio codice. 

**COME PENSO CHE FUNZIONI**

Credo che: 
  • nel componente da realizzare occorra inserire un ng-content
    contente i riferimenti alle variabili che si vuole si possano
    passare come parametro al template 
  • il chiamante debba inserire tra i tag di apertura/chiusura del 
    suo componente il template che vuole, con i parametri specificati

*Devo provare a capire se è così per davvero*

**COSA HO CAPITO**

Si, è così, ma il template non credo possa essere customizzato dall'utente. 

https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
Trovato un buon tutorial qui.

*Esempio pratico*
@Component({
  selector: 'app-root',
  template: `      
<ng-template #estimateTemplate let-lessonsCounter="estimate">
    <div> Approximately {{lessonsCounter}} lessons ...</div>
</ng-template>
<ng-container 
   *ngTemplateOutlet="estimateTemplate;context:ctx">
</ng-container>
`})
export class AppComponent {
    totalEstimate = 10;
    ctx = {estimate: this.totalEstimate};
}
