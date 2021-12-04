const  students = [
    {id:42, Name : 'Aditi Roy Chowdhury'},
    {id:25, Name : 'Abhishek Sikdar'},
    {id:35, Name : 'ANI'},
    {id:21, Name : 'Akib Momin'}

];
const nameProperty = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const targetName = element.Name;
    nameProperty.push(targetName);
    
}
console.log(nameProperty);

const studentsName = students.map( s => s.Name);
console.log(studentsName);


const uptoStudent = students.filter(s => s.id> 25 );
console.log(uptoStudent);

const findStudent = students.find(s => s.id >35);
console.log(findStudent);



