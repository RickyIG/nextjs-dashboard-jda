"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EditPenggunaDialog } from "@/components/user/EditPenggunaDialog";
import { DeletePenggunaDialog } from "@/components/user/DeletePenggunaDialog";

export default function PenggunaPage() {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchData = async () => {
    const res = await fetch("/api/penggunas");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (updated: any) => {
    await fetch(`/api/penggunas/${selected.id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
    });
    setEditOpen(false);
    fetchData();
  };

  const handleDelete = async () => {
    await fetch(`/api/penggunas/${selected.id}`, { method: "DELETE" });
    setDeleteOpen(false);
    fetchData();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Manajemen Pengguna</h1>
      {data.map((p) => (
        <div key={p.id} className="flex justify-between p-4 border rounded-md">
          <div>
            <div className="font-bold">{p.nama}</div>
            <div className="text-sm text-muted-foreground">{p.email}</div>
          </div>
          <div className="space-x-2">
            <Button onClick={() => { setSelected(p); setEditOpen(true); }}>Edit</Button>
            <Button variant="destructive" onClick={() => { setSelected(p); setDeleteOpen(true); }}>Hapus</Button>
          </div>
        </div>
      ))}

      {selected && (
        <>
          <EditPenggunaDialog
            pengguna={selected}
            open={editOpen}
            onOpenChange={setEditOpen}
            onSave={handleUpdate}
          />
          <DeletePenggunaDialog
            open={deleteOpen}
            onOpenChange={setDeleteOpen}
            onConfirm={handleDelete}
          />
        </>
      )}
    </div>
  );
}
