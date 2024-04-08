import express from 'express';
import { Result } from '../utils/Result';

import { UserRepo } from '../model/UserRepo';
import { User } from 'interface/UserInterface';

export class UserController {
  private userRepo: UserRepo;
  constructor() {
    this.userRepo = new UserRepo();
  }

  public insertUser = async (req: express.Request, res: express.Response) => {
    try{
      const body: User = req.body;
      this.userRepo.insertUser(body);
      res.status(200).json(Result.success());
    }catch(e){
      res.status(400).json(Result.error(e.message));
    }
  }
}