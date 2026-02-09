export async function fetchMarkdownFile(path: string) {
  const GITHUB_TOKEN = process.env.GITHUB_PAT;
  const OWNER = "premsreeramassistant-dotcom";
  const REPO = "SreeramLifeOS-Data";
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/data/${path}`;

  const response = await fetch(url, {
    headers: GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {},
    next: { revalidate: 300 } // Cache for 5 minutes
  });

  if (!response.ok) return null;
  return response.text();
}

export async function fetchInbox() {
  const GITHUB_TOKEN = process.env.GITHUB_PAT;
  const OWNER = "premsreeramassistant-dotcom";
  const REPO = "SreeramLifeOS-Data";
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/data/task_inbox.json`;

  const response = await fetch(url, {
    headers: GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {},
    next: { revalidate: 60 } // Cache for 1 minute
  });

  if (!response.ok) return { tasks: [] };
  return response.json();
}
