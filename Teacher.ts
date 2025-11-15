interface Teacher {
  readonly firstName: string;          
  readonly lastName: string;       
  fullTimeEmployee: boolean;          
  yearsOfExperience?: number;         
  location: string;             

}

const Teacher: Teacher = {
  firstName: "Ada",           
  lastName: "Loveth",      
  fullTimeEmployee: true,     
  location: "Lagos",         
  contract: false          
};

const goodTeacher: Teacher = {
  firstName: "Mohammed",
  lastName: "Mike",
  fullTimeEmployee: false,    
  location: "Lagos",         
  yearsOfExperience: 5,       
  department: "English"          
};

const TeacherList:Teacher[]= [teacher];

