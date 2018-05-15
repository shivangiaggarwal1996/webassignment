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
const studentDao = __importStar(require("../dao/studentDao"));
const route = express_1.default.Router();
route.post('/', (req, res) => {
    studentDao.addStudent(req.body.name)
        .then((student) => {
        res.send(student);
    })
        .catch((err) => {
        console.log("cannot add student");
    });
});
route.get('/', (req, res) => {
    studentDao.getStudents().then((student) => {
        res.send(student);
    }).catch((err) => {
        console.log("cannot get student");
    });
});
route.post('/addbatch', (req, res) => {
    studentDao.addStudentToBatch(parseInt(req.body.studentId), parseInt(req.body.batchId))
        .then((student) => {
        res.send(student);
    })
        .catch((err) => {
        res.send("unable to add student to batch");
    });
});
route.get('/:id', (req, res) => {
    studentDao.getStudentWithId(parseInt(req.params.id))
        .then((student) => {
        res.send(student);
    })
        .catch((err) => {
        res.send("unable to add student to batch");
    });
});
route.get('/:id/batches', (req, res) => {
    studentDao.getStudentWithBatches(parseInt(req.params.id))
        .then((batches) => {
        res.send(batches);
    })
        .catch((err) => {
        res.send("unable to get student  batch");
    });
});
exports.default = route;
