import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createStoredFile, deleteStoredFileById, getStoredFileById, listStoredFiles } from "../db";
import { storagePut } from "../storage";
import { protectedProcedure, router } from "../_core/trpc";

export const filesRouter = router({
  /**
   * Upload a file from the frontend.
   * Expects a base64-encoded data string, original filename, mime type, and size.
   */
  upload: protectedProcedure
    .input(
      z.object({
        base64: z.string().min(1),
        originalName: z.string().min(1).max(512),
        mimeType: z.string().min(1).max(128),
        size: z.number().int().positive(),
        category: z.enum(["document", "image", "other"]).default("other"),
        description: z.string().max(1000).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Decode base64 to a Buffer
      const buffer = Buffer.from(input.base64, "base64");

      // Build a safe storage key: category/filename
      const safeFilename = input.originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
      const relKey = `ryan-law/${input.category}/${safeFilename}`;

      // Upload to S3 via the built-in storage helper
      const { key, url } = await storagePut(relKey, buffer, input.mimeType);

      // Persist metadata to the database
      const record = await createStoredFile({
        fileKey: key,
        url,
        originalName: input.originalName,
        mimeType: input.mimeType,
        size: input.size,
        category: input.category,
        description: input.description ?? null,
        uploadedBy: ctx.user.id,
      });

      return record;
    }),

  /** List all uploaded files, newest first. */
  list: protectedProcedure.query(async () => {
    return listStoredFiles();
  }),

  /** Get a single file by its database ID. */
  getById: protectedProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .query(async ({ input }) => {
      const file = await getStoredFileById(input.id);
      if (!file) throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
      return file;
    }),

  /** Delete a file record from the database by ID. */
  delete: protectedProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ input }) => {
      const file = await getStoredFileById(input.id);
      if (!file) throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
      await deleteStoredFileById(input.id);
      return { success: true };
    }),
});
