const bcryptjs = require("bcryptjs")

//passwordPlain contraseña sin encriptar, hash es la contraseña encriptada
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
};

const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = {encrypt, compare};