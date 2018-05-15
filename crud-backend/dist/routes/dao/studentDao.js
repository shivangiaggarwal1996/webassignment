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
function getStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Student.findAll();
        }
        catch (err) {
            console.log("Unable to find students");
        }
    });
}
exports.getStudents = getStudents;
function addStudent(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            db_1.Student.create({
                name: name
            });
        }
        catch (err) {
            console.log("unable to add student");
        }
    });
}
exports.addStudent = addStudent;
function addStudentToBatch(studentId, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_3.MappingStudentBatch.create({
                studentId: studentId,
                batchId: batchId
            });
        }
        catch (err) {
            console.log("unable to add student to batch");
        }
    });
}
exports.addStudentToBatch = addStudentToBatch;
function getStudentWithId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Student.findOne({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            console.log("unable to get student id" + id);
        }
    });
}
exports.getStudentWithId = getStudentWithId;
function getStudentWithBatches(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_2.Batch.findAll({
            include: [{
                    model: db_1.Student,
                    through: {
                        attributes: ['studentId', 'batchId']
                    },
                    where: {
                        id: id
                    }
                }]
        });
    });
}
exports.getStudentWithBatches = getStudentWithBatches;
function getStudentWithBatchId(courseId, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I am here");
        return yield db_1.Student.findAll({
            include: [{
                    model: db_2.Batch,
                    through: {
                        attributes: ['studentId', 'batchId']
                    },
                    where: {
                        id: batchId,
                        courseId: courseId
                    }
                }]
        });
    });
}
exports.getStudentWithBatchId = getStudentWithBatchId;
