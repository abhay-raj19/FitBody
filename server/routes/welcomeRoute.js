import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("<h1>Hello Welcome to Fitbody</h1>");
});

export default router;