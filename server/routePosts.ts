import { Request, Response } from "express";
import { ITEMS } from "./db";

let items = ITEMS;
let itemLastIndex = 200;

export function getPosts(req: Request, res: Response) {
  res.status(200).json(items);
}
export function getPostById (req: Request, res: Response) {
  const { id } = req.params;
  const item = findItemById(+id);

  res.status(200).json(item);
}

export function savePostById(req: Request, res: Response) {
  const { id } = req.params;
  const payload = req.body;

  const changedItemIndex = items.findIndex((item: any) => item.id === +id);

  if (changedItemIndex > -1) {
    items[changedItemIndex] = {
      ...items[changedItemIndex],
      ...payload
    }
  }

  res.status(200).json(payload);
}

export function createPost(req: Request, res: Response) {
  const payload = req.body;
  const newId = ++itemLastIndex;

  const newItem = { ...payload, id: newId, userId: 1 };

  items.push(newItem);

  res.status(200).json(newItem);
}

export function deleteItemById(req: Request, res: Response) {
  const { id } = req.params;

  const itemIndex = items.findIndex((item: any) => item.id === +id);

  if (itemIndex > -1) {
    items.splice(itemIndex, 1);
  }


  console.log(`item id=${id} fake deleted: `);

  res.status(200).json(items);
}

export function findItemById(id: number) {
  return Object.values(items as Array<{ id: number }>).find(item => item.id === id);
}
