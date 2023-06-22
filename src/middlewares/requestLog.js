export default (req, res, next) => {
  console.log("URL REQUEST = " + req.url)
  next()
}