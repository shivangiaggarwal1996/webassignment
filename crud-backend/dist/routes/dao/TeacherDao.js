"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
const db_2 = require("../../db");
const db_3 = require("../../db");
function addTeacher(name, subjectId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.create({
                name: name,
                subjectId: subjectId
            });
        }
        catch (err) {
            console.log("unable to add Teacher");
        }
    });
}
exports.addTeacher = addTeacher;
function getTeachers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll();
        }
        catch (err) {
            console.log("unable to get teacher ");
        }
    });
}
exports.getTeachers = getTeachers;
function getTeacherWithSubjectId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll({
                where: {
                    subjectId: id
                }
            });
        }
        catch (err) {
            console.log("unable to get teacher with subject id" + id);
        }
    });
}
exports.getTeacherWithSubjectId = getTeacherWithSubjectId;
function getTeacherWithId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findOne({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            console.log("unable to get teacher with id" + id);
        }
    });
}
exports.getTeacherWithId = getTeacherWithId;
function getTeacherWithBatches(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll({
                include: [
                    {
                        model: db_2.Subject,
                        include: [
                            {
                                model: db_3.Course,
                                include: [
                                    {
                                        model: db_1.Batch,
                                    }
                                ],
                            }
                        ],
                    }
                ],
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            console.log("unable to get teacher with batches");
        }
    });
}
exports.getTeacherWithBatches = getTeacherWithBatches;
function getTeachersBelongingToBatchId(courseId, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll({
                include: [
                    {
                        model: db_2.Subject,
                        where: {
                            courseId: courseId
                        },
                        include: [
                            {
                                model: db_3.Course,
                                where: {
                                    id: courseId
                                },
                                include: [
                                    {
                                        model: db_1.Batch,
                                        where: {
                                            id: batchId,
                                            courseId: courseId
                                        }
                                    }
                                ],
                            }
                        ],
                    }
                ]
            });
        }
        catch (err) {
            console.log("unable to get teacher with batches");
        }
    });
}
exports.getTeachersBelongingToBatchId = getTeachersBelongingToBatchId;
