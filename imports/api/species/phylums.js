import { Mongo } from 'meteor/mongo';

const ph = new Mongo.Collection('phylums');

ph.schema = new SimpleSchema ({
    domain: {type: String},
    image: {type: String},
    kingdom: {type: String},
    phylum: {type: String},
    count: {type: Number},
    extinct: {type: String},
    description: {type: String},
    date_created: {type: Date, defaultValue: new Date()},
    date_edited: {type: Date, defaultValue: new Date()},   
});

export { ph as Phylums }