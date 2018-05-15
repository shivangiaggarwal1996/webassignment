"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacherDao = __importStar(require("../dao/teacherDao"));
const route = express_1.default.Router();
route.post('/:name', (req, res) => {
    teacherDao.addTeacher(req.params.name, parseInt(req.body.id))
        .then((teacher) => {
        res.send(teacher);
    })
        .catch((err) => {
        res.send("cannot add teacher");
    });
});
route.get('/', (req, res) => {
    teacherDao.getTeachers().then((teacher) => {
        res.send(teacher);
    }).catch((err) => {
        console.log("cannot get teachers");
    });
});
route.get('/:id', (req, res) => {
    teacherDao.getTeacherWithId(parseInt(req.params.id))
        .then((teacher) => {
        res.send(teacher);
    })
        .catch((err) => {
        res.send("unable to get teacher with id" + req.params.id);
    });
});
route.get('/:id/batches', (req, res) => {
    teacherDao.getTeacherWithBatches(parseInt(req.params.id))
        .then((batch) => {
        res.send(batch);
    })
        .catch((err) => {
        res.send("unable to find taecher with batches");
    });
});
exports.default = route;
