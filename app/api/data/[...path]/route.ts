import { NextResponse } from 'next/server';
import { fetchMarkdownFile } from '../../../../lib/data';

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join('/');
  const content = await fetchMarkdownFile(path);
  
  if (!content) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown' }
  });
}
