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
function addSubject(name, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Subject.create({
                name: name,
                courseId: courseId
            });
        }
        catch (err) {
            console.log("unable to add subject");
        }
    });
}
exports.addSubject = addSubject;
function getSubjects() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Subject.findAll();
        }
        catch (err) {
            console.log("unable to get subjects ");
        }
    });
}
exports.getSubjects = getSubjects;
function getSubjectsOfId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Subject.findOne({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            console.log("unable to get subject with Id ");
        }
    });
}
exports.getSubjectsOfId = getSubjectsOfId;
function getSubjectOfCourse(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Subject.findAll({
                where: {
                    courseId: id
                }
            });
        }
        catch (err) {
            console.log("unable to get subject with Id ");
        }
    });
}
exports.getSubjectOfCourse = getSubjectOfCourse;
