const tagsmodel = require('../model/tags');

function    checktags(tags) {
    try {
        JSON.parse(tags);
    } catch (e) {
        return 1;
    }
    return (0);
}

function checkifexist(tags) {
    if (tags == undefined)
        return (1);
    return (0);
}

exports.insert_tags = async (req, res, next) => {
    let tag = req.body.tags;
    if (tag == undefined || tag == " ")
        return res.status(200).json({
            error : true,
            success : false,
            message : "tags missing !!"
        });
    if (checktags(req.body.tags))
        return res.status(200).json({
            error : true,
            success : false,
            message : "invalid tags json data !!"
        });
    next();
}

exports.update_tags = async (req, res, next) => {
    if (checkifexist(req.body.tags))
        return res.status(200).json({
            error : true,
            success : false,
            message : "tags missing !!"
        });
    if (checktags(req.body.tags))
        return res.status(200).json({
            error : true,
            success : false,
            message : "invalid tags json data !!"
        });
    next();
}

exports.get_tags = async (req, res, next) => {
    const {login} = req.query;

    if (login == undefined)
        return res.status(200).json({
            error : true,
            success : false,
            message : "missing user"
        });
    next();
}