import { PROFILE } from "@/lib/content";

export interface GitHubStats {
  publicRepos: number;
  followers: number;
}

const FALLBACK: GitHubStats = {
  publicRepos: 4,
  followers: 0,
};

interface GitHubUserResponse {
  public_repos?: number;
  followers?: number;
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${PROFILE.githubUser}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 60 * 60 * 12 },
      },
    );

    if (!res.ok) return FALLBACK;

    const data = (await res.json()) as GitHubUserResponse;
    return {
      publicRepos: data.public_repos ?? FALLBACK.publicRepos,
      followers: data.followers ?? FALLBACK.followers,
    };
  } catch {
    return FALLBACK;
  }
}
