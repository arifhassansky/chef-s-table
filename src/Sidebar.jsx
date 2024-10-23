import PropTypes from "prop-types";
const Sidebar = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="w-1/3">
      <h3>Sidebar</h3>
    </div>
  );
};
Sidebar.propTypes = {
  recipes: PropTypes.array.isRequired,
};
export default Sidebar;
