let mongoose = require('mongoose');
let Term = mongoose.model('Term');
let jsonTerms = require('./terms.json');

async function seedTerms() {
    for (let i = 0; i < jsonTerms.length; i++) {
        let term = new Term(jsonTerms[i]);
        await term.save();
    }

    console.log('Terms seeded');
}

module.exports = seedTerms;