// API routes placeholder
// Potrai usare questo file per future API routes se necessario
// Per esempio: form di contatto, gestione immagini, etc.

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ message: "API route placeholder" });
}