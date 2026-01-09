import fs from "fs";
import path from "path";

let memoryLeads = [];

const filePath = path.join(process.cwd(), "data", "leads.json");

function safeReadFile() {
  try {
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function safeWriteFile(leads) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch {
    return false;
  }
}

export function addFranchiseLead(lead) {
  const item = {
    ...lead,
    id: crypto?.randomUUID?.() || String(Date.now()),
    createdAt: new Date().toISOString()
  };

  memoryLeads.unshift(item);

  // Best-effort persistence (NOTE: serverless may not persist writes)
  const diskLeads = safeReadFile();
  diskLeads.unshift(item);
  safeWriteFile(diskLeads);

  return item;
}

export function listFranchiseLeads(limit = 50) {
  const diskLeads = safeReadFile();
  const combined = [...diskLeads, ...memoryLeads];

  // De-dupe by id
  const seen = new Set();
  const unique = [];
  for (const x of combined) {
    if (!x?.id || seen.has(x.id)) continue;
    seen.add(x.id);
    unique.push(x);
  }

  return unique.slice(0, limit);
}
