export const kv = await Deno.openKv();

export interface Store {
  ownerId: number;
  name: string;
  products: { name: string; price: number }[];
  createdAt: string;
}


