import { ApiInstance } from "./config";

export const ApiController = {
    exampleApi: () =>
        ApiInstance.get<Array<{ _id: string; name: string }>>("/example").then((res) =>
            res.data.map((exam) => ({ name: exam.name })),
        ),
};