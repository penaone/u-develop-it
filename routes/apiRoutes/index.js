const express = require('express');
const router = express.Router();
<<<<<<< HEAD

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

=======
router.use(require('./candidateRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./partyRoutes'));
>>>>>>> feature/parties
module.exports = router;