'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require('mongoose');
const user_contant_1 = require('./user.contant');
exports.UserSchema = new mongoose_1.Schema(
  {
    password: { type: String, required: true },
    role: { type: String, enum: user_contant_1.role },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
exports.User = (0, mongoose_1.model)('User', exports.UserSchema);
