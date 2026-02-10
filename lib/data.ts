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
