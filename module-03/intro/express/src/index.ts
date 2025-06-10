import express, { Request, Response, Application, NextFunction } from "express";
import userRoute from "./route/user.route";

const PORT = 8080;

const app: Application = express();

// MIDDLEWARE
// pasang express.json jika ingin bisa mengakses request.body
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(
    "Masuk application level middleware, semua route akan mengakses ini terlebih dahulu"
  );
  next();
});

// REQUEST
// url: http://localhost:8080/api
// method: GET

// USER
// BLOG
// url: http://localhost:8080/users
app.use("/users", userRoute);

// query parameter

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
