import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryservice = new ListCategoryService();

        const category = await listCategoryservice.execute();

        return res.json(category);

    }
}
export{ ListCategoryController }