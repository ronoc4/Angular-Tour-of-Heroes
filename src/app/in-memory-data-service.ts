/**
 * Created by conor.budge on 2/8/2017.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Julia'},
      {id: 12, name: 'Conor'},
      {id: 13, name: 'Jess'},
      {id: 14, name: 'Orla'},
      {id: 15, name: 'Captain Awesome'},
      {id: 16, name: 'Norman'},
      {id: 17, name: 'Roy'},
      {id: 18, name: 'Dr Susan'},
      {id: 19, name: 'Timmy'},
      {id: 20, name: 'Haven'}
    ];
    return {heroes};
  }
}
