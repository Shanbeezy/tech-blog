const withGuard = (req, res, next) => {
  // If the user is not logged in, redirects the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

const apiGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(403).json({ msg: 'You must login first' });
  } else {
    next();
  }
};

const withoutGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = { withGuard, apiGuard, withoutGuard };
