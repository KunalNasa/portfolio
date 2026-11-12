import { GitHubCalendar } from "react-github-calendar";

export default function GithubStats() {
  return (
    <div style={{ marginBlock: "3.25rem" }}>
      <GitHubCalendar
        username="KunalNasa"
        blockSize={12}
        blockMargin={5}
        fontSize={14}
        showWeekdayLabels
        theme={{
          light: ["#b3b3b3", "#e8bba6", "#d58c6c", "#b05027", "#783419"],
          dark: ["#b3b3b3", "#75432f", "#a85b39", "#d17b53", "#efaa83"],
        }}
      />
    </div>
  );
}
