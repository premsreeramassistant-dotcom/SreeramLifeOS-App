export async function fetchMarkdownFile(path: string) {
  const GITHUB_TOKEN = process.env.GITHUB_PAT;
  const OWNER = "premsreeramassistant-dotcom";
  const REPO = "SreeramLifeOS-Data";
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/data/${path}`;

  const response = await fetch(url, {
    headers: GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {},
    next: { revalidate: 60 }
  });

  if (!response.ok) return null;
  return response.text();
}

export async function fetchJSONData(filename: string) {
  const GITHUB_TOKEN = process.env.GITHUB_PAT;
  const OWNER = "premsreeramassistant-dotcom";
  const REPO = "SreeramLifeOS-Data";
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/data/${filename}`;

  try {
    const response = await fetch(url, {
      headers: GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {},
      next: { revalidate: 60 }
    });
    if (!response.ok) return null;
    return response.json();
  } catch (e) {
    return null;
  }
}

export function parseMarkdownTable(markdown: string) {
  const lines = markdown.split('\n');
  const tableStart = lines.findIndex(l => l.includes('|') && l.includes('---'));
  if (tableStart === -1) return [];

  const headers = lines[tableStart - 1].split('|').map(h => h.trim()).filter(Boolean);
  const dataLines = lines.slice(tableStart + 1);

  return dataLines
    .filter(l => l.includes('|'))
    .map(line => {
      const values = line.split('|').map(v => v.trim()).filter(Boolean);
      const row: any = {};
      headers.forEach((header, i) => {
        row[header.toLowerCase()] = values[i];
      });
      return row;
    });
}
