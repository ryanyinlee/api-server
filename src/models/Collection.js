'use strict';

const { response } = require("express");

class Collection {
    constructor (model) {
        this.model = model;
    }

    
async read(id, association) {
    let records = await this.model.findAll();
    return records;
} 

async create(data) {
    const record = await this.model.create(data);
    return record;
}

async update(id, newRecord) {
let recordToUpdate = await this.model.findByPk(id); // primary key

recordToUpdate.set(newRecord);
await recordToUpdate.save();
return recordToUpdate;
}

async destroy(id) {
let recordToRemove = await this.model.destroy(id);
return recordToRemove;
}

}


module.exports = Collection;