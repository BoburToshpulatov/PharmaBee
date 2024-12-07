import { StudentProps } from "../types/data.type"




const StudentComponent = (props: StudentProps) => {
  return (
    <div>
        StudentList: 
        {
            props.student.map((value)=>{
                return(
                    <div>
                    <li>{value.name} {value.age}</li>
                    </div>
                )
            })
        }
    </div>
  )
}

export default StudentComponent