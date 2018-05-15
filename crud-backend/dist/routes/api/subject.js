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
const subjectDao = __importStar(require("../dao/subjectDao"));
const teacherDao = __importStar(require("../dao/teacherDao"));
const route = express_1.default.Router();
route.post('/:name', (req, res) => {
    subjectDao.addSubject(req.params.name, parseInt(req.body.id))
        .then((subject) => {
        res.send(subject);
    })
        .catch((err) => {
        console.log("cannot add subject");
    });
});
route.get('/', (req, res) => {
    subjectDao.getSubjects().then((subjects) => {
        res.send(subjects);
    }).catch((err) => {
        console.log("cannot get subjects");
    });
});
route.get('/:id', (req, res) => {
    subjectDao.getSubjectsOfId(parseInt(req.params.id)).then((subject) => {
        res.send(subject);
    }).catch((err) => {
        res.send("cannot get subject of Id" + req.params.id);
    });
});
route.get('/:id/courseId', (req, res) => {
    subjectDao.getSubjectOfCourse(parseInt(req.params.id)).then((subject) => {
        res.send(subject);
    }).catch((err) => {
        res.send("cannot get subject of Id" + req.params.id);
    });
});
route.get('/:id/teachers', (req, res) => {
    teacherDao.getTeacherWithSubjectId(parseInt(req.params.id))
        .then((teacher) => {
        res.send(teacher);
    })
        .catch((err) => {
        res.send("unable to get teacher with id" + req.params.id);
    });
});
exports.default = route;
