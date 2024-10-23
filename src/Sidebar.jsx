import PropTypes from "prop-types";
const Sidebar = ({ recipes }) => {
  return (
    <div className="w-1/3 border rounded-2xl ml-6">
      <div className="overflow-x-auto">
        <h3 className="font-bold text-2xl mb-6 mt-4 border-b w-56 text-center mx-auto py-2">
          Want to Cook : {recipes.length}
        </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-medium text-gray-400">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td className="text-gray-500">{recipe.recipe_name}</td>
                <td className="text-gray-500">{recipe.preparing_time}</td>
                <td className="text-gray-500">{recipe.calories}</td>
                <td>
                  <button className=" bg-primary px-2 py-1 font-semibold rounded-full">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  recipes: PropTypes.array.isRequired,
};
export default Sidebar;
