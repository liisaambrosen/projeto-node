const validate = async (req, res, next) => {
    const token = req.headers['authentication'];

    if (!token) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }
    next(token);
};

module.exports = validate;
