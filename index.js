module.exports = {
  success: (response, json = {}) => ({
    status: true,
    response: response != null ? response : 'Success!',
    ...json
  }),
  err: (response, json = {}) => ({
    status: false,
    response: response != null ? response : 'Error!',
    ...json
  })
}