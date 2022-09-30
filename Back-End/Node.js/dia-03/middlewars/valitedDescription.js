const valitedDescription = (req, res, next) => {
    const { description } = req.body;
    if( !description){
        res.status(400).json({ message: "O campo description é obrigatório" });
    }else if(!description.createdAt){
        res.status(400).json({ message: "O campo createdAt é obrigatório" });
    }else if(!description.rating){
        res.status(400).json({ message: "O campo ranting é obrigatório" });
    }else if(!description.difficulty){
        res.status(400).json({ message: "O campo difficulty é obrigatório" });
    }
    next();
};

module.exports = valitedDescription;