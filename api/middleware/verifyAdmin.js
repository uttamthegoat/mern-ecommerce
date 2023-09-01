const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");

const verifyAdmin = asyncHandler(async (req, res, next) => {
  const { isAdmin } = req.user;
  if (isAdmin) {
    next();
  } else {
    throw new CustomError(
      404,
      false,
      "You are not authorised to access this route!"
    );
  }
});

module.exports = verifyAdmin;
