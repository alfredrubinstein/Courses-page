const user = {
  name: "דני כהן",
  email: "dani.cohen@example.com",
  registeredCourses: [
    { id: 1, name: "קורס רובוטיקה למתחילים", title: "בנה את הרובוט הראשון שלך!", imageUrl:require( "../../Images/1.jpg" )},
    { id: 2, name: "רובוטיקה מתקדמת", title: "תכנות ותנועה מתקדמת לרובוטים", imageUrl:require( "../../Images/2.jpg") },
    { id: 3, name: "רובוטיקה וחיישנים", title: "למד על חיישנים ורובוטים אינטראקטיביים", imageUrl: require("../../Images/3.jpg") },
  ],
  stats: [
    { id: 1, value: 5, label: "קורסים שהושלמו" },
    { id: 2, value: 2, label: "קורסים בהתקדמות" },
    { id: 3, value: 1, label: "תעודות שהתקבלו" },
  ],
  notifications: [
    { id: 1, message: "עדכון חדש בקורס רובוטיקה למתחילים" },
    { id: 2, message: "תעודה זמינה עבור הקורס רובוטיקה מתקדמת" },
    { id: 3, message: "קורס חדש זמין: בניית רובוטים עם Arduino" },
  ],
};

export default user;
