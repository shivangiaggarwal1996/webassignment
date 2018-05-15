declare function addTeacher(name: string, subjectId: Number): Promise<{} | undefined>;
declare function getTeachers(): Promise<{}[] | undefined>;
declare function getTeacherWithSubjectId(id: Number): Promise<{}[] | undefined>;
declare function getTeacherWithId(id: Number): Promise<{} | null | undefined>;
declare function getTeacherWithBatches(id: Number): Promise<{}[] | undefined>;
declare function getTeachersBelongingToBatchId(courseId: Number, batchId: Number): Promise<{}[] | undefined>;
export { addTeacher, getTeachers, getTeacherWithSubjectId, getTeacherWithId, getTeacherWithBatches, getTeachersBelongingToBatchId };
