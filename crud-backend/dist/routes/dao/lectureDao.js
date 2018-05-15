"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_1 = require("../../db");
const db_2 = require("../../db");
function addLecture(name, batchId, subjectId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.Lecture.create({
                name: name,
                batchId: batchId,
                subjectId: subjectId
            });
        }
        catch (err) {
            console.log("unable to add lecture");
        }
    });
}
exports.addLecture = addLecture;
function getLectures() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Lecture.findAll();
        }
        catch (err) {
            console.log("Unable to get lectures");
        }
    });
}
exports.getLectures = getLectures;
function getLectureOfCourseAndBatch(courseId, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Lecture.findAll({
                include: [
                    {
                        model: db_2.Batch,
                        where: {
                            courseId: courseId
                        }
                    }
                ],
                where: {
                    [sequelize_1.default.Op.and]: {
                        batchId: batchId
                    }
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getLectureOfCourseAndBatch = getLectureOfCourseAndBatch;
function getLectureWithIdofCourseAndBatch(courseId, batchId, lectureId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Lecture.findAll({
                include: [
                    {
                        model: db_2.Batch,
                        where: {
                            courseId: courseId
                        }
                    }
                ],
                where: {
                    [sequelize_1.default.Op.and]: {
                        id: lectureId,
                        batchId: batchId
                    }
                }
            });
        }
        catch (err) {
            console.log("unable to find lecture of lecture id" + lectureId);
        }
    });
}
exports.getLectureWithIdofCourseAndBatch = getLectureWithIdofCourseAndBatch;
