const Student = ({name,age,isMarried}) => {
  return (
    <div className="student">
       <table>
        <tr>
            <th>Name</th>
            <td>{name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{age}</td>
        </tr>
        <tr>
            <th>isMarried</th>
            <td>{isMarried ? "Yes" : "No"}</td>
        </tr>
       </table>
    </div>
  )
}

export default Student
