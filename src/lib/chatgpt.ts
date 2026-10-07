import { DATA } from "@/data/resume";

const PLACEHOLDERS = new Set(["", "Location", "Month Year", "Year", "#"]);

const clean = (value: string | undefined) =>
  value && !PLACEHOLDERS.has(value) ? value : "";

const stripMarkdown = (text: string) =>
  text.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

const joinParts = (parts: (string | undefined)[], separator = ", ") =>
  parts.map(clean).filter(Boolean).join(separator);

export function buildResumeContext(): string {
  const lines: string[] = [];

  lines.push(`Name: ${DATA.name}`);
  lines.push(`About: ${stripMarkdown(DATA.summary)}`);

  lines.push("", "Skills: " + DATA.skills.map((skill) => skill.name).join(", "));

  lines.push("", "Work experience:");
  for (const job of DATA.work) {
    const where = joinParts([job.location]);
    lines.push(
      `- ${job.title} at ${job.company}${where ? ` (${where})` : ""}, ${job.start} - ${job.end}. ${job.description}`
    );
  }

  lines.push("", "Education:");
  for (const school of DATA.education) {
    const years = joinParts([school.start, school.end], " - ");
    lines.push(`- ${school.degree}, ${school.school}${years ? `, ${years}` : ""}`);
  }

  lines.push("", "Projects:");
  for (const project of DATA.projects) {
    lines.push(
      `- ${project.title} (${project.dates}): ${stripMarkdown(project.description)} Tech: ${project.technologies.join(", ")}. Links: ${project.links.map((link) => link.href).join(", ")}`
    );
  }

  lines.push("", "Hackathons and competitions:");
  for (const event of DATA.hackathons) {
    const where = joinParts([event.location]);
    lines.push(
      `- ${event.title}, ${event.dates}${where ? `, ${where}` : ""}. ${event.description}`.trim()
    );
  }

  const social = DATA.contact.social;
  lines.push(
    "",
    "Links:",
    `- GitHub: ${social.GitHub.url}`,
    `- LinkedIn: ${social.LinkedIn.url}`,
    `- LeetCode: ${social.LeetCode.url}`,
    `- Email: ${DATA.contact.email}`
  );

  return lines.join("\n");
}

export function buildChatGPTUrl(): string {
  const prompt = [
    `You are an assistant that answers questions about ${DATA.name}, using only the resume below.`,
    "If something is not in the resume, say you don't know instead of guessing.",
    "",
    "RESUME",
    buildResumeContext(),
    "",
    "Reply with a short greeting, then wait for my question.",
  ].join("\n");

  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}
