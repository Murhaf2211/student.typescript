type Grades = number | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Subject = {
    name: string;
    grades: Grades[]
}
type Student = {
    firstname: string
    lastname: string
    age: number
    Subjects: Subject[]
}
const stundent1 : Student ={
    firstname: 'Jonny',
    lastname: 'Dieb',
    age: 18,
    Subjects: [
        {name:"Sport", grades:[2,"A", 4]},
        {name:"Kunst", grades:[3,undefined, 2]},
        {name:"Mathe", grades:[undefined,"B", 5]}
    ]

}
 const stundent2 : Student ={
     firstname: 'Tom',
     lastname: 'Mann',
     age: 18,
     Subjects: [
         {name:"Sport", grades:[1,"C", 3]},
         {name:"Kunst", grades:[undefined,undefined, 6]},
         {name:"Mathe", grades:[5,"F", 2]}
     ]

 }
 const stundent3 : Student ={
     firstname: 'Sara',
     lastname: 'Breit',
     age: 18,
     Subjects: [
         {name:"Sport", grades:[2,"A", 4]},
         {name:"Kunst", grades:[3,undefined, 2]},
         {name:"Mathe", grades:[undefined,"B", 5]}
     ]

 }
function StudentInfo(student: Student): void {
    console.log("Student Name : " + student.firstname, student.lastname ," , ","Age : " + student.age);
    console.log("=".repeat(30));
    console.log("Note : " )
    student.Subjects.forEach(subject => {
        const formattedGrades = subject.grades.map(grade => grade === undefined ? "*" : grade);
        console.log(`${subject.name}: ${formattedGrades.join(",")}`);
    });
    console.log("#".repeat(30));
}

 allStudents: [StudentInfo(stundent1), StudentInfo(stundent2), StudentInfo(stundent3)]

function convertGrade(grade: Grades): number | undefined {
    if (typeof grade === "number") {
        return grade;
    } else if (grade === "A") {
        return 1;
    } else if (grade === "B") {
        return 2;
    } else if (grade === "C") {
        return 3;
    } else if (grade === "D") {
        return 4;
    } else if (grade === "E") {
        return 5;
    } else if (grade === "F") {
        return 6;
    }
    return undefined;
}
function averageGrade(student: Student): number {
    let totalGrades = 0;
    let count = 0;

    student.Subjects.forEach(subject => {
        subject.grades.forEach(grade => {
            const numericGrade = convertGrade(grade);
            if (numericGrade !== undefined) {
                totalGrades += numericGrade;
                count++;
            }
        });
    });

    return count === 0 ? 0 : totalGrades / count;
}
console.log("the Average grade of student : " + stundent1.firstname ,stundent1.lastname + ", is : "+averageGrade(stundent1));
console.log("the Average grade of student : " + stundent2.firstname ,stundent2.lastname + ", is : "+averageGrade(stundent2));
console.log("the Average grade of student : " + stundent3.firstname ,stundent3.lastname + ", is : "+averageGrade(stundent3));

