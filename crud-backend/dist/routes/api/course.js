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
const courseDao = __importStar(require("../dao/courseDao"));
const batchDao = __importStar(require("../dao/batchDao"));
const lectureDao = __importStar(require("../dao/lectureDao"));
const studentDao = __importStar(require("../dao/studentDao"));
const teacherDao = __importStar(require("../dao/teacherDao"));
const route = express_1.default.Router();
route.post('/', (req, res) => {
    courseDao.addCourse(req.body.name)
        .then((course) => {
        res.send(course);
    })
        .catch((err) => {
        console.log("cannot add course");
    });
});
route.get('/', (req, res) => {
    courseDao.getAllCourses().then((courses) => {
        console.log("size is ");
        res.send(courses);
    }).catch((err) => {
        console.log("cannot get courses");
    });
});
route.get('/:id', (req, res) => {
    let courseId = parseInt(req.params.id);
    courseDao.getCourseWithId(courseId).then((course) => {
        res.send(course);
    }).catch((err) => {
        console.log(err);
    });
});
route.get('/:id/batches', (req, res) => {
    let courseId = parseInt(req.params.id);
    batchDao.getBatchesWithCourseId(courseId)
        .then((batches) => {
        console.log("batches are" + batches.length);
        res.send(batches);
    })
        .catch((err) => {
        console.log(err);
    });
});
route.get('/:courseId/batches/:batchId', (req, res) => {
    let idCourse = req.params.courseId;
    let idBatch = req.params.batchId;
    batchDao.getBatchWithCourseIdAndBatchId(idCourse, idBatch)
        .then((batch) => {
        res.send(batch);
    })
        .catch((err) => {
        console.log(err);
    });
});
route.get('/:courseId/batches/:batchId/lectures', (req, res) => {
    let idCourse = parseInt(req.params.courseId);
    let idBatch = parseInt(req.params.batchId);
    lectureDao.getLectureOfCourseAndBatch(idCourse, idBatch)
        .then((lectures) => {
        res.send(lectures);
    })
        .catch((err) => {
        console.log(err);
    });
});
route.get('/:courseId/batches/:batchId/lectures/:lectureId', (req, res) => {
    let idCourse = parseInt(req.params.courseId);
    let idBatch = parseInt(req.params.batchId);
    let idLecure = parseInt(req.params.lectureId);
    lectureDao.getLectureWithIdofCourseAndBatch(idCourse, idBatch, idLecure)
        .then((lecture) => {
        res.send(lecture);
    })
        .catch((err) => {
        console.log("unable to get lecture with id" + idLecure);
    });
});
route.get('/:courseId/batches/:batchId/students', (req, res) => {
    studentDao.getStudentWithBatchId(parseInt(req.params.courseId), parseInt(req.params.batchId))
        .then((student) => {
        console.log("student" + student.length);
        res.send(student);
    })
        .catch((err) => {
        res.send("Cannot get student of particular Batch");
    });
});
route.get('/:courseId/batches/:batchId/teachers', (req, res) => {
    teacherDao.getTeachersBelongingToBatchId(parseInt(req.params.courseId), parseInt(req.params.batchId))
        .then((teacher) => {
        res.send(teacher);
    })
        .catch((err) => {
    });
});
exports.default = route;
