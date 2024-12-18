import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router();

appRouter.use("/users", userRoutes); //domain/api/v1/users
appRouter.use("/chats", chatRoutes); //domain/api/v1/chats


export default appRouter;