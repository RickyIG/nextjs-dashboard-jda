"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function EditPenggunaDialog({
  pengguna,
  open,
  onOpenChange,
  onSave,
}: {
  pengguna: any;
  open: boolean;
  onOpenChange: (val: boolean) => void;
  onSave: (data: any) => void;
}) {
  const [nama, setNama] = useState(pengguna?.nama || "");
  const [email, setEmail] = useState(pengguna?.email || "");
  const [peran, setPeran] = useState(pengguna?.peran || "");

  useEffect(() => {
    if (pengguna) {
      setNama(pengguna.nama);
      setEmail(pengguna.email);
      setPeran(pengguna.peran);
    }
  }, [pengguna]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Pengguna</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <Input value={peran} onChange={(e) => setPeran(e.target.value)} placeholder="Peran" />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button onClick={() => onSave({ nama, email, peran })}>Simpan</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
