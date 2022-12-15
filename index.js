module.exports = {
  success: (response = 'Success!', json = {}) => ({
    status: true,
    response,
    ...json
  }),
  err: (response = 'Error!', json = {}) => ({
    status: false,
    response,
    ...json
  })
}