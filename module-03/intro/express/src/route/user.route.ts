import { Router, Request, Response, NextFunction } from "express";
const router = Router();

router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Masuk ke middleware METHOD GET /users");
    next();
  },
  (req: Request, res: Response) => {
    const { page, access_token } = req.query;

    res.status(200).json({
      status: "OK",
      data: [
        {
          id: 1,
          name: "budi",
        },
        {
          id: 2,
          name: "sara",
        },
        {
          id: 3,
          name: "john",
        },
      ],
      filter: {
        page,
        access_token,
      },
    });
  }
);

// Route Parameter

router.get("/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;

  res.status(200).json({
    status: "OK",
    data: {
      id: 1,
      name: "budi",
    },
  });
});

// REQ BODY
// url: http://localhost:8080/users

router.post("/", (req: Request, res: Response) => {
  const { id, name } = req.body;

  res.status(200).json({
    status: "OK",
    data: {
      id,
      name,
    },
  });
});

router.patch("/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name } = req.body;

  res.status(200).json({
    status: "OK",
    data: {
      id: userId,
      name,
    },
  });
});

export default router;
