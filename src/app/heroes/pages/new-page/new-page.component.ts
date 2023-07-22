import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new-page.component.html',

})
export class NewPageComponent {

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ]

}
