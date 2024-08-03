import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const snippets = await prisma.codeSnippet.findMany();
    res.status(200).json(snippets);
  } else if (req.method === 'POST') {
    const { title, html, css, js, jsx, tailwind, framer } = req.body;
    const newSnippet = await prisma.codeSnippet.create({
      data: { title, html, css, js, jsx, tailwind, framer }
    });
    res.status(201).json(newSnippet);
  } else {
    res.status(405).end();
  }
}
