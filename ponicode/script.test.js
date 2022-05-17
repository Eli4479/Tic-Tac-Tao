const rewire = require("rewire")
const script = rewire("../script")
const check_win = script.__get__("check_win")
