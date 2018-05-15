"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const course_1 = __importDefault(require("./course"));
const batch_1 = __importDefault(require("./batch"));
const subject_1 = __importDefault(require("./subject"));
const lecture_1 = __importDefault(require("./lecture"));
const student_1 = __importDefault(require("./student"));
const teacher_1 = __importDefault(require("./teacher"));
const route = express_1.default.Router();
route.use('/courses', course_1.default);
route.use('/batches', batch_1.default);
route.use('/subjects', subject_1.default);
route.use('/lectures', lecture_1.default);
route.use('/students', student_1.default);
route.use('/teachers', teacher_1.default);
module.exports = route;
