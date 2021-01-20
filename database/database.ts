
import * as LokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter'


declare let require: any;
let loki = require('lokijs');

class Database {
    db: any;                        // LokiJS database
  
    loadDB(){

        let adapter = new LokiIndexedAdapter();
        this.db = new loki("test.db", {
            autosave: true,
            autoload: true,
            autosaveInterval: 4 * 1000,
            adapter: adapter
        });

        console.log("database loaded for luqman6");
        let entries = this.db.getCollection("entries");

        if (entries === null) {
          entries = this.db.addCollection("entries");
          entries.insert({name:'University of Malaya', code:"UM"});
          entries.insert({name:'Universiti Sains Malaysia', code:"USM"});
          entries.insert({name:'Universiti Sains Islam Malaysia', code:"USIM"});
          let result = entries;
          return result;
        }
    }  
}

export let db = new Database;
