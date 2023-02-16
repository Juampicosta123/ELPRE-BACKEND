const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : './mysql';

const models = {
    usersModel: require(`${pathModels}/users`),
    studentsModel: require(`${pathModels}/students`),
}

module.exports = models;