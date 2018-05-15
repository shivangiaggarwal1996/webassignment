declare function addCourse(name: string): Promise<void>;
declare function getAllCourses(): Promise<{}[] | undefined>;
declare function getCourseWithId(id: Number): Promise<{}[] | undefined>;
export { getAllCourses, getCourseWithId, addCourse };
