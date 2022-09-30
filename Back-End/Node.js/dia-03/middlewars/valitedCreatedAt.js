const valitedCreatedAt = (req, res, next) => {
    const {createdAt} = req.body.description;
    var formatoValido = '/^d{2}/d{2}/d{4}$/';

    if(!formatoValido.test (createdAt)) {
        res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
    }
    next();
}

module.exports = valitedCreatedAt;