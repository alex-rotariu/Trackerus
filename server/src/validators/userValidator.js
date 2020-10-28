const { body } = require("express-validator");
const moment = require("moment");

const User = require("../models/User");

const userSignInRules = () => {
  return [
    body("username")
      .not()
      .isEmpty()
      .trim()
      .withMessage("Username must not be empty"),
    body("username").custom(async (username) => {
      const user = await User.findOne({ username });
      if (!user) {
        return Promise.reject("User does not exist");
      } else {
        return true;
      }
    }),
    body("password").custom(
      async (
        password,
        {
          req: {
            body: { username }
          }
        }
      ) => {
        const user = await User.findOne({ username });
        if (!user) return true;
        try {
          await user.comparePassword(password);
          return true;
        } catch (err) {
          return Promise.reject("Incorrect password");
        }
      }
    )
  ];
};

const userSignUpRules = () => {
  return [
    body("username")
      .not()
      .isEmpty()
      .trim()
      .withMessage("Username must not be empty"),
    body("username").custom(async (username) => {
      await User.findOne({ username }).then((user) => {
        if (user) {
          return Promise.reject("Username already in use");
        }
      });
    }),
    body("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("Invalid email")
      .custom(
        async (value) =>
          await User.findOne({ email: value }).then((user) => {
            if (user) {
              return Promise.reject("E-mail already in use");
            }
          })
      ),
    body("fullName").trim().isAlpha().withMessage("Name must pe alphabetic"),
    body("dateOfBirth").custom((value) => {
      if (!moment(value, "DD-MM-YYYY").isValid()) {
        return Promise.reject("Invalid date");
      } else return true;
    }),
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be between 6 and 20 characters."),
    body("confirmPassword")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be between 6 and 20 characters.")
      .custom(
        (
          confirmPassword,
          {
            req: {
              body: { password }
            }
          }
        ) => {
          if (confirmPassword !== password)
            return Promise.reject("Passwords must match");
          else return true;
        }
      )
  ];
};

module.exports = { userSignInRules, userSignUpRules };
