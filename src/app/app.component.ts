/**
 * Created by conor.budge on 2/7/2017.
 */
import { Component } from '@angular/core';


@Component ({
  //***************** enables module-relative file URLs *******************//
  moduleId: module.id,

  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  styleUrls: ['css/app.component.css']

})

export class AppComponent {
  title = 'Tour of Heroes';
}
