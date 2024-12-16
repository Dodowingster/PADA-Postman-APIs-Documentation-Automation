
var routes = require("express").Router();
const { check, body, validationResult } = require('express-validator');
const characterCtrl = require("../controllers/character");
const savegameCtrl = require("../controllers/savegame");

// Character Routes
routes.get('/character', [
    check('id', 'Invalid ID').isString().isLength({ min: 2 })
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ status: false, error: errors.array() });
    } else {
        characterCtrl.getCharacterDetails(req, res, next);
    }
});

routes.post('/character', [
    body('name', 'Name is required').isString().notEmpty(),
    body('class', 'Class is required').isString().notEmpty(),
    body('archetype').optional().isString(),
    body('level').optional().isInt({ min: 1, max: 20 }),
    body('STR').optional().isInt({ min: 1, max: 20 }),
    body('DEX').optional().isInt({ min: 1, max: 20 }),
    body('CON').optional().isInt({ min: 1, max: 20 }),
    body('INT').optional().isInt({ min: 1, max: 20 }),
    body('WIS').optional().isInt({ min: 1, max: 20 }),
    body('CHA').optional().isInt({ min: 1, max: 20 })
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ status: false, error: errors.array() });
    } else {
        characterCtrl.createCharacter(req, res, next);
    }
});

routes.put('/character/:characterId', [
    check('character_id', 'Character ID is required').isString().notEmpty(),
    body('name').optional().isString(),
    body('class').optional().isString(),
    body('archetype').optional().isString(),
    body('level').optional().isInt({ min: 1, max: 20 }),
    body('abilities').optional().isArray()
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ status: false, error: errors.array() });
    } else {
        characterCtrl.updateCharacter(req, res, next);
    }
});

routes.patch('/character/:characterId/stats', [
    check('character_id', 'Character ID is required').isString().notEmpty(),
    body('STR').optional().isInt({ min: 1, max: 20 }),
    body('DEX').optional().isInt({ min: 1, max: 20 }),
    body('Level').optional().isInt({ min: 1, max: 20 })
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ status: false, error: errors.array() });
    } else {
        characterCtrl.patchCharacterStats(req, res, next);
    }
});

module.exports = routes;
