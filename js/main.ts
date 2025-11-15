
interface Teacher {
  readonly firstName: string;          
  readonly lastName: string;       
  fullTimeEmployee: boolean;          
  yearsOfExperience?: number;         
  location: string;             

  [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'Emmanuel',
  fullTimeEmployee: false,
  lastName: 'Trump',
  location: 'United State',
  contract: false,
};

const TeachersList:Teacher[]= [teacher];
