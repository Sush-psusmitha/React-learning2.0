import PropTypes from "prop-types";

const Student = ({ name = "No Name", age = 0, isMarried = false }) => {
  return (
    <div className="student">
      <table border="1" cellPadding="5">
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

// ✅ Prop type validation still works
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

export default Student;
