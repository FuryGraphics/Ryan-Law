import { useRef, useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import {
  Upload,
  Trash2,
  FileText,
  Image,
  File,
  Download,
  Loader2,
  FolderOpen,
  Lock,
} from "lucide-react";

const MAX_FILE_SIZE = 16 * 1024 * 1024; // 16 MB

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip the data:mime/type;base64, prefix
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getCategoryIcon(mimeType: string) {
  if (mimeType.startsWith("image/")) return <Image className="w-5 h-5 text-primary" />;
  if (mimeType === "application/pdf" || mimeType.startsWith("text/"))
    return <FileText className="w-5 h-5 text-primary" />;
  return <File className="w-5 h-5 text-primary" />;
}

function getCategoryBadgeColor(category: string) {
  if (category === "image") return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (category === "document") return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  return "bg-white/5 text-muted-foreground border-white/10";
}

export default function FileManager() {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload state
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"document" | "image" | "other">("other");
  const [description, setDescription] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  // tRPC queries & mutations
  const utils = trpc.useUtils();
  const { data: files, isLoading: filesLoading } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      utils.files.list.invalidate();
      toast.success("File uploaded successfully!");
      setDescription("");
      setUploadProgress(0);
      setIsUploading(false);
    },
    onError: (err) => {
      toast.error(`Upload failed: ${err.message}`);
      setUploadProgress(0);
      setIsUploading(false);
    },
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      utils.files.list.invalidate();
      toast.success("File deleted.");
      setDeleteTarget(null);
    },
    onError: (err) => {
      toast.error(`Delete failed: ${err.message}`);
    },
  });

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File exceeds the 16 MB limit. Please choose a smaller file.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(20);

    try {
      const base64 = await fileToBase64(file);
      setUploadProgress(60);

      await uploadMutation.mutateAsync({
        base64,
        originalName: file.name,
        mimeType: file.type || "application/octet-stream",
        size: file.size,
        category: selectedCategory,
        description: description || undefined,
      });
      setUploadProgress(100);
    } catch {
      // Errors handled in onError
    }

    // Reset input so the same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // Auth guard
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="p-4 bg-card border border-white/5 rounded-sm">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-foreground">
            Authentication Required
          </h1>
          <p className="text-sm text-muted-foreground max-w-sm">
            You must be signed in to access the File Manager. Please log in to continue.
          </p>
          <a
            href={getLoginUrl()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-sm py-3 px-6 rounded-sm transition-all"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="File Manager | Ryan Law LLC"
        description="Securely upload and manage case documents and media files for Ryan Law LLC."
      />
      <Navigation />

      <main className="flex-1 py-24">
        <div className="container flex flex-col gap-12">
          {/* Page Header */}
          <div className="flex flex-col gap-3 items-start">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              Admin Tools
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
              File Manager
            </h1>
            <div className="w-16 h-1 bg-primary" />
            <p className="text-sm text-muted-foreground font-sans max-w-2xl">
              Securely upload, organize, and manage case documents, court filings, and media files.
              All files are stored in encrypted cloud storage and accessible only to authorized users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-card border border-white/5 rounded-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-lg text-foreground flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    Upload File
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                  {/* Category */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-xs font-sans text-muted-foreground uppercase tracking-wider">
                      Category
                    </Label>
                    <Select
                      value={selectedCategory}
                      onValueChange={(v) =>
                        setSelectedCategory(v as "document" | "image" | "other")
                      }
                    >
                      <SelectTrigger className="bg-background border-white/10 text-foreground rounded-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-white/10">
                        <SelectItem value="document">Document / PDF</SelectItem>
                        <SelectItem value="image">Image / Photo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-xs font-sans text-muted-foreground uppercase tracking-wider">
                      Description (optional)
                    </Label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. Client intake form, DUI evidence photo…"
                      className="bg-background border-white/10 text-foreground text-sm rounded-sm resize-none h-20 placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Upload Button */}
                  <div className="flex flex-col gap-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileSelect}
                      accept="*/*"
                    />
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold rounded-sm w-full"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Uploading…
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Choose File to Upload
                        </>
                      )}
                    </Button>
                    {isUploading && (
                      <Progress value={uploadProgress} className="h-1 bg-white/5" />
                    )}
                    <p className="text-[11px] text-muted-foreground font-sans text-center">
                      Max file size: 16 MB
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Files List */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-white/5 rounded-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-lg text-foreground flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    Stored Files
                    {files && (
                      <span className="ml-auto text-xs font-sans text-muted-foreground font-normal">
                        {files.length} {files.length === 1 ? "file" : "files"}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {filesLoading ? (
                    <div className="flex items-center justify-center py-16">
                      <Loader2 className="w-6 h-6 text-primary animate-spin" />
                    </div>
                  ) : !files || files.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
                      <div className="p-4 bg-background border border-white/5 rounded-sm">
                        <FolderOpen className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                      <p className="text-sm text-muted-foreground font-sans">
                        No files uploaded yet. Use the panel on the left to upload your first file.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col divide-y divide-white/5">
                      {files.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-start gap-4 py-4 group"
                        >
                          {/* Icon */}
                          <div className="p-2.5 bg-background border border-white/5 rounded-sm shrink-0 mt-0.5">
                            {getCategoryIcon(file.mimeType)}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0 flex flex-col gap-1">
                            <p className="text-sm font-sans font-medium text-foreground truncate">
                              {file.originalName}
                            </p>
                            {file.description && (
                              <p className="text-xs text-muted-foreground font-sans line-clamp-1">
                                {file.description}
                              </p>
                            )}
                            <div className="flex items-center gap-2 flex-wrap mt-1">
                              <Badge
                                variant="outline"
                                className={`text-[10px] px-2 py-0.5 rounded-sm font-sans ${getCategoryBadgeColor(file.category)}`}
                              >
                                {file.category}
                              </Badge>
                              <span className="text-[11px] text-muted-foreground font-sans">
                                {formatBytes(file.size)}
                              </span>
                              <span className="text-[11px] text-muted-foreground font-sans">
                                {new Date(file.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Download / View"
                              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-sm hover:bg-white/5"
                            >
                              <Download className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => setDeleteTarget(file.id)}
                              title="Delete"
                              className="p-2 text-muted-foreground hover:text-red-400 transition-colors rounded-sm hover:bg-red-500/5"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteTarget !== null} onOpenChange={() => setDeleteTarget(null)}>
        <DialogContent className="bg-card border border-white/10 text-foreground rounded-sm">
          <DialogHeader>
            <DialogTitle className="font-serif text-lg">Delete File?</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm font-sans">
              This action cannot be undone. The file record will be permanently removed from the
              database.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              className="border-white/10 text-foreground rounded-sm"
            >
              Cancel
            </Button>
            <Button
              onClick={() => deleteTarget && deleteMutation.mutate({ id: deleteTarget })}
              disabled={deleteMutation.isPending}
              className="bg-red-600 hover:bg-red-700 text-white rounded-sm"
            >
              {deleteMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
