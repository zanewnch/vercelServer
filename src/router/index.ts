import express from "express";
import User from "./UserRouter";
import test from "./testQuick";
import SupermarketSale from './SupermarketSaleRouter';
import UserMongoDBRouter from './UserMongoDBRouter';

const router = express.Router();

export default (): express.Router => {
  test(router);
  User(router);
  SupermarketSale(router);
  UserMongoDBRouter(router);

  return router;
};
