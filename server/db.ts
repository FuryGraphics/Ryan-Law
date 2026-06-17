import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertStoredFile, InsertUser, storedFiles, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

// ─── File Storage DB Helpers ──────────────────────────────────────────────────

/** Insert a new file record and return it. */
export async function createStoredFile(data: InsertStoredFile) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(storedFiles).values(data);
  // Fetch the just-inserted row by fileKey (unique per upload due to hash suffix)
  const rows = await db
    .select()
    .from(storedFiles)
    .where(eq(storedFiles.fileKey, data.fileKey))
    .limit(1);
  return rows[0];
}

/** List all stored files, newest first. */
export async function listStoredFiles() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(storedFiles).orderBy(desc(storedFiles.createdAt));
}

/** Get a single stored file by its database ID. */
export async function getStoredFileById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const rows = await db.select().from(storedFiles).where(eq(storedFiles.id, id)).limit(1);
  return rows[0] ?? null;
}

/** Delete a stored file record by ID. */
export async function deleteStoredFileById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(storedFiles).where(eq(storedFiles.id, id));
}
