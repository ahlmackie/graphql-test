const {
    generateQueries,
    generateMutations,
} = require('../functions/General/generateCrud');
const { CategoryTC, Category } = require('../models/Category');
const { deleteResolver } = require('../utils/deleteResolver');

const Query = {
    ...generateQueries({
        TC: CategoryTC,
        name: 'Category',
        get: { create: true, auth: true },
        list: { create: true, auth: true },
    }),
};

const Mutation = {
    ...generateMutations({
        TC: CategoryTC,
        name: 'Category',
        edit: { create: true, auth: true },
        create: { create: true, auth: true },
    }),
    deleteCategory: deleteResolver(CategoryTC, Category)
};

module.exports = { Query, Mutation }