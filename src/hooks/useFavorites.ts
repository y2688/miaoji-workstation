import { useState, useEffect, useCallback } from "react";
import { db, type Favorite } from "../db";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const load = useCallback(async () => {
    const items = await db.favorites.orderBy("createdAt").reverse().toArray();
    setFavorites(items);
  }, []);

  useEffect(() => { load(); }, [load]);

  const addFavorite = async (type: Favorite["type"], itemId: number, itemData: string) => {
    const existing = await db.favorites.where({ type, itemId }).first();
    if (existing) return;
    await db.favorites.add({ type, itemId, itemData, createdAt: Date.now() });
    await load();
  };

  const removeFavorite = async (id: number) => {
    await db.favorites.delete(id);
    await load();
  };

  const isFavorited = async (type: Favorite["type"], itemId: number) => {
    const item = await db.favorites.where({ type, itemId }).first();
    return !!item;
  };

  const getByType = (type: Favorite["type"]) =>
    favorites.filter((f) => f.type === type);

  return { favorites, addFavorite, removeFavorite, isFavorited, getByType, reload: load };
}
