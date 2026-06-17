import { bigint, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Stored files table — tracks every file uploaded to S3 via the File Storage feature.
 * The actual bytes live in S3; only metadata + the storage key are persisted here.
 */
export const storedFiles = mysqlTable("stored_files", {
  id: int("id").autoincrement().primaryKey(),
  /** S3 object key returned by storagePut — the only way to reference the file. */
  fileKey: varchar("fileKey", { length: 512 }).notNull(),
  /** Public-facing /manus-storage/{key} URL for use in <img src> or <a href>. */
  url: text("url").notNull(),
  /** Original filename as provided by the uploader. */
  originalName: varchar("originalName", { length: 512 }).notNull(),
  /** MIME type of the file (e.g. image/png, application/pdf). */
  mimeType: varchar("mimeType", { length: 128 }).notNull(),
  /** File size in bytes. */
  size: bigint("size", { mode: "number" }).notNull(),
  /** Category tag for grouping files (e.g. "document", "image", "other"). */
  category: varchar("category", { length: 64 }).default("other").notNull(),
  /** Optional human-readable description or label. */
  description: text("description"),
  /** ID of the user who uploaded the file (nullable for public uploads). */
  uploadedBy: int("uploadedBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type StoredFile = typeof storedFiles.$inferSelect;
export type InsertStoredFile = typeof storedFiles.$inferInsert;
