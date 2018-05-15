declare function addSubject(name: string, courseId: Number): Promise<{} | undefined>;
declare function getSubjects(): Promise<{}[] | undefined>;
declare function getSubjectsOfId(id: Number): Promise<{} | null | undefined>;
declare function getSubjectOfCourse(id: Number): Promise<{}[] | undefined>;
export { addSubject, getSubjects, getSubjectsOfId, getSubjectOfCourse };
