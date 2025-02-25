// Higher order function => function which can accept func as parameter and return as well.
const asyncHandler = (fn) => async () => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
