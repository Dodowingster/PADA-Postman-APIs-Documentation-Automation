var routes = require("express").Router();
const { check, validationResult } = require('express-validator');
const savegameCtrl = require("../controllers/savegame");

routes.get('/savegame', [
    check('character_id', 'Character ID is required').isString().notEmpty()
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ status: false, error: errors.array() });
    } else {
        savegameCtrl.getSavegames(req, res, next);
    }
});

routes.delete('/savegame/:characterId', [
    check('character_id', 'Character ID is required').isString().notEmpty()
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ status: false, error: errors.array() });
    } else {
        characterCtrl.deleteCharacterSave(req, res, next);
    }
});

module.exports = routes;